(ns om-rte.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!]]
            [hickory.core :as h]
            [hickory.render :as hr ])
  (:require-macros [cljs.core.async.macros :as a]))

(enable-console-print!)

(def app-state (atom {:content (map h/as-hiccup
                                    (h/parse-fragment "<div>
                                                        <a href='http://www.google.com'>hello</a>
                                                       </div>
                                                       <div><b>This is in bold</b></div>
                                                       <div><i>And this is italics.</i></div>"))
                      :update-ch (chan)}))



(defn- log [ & args]
  (.apply (.-log js/console) js/console (clj->js args))
  nil)

(def dom-events [ "cut"       "paste"
                  "click"     "dblclick"
                  "focusin"   "focusout"
                  "keydown"   "keypress" "keyup"
                  "mousedown" "mouseup"  "click" ])

(defn rte [args owner]
  (reify
    om/IInitState
    (init-state [_] { :data (:content args)
                      :editor (doto (.createElement js/document "div")
                                    (.setAttribute "contentEditable" true)) })

    om/IDidMount
    (did-mount [_]
               (let [update (chan (a/sliding-buffer 1))
                     data   (om/get-state owner :data)
                     editor (om/get-state owner :editor)
                     parent (om/get-node owner)
                     on (fn [n evt cb] (.addEventListener n evt cb))]

                 (a/go-loop []
                            (let [edn (map h/as-hiccup (h/parse-fragment (<! update)))]
                              (om/set-state! owner :data edn)
                              (om/update! args :content edn)
                              (<! (a/timeout 20))
                              (recur)))

                 (set! (.-innerHTML editor) (hr/hiccup-to-html data))
                 (.appendChild parent editor)
                 (doseq [evt dom-events]
                   (on editor evt (fn [_] (put! update (.-innerHTML editor)))))))

    om/IWillUnmount
    (will-unmount [_]
                  (let [editor (om/get-state owner :editor)]
                    (-> editor .parentNode .removeChild editor)))

    om/IRenderState
    (render-state [_ s]
            (dom/div nil nil))))


(defn vis [data owner]
  (reify
    om/IRender
    (render [_] (dom/div #js { :style #js { :font-family "consolas" } } (pr-str (:content data))))))

(om/root rte app-state {:target (. js/document (getElementById "app"))})
(om/root vis app-state {:target (. js/document (getElementById "vis"))})
