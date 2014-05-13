(ns om-rte.editor
  (:require [om.core         :as om  :include-macros true]
            [om.dom          :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!] ]
            [hickory.core    :as h                       ]
            [hickory.render  :as hr                      ])
  (:require-macros [cljs.core.async.macros :as a]))


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

(defn rte-editor [data owner {:as opts
                             :keys [ cmd-ch throttle css-prefix ]
                             :or   { throttle 20
                                     css-prefix "om-rte" }}]
  (reify
    om/IDisplayName
    (display-name [_] "rte-editor")

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
