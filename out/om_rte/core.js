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
om_rte.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,om_rte.core.text))], null));
om_rte.core.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.core.make_editor = (function make_editor(css_prefix,events,evt_callback,content){var n = document.createElement("div");var seq__9270_9274 = cljs.core.seq.call(null,events);var chunk__9271_9275 = null;var count__9272_9276 = 0;var i__9273_9277 = 0;while(true){
if((i__9273_9277 < count__9272_9276))
{var e_9278 = cljs.core._nth.call(null,chunk__9271_9275,i__9273_9277);n.addEventListener(e_9278,evt_callback);
{
var G__9279 = seq__9270_9274;
var G__9280 = chunk__9271_9275;
var G__9281 = count__9272_9276;
var G__9282 = (i__9273_9277 + 1);
seq__9270_9274 = G__9279;
chunk__9271_9275 = G__9280;
count__9272_9276 = G__9281;
i__9273_9277 = G__9282;
continue;
}
} else
{var temp__4092__auto___9283 = cljs.core.seq.call(null,seq__9270_9274);if(temp__4092__auto___9283)
{var seq__9270_9284__$1 = temp__4092__auto___9283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9270_9284__$1))
{var c__4191__auto___9285 = cljs.core.chunk_first.call(null,seq__9270_9284__$1);{
var G__9286 = cljs.core.chunk_rest.call(null,seq__9270_9284__$1);
var G__9287 = c__4191__auto___9285;
var G__9288 = cljs.core.count.call(null,c__4191__auto___9285);
var G__9289 = 0;
seq__9270_9274 = G__9286;
chunk__9271_9275 = G__9287;
count__9272_9276 = G__9288;
i__9273_9277 = G__9289;
continue;
}
} else
{var e_9290 = cljs.core.first.call(null,seq__9270_9284__$1);n.addEventListener(e_9290,evt_callback);
{
var G__9291 = cljs.core.next.call(null,seq__9270_9284__$1);
var G__9292 = null;
var G__9293 = 0;
var G__9294 = 0;
seq__9270_9274 = G__9291;
chunk__9271_9275 = G__9292;
count__9272_9276 = G__9293;
i__9273_9277 = G__9294;
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
var G__9295 = p.parentNode;
p = G__9295;
continue;
}
}
}
break;
}
});
om_rte.core.rte_field = (function rte_field(data,owner,p__9296){var map__9362 = p__9296;var map__9362__$1 = ((cljs.core.seq_QMARK_.call(null,map__9362))?cljs.core.apply.call(null,cljs.core.hash_map,map__9362):map__9362);var opts = map__9362__$1;var css_prefix = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var throttle = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var cmd_ch = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9363 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9363 = (function (cmd_ch,throttle,css_prefix,opts,map__9362,p__9296,owner,data,rte_field,meta9364){
this.cmd_ch = cmd_ch;
this.throttle = throttle;
this.css_prefix = css_prefix;
this.opts = opts;
this.map__9362 = map__9362;
this.p__9296 = p__9296;
this.owner = owner;
this.data = data;
this.rte_field = rte_field;
this.meta9364 = meta9364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9363.cljs$lang$type = true;
om_rte.core.t9363.cljs$lang$ctorStr = "om-rte.core/t9363";
om_rte.core.t9363.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9363");
});
om_rte.core.t9363.prototype.om$core$IRender$ = true;
om_rte.core.t9363.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-container")].join('')},null);
});
om_rte.core.t9363.prototype.om$core$IWillUnmount$ = true;
om_rte.core.t9363.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.core.t9363.prototype.om$core$IDidMount$ = true;
om_rte.core.t9363.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
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
var c__6217__auto___9427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_9383){var state_val_9384 = (state_9383[1]);if((state_val_9384 === 7))
{var inst_9378 = (state_9383[2]);var state_9383__$1 = (function (){var statearr_9385 = state_9383;(statearr_9385[7] = inst_9378);
return statearr_9385;
})();var statearr_9386_9428 = state_9383__$1;(statearr_9386_9428[2] = null);
(statearr_9386_9428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9384 === 6))
{var state_9383__$1 = state_9383;var statearr_9387_9429 = state_9383__$1;(statearr_9387_9429[2] = null);
(statearr_9387_9429[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9384 === 5))
{var inst_9370 = (state_9383[8]);var inst_9371 = (state_9383[9]);var inst_9374 = document.execCommand(inst_9370,false,inst_9371);var state_9383__$1 = (function (){var statearr_9388 = state_9383;(statearr_9388[10] = inst_9374);
return statearr_9388;
})();var statearr_9389_9430 = state_9383__$1;(statearr_9389_9430[2] = null);
(statearr_9389_9430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9384 === 4))
{var inst_9369 = (state_9383[2]);var inst_9370 = cljs.core.nth.call(null,inst_9369,0,null);var inst_9371 = cljs.core.nth.call(null,inst_9369,1,null);var inst_9372 = om_rte.core.rte_selected_QMARK_.call(null,self__.owner);var state_9383__$1 = (function (){var statearr_9390 = state_9383;(statearr_9390[8] = inst_9370);
(statearr_9390[9] = inst_9371);
return statearr_9390;
})();if(inst_9372)
{var statearr_9391_9431 = state_9383__$1;(statearr_9391_9431[1] = 5);
} else
{var statearr_9392_9432 = state_9383__$1;(statearr_9392_9432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9384 === 3))
{var inst_9381 = (state_9383[2]);var state_9383__$1 = state_9383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9383__$1,inst_9381);
} else
{if((state_val_9384 === 2))
{var state_9383__$1 = state_9383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9383__$1,4,self__.cmd_ch);
} else
{if((state_val_9384 === 1))
{var state_9383__$1 = state_9383;var statearr_9393_9433 = state_9383__$1;(statearr_9393_9433[2] = null);
(statearr_9393_9433[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_9397 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9397[0] = state_machine__6203__auto__);
(statearr_9397[1] = 1);
return statearr_9397;
});
var state_machine__6203__auto____1 = (function (state_9383){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_9383);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e9398){if((e9398 instanceof Object))
{var ex__6206__auto__ = e9398;var statearr_9399_9434 = state_9383;(statearr_9399_9434[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9435 = state_9383;
state_9383 = G__9435;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_9383){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_9383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_9400 = f__6218__auto__.call(null);(statearr_9400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___9427);
return statearr_9400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
}));
var c__6217__auto___9436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_9414){var state_val_9415 = (state_9414[1]);if((state_val_9415 === 5))
{var inst_9409 = (state_9414[2]);var state_9414__$1 = (function (){var statearr_9416 = state_9414;(statearr_9416[7] = inst_9409);
return statearr_9416;
})();var statearr_9417_9437 = state_9414__$1;(statearr_9417_9437[2] = null);
(statearr_9417_9437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9415 === 4))
{var inst_9403 = (state_9414[2]);var inst_9404 = hickory.core.parse_fragment.call(null,inst_9403);var inst_9405 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9404);var inst_9406 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"content","content",1965434859),inst_9405);var inst_9407 = cljs.core.async.timeout.call(null,self__.throttle);var state_9414__$1 = (function (){var statearr_9418 = state_9414;(statearr_9418[8] = inst_9406);
return statearr_9418;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9414__$1,5,inst_9407);
} else
{if((state_val_9415 === 3))
{var inst_9412 = (state_9414[2]);var state_9414__$1 = state_9414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9414__$1,inst_9412);
} else
{if((state_val_9415 === 2))
{var state_9414__$1 = state_9414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9414__$1,4,upd_ch);
} else
{if((state_val_9415 === 1))
{var state_9414__$1 = state_9414;var statearr_9419_9438 = state_9414__$1;(statearr_9419_9438[2] = null);
(statearr_9419_9438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_9423 = [null,null,null,null,null,null,null,null,null];(statearr_9423[0] = state_machine__6203__auto__);
(statearr_9423[1] = 1);
return statearr_9423;
});
var state_machine__6203__auto____1 = (function (state_9414){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_9414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object))
{var ex__6206__auto__ = e9424;var statearr_9425_9439 = state_9414;(statearr_9425_9439[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9440 = state_9414;
state_9414 = G__9440;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_9414){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_9414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_9426 = f__6218__auto__.call(null);(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___9436);
return statearr_9426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.core.t9363.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9363.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-field";
});
om_rte.core.t9363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9365){var self__ = this;
var _9365__$1 = this;return self__.meta9364;
});
om_rte.core.t9363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9365,meta9364__$1){var self__ = this;
var _9365__$1 = this;return (new om_rte.core.t9363(self__.cmd_ch,self__.throttle,self__.css_prefix,self__.opts,self__.map__9362,self__.p__9296,self__.owner,self__.data,self__.rte_field,meta9364__$1));
});
om_rte.core.__GT_t9363 = (function __GT_t9363(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9362__$2,p__9296__$1,owner__$1,data__$1,rte_field__$1,meta9364){return (new om_rte.core.t9363(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9362__$2,p__9296__$1,owner__$1,data__$1,rte_field__$1,meta9364));
});
}
return (new om_rte.core.t9363(cmd_ch,throttle,css_prefix,opts,map__9362__$1,p__9296,owner,data,rte_field,null));
});
om_rte.core.rte_vis = (function rte_vis(data,owner){if(typeof om_rte.core.t9444 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9444 = (function (owner,data,rte_vis,meta9445){
this.owner = owner;
this.data = data;
this.rte_vis = rte_vis;
this.meta9445 = meta9445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9444.cljs$lang$type = true;
om_rte.core.t9444.cljs$lang$ctorStr = "om-rte.core/t9444";
om_rte.core.t9444.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9444");
});
om_rte.core.t9444.prototype.om$core$IRender$ = true;
om_rte.core.t9444.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "om-rte-visualizer"},cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_rte.core.t9444.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9444.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-visualizer";
});
om_rte.core.t9444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9446){var self__ = this;
var _9446__$1 = this;return self__.meta9445;
});
om_rte.core.t9444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9446,meta9445__$1){var self__ = this;
var _9446__$1 = this;return (new om_rte.core.t9444(self__.owner,self__.data,self__.rte_vis,meta9445__$1));
});
om_rte.core.__GT_t9444 = (function __GT_t9444(owner__$1,data__$1,rte_vis__$1,meta9445){return (new om_rte.core.t9444(owner__$1,data__$1,rte_vis__$1,meta9445));
});
}
return (new om_rte.core.t9444(owner,data,rte_vis,null));
});
om_rte.core.def_controls = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-bold",new cljs.core.Keyword(null,"label","label",1116631654),"Bold",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9447_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9447_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-italic",new cljs.core.Keyword(null,"label","label",1116631654),"Italic",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9448_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9448_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["italic"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-underline",new cljs.core.Keyword(null,"label","label",1116631654),"Underline",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9449_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9449_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["underline"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-quote-left",new cljs.core.Keyword(null,"label","label",1116631654),"Quote",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9450_SHARP_){return cljs.core.async.put_BANG_.call(null,p1__9450_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["formatblock","blockquote"], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1017130987),"fa-link",new cljs.core.Keyword(null,"label","label",1116631654),"Link",new cljs.core.Keyword(null,"action","action",3885920680),(function (p1__9451_SHARP_){return cljs.core.prn.call(null,p1__9451_SHARP_);
})], null)], null);
om_rte.core.rte_controls = (function rte_controls(data,owner,p__9452){var map__9459 = p__9452;var map__9459__$1 = ((cljs.core.seq_QMARK_.call(null,map__9459))?cljs.core.apply.call(null,cljs.core.hash_map,map__9459):map__9459);var opts = map__9459__$1;var controls = cljs.core.get.call(null,map__9459__$1,new cljs.core.Keyword(null,"controls","controls",4741937704),om_rte.core.def_controls);var css_prefix = cljs.core.get.call(null,map__9459__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9459__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.core.t9460 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9460 = (function (cmd_ch,css_prefix,controls,opts,map__9459,p__9452,owner,data,rte_controls,meta9461){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.controls = controls;
this.opts = opts;
this.map__9459 = map__9459;
this.p__9452 = p__9452;
this.owner = owner;
this.data = data;
this.rte_controls = rte_controls;
this.meta9461 = meta9461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9460.cljs$lang$type = true;
om_rte.core.t9460.cljs$lang$ctorStr = "om-rte.core/t9460";
om_rte.core.t9460.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9460");
});
om_rte.core.t9460.prototype.om$core$IRender$ = true;
om_rte.core.t9460.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-controls")].join('')},cljs.core.map.call(null,(function (p__9463){var map__9464 = p__9463;var map__9464__$1 = ((cljs.core.seq_QMARK_.call(null,map__9464))?cljs.core.apply.call(null,cljs.core.hash_map,map__9464):map__9464);var action = cljs.core.get.call(null,map__9464__$1,new cljs.core.Keyword(null,"action","action",3885920680));var label = cljs.core.get.call(null,map__9464__$1,new cljs.core.Keyword(null,"label","label",1116631654));var icon = cljs.core.get.call(null,map__9464__$1,new cljs.core.Keyword(null,"icon","icon",1017130987));return React.DOM.button({"onClick": (function (___$2){return action.call(null,self__.cmd_ch);
}), "title": label, "className": "pure-button"},React.DOM.i({"className": [cljs.core.str("fa "),cljs.core.str(icon)].join('')}));
}),self__.controls));
});
om_rte.core.t9460.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9460.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-controls";
});
om_rte.core.t9460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9462){var self__ = this;
var _9462__$1 = this;return self__.meta9461;
});
om_rte.core.t9460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9462,meta9461__$1){var self__ = this;
var _9462__$1 = this;return (new om_rte.core.t9460(self__.cmd_ch,self__.css_prefix,self__.controls,self__.opts,self__.map__9459,self__.p__9452,self__.owner,self__.data,self__.rte_controls,meta9461__$1));
});
om_rte.core.__GT_t9460 = (function __GT_t9460(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9459__$2,p__9452__$1,owner__$1,data__$1,rte_controls__$1,meta9461){return (new om_rte.core.t9460(cmd_ch__$1,css_prefix__$1,controls__$1,opts__$1,map__9459__$2,p__9452__$1,owner__$1,data__$1,rte_controls__$1,meta9461));
});
}
return (new om_rte.core.t9460(cmd_ch,css_prefix,controls,opts,map__9459__$1,p__9452,owner,data,rte_controls,null));
});
om_rte.core.rte_ui = (function() {
var rte_ui = null;
var rte_ui__2 = (function (data,owner){return rte_ui.call(null,data,owner,null);
});
var rte_ui__3 = (function (data,owner,p__9465){var map__9470 = p__9465;var map__9470__$1 = ((cljs.core.seq_QMARK_.call(null,map__9470))?cljs.core.apply.call(null,cljs.core.hash_map,map__9470):map__9470);var opts = map__9470__$1;var throttle = cljs.core.get.call(null,map__9470__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var css_prefix = cljs.core.get.call(null,map__9470__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var cmd_ch = cljs.core.get.call(null,map__9470__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null));if(typeof om_rte.core.t9471 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.core.t9471 = (function (cmd_ch,css_prefix,throttle,opts,map__9470,p__9465,owner,data,rte_ui,meta9472){
this.cmd_ch = cmd_ch;
this.css_prefix = css_prefix;
this.throttle = throttle;
this.opts = opts;
this.map__9470 = map__9470;
this.p__9465 = p__9465;
this.owner = owner;
this.data = data;
this.rte_ui = rte_ui;
this.meta9472 = meta9472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.core.t9471.cljs$lang$type = true;
om_rte.core.t9471.cljs$lang$ctorStr = "om-rte.core/t9471";
om_rte.core.t9471.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.core/t9471");
});
om_rte.core.t9471.prototype.om$core$IRender$ = true;
om_rte.core.t9471.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.css_prefix},om.core.build.call(null,om_rte.core.rte_controls,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix], null)], null)),om.core.build.call(null,om_rte.core.rte_field,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),self__.cmd_ch,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),self__.css_prefix,new cljs.core.Keyword(null,"throttle","throttle",2497347228),self__.throttle], null)], null)),om.core.build.call(null,om_rte.core.rte_vis,self__.data));
});
om_rte.core.t9471.prototype.om$core$IDisplayName$ = true;
om_rte.core.t9471.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-ui";
});
om_rte.core.t9471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9473){var self__ = this;
var _9473__$1 = this;return self__.meta9472;
});
om_rte.core.t9471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9473,meta9472__$1){var self__ = this;
var _9473__$1 = this;return (new om_rte.core.t9471(self__.cmd_ch,self__.css_prefix,self__.throttle,self__.opts,self__.map__9470,self__.p__9465,self__.owner,self__.data,self__.rte_ui,meta9472__$1));
});
om_rte.core.__GT_t9471 = (function __GT_t9471(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9470__$2,p__9465__$1,owner__$1,data__$1,rte_ui__$1,meta9472){return (new om_rte.core.t9471(cmd_ch__$1,css_prefix__$1,throttle__$1,opts__$1,map__9470__$2,p__9465__$1,owner__$1,data__$1,rte_ui__$1,meta9472));
});
}
return (new om_rte.core.t9471(cmd_ch,css_prefix,throttle,opts,map__9470__$1,p__9465,owner,data,rte_ui,null));
});
rte_ui = function(data,owner,p__9465){
switch(arguments.length){
case 2:
return rte_ui__2.call(this,data,owner);
case 3:
return rte_ui__3.call(this,data,owner,p__9465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rte_ui.cljs$core$IFn$_invoke$arity$2 = rte_ui__2;
rte_ui.cljs$core$IFn$_invoke$arity$3 = rte_ui__3;
return rte_ui;
})()
;
document.addEventListener("DOMContentLoaded",(function (_){return om.core.root.call(null,om_rte.core.rte_ui,om_rte.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498),cljs.core.async.chan.call(null)], null)], null));
}));

//# sourceMappingURL=core.js.map