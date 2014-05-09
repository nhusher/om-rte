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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,"<div>\n                                                        <a href='http://www.google.com'>hello</a>\n                                                       </div>\n                                                       <div><b>This is in bold</b></div>\n                                                       <div><i>And this is italics.</i></div>")),new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null)], null));
/**
* @param {...*} var_args
*/
om_rte.core.log = (function() { 
var log__delegate = function (args){console.log.apply(console,cljs.core.clj__GT_js.call(null,args));
return null;
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__9171){
var args = cljs.core.seq(arglist__9171);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.rte = (function rte(p__9172,owner){var map__9237 = p__9172;var map__9237__$1 = ((cljs.core.seq_QMARK_.call(null,map__9237))?cljs.core.apply.call(null,cljs.core.hash_map,map__9237):map__9237);var args = map__9237__$1;var content = cljs.core.get.call(null,map__9237__$1,new cljs.core.Keyword(null,"content","content",1965434859));var cmd_ch = cljs.core.get.call(null,map__9237__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9238 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9238 = (function (cmd_ch,content,args,map__9237,owner,p__9172,rte,meta9239){
this.cmd_ch = cmd_ch;
this.content = content;
this.args = args;
this.map__9237 = map__9237;
this.owner = owner;
this.p__9172 = p__9172;
this.rte = rte;
this.meta9239 = meta9239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9238.cljs$lang$type = true;
om_rte.core.t9238.cljs$lang$ctorStr = "om-rte.core/t9238";
om_rte.core.t9238.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9238");
});
om_rte.core.t9238.prototype.om$core$IRenderState$ = true;
om_rte.core.t9238.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"padding": "1rem"}, "className": (cljs.core.truth_(new cljs.core.Keyword(null,"focused","focused",4617830121).cljs$core$IFn$_invoke$arity$1(s))?"focused":"not-focused")},null);
});
om_rte.core.t9238.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t9238.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t9238.prototype.om$core$IDidMount$ = true;
om_rte.core.t9238.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252));var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));var parent = om.core.get_node.call(null,self__.owner);var on = ((function (update,data,editor,parent){
return (function (n,evt,cb){return n.addEventListener(evt,cb);
});})(update,data,editor,parent))
;var c__6192__auto___9301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9254){var state_val_9255 = (state_9254[1]);if((state_val_9255 === 4))
{var inst_9244 = (state_9254[2]);var inst_9245 = cljs.core.nth.call(null,inst_9244,0,null);var inst_9246 = cljs.core.nth.call(null,inst_9244,1,null);var inst_9247 = cljs.core.name.call(null,inst_9245);var inst_9248 = document.execCommand(inst_9247,inst_9246);var inst_9249 = cljs.core.prn.call(null,inst_9245,inst_9246);var state_9254__$1 = (function (){var statearr_9256 = state_9254;(statearr_9256[7] = inst_9248);
(statearr_9256[8] = inst_9249);
return statearr_9256;
})();var statearr_9257_9302 = state_9254__$1;(statearr_9257_9302[2] = null);
(statearr_9257_9302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9255 === 3))
{var inst_9252 = (state_9254[2]);var state_9254__$1 = state_9254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9254__$1,inst_9252);
} else
{if((state_val_9255 === 2))
{var state_9254__$1 = state_9254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9254__$1,4,self__.cmd_ch);
} else
{if((state_val_9255 === 1))
{var state_9254__$1 = state_9254;var statearr_9258_9303 = state_9254__$1;(statearr_9258_9303[2] = null);
(statearr_9258_9303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9262 = [null,null,null,null,null,null,null,null,null];(statearr_9262[0] = state_machine__6178__auto__);
(statearr_9262[1] = 1);
return statearr_9262;
});
var state_machine__6178__auto____1 = (function (state_9254){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9263){if((e9263 instanceof Object))
{var ex__6181__auto__ = e9263;var statearr_9264_9304 = state_9254;(statearr_9264_9304[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9305 = state_9254;
state_9254 = G__9305;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9254){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9265 = f__6193__auto__.call(null);(statearr_9265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9301);
return statearr_9265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___9306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9283){var state_val_9284 = (state_9283[1]);if((state_val_9284 === 5))
{var inst_9278 = (state_9283[2]);var state_9283__$1 = (function (){var statearr_9285 = state_9283;(statearr_9285[7] = inst_9278);
return statearr_9285;
})();var statearr_9286_9307 = state_9283__$1;(statearr_9286_9307[2] = null);
(statearr_9286_9307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9284 === 4))
{var inst_9268 = (state_9283[2]);var inst_9269 = hickory.core.parse_fragment.call(null,inst_9268);var inst_9270 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9269);var inst_9271 = document.activeElement;var inst_9272 = cljs.core._EQ_.call(null,inst_9271,editor);var inst_9273 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"focused","focused",4617830121),inst_9272);var inst_9274 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252),inst_9270);var inst_9275 = om.core.update_BANG_.call(null,self__.args,new cljs.core.Keyword(null,"content","content",1965434859),inst_9270);var inst_9276 = cljs.core.async.timeout.call(null,20);var state_9283__$1 = (function (){var statearr_9287 = state_9283;(statearr_9287[8] = inst_9275);
(statearr_9287[9] = inst_9273);
(statearr_9287[10] = inst_9274);
return statearr_9287;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9283__$1,5,inst_9276);
} else
{if((state_val_9284 === 3))
{var inst_9281 = (state_9283[2]);var state_9283__$1 = state_9283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9283__$1,inst_9281);
} else
{if((state_val_9284 === 2))
{var state_9283__$1 = state_9283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9283__$1,4,update);
} else
{if((state_val_9284 === 1))
{var state_9283__$1 = state_9283;var statearr_9288_9308 = state_9283__$1;(statearr_9288_9308[2] = null);
(statearr_9288_9308[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9292 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9292[0] = state_machine__6178__auto__);
(statearr_9292[1] = 1);
return statearr_9292;
});
var state_machine__6178__auto____1 = (function (state_9283){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9293){if((e9293 instanceof Object))
{var ex__6181__auto__ = e9293;var statearr_9294_9309 = state_9283;(statearr_9294_9309[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9310 = state_9283;
state_9283 = G__9310;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9283){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9295 = f__6193__auto__.call(null);(statearr_9295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9306);
return statearr_9295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
editor.innerHTML = hickory.render.hiccup_to_html.call(null,data);
parent.appendChild(editor);
var seq__9296 = cljs.core.seq.call(null,om_rte.core.dom_events);var chunk__9297 = null;var count__9298 = 0;var i__9299 = 0;while(true){
if((i__9299 < count__9298))
{var evt = cljs.core._nth.call(null,chunk__9297,i__9299);on.call(null,editor,evt,((function (seq__9296,chunk__9297,count__9298,i__9299,evt){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__9296,chunk__9297,count__9298,i__9299,evt))
);
{
var G__9311 = seq__9296;
var G__9312 = chunk__9297;
var G__9313 = count__9298;
var G__9314 = (i__9299 + 1);
seq__9296 = G__9311;
chunk__9297 = G__9312;
count__9298 = G__9313;
i__9299 = G__9314;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9296);if(temp__4092__auto__)
{var seq__9296__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9296__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__9296__$1);{
var G__9315 = cljs.core.chunk_rest.call(null,seq__9296__$1);
var G__9316 = c__4191__auto__;
var G__9317 = cljs.core.count.call(null,c__4191__auto__);
var G__9318 = 0;
seq__9296 = G__9315;
chunk__9297 = G__9316;
count__9298 = G__9317;
i__9299 = G__9318;
continue;
}
} else
{var evt = cljs.core.first.call(null,seq__9296__$1);on.call(null,editor,evt,((function (seq__9296,chunk__9297,count__9298,i__9299,evt,seq__9296__$1,temp__4092__auto__){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__9296,chunk__9297,count__9298,i__9299,evt,seq__9296__$1,temp__4092__auto__))
);
{
var G__9319 = cljs.core.next.call(null,seq__9296__$1);
var G__9320 = null;
var G__9321 = 0;
var G__9322 = 0;
seq__9296 = G__9319;
chunk__9297 = G__9320;
count__9298 = G__9321;
i__9299 = G__9322;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om_rte.core.t9238.prototype.om$core$IInitState$ = true;
om_rte.core.t9238.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),self__.content,new cljs.core.Keyword(null,"focused","focused",4617830121),false,new cljs.core.Keyword(null,"editor","editor",4001043679),(function (){var G__9300 = document.createElement("div");G__9300.setAttribute("contentEditable",true);
return G__9300;
})()], null);
});
om_rte.core.t9238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9240){var self__ = this;
var _9240__$1 = this;return self__.meta9239;
});
om_rte.core.t9238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9240,meta9239__$1){var self__ = this;
var _9240__$1 = this;return (new om_rte.core.t9238(self__.cmd_ch,self__.content,self__.args,self__.map__9237,self__.owner,self__.p__9172,self__.rte,meta9239__$1));
});
om_rte.core.__GT_t9238 = (function __GT_t9238(cmd_ch__$1,content__$1,args__$1,map__9237__$2,owner__$1,p__9172__$1,rte__$1,meta9239){return (new om_rte.core.t9238(cmd_ch__$1,content__$1,args__$1,map__9237__$2,owner__$1,p__9172__$1,rte__$1,meta9239));
});
}
return (new om_rte.core.t9238(cmd_ch,content,args,map__9237__$1,owner,p__9172,rte,null));
});
om_rte.core.vis = (function vis(data,owner){if(typeof om_rte.core.t9326 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9326 = (function (owner,data,vis,meta9327){
this.owner = owner;
this.data = data;
this.vis = vis;
this.meta9327 = meta9327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9326.cljs$lang$type = true;
om_rte.core.t9326.cljs$lang$ctorStr = "om-rte.core/t9326";
om_rte.core.t9326.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9326");
});
om_rte.core.t9326.prototype.om$core$IRender$ = true;
om_rte.core.t9326.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"padding": "1rem", "border-top": "1px dotted #ccc", "font-family": "consolas"}},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t9326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9328){var self__ = this;
var _9328__$1 = this;return self__.meta9327;
});
om_rte.core.t9326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9328,meta9327__$1){var self__ = this;
var _9328__$1 = this;return (new om_rte.core.t9326(self__.owner,self__.data,self__.vis,meta9327__$1));
});
om_rte.core.__GT_t9326 = (function __GT_t9326(owner__$1,data__$1,vis__$1,meta9327){return (new om_rte.core.t9326(owner__$1,data__$1,vis__$1,meta9327));
});
}
return (new om_rte.core.t9326(owner,data,vis,null));
});
om_rte.core.rte_ui = (function rte_ui(p__9329,owner){var map__9334 = p__9329;var map__9334__$1 = ((cljs.core.seq_QMARK_.call(null,map__9334))?cljs.core.apply.call(null,cljs.core.hash_map,map__9334):map__9334);var data = map__9334__$1;var cmd_ch = cljs.core.get.call(null,map__9334__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9335 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9335 = (function (cmd_ch,data,map__9334,owner,p__9329,rte_ui,meta9336){
this.cmd_ch = cmd_ch;
this.data = data;
this.map__9334 = map__9334;
this.owner = owner;
this.p__9329 = p__9329;
this.rte_ui = rte_ui;
this.meta9336 = meta9336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9335.cljs$lang$type = true;
om_rte.core.t9335.cljs$lang$ctorStr = "om-rte.core/t9335";
om_rte.core.t9335.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9335");
});
om_rte.core.t9335.prototype.om$core$IRender$ = true;
om_rte.core.t9335.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "rte-ui"},React.DOM.div(null,React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscript","subscript",1528746621)], null));
}), "className": "pure-button pure-button-primary", "type": "button"},"Sub")," ",React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"superscript","superscript",4142885752)], null));
}), "className": "pure-button pure-button-primary", "type": "button"},"Sup")," ",React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removeFormat","removeFormat",4078656781)], null));
}), "className": "pure-button", "type": "button"},"Strip Format")),om.core.build.call(null,om_rte.core.rte,self__.data),om.core.build.call(null,om_rte.core.vis,self__.data));
});
om_rte.core.t9335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9337){var self__ = this;
var _9337__$1 = this;return self__.meta9336;
});
om_rte.core.t9335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9337,meta9336__$1){var self__ = this;
var _9337__$1 = this;return (new om_rte.core.t9335(self__.cmd_ch,self__.data,self__.map__9334,self__.owner,self__.p__9329,self__.rte_ui,meta9336__$1));
});
om_rte.core.__GT_t9335 = (function __GT_t9335(cmd_ch__$1,data__$1,map__9334__$2,owner__$1,p__9329__$1,rte_ui__$1,meta9336){return (new om_rte.core.t9335(cmd_ch__$1,data__$1,map__9334__$2,owner__$1,p__9329__$1,rte_ui__$1,meta9336));
});
}
return (new om_rte.core.t9335(cmd_ch,data,map__9334__$1,owner,p__9329,rte_ui,null));
});
om.core.root.call(null,om_rte.core.rte_ui,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_rte.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscript","subscript",1528746621),null], null));

//# sourceMappingURL=core.js.map