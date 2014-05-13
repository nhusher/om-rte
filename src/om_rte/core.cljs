(ns om-rte.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!]]
            [hickory.core :as h]
            [hickory.render :as hr ])
  (:require-macros [cljs.core.async.macros :as a]))

(enable-console-print!)

(def text "<div><a href='http://www.google.com'>hello</a></div>
           <div><b>This is in bold</b></div>
           <div><i>And this is italics.</i></div>")

(def app-state (atom {:content (map h/as-hiccup (h/parse-fragment text)) }))

(def dom-events [ "cut"       "paste"
                  "click"     "dblclick"
                  "focusin"   "focusout"
                  "keydown"   "keypress" "keyup"
                  "mousedown" "mouseup"  "click" ])


(defn- make-editor [css-prefix events evt-callback content]
  (let [n (.createElement js/document "div")]
    (doseq [e events] (.addEventListener n e evt-callback))
    (.setAttribute n "class" (str css-prefix "-editor"))
    (.setAttribute n "contentEditable" true)
    (set! (.-innerHTML n) (hr/hiccup-to-html content))
    n))

(defn rte-selected? [owner]
  (let [n   (om/get-state owner :edit-node)
        sel (js/getSelection)
        b   (.-body js/document)]

    (loop [p (.-extentNode sel)]
      (if (= n p)
        true
        (if (or (= b p) (nil? p))
          false
          (recur (.-parentNode p)))))))

(defn rte-field [data owner {:as opts
                             :keys [ cmd-ch throttle css-prefix ]
                             :or   { throttle 20
                                     css-prefix "om-rte" }}]
  (reify
    om/IDisplayName
    (display-name [_] "rte-field")

    om/IDidMount
    (did-mount [_]
               (let [parent (om/get-node owner)
                     upd-ch (chan (a/sliding-buffer 1))
                     upd-fn (fn [n] (put! upd-ch (.-innerHTML n)))
                     editor (make-editor css-prefix dom-events
                                         (fn [_] (this-as el (upd-fn el)))
                                         (hr/hiccup-to-html (:content data)))]

                 (if (nil? cmd-ch)
                   (throw (js/Error "Command channel disconnected!")))

                 (a/go
                  (loop []
                    (let [[command arg] (<! cmd-ch)]
                      (when (rte-selected? owner)
                        (.execCommand js/document command false arg)
                        (recur))
                      (recur))))

                 (a/go
                  (loop []
                    (let [edn (map h/as-hiccup (h/parse-fragment (<! upd-ch)))]
                      (om/update! data :content edn)
                      (<! (a/timeout throttle))
                      (recur))))

                 (om/set-state! owner :edit-node editor)
                 (.appendChild parent editor)))

    om/IWillUnmount
    (will-unmount [_]
                  (let [editor (om/get-state owner :edit-node)]
                    (-> editor .parentNode .removeChild editor)))

    om/IRender
    (render [_]
            (dom/div #js { :className (str css-prefix "-container") } nil))))

(defn rte-vis [data owner]
  (reify
    om/IDisplayName
    (display-name [_] "rte-visualizer")

    om/IRender
    (render [_] (dom/div #js { :className "om-rte-visualizer" } (pr-str (:content data))))))

(def def-controls [{ :icon "fa-bold"       :label "Bold"      :action #(put! % ["bold"])                     }
                   { :icon "fa-italic"     :label "Italic"    :action #(put! % ["italic"])                   }
                   { :icon "fa-underline"  :label "Underline" :action #(put! % ["underline"])                }
                   { :icon "fa-quote-left" :label "Quote"     :action #(put! % ["formatblock" "blockquote"]) }
                   { :icon "fa-link"       :label "Link"      :action #(prn %)                               }])

(defn rte-controls [data owner {:as   opts
                                :keys [ cmd-ch
                                        css-prefix
                                        controls ]

                                :or   { css-prefix "om-rte"
                                        controls   def-controls }}]
  (reify
    om/IDisplayName
    (display-name [_] "rte-controls")

    om/IRender
    (render [_]
            (apply dom/div #js { :className (str css-prefix "-controls") }
                   (map (fn [{:keys [icon label action]}]
                          (dom/button #js { :className "pure-button"
                                            :title label
                                            :onClick (fn [_] (action cmd-ch)) }
                                      (dom/i #js { :className (str "fa " icon) })))

                        controls)))))

(defn rte-ui
  ([data owner] (rte-ui data owner nil))
  ([data owner {:as   opts
                :keys [ cmd-ch
                        css-prefix
                        throttle ]

                :or   { cmd-ch     (chan)
                        css-prefix "om-rte"
                        throttle   20 }}]
   (reify
     om/IDisplayName
     (display-name [_] "rte-ui")

     om/IRender
     (render [_]
             (dom/div #js { :className css-prefix }
                      (om/build rte-controls data
                                {:opts { :cmd-ch     cmd-ch
                                         :css-prefix css-prefix }})

                      (om/build rte-field data
                                {:opts { :cmd-ch     cmd-ch
                                         :css-prefix css-prefix
                                         :throttle   throttle }})

                      (om/build rte-vis data))))))

(. js/document
   (addEventListener "DOMContentLoaded"
                     (fn [_] (om/root rte-ui
                                      app-state
                                      {:target (. js/document (getElementById "app"))
                                       :opts { :cmd-ch (chan) }}))))

