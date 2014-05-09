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
                      :cmd-ch (chan)}))



(defn- log [ & args]
  (.apply (.-log js/console) js/console (clj->js args))
  nil)

(def dom-events [ "cut"       "paste"
                  "click"     "dblclick"
                  "focusin"   "focusout"
                  "keydown"   "keypress" "keyup"
                  "mousedown" "mouseup"  "click" ])

(defn rte [{:keys [cmd-ch content] :as args} owner]
  (reify
    om/IInitState
    (init-state [_] { :data content
                      :focused false
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
                            (let [[command arg] (<! cmd-ch)]
                              ;; TODO: only exec command if the current box is focused
                              (.execCommand js/document (name command) arg)
                              (prn command arg)
                              (recur)))

                 (a/go-loop []
                            (let [edn (map h/as-hiccup (h/parse-fragment (<! update)))]
                              (om/set-state! owner :focused (= (.-activeElement js/document) editor))
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
                  (dom/div #js { :className (if (:focused s) "focused" "not-focused")
                                 :style #js { :padding "1rem" } } nil))))


(defn vis [data owner]
  (reify
    om/IRender
    (render [_] (dom/div #js { :style #js { :font-family "consolas"
                                            :border-top "1px dotted #ccc"
                                            :padding "1rem" } } (pr-str (:content data))))))

(defn rte-ui [{:keys [cmd-ch] :as data} owner]
  (reify
    om/IRender
    (render [_]
            (dom/div #js { :className "rte-ui" }
                     (dom/div nil
                              (dom/button #js { :type "button"
                                                :className "pure-button pure-button-primary"
                                                :onClick (fn [_] (put! cmd-ch [:subscript])) } "Sub")
                              " "
                              (dom/button #js { :type "button"
                                                :className "pure-button pure-button-primary"
                                                :onClick (fn [_] (put! cmd-ch [:superscript])) } "Sup")
                              " "
                              (dom/button #js { :type "button"
                                                :className "pure-button"
                                                :onClick (fn [_] (put! cmd-ch [:removeFormat])) } "Strip Format"))
                     (om/build rte data)
                     (om/build vis data)))))


(om/root rte-ui app-state {:target (. js/document (getElementById "app"))})


(put! (:cmd-ch @app-state) [:subscript nil])
