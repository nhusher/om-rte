// Compiled by ClojureScript 0.0-2173
goog.provide('om_rte.controls');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('hickory.render');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('hickory.render');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hickory.core');
om_rte.controls.def_controls = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-bold",new cljs.core.Keyword(null,"label","label",1116631654),"Bold",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9266_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9266_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-italic",new cljs.core.Keyword(null,"label","label",1116631654),"Italic",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9267_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9267_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["italic"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-underline",new cljs.core.Keyword(null,"label","label",1116631654),"Underline",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9268_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9268_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["underline"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-quote-left",new cljs.core.Keyword(null,"label","label",1116631654),"Quote",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9269_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9269_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["formatblock","blockquote"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-link",new cljs.core.Keyword(null,"label","label",1116631654),"Link",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9270_SHARP_){return cljs.core.prn.call(null,p1__9270_SHARP_);
})], null)], null);
om_rte.controls.rte_controls = (function rte_controls(data,owner){if(typeof om_rte.controls.t9278 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.controls.t9278 = (function (owner,data,rte_controls,meta9279){
this.owner = owner;
this.data = data;
this.rte_controls = rte_controls;
this.meta9279 = meta9279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.controls.t9278.cljs$lang$type = true;
om_rte.controls.t9278.cljs$lang$ctorStr = "om-rte.controls/t9278";
om_rte.controls.t9278.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.controls/t9278");
});
om_rte.controls.t9278.prototype.om$core$IRenderState$ = true;
om_rte.controls.t9278.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9281){var self__ = this;
var map__9282 = p__9281;var map__9282__$1 = ((cljs.core.seq_QMARK_.call(null,map__9282))?cljs.core.apply.call(null,cljs.core.hash_map,map__9282):map__9282);var controls = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"controls","controls",4741937704));var cmd_ch = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));var css_prefix = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": [cljs.core.str(css_prefix),cljs.core.str("-controls")].join('')},cljs.core.map.call(null,(function (p__9283){var map__9284 = p__9283;var map__9284__$1 = ((cljs.core.seq_QMARK_.call(null,map__9284))?cljs.core.apply.call(null,cljs.core.hash_map,map__9284):map__9284);var action = cljs.core.get.call(null,map__9284__$1,new cljs.core.Keyword(null,"action","action",3885920680));var label = cljs.core.get.call(null,map__9284__$1,new cljs.core.Keyword(null,"label","label",1116631654));var icon = cljs.core.get.call(null,map__9284__$1,new cljs.core.Keyword(null,"icon","icon",1017130987));return React.DOM.button({"onClick": (function (___$2){return action.call(null,cmd_ch);
}), "title": label, "className": "pure-button"},React.DOM.i({"className": [cljs.core.str("fa "),cljs.core.str(icon)].join('')}));
}),controls));
});
om_rte.controls.t9278.prototype.om$core$IInitState$ = true;
om_rte.controls.t9278.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",4741937704),om_rte.controls.def_controls], null);
});
om_rte.controls.t9278.prototype.om$core$IDisplayName$ = true;
om_rte.controls.t9278.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-controls";
});
om_rte.controls.t9278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9280){var self__ = this;
var _9280__$1 = this;return self__.meta9279;
});
om_rte.controls.t9278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9280,meta9279__$1){var self__ = this;
var _9280__$1 = this;return (new om_rte.controls.t9278(self__.owner,self__.data,self__.rte_controls,meta9279__$1));
});
om_rte.controls.__GT_t9278 = (function __GT_t9278(owner__$1,data__$1,rte_controls__$1,meta9279){return (new om_rte.controls.t9278(owner__$1,data__$1,rte_controls__$1,meta9279));
});
}
return (new om_rte.controls.t9278(owner,data,rte_controls,null));
});

//# sourceMappingURL=controls.js.map