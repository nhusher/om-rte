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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,"<div>\n                                                        <a href='http://www.google.com'>hello</a>\n                                                       </div>\n                                                       <div><b>This is in bold</b></div>\n                                                       <div><i>And this is italics.</i></div>")),new cljs.core.Keyword(null,"update-ch","update-ch",3359625051),cljs.core.async.chan.call(null)], null));
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
log.cljs$lang$applyTo = (function (arglist__16886){
var args = cljs.core.seq(arglist__16886);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.rte = (function rte(args,owner){if(typeof om_rte.core.t16922 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t16922 = (function (owner,args,rte,meta16923){
this.owner = owner;
this.args = args;
this.rte = rte;
this.meta16923 = meta16923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t16922.cljs$lang$type = true;
om_rte.core.t16922.cljs$lang$ctorStr = "om-rte.core/t16922";
om_rte.core.t16922.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t16922");
});
om_rte.core.t16922.prototype.om$core$IRenderState$ = true;
om_rte.core.t16922.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_rte.core.t16922.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t16922.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t16922.prototype.om$core$IDidMount$ = true;
om_rte.core.t16922.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var data = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252));var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor","editor",4001043679));var parent = om.core.get_node.call(null,self__.owner);var on = ((function (update,data,editor,parent){
return (function (n,evt,cb){return n.addEventListener(evt,cb);
});})(update,data,editor,parent))
;var c__6192__auto___16957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_16939){var state_val_16940 = (state_16939[1]);if((state_val_16940 === 5))
{var inst_16934 = (state_16939[2]);var state_16939__$1 = (function (){var statearr_16941 = state_16939;(statearr_16941[7] = inst_16934);
return statearr_16941;
})();var statearr_16942_16958 = state_16939__$1;(statearr_16942_16958[2] = null);
(statearr_16942_16958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16940 === 4))
{var inst_16927 = (state_16939[2]);var inst_16928 = hickory.core.parse_fragment.call(null,inst_16927);var inst_16929 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_16928);var inst_16930 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252),inst_16929);var inst_16931 = om.core.update_BANG_.call(null,self__.args,new cljs.core.Keyword(null,"content","content",1965434859),inst_16929);var inst_16932 = cljs.core.async.timeout.call(null,20);var state_16939__$1 = (function (){var statearr_16943 = state_16939;(statearr_16943[8] = inst_16931);
(statearr_16943[9] = inst_16930);
return statearr_16943;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16939__$1,5,inst_16932);
} else
{if((state_val_16940 === 3))
{var inst_16937 = (state_16939[2]);var state_16939__$1 = state_16939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16939__$1,inst_16937);
} else
{if((state_val_16940 === 2))
{var state_16939__$1 = state_16939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16939__$1,4,update);
} else
{if((state_val_16940 === 1))
{var state_16939__$1 = state_16939;var statearr_16944_16959 = state_16939__$1;(statearr_16944_16959[2] = null);
(statearr_16944_16959[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_16948 = [null,null,null,null,null,null,null,null,null,null];(statearr_16948[0] = state_machine__6178__auto__);
(statearr_16948[1] = 1);
return statearr_16948;
});
var state_machine__6178__auto____1 = (function (state_16939){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_16939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e16949){if((e16949 instanceof Object))
{var ex__6181__auto__ = e16949;var statearr_16950_16960 = state_16939;(statearr_16950_16960[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16961 = state_16939;
state_16939 = G__16961;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_16939){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_16939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_16951 = f__6193__auto__.call(null);(statearr_16951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___16957);
return statearr_16951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
editor.innerHTML = hickory.render.hiccup_to_html.call(null,data);
parent.appendChild(editor);
var seq__16952 = cljs.core.seq.call(null,om_rte.core.dom_events);var chunk__16953 = null;var count__16954 = 0;var i__16955 = 0;while(true){
if((i__16955 < count__16954))
{var evt = cljs.core._nth.call(null,chunk__16953,i__16955);on.call(null,editor,evt,((function (seq__16952,chunk__16953,count__16954,i__16955,evt){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__16952,chunk__16953,count__16954,i__16955,evt))
);
{
var G__16962 = seq__16952;
var G__16963 = chunk__16953;
var G__16964 = count__16954;
var G__16965 = (i__16955 + 1);
seq__16952 = G__16962;
chunk__16953 = G__16963;
count__16954 = G__16964;
i__16955 = G__16965;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16952);if(temp__4092__auto__)
{var seq__16952__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16952__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16952__$1);{
var G__16966 = cljs.core.chunk_rest.call(null,seq__16952__$1);
var G__16967 = c__4191__auto__;
var G__16968 = cljs.core.count.call(null,c__4191__auto__);
var G__16969 = 0;
seq__16952 = G__16966;
chunk__16953 = G__16967;
count__16954 = G__16968;
i__16955 = G__16969;
continue;
}
} else
{var evt = cljs.core.first.call(null,seq__16952__$1);on.call(null,editor,evt,((function (seq__16952,chunk__16953,count__16954,i__16955,evt,seq__16952__$1,temp__4092__auto__){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,update,editor.innerHTML);
});})(seq__16952,chunk__16953,count__16954,i__16955,evt,seq__16952__$1,temp__4092__auto__))
);
{
var G__16970 = cljs.core.next.call(null,seq__16952__$1);
var G__16971 = null;
var G__16972 = 0;
var G__16973 = 0;
seq__16952 = G__16970;
chunk__16953 = G__16971;
count__16954 = G__16972;
i__16955 = G__16973;
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
om_rte.core.t16922.prototype.om$core$IInitState$ = true;
om_rte.core.t16922.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.args),new cljs.core.Keyword(null,"editor","editor",4001043679),(function (){var G__16956 = document.createElement("div");G__16956.setAttribute("contentEditable",true);
return G__16956;
})()], null);
});
om_rte.core.t16922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16924){var self__ = this;
var _16924__$1 = this;return self__.meta16923;
});
om_rte.core.t16922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16924,meta16923__$1){var self__ = this;
var _16924__$1 = this;return (new om_rte.core.t16922(self__.owner,self__.args,self__.rte,meta16923__$1));
});
om_rte.core.__GT_t16922 = (function __GT_t16922(owner__$1,args__$1,rte__$1,meta16923){return (new om_rte.core.t16922(owner__$1,args__$1,rte__$1,meta16923));
});
}
return (new om_rte.core.t16922(owner,args,rte,null));
});
om_rte.core.vis = (function vis(data,owner){if(typeof om_rte.core.t16977 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t16977 = (function (owner,data,vis,meta16978){
this.owner = owner;
this.data = data;
this.vis = vis;
this.meta16978 = meta16978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t16977.cljs$lang$type = true;
om_rte.core.t16977.cljs$lang$ctorStr = "om-rte.core/t16977";
om_rte.core.t16977.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t16977");
});
om_rte.core.t16977.prototype.om$core$IRender$ = true;
om_rte.core.t16977.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"font-family": "consolas"}},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t16977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16979){var self__ = this;
var _16979__$1 = this;return self__.meta16978;
});
om_rte.core.t16977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16979,meta16978__$1){var self__ = this;
var _16979__$1 = this;return (new om_rte.core.t16977(self__.owner,self__.data,self__.vis,meta16978__$1));
});
om_rte.core.__GT_t16977 = (function __GT_t16977(owner__$1,data__$1,vis__$1,meta16978){return (new om_rte.core.t16977(owner__$1,data__$1,vis__$1,meta16978));
});
}
return (new om_rte.core.t16977(owner,data,vis,null));
});
om.core.root.call(null,om_rte.core.rte,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
om.core.root.call(null,om_rte.core.vis,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("vis")], null));

//# sourceMappingURL=core.js.map