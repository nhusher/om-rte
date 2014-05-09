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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,"<div><a href='http://www.google.com'>hello</a></div>")),new cljs.core.Keyword(null,"update-ch","update-ch",3359625051),cljs.core.async.chan.call(null)], null));
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
log.cljs$lang$applyTo = (function (arglist__12465){
var args = cljs.core.seq(arglist__12465);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.rte = (function rte(args,owner){if(typeof om_rte.core.t12502 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t12502 = (function (owner,args,rte,meta12503){
this.owner = owner;
this.args = args;
this.rte = rte;
this.meta12503 = meta12503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t12502.cljs$lang$type = true;
om_rte.core.t12502.cljs$lang$ctorStr = "om-rte.core/t12502";
om_rte.core.t12502.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t12502");
});
om_rte.core.t12502.prototype.om$core$IRenderState$ = true;
om_rte.core.t12502.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_rte.core.t12502.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t12502.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t12502.prototype.om$core$IDidMount$ = true;
om_rte.core.t12502.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252));var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));var parent = om.core.get_node.call(null,self__.owner);var on = ((function (update,data,editor,parent){
return (function (n,evt,cb){return n.addEventListener(evt,cb);
});})(update,data,editor,parent))
;var c__6192__auto___12538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12520){var state_val_12521 = (state_12520[1]);if((state_val_12521 === 5))
{var inst_12515 = (state_12520[2]);var state_12520__$1 = (function (){var statearr_12522 = state_12520;(statearr_12522[7] = inst_12515);
return statearr_12522;
})();var statearr_12523_12539 = state_12520__$1;(statearr_12523_12539[2] = null);
(statearr_12523_12539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 4))
{var inst_12507 = (state_12520[2]);var inst_12508 = hickory.core.parse_fragment.call(null,inst_12507);var inst_12509 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_12508);var inst_12510 = cljs.core.prn.call(null,om_rte.core.html);var inst_12511 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252),inst_12509);var inst_12512 = om.core.update_BANG_.call(null,self__.args,new cljs.core.Keyword(null,"content","content",1965434859),inst_12509);var inst_12513 = cljs.core.async.timeout.call(null,20);var state_12520__$1 = (function (){var statearr_12524 = state_12520;(statearr_12524[8] = inst_12511);
(statearr_12524[9] = inst_12510);
(statearr_12524[10] = inst_12512);
return statearr_12524;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12520__$1,5,inst_12513);
} else
{if((state_val_12521 === 3))
{var inst_12518 = (state_12520[2]);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12520__$1,inst_12518);
} else
{if((state_val_12521 === 2))
{var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12520__$1,4,update);
} else
{if((state_val_12521 === 1))
{var state_12520__$1 = state_12520;var statearr_12525_12540 = state_12520__$1;(statearr_12525_12540[2] = null);
(statearr_12525_12540[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12529 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12529[0] = state_machine__6178__auto__);
(statearr_12529[1] = 1);
return statearr_12529;
});
var state_machine__6178__auto____1 = (function (state_12520){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12530){if((e12530 instanceof Object))
{var ex__6181__auto__ = e12530;var statearr_12531_12541 = state_12520;(statearr_12531_12541[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12542 = state_12520;
state_12520 = G__12542;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12520){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12532 = f__6193__auto__.call(null);(statearr_12532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12538);
return statearr_12532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
editor.innerHTML = hickory.render.hiccup_to_html.call(null,data);
parent.appendChild(editor);
var seq__12533 = cljs.core.seq.call(null,om_rte.core.dom_events);var chunk__12534 = null;var count__12535 = 0;var i__12536 = 0;while(true){
if((i__12536 < count__12535))
{var evt = cljs.core._nth.call(null,chunk__12534,i__12536);on.call(null,editor,evt,((function (seq__12533,chunk__12534,count__12535,i__12536,evt){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__12533,chunk__12534,count__12535,i__12536,evt))
);
{
var G__12543 = seq__12533;
var G__12544 = chunk__12534;
var G__12545 = count__12535;
var G__12546 = (i__12536 + 1);
seq__12533 = G__12543;
chunk__12534 = G__12544;
count__12535 = G__12545;
i__12536 = G__12546;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12533);if(temp__4092__auto__)
{var seq__12533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12533__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__12533__$1);{
var G__12547 = cljs.core.chunk_rest.call(null,seq__12533__$1);
var G__12548 = c__4191__auto__;
var G__12549 = cljs.core.count.call(null,c__4191__auto__);
var G__12550 = 0;
seq__12533 = G__12547;
chunk__12534 = G__12548;
count__12535 = G__12549;
i__12536 = G__12550;
continue;
}
} else
{var evt = cljs.core.first.call(null,seq__12533__$1);on.call(null,editor,evt,((function (seq__12533,chunk__12534,count__12535,i__12536,evt,seq__12533__$1,temp__4092__auto__){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__12533,chunk__12534,count__12535,i__12536,evt,seq__12533__$1,temp__4092__auto__))
);
{
var G__12551 = cljs.core.next.call(null,seq__12533__$1);
var G__12552 = null;
var G__12553 = 0;
var G__12554 = 0;
seq__12533 = G__12551;
chunk__12534 = G__12552;
count__12535 = G__12553;
i__12536 = G__12554;
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
om_rte.core.t12502.prototype.om$core$IInitState$ = true;
om_rte.core.t12502.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.args),new cljs.core.Keyword(null,"editor","editor",4001043679),(function (){var G__12537 = document.createElement("div");G__12537.setAttribute("contentEditable",true);
return G__12537;
})()], null);
});
om_rte.core.t12502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12504){var self__ = this;
var _12504__$1 = this;return self__.meta12503;
});
om_rte.core.t12502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12504,meta12503__$1){var self__ = this;
var _12504__$1 = this;return (new om_rte.core.t12502(self__.owner,self__.args,self__.rte,meta12503__$1));
});
om_rte.core.__GT_t12502 = (function __GT_t12502(owner__$1,args__$1,rte__$1,meta12503){return (new om_rte.core.t12502(owner__$1,args__$1,rte__$1,meta12503));
});
}
return (new om_rte.core.t12502(owner,args,rte,null));
});
om_rte.core.vis = (function vis(data,owner){if(typeof om_rte.core.t12558 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t12558 = (function (owner,data,vis,meta12559){
this.owner = owner;
this.data = data;
this.vis = vis;
this.meta12559 = meta12559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t12558.cljs$lang$type = true;
om_rte.core.t12558.cljs$lang$ctorStr = "om-rte.core/t12558";
om_rte.core.t12558.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t12558");
});
om_rte.core.t12558.prototype.om$core$IRender$ = true;
om_rte.core.t12558.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"font-family": "consolas"}},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t12558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12560){var self__ = this;
var _12560__$1 = this;return self__.meta12559;
});
om_rte.core.t12558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12560,meta12559__$1){var self__ = this;
var _12560__$1 = this;return (new om_rte.core.t12558(self__.owner,self__.data,self__.vis,meta12559__$1));
});
om_rte.core.__GT_t12558 = (function __GT_t12558(owner__$1,data__$1,vis__$1,meta12559){return (new om_rte.core.t12558(owner__$1,data__$1,vis__$1,meta12559));
});
}
return (new om_rte.core.t12558(owner,data,vis,null));
});
om.core.root.call(null,om_rte.core.rte,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
om.core.root.call(null,om_rte.core.vis,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("vis")], null));

//# sourceMappingURL=core.js.map