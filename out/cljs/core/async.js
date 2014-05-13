// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11097 = (function (f,fn_handler,meta11098){
this.f = f;
this.fn_handler = fn_handler;
this.meta11098 = meta11098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11097.cljs$lang$type = true;
cljs.core.async.t11097.cljs$lang$ctorStr = "cljs.core.async/t11097";
cljs.core.async.t11097.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11097");
});
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11099){var self__ = this;
var _11099__$1 = this;return self__.meta11098;
});
cljs.core.async.t11097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11099,meta11098__$1){var self__ = this;
var _11099__$1 = this;return (new cljs.core.async.t11097(self__.f,self__.fn_handler,meta11098__$1));
});
cljs.core.async.__GT_t11097 = (function __GT_t11097(f__$1,fn_handler__$1,meta11098){return (new cljs.core.async.t11097(f__$1,fn_handler__$1,meta11098));
});
}
return (new cljs.core.async.t11097(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11101 = buff;if(G__11101)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11101);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11102 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11102);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11102);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11103 = n;var x_11104 = 0;while(true){
if((x_11104 < n__4291__auto___11103))
{(a[x_11104] = 0);
{
var G__11105 = (x_11104 + 1);
x_11104 = G__11105;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11106 = (i + 1);
i = G__11106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11110 = (function (flag,alt_flag,meta11111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11111 = meta11111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11110.cljs$lang$type = true;
cljs.core.async.t11110.cljs$lang$ctorStr = "cljs.core.async/t11110";
cljs.core.async.t11110.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11110");
});
cljs.core.async.t11110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11112){var self__ = this;
var _11112__$1 = this;return self__.meta11111;
});
cljs.core.async.t11110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11112,meta11111__$1){var self__ = this;
var _11112__$1 = this;return (new cljs.core.async.t11110(self__.flag,self__.alt_flag,meta11111__$1));
});
cljs.core.async.__GT_t11110 = (function __GT_t11110(flag__$1,alt_flag__$1,meta11111){return (new cljs.core.async.t11110(flag__$1,alt_flag__$1,meta11111));
});
}
return (new cljs.core.async.t11110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11116 = (function (cb,flag,alt_handler,meta11117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11117 = meta11117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11116.cljs$lang$type = true;
cljs.core.async.t11116.cljs$lang$ctorStr = "cljs.core.async/t11116";
cljs.core.async.t11116.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11116");
});
cljs.core.async.t11116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11118){var self__ = this;
var _11118__$1 = this;return self__.meta11117;
});
cljs.core.async.t11116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11118,meta11117__$1){var self__ = this;
var _11118__$1 = this;return (new cljs.core.async.t11116(self__.cb,self__.flag,self__.alt_handler,meta11117__$1));
});
cljs.core.async.__GT_t11116 = (function __GT_t11116(cb__$1,flag__$1,alt_handler__$1,meta11117){return (new cljs.core.async.t11116(cb__$1,flag__$1,alt_handler__$1,meta11117));
});
}
return (new cljs.core.async.t11116(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11119_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11120 = (i + 1);
i = G__11120;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11121){var map__11123 = p__11121;var map__11123__$1 = ((cljs.core.seq_QMARK_.call(null,map__11123))?cljs.core.apply.call(null,cljs.core.hash_map,map__11123):map__11123);var opts = map__11123__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11121 = null;if (arguments.length > 1) {
  p__11121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11121);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11124){
var ports = cljs.core.first(arglist__11124);
var p__11121 = cljs.core.rest(arglist__11124);
return alts_BANG___delegate(ports,p__11121);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11132 = (function (ch,f,map_LT_,meta11133){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11133 = meta11133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11132.cljs$lang$type = true;
cljs.core.async.t11132.cljs$lang$ctorStr = "cljs.core.async/t11132";
cljs.core.async.t11132.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11132");
});
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11135 = (function (fn1,_,meta11133,ch,f,map_LT_,meta11136){
this.fn1 = fn1;
this._ = _;
this.meta11133 = meta11133;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11136 = meta11136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11135.cljs$lang$type = true;
cljs.core.async.t11135.cljs$lang$ctorStr = "cljs.core.async/t11135";
cljs.core.async.t11135.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11135");
});
cljs.core.async.t11135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11135.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11125_SHARP_){return f1.call(null,(((p1__11125_SHARP_ == null))?null:self__.f.call(null,p1__11125_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11137){var self__ = this;
var _11137__$1 = this;return self__.meta11136;
});
cljs.core.async.t11135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11137,meta11136__$1){var self__ = this;
var _11137__$1 = this;return (new cljs.core.async.t11135(self__.fn1,self__._,self__.meta11133,self__.ch,self__.f,self__.map_LT_,meta11136__$1));
});
cljs.core.async.__GT_t11135 = (function __GT_t11135(fn1__$1,___$2,meta11133__$1,ch__$2,f__$2,map_LT___$2,meta11136){return (new cljs.core.async.t11135(fn1__$1,___$2,meta11133__$1,ch__$2,f__$2,map_LT___$2,meta11136));
});
}
return (new cljs.core.async.t11135(fn1,___$1,self__.meta11133,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11134){var self__ = this;
var _11134__$1 = this;return self__.meta11133;
});
cljs.core.async.t11132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11134,meta11133__$1){var self__ = this;
var _11134__$1 = this;return (new cljs.core.async.t11132(self__.ch,self__.f,self__.map_LT_,meta11133__$1));
});
cljs.core.async.__GT_t11132 = (function __GT_t11132(ch__$1,f__$1,map_LT___$1,meta11133){return (new cljs.core.async.t11132(ch__$1,f__$1,map_LT___$1,meta11133));
});
}
return (new cljs.core.async.t11132(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11141 = (function (ch,f,map_GT_,meta11142){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11142 = meta11142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11141.cljs$lang$type = true;
cljs.core.async.t11141.cljs$lang$ctorStr = "cljs.core.async/t11141";
cljs.core.async.t11141.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11141");
});
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11143){var self__ = this;
var _11143__$1 = this;return self__.meta11142;
});
cljs.core.async.t11141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11143,meta11142__$1){var self__ = this;
var _11143__$1 = this;return (new cljs.core.async.t11141(self__.ch,self__.f,self__.map_GT_,meta11142__$1));
});
cljs.core.async.__GT_t11141 = (function __GT_t11141(ch__$1,f__$1,map_GT___$1,meta11142){return (new cljs.core.async.t11141(ch__$1,f__$1,map_GT___$1,meta11142));
});
}
return (new cljs.core.async.t11141(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11147 = (function (ch,p,filter_GT_,meta11148){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11148 = meta11148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11147.cljs$lang$type = true;
cljs.core.async.t11147.cljs$lang$ctorStr = "cljs.core.async/t11147";
cljs.core.async.t11147.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11147");
});
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11149){var self__ = this;
var _11149__$1 = this;return self__.meta11148;
});
cljs.core.async.t11147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11149,meta11148__$1){var self__ = this;
var _11149__$1 = this;return (new cljs.core.async.t11147(self__.ch,self__.p,self__.filter_GT_,meta11148__$1));
});
cljs.core.async.__GT_t11147 = (function __GT_t11147(ch__$1,p__$1,filter_GT___$1,meta11148){return (new cljs.core.async.t11147(ch__$1,p__$1,filter_GT___$1,meta11148));
});
}
return (new cljs.core.async.t11147(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___11232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11211){var state_val_11212 = (state_11211[1]);if((state_val_11212 === 1))
{var state_11211__$1 = state_11211;var statearr_11213_11233 = state_11211__$1;(statearr_11213_11233[2] = null);
(statearr_11213_11233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 2))
{var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11211__$1,4,ch);
} else
{if((state_val_11212 === 3))
{var inst_11209 = (state_11211[2]);var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11211__$1,inst_11209);
} else
{if((state_val_11212 === 4))
{var inst_11193 = (state_11211[7]);var inst_11193__$1 = (state_11211[2]);var inst_11194 = (inst_11193__$1 == null);var state_11211__$1 = (function (){var statearr_11214 = state_11211;(statearr_11214[7] = inst_11193__$1);
return statearr_11214;
})();if(cljs.core.truth_(inst_11194))
{var statearr_11215_11234 = state_11211__$1;(statearr_11215_11234[1] = 5);
} else
{var statearr_11216_11235 = state_11211__$1;(statearr_11216_11235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 5))
{var inst_11196 = cljs.core.async.close_BANG_.call(null,out);var state_11211__$1 = state_11211;var statearr_11217_11236 = state_11211__$1;(statearr_11217_11236[2] = inst_11196);
(statearr_11217_11236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 6))
{var inst_11193 = (state_11211[7]);var inst_11198 = p.call(null,inst_11193);var state_11211__$1 = state_11211;if(cljs.core.truth_(inst_11198))
{var statearr_11218_11237 = state_11211__$1;(statearr_11218_11237[1] = 8);
} else
{var statearr_11219_11238 = state_11211__$1;(statearr_11219_11238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 7))
{var inst_11207 = (state_11211[2]);var state_11211__$1 = state_11211;var statearr_11220_11239 = state_11211__$1;(statearr_11220_11239[2] = inst_11207);
(statearr_11220_11239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 8))
{var inst_11193 = (state_11211[7]);var state_11211__$1 = state_11211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11211__$1,11,out,inst_11193);
} else
{if((state_val_11212 === 9))
{var state_11211__$1 = state_11211;var statearr_11221_11240 = state_11211__$1;(statearr_11221_11240[2] = null);
(statearr_11221_11240[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 10))
{var inst_11204 = (state_11211[2]);var state_11211__$1 = (function (){var statearr_11222 = state_11211;(statearr_11222[8] = inst_11204);
return statearr_11222;
})();var statearr_11223_11241 = state_11211__$1;(statearr_11223_11241[2] = null);
(statearr_11223_11241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11212 === 11))
{var inst_11201 = (state_11211[2]);var state_11211__$1 = state_11211;var statearr_11224_11242 = state_11211__$1;(statearr_11224_11242[2] = inst_11201);
(statearr_11224_11242[1] = 10);
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
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_11228 = [null,null,null,null,null,null,null,null,null];(statearr_11228[0] = state_machine__6893__auto__);
(statearr_11228[1] = 1);
return statearr_11228;
});
var state_machine__6893__auto____1 = (function (state_11211){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11229){if((e11229 instanceof Object))
{var ex__6896__auto__ = e11229;var statearr_11230_11243 = state_11211;(statearr_11230_11243[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11244 = state_11211;
state_11211 = G__11244;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11211){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11231 = f__6963__auto__.call(null);(statearr_11231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11232);
return statearr_11231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11396){var state_val_11397 = (state_11396[1]);if((state_val_11397 === 1))
{var state_11396__$1 = state_11396;var statearr_11398_11435 = state_11396__$1;(statearr_11398_11435[2] = null);
(statearr_11398_11435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 2))
{var state_11396__$1 = state_11396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11396__$1,4,in$);
} else
{if((state_val_11397 === 3))
{var inst_11394 = (state_11396[2]);var state_11396__$1 = state_11396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11396__$1,inst_11394);
} else
{if((state_val_11397 === 4))
{var inst_11342 = (state_11396[7]);var inst_11342__$1 = (state_11396[2]);var inst_11343 = (inst_11342__$1 == null);var state_11396__$1 = (function (){var statearr_11399 = state_11396;(statearr_11399[7] = inst_11342__$1);
return statearr_11399;
})();if(cljs.core.truth_(inst_11343))
{var statearr_11400_11436 = state_11396__$1;(statearr_11400_11436[1] = 5);
} else
{var statearr_11401_11437 = state_11396__$1;(statearr_11401_11437[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 5))
{var inst_11345 = cljs.core.async.close_BANG_.call(null,out);var state_11396__$1 = state_11396;var statearr_11402_11438 = state_11396__$1;(statearr_11402_11438[2] = inst_11345);
(statearr_11402_11438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 6))
{var inst_11342 = (state_11396[7]);var inst_11347 = f.call(null,inst_11342);var inst_11352 = cljs.core.seq.call(null,inst_11347);var inst_11353 = inst_11352;var inst_11354 = null;var inst_11355 = 0;var inst_11356 = 0;var state_11396__$1 = (function (){var statearr_11403 = state_11396;(statearr_11403[8] = inst_11356);
(statearr_11403[9] = inst_11355);
(statearr_11403[10] = inst_11354);
(statearr_11403[11] = inst_11353);
return statearr_11403;
})();var statearr_11404_11439 = state_11396__$1;(statearr_11404_11439[2] = null);
(statearr_11404_11439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 7))
{var inst_11392 = (state_11396[2]);var state_11396__$1 = state_11396;var statearr_11405_11440 = state_11396__$1;(statearr_11405_11440[2] = inst_11392);
(statearr_11405_11440[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 8))
{var inst_11356 = (state_11396[8]);var inst_11355 = (state_11396[9]);var inst_11358 = (inst_11356 < inst_11355);var inst_11359 = inst_11358;var state_11396__$1 = state_11396;if(cljs.core.truth_(inst_11359))
{var statearr_11406_11441 = state_11396__$1;(statearr_11406_11441[1] = 10);
} else
{var statearr_11407_11442 = state_11396__$1;(statearr_11407_11442[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 9))
{var inst_11389 = (state_11396[2]);var state_11396__$1 = (function (){var statearr_11408 = state_11396;(statearr_11408[12] = inst_11389);
return statearr_11408;
})();var statearr_11409_11443 = state_11396__$1;(statearr_11409_11443[2] = null);
(statearr_11409_11443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 10))
{var inst_11356 = (state_11396[8]);var inst_11354 = (state_11396[10]);var inst_11361 = cljs.core._nth.call(null,inst_11354,inst_11356);var state_11396__$1 = state_11396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11396__$1,13,out,inst_11361);
} else
{if((state_val_11397 === 11))
{var inst_11367 = (state_11396[13]);var inst_11353 = (state_11396[11]);var inst_11367__$1 = cljs.core.seq.call(null,inst_11353);var state_11396__$1 = (function (){var statearr_11413 = state_11396;(statearr_11413[13] = inst_11367__$1);
return statearr_11413;
})();if(inst_11367__$1)
{var statearr_11414_11444 = state_11396__$1;(statearr_11414_11444[1] = 14);
} else
{var statearr_11415_11445 = state_11396__$1;(statearr_11415_11445[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 12))
{var inst_11387 = (state_11396[2]);var state_11396__$1 = state_11396;var statearr_11416_11446 = state_11396__$1;(statearr_11416_11446[2] = inst_11387);
(statearr_11416_11446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 13))
{var inst_11356 = (state_11396[8]);var inst_11355 = (state_11396[9]);var inst_11354 = (state_11396[10]);var inst_11353 = (state_11396[11]);var inst_11363 = (state_11396[2]);var inst_11364 = (inst_11356 + 1);var tmp11410 = inst_11355;var tmp11411 = inst_11354;var tmp11412 = inst_11353;var inst_11353__$1 = tmp11412;var inst_11354__$1 = tmp11411;var inst_11355__$1 = tmp11410;var inst_11356__$1 = inst_11364;var state_11396__$1 = (function (){var statearr_11417 = state_11396;(statearr_11417[14] = inst_11363);
(statearr_11417[8] = inst_11356__$1);
(statearr_11417[9] = inst_11355__$1);
(statearr_11417[10] = inst_11354__$1);
(statearr_11417[11] = inst_11353__$1);
return statearr_11417;
})();var statearr_11418_11447 = state_11396__$1;(statearr_11418_11447[2] = null);
(statearr_11418_11447[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 14))
{var inst_11367 = (state_11396[13]);var inst_11369 = cljs.core.chunked_seq_QMARK_.call(null,inst_11367);var state_11396__$1 = state_11396;if(inst_11369)
{var statearr_11419_11448 = state_11396__$1;(statearr_11419_11448[1] = 17);
} else
{var statearr_11420_11449 = state_11396__$1;(statearr_11420_11449[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 15))
{var state_11396__$1 = state_11396;var statearr_11421_11450 = state_11396__$1;(statearr_11421_11450[2] = null);
(statearr_11421_11450[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 16))
{var inst_11385 = (state_11396[2]);var state_11396__$1 = state_11396;var statearr_11422_11451 = state_11396__$1;(statearr_11422_11451[2] = inst_11385);
(statearr_11422_11451[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 17))
{var inst_11367 = (state_11396[13]);var inst_11371 = cljs.core.chunk_first.call(null,inst_11367);var inst_11372 = cljs.core.chunk_rest.call(null,inst_11367);var inst_11373 = cljs.core.count.call(null,inst_11371);var inst_11353 = inst_11372;var inst_11354 = inst_11371;var inst_11355 = inst_11373;var inst_11356 = 0;var state_11396__$1 = (function (){var statearr_11423 = state_11396;(statearr_11423[8] = inst_11356);
(statearr_11423[9] = inst_11355);
(statearr_11423[10] = inst_11354);
(statearr_11423[11] = inst_11353);
return statearr_11423;
})();var statearr_11424_11452 = state_11396__$1;(statearr_11424_11452[2] = null);
(statearr_11424_11452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 18))
{var inst_11367 = (state_11396[13]);var inst_11376 = cljs.core.first.call(null,inst_11367);var state_11396__$1 = state_11396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11396__$1,20,out,inst_11376);
} else
{if((state_val_11397 === 19))
{var inst_11382 = (state_11396[2]);var state_11396__$1 = state_11396;var statearr_11425_11453 = state_11396__$1;(statearr_11425_11453[2] = inst_11382);
(statearr_11425_11453[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11397 === 20))
{var inst_11367 = (state_11396[13]);var inst_11378 = (state_11396[2]);var inst_11379 = cljs.core.next.call(null,inst_11367);var inst_11353 = inst_11379;var inst_11354 = null;var inst_11355 = 0;var inst_11356 = 0;var state_11396__$1 = (function (){var statearr_11426 = state_11396;(statearr_11426[15] = inst_11378);
(statearr_11426[8] = inst_11356);
(statearr_11426[9] = inst_11355);
(statearr_11426[10] = inst_11354);
(statearr_11426[11] = inst_11353);
return statearr_11426;
})();var statearr_11427_11454 = state_11396__$1;(statearr_11427_11454[2] = null);
(statearr_11427_11454[1] = 8);
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
}
}
}
}
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_11431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11431[0] = state_machine__6893__auto__);
(statearr_11431[1] = 1);
return statearr_11431;
});
var state_machine__6893__auto____1 = (function (state_11396){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11432){if((e11432 instanceof Object))
{var ex__6896__auto__ = e11432;var statearr_11433_11455 = state_11396;(statearr_11433_11455[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11396);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11456 = state_11396;
state_11396 = G__11456;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11396){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11434 = f__6963__auto__.call(null);(statearr_11434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return c__6962__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6962__auto___11537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11516){var state_val_11517 = (state_11516[1]);if((state_val_11517 === 1))
{var state_11516__$1 = state_11516;var statearr_11518_11538 = state_11516__$1;(statearr_11518_11538[2] = null);
(statearr_11518_11538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 2))
{var state_11516__$1 = state_11516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11516__$1,4,from);
} else
{if((state_val_11517 === 3))
{var inst_11514 = (state_11516[2]);var state_11516__$1 = state_11516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11516__$1,inst_11514);
} else
{if((state_val_11517 === 4))
{var inst_11499 = (state_11516[7]);var inst_11499__$1 = (state_11516[2]);var inst_11500 = (inst_11499__$1 == null);var state_11516__$1 = (function (){var statearr_11519 = state_11516;(statearr_11519[7] = inst_11499__$1);
return statearr_11519;
})();if(cljs.core.truth_(inst_11500))
{var statearr_11520_11539 = state_11516__$1;(statearr_11520_11539[1] = 5);
} else
{var statearr_11521_11540 = state_11516__$1;(statearr_11521_11540[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 5))
{var state_11516__$1 = state_11516;if(cljs.core.truth_(close_QMARK_))
{var statearr_11522_11541 = state_11516__$1;(statearr_11522_11541[1] = 8);
} else
{var statearr_11523_11542 = state_11516__$1;(statearr_11523_11542[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 6))
{var inst_11499 = (state_11516[7]);var state_11516__$1 = state_11516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11516__$1,11,to,inst_11499);
} else
{if((state_val_11517 === 7))
{var inst_11512 = (state_11516[2]);var state_11516__$1 = state_11516;var statearr_11524_11543 = state_11516__$1;(statearr_11524_11543[2] = inst_11512);
(statearr_11524_11543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 8))
{var inst_11503 = cljs.core.async.close_BANG_.call(null,to);var state_11516__$1 = state_11516;var statearr_11525_11544 = state_11516__$1;(statearr_11525_11544[2] = inst_11503);
(statearr_11525_11544[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 9))
{var state_11516__$1 = state_11516;var statearr_11526_11545 = state_11516__$1;(statearr_11526_11545[2] = null);
(statearr_11526_11545[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 10))
{var inst_11506 = (state_11516[2]);var state_11516__$1 = state_11516;var statearr_11527_11546 = state_11516__$1;(statearr_11527_11546[2] = inst_11506);
(statearr_11527_11546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11517 === 11))
{var inst_11509 = (state_11516[2]);var state_11516__$1 = (function (){var statearr_11528 = state_11516;(statearr_11528[8] = inst_11509);
return statearr_11528;
})();var statearr_11529_11547 = state_11516__$1;(statearr_11529_11547[2] = null);
(statearr_11529_11547[1] = 2);
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
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_11533 = [null,null,null,null,null,null,null,null,null];(statearr_11533[0] = state_machine__6893__auto__);
(statearr_11533[1] = 1);
return statearr_11533;
});
var state_machine__6893__auto____1 = (function (state_11516){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11534){if((e11534 instanceof Object))
{var ex__6896__auto__ = e11534;var statearr_11535_11548 = state_11516;(statearr_11535_11548[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11549 = state_11516;
state_11516 = G__11549;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11516){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11536 = f__6963__auto__.call(null);(statearr_11536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11537);
return statearr_11536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6962__auto___11636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11614){var state_val_11615 = (state_11614[1]);if((state_val_11615 === 1))
{var state_11614__$1 = state_11614;var statearr_11616_11637 = state_11614__$1;(statearr_11616_11637[2] = null);
(statearr_11616_11637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 2))
{var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11614__$1,4,ch);
} else
{if((state_val_11615 === 3))
{var inst_11612 = (state_11614[2]);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11614__$1,inst_11612);
} else
{if((state_val_11615 === 4))
{var inst_11595 = (state_11614[7]);var inst_11595__$1 = (state_11614[2]);var inst_11596 = (inst_11595__$1 == null);var state_11614__$1 = (function (){var statearr_11617 = state_11614;(statearr_11617[7] = inst_11595__$1);
return statearr_11617;
})();if(cljs.core.truth_(inst_11596))
{var statearr_11618_11638 = state_11614__$1;(statearr_11618_11638[1] = 5);
} else
{var statearr_11619_11639 = state_11614__$1;(statearr_11619_11639[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 5))
{var inst_11598 = cljs.core.async.close_BANG_.call(null,tc);var inst_11599 = cljs.core.async.close_BANG_.call(null,fc);var state_11614__$1 = (function (){var statearr_11620 = state_11614;(statearr_11620[8] = inst_11598);
return statearr_11620;
})();var statearr_11621_11640 = state_11614__$1;(statearr_11621_11640[2] = inst_11599);
(statearr_11621_11640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 6))
{var inst_11595 = (state_11614[7]);var inst_11601 = p.call(null,inst_11595);var state_11614__$1 = state_11614;if(cljs.core.truth_(inst_11601))
{var statearr_11622_11641 = state_11614__$1;(statearr_11622_11641[1] = 9);
} else
{var statearr_11623_11642 = state_11614__$1;(statearr_11623_11642[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 7))
{var inst_11610 = (state_11614[2]);var state_11614__$1 = state_11614;var statearr_11624_11643 = state_11614__$1;(statearr_11624_11643[2] = inst_11610);
(statearr_11624_11643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 8))
{var inst_11607 = (state_11614[2]);var state_11614__$1 = (function (){var statearr_11625 = state_11614;(statearr_11625[9] = inst_11607);
return statearr_11625;
})();var statearr_11626_11644 = state_11614__$1;(statearr_11626_11644[2] = null);
(statearr_11626_11644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 9))
{var state_11614__$1 = state_11614;var statearr_11627_11645 = state_11614__$1;(statearr_11627_11645[2] = tc);
(statearr_11627_11645[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 10))
{var state_11614__$1 = state_11614;var statearr_11628_11646 = state_11614__$1;(statearr_11628_11646[2] = fc);
(statearr_11628_11646[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 11))
{var inst_11595 = (state_11614[7]);var inst_11605 = (state_11614[2]);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11614__$1,8,inst_11605,inst_11595);
} else
{return null;
}
}
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_11632 = [null,null,null,null,null,null,null,null,null,null];(statearr_11632[0] = state_machine__6893__auto__);
(statearr_11632[1] = 1);
return statearr_11632;
});
var state_machine__6893__auto____1 = (function (state_11614){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11614);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11633){if((e11633 instanceof Object))
{var ex__6896__auto__ = e11633;var statearr_11634_11647 = state_11614;(statearr_11634_11647[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11648 = state_11614;
state_11614 = G__11648;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11614){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11635 = f__6963__auto__.call(null);(statearr_11635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11636);
return statearr_11635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11695){var state_val_11696 = (state_11695[1]);if((state_val_11696 === 7))
{var inst_11691 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11697_11713 = state_11695__$1;(statearr_11697_11713[2] = inst_11691);
(statearr_11697_11713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 6))
{var inst_11684 = (state_11695[7]);var inst_11681 = (state_11695[8]);var inst_11688 = f.call(null,inst_11681,inst_11684);var inst_11681__$1 = inst_11688;var state_11695__$1 = (function (){var statearr_11698 = state_11695;(statearr_11698[8] = inst_11681__$1);
return statearr_11698;
})();var statearr_11699_11714 = state_11695__$1;(statearr_11699_11714[2] = null);
(statearr_11699_11714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 5))
{var inst_11681 = (state_11695[8]);var state_11695__$1 = state_11695;var statearr_11700_11715 = state_11695__$1;(statearr_11700_11715[2] = inst_11681);
(statearr_11700_11715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 4))
{var inst_11684 = (state_11695[7]);var inst_11684__$1 = (state_11695[2]);var inst_11685 = (inst_11684__$1 == null);var state_11695__$1 = (function (){var statearr_11701 = state_11695;(statearr_11701[7] = inst_11684__$1);
return statearr_11701;
})();if(cljs.core.truth_(inst_11685))
{var statearr_11702_11716 = state_11695__$1;(statearr_11702_11716[1] = 5);
} else
{var statearr_11703_11717 = state_11695__$1;(statearr_11703_11717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 3))
{var inst_11693 = (state_11695[2]);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11695__$1,inst_11693);
} else
{if((state_val_11696 === 2))
{var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,4,ch);
} else
{if((state_val_11696 === 1))
{var inst_11681 = init;var state_11695__$1 = (function (){var statearr_11704 = state_11695;(statearr_11704[8] = inst_11681);
return statearr_11704;
})();var statearr_11705_11718 = state_11695__$1;(statearr_11705_11718[2] = null);
(statearr_11705_11718[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_11709 = [null,null,null,null,null,null,null,null,null];(statearr_11709[0] = state_machine__6893__auto__);
(statearr_11709[1] = 1);
return statearr_11709;
});
var state_machine__6893__auto____1 = (function (state_11695){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11710){if((e11710 instanceof Object))
{var ex__6896__auto__ = e11710;var statearr_11711_11719 = state_11695;(statearr_11711_11719[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11720 = state_11695;
state_11695 = G__11720;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11712 = f__6963__auto__.call(null);(statearr_11712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return c__6962__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11782){var state_val_11783 = (state_11782[1]);if((state_val_11783 === 1))
{var inst_11762 = cljs.core.seq.call(null,coll);var inst_11763 = inst_11762;var state_11782__$1 = (function (){var statearr_11784 = state_11782;(statearr_11784[7] = inst_11763);
return statearr_11784;
})();var statearr_11785_11803 = state_11782__$1;(statearr_11785_11803[2] = null);
(statearr_11785_11803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 2))
{var inst_11763 = (state_11782[7]);var state_11782__$1 = state_11782;if(cljs.core.truth_(inst_11763))
{var statearr_11786_11804 = state_11782__$1;(statearr_11786_11804[1] = 4);
} else
{var statearr_11787_11805 = state_11782__$1;(statearr_11787_11805[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 3))
{var inst_11780 = (state_11782[2]);var state_11782__$1 = state_11782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11782__$1,inst_11780);
} else
{if((state_val_11783 === 4))
{var inst_11763 = (state_11782[7]);var inst_11766 = cljs.core.first.call(null,inst_11763);var state_11782__$1 = state_11782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11782__$1,7,ch,inst_11766);
} else
{if((state_val_11783 === 5))
{var state_11782__$1 = state_11782;if(cljs.core.truth_(close_QMARK_))
{var statearr_11788_11806 = state_11782__$1;(statearr_11788_11806[1] = 8);
} else
{var statearr_11789_11807 = state_11782__$1;(statearr_11789_11807[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 6))
{var inst_11778 = (state_11782[2]);var state_11782__$1 = state_11782;var statearr_11790_11808 = state_11782__$1;(statearr_11790_11808[2] = inst_11778);
(statearr_11790_11808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 7))
{var inst_11763 = (state_11782[7]);var inst_11768 = (state_11782[2]);var inst_11769 = cljs.core.next.call(null,inst_11763);var inst_11763__$1 = inst_11769;var state_11782__$1 = (function (){var statearr_11791 = state_11782;(statearr_11791[8] = inst_11768);
(statearr_11791[7] = inst_11763__$1);
return statearr_11791;
})();var statearr_11792_11809 = state_11782__$1;(statearr_11792_11809[2] = null);
(statearr_11792_11809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 8))
{var inst_11773 = cljs.core.async.close_BANG_.call(null,ch);var state_11782__$1 = state_11782;var statearr_11793_11810 = state_11782__$1;(statearr_11793_11810[2] = inst_11773);
(statearr_11793_11810[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 9))
{var state_11782__$1 = state_11782;var statearr_11794_11811 = state_11782__$1;(statearr_11794_11811[2] = null);
(statearr_11794_11811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 10))
{var inst_11776 = (state_11782[2]);var state_11782__$1 = state_11782;var statearr_11795_11812 = state_11782__$1;(statearr_11795_11812[2] = inst_11776);
(statearr_11795_11812[1] = 6);
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
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_11799 = [null,null,null,null,null,null,null,null,null];(statearr_11799[0] = state_machine__6893__auto__);
(statearr_11799[1] = 1);
return statearr_11799;
});
var state_machine__6893__auto____1 = (function (state_11782){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11782);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11800){if((e11800 instanceof Object))
{var ex__6896__auto__ = e11800;var statearr_11801_11813 = state_11782;(statearr_11801_11813[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11814 = state_11782;
state_11782 = G__11814;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11782){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11802 = f__6963__auto__.call(null);(statearr_11802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return c__6962__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11816 = {};return obj11816;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11818 = {};return obj11818;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12042 = (function (cs,ch,mult,meta12043){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12043 = meta12043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12042.cljs$lang$type = true;
cljs.core.async.t12042.cljs$lang$ctorStr = "cljs.core.async/t12042";
cljs.core.async.t12042.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12042");
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12042.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12044){var self__ = this;
var _12044__$1 = this;return self__.meta12043;
});})(cs))
;
cljs.core.async.t12042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12044,meta12043__$1){var self__ = this;
var _12044__$1 = this;return (new cljs.core.async.t12042(self__.cs,self__.ch,self__.mult,meta12043__$1));
});})(cs))
;
cljs.core.async.__GT_t12042 = ((function (cs){
return (function __GT_t12042(cs__$1,ch__$1,mult__$1,meta12043){return (new cljs.core.async.t12042(cs__$1,ch__$1,mult__$1,meta12043));
});})(cs))
;
}
return (new cljs.core.async.t12042(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6962__auto___12265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12179){var state_val_12180 = (state_12179[1]);if((state_val_12180 === 32))
{var inst_12047 = (state_12179[7]);var inst_12123 = (state_12179[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12179,31,Object,null,30);var inst_12130 = cljs.core.async.put_BANG_.call(null,inst_12123,inst_12047,done);var state_12179__$1 = state_12179;var statearr_12181_12266 = state_12179__$1;(statearr_12181_12266[2] = inst_12130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 1))
{var state_12179__$1 = state_12179;var statearr_12182_12267 = state_12179__$1;(statearr_12182_12267[2] = null);
(statearr_12182_12267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 33))
{var inst_12136 = (state_12179[9]);var inst_12138 = cljs.core.chunked_seq_QMARK_.call(null,inst_12136);var state_12179__$1 = state_12179;if(inst_12138)
{var statearr_12183_12268 = state_12179__$1;(statearr_12183_12268[1] = 36);
} else
{var statearr_12184_12269 = state_12179__$1;(statearr_12184_12269[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 2))
{var state_12179__$1 = state_12179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12179__$1,4,ch);
} else
{if((state_val_12180 === 34))
{var state_12179__$1 = state_12179;var statearr_12185_12270 = state_12179__$1;(statearr_12185_12270[2] = null);
(statearr_12185_12270[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 3))
{var inst_12177 = (state_12179[2]);var state_12179__$1 = state_12179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12179__$1,inst_12177);
} else
{if((state_val_12180 === 35))
{var inst_12161 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12186_12271 = state_12179__$1;(statearr_12186_12271[2] = inst_12161);
(statearr_12186_12271[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 4))
{var inst_12047 = (state_12179[7]);var inst_12047__$1 = (state_12179[2]);var inst_12048 = (inst_12047__$1 == null);var state_12179__$1 = (function (){var statearr_12187 = state_12179;(statearr_12187[7] = inst_12047__$1);
return statearr_12187;
})();if(cljs.core.truth_(inst_12048))
{var statearr_12188_12272 = state_12179__$1;(statearr_12188_12272[1] = 5);
} else
{var statearr_12189_12273 = state_12179__$1;(statearr_12189_12273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 36))
{var inst_12136 = (state_12179[9]);var inst_12140 = cljs.core.chunk_first.call(null,inst_12136);var inst_12141 = cljs.core.chunk_rest.call(null,inst_12136);var inst_12142 = cljs.core.count.call(null,inst_12140);var inst_12115 = inst_12141;var inst_12116 = inst_12140;var inst_12117 = inst_12142;var inst_12118 = 0;var state_12179__$1 = (function (){var statearr_12190 = state_12179;(statearr_12190[10] = inst_12115);
(statearr_12190[11] = inst_12116);
(statearr_12190[12] = inst_12117);
(statearr_12190[13] = inst_12118);
return statearr_12190;
})();var statearr_12191_12274 = state_12179__$1;(statearr_12191_12274[2] = null);
(statearr_12191_12274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 5))
{var inst_12054 = cljs.core.deref.call(null,cs);var inst_12055 = cljs.core.seq.call(null,inst_12054);var inst_12056 = inst_12055;var inst_12057 = null;var inst_12058 = 0;var inst_12059 = 0;var state_12179__$1 = (function (){var statearr_12192 = state_12179;(statearr_12192[14] = inst_12059);
(statearr_12192[15] = inst_12058);
(statearr_12192[16] = inst_12057);
(statearr_12192[17] = inst_12056);
return statearr_12192;
})();var statearr_12193_12275 = state_12179__$1;(statearr_12193_12275[2] = null);
(statearr_12193_12275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 37))
{var inst_12136 = (state_12179[9]);var inst_12145 = cljs.core.first.call(null,inst_12136);var state_12179__$1 = (function (){var statearr_12194 = state_12179;(statearr_12194[18] = inst_12145);
return statearr_12194;
})();var statearr_12195_12276 = state_12179__$1;(statearr_12195_12276[2] = null);
(statearr_12195_12276[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 6))
{var inst_12107 = (state_12179[19]);var inst_12106 = cljs.core.deref.call(null,cs);var inst_12107__$1 = cljs.core.keys.call(null,inst_12106);var inst_12108 = cljs.core.count.call(null,inst_12107__$1);var inst_12109 = cljs.core.reset_BANG_.call(null,dctr,inst_12108);var inst_12114 = cljs.core.seq.call(null,inst_12107__$1);var inst_12115 = inst_12114;var inst_12116 = null;var inst_12117 = 0;var inst_12118 = 0;var state_12179__$1 = (function (){var statearr_12196 = state_12179;(statearr_12196[10] = inst_12115);
(statearr_12196[19] = inst_12107__$1);
(statearr_12196[20] = inst_12109);
(statearr_12196[11] = inst_12116);
(statearr_12196[12] = inst_12117);
(statearr_12196[13] = inst_12118);
return statearr_12196;
})();var statearr_12197_12277 = state_12179__$1;(statearr_12197_12277[2] = null);
(statearr_12197_12277[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 38))
{var inst_12158 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12198_12278 = state_12179__$1;(statearr_12198_12278[2] = inst_12158);
(statearr_12198_12278[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 7))
{var inst_12175 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12199_12279 = state_12179__$1;(statearr_12199_12279[2] = inst_12175);
(statearr_12199_12279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 39))
{var inst_12136 = (state_12179[9]);var inst_12154 = (state_12179[2]);var inst_12155 = cljs.core.next.call(null,inst_12136);var inst_12115 = inst_12155;var inst_12116 = null;var inst_12117 = 0;var inst_12118 = 0;var state_12179__$1 = (function (){var statearr_12200 = state_12179;(statearr_12200[10] = inst_12115);
(statearr_12200[21] = inst_12154);
(statearr_12200[11] = inst_12116);
(statearr_12200[12] = inst_12117);
(statearr_12200[13] = inst_12118);
return statearr_12200;
})();var statearr_12201_12280 = state_12179__$1;(statearr_12201_12280[2] = null);
(statearr_12201_12280[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 8))
{var inst_12059 = (state_12179[14]);var inst_12058 = (state_12179[15]);var inst_12061 = (inst_12059 < inst_12058);var inst_12062 = inst_12061;var state_12179__$1 = state_12179;if(cljs.core.truth_(inst_12062))
{var statearr_12202_12281 = state_12179__$1;(statearr_12202_12281[1] = 10);
} else
{var statearr_12203_12282 = state_12179__$1;(statearr_12203_12282[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 40))
{var inst_12145 = (state_12179[18]);var inst_12146 = (state_12179[2]);var inst_12147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12148 = cljs.core.async.untap_STAR_.call(null,m,inst_12145);var state_12179__$1 = (function (){var statearr_12204 = state_12179;(statearr_12204[22] = inst_12147);
(statearr_12204[23] = inst_12146);
return statearr_12204;
})();var statearr_12205_12283 = state_12179__$1;(statearr_12205_12283[2] = inst_12148);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 9))
{var inst_12104 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12206_12284 = state_12179__$1;(statearr_12206_12284[2] = inst_12104);
(statearr_12206_12284[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 41))
{var inst_12145 = (state_12179[18]);var inst_12047 = (state_12179[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12179,40,Object,null,39);var inst_12152 = cljs.core.async.put_BANG_.call(null,inst_12145,inst_12047,done);var state_12179__$1 = state_12179;var statearr_12207_12285 = state_12179__$1;(statearr_12207_12285[2] = inst_12152);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 10))
{var inst_12059 = (state_12179[14]);var inst_12057 = (state_12179[16]);var inst_12065 = cljs.core._nth.call(null,inst_12057,inst_12059);var inst_12066 = cljs.core.nth.call(null,inst_12065,0,null);var inst_12067 = cljs.core.nth.call(null,inst_12065,1,null);var state_12179__$1 = (function (){var statearr_12208 = state_12179;(statearr_12208[24] = inst_12066);
return statearr_12208;
})();if(cljs.core.truth_(inst_12067))
{var statearr_12209_12286 = state_12179__$1;(statearr_12209_12286[1] = 13);
} else
{var statearr_12210_12287 = state_12179__$1;(statearr_12210_12287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 42))
{var state_12179__$1 = state_12179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12179__$1,45,dchan);
} else
{if((state_val_12180 === 11))
{var inst_12076 = (state_12179[25]);var inst_12056 = (state_12179[17]);var inst_12076__$1 = cljs.core.seq.call(null,inst_12056);var state_12179__$1 = (function (){var statearr_12211 = state_12179;(statearr_12211[25] = inst_12076__$1);
return statearr_12211;
})();if(inst_12076__$1)
{var statearr_12212_12288 = state_12179__$1;(statearr_12212_12288[1] = 16);
} else
{var statearr_12213_12289 = state_12179__$1;(statearr_12213_12289[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 43))
{var state_12179__$1 = state_12179;var statearr_12214_12290 = state_12179__$1;(statearr_12214_12290[2] = null);
(statearr_12214_12290[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 12))
{var inst_12102 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12215_12291 = state_12179__$1;(statearr_12215_12291[2] = inst_12102);
(statearr_12215_12291[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 44))
{var inst_12172 = (state_12179[2]);var state_12179__$1 = (function (){var statearr_12216 = state_12179;(statearr_12216[26] = inst_12172);
return statearr_12216;
})();var statearr_12217_12292 = state_12179__$1;(statearr_12217_12292[2] = null);
(statearr_12217_12292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 13))
{var inst_12066 = (state_12179[24]);var inst_12069 = cljs.core.async.close_BANG_.call(null,inst_12066);var state_12179__$1 = state_12179;var statearr_12218_12293 = state_12179__$1;(statearr_12218_12293[2] = inst_12069);
(statearr_12218_12293[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 45))
{var inst_12169 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12222_12294 = state_12179__$1;(statearr_12222_12294[2] = inst_12169);
(statearr_12222_12294[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 14))
{var state_12179__$1 = state_12179;var statearr_12223_12295 = state_12179__$1;(statearr_12223_12295[2] = null);
(statearr_12223_12295[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 15))
{var inst_12059 = (state_12179[14]);var inst_12058 = (state_12179[15]);var inst_12057 = (state_12179[16]);var inst_12056 = (state_12179[17]);var inst_12072 = (state_12179[2]);var inst_12073 = (inst_12059 + 1);var tmp12219 = inst_12058;var tmp12220 = inst_12057;var tmp12221 = inst_12056;var inst_12056__$1 = tmp12221;var inst_12057__$1 = tmp12220;var inst_12058__$1 = tmp12219;var inst_12059__$1 = inst_12073;var state_12179__$1 = (function (){var statearr_12224 = state_12179;(statearr_12224[27] = inst_12072);
(statearr_12224[14] = inst_12059__$1);
(statearr_12224[15] = inst_12058__$1);
(statearr_12224[16] = inst_12057__$1);
(statearr_12224[17] = inst_12056__$1);
return statearr_12224;
})();var statearr_12225_12296 = state_12179__$1;(statearr_12225_12296[2] = null);
(statearr_12225_12296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 16))
{var inst_12076 = (state_12179[25]);var inst_12078 = cljs.core.chunked_seq_QMARK_.call(null,inst_12076);var state_12179__$1 = state_12179;if(inst_12078)
{var statearr_12226_12297 = state_12179__$1;(statearr_12226_12297[1] = 19);
} else
{var statearr_12227_12298 = state_12179__$1;(statearr_12227_12298[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 17))
{var state_12179__$1 = state_12179;var statearr_12228_12299 = state_12179__$1;(statearr_12228_12299[2] = null);
(statearr_12228_12299[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 18))
{var inst_12100 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12229_12300 = state_12179__$1;(statearr_12229_12300[2] = inst_12100);
(statearr_12229_12300[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 19))
{var inst_12076 = (state_12179[25]);var inst_12080 = cljs.core.chunk_first.call(null,inst_12076);var inst_12081 = cljs.core.chunk_rest.call(null,inst_12076);var inst_12082 = cljs.core.count.call(null,inst_12080);var inst_12056 = inst_12081;var inst_12057 = inst_12080;var inst_12058 = inst_12082;var inst_12059 = 0;var state_12179__$1 = (function (){var statearr_12230 = state_12179;(statearr_12230[14] = inst_12059);
(statearr_12230[15] = inst_12058);
(statearr_12230[16] = inst_12057);
(statearr_12230[17] = inst_12056);
return statearr_12230;
})();var statearr_12231_12301 = state_12179__$1;(statearr_12231_12301[2] = null);
(statearr_12231_12301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 20))
{var inst_12076 = (state_12179[25]);var inst_12086 = cljs.core.first.call(null,inst_12076);var inst_12087 = cljs.core.nth.call(null,inst_12086,0,null);var inst_12088 = cljs.core.nth.call(null,inst_12086,1,null);var state_12179__$1 = (function (){var statearr_12232 = state_12179;(statearr_12232[28] = inst_12087);
return statearr_12232;
})();if(cljs.core.truth_(inst_12088))
{var statearr_12233_12302 = state_12179__$1;(statearr_12233_12302[1] = 22);
} else
{var statearr_12234_12303 = state_12179__$1;(statearr_12234_12303[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 21))
{var inst_12097 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12235_12304 = state_12179__$1;(statearr_12235_12304[2] = inst_12097);
(statearr_12235_12304[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 22))
{var inst_12087 = (state_12179[28]);var inst_12090 = cljs.core.async.close_BANG_.call(null,inst_12087);var state_12179__$1 = state_12179;var statearr_12236_12305 = state_12179__$1;(statearr_12236_12305[2] = inst_12090);
(statearr_12236_12305[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 23))
{var state_12179__$1 = state_12179;var statearr_12237_12306 = state_12179__$1;(statearr_12237_12306[2] = null);
(statearr_12237_12306[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 24))
{var inst_12076 = (state_12179[25]);var inst_12093 = (state_12179[2]);var inst_12094 = cljs.core.next.call(null,inst_12076);var inst_12056 = inst_12094;var inst_12057 = null;var inst_12058 = 0;var inst_12059 = 0;var state_12179__$1 = (function (){var statearr_12238 = state_12179;(statearr_12238[14] = inst_12059);
(statearr_12238[15] = inst_12058);
(statearr_12238[16] = inst_12057);
(statearr_12238[17] = inst_12056);
(statearr_12238[29] = inst_12093);
return statearr_12238;
})();var statearr_12239_12307 = state_12179__$1;(statearr_12239_12307[2] = null);
(statearr_12239_12307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 25))
{var inst_12117 = (state_12179[12]);var inst_12118 = (state_12179[13]);var inst_12120 = (inst_12118 < inst_12117);var inst_12121 = inst_12120;var state_12179__$1 = state_12179;if(cljs.core.truth_(inst_12121))
{var statearr_12240_12308 = state_12179__$1;(statearr_12240_12308[1] = 27);
} else
{var statearr_12241_12309 = state_12179__$1;(statearr_12241_12309[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 26))
{var inst_12107 = (state_12179[19]);var inst_12165 = (state_12179[2]);var inst_12166 = cljs.core.seq.call(null,inst_12107);var state_12179__$1 = (function (){var statearr_12242 = state_12179;(statearr_12242[30] = inst_12165);
return statearr_12242;
})();if(inst_12166)
{var statearr_12243_12310 = state_12179__$1;(statearr_12243_12310[1] = 42);
} else
{var statearr_12244_12311 = state_12179__$1;(statearr_12244_12311[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 27))
{var inst_12116 = (state_12179[11]);var inst_12118 = (state_12179[13]);var inst_12123 = cljs.core._nth.call(null,inst_12116,inst_12118);var state_12179__$1 = (function (){var statearr_12245 = state_12179;(statearr_12245[8] = inst_12123);
return statearr_12245;
})();var statearr_12246_12312 = state_12179__$1;(statearr_12246_12312[2] = null);
(statearr_12246_12312[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 28))
{var inst_12115 = (state_12179[10]);var inst_12136 = (state_12179[9]);var inst_12136__$1 = cljs.core.seq.call(null,inst_12115);var state_12179__$1 = (function (){var statearr_12250 = state_12179;(statearr_12250[9] = inst_12136__$1);
return statearr_12250;
})();if(inst_12136__$1)
{var statearr_12251_12313 = state_12179__$1;(statearr_12251_12313[1] = 33);
} else
{var statearr_12252_12314 = state_12179__$1;(statearr_12252_12314[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 29))
{var inst_12163 = (state_12179[2]);var state_12179__$1 = state_12179;var statearr_12253_12315 = state_12179__$1;(statearr_12253_12315[2] = inst_12163);
(statearr_12253_12315[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 30))
{var inst_12115 = (state_12179[10]);var inst_12116 = (state_12179[11]);var inst_12117 = (state_12179[12]);var inst_12118 = (state_12179[13]);var inst_12132 = (state_12179[2]);var inst_12133 = (inst_12118 + 1);var tmp12247 = inst_12115;var tmp12248 = inst_12116;var tmp12249 = inst_12117;var inst_12115__$1 = tmp12247;var inst_12116__$1 = tmp12248;var inst_12117__$1 = tmp12249;var inst_12118__$1 = inst_12133;var state_12179__$1 = (function (){var statearr_12254 = state_12179;(statearr_12254[10] = inst_12115__$1);
(statearr_12254[31] = inst_12132);
(statearr_12254[11] = inst_12116__$1);
(statearr_12254[12] = inst_12117__$1);
(statearr_12254[13] = inst_12118__$1);
return statearr_12254;
})();var statearr_12255_12316 = state_12179__$1;(statearr_12255_12316[2] = null);
(statearr_12255_12316[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12180 === 31))
{var inst_12123 = (state_12179[8]);var inst_12124 = (state_12179[2]);var inst_12125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12126 = cljs.core.async.untap_STAR_.call(null,m,inst_12123);var state_12179__$1 = (function (){var statearr_12256 = state_12179;(statearr_12256[32] = inst_12125);
(statearr_12256[33] = inst_12124);
return statearr_12256;
})();var statearr_12257_12317 = state_12179__$1;(statearr_12257_12317[2] = inst_12126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_12261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12261[0] = state_machine__6893__auto__);
(statearr_12261[1] = 1);
return statearr_12261;
});
var state_machine__6893__auto____1 = (function (state_12179){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12262){if((e12262 instanceof Object))
{var ex__6896__auto__ = e12262;var statearr_12263_12318 = state_12179;(statearr_12263_12318[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12319 = state_12179;
state_12179 = G__12319;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12179){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12264 = f__6963__auto__.call(null);(statearr_12264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12265);
return statearr_12264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12321 = {};return obj12321;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12431 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12432){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12432 = meta12432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12431.cljs$lang$type = true;
cljs.core.async.t12431.cljs$lang$ctorStr = "cljs.core.async/t12431";
cljs.core.async.t12431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12433){var self__ = this;
var _12433__$1 = this;return self__.meta12432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12433,meta12432__$1){var self__ = this;
var _12433__$1 = this;return (new cljs.core.async.t12431(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12432){return (new cljs.core.async.t12431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12431(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6962__auto___12540 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12498){var state_val_12499 = (state_12498[1]);if((state_val_12499 === 1))
{var inst_12437 = (state_12498[7]);var inst_12437__$1 = calc_state.call(null);var inst_12438 = cljs.core.seq_QMARK_.call(null,inst_12437__$1);var state_12498__$1 = (function (){var statearr_12500 = state_12498;(statearr_12500[7] = inst_12437__$1);
return statearr_12500;
})();if(inst_12438)
{var statearr_12501_12541 = state_12498__$1;(statearr_12501_12541[1] = 2);
} else
{var statearr_12502_12542 = state_12498__$1;(statearr_12502_12542[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 2))
{var inst_12437 = (state_12498[7]);var inst_12440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12437);var state_12498__$1 = state_12498;var statearr_12503_12543 = state_12498__$1;(statearr_12503_12543[2] = inst_12440);
(statearr_12503_12543[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 3))
{var inst_12437 = (state_12498[7]);var state_12498__$1 = state_12498;var statearr_12504_12544 = state_12498__$1;(statearr_12504_12544[2] = inst_12437);
(statearr_12504_12544[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 4))
{var inst_12437 = (state_12498[7]);var inst_12443 = (state_12498[2]);var inst_12444 = cljs.core.get.call(null,inst_12443,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12445 = cljs.core.get.call(null,inst_12443,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12446 = cljs.core.get.call(null,inst_12443,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12447 = inst_12437;var state_12498__$1 = (function (){var statearr_12505 = state_12498;(statearr_12505[8] = inst_12446);
(statearr_12505[9] = inst_12447);
(statearr_12505[10] = inst_12445);
(statearr_12505[11] = inst_12444);
return statearr_12505;
})();var statearr_12506_12545 = state_12498__$1;(statearr_12506_12545[2] = null);
(statearr_12506_12545[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 5))
{var inst_12447 = (state_12498[9]);var inst_12450 = cljs.core.seq_QMARK_.call(null,inst_12447);var state_12498__$1 = state_12498;if(inst_12450)
{var statearr_12507_12546 = state_12498__$1;(statearr_12507_12546[1] = 7);
} else
{var statearr_12508_12547 = state_12498__$1;(statearr_12508_12547[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 6))
{var inst_12496 = (state_12498[2]);var state_12498__$1 = state_12498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12498__$1,inst_12496);
} else
{if((state_val_12499 === 7))
{var inst_12447 = (state_12498[9]);var inst_12452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12447);var state_12498__$1 = state_12498;var statearr_12509_12548 = state_12498__$1;(statearr_12509_12548[2] = inst_12452);
(statearr_12509_12548[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 8))
{var inst_12447 = (state_12498[9]);var state_12498__$1 = state_12498;var statearr_12510_12549 = state_12498__$1;(statearr_12510_12549[2] = inst_12447);
(statearr_12510_12549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 9))
{var inst_12455 = (state_12498[12]);var inst_12455__$1 = (state_12498[2]);var inst_12456 = cljs.core.get.call(null,inst_12455__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12457 = cljs.core.get.call(null,inst_12455__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12458 = cljs.core.get.call(null,inst_12455__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12498__$1 = (function (){var statearr_12511 = state_12498;(statearr_12511[13] = inst_12457);
(statearr_12511[14] = inst_12458);
(statearr_12511[12] = inst_12455__$1);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12498__$1,10,inst_12456);
} else
{if((state_val_12499 === 10))
{var inst_12462 = (state_12498[15]);var inst_12463 = (state_12498[16]);var inst_12461 = (state_12498[2]);var inst_12462__$1 = cljs.core.nth.call(null,inst_12461,0,null);var inst_12463__$1 = cljs.core.nth.call(null,inst_12461,1,null);var inst_12464 = (inst_12462__$1 == null);var inst_12465 = cljs.core._EQ_.call(null,inst_12463__$1,change);var inst_12466 = (inst_12464) || (inst_12465);var state_12498__$1 = (function (){var statearr_12512 = state_12498;(statearr_12512[15] = inst_12462__$1);
(statearr_12512[16] = inst_12463__$1);
return statearr_12512;
})();if(cljs.core.truth_(inst_12466))
{var statearr_12513_12550 = state_12498__$1;(statearr_12513_12550[1] = 11);
} else
{var statearr_12514_12551 = state_12498__$1;(statearr_12514_12551[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 11))
{var inst_12462 = (state_12498[15]);var inst_12468 = (inst_12462 == null);var state_12498__$1 = state_12498;if(cljs.core.truth_(inst_12468))
{var statearr_12515_12552 = state_12498__$1;(statearr_12515_12552[1] = 14);
} else
{var statearr_12516_12553 = state_12498__$1;(statearr_12516_12553[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 12))
{var inst_12463 = (state_12498[16]);var inst_12477 = (state_12498[17]);var inst_12458 = (state_12498[14]);var inst_12477__$1 = inst_12458.call(null,inst_12463);var state_12498__$1 = (function (){var statearr_12517 = state_12498;(statearr_12517[17] = inst_12477__$1);
return statearr_12517;
})();if(cljs.core.truth_(inst_12477__$1))
{var statearr_12518_12554 = state_12498__$1;(statearr_12518_12554[1] = 17);
} else
{var statearr_12519_12555 = state_12498__$1;(statearr_12519_12555[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 13))
{var inst_12494 = (state_12498[2]);var state_12498__$1 = state_12498;var statearr_12520_12556 = state_12498__$1;(statearr_12520_12556[2] = inst_12494);
(statearr_12520_12556[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 14))
{var inst_12463 = (state_12498[16]);var inst_12470 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12463);var state_12498__$1 = state_12498;var statearr_12521_12557 = state_12498__$1;(statearr_12521_12557[2] = inst_12470);
(statearr_12521_12557[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 15))
{var state_12498__$1 = state_12498;var statearr_12522_12558 = state_12498__$1;(statearr_12522_12558[2] = null);
(statearr_12522_12558[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 16))
{var inst_12473 = (state_12498[2]);var inst_12474 = calc_state.call(null);var inst_12447 = inst_12474;var state_12498__$1 = (function (){var statearr_12523 = state_12498;(statearr_12523[18] = inst_12473);
(statearr_12523[9] = inst_12447);
return statearr_12523;
})();var statearr_12524_12559 = state_12498__$1;(statearr_12524_12559[2] = null);
(statearr_12524_12559[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 17))
{var inst_12477 = (state_12498[17]);var state_12498__$1 = state_12498;var statearr_12525_12560 = state_12498__$1;(statearr_12525_12560[2] = inst_12477);
(statearr_12525_12560[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 18))
{var inst_12463 = (state_12498[16]);var inst_12457 = (state_12498[13]);var inst_12458 = (state_12498[14]);var inst_12480 = cljs.core.empty_QMARK_.call(null,inst_12458);var inst_12481 = inst_12457.call(null,inst_12463);var inst_12482 = cljs.core.not.call(null,inst_12481);var inst_12483 = (inst_12480) && (inst_12482);var state_12498__$1 = state_12498;var statearr_12526_12561 = state_12498__$1;(statearr_12526_12561[2] = inst_12483);
(statearr_12526_12561[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 19))
{var inst_12485 = (state_12498[2]);var state_12498__$1 = state_12498;if(cljs.core.truth_(inst_12485))
{var statearr_12527_12562 = state_12498__$1;(statearr_12527_12562[1] = 20);
} else
{var statearr_12528_12563 = state_12498__$1;(statearr_12528_12563[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 20))
{var inst_12462 = (state_12498[15]);var state_12498__$1 = state_12498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12498__$1,23,out,inst_12462);
} else
{if((state_val_12499 === 21))
{var state_12498__$1 = state_12498;var statearr_12529_12564 = state_12498__$1;(statearr_12529_12564[2] = null);
(statearr_12529_12564[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 22))
{var inst_12455 = (state_12498[12]);var inst_12491 = (state_12498[2]);var inst_12447 = inst_12455;var state_12498__$1 = (function (){var statearr_12530 = state_12498;(statearr_12530[9] = inst_12447);
(statearr_12530[19] = inst_12491);
return statearr_12530;
})();var statearr_12531_12565 = state_12498__$1;(statearr_12531_12565[2] = null);
(statearr_12531_12565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12499 === 23))
{var inst_12488 = (state_12498[2]);var state_12498__$1 = state_12498;var statearr_12532_12566 = state_12498__$1;(statearr_12532_12566[2] = inst_12488);
(statearr_12532_12566[1] = 22);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_12536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12536[0] = state_machine__6893__auto__);
(statearr_12536[1] = 1);
return statearr_12536;
});
var state_machine__6893__auto____1 = (function (state_12498){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12537){if((e12537 instanceof Object))
{var ex__6896__auto__ = e12537;var statearr_12538_12567 = state_12498;(statearr_12538_12567[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12568 = state_12498;
state_12498 = G__12568;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12498){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12539 = f__6963__auto__.call(null);(statearr_12539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12540);
return statearr_12539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12570 = {};return obj12570;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12571_SHARP_){if(cljs.core.truth_(p1__12571_SHARP_.call(null,topic)))
{return p1__12571_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12571_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12696 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12697){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12697 = meta12697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12696.cljs$lang$type = true;
cljs.core.async.t12696.cljs$lang$ctorStr = "cljs.core.async/t12696";
cljs.core.async.t12696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12696");
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12698){var self__ = this;
var _12698__$1 = this;return self__.meta12697;
});})(mults,ensure_mult))
;
cljs.core.async.t12696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12698,meta12697__$1){var self__ = this;
var _12698__$1 = this;return (new cljs.core.async.t12696(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12697__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12696 = ((function (mults,ensure_mult){
return (function __GT_t12696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12697){return (new cljs.core.async.t12696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12697));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12696(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6962__auto___12820 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12772){var state_val_12773 = (state_12772[1]);if((state_val_12773 === 1))
{var state_12772__$1 = state_12772;var statearr_12774_12821 = state_12772__$1;(statearr_12774_12821[2] = null);
(statearr_12774_12821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 2))
{var state_12772__$1 = state_12772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12772__$1,4,ch);
} else
{if((state_val_12773 === 3))
{var inst_12770 = (state_12772[2]);var state_12772__$1 = state_12772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12772__$1,inst_12770);
} else
{if((state_val_12773 === 4))
{var inst_12701 = (state_12772[7]);var inst_12701__$1 = (state_12772[2]);var inst_12702 = (inst_12701__$1 == null);var state_12772__$1 = (function (){var statearr_12775 = state_12772;(statearr_12775[7] = inst_12701__$1);
return statearr_12775;
})();if(cljs.core.truth_(inst_12702))
{var statearr_12776_12822 = state_12772__$1;(statearr_12776_12822[1] = 5);
} else
{var statearr_12777_12823 = state_12772__$1;(statearr_12777_12823[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 5))
{var inst_12708 = cljs.core.deref.call(null,mults);var inst_12709 = cljs.core.vals.call(null,inst_12708);var inst_12710 = cljs.core.seq.call(null,inst_12709);var inst_12711 = inst_12710;var inst_12712 = null;var inst_12713 = 0;var inst_12714 = 0;var state_12772__$1 = (function (){var statearr_12778 = state_12772;(statearr_12778[8] = inst_12714);
(statearr_12778[9] = inst_12711);
(statearr_12778[10] = inst_12712);
(statearr_12778[11] = inst_12713);
return statearr_12778;
})();var statearr_12779_12824 = state_12772__$1;(statearr_12779_12824[2] = null);
(statearr_12779_12824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 6))
{var inst_12751 = (state_12772[12]);var inst_12701 = (state_12772[7]);var inst_12749 = (state_12772[13]);var inst_12749__$1 = topic_fn.call(null,inst_12701);var inst_12750 = cljs.core.deref.call(null,mults);var inst_12751__$1 = cljs.core.get.call(null,inst_12750,inst_12749__$1);var state_12772__$1 = (function (){var statearr_12780 = state_12772;(statearr_12780[12] = inst_12751__$1);
(statearr_12780[13] = inst_12749__$1);
return statearr_12780;
})();if(cljs.core.truth_(inst_12751__$1))
{var statearr_12781_12825 = state_12772__$1;(statearr_12781_12825[1] = 19);
} else
{var statearr_12782_12826 = state_12772__$1;(statearr_12782_12826[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 7))
{var inst_12768 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12783_12827 = state_12772__$1;(statearr_12783_12827[2] = inst_12768);
(statearr_12783_12827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 8))
{var inst_12714 = (state_12772[8]);var inst_12713 = (state_12772[11]);var inst_12716 = (inst_12714 < inst_12713);var inst_12717 = inst_12716;var state_12772__$1 = state_12772;if(cljs.core.truth_(inst_12717))
{var statearr_12787_12828 = state_12772__$1;(statearr_12787_12828[1] = 10);
} else
{var statearr_12788_12829 = state_12772__$1;(statearr_12788_12829[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 9))
{var inst_12747 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12789_12830 = state_12772__$1;(statearr_12789_12830[2] = inst_12747);
(statearr_12789_12830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 10))
{var inst_12714 = (state_12772[8]);var inst_12711 = (state_12772[9]);var inst_12712 = (state_12772[10]);var inst_12713 = (state_12772[11]);var inst_12719 = cljs.core._nth.call(null,inst_12712,inst_12714);var inst_12720 = cljs.core.async.muxch_STAR_.call(null,inst_12719);var inst_12721 = cljs.core.async.close_BANG_.call(null,inst_12720);var inst_12722 = (inst_12714 + 1);var tmp12784 = inst_12711;var tmp12785 = inst_12712;var tmp12786 = inst_12713;var inst_12711__$1 = tmp12784;var inst_12712__$1 = tmp12785;var inst_12713__$1 = tmp12786;var inst_12714__$1 = inst_12722;var state_12772__$1 = (function (){var statearr_12790 = state_12772;(statearr_12790[8] = inst_12714__$1);
(statearr_12790[14] = inst_12721);
(statearr_12790[9] = inst_12711__$1);
(statearr_12790[10] = inst_12712__$1);
(statearr_12790[11] = inst_12713__$1);
return statearr_12790;
})();var statearr_12791_12831 = state_12772__$1;(statearr_12791_12831[2] = null);
(statearr_12791_12831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 11))
{var inst_12725 = (state_12772[15]);var inst_12711 = (state_12772[9]);var inst_12725__$1 = cljs.core.seq.call(null,inst_12711);var state_12772__$1 = (function (){var statearr_12792 = state_12772;(statearr_12792[15] = inst_12725__$1);
return statearr_12792;
})();if(inst_12725__$1)
{var statearr_12793_12832 = state_12772__$1;(statearr_12793_12832[1] = 13);
} else
{var statearr_12794_12833 = state_12772__$1;(statearr_12794_12833[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 12))
{var inst_12745 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12795_12834 = state_12772__$1;(statearr_12795_12834[2] = inst_12745);
(statearr_12795_12834[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 13))
{var inst_12725 = (state_12772[15]);var inst_12727 = cljs.core.chunked_seq_QMARK_.call(null,inst_12725);var state_12772__$1 = state_12772;if(inst_12727)
{var statearr_12796_12835 = state_12772__$1;(statearr_12796_12835[1] = 16);
} else
{var statearr_12797_12836 = state_12772__$1;(statearr_12797_12836[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 14))
{var state_12772__$1 = state_12772;var statearr_12798_12837 = state_12772__$1;(statearr_12798_12837[2] = null);
(statearr_12798_12837[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 15))
{var inst_12743 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12799_12838 = state_12772__$1;(statearr_12799_12838[2] = inst_12743);
(statearr_12799_12838[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 16))
{var inst_12725 = (state_12772[15]);var inst_12729 = cljs.core.chunk_first.call(null,inst_12725);var inst_12730 = cljs.core.chunk_rest.call(null,inst_12725);var inst_12731 = cljs.core.count.call(null,inst_12729);var inst_12711 = inst_12730;var inst_12712 = inst_12729;var inst_12713 = inst_12731;var inst_12714 = 0;var state_12772__$1 = (function (){var statearr_12800 = state_12772;(statearr_12800[8] = inst_12714);
(statearr_12800[9] = inst_12711);
(statearr_12800[10] = inst_12712);
(statearr_12800[11] = inst_12713);
return statearr_12800;
})();var statearr_12801_12839 = state_12772__$1;(statearr_12801_12839[2] = null);
(statearr_12801_12839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 17))
{var inst_12725 = (state_12772[15]);var inst_12734 = cljs.core.first.call(null,inst_12725);var inst_12735 = cljs.core.async.muxch_STAR_.call(null,inst_12734);var inst_12736 = cljs.core.async.close_BANG_.call(null,inst_12735);var inst_12737 = cljs.core.next.call(null,inst_12725);var inst_12711 = inst_12737;var inst_12712 = null;var inst_12713 = 0;var inst_12714 = 0;var state_12772__$1 = (function (){var statearr_12802 = state_12772;(statearr_12802[8] = inst_12714);
(statearr_12802[16] = inst_12736);
(statearr_12802[9] = inst_12711);
(statearr_12802[10] = inst_12712);
(statearr_12802[11] = inst_12713);
return statearr_12802;
})();var statearr_12803_12840 = state_12772__$1;(statearr_12803_12840[2] = null);
(statearr_12803_12840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 18))
{var inst_12740 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12804_12841 = state_12772__$1;(statearr_12804_12841[2] = inst_12740);
(statearr_12804_12841[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 19))
{var state_12772__$1 = state_12772;var statearr_12805_12842 = state_12772__$1;(statearr_12805_12842[2] = null);
(statearr_12805_12842[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 20))
{var state_12772__$1 = state_12772;var statearr_12806_12843 = state_12772__$1;(statearr_12806_12843[2] = null);
(statearr_12806_12843[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 21))
{var inst_12765 = (state_12772[2]);var state_12772__$1 = (function (){var statearr_12807 = state_12772;(statearr_12807[17] = inst_12765);
return statearr_12807;
})();var statearr_12808_12844 = state_12772__$1;(statearr_12808_12844[2] = null);
(statearr_12808_12844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 22))
{var inst_12762 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12809_12845 = state_12772__$1;(statearr_12809_12845[2] = inst_12762);
(statearr_12809_12845[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 23))
{var inst_12749 = (state_12772[13]);var inst_12753 = (state_12772[2]);var inst_12754 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12749);var state_12772__$1 = (function (){var statearr_12810 = state_12772;(statearr_12810[18] = inst_12753);
return statearr_12810;
})();var statearr_12811_12846 = state_12772__$1;(statearr_12811_12846[2] = inst_12754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12772__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12773 === 24))
{var inst_12751 = (state_12772[12]);var inst_12701 = (state_12772[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12772,23,Object,null,22);var inst_12758 = cljs.core.async.muxch_STAR_.call(null,inst_12751);var state_12772__$1 = state_12772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12772__$1,25,inst_12758,inst_12701);
} else
{if((state_val_12773 === 25))
{var inst_12760 = (state_12772[2]);var state_12772__$1 = state_12772;var statearr_12812_12847 = state_12772__$1;(statearr_12812_12847[2] = inst_12760);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12772__$1);
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
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_12816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12816[0] = state_machine__6893__auto__);
(statearr_12816[1] = 1);
return statearr_12816;
});
var state_machine__6893__auto____1 = (function (state_12772){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12817){if((e12817 instanceof Object))
{var ex__6896__auto__ = e12817;var statearr_12818_12848 = state_12772;(statearr_12818_12848[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12849 = state_12772;
state_12772 = G__12849;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12772){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12819 = f__6963__auto__.call(null);(statearr_12819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12820);
return statearr_12819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6962__auto___12986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12956){var state_val_12957 = (state_12956[1]);if((state_val_12957 === 1))
{var state_12956__$1 = state_12956;var statearr_12958_12987 = state_12956__$1;(statearr_12958_12987[2] = null);
(statearr_12958_12987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 2))
{var inst_12919 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12920 = 0;var state_12956__$1 = (function (){var statearr_12959 = state_12956;(statearr_12959[7] = inst_12919);
(statearr_12959[8] = inst_12920);
return statearr_12959;
})();var statearr_12960_12988 = state_12956__$1;(statearr_12960_12988[2] = null);
(statearr_12960_12988[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 3))
{var inst_12954 = (state_12956[2]);var state_12956__$1 = state_12956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12956__$1,inst_12954);
} else
{if((state_val_12957 === 4))
{var inst_12920 = (state_12956[8]);var inst_12922 = (inst_12920 < cnt);var state_12956__$1 = state_12956;if(cljs.core.truth_(inst_12922))
{var statearr_12961_12989 = state_12956__$1;(statearr_12961_12989[1] = 6);
} else
{var statearr_12962_12990 = state_12956__$1;(statearr_12962_12990[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 5))
{var inst_12940 = (state_12956[2]);var state_12956__$1 = (function (){var statearr_12963 = state_12956;(statearr_12963[9] = inst_12940);
return statearr_12963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12956__$1,12,dchan);
} else
{if((state_val_12957 === 6))
{var state_12956__$1 = state_12956;var statearr_12964_12991 = state_12956__$1;(statearr_12964_12991[2] = null);
(statearr_12964_12991[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 7))
{var state_12956__$1 = state_12956;var statearr_12965_12992 = state_12956__$1;(statearr_12965_12992[2] = null);
(statearr_12965_12992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 8))
{var inst_12938 = (state_12956[2]);var state_12956__$1 = state_12956;var statearr_12966_12993 = state_12956__$1;(statearr_12966_12993[2] = inst_12938);
(statearr_12966_12993[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 9))
{var inst_12920 = (state_12956[8]);var inst_12933 = (state_12956[2]);var inst_12934 = (inst_12920 + 1);var inst_12920__$1 = inst_12934;var state_12956__$1 = (function (){var statearr_12967 = state_12956;(statearr_12967[10] = inst_12933);
(statearr_12967[8] = inst_12920__$1);
return statearr_12967;
})();var statearr_12968_12994 = state_12956__$1;(statearr_12968_12994[2] = null);
(statearr_12968_12994[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 10))
{var inst_12924 = (state_12956[2]);var inst_12925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12956__$1 = (function (){var statearr_12969 = state_12956;(statearr_12969[11] = inst_12924);
return statearr_12969;
})();var statearr_12970_12995 = state_12956__$1;(statearr_12970_12995[2] = inst_12925);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 11))
{var inst_12920 = (state_12956[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12956,10,Object,null,9);var inst_12929 = chs__$1.call(null,inst_12920);var inst_12930 = done.call(null,inst_12920);var inst_12931 = cljs.core.async.take_BANG_.call(null,inst_12929,inst_12930);var state_12956__$1 = state_12956;var statearr_12971_12996 = state_12956__$1;(statearr_12971_12996[2] = inst_12931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 12))
{var inst_12942 = (state_12956[12]);var inst_12942__$1 = (state_12956[2]);var inst_12943 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12942__$1);var state_12956__$1 = (function (){var statearr_12972 = state_12956;(statearr_12972[12] = inst_12942__$1);
return statearr_12972;
})();if(cljs.core.truth_(inst_12943))
{var statearr_12973_12997 = state_12956__$1;(statearr_12973_12997[1] = 13);
} else
{var statearr_12974_12998 = state_12956__$1;(statearr_12974_12998[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 13))
{var inst_12945 = cljs.core.async.close_BANG_.call(null,out);var state_12956__$1 = state_12956;var statearr_12975_12999 = state_12956__$1;(statearr_12975_12999[2] = inst_12945);
(statearr_12975_12999[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 14))
{var inst_12942 = (state_12956[12]);var inst_12947 = cljs.core.apply.call(null,f,inst_12942);var state_12956__$1 = state_12956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12956__$1,16,out,inst_12947);
} else
{if((state_val_12957 === 15))
{var inst_12952 = (state_12956[2]);var state_12956__$1 = state_12956;var statearr_12976_13000 = state_12956__$1;(statearr_12976_13000[2] = inst_12952);
(statearr_12976_13000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12957 === 16))
{var inst_12949 = (state_12956[2]);var state_12956__$1 = (function (){var statearr_12977 = state_12956;(statearr_12977[13] = inst_12949);
return statearr_12977;
})();var statearr_12978_13001 = state_12956__$1;(statearr_12978_13001[2] = null);
(statearr_12978_13001[1] = 2);
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
}
}
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
var state_machine__6893__auto____0 = (function (){var statearr_12982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12982[0] = state_machine__6893__auto__);
(statearr_12982[1] = 1);
return statearr_12982;
});
var state_machine__6893__auto____1 = (function (state_12956){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12956);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12983){if((e12983 instanceof Object))
{var ex__6896__auto__ = e12983;var statearr_12984_13002 = state_12956;(statearr_12984_13002[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13003 = state_12956;
state_12956 = G__13003;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12956){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12985 = f__6963__auto__.call(null);(statearr_12985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12986);
return statearr_12985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13111 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13087){var state_val_13088 = (state_13087[1]);if((state_val_13088 === 1))
{var inst_13058 = cljs.core.vec.call(null,chs);var inst_13059 = inst_13058;var state_13087__$1 = (function (){var statearr_13089 = state_13087;(statearr_13089[7] = inst_13059);
return statearr_13089;
})();var statearr_13090_13112 = state_13087__$1;(statearr_13090_13112[2] = null);
(statearr_13090_13112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 2))
{var inst_13059 = (state_13087[7]);var inst_13061 = cljs.core.count.call(null,inst_13059);var inst_13062 = (inst_13061 > 0);var state_13087__$1 = state_13087;if(cljs.core.truth_(inst_13062))
{var statearr_13091_13113 = state_13087__$1;(statearr_13091_13113[1] = 4);
} else
{var statearr_13092_13114 = state_13087__$1;(statearr_13092_13114[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 3))
{var inst_13085 = (state_13087[2]);var state_13087__$1 = state_13087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13087__$1,inst_13085);
} else
{if((state_val_13088 === 4))
{var inst_13059 = (state_13087[7]);var state_13087__$1 = state_13087;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13087__$1,7,inst_13059);
} else
{if((state_val_13088 === 5))
{var inst_13081 = cljs.core.async.close_BANG_.call(null,out);var state_13087__$1 = state_13087;var statearr_13093_13115 = state_13087__$1;(statearr_13093_13115[2] = inst_13081);
(statearr_13093_13115[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 6))
{var inst_13083 = (state_13087[2]);var state_13087__$1 = state_13087;var statearr_13094_13116 = state_13087__$1;(statearr_13094_13116[2] = inst_13083);
(statearr_13094_13116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 7))
{var inst_13067 = (state_13087[8]);var inst_13066 = (state_13087[9]);var inst_13066__$1 = (state_13087[2]);var inst_13067__$1 = cljs.core.nth.call(null,inst_13066__$1,0,null);var inst_13068 = cljs.core.nth.call(null,inst_13066__$1,1,null);var inst_13069 = (inst_13067__$1 == null);var state_13087__$1 = (function (){var statearr_13095 = state_13087;(statearr_13095[8] = inst_13067__$1);
(statearr_13095[10] = inst_13068);
(statearr_13095[9] = inst_13066__$1);
return statearr_13095;
})();if(cljs.core.truth_(inst_13069))
{var statearr_13096_13117 = state_13087__$1;(statearr_13096_13117[1] = 8);
} else
{var statearr_13097_13118 = state_13087__$1;(statearr_13097_13118[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 8))
{var inst_13067 = (state_13087[8]);var inst_13068 = (state_13087[10]);var inst_13066 = (state_13087[9]);var inst_13059 = (state_13087[7]);var inst_13071 = (function (){var c = inst_13068;var v = inst_13067;var vec__13064 = inst_13066;var cs = inst_13059;return ((function (c,v,vec__13064,cs,inst_13067,inst_13068,inst_13066,inst_13059,state_val_13088){
return (function (p1__13004_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13004_SHARP_);
});
;})(c,v,vec__13064,cs,inst_13067,inst_13068,inst_13066,inst_13059,state_val_13088))
})();var inst_13072 = cljs.core.filterv.call(null,inst_13071,inst_13059);var inst_13059__$1 = inst_13072;var state_13087__$1 = (function (){var statearr_13098 = state_13087;(statearr_13098[7] = inst_13059__$1);
return statearr_13098;
})();var statearr_13099_13119 = state_13087__$1;(statearr_13099_13119[2] = null);
(statearr_13099_13119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 9))
{var inst_13067 = (state_13087[8]);var state_13087__$1 = state_13087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13087__$1,11,out,inst_13067);
} else
{if((state_val_13088 === 10))
{var inst_13079 = (state_13087[2]);var state_13087__$1 = state_13087;var statearr_13101_13120 = state_13087__$1;(statearr_13101_13120[2] = inst_13079);
(statearr_13101_13120[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13088 === 11))
{var inst_13059 = (state_13087[7]);var inst_13076 = (state_13087[2]);var tmp13100 = inst_13059;var inst_13059__$1 = tmp13100;var state_13087__$1 = (function (){var statearr_13102 = state_13087;(statearr_13102[11] = inst_13076);
(statearr_13102[7] = inst_13059__$1);
return statearr_13102;
})();var statearr_13103_13121 = state_13087__$1;(statearr_13103_13121[2] = null);
(statearr_13103_13121[1] = 2);
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
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_13107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13107[0] = state_machine__6893__auto__);
(statearr_13107[1] = 1);
return statearr_13107;
});
var state_machine__6893__auto____1 = (function (state_13087){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13108){if((e13108 instanceof Object))
{var ex__6896__auto__ = e13108;var statearr_13109_13122 = state_13087;(statearr_13109_13122[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13123 = state_13087;
state_13087 = G__13123;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13087){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13110 = f__6963__auto__.call(null);(statearr_13110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13111);
return statearr_13110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13216 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13193){var state_val_13194 = (state_13193[1]);if((state_val_13194 === 1))
{var inst_13170 = 0;var state_13193__$1 = (function (){var statearr_13195 = state_13193;(statearr_13195[7] = inst_13170);
return statearr_13195;
})();var statearr_13196_13217 = state_13193__$1;(statearr_13196_13217[2] = null);
(statearr_13196_13217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 2))
{var inst_13170 = (state_13193[7]);var inst_13172 = (inst_13170 < n);var state_13193__$1 = state_13193;if(cljs.core.truth_(inst_13172))
{var statearr_13197_13218 = state_13193__$1;(statearr_13197_13218[1] = 4);
} else
{var statearr_13198_13219 = state_13193__$1;(statearr_13198_13219[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 3))
{var inst_13190 = (state_13193[2]);var inst_13191 = cljs.core.async.close_BANG_.call(null,out);var state_13193__$1 = (function (){var statearr_13199 = state_13193;(statearr_13199[8] = inst_13190);
return statearr_13199;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13193__$1,inst_13191);
} else
{if((state_val_13194 === 4))
{var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13193__$1,7,ch);
} else
{if((state_val_13194 === 5))
{var state_13193__$1 = state_13193;var statearr_13200_13220 = state_13193__$1;(statearr_13200_13220[2] = null);
(statearr_13200_13220[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 6))
{var inst_13188 = (state_13193[2]);var state_13193__$1 = state_13193;var statearr_13201_13221 = state_13193__$1;(statearr_13201_13221[2] = inst_13188);
(statearr_13201_13221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 7))
{var inst_13175 = (state_13193[9]);var inst_13175__$1 = (state_13193[2]);var inst_13176 = (inst_13175__$1 == null);var inst_13177 = cljs.core.not.call(null,inst_13176);var state_13193__$1 = (function (){var statearr_13202 = state_13193;(statearr_13202[9] = inst_13175__$1);
return statearr_13202;
})();if(inst_13177)
{var statearr_13203_13222 = state_13193__$1;(statearr_13203_13222[1] = 8);
} else
{var statearr_13204_13223 = state_13193__$1;(statearr_13204_13223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 8))
{var inst_13175 = (state_13193[9]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13193__$1,11,out,inst_13175);
} else
{if((state_val_13194 === 9))
{var state_13193__$1 = state_13193;var statearr_13205_13224 = state_13193__$1;(statearr_13205_13224[2] = null);
(statearr_13205_13224[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 10))
{var inst_13185 = (state_13193[2]);var state_13193__$1 = state_13193;var statearr_13206_13225 = state_13193__$1;(statearr_13206_13225[2] = inst_13185);
(statearr_13206_13225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 11))
{var inst_13170 = (state_13193[7]);var inst_13180 = (state_13193[2]);var inst_13181 = (inst_13170 + 1);var inst_13170__$1 = inst_13181;var state_13193__$1 = (function (){var statearr_13207 = state_13193;(statearr_13207[10] = inst_13180);
(statearr_13207[7] = inst_13170__$1);
return statearr_13207;
})();var statearr_13208_13226 = state_13193__$1;(statearr_13208_13226[2] = null);
(statearr_13208_13226[1] = 2);
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
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_13212 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13212[0] = state_machine__6893__auto__);
(statearr_13212[1] = 1);
return statearr_13212;
});
var state_machine__6893__auto____1 = (function (state_13193){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13213){if((e13213 instanceof Object))
{var ex__6896__auto__ = e13213;var statearr_13214_13227 = state_13193;(statearr_13214_13227[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13228 = state_13193;
state_13193 = G__13228;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13193){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13215 = f__6963__auto__.call(null);(statearr_13215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13216);
return statearr_13215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13325 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13300){var state_val_13301 = (state_13300[1]);if((state_val_13301 === 1))
{var inst_13277 = null;var state_13300__$1 = (function (){var statearr_13302 = state_13300;(statearr_13302[7] = inst_13277);
return statearr_13302;
})();var statearr_13303_13326 = state_13300__$1;(statearr_13303_13326[2] = null);
(statearr_13303_13326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 2))
{var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13300__$1,4,ch);
} else
{if((state_val_13301 === 3))
{var inst_13297 = (state_13300[2]);var inst_13298 = cljs.core.async.close_BANG_.call(null,out);var state_13300__$1 = (function (){var statearr_13304 = state_13300;(statearr_13304[8] = inst_13297);
return statearr_13304;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13300__$1,inst_13298);
} else
{if((state_val_13301 === 4))
{var inst_13280 = (state_13300[9]);var inst_13280__$1 = (state_13300[2]);var inst_13281 = (inst_13280__$1 == null);var inst_13282 = cljs.core.not.call(null,inst_13281);var state_13300__$1 = (function (){var statearr_13305 = state_13300;(statearr_13305[9] = inst_13280__$1);
return statearr_13305;
})();if(inst_13282)
{var statearr_13306_13327 = state_13300__$1;(statearr_13306_13327[1] = 5);
} else
{var statearr_13307_13328 = state_13300__$1;(statearr_13307_13328[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 5))
{var inst_13277 = (state_13300[7]);var inst_13280 = (state_13300[9]);var inst_13284 = cljs.core._EQ_.call(null,inst_13280,inst_13277);var state_13300__$1 = state_13300;if(inst_13284)
{var statearr_13308_13329 = state_13300__$1;(statearr_13308_13329[1] = 8);
} else
{var statearr_13309_13330 = state_13300__$1;(statearr_13309_13330[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 6))
{var state_13300__$1 = state_13300;var statearr_13311_13331 = state_13300__$1;(statearr_13311_13331[2] = null);
(statearr_13311_13331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 7))
{var inst_13295 = (state_13300[2]);var state_13300__$1 = state_13300;var statearr_13312_13332 = state_13300__$1;(statearr_13312_13332[2] = inst_13295);
(statearr_13312_13332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 8))
{var inst_13277 = (state_13300[7]);var tmp13310 = inst_13277;var inst_13277__$1 = tmp13310;var state_13300__$1 = (function (){var statearr_13313 = state_13300;(statearr_13313[7] = inst_13277__$1);
return statearr_13313;
})();var statearr_13314_13333 = state_13300__$1;(statearr_13314_13333[2] = null);
(statearr_13314_13333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 9))
{var inst_13280 = (state_13300[9]);var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13300__$1,11,out,inst_13280);
} else
{if((state_val_13301 === 10))
{var inst_13292 = (state_13300[2]);var state_13300__$1 = state_13300;var statearr_13315_13334 = state_13300__$1;(statearr_13315_13334[2] = inst_13292);
(statearr_13315_13334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13301 === 11))
{var inst_13280 = (state_13300[9]);var inst_13289 = (state_13300[2]);var inst_13277 = inst_13280;var state_13300__$1 = (function (){var statearr_13316 = state_13300;(statearr_13316[7] = inst_13277);
(statearr_13316[10] = inst_13289);
return statearr_13316;
})();var statearr_13317_13335 = state_13300__$1;(statearr_13317_13335[2] = null);
(statearr_13317_13335[1] = 2);
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
}
}
}
}
});return ((function (switch__6892__auto__){
return (function() {
var state_machine__6893__auto__ = null;
var state_machine__6893__auto____0 = (function (){var statearr_13321 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13321[0] = state_machine__6893__auto__);
(statearr_13321[1] = 1);
return statearr_13321;
});
var state_machine__6893__auto____1 = (function (state_13300){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13322){if((e13322 instanceof Object))
{var ex__6896__auto__ = e13322;var statearr_13323_13336 = state_13300;(statearr_13323_13336[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13337 = state_13300;
state_13300 = G__13337;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13300){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13324 = f__6963__auto__.call(null);(statearr_13324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13325);
return statearr_13324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13442){var state_val_13443 = (state_13442[1]);if((state_val_13443 === 1))
{var inst_13405 = (new Array(n));var inst_13406 = inst_13405;var inst_13407 = 0;var state_13442__$1 = (function (){var statearr_13444 = state_13442;(statearr_13444[7] = inst_13407);
(statearr_13444[8] = inst_13406);
return statearr_13444;
})();var statearr_13445_13473 = state_13442__$1;(statearr_13445_13473[2] = null);
(statearr_13445_13473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 2))
{var state_13442__$1 = state_13442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13442__$1,4,ch);
} else
{if((state_val_13443 === 3))
{var inst_13440 = (state_13442[2]);var state_13442__$1 = state_13442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13442__$1,inst_13440);
} else
{if((state_val_13443 === 4))
{var inst_13410 = (state_13442[9]);var inst_13410__$1 = (state_13442[2]);var inst_13411 = (inst_13410__$1 == null);var inst_13412 = cljs.core.not.call(null,inst_13411);var state_13442__$1 = (function (){var statearr_13446 = state_13442;(statearr_13446[9] = inst_13410__$1);
return statearr_13446;
})();if(inst_13412)
{var statearr_13447_13474 = state_13442__$1;(statearr_13447_13474[1] = 5);
} else
{var statearr_13448_13475 = state_13442__$1;(statearr_13448_13475[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 5))
{var inst_13407 = (state_13442[7]);var inst_13415 = (state_13442[10]);var inst_13410 = (state_13442[9]);var inst_13406 = (state_13442[8]);var inst_13414 = (inst_13406[inst_13407] = inst_13410);var inst_13415__$1 = (inst_13407 + 1);var inst_13416 = (inst_13415__$1 < n);var state_13442__$1 = (function (){var statearr_13449 = state_13442;(statearr_13449[11] = inst_13414);
(statearr_13449[10] = inst_13415__$1);
return statearr_13449;
})();if(cljs.core.truth_(inst_13416))
{var statearr_13450_13476 = state_13442__$1;(statearr_13450_13476[1] = 8);
} else
{var statearr_13451_13477 = state_13442__$1;(statearr_13451_13477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 6))
{var inst_13407 = (state_13442[7]);var inst_13428 = (inst_13407 > 0);var state_13442__$1 = state_13442;if(cljs.core.truth_(inst_13428))
{var statearr_13453_13478 = state_13442__$1;(statearr_13453_13478[1] = 12);
} else
{var statearr_13454_13479 = state_13442__$1;(statearr_13454_13479[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 7))
{var inst_13438 = (state_13442[2]);var state_13442__$1 = state_13442;var statearr_13455_13480 = state_13442__$1;(statearr_13455_13480[2] = inst_13438);
(statearr_13455_13480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 8))
{var inst_13415 = (state_13442[10]);var inst_13406 = (state_13442[8]);var tmp13452 = inst_13406;var inst_13406__$1 = tmp13452;var inst_13407 = inst_13415;var state_13442__$1 = (function (){var statearr_13456 = state_13442;(statearr_13456[7] = inst_13407);
(statearr_13456[8] = inst_13406__$1);
return statearr_13456;
})();var statearr_13457_13481 = state_13442__$1;(statearr_13457_13481[2] = null);
(statearr_13457_13481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 9))
{var inst_13406 = (state_13442[8]);var inst_13420 = cljs.core.vec.call(null,inst_13406);var state_13442__$1 = state_13442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13442__$1,11,out,inst_13420);
} else
{if((state_val_13443 === 10))
{var inst_13426 = (state_13442[2]);var state_13442__$1 = state_13442;var statearr_13458_13482 = state_13442__$1;(statearr_13458_13482[2] = inst_13426);
(statearr_13458_13482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 11))
{var inst_13422 = (state_13442[2]);var inst_13423 = (new Array(n));var inst_13406 = inst_13423;var inst_13407 = 0;var state_13442__$1 = (function (){var statearr_13459 = state_13442;(statearr_13459[7] = inst_13407);
(statearr_13459[12] = inst_13422);
(statearr_13459[8] = inst_13406);
return statearr_13459;
})();var statearr_13460_13483 = state_13442__$1;(statearr_13460_13483[2] = null);
(statearr_13460_13483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 12))
{var inst_13406 = (state_13442[8]);var inst_13430 = cljs.core.vec.call(null,inst_13406);var state_13442__$1 = state_13442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13442__$1,15,out,inst_13430);
} else
{if((state_val_13443 === 13))
{var state_13442__$1 = state_13442;var statearr_13461_13484 = state_13442__$1;(statearr_13461_13484[2] = null);
(statearr_13461_13484[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 14))
{var inst_13435 = (state_13442[2]);var inst_13436 = cljs.core.async.close_BANG_.call(null,out);var state_13442__$1 = (function (){var statearr_13462 = state_13442;(statearr_13462[13] = inst_13435);
return statearr_13462;
})();var statearr_13463_13485 = state_13442__$1;(statearr_13463_13485[2] = inst_13436);
(statearr_13463_13485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13443 === 15))
{var inst_13432 = (state_13442[2]);var state_13442__$1 = state_13442;var statearr_13464_13486 = state_13442__$1;(statearr_13464_13486[2] = inst_13432);
(statearr_13464_13486[1] = 14);
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
}
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
var state_machine__6893__auto____0 = (function (){var statearr_13468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13468[0] = state_machine__6893__auto__);
(statearr_13468[1] = 1);
return statearr_13468;
});
var state_machine__6893__auto____1 = (function (state_13442){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13469){if((e13469 instanceof Object))
{var ex__6896__auto__ = e13469;var statearr_13470_13487 = state_13442;(statearr_13470_13487[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13488 = state_13442;
state_13442 = G__13488;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13442){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13471 = f__6963__auto__.call(null);(statearr_13471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13472);
return statearr_13471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13631 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13601){var state_val_13602 = (state_13601[1]);if((state_val_13602 === 1))
{var inst_13560 = [];var inst_13561 = inst_13560;var inst_13562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13601__$1 = (function (){var statearr_13603 = state_13601;(statearr_13603[7] = inst_13562);
(statearr_13603[8] = inst_13561);
return statearr_13603;
})();var statearr_13604_13632 = state_13601__$1;(statearr_13604_13632[2] = null);
(statearr_13604_13632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 2))
{var state_13601__$1 = state_13601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13601__$1,4,ch);
} else
{if((state_val_13602 === 3))
{var inst_13599 = (state_13601[2]);var state_13601__$1 = state_13601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13601__$1,inst_13599);
} else
{if((state_val_13602 === 4))
{var inst_13565 = (state_13601[9]);var inst_13565__$1 = (state_13601[2]);var inst_13566 = (inst_13565__$1 == null);var inst_13567 = cljs.core.not.call(null,inst_13566);var state_13601__$1 = (function (){var statearr_13605 = state_13601;(statearr_13605[9] = inst_13565__$1);
return statearr_13605;
})();if(inst_13567)
{var statearr_13606_13633 = state_13601__$1;(statearr_13606_13633[1] = 5);
} else
{var statearr_13607_13634 = state_13601__$1;(statearr_13607_13634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 5))
{var inst_13565 = (state_13601[9]);var inst_13562 = (state_13601[7]);var inst_13569 = (state_13601[10]);var inst_13569__$1 = f.call(null,inst_13565);var inst_13570 = cljs.core._EQ_.call(null,inst_13569__$1,inst_13562);var inst_13571 = cljs.core.keyword_identical_QMARK_.call(null,inst_13562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13572 = (inst_13570) || (inst_13571);var state_13601__$1 = (function (){var statearr_13608 = state_13601;(statearr_13608[10] = inst_13569__$1);
return statearr_13608;
})();if(cljs.core.truth_(inst_13572))
{var statearr_13609_13635 = state_13601__$1;(statearr_13609_13635[1] = 8);
} else
{var statearr_13610_13636 = state_13601__$1;(statearr_13610_13636[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 6))
{var inst_13561 = (state_13601[8]);var inst_13586 = inst_13561.length;var inst_13587 = (inst_13586 > 0);var state_13601__$1 = state_13601;if(cljs.core.truth_(inst_13587))
{var statearr_13612_13637 = state_13601__$1;(statearr_13612_13637[1] = 12);
} else
{var statearr_13613_13638 = state_13601__$1;(statearr_13613_13638[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 7))
{var inst_13597 = (state_13601[2]);var state_13601__$1 = state_13601;var statearr_13614_13639 = state_13601__$1;(statearr_13614_13639[2] = inst_13597);
(statearr_13614_13639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 8))
{var inst_13565 = (state_13601[9]);var inst_13561 = (state_13601[8]);var inst_13569 = (state_13601[10]);var inst_13574 = inst_13561.push(inst_13565);var tmp13611 = inst_13561;var inst_13561__$1 = tmp13611;var inst_13562 = inst_13569;var state_13601__$1 = (function (){var statearr_13615 = state_13601;(statearr_13615[7] = inst_13562);
(statearr_13615[8] = inst_13561__$1);
(statearr_13615[11] = inst_13574);
return statearr_13615;
})();var statearr_13616_13640 = state_13601__$1;(statearr_13616_13640[2] = null);
(statearr_13616_13640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 9))
{var inst_13561 = (state_13601[8]);var inst_13577 = cljs.core.vec.call(null,inst_13561);var state_13601__$1 = state_13601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13601__$1,11,out,inst_13577);
} else
{if((state_val_13602 === 10))
{var inst_13584 = (state_13601[2]);var state_13601__$1 = state_13601;var statearr_13617_13641 = state_13601__$1;(statearr_13617_13641[2] = inst_13584);
(statearr_13617_13641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 11))
{var inst_13565 = (state_13601[9]);var inst_13569 = (state_13601[10]);var inst_13579 = (state_13601[2]);var inst_13580 = [];var inst_13581 = inst_13580.push(inst_13565);var inst_13561 = inst_13580;var inst_13562 = inst_13569;var state_13601__$1 = (function (){var statearr_13618 = state_13601;(statearr_13618[7] = inst_13562);
(statearr_13618[8] = inst_13561);
(statearr_13618[12] = inst_13579);
(statearr_13618[13] = inst_13581);
return statearr_13618;
})();var statearr_13619_13642 = state_13601__$1;(statearr_13619_13642[2] = null);
(statearr_13619_13642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 12))
{var inst_13561 = (state_13601[8]);var inst_13589 = cljs.core.vec.call(null,inst_13561);var state_13601__$1 = state_13601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13601__$1,15,out,inst_13589);
} else
{if((state_val_13602 === 13))
{var state_13601__$1 = state_13601;var statearr_13620_13643 = state_13601__$1;(statearr_13620_13643[2] = null);
(statearr_13620_13643[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 14))
{var inst_13594 = (state_13601[2]);var inst_13595 = cljs.core.async.close_BANG_.call(null,out);var state_13601__$1 = (function (){var statearr_13621 = state_13601;(statearr_13621[14] = inst_13594);
return statearr_13621;
})();var statearr_13622_13644 = state_13601__$1;(statearr_13622_13644[2] = inst_13595);
(statearr_13622_13644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13602 === 15))
{var inst_13591 = (state_13601[2]);var state_13601__$1 = state_13601;var statearr_13623_13645 = state_13601__$1;(statearr_13623_13645[2] = inst_13591);
(statearr_13623_13645[1] = 14);
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
}
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
var state_machine__6893__auto____0 = (function (){var statearr_13627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13627[0] = state_machine__6893__auto__);
(statearr_13627[1] = 1);
return statearr_13627;
});
var state_machine__6893__auto____1 = (function (state_13601){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13601);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13628){if((e13628 instanceof Object))
{var ex__6896__auto__ = e13628;var statearr_13629_13646 = state_13601;(statearr_13629_13646[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13647 = state_13601;
state_13601 = G__13647;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13601){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13630 = f__6963__auto__.call(null);(statearr_13630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13631);
return statearr_13630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6964__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map