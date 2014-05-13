(ns om-rte.core
  (:require [om-rte.editor   :refer [rte-editor]         ]
            [om-rte.utils    :refer [rte-visualizer]     ]
            [om-rte.controls :refer [rte-controls]       ]
            [om.core         :as om  :include-macros true]
            [om.dom          :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!] ]
            [hickory.core    :as h                       ]
            [hickory.render  :as hr                      ])
  (:require-macros [cljs.core.async.macros :as a]))

(enable-console-print!)

(def text "<div><a href='http://www.google.com'>hello</a></div>
           <div><b>This is in bold</b></div>
           <div><i>And this is italics.</i></div>")

(def app-state (atom {:content (map h/as-hiccup (h/parse-fragment text)) }))

(defn rte
  ([data owner] (rte data owner nil))
  ([data owner {:as   opts
                :keys [ cmd-ch
                        css-prefix
                        throttle ]

                :or   { cmd-ch     (chan)
                        css-prefix "om-rte"
                        throttle   20 }}]
   (reify
     om/IDisplayName
     (display-name [_] "rte")

     om/IRender
     (render [_]
             (dom/div #js { :className css-prefix }
                      (om/build rte-controls data
                                {:opts { :cmd-ch     cmd-ch
                                         :css-prefix css-prefix }})

                      (om/build rte-editor data
                                {:opts { :cmd-ch     cmd-ch
                                         :css-prefix css-prefix
                                         :throttle   throttle }})

                      (om/build rte-visualizer data))))))



;; For some reason the JS jumps the gun before content is loaded
(. js/document
   (addEventListener "DOMContentLoaded"
                     (fn [_] (om/root rte
                                      app-state
                                      {:target (. js/document (getElementById "app"))
                                       :opts { :cmd-ch (chan) }}))))

