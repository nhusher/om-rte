(ns om-rte.utils
  (:require [om.core         :as om  :include-macros true]
            [om.dom          :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!] ]
            [hickory.core    :as h                       ]
            [hickory.render  :as hr                      ]))


(defn rte-visualizer [data owner]
  (reify
    om/IDisplayName
    (display-name [_] "rte-visualizer")

    om/IRender
    (render [_] (dom/div #js { :className "om-rte-visualizer" } (pr-str (:content data))))))
