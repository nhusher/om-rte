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
om_rte.editor.make_editor = (function make_editor(css_prefix,content){var n = document.createElement("div");n.setAttribute("class",[cljs.core.str(css_prefix),cljs.core.str("-editor")].join(''));
n.setAttribute("contentEditable",true);
n.innerHTML = hickory.render.hiccup_to_html.call(null,content);
return n;
});
om_rte.editor.rte_selected_QMARK_ = (function rte_selected_QMARK_(owner){var n = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));var sel = getSelection();var b = document.body;var p = sel.anchorNode;while(true){
if(cljs.core._EQ_.call(null,n,p))
{return true;
} else
{if((cljs.core._EQ_.call(null,b,p)) || ((p == null)))
{return false;
} else
{{
var G__9433 = p.parentNode;
p = G__9433;
continue;
}
}
}
break;
}
});
om_rte.editor.rte_editor = (function rte_editor(data,owner){if(typeof om_rte.editor.t9500 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_rte.editor.t9500 = (function (owner,data,rte_editor,meta9501){
this.owner = owner;
this.data = data;
this.rte_editor = rte_editor;
this.meta9501 = meta9501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_rte.editor.t9500.cljs$lang$type = true;
om_rte.editor.t9500.cljs$lang$ctorStr = "om-rte.editor/t9500";
om_rte.editor.t9500.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-rte.editor/t9500");
});
om_rte.editor.t9500.prototype.om$core$IRenderState$ = true;
om_rte.editor.t9500.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9503){var self__ = this;
var map__9504 = p__9503;var map__9504__$1 = ((cljs.core.seq_QMARK_.call(null,map__9504))?cljs.core.apply.call(null,cljs.core.hash_map,map__9504):map__9504);var css_prefix = cljs.core.get.call(null,map__9504__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878));var ___$1 = this;return React.DOM.div({"className": [cljs.core.str(css_prefix),cljs.core.str("-container")].join('')},null);
});
om_rte.editor.t9500.prototype.om$core$IWillUnmount$ = true;
om_rte.editor.t9500.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var editor = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407));return editor.call(null,editor.parentNode().removeChild());
});
om_rte.editor.t9500.prototype.om$core$IDidMount$ = true;
om_rte.editor.t9500.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__9505 = om.core.get_state.call(null,self__.owner);var map__9505__$1 = ((cljs.core.seq_QMARK_.call(null,map__9505))?cljs.core.apply.call(null,cljs.core.hash_map,map__9505):map__9505);var css_prefix = cljs.core.get.call(null,map__9505__$1,new cljs.core.Keyword(null,"css-prefix","css-prefix",4492612878));var cmd_ch = cljs.core.get.call(null,map__9505__$1,new cljs.core.Keyword(null,"cmd-ch","cmd-ch",3951879498));var throttle = cljs.core.get.call(null,map__9505__$1,new cljs.core.Keyword(null,"throttle","throttle",2497347228));var parent = om.core.get_node.call(null,self__.owner);var editor = om_rte.editor.make_editor.call(null,css_prefix,hickory.render.hiccup_to_html.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(self__.data)));if((cmd_ch == null))
{throw Error("Command channel disconnected!");
} else
{}
var c__6962__auto___9566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_9523){var state_val_9524 = (state_9523[1]);if((state_val_9524 === 7))
{var inst_9518 = (state_9523[2]);var state_9523__$1 = (function (){var statearr_9525 = state_9523;(statearr_9525[7] = inst_9518);
return statearr_9525;
})();var statearr_9526_9567 = state_9523__$1;(statearr_9526_9567[2] = null);
(statearr_9526_9567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9524 === 6))
{var state_9523__$1 = state_9523;var statearr_9527_9568 = state_9523__$1;(statearr_9527_9568[2] = null);
(statearr_9527_9568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9524 === 5))
{var inst_9510 = (state_9523[8]);var inst_9511 = (state_9523[9]);var inst_9514 = document.execCommand(inst_9510,false,inst_9511);var state_9523__$1 = (function (){var statearr_9528 = state_9523;(statearr_9528[10] = inst_9514);
return statearr_9528;
})();var statearr_9529_9569 = state_9523__$1;(statearr_9529_9569[2] = null);
(statearr_9529_9569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9524 === 4))
{var inst_9509 = (state_9523[2]);var inst_9510 = cljs.core.nth.call(null,inst_9509,0,null);var inst_9511 = cljs.core.nth.call(null,inst_9509,1,null);var inst_9512 = om_rte.editor.rte_selected_QMARK_.call(null,self__.owner);var state_9523__$1 = (function (){var statearr_9530 = state_9523;(statearr_9530[8] = inst_9510);
(statearr_9530[9] = inst_9511);
return statearr_9530;
})();if(inst_9512)
{var statearr_9531_9570 = state_9523__$1;(statearr_9531_9570[1] = 5);
} else
{var statearr_9532_9571 = state_9523__$1;(statearr_9532_9571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9524 === 3))
{var inst_9521 = (state_9523[2]);var state_9523__$1 = state_9523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9523__$1,inst_9521);
} else
{if((state_val_9524 === 2))
{var state_9523__$1 = state_9523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9523__$1,4,cmd_ch);
} else
{if((state_val_9524 === 1))
{var state_9523__$1 = state_9523;var statearr_9533_9572 = state_9523__$1;(statearr_9533_9572[2] = null);
(statearr_9533_9572[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_9537 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9537[0] = state_machine__6893__auto__);
(statearr_9537[1] = 1);
return statearr_9537;
});
var state_machine__6893__auto____1 = (function (state_9523){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_9523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e9538){if((e9538 instanceof Object))
{var ex__6896__auto__ = e9538;var statearr_9539_9573 = state_9523;(statearr_9539_9573[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9574 = state_9523;
state_9523 = G__9574;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_9523){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_9523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_9540 = f__6963__auto__.call(null);(statearr_9540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___9566);
return statearr_9540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
var c__6962__auto___9575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_9553){var state_val_9554 = (state_9553[1]);if((state_val_9554 === 4))
{var inst_9548 = (state_9553[2]);var state_9553__$1 = (function (){var statearr_9555 = state_9553;(statearr_9555[7] = inst_9548);
return statearr_9555;
})();var statearr_9556_9576 = state_9553__$1;(statearr_9556_9576[2] = null);
(statearr_9556_9576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9554 === 3))
{var inst_9551 = (state_9553[2]);var state_9553__$1 = state_9553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9553__$1,inst_9551);
} else
{if((state_val_9554 === 2))
{var inst_9542 = editor.innerHTML;var inst_9543 = hickory.core.parse_fragment.call(null,inst_9542);var inst_9544 = cljs.core.map.call(null,hickory.core.as_hiccup,inst_9543);var inst_9545 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"content","content",1965434859),inst_9544);var inst_9546 = cljs.core.async.timeout.call(null,throttle);var state_9553__$1 = (function (){var statearr_9557 = state_9553;(statearr_9557[8] = inst_9545);
return statearr_9557;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9553__$1,4,inst_9546);
} else
{if((state_val_9554 === 1))
{var state_9553__$1 = state_9553;var statearr_9558_9577 = state_9553__$1;(statearr_9558_9577[2] = null);
(statearr_9558_9577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_9562 = [null,null,null,null,null,null,null,null,null];(statearr_9562[0] = state_machine__6893__auto__);
(statearr_9562[1] = 1);
return statearr_9562;
});
var state_machine__6893__auto____1 = (function (state_9553){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_9553);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e9563){if((e9563 instanceof Object))
{var ex__6896__auto__ = e9563;var statearr_9564_9578 = state_9553;(statearr_9564_9578[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9579 = state_9553;
state_9553 = G__9579;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_9553){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_9553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_9565 = f__6963__auto__.call(null);(statearr_9565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___9575);
return statearr_9565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"edit-node","edit-node",3396504407),editor);
return parent.appendChild(editor);
});
om_rte.editor.t9500.prototype.om$core$IInitState$ = true;
om_rte.editor.t9500.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentArrayMap.EMPTY;
});
om_rte.editor.t9500.prototype.om$core$IDisplayName$ = true;
om_rte.editor.t9500.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "rte-editor";
});
om_rte.editor.t9500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9502){var self__ = this;
var _9502__$1 = this;return self__.meta9501;
});
om_rte.editor.t9500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9502,meta9501__$1){var self__ = this;
var _9502__$1 = this;return (new om_rte.editor.t9500(self__.owner,self__.data,self__.rte_editor,meta9501__$1));
});
om_rte.editor.__GT_t9500 = (function __GT_t9500(owner__$1,data__$1,rte_editor__$1,meta9501){return (new om_rte.editor.t9500(owner__$1,data__$1,rte_editor__$1,meta9501));
});
}
return (new om_rte.editor.t9500(owner,data,rte_editor,null));
});

//# sourceMappingURL=editor.js.map