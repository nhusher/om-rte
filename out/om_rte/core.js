// Compiled by ClojureScript 0.0-2173
goog.provide('om_rte.core');
goog.require('cljs.core');
goog.require('om_rte.utils');
goog.require('om_rte.controls');
goog.require('om_rte.editor');
goog.require('cljs.core.async');
goog.require('hickory.render');
goog.require('om_rte.controls');
goog.require('om_rte.editor');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('om_rte.utils');
goog.require('hickory.render');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hickory.core');
cljs.core.enable_console_print_BANG_.call(null);
om_rte.core.text = "<div><a href='http://www.google.com'>hello</a></div>\n           <div><b>This is in bold</b></div>\n           <div><i>And this is italics.</i></div>";
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,om_rte.core.text))], null));
om_rte.core.rte = (function() {
var rte = null;
var rte__2 = (function (data,owner){return rte.call(null,data,owner,null);
});
var rte__3 = (function (data,owner,opts){if(typeof om_rte.core.t9428 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9428 = (function (opts,owner,data,rte,meta9429){
this.opts = opts;
this.owner = owner;
this.data = data;
this.rte = rte;
this.meta9429 = meta9429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9428.cljs$lang$type = true;
om_rte.core.t9428.cljs$lang$ctorStr = "om-rte.core/t9428";
om_rte.core.t9428.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9428");
});
om_rte.core.t9428.prototype.om$core$IRenderState$ = true;
om_rte.core.t9428.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9431){var self__ = this;
var map__9432 = p__9431;var map__9432__$1 = ((cljs.core.seq_QMARK_.call(null,map__9432))?cljs.core.apply.call(null,cljs.core.hash_map,map__9432):map__9432);var throttle = cljs.core.get.call(null,map__9432__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228));var cmd_ch = cljs.core.get.call(null,map__9432__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));var css_prefix = cljs.core.get.call(null,map__9432__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878));var ___$1 = this;return React.DOM.div({"className": css_prefix},om.core.build.call(null,om_rte.controls.rte_controls,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),css_prefix], null)], null)),om.core.build.call(null,om_rte.editor.rte_editor,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),css_prefix,new cljs.core.Keyword(null,"throttle","throttle",2497347228),throttle], null)], null)),om.core.build.call(null,om_rte.utils.rte_visualizer,self__.data));
});
om_rte.core.t9428.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9428.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte";
});
om_rte.core.t9428.prototype.om$core$IInitState$ = true;
om_rte.core.t9428.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte",new cljs.core.Keyword(null,"throttle","throttle",2497347228),20], null);
});
om_rte.core.t9428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9430){var self__ = this;
var _9430__$1 = this;return self__.meta9429;
});
om_rte.core.t9428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9430,meta9429__$1){var self__ = this;
var _9430__$1 = this;return (new om_rte.core.t9428(self__.opts,self__.owner,self__.data,self__.rte,meta9429__$1));
});
om_rte.core.__GT_t9428 = (function __GT_t9428(opts__$1,owner__$1,data__$1,rte__$1,meta9429){return (new om_rte.core.t9428(opts__$1,owner__$1,data__$1,rte__$1,meta9429));
});
}
return (new om_rte.core.t9428(opts,owner,data,rte,null));
});
rte = function(data,owner,opts){
switch(arguments.length){
case 2:
return rte__2.call(this,data,owner);
case 3:
return rte__3.call(this,data,owner,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rte.cljs$core$IFn$_invoke$arity$2 = rte__2;
rte.cljs$core$IFn$_invoke$arity$3 = rte__3;
return rte;
})()
;
document.addEventListener("DOMContentLoaded",(function (_){return om.core.root.call(null,om_rte.core.rte,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
}));

//# sourceMappingURL=core.js.map