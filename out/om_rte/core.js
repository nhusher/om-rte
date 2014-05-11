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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,om_rte.core.text)),new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null)], null));
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.make_editor_node = (function make_editor_node(css_prefix,events,evt_callback,content){var n = document.createElement("div");var seq__9176_9180 = cljs.core.seq.call(null,events);var chunk__9177_9181 = null;var count__9178_9182 = 0;var i__9179_9183 = 0;while(true){
if((i__9179_9183 < count__9178_9182))
{var e_9184 = cljs.core._nth.call(null,chunk__9177_9181,i__9179_9183);n.addEventListener(e_9184,evt_callback);
{
var G__9185 = seq__9176_9180;
var G__9186 = chunk__9177_9181;
var G__9187 = count__9178_9182;
var G__9188 = (i__9179_9183 + 1);
seq__9176_9180 = G__9185;
chunk__9177_9181 = G__9186;
count__9178_9182 = G__9187;
i__9179_9183 = G__9188;
continue;
}
} else
{var temp__4092__auto___9189 = cljs.core.seq.call(null,seq__9176_9180);if(temp__4092__auto___9189)
{var seq__9176_9190__$1 = temp__4092__auto___9189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9176_9190__$1))
{var c__4191__auto___9191 = cljs.core.chunk_first.call(null,seq__9176_9190__$1);{
var G__9192 = cljs.core.chunk_rest.call(null,seq__9176_9190__$1);
var G__9193 = c__4191__auto___9191;
var G__9194 = cljs.core.count.call(null,c__4191__auto___9191);
var G__9195 = 0;
seq__9176_9180 = G__9192;
chunk__9177_9181 = G__9193;
count__9178_9182 = G__9194;
i__9179_9183 = G__9195;
continue;
}
} else
{var e_9196 = cljs.core.first.call(null,seq__9176_9190__$1);n.addEventListener(e_9196,evt_callback);
{
var G__9197 = cljs.core.next.call(null,seq__9176_9190__$1);
var G__9198 = null;
var G__9199 = 0;
var G__9200 = 0;
seq__9176_9180 = G__9197;
chunk__9177_9181 = G__9198;
count__9178_9182 = G__9199;
i__9179_9183 = G__9200;
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
om_rte.core.rte_field = (function rte_field(p__9201,owner){var map__9259 = p__9201;var map__9259__$1 = ((cljs.core.seq_QMARK_.call(null,map__9259))?cljs.core.apply.call(null,cljs.core.hash_map,map__9259):map__9259);var args = map__9259__$1;var throttle = cljs.core.get.call(null,map__9259__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var css_prefix = cljs.core.get.call(null,map__9259__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var content = cljs.core.get.call(null,map__9259__$1,new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.List.EMPTY);var cmd_ch = cljs.core.get.call(null,map__9259__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9260 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9260 = (function (cmd_ch,content,css_prefix,throttle,args,map__9259,owner,p__9201,rte_field,meta9261){
this.cmd_ch = cmd_ch;
this.content = content;
this.css_prefix = css_prefix;
this.throttle = throttle;
this.args = args;
this.map__9259 = map__9259;
this.owner = owner;
this.p__9201 = p__9201;
this.rte_field = rte_field;
this.meta9261 = meta9261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9260.cljs$lang$type = true;
om_rte.core.t9260.cljs$lang$ctorStr = "om-rte.core/t9260";
om_rte.core.t9260.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9260");
});
om_rte.core.t9260.prototype.om$core$IRenderState$ = true;
om_rte.core.t9260.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"focused","focused",4617830121).cljs$core$IFn$_invoke$arity$1(s))?"focused ":"not-focused ")),cljs.core.str([cljs.core.str(self__.css_prefix),cljs.core.str("-container")].join(''))].join('')},null);
});
om_rte.core.t9260.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t9260.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t9260.prototype.om$core$IDidMount$ = true;
om_rte.core.t9260.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var update_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var update_fn = ((function (update_ch){
return (function() { 
var G__9316__delegate = function (args__$2){var el = this;return cljs.core.async.put_BANG_.call(null,update_ch,el.innerHTML);
};
var G__9316 = function (var_args){
var args__$2 = null;if (arguments.length > 0) {
  args__$2 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9316__delegate.call(this,args__$2);};
G__9316.cljs$lang$maxFixedArity = 0;
G__9316.cljs$lang$applyTo = (function (arglist__9317){
var args__$2 = cljs.core.seq(arglist__9317);
return G__9316__delegate(args__$2);
});
G__9316.cljs$core$IFn$_invoke$arity$variadic = G__9316__delegate;
return G__9316;
})()
;})(update_ch))
;var editor = om_rte.core.make_editor_node.call(null,self__.css_prefix,om_rte.core.dom_events,update_fn,hickory.render.hiccup_to_html.call(null,self__.content));var parent = om.core.get_node.call(null,self__.owner);if((self__.cmd_ch == null))
{throw Error;
} else
{}
var c__6192__auto___9318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9275){var state_val_9276 = (state_9275[1]);if((state_val_9276 === 4))
{var inst_9266 = (state_9275[2]);var inst_9267 = cljs.core.nth.call(null,inst_9266,0,null);var inst_9268 = cljs.core.nth.call(null,inst_9266,1,null);var inst_9269 = cljs.core.name.call(null,inst_9267);var inst_9270 = document.execCommand(inst_9269,inst_9268);var state_9275__$1 = (function (){var statearr_9277 = state_9275;(statearr_9277[7] = inst_9270);
return statearr_9277;
})();var statearr_9278_9319 = state_9275__$1;(statearr_9278_9319[2] = null);
(statearr_9278_9319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9276 === 3))
{var inst_9273 = (state_9275[2]);var state_9275__$1 = state_9275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9275__$1,inst_9273);
} else
{if((state_val_9276 === 2))
{var state_9275__$1 = state_9275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9275__$1,4,self__.cmd_ch);
} else
{if((state_val_9276 === 1))
{var state_9275__$1 = state_9275;var statearr_9279_9320 = state_9275__$1;(statearr_9279_9320[2] = null);
(statearr_9279_9320[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9283 = [null,null,null,null,null,null,null,null];(statearr_9283[0] = state_machine__6178__auto__);
(statearr_9283[1] = 1);
return statearr_9283;
});
var state_machine__6178__auto____1 = (function (state_9275){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9275);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9284){if((e9284 instanceof Object))
{var ex__6181__auto__ = e9284;var statearr_9285_9321 = state_9275;(statearr_9285_9321[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9322 = state_9275;
state_9275 = G__9322;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9275){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9286 = f__6193__auto__.call(null);(statearr_9286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9318);
return statearr_9286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___9323 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9303){var state_val_9304 = (state_9303[1]);if((state_val_9304 === 5))
{var inst_9298 = (state_9303[2]);var state_9303__$1 = (function (){var statearr_9305 = state_9303;(statearr_9305[7] = inst_9298);
return statearr_9305;
})();var statearr_9306_9324 = state_9303__$1;(statearr_9306_9324[2] = null);
(statearr_9306_9324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9304 === 4))
{var inst_9289 = (state_9303[2]);var inst_9290 = hickory.core.parse_fragment.call(null,inst_9289);var inst_9291 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9290);var inst_9292 = document.activeElement;var inst_9293 = cljs.core._EQ_.call(null,inst_9292,editor);var inst_9294 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"focused","focused",4617830121),inst_9293);var inst_9295 = om.core.update_BANG_.call(null,self__.args,new cljs.core.Keyword(null,"content","content",1965434859),inst_9291);var inst_9296 = cljs.core.async.timeout.call(null,self__.throttle);var state_9303__$1 = (function (){var statearr_9307 = state_9303;(statearr_9307[8] = inst_9294);
(statearr_9307[9] = inst_9295);
return statearr_9307;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9303__$1,5,inst_9296);
} else
{if((state_val_9304 === 3))
{var inst_9301 = (state_9303[2]);var state_9303__$1 = state_9303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9303__$1,inst_9301);
} else
{if((state_val_9304 === 2))
{var state_9303__$1 = state_9303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9303__$1,4,update_ch);
} else
{if((state_val_9304 === 1))
{var state_9303__$1 = state_9303;var statearr_9308_9325 = state_9303__$1;(statearr_9308_9325[2] = null);
(statearr_9308_9325[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9312 = [null,null,null,null,null,null,null,null,null,null];(statearr_9312[0] = state_machine__6178__auto__);
(statearr_9312[1] = 1);
return statearr_9312;
});
var state_machine__6178__auto____1 = (function (state_9303){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9313){if((e9313 instanceof Object))
{var ex__6181__auto__ = e9313;var statearr_9314_9326 = state_9303;(statearr_9314_9326[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9327 = state_9303;
state_9303 = G__9327;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9303){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9315 = f__6193__auto__.call(null);(statearr_9315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9323);
return statearr_9315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.core.t9260.prototype.om$core$IInitState$ = true;
om_rte.core.t9260.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",4617830121),false], null);
});
om_rte.core.t9260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9262){var self__ = this;
var _9262__$1 = this;return self__.meta9261;
});
om_rte.core.t9260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9262,meta9261__$1){var self__ = this;
var _9262__$1 = this;return (new om_rte.core.t9260(self__.cmd_ch,self__.content,self__.css_prefix,self__.throttle,self__.args,self__.map__9259,self__.owner,self__.p__9201,self__.rte_field,meta9261__$1));
});
om_rte.core.__GT_t9260 = (function __GT_t9260(cmd_ch__$1,content__$1,css_prefix__$1,throttle__$1,args__$1,map__9259__$2,owner__$1,p__9201__$1,rte_field__$1,meta9261){return (new om_rte.core.t9260(cmd_ch__$1,content__$1,css_prefix__$1,throttle__$1,args__$1,map__9259__$2,owner__$1,p__9201__$1,rte_field__$1,meta9261));
});
}
return (new om_rte.core.t9260(cmd_ch,content,css_prefix,throttle,args,map__9259__$1,owner,p__9201,rte_field,null));
});
om_rte.core.rte_vis = (function rte_vis(data,owner){if(typeof om_rte.core.t9331 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9331 = (function (owner,data,rte_vis,meta9332){
this.owner = owner;
this.data = data;
this.rte_vis = rte_vis;
this.meta9332 = meta9332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9331.cljs$lang$type = true;
om_rte.core.t9331.cljs$lang$ctorStr = "om-rte.core/t9331";
om_rte.core.t9331.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9331");
});
om_rte.core.t9331.prototype.om$core$IRender$ = true;
om_rte.core.t9331.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "om-rte-visualizer"},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t9331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9333){var self__ = this;
var _9333__$1 = this;return self__.meta9332;
});
om_rte.core.t9331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9333,meta9332__$1){var self__ = this;
var _9333__$1 = this;return (new om_rte.core.t9331(self__.owner,self__.data,self__.rte_vis,meta9332__$1));
});
om_rte.core.__GT_t9331 = (function __GT_t9331(owner__$1,data__$1,rte_vis__$1,meta9332){return (new om_rte.core.t9331(owner__$1,data__$1,rte_vis__$1,meta9332));
});
}
return (new om_rte.core.t9331(owner,data,rte_vis,null));
});
om_rte.core.rte_ui = (function rte_ui(p__9334,owner){var map__9339 = p__9334;var map__9339__$1 = ((cljs.core.seq_QMARK_.call(null,map__9339))?cljs.core.apply.call(null,cljs.core.hash_map,map__9339):map__9339);var data = map__9339__$1;var cmd_ch = cljs.core.get.call(null,map__9339__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9340 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9340 = (function (cmd_ch,data,map__9339,owner,p__9334,rte_ui,meta9341){
this.cmd_ch = cmd_ch;
this.data = data;
this.map__9339 = map__9339;
this.owner = owner;
this.p__9334 = p__9334;
this.rte_ui = rte_ui;
this.meta9341 = meta9341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9340.cljs$lang$type = true;
om_rte.core.t9340.cljs$lang$ctorStr = "om-rte.core/t9340";
om_rte.core.t9340.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9340");
});
om_rte.core.t9340.prototype.om$core$IRender$ = true;
om_rte.core.t9340.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "rte-ui"},React.DOM.div(null,React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscript","subscript",1528746621)], null));
}), "className": "pure-button pure-button-primary", "type": "button"},"Sub")," ",React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"superscript","superscript",4142885752)], null));
}), "className": "pure-button pure-button-primary", "type": "button"},"Sup")," ",React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,self__.cmd_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removeFormat","removeFormat",4078656781)], null));
}), "className": "pure-button", "type": "button"},"Strip Format")),om.core.build.call(null,om_rte.core.rte_field,self__.data),om.core.build.call(null,om_rte.core.rte_vis,self__.data));
});
om_rte.core.t9340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9342){var self__ = this;
var _9342__$1 = this;return self__.meta9341;
});
om_rte.core.t9340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9342,meta9341__$1){var self__ = this;
var _9342__$1 = this;return (new om_rte.core.t9340(self__.cmd_ch,self__.data,self__.map__9339,self__.owner,self__.p__9334,self__.rte_ui,meta9341__$1));
});
om_rte.core.__GT_t9340 = (function __GT_t9340(cmd_ch__$1,data__$1,map__9339__$2,owner__$1,p__9334__$1,rte_ui__$1,meta9341){return (new om_rte.core.t9340(cmd_ch__$1,data__$1,map__9339__$2,owner__$1,p__9334__$1,rte_ui__$1,meta9341));
});
}
return (new om_rte.core.t9340(cmd_ch,data,map__9339__$1,owner,p__9334,rte_ui,null));
});
om.core.root.call(null,om_rte.core.rte_ui,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map