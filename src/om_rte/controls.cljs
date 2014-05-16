(ns om-rte.controls
  (:require [om.core         :as om  :include-macros true]
            [om.dom          :as dom :include-macros true]
            [cljs.core.async :as a :refer [put! chan <!] ]
            [hickory.core    :as h                       ]
            [hickory.render  :as hr                      ]))


;; The action needs to be able to do the following:
;; It needs to be able to exec commands against the editor itself or the editor's content
;; It needs to know about the selection state of the editor.
;; For example, a control might do one thing when pushed with no selection, and another with a selection.
;; It potentially needs a container to render into, if the control discloses additional options.
;; E.g. a link dialog/editor
;;
;; Perhaps a control should return a component that takes a command channel and, as its state, takes the
;; selection state of the editor. This would allow declarative description of the UI based on selection state
;; a channel to send commands editor. It would also need the current editor content and a way to operate on it
;;
;; Commands would need to be further abstracted, though, so that it could send more powerful commands over the
;; channel.
;;
(def def-controls [{ :icon "fa-bold"       :label "Bold"      :action #(put! % ["bold"])                     }
                   { :icon "fa-italic"     :label "Italic"    :action #(put! % ["italic"])                   }
                   { :icon "fa-underline"  :label "Underline" :action #(put! % ["underline"])                }
                   { :icon "fa-quote-left" :label "Quote"     :action #(put! % ["formatblock" "blockquote"]) }
                   { :icon "fa-link"       :label "Link"      :action #(prn %)                               }])

;; I feel like this might be too heavyweight for what we need, but...
(defprotocol RteControl
  "A protocol for RTE controls."
  (get-icon [c])
  (get-label [c]))

(defprotocol RteComplexControl
  "A stupid name for a control that might contain a bit of state."
  (get-component [c]))

(defprotocol RteSimpleControl
  "Another stupid name for a control, but this one will have no state."
  (get-action [c]))

;; A minimal-maximal example of the outcome:
(reify
  RteControl
  (get-icon [_] "fa-bold") ;; It seems like these will/should always be constant. Implies a map-like structure instead.
  (get-label [_] "bold")

  RteComplexControl
  (get-component [_] rte-link-component) ;; Also probably implies a map-like structure.

  RteSimpleControl
  (get-action [_ select-state] [:format-block "blockquote"])) ;; Is handed the select-state, so it could switch on behvior here



(defn rte-controls [data owner]
  (reify
    om/IDisplayName
    (display-name [_] "rte-controls")

    om/IInitState
    (init-state [_] { :controls def-controls
                      :shown-control nil })

    om/IRenderState
    (render-state [_ {:keys [css-prefix cmd-ch controls shown-control]}]
                  (dom/div #js { :className (str css-prefix "-controls-container")}
                           (if-not (nil? shown-control)
                             (str "SHOW CONTROL " shown-control))

                           (apply dom/div #js { :className (str css-prefix "-controls") }
                                  (map (fn [{:keys [icon label action]}]
                                         (dom/button #js { :className "pure-button"
                                                           :title label
                                                           :onClick (fn [_] (action cmd-ch)) }
                                                     (dom/i #js { :className (str "fa " icon) })))

                                       controls))))))
