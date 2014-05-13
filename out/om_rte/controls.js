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
om_rte.controls.rte_controls = (function rte_controls(data,owner,p__9271){var map__9278 = p__9271;var map__9278__$1 = ((cljs.core.seq_QMARK_.call(null,map__9278))?cljs.core.apply.call(null,cljs.core.hash_map,map__9278):map__9278);var opts = map__9278__$1;var controls = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"controls","controls",4741937704),om_rte.controls.def_controls);var css_prefix = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.controls.t9279 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.controls.t9279 = (function (cmd_ch,css_prefix,controls,opts,map__9278,p__9271,owner,data,rte_controls,meta9280){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.controls = controls;
this.opts = opts;
this.map__9278 = map__9278;
this.p__9271 = p__9271;
this.owner = owner;
this.data = data;
this.rte_controls = rte_controls;
this.meta9280 = meta9280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.controls.t9279.cljs$lang$type = true;
om_rte.controls.t9279.cljs$lang$ctorStr = "om-rte.controls/t9279";
om_rte.controls.t9279.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.controls/t9279");
});
om_rte.controls.t9279.prototype.om$core$IRender$ = true;
om_rte.controls.t9279.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-controls")].join('')},cljs.core.map.call(null,(function (p__9282){var map__9283 = p__9282;var map__9283__$1 = ((cljs.core.seq_QMARK_.call(null,map__9283))?cljs.core.apply.call(null,cljs.core.hash_map,map__9283):map__9283);var action = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"action","action",3885920680));var label = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"label","label",1116631654));var icon = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"icon","icon",1017130987));return React.DOM.button({"onClick": (function (___$2){return action.call(null,self__.cmd_ch);
}), "title": label, "className": "pure-button"},React.DOM.i({"className": [cljs.core.str("fa "),cljs.core.str(icon)].join('')}));
}),self__.controls));
});
om_rte.controls.t9279.prototype.om$core$IDisplayName$ = true;
om_rte.controls.t9279.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-controls";
});
om_rte.controls.t9279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9281){var self__ = this;
var _9281__$1 = this;return self__.meta9280;
});
om_rte.controls.t9279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9281,meta9280__$1){var self__ = this;
var _9281__$1 = this;return (new om_rte.controls.t9279(self__.cmd_ch,self__.css_prefix,self__.controls,self__.opts,self__.map__9278,self__.p__9271,self__.owner,self__.data,self__.rte_controls,meta9280__$1));
});
om_rte.controls.__GT_t9279 = (function __GT_t9279(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9278__$2,p__9271__$1,owner__$1,data__$1,rte_controls__$1,meta9280){return (new om_rte.controls.t9279(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9278__$2,p__9271__$1,owner__$1,data__$1,rte_controls__$1,meta9280));
});
}
return (new om_rte.controls.t9279(cmd_ch,css_prefix,controls,opts,map__9278__$1,p__9271,owner,data,rte_controls,null));
});

//# sourceMappingURL=controls.js.map