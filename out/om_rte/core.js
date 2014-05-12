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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,om_rte.core.text)),new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null)], null));
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
n.setAttribute("class",[cljs.core.str(css_prefix),cljs.core.str("editor")].join(''));
n.setAttribute("contentEditable",true);
n.innerHTML = hickory.render.hiccup_to_html.call(null,content);
return n;
});
om_rte.core.rte_field = (function rte_field(p__9200,owner){var map__9258 = p__9200;var map__9258__$1 = ((cljs.core.seq_QMARK_.call(null,map__9258))?cljs.core.apply.call(null,cljs.core.hash_map,map__9258):map__9258);var args = map__9258__$1;var throttle = cljs.core.get.call(null,map__9258__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var css_prefix = cljs.core.get.call(null,map__9258__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte-");var content = cljs.core.get.call(null,map__9258__$1,new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.List.EMPTY);var cmd_ch = cljs.core.get.call(null,map__9258__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9259 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9259 = (function (cmd_ch,content,css_prefix,throttle,args,map__9258,owner,p__9200,rte_field,meta9260){
this.cmd_ch = cmd_ch;
this.content = content;
this.css_prefix = css_prefix;
this.throttle = throttle;
this.args = args;
this.map__9258 = map__9258;
this.owner = owner;
this.p__9200 = p__9200;
this.rte_field = rte_field;
this.meta9260 = meta9260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9259.cljs$lang$type = true;
om_rte.core.t9259.cljs$lang$ctorStr = "om-rte.core/t9259";
om_rte.core.t9259.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9259");
});
om_rte.core.t9259.prototype.om$core$IRenderState$ = true;
om_rte.core.t9259.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"focused","focused",4617830121).cljs$core$IFn$_invoke$arity$1(s))?"focused ":"not-focused ")),cljs.core.str([cljs.core.str(self__.css_prefix),cljs.core.str("container")].join(''))].join('')},null);
});
om_rte.core.t9259.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t9259.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t9259.prototype.om$core$IDidMount$ = true;
om_rte.core.t9259.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var parent = om.core.get_node.call(null,self__.owner);var update_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var update_fn = ((function (parent,update_ch){
return (function (___$2){var el = this;return cljs.core.async.put_BANG_.call(null,update_ch,el.innerHTML);
});})(parent,update_ch))
;var editor = om_rte.core.make_editor.call(null,self__.css_prefix,om_rte.core.dom_events,update_fn,hickory.render.hiccup_to_html.call(null,self__.content));if((self__.cmd_ch == null))
{throw Error("Command channel disconnected!");
} else
{}
var c__6192__auto___9315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9274){var state_val_9275 = (state_9274[1]);if((state_val_9275 === 4))
{var inst_9265 = (state_9274[2]);var inst_9266 = cljs.core.nth.call(null,inst_9265,0,null);var inst_9267 = cljs.core.nth.call(null,inst_9265,1,null);var inst_9268 = cljs.core.name.call(null,inst_9266);var inst_9269 = document.execCommand(inst_9268,inst_9267);var state_9274__$1 = (function (){var statearr_9276 = state_9274;(statearr_9276[7] = inst_9269);
return statearr_9276;
})();var statearr_9277_9316 = state_9274__$1;(statearr_9277_9316[2] = null);
(statearr_9277_9316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9275 === 3))
{var inst_9272 = (state_9274[2]);var state_9274__$1 = state_9274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9274__$1,inst_9272);
} else
{if((state_val_9275 === 2))
{var state_9274__$1 = state_9274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9274__$1,4,self__.cmd_ch);
} else
{if((state_val_9275 === 1))
{var state_9274__$1 = state_9274;var statearr_9278_9317 = state_9274__$1;(statearr_9278_9317[2] = null);
(statearr_9278_9317[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9282 = [null,null,null,null,null,null,null,null];(statearr_9282[0] = state_machine__6178__auto__);
(statearr_9282[1] = 1);
return statearr_9282;
});
var state_machine__6178__auto____1 = (function (state_9274){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9283){if((e9283 instanceof Object))
{var ex__6181__auto__ = e9283;var statearr_9284_9318 = state_9274;(statearr_9284_9318[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9319 = state_9274;
state_9274 = G__9319;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9274){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9285 = f__6193__auto__.call(null);(statearr_9285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9315);
return statearr_9285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___9320 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9302){var state_val_9303 = (state_9302[1]);if((state_val_9303 === 5))
{var inst_9297 = (state_9302[2]);var state_9302__$1 = (function (){var statearr_9304 = state_9302;(statearr_9304[7] = inst_9297);
return statearr_9304;
})();var statearr_9305_9321 = state_9302__$1;(statearr_9305_9321[2] = null);
(statearr_9305_9321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9303 === 4))
{var inst_9288 = (state_9302[2]);var inst_9289 = hickory.core.parse_fragment.call(null,inst_9288);var inst_9290 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9289);var inst_9291 = document.activeElement;var inst_9292 = cljs.core._EQ_.call(null,inst_9291,editor);var inst_9293 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"focused","focused",4617830121),inst_9292);var inst_9294 = om.core.update_BANG_.call(null,self__.args,new cljs.core.Keyword(null,"content","content",1965434859),inst_9290);var inst_9295 = cljs.core.async.timeout.call(null,self__.throttle);var state_9302__$1 = (function (){var statearr_9306 = state_9302;(statearr_9306[8] = inst_9293);
(statearr_9306[9] = inst_9294);
return statearr_9306;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9302__$1,5,inst_9295);
} else
{if((state_val_9303 === 3))
{var inst_9300 = (state_9302[2]);var state_9302__$1 = state_9302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9302__$1,inst_9300);
} else
{if((state_val_9303 === 2))
{var state_9302__$1 = state_9302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9302__$1,4,update_ch);
} else
{if((state_val_9303 === 1))
{var state_9302__$1 = state_9302;var statearr_9307_9322 = state_9302__$1;(statearr_9307_9322[2] = null);
(statearr_9307_9322[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9311 = [null,null,null,null,null,null,null,null,null,null];(statearr_9311[0] = state_machine__6178__auto__);
(statearr_9311[1] = 1);
return statearr_9311;
});
var state_machine__6178__auto____1 = (function (state_9302){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9302);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9312){if((e9312 instanceof Object))
{var ex__6181__auto__ = e9312;var statearr_9313_9323 = state_9302;(statearr_9313_9323[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9324 = state_9302;
state_9302 = G__9324;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9302){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9314 = f__6193__auto__.call(null);(statearr_9314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9320);
return statearr_9314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.core.t9259.prototype.om$core$IInitState$ = true;
om_rte.core.t9259.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",4617830121),false], null);
});
om_rte.core.t9259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9261){var self__ = this;
var _9261__$1 = this;return self__.meta9260;
});
om_rte.core.t9259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9261,meta9260__$1){var self__ = this;
var _9261__$1 = this;return (new om_rte.core.t9259(self__.cmd_ch,self__.content,self__.css_prefix,self__.throttle,self__.args,self__.map__9258,self__.owner,self__.p__9200,self__.rte_field,meta9260__$1));
});
om_rte.core.__GT_t9259 = (function __GT_t9259(cmd_ch__$1,content__$1,css_prefix__$1,throttle__$1,args__$1,map__9258__$2,owner__$1,p__9200__$1,rte_field__$1,meta9260){return (new om_rte.core.t9259(cmd_ch__$1,content__$1,css_prefix__$1,throttle__$1,args__$1,map__9258__$2,owner__$1,p__9200__$1,rte_field__$1,meta9260));
});
}
return (new om_rte.core.t9259(cmd_ch,content,css_prefix,throttle,args,map__9258__$1,owner,p__9200,rte_field,null));
});
om_rte.core.rte_vis = (function rte_vis(data,owner){if(typeof om_rte.core.t9328 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9328 = (function (owner,data,rte_vis,meta9329){
this.owner = owner;
this.data = data;
this.rte_vis = rte_vis;
this.meta9329 = meta9329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9328.cljs$lang$type = true;
om_rte.core.t9328.cljs$lang$ctorStr = "om-rte.core/t9328";
om_rte.core.t9328.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9328");
});
om_rte.core.t9328.prototype.om$core$IRender$ = true;
om_rte.core.t9328.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "om-rte-visualizer"},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t9328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9330){var self__ = this;
var _9330__$1 = this;return self__.meta9329;
});
om_rte.core.t9328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9330,meta9329__$1){var self__ = this;
var _9330__$1 = this;return (new om_rte.core.t9328(self__.owner,self__.data,self__.rte_vis,meta9329__$1));
});
om_rte.core.__GT_t9328 = (function __GT_t9328(owner__$1,data__$1,rte_vis__$1,meta9329){return (new om_rte.core.t9328(owner__$1,data__$1,rte_vis__$1,meta9329));
});
}
return (new om_rte.core.t9328(owner,data,rte_vis,null));
});
om_rte.core.rte_ui = (function rte_ui(p__9331,owner){var map__9336 = p__9331;var map__9336__$1 = ((cljs.core.seq_QMARK_.call(null,map__9336))?cljs.core.apply.call(null,cljs.core.hash_map,map__9336):map__9336);var data = map__9336__$1;var throttle = cljs.core.get.call(null,map__9336__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var cmd_ch = cljs.core.get.call(null,map__9336__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null));var css_class = cljs.core.get.call(null,map__9336__$1,new cljs.core.Keyword(null,"css-class","css-class",1391027360),"om-rte");var content = cljs.core.get.call(null,map__9336__$1,new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.List.EMPTY);if(typeof om_rte.core.t9337 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9337 = (function (content,css_class,cmd_ch,throttle,data,map__9336,owner,p__9331,rte_ui,meta9338){
this.content = content;
this.css_class = css_class;
this.cmd_ch = cmd_ch;
this.throttle = throttle;
this.data = data;
this.map__9336 = map__9336;
this.owner = owner;
this.p__9331 = p__9331;
this.rte_ui = rte_ui;
this.meta9338 = meta9338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9337.cljs$lang$type = true;
om_rte.core.t9337.cljs$lang$ctorStr = "om-rte.core/t9337";
om_rte.core.t9337.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9337");
});
om_rte.core.t9337.prototype.om$core$IRenderState$ = true;
om_rte.core.t9337.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div({"className": self__.css_class},om.core.build.call(null,om_rte.core.rte_field,self__.data),om.core.build.call(null,om_rte.core.rte_vis,self__.data));
});
om_rte.core.t9337.prototype.om$core$IInitState$ = true;
om_rte.core.t9337.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
om_rte.core.t9337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9339){var self__ = this;
var _9339__$1 = this;return self__.meta9338;
});
om_rte.core.t9337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9339,meta9338__$1){var self__ = this;
var _9339__$1 = this;return (new om_rte.core.t9337(self__.content,self__.css_class,self__.cmd_ch,self__.throttle,self__.data,self__.map__9336,self__.owner,self__.p__9331,self__.rte_ui,meta9338__$1));
});
om_rte.core.__GT_t9337 = (function __GT_t9337(content__$1,css_class__$1,cmd_ch__$1,throttle__$1,data__$1,map__9336__$2,owner__$1,p__9331__$1,rte_ui__$1,meta9338){return (new om_rte.core.t9337(content__$1,css_class__$1,cmd_ch__$1,throttle__$1,data__$1,map__9336__$2,owner__$1,p__9331__$1,rte_ui__$1,meta9338));
});
}
return (new om_rte.core.t9337(content,css_class,cmd_ch,throttle,data,map__9336__$1,owner,p__9331,rte_ui,null));
});
om.core.root.call(null,om_rte.core.rte_ui,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map