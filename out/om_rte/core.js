// Compiled by ClojureScript 0.0-2173
goog.provide('om_rte.core');
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
cljs.core.enable_console_print_BANG_.call(null);
om_rte.core.text = "<div><a href='http://www.google.com'>hello</a></div>\n           <div><b>This is in bold</b></div>\n           <div><i>And this is italics.</i></div>";
om_rte.core.mych = cljs.core.async.chan.call(null);
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,om_rte.core.text))], null));
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.make_editor = (function make_editor(css_prefix,events,evt_callback,content){var n = document.createElement("div");var seq__9175_9179 = cljs.core.seq.call(null,events);var chunk__9176_9180 = null;var count__9177_9181 = 0;var i__9178_9182 = 0;while(true){
if((i__9178_9182 < count__9177_9181))
{var e_9183 = cljs.core._nth.call(null,chunk__9176_9180,i__9178_9182);n.addEventListener(e_9183,evt_callback);
{
var G__9184 = seq__9175_9179;
var G__9185 = chunk__9176_9180;
var G__9186 = count__9177_9181;
var G__9187 = (i__9178_9182 + 1);
seq__9175_9179 = G__9184;
chunk__9176_9180 = G__9185;
count__9177_9181 = G__9186;
i__9178_9182 = G__9187;
continue;
}
} else
{var temp__4092__auto___9188 = cljs.core.seq.call(null,seq__9175_9179);if(temp__4092__auto___9188)
{var seq__9175_9189__$1 = temp__4092__auto___9188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9175_9189__$1))
{var c__4191__auto___9190 = cljs.core.chunk_first.call(null,seq__9175_9189__$1);{
var G__9191 = cljs.core.chunk_rest.call(null,seq__9175_9189__$1);
var G__9192 = c__4191__auto___9190;
var G__9193 = cljs.core.count.call(null,c__4191__auto___9190);
var G__9194 = 0;
seq__9175_9179 = G__9191;
chunk__9176_9180 = G__9192;
count__9177_9181 = G__9193;
i__9178_9182 = G__9194;
continue;
}
} else
{var e_9195 = cljs.core.first.call(null,seq__9175_9189__$1);n.addEventListener(e_9195,evt_callback);
{
var G__9196 = cljs.core.next.call(null,seq__9175_9189__$1);
var G__9197 = null;
var G__9198 = 0;
var G__9199 = 0;
seq__9175_9179 = G__9196;
chunk__9176_9180 = G__9197;
count__9177_9181 = G__9198;
i__9178_9182 = G__9199;
continue;
}
}
} else
{}
}
break;
}
n.setAttribute("class",[cljs.core.str(css_prefix),cljs.core.str("-editor")].join(''));
n.setAttribute("contentEditable",true);
n.innerHTML = hickory.render.hiccup_to_html.call(null,content);
return n;
});
om_rte.core.rte_selected_QMARK_ = (function rte_selected_QMARK_(owner){var n = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));var sel = getSelection();var b = document.body;var p = sel.extentNode;while(true){
if(cljs.core._EQ_.call(null,n,p))
{return true;
} else
{if((cljs.core._EQ_.call(null,b,p)) || ((p == null)))
{return false;
} else
{{
var G__9200 = p.parentNode;
p = G__9200;
continue;
}
}
}
break;
}
});
om_rte.core.rte_field = (function rte_field(data,owner,p__9201){var map__9267 = p__9201;var map__9267__$1 = ((cljs.core.seq_QMARK_.call(null,map__9267))?cljs.core.apply.call(null,cljs.core.hash_map,map__9267):map__9267);var opts = map__9267__$1;var css_prefix = cljs.core.get.call(null,map__9267__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var throttle = cljs.core.get.call(null,map__9267__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var cmd_ch = cljs.core.get.call(null,map__9267__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9268 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9268 = (function (cmd_ch,throttle,css_prefix,opts,map__9267,p__9201,owner,data,rte_field,meta9269){
this.cmd_ch = cmd_ch;
this.throttle = throttle;
this.css_prefix = css_prefix;
this.opts = opts;
this.map__9267 = map__9267;
this.p__9201 = p__9201;
this.owner = owner;
this.data = data;
this.rte_field = rte_field;
this.meta9269 = meta9269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9268.cljs$lang$type = true;
om_rte.core.t9268.cljs$lang$ctorStr = "om-rte.core/t9268";
om_rte.core.t9268.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9268");
});
om_rte.core.t9268.prototype.om$core$IRender$ = true;
om_rte.core.t9268.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-container")].join('')},null);
});
om_rte.core.t9268.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t9268.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t9268.prototype.om$core$IDidMount$ = true;
om_rte.core.t9268.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var parent = om.core.get_node.call(null,self__.owner);var upd_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var upd_fn = ((function (parent,upd_ch){
return (function (n){return cljs.core.async.put_BANG_.call(null,upd_ch,n.innerHTML);
});})(parent,upd_ch))
;var editor = om_rte.core.make_editor.call(null,self__.css_prefix,om_rte.core.dom_events,((function (parent,upd_ch,upd_fn){
return (function (___$2){var el = this;return upd_fn.call(null,el);
});})(parent,upd_ch,upd_fn))
,hickory.render.hiccup_to_html.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));if((self__.cmd_ch == null))
{throw Error("Command channel disconnected!");
} else
{}
var c__6192__auto___9332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9288){var state_val_9289 = (state_9288[1]);if((state_val_9289 === 7))
{var inst_9283 = (state_9288[2]);var state_9288__$1 = (function (){var statearr_9290 = state_9288;(statearr_9290[7] = inst_9283);
return statearr_9290;
})();var statearr_9291_9333 = state_9288__$1;(statearr_9291_9333[2] = null);
(statearr_9291_9333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9289 === 6))
{var state_9288__$1 = state_9288;var statearr_9292_9334 = state_9288__$1;(statearr_9292_9334[2] = null);
(statearr_9292_9334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9289 === 5))
{var inst_9276 = (state_9288[8]);var inst_9275 = (state_9288[9]);var inst_9279 = document.execCommand(inst_9275,false,inst_9276);var state_9288__$1 = (function (){var statearr_9293 = state_9288;(statearr_9293[10] = inst_9279);
return statearr_9293;
})();var statearr_9294_9335 = state_9288__$1;(statearr_9294_9335[2] = null);
(statearr_9294_9335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9289 === 4))
{var inst_9274 = (state_9288[2]);var inst_9275 = cljs.core.nth.call(null,inst_9274,0,null);var inst_9276 = cljs.core.nth.call(null,inst_9274,1,null);var inst_9277 = om_rte.core.rte_selected_QMARK_.call(null,self__.owner);var state_9288__$1 = (function (){var statearr_9295 = state_9288;(statearr_9295[8] = inst_9276);
(statearr_9295[9] = inst_9275);
return statearr_9295;
})();if(inst_9277)
{var statearr_9296_9336 = state_9288__$1;(statearr_9296_9336[1] = 5);
} else
{var statearr_9297_9337 = state_9288__$1;(statearr_9297_9337[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9289 === 3))
{var inst_9286 = (state_9288[2]);var state_9288__$1 = state_9288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9288__$1,inst_9286);
} else
{if((state_val_9289 === 2))
{var state_9288__$1 = state_9288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9288__$1,4,self__.cmd_ch);
} else
{if((state_val_9289 === 1))
{var state_9288__$1 = state_9288;var statearr_9298_9338 = state_9288__$1;(statearr_9298_9338[2] = null);
(statearr_9298_9338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9302 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9302[0] = state_machine__6178__auto__);
(statearr_9302[1] = 1);
return statearr_9302;
});
var state_machine__6178__auto____1 = (function (state_9288){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9303){if((e9303 instanceof Object))
{var ex__6181__auto__ = e9303;var statearr_9304_9339 = state_9288;(statearr_9304_9339[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9340 = state_9288;
state_9288 = G__9340;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9288){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9305 = f__6193__auto__.call(null);(statearr_9305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9332);
return statearr_9305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___9341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9319){var state_val_9320 = (state_9319[1]);if((state_val_9320 === 5))
{var inst_9314 = (state_9319[2]);var state_9319__$1 = (function (){var statearr_9321 = state_9319;(statearr_9321[7] = inst_9314);
return statearr_9321;
})();var statearr_9322_9342 = state_9319__$1;(statearr_9322_9342[2] = null);
(statearr_9322_9342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9320 === 4))
{var inst_9308 = (state_9319[2]);var inst_9309 = hickory.core.parse_fragment.call(null,inst_9308);var inst_9310 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9309);var inst_9311 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"content","content",1965434859),inst_9310);var inst_9312 = cljs.core.async.timeout.call(null,self__.throttle);var state_9319__$1 = (function (){var statearr_9323 = state_9319;(statearr_9323[8] = inst_9311);
return statearr_9323;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9319__$1,5,inst_9312);
} else
{if((state_val_9320 === 3))
{var inst_9317 = (state_9319[2]);var state_9319__$1 = state_9319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9319__$1,inst_9317);
} else
{if((state_val_9320 === 2))
{var state_9319__$1 = state_9319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9319__$1,4,upd_ch);
} else
{if((state_val_9320 === 1))
{var state_9319__$1 = state_9319;var statearr_9324_9343 = state_9319__$1;(statearr_9324_9343[2] = null);
(statearr_9324_9343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9328 = [null,null,null,null,null,null,null,null,null];(statearr_9328[0] = state_machine__6178__auto__);
(statearr_9328[1] = 1);
return statearr_9328;
});
var state_machine__6178__auto____1 = (function (state_9319){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9329){if((e9329 instanceof Object))
{var ex__6181__auto__ = e9329;var statearr_9330_9344 = state_9319;(statearr_9330_9344[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9345 = state_9319;
state_9319 = G__9345;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9319){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9331 = f__6193__auto__.call(null);(statearr_9331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9341);
return statearr_9331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.core.t9268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9270){var self__ = this;
var _9270__$1 = this;return self__.meta9269;
});
om_rte.core.t9268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9270,meta9269__$1){var self__ = this;
var _9270__$1 = this;return (new om_rte.core.t9268(self__.cmd_ch,self__.throttle,self__.css_prefix,self__.opts,self__.map__9267,self__.p__9201,self__.owner,self__.data,self__.rte_field,meta9269__$1));
});
om_rte.core.__GT_t9268 = (function __GT_t9268(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9267__$2,p__9201__$1,owner__$1,data__$1,rte_field__$1,meta9269){return (new om_rte.core.t9268(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9267__$2,p__9201__$1,owner__$1,data__$1,rte_field__$1,meta9269));
});
}
return (new om_rte.core.t9268(cmd_ch,throttle,css_prefix,opts,map__9267__$1,p__9201,owner,data,rte_field,null));
});
om_rte.core.rte_vis = (function rte_vis(data,owner){if(typeof om_rte.core.t9349 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9349 = (function (owner,data,rte_vis,meta9350){
this.owner = owner;
this.data = data;
this.rte_vis = rte_vis;
this.meta9350 = meta9350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9349.cljs$lang$type = true;
om_rte.core.t9349.cljs$lang$ctorStr = "om-rte.core/t9349";
om_rte.core.t9349.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9349");
});
om_rte.core.t9349.prototype.om$core$IRender$ = true;
om_rte.core.t9349.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "om-rte-visualizer"},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t9349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9351){var self__ = this;
var _9351__$1 = this;return self__.meta9350;
});
om_rte.core.t9349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9351,meta9350__$1){var self__ = this;
var _9351__$1 = this;return (new om_rte.core.t9349(self__.owner,self__.data,self__.rte_vis,meta9350__$1));
});
om_rte.core.__GT_t9349 = (function __GT_t9349(owner__$1,data__$1,rte_vis__$1,meta9350){return (new om_rte.core.t9349(owner__$1,data__$1,rte_vis__$1,meta9350));
});
}
return (new om_rte.core.t9349(owner,data,rte_vis,null));
});
om_rte.core.def_controls = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-bold",new cljs.core.Keyword(null,"label","label",1116631654),"Bold",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9352_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9352_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-italic",new cljs.core.Keyword(null,"label","label",1116631654),"Italic",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9353_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9353_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["italic"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-underline",new cljs.core.Keyword(null,"label","label",1116631654),"Underline",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9354_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9354_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["underline"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-quote-left",new cljs.core.Keyword(null,"label","label",1116631654),"Quote",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9355_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9355_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["formatblock","blockquote"], null));
})], null)], null);
om_rte.core.rte_controls = (function rte_controls(data,owner,p__9356){var map__9363 = p__9356;var map__9363__$1 = ((cljs.core.seq_QMARK_.call(null,map__9363))?cljs.core.apply.call(null,cljs.core.hash_map,map__9363):map__9363);var opts = map__9363__$1;var controls = cljs.core.get.call(null,map__9363__$1,new cljs.core.Keyword(null,"controls","controls",4741937704),om_rte.core.def_controls);var css_prefix = cljs.core.get.call(null,map__9363__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9363__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9364 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9364 = (function (cmd_ch,css_prefix,controls,opts,map__9363,p__9356,owner,data,rte_controls,meta9365){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.controls = controls;
this.opts = opts;
this.map__9363 = map__9363;
this.p__9356 = p__9356;
this.owner = owner;
this.data = data;
this.rte_controls = rte_controls;
this.meta9365 = meta9365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9364.cljs$lang$type = true;
om_rte.core.t9364.cljs$lang$ctorStr = "om-rte.core/t9364";
om_rte.core.t9364.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9364");
});
om_rte.core.t9364.prototype.om$core$IRender$ = true;
om_rte.core.t9364.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-controls")].join('')},cljs.core.map.call(null,(function (p__9367){var map__9368 = p__9367;var map__9368__$1 = ((cljs.core.seq_QMARK_.call(null,map__9368))?cljs.core.apply.call(null,cljs.core.hash_map,map__9368):map__9368);var action = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"action","action",3885920680));var label = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"label","label",1116631654));var icon = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"icon","icon",1017130987));return React.DOM.button({"onClick": (function (___$2){return action.call(null,self__.cmd_ch);
}), "title": label, "className": "pure-button"},React.DOM.i({"className": [cljs.core.str("fa "),cljs.core.str(icon)].join('')}));
}),self__.controls));
});
om_rte.core.t9364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9366){var self__ = this;
var _9366__$1 = this;return self__.meta9365;
});
om_rte.core.t9364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9366,meta9365__$1){var self__ = this;
var _9366__$1 = this;return (new om_rte.core.t9364(self__.cmd_ch,self__.css_prefix,self__.controls,self__.opts,self__.map__9363,self__.p__9356,self__.owner,self__.data,self__.rte_controls,meta9365__$1));
});
om_rte.core.__GT_t9364 = (function __GT_t9364(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9363__$2,p__9356__$1,owner__$1,data__$1,rte_controls__$1,meta9365){return (new om_rte.core.t9364(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9363__$2,p__9356__$1,owner__$1,data__$1,rte_controls__$1,meta9365));
});
}
return (new om_rte.core.t9364(cmd_ch,css_prefix,controls,opts,map__9363__$1,p__9356,owner,data,rte_controls,null));
});
om_rte.core.rte_ui = (function() {
var rte_ui = null;
var rte_ui__2 = (function (data,owner){return rte_ui.call(null,data,owner,null);
});
var rte_ui__3 = (function (data,owner,p__9369){var map__9374 = p__9369;var map__9374__$1 = ((cljs.core.seq_QMARK_.call(null,map__9374))?cljs.core.apply.call(null,cljs.core.hash_map,map__9374):map__9374);var opts = map__9374__$1;var throttle = cljs.core.get.call(null,map__9374__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var css_prefix = cljs.core.get.call(null,map__9374__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9374__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null));if(typeof om_rte.core.t9375 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9375 = (function (cmd_ch,css_prefix,throttle,opts,map__9374,p__9369,owner,data,rte_ui,meta9376){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.throttle = throttle;
this.opts = opts;
this.map__9374 = map__9374;
this.p__9369 = p__9369;
this.owner = owner;
this.data = data;
this.rte_ui = rte_ui;
this.meta9376 = meta9376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9375.cljs$lang$type = true;
om_rte.core.t9375.cljs$lang$ctorStr = "om-rte.core/t9375";
om_rte.core.t9375.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9375");
});
om_rte.core.t9375.prototype.om$core$IRender$ = true;
om_rte.core.t9375.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.css_prefix},om.core.build.call(null,om_rte.core.rte_controls,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix], null)], null)),om.core.build.call(null,om_rte.core.rte_field,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix,new cljs.core.Keyword(null,"throttle","throttle",2497347228),self__.throttle], null)], null)),om.core.build.call(null,om_rte.core.rte_vis,self__.data));
});
om_rte.core.t9375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9377){var self__ = this;
var _9377__$1 = this;return self__.meta9376;
});
om_rte.core.t9375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9377,meta9376__$1){var self__ = this;
var _9377__$1 = this;return (new om_rte.core.t9375(self__.cmd_ch,self__.css_prefix,self__.throttle,self__.opts,self__.map__9374,self__.p__9369,self__.owner,self__.data,self__.rte_ui,meta9376__$1));
});
om_rte.core.__GT_t9375 = (function __GT_t9375(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9374__$2,p__9369__$1,owner__$1,data__$1,rte_ui__$1,meta9376){return (new om_rte.core.t9375(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9374__$2,p__9369__$1,owner__$1,data__$1,rte_ui__$1,meta9376));
});
}
return (new om_rte.core.t9375(cmd_ch,css_prefix,throttle,opts,map__9374__$1,p__9369,owner,data,rte_ui,null));
});
rte_ui = function(data,owner,p__9369){
switch(arguments.length){
case 2:
return rte_ui__2.call(this,data,owner);
case 3:
return rte_ui__3.call(this,data,owner,p__9369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rte_ui.cljs$core$IFn$_invoke$arity$2 = rte_ui__2;
rte_ui.cljs$core$IFn$_invoke$arity$3 = rte_ui__3;
return rte_ui;
})()
;
om.core.root.call(null,om_rte.core.rte_ui,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),om_rte.core.mych], null)], null));

//# sourceMappingURL=core.js.map