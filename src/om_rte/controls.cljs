(ns om-rte.controls
  (:require [om.core         :as om  :include-macros true]
            [om.dom          :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!] ]
            [hickory.core    :as h                       ]
            [hickory.render  :as hr                      ]))


(def def-controls [{ :icon "fa-bold"       :label "Bold"      :action #(put! % ["bold"])                     }
                   { :icon "fa-italic"     :label "Italic"    :action #(put! % ["italic"])                   }
                   { :icon "fa-underline"  :label "Underline" :action #(put! % ["underline"])                }
                   { :icon "fa-quote-left" :label "Quote"     :action #(put! % ["formatblock" "blockquote"]) }
                   { :icon "fa-link"       :label "Link"      :action #(prn %)                               }])

(defn rte-controls [data owner]
  (reify
    om/IDisplayName
    (display-name [_] "rte-controls")

    om/IInitState
    (init-state [_] { :controls def-controls })

    om/IRenderState
    (render-state [_ {:keys [css-prefix cmd-ch controls]}]
            (apply dom/div #js { :className (str css-prefix "-controls") }
                   (map (fn [{:keys [icon label action]}]
                          (dom/button #js { :className "pure-button"
                                            :title label
                                            :onClick (fn [_] (action cmd-ch)) }
                                      (dom/i #js { :className (str "fa " icon) })))

                        controls)))))
