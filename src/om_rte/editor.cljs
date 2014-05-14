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

(defn- make-editor [css-prefix sel-ch content]
  (let [n (.createElement js/document "div")]
    (.setAttribute n "class" (str css-prefix "-editor"))
    (.setAttribute n "contentEditable" true)
    (set! (.-innerHTML n) (hr/hiccup-to-html content))
    n))

(defn rte-selected? [owner]
  (let [n   (om/get-state owner :edit-node)
        sel (js/getSelection)
        b   (.-body js/document)]

    (loop [p (.-anchorNode sel)]
      (if (= n p)
        true
        (if (or (= b p) (nil? p))
          false
          (recur (.-parentNode p)))))))

(defn rte-editor [data owner]
  (reify
    om/IDisplayName
    (display-name [_] "rte-editor")

    om/IInitState
    (init-state [_] { :throttle 20
                      :css-prefix "editor"
                      :sel-ch (chan (a/dropping-buffer 1))
                      :cmd-ch (chan) })

    om/IDidMount
    (did-mount [_]
               (let [{:keys [throttle
                             cmd-ch
                             sel-ch
                             css-prefix]} (om/get-state owner)
                     parent (om/get-node owner)
                     editor (make-editor
                             css-prefix
                             sel-ch
                             (hr/hiccup-to-html (:content data)))]
                 (a/go
                  (loop []
                    (let [[command arg] (<! cmd-ch)]
                      (when (rte-selected? owner)
                        (.execCommand js/document command false arg)
                        (recur))
                      (recur))))

                 (a/go
                  (loop []
                    (let [edn (map h/as-hiccup (h/parse-fragment (.-innerHTML editor)))]
                      (om/update! data :content edn)
                      (<! (a/timeout throttle))
                      (recur))))

                 (om/set-state! owner :edit-node editor)
                 (.appendChild parent editor)))

    om/IWillUnmount
    (will-unmount [_]
                  (let [editor (om/get-state owner :edit-node)]
                    (-> editor .parentNode .removeChild editor)))

    om/IRenderState
    (render-state [_ {:keys [css-prefix]}]
            (dom/div #js { :className (str css-prefix "-container") } nil))))
