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
var rte__3 = (function (data,owner,p__9429){var map__9434 = p__9429;var map__9434__$1 = ((cljs.core.seq_QMARK_.call(null,map__9434))?cljs.core.apply.call(null,cljs.core.hash_map,map__9434):map__9434);var opts = map__9434__$1;var throttle = cljs.core.get.call(null,map__9434__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var css_prefix = cljs.core.get.call(null,map__9434__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9434__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null));if(typeof om_rte.core.t9435 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9435 = (function (cmd_ch,css_prefix,throttle,opts,map__9434,p__9429,owner,data,rte,meta9436){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.throttle = throttle;
this.opts = opts;
this.map__9434 = map__9434;
this.p__9429 = p__9429;
this.owner = owner;
this.data = data;
this.rte = rte;
this.meta9436 = meta9436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9435.cljs$lang$type = true;
om_rte.core.t9435.cljs$lang$ctorStr = "om-rte.core/t9435";
om_rte.core.t9435.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9435");
});
om_rte.core.t9435.prototype.om$core$IRender$ = true;
om_rte.core.t9435.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.css_prefix},om.core.build.call(null,om_rte.controls.rte_controls,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix], null)], null)),om.core.build.call(null,om_rte.editor.rte_editor,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix,new cljs.core.Keyword(null,"throttle","throttle",2497347228),self__.throttle], null)], null)),om.core.build.call(null,om_rte.utils.rte_visualizer,self__.data));
});
om_rte.core.t9435.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9435.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte";
});
om_rte.core.t9435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9437){var self__ = this;
var _9437__$1 = this;return self__.meta9436;
});
om_rte.core.t9435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9437,meta9436__$1){var self__ = this;
var _9437__$1 = this;return (new om_rte.core.t9435(self__.cmd_ch,self__.css_prefix,self__.throttle,self__.opts,self__.map__9434,self__.p__9429,self__.owner,self__.data,self__.rte,meta9436__$1));
});
om_rte.core.__GT_t9435 = (function __GT_t9435(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9434__$2,p__9429__$1,owner__$1,data__$1,rte__$1,meta9436){return (new om_rte.core.t9435(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9434__$2,p__9429__$1,owner__$1,data__$1,rte__$1,meta9436));
});
}
return (new om_rte.core.t9435(cmd_ch,css_prefix,throttle,opts,map__9434__$1,p__9429,owner,data,rte,null));
});
rte = function(data,owner,p__9429){
switch(arguments.length){
case 2:
return rte__2.call(this,data,owner);
case 3:
return rte__3.call(this,data,owner,p__9429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rte.cljs$core$IFn$_invoke$arity$2 = rte__2;
rte.cljs$core$IFn$_invoke$arity$3 = rte__3;
return rte;
})()
;
document.addEventListener("DOMContentLoaded",(function (_){return om.core.root.call(null,om_rte.core.rte,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null)], null)], null));
}));

//# sourceMappingURL=core.js.map