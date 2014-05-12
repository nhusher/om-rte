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

(def app-state (atom {:content (map h/as-hiccup (h/parse-fragment text))
                      :cmd-ch (chan)}))

(def dom-events [ "cut"       "paste"
                  "click"     "dblclick"
                  "focusin"   "focusout"
                  "keydown"   "keypress" "keyup"
                  "mousedown" "mouseup"  "click" ])

(defn- make-editor [css-prefix events evt-callback content]
  (let [n (.createElement js/document "div")]
    (doseq [e events] (.addEventListener n e evt-callback))
    (.setAttribute n "class" (str css-prefix "editor"))
    (.setAttribute n "contentEditable" true)
    (set! (.-innerHTML n) (hr/hiccup-to-html content))
    n))



(defn rte-field [{:as   args
                  :keys [ cmd-ch content css-prefix throttle ]
                  :or   { content    '()
                          css-prefix "om-rte-"
                          throttle   20 }}
                 owner]
  (reify
    om/IInitState
    (init-state [_] { :focused   false })

    om/IDidMount
    (did-mount [_]
               (let [parent    (om/get-node owner)
                     update-ch (chan (a/sliding-buffer 1))
                     update-fn (fn [_] (this-as el (put! update-ch (.-innerHTML el))))

                     editor    (make-editor css-prefix
                                            dom-events
                                            update-fn
                                            (hr/hiccup-to-html content))]

                 (if (nil? cmd-ch)
                   (throw js/Error "Command channel disconnected!"))

                 (a/go-loop []
                            (let [[command arg] (<! cmd-ch)]
                              ;; TODO: only exec command if the current box
                              ;; is focused. This means that it should only
                              ;; exec the command if the current selection
                              ;; marque is in the current box
                              ;;
                              ;; TODO: translate hyphenated command to real
                              ;; html command
                              (.execCommand js/document (name command) arg)
                              (recur)))

                 (a/go-loop []
                            (let [edn (map h/as-hiccup (h/parse-fragment (<! update-ch)))]
                              (om/set-state! owner :focused (= (.-activeElement js/document) editor))
                              (om/update! args :content edn)
                              (<! (a/timeout throttle))
                              (recur)))

                 (om/set-state! owner :edit-node editor)
                 (.appendChild parent editor)))

    om/IWillUnmount
    (will-unmount [_]
                  (let [editor (om/get-state owner :edit-node)]
                    (-> editor .parentNode .removeChild editor)))

    om/IRenderState
    (render-state [_ s]
                  (dom/div #js { :className (str (if (:focused s) "focused " "not-focused ")
                                                 (str css-prefix "container")) } nil))))


(defn rte-vis [data owner]
  (reify
    om/IRender
    (render [_] (dom/div #js { :className "om-rte-visualizer" } (pr-str (:content data))))))


(defn rte-ui [{ :as data
                :keys [content css-class cmd-ch throttle]
                :or { content    '()
                      css-class "om-rte"
                      cmd-ch     (chan)
                      throttle   20 } } owner]
  (reify
    om/IInitState
    (init-state [_] { })

    om/IRenderState
    (render-state [_ { :keys [cmd-ch] }]
            (dom/div #js { :className css-class }
                     (om/build rte-field { :content    content
                                           :css-prefix (str css-class "-")
                                           :cmd-ch     cmd-ch
                                           :throttle   throtte })
                     (om/build rte-vis data)))))


(om/root rte-ui app-state {:target (. js/document (getElementById "app"))})

