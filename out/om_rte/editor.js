// Compiled by ClojureScript 0.0-2173
goog.provide('om_rte.editor');
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
om_rte.editor.dom_events = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cut","paste","click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseup","click"], null);
om_rte.editor.make_editor = (function make_editor(css_prefix,events,evt_callback,content){var n = document.createElement("div");var seq__9442_9446 = cljs.core.seq.call(null,events);var chunk__9443_9447 = null;var count__9444_9448 = 0;var i__9445_9449 = 0;while(true){
if((i__9445_9449 < count__9444_9448))
{var e_9450 = cljs.core._nth.call(null,chunk__9443_9447,i__9445_9449);n.addEventListener(e_9450,evt_callback);
{
var G__9451 = seq__9442_9446;
var G__9452 = chunk__9443_9447;
var G__9453 = count__9444_9448;
var G__9454 = (i__9445_9449 + 1);
seq__9442_9446 = G__9451;
chunk__9443_9447 = G__9452;
count__9444_9448 = G__9453;
i__9445_9449 = G__9454;
continue;
}
} else
{var temp__4092__auto___9455 = cljs.core.seq.call(null,seq__9442_9446);if(temp__4092__auto___9455)
{var seq__9442_9456__$1 = temp__4092__auto___9455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9442_9456__$1))
{var c__4191__auto___9457 = cljs.core.chunk_first.call(null,seq__9442_9456__$1);{
var G__9458 = cljs.core.chunk_rest.call(null,seq__9442_9456__$1);
var G__9459 = c__4191__auto___9457;
var G__9460 = cljs.core.count.call(null,c__4191__auto___9457);
var G__9461 = 0;
seq__9442_9446 = G__9458;
chunk__9443_9447 = G__9459;
count__9444_9448 = G__9460;
i__9445_9449 = G__9461;
continue;
}
} else
{var e_9462 = cljs.core.first.call(null,seq__9442_9456__$1);n.addEventListener(e_9462,evt_callback);
{
var G__9463 = cljs.core.next.call(null,seq__9442_9456__$1);
var G__9464 = null;
var G__9465 = 0;
var G__9466 = 0;
seq__9442_9446 = G__9463;
chunk__9443_9447 = G__9464;
count__9444_9448 = G__9465;
i__9445_9449 = G__9466;
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
om_rte.editor.rte_selected_QMARK_ = (function rte_selected_QMARK_(owner){var n = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));var sel = getSelection();var b = document.body;var p = sel.extentNode;while(true){
if(cljs.core._EQ_.call(null,n,p))
{return true;
} else
{if((cljs.core._EQ_.call(null,b,p)) || ((p == null)))
{return false;
} else
{{
var G__9467 = p.parentNode;
p = G__9467;
continue;
}
}
}
break;
}
});
om_rte.editor.rte_editor = (function rte_editor(data,owner,p__9468){var map__9534 = p__9468;var map__9534__$1 = ((cljs.core.seq_QMARK_.call(null,map__9534))?cljs.core.apply.call(null,cljs.core.hash_map,map__9534):map__9534);var opts = map__9534__$1;var css_prefix = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878),"om-rte");var throttle = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228),20);var cmd_ch = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));if(typeof om_rte.editor.t9535 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.editor.t9535 = (function (cmd_ch,throttle,css_prefix,opts,map__9534,p__9468,owner,data,rte_editor,meta9536){
this.cmd_ch = cmd_ch;
this.throttle = throttle;
this.css_prefix = css_prefix;
this.opts = opts;
this.map__9534 = map__9534;
this.p__9468 = p__9468;
this.owner = owner;
this.data = data;
this.rte_editor = rte_editor;
this.meta9536 = meta9536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.editor.t9535.cljs$lang$type = true;
om_rte.editor.t9535.cljs$lang$ctorStr = "om-rte.editor/t9535";
om_rte.editor.t9535.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.editor/t9535");
});
om_rte.editor.t9535.prototype.om$core$IRender$ = true;
om_rte.editor.t9535.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": [cljs.core.str(self__.css_prefix),cljs.core.str("-container")].join('')},null);
});
om_rte.editor.t9535.prototype.om$core$IWillUnmount$ = true;
om_rte.editor.t9535.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.editor.t9535.prototype.om$core$IDidMount$ = true;
om_rte.editor.t9535.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var parent = om.core.get_node.call(null,self__.owner);var upd_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var upd_fn = ((function (parent,upd_ch){
return (function (n){return cljs.core.async.put_BANG_.call(null,upd_ch,n.innerHTML);
});})(parent,upd_ch))
;var editor = om_rte.editor.make_editor.call(null,self__.css_prefix,om_rte.editor.dom_events,((function (parent,upd_ch,upd_fn){
return (function (___$2){var el = this;return upd_fn.call(null,el);
});})(parent,upd_ch,upd_fn))
,hickory.render.hiccup_to_html.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));if((self__.cmd_ch == null))
{throw Error("Command channel disconnected!");
} else
{}
var c__6962__auto___9599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_9555){var state_val_9556 = (state_9555[1]);if((state_val_9556 === 7))
{var inst_9550 = (state_9555[2]);var state_9555__$1 = (function (){var statearr_9557 = state_9555;(statearr_9557[7] = inst_9550);
return statearr_9557;
})();var statearr_9558_9600 = state_9555__$1;(statearr_9558_9600[2] = null);
(statearr_9558_9600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9556 === 6))
{var state_9555__$1 = state_9555;var statearr_9559_9601 = state_9555__$1;(statearr_9559_9601[2] = null);
(statearr_9559_9601[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9556 === 5))
{var inst_9543 = (state_9555[8]);var inst_9542 = (state_9555[9]);var inst_9546 = document.execCommand(inst_9542,false,inst_9543);var state_9555__$1 = (function (){var statearr_9560 = state_9555;(statearr_9560[10] = inst_9546);
return statearr_9560;
})();var statearr_9561_9602 = state_9555__$1;(statearr_9561_9602[2] = null);
(statearr_9561_9602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9556 === 4))
{var inst_9541 = (state_9555[2]);var inst_9542 = cljs.core.nth.call(null,inst_9541,0,null);var inst_9543 = cljs.core.nth.call(null,inst_9541,1,null);var inst_9544 = om_rte.editor.rte_selected_QMARK_.call(null,self__.owner);var state_9555__$1 = (function (){var statearr_9562 = state_9555;(statearr_9562[8] = inst_9543);
(statearr_9562[9] = inst_9542);
return statearr_9562;
})();if(inst_9544)
{var statearr_9563_9603 = state_9555__$1;(statearr_9563_9603[1] = 5);
} else
{var statearr_9564_9604 = state_9555__$1;(statearr_9564_9604[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9556 === 3))
{var inst_9553 = (state_9555[2]);var state_9555__$1 = state_9555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9555__$1,inst_9553);
} else
{if((state_val_9556 === 2))
{var state_9555__$1 = state_9555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9555__$1,4,self__.cmd_ch);
} else
{if((state_val_9556 === 1))
{var state_9555__$1 = state_9555;var statearr_9565_9605 = state_9555__$1;(statearr_9565_9605[2] = null);
(statearr_9565_9605[1] = 2);
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
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_9569 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9569[0] = state_machine__6893__auto__);
(statearr_9569[1] = 1);
return statearr_9569;
});
var state_machine__6893__auto____1 = (function (state_9555){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_9555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e9570){if((e9570 instanceof Object))
{var ex__6896__auto__ = e9570;var statearr_9571_9606 = state_9555;(statearr_9571_9606[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9607 = state_9555;
state_9555 = G__9607;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_9555){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_9555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_9572 = f__6963__auto__.call(null);(statearr_9572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___9599);
return statearr_9572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
var c__6962__auto___9608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_9586){var state_val_9587 = (state_9586[1]);if((state_val_9587 === 5))
{var inst_9581 = (state_9586[2]);var state_9586__$1 = (function (){var statearr_9588 = state_9586;(statearr_9588[7] = inst_9581);
return statearr_9588;
})();var statearr_9589_9609 = state_9586__$1;(statearr_9589_9609[2] = null);
(statearr_9589_9609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9587 === 4))
{var inst_9575 = (state_9586[2]);var inst_9576 = hickory.core.parse_fragment.call(null,inst_9575);var inst_9577 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9576);var inst_9578 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"content","content",1965434859),inst_9577);var inst_9579 = cljs.core.async.timeout.call(null,self__.throttle);var state_9586__$1 = (function (){var statearr_9590 = state_9586;(statearr_9590[8] = inst_9578);
return statearr_9590;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9586__$1,5,inst_9579);
} else
{if((state_val_9587 === 3))
{var inst_9584 = (state_9586[2]);var state_9586__$1 = state_9586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9586__$1,inst_9584);
} else
{if((state_val_9587 === 2))
{var state_9586__$1 = state_9586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9586__$1,4,upd_ch);
} else
{if((state_val_9587 === 1))
{var state_9586__$1 = state_9586;var statearr_9591_9610 = state_9586__$1;(statearr_9591_9610[2] = null);
(statearr_9591_9610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_9595 = [null,null,null,null,null,null,null,null,null];(statearr_9595[0] = state_machine__6893__auto__);
(statearr_9595[1] = 1);
return statearr_9595;
});
var state_machine__6893__auto____1 = (function (state_9586){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_9586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e9596){if((e9596 instanceof Object))
{var ex__6896__auto__ = e9596;var statearr_9597_9611 = state_9586;(statearr_9597_9611[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9612 = state_9586;
state_9586 = G__9612;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_9586){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_9586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_9598 = f__6963__auto__.call(null);(statearr_9598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___9608);
return statearr_9598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.editor.t9535.prototype.om$core$IDisplayName$ = true;
om_rte.editor.t9535.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-editor";
});
om_rte.editor.t9535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9537){var self__ = this;
var _9537__$1 = this;return self__.meta9536;
});
om_rte.editor.t9535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9537,meta9536__$1){var self__ = this;
var _9537__$1 = this;return (new om_rte.editor.t9535(self__.cmd_ch,self__.throttle,self__.css_prefix,self__.opts,self__.map__9534,self__.p__9468,self__.owner,self__.data,self__.rte_editor,meta9536__$1));
});
om_rte.editor.__GT_t9535 = (function __GT_t9535(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9534__$2,p__9468__$1,owner__$1,data__$1,rte_editor__$1,meta9536){return (new om_rte.editor.t9535(cmd_ch__$1,throttle__$1,css_prefix__$1,opts__$1,map__9534__$2,p__9468__$1,owner__$1,data__$1,rte_editor__$1,meta9536));
});
}
return (new om_rte.editor.t9535(cmd_ch,throttle,css_prefix,opts,map__9534__$1,p__9468,owner,data,rte_editor,null));
});

//# sourceMappingURL=editor.js.map