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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11130 = (function (f,fn_handler,meta11131){
this.f = f;
this.fn_handler = fn_handler;
this.meta11131 = meta11131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11130.cljs$lang$type = true;
cljs.core.async.t11130.cljs$lang$ctorStr = "cljs.core.async/t11130";
cljs.core.async.t11130.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11130");
});
cljs.core.async.t11130.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11132){var self__ = this;
var _11132__$1 = this;return self__.meta11131;
});
cljs.core.async.t11130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11132,meta11131__$1){var self__ = this;
var _11132__$1 = this;return (new cljs.core.async.t11130(self__.f,self__.fn_handler,meta11131__$1));
});
cljs.core.async.__GT_t11130 = (function __GT_t11130(f__$1,fn_handler__$1,meta11131){return (new cljs.core.async.t11130(f__$1,fn_handler__$1,meta11131));
});
}
return (new cljs.core.async.t11130(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11134 = buff;if(G__11134)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11134.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11134.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11134);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11134);
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
{var val_11135 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11135);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11135);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11136 = n;var x_11137 = 0;while(true){
if((x_11137 < n__4291__auto___11136))
{(a[x_11137] = 0);
{
var G__11138 = (x_11137 + 1);
x_11137 = G__11138;
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
var G__11139 = (i + 1);
i = G__11139;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11143 = (function (flag,alt_flag,meta11144){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11144 = meta11144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11143.cljs$lang$type = true;
cljs.core.async.t11143.cljs$lang$ctorStr = "cljs.core.async/t11143";
cljs.core.async.t11143.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11143");
});
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11145){var self__ = this;
var _11145__$1 = this;return self__.meta11144;
});
cljs.core.async.t11143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11145,meta11144__$1){var self__ = this;
var _11145__$1 = this;return (new cljs.core.async.t11143(self__.flag,self__.alt_flag,meta11144__$1));
});
cljs.core.async.__GT_t11143 = (function __GT_t11143(flag__$1,alt_flag__$1,meta11144){return (new cljs.core.async.t11143(flag__$1,alt_flag__$1,meta11144));
});
}
return (new cljs.core.async.t11143(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11149 = (function (cb,flag,alt_handler,meta11150){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11150 = meta11150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11149.cljs$lang$type = true;
cljs.core.async.t11149.cljs$lang$ctorStr = "cljs.core.async/t11149";
cljs.core.async.t11149.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11149");
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11151){var self__ = this;
var _11151__$1 = this;return self__.meta11150;
});
cljs.core.async.t11149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11151,meta11150__$1){var self__ = this;
var _11151__$1 = this;return (new cljs.core.async.t11149(self__.cb,self__.flag,self__.alt_handler,meta11150__$1));
});
cljs.core.async.__GT_t11149 = (function __GT_t11149(cb__$1,flag__$1,alt_handler__$1,meta11150){return (new cljs.core.async.t11149(cb__$1,flag__$1,alt_handler__$1,meta11150));
});
}
return (new cljs.core.async.t11149(cb,flag,alt_handler,null));
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
return (function (p1__11152_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11152_SHARP_,port], null));
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
var G__11153 = (i + 1);
i = G__11153;
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
var alts_BANG___delegate = function (ports,p__11154){var map__11156 = p__11154;var map__11156__$1 = ((cljs.core.seq_QMARK_.call(null,map__11156))?cljs.core.apply.call(null,cljs.core.hash_map,map__11156):map__11156);var opts = map__11156__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11154 = null;if (arguments.length > 1) {
  p__11154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11154);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11157){
var ports = cljs.core.first(arglist__11157);
var p__11154 = cljs.core.rest(arglist__11157);
return alts_BANG___delegate(ports,p__11154);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11165 = (function (ch,f,map_LT_,meta11166){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11166 = meta11166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11165.cljs$lang$type = true;
cljs.core.async.t11165.cljs$lang$ctorStr = "cljs.core.async/t11165";
cljs.core.async.t11165.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11165");
});
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11168 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11168 = (function (fn1,_,meta11166,ch,f,map_LT_,meta11169){
this.fn1 = fn1;
this._ = _;
this.meta11166 = meta11166;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11169 = meta11169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11168.cljs$lang$type = true;
cljs.core.async.t11168.cljs$lang$ctorStr = "cljs.core.async/t11168";
cljs.core.async.t11168.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11168");
});
cljs.core.async.t11168.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11168.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11158_SHARP_){return f1.call(null,(((p1__11158_SHARP_ == null))?null:self__.f.call(null,p1__11158_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11170){var self__ = this;
var _11170__$1 = this;return self__.meta11169;
});
cljs.core.async.t11168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11170,meta11169__$1){var self__ = this;
var _11170__$1 = this;return (new cljs.core.async.t11168(self__.fn1,self__._,self__.meta11166,self__.ch,self__.f,self__.map_LT_,meta11169__$1));
});
cljs.core.async.__GT_t11168 = (function __GT_t11168(fn1__$1,___$2,meta11166__$1,ch__$2,f__$2,map_LT___$2,meta11169){return (new cljs.core.async.t11168(fn1__$1,___$2,meta11166__$1,ch__$2,f__$2,map_LT___$2,meta11169));
});
}
return (new cljs.core.async.t11168(fn1,___$1,self__.meta11166,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11167){var self__ = this;
var _11167__$1 = this;return self__.meta11166;
});
cljs.core.async.t11165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11167,meta11166__$1){var self__ = this;
var _11167__$1 = this;return (new cljs.core.async.t11165(self__.ch,self__.f,self__.map_LT_,meta11166__$1));
});
cljs.core.async.__GT_t11165 = (function __GT_t11165(ch__$1,f__$1,map_LT___$1,meta11166){return (new cljs.core.async.t11165(ch__$1,f__$1,map_LT___$1,meta11166));
});
}
return (new cljs.core.async.t11165(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11174 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11174 = (function (ch,f,map_GT_,meta11175){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11175 = meta11175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11174.cljs$lang$type = true;
cljs.core.async.t11174.cljs$lang$ctorStr = "cljs.core.async/t11174";
cljs.core.async.t11174.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11174");
});
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11176){var self__ = this;
var _11176__$1 = this;return self__.meta11175;
});
cljs.core.async.t11174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11176,meta11175__$1){var self__ = this;
var _11176__$1 = this;return (new cljs.core.async.t11174(self__.ch,self__.f,self__.map_GT_,meta11175__$1));
});
cljs.core.async.__GT_t11174 = (function __GT_t11174(ch__$1,f__$1,map_GT___$1,meta11175){return (new cljs.core.async.t11174(ch__$1,f__$1,map_GT___$1,meta11175));
});
}
return (new cljs.core.async.t11174(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11180 = (function (ch,p,filter_GT_,meta11181){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11181 = meta11181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11180.cljs$lang$type = true;
cljs.core.async.t11180.cljs$lang$ctorStr = "cljs.core.async/t11180";
cljs.core.async.t11180.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11180");
});
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11182){var self__ = this;
var _11182__$1 = this;return self__.meta11181;
});
cljs.core.async.t11180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11182,meta11181__$1){var self__ = this;
var _11182__$1 = this;return (new cljs.core.async.t11180(self__.ch,self__.p,self__.filter_GT_,meta11181__$1));
});
cljs.core.async.__GT_t11180 = (function __GT_t11180(ch__$1,p__$1,filter_GT___$1,meta11181){return (new cljs.core.async.t11180(ch__$1,p__$1,filter_GT___$1,meta11181));
});
}
return (new cljs.core.async.t11180(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___11265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11244){var state_val_11245 = (state_11244[1]);if((state_val_11245 === 1))
{var state_11244__$1 = state_11244;var statearr_11246_11266 = state_11244__$1;(statearr_11246_11266[2] = null);
(statearr_11246_11266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 2))
{var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11244__$1,4,ch);
} else
{if((state_val_11245 === 3))
{var inst_11242 = (state_11244[2]);var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11244__$1,inst_11242);
} else
{if((state_val_11245 === 4))
{var inst_11226 = (state_11244[7]);var inst_11226__$1 = (state_11244[2]);var inst_11227 = (inst_11226__$1 == null);var state_11244__$1 = (function (){var statearr_11247 = state_11244;(statearr_11247[7] = inst_11226__$1);
return statearr_11247;
})();if(cljs.core.truth_(inst_11227))
{var statearr_11248_11267 = state_11244__$1;(statearr_11248_11267[1] = 5);
} else
{var statearr_11249_11268 = state_11244__$1;(statearr_11249_11268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 5))
{var inst_11229 = cljs.core.async.close_BANG_.call(null,out);var state_11244__$1 = state_11244;var statearr_11250_11269 = state_11244__$1;(statearr_11250_11269[2] = inst_11229);
(statearr_11250_11269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 6))
{var inst_11226 = (state_11244[7]);var inst_11231 = p.call(null,inst_11226);var state_11244__$1 = state_11244;if(cljs.core.truth_(inst_11231))
{var statearr_11251_11270 = state_11244__$1;(statearr_11251_11270[1] = 8);
} else
{var statearr_11252_11271 = state_11244__$1;(statearr_11252_11271[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 7))
{var inst_11240 = (state_11244[2]);var state_11244__$1 = state_11244;var statearr_11253_11272 = state_11244__$1;(statearr_11253_11272[2] = inst_11240);
(statearr_11253_11272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 8))
{var inst_11226 = (state_11244[7]);var state_11244__$1 = state_11244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11244__$1,11,out,inst_11226);
} else
{if((state_val_11245 === 9))
{var state_11244__$1 = state_11244;var statearr_11254_11273 = state_11244__$1;(statearr_11254_11273[2] = null);
(statearr_11254_11273[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 10))
{var inst_11237 = (state_11244[2]);var state_11244__$1 = (function (){var statearr_11255 = state_11244;(statearr_11255[8] = inst_11237);
return statearr_11255;
})();var statearr_11256_11274 = state_11244__$1;(statearr_11256_11274[2] = null);
(statearr_11256_11274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11245 === 11))
{var inst_11234 = (state_11244[2]);var state_11244__$1 = state_11244;var statearr_11257_11275 = state_11244__$1;(statearr_11257_11275[2] = inst_11234);
(statearr_11257_11275[1] = 10);
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
var state_machine__6893__auto____0 = (function (){var statearr_11261 = [null,null,null,null,null,null,null,null,null];(statearr_11261[0] = state_machine__6893__auto__);
(statearr_11261[1] = 1);
return statearr_11261;
});
var state_machine__6893__auto____1 = (function (state_11244){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11244);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11262){if((e11262 instanceof Object))
{var ex__6896__auto__ = e11262;var statearr_11263_11276 = state_11244;(statearr_11263_11276[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11244);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11277 = state_11244;
state_11244 = G__11277;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11244){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11264 = f__6963__auto__.call(null);(statearr_11264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11265);
return statearr_11264;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11429){var state_val_11430 = (state_11429[1]);if((state_val_11430 === 1))
{var state_11429__$1 = state_11429;var statearr_11431_11468 = state_11429__$1;(statearr_11431_11468[2] = null);
(statearr_11431_11468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 2))
{var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11429__$1,4,in$);
} else
{if((state_val_11430 === 3))
{var inst_11427 = (state_11429[2]);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11429__$1,inst_11427);
} else
{if((state_val_11430 === 4))
{var inst_11375 = (state_11429[7]);var inst_11375__$1 = (state_11429[2]);var inst_11376 = (inst_11375__$1 == null);var state_11429__$1 = (function (){var statearr_11432 = state_11429;(statearr_11432[7] = inst_11375__$1);
return statearr_11432;
})();if(cljs.core.truth_(inst_11376))
{var statearr_11433_11469 = state_11429__$1;(statearr_11433_11469[1] = 5);
} else
{var statearr_11434_11470 = state_11429__$1;(statearr_11434_11470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 5))
{var inst_11378 = cljs.core.async.close_BANG_.call(null,out);var state_11429__$1 = state_11429;var statearr_11435_11471 = state_11429__$1;(statearr_11435_11471[2] = inst_11378);
(statearr_11435_11471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 6))
{var inst_11375 = (state_11429[7]);var inst_11380 = f.call(null,inst_11375);var inst_11385 = cljs.core.seq.call(null,inst_11380);var inst_11386 = inst_11385;var inst_11387 = null;var inst_11388 = 0;var inst_11389 = 0;var state_11429__$1 = (function (){var statearr_11436 = state_11429;(statearr_11436[8] = inst_11389);
(statearr_11436[9] = inst_11388);
(statearr_11436[10] = inst_11387);
(statearr_11436[11] = inst_11386);
return statearr_11436;
})();var statearr_11437_11472 = state_11429__$1;(statearr_11437_11472[2] = null);
(statearr_11437_11472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 7))
{var inst_11425 = (state_11429[2]);var state_11429__$1 = state_11429;var statearr_11438_11473 = state_11429__$1;(statearr_11438_11473[2] = inst_11425);
(statearr_11438_11473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 8))
{var inst_11389 = (state_11429[8]);var inst_11388 = (state_11429[9]);var inst_11391 = (inst_11389 < inst_11388);var inst_11392 = inst_11391;var state_11429__$1 = state_11429;if(cljs.core.truth_(inst_11392))
{var statearr_11439_11474 = state_11429__$1;(statearr_11439_11474[1] = 10);
} else
{var statearr_11440_11475 = state_11429__$1;(statearr_11440_11475[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 9))
{var inst_11422 = (state_11429[2]);var state_11429__$1 = (function (){var statearr_11441 = state_11429;(statearr_11441[12] = inst_11422);
return statearr_11441;
})();var statearr_11442_11476 = state_11429__$1;(statearr_11442_11476[2] = null);
(statearr_11442_11476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 10))
{var inst_11389 = (state_11429[8]);var inst_11387 = (state_11429[10]);var inst_11394 = cljs.core._nth.call(null,inst_11387,inst_11389);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11429__$1,13,out,inst_11394);
} else
{if((state_val_11430 === 11))
{var inst_11386 = (state_11429[11]);var inst_11400 = (state_11429[13]);var inst_11400__$1 = cljs.core.seq.call(null,inst_11386);var state_11429__$1 = (function (){var statearr_11446 = state_11429;(statearr_11446[13] = inst_11400__$1);
return statearr_11446;
})();if(inst_11400__$1)
{var statearr_11447_11477 = state_11429__$1;(statearr_11447_11477[1] = 14);
} else
{var statearr_11448_11478 = state_11429__$1;(statearr_11448_11478[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 12))
{var inst_11420 = (state_11429[2]);var state_11429__$1 = state_11429;var statearr_11449_11479 = state_11429__$1;(statearr_11449_11479[2] = inst_11420);
(statearr_11449_11479[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 13))
{var inst_11389 = (state_11429[8]);var inst_11388 = (state_11429[9]);var inst_11387 = (state_11429[10]);var inst_11386 = (state_11429[11]);var inst_11396 = (state_11429[2]);var inst_11397 = (inst_11389 + 1);var tmp11443 = inst_11388;var tmp11444 = inst_11387;var tmp11445 = inst_11386;var inst_11386__$1 = tmp11445;var inst_11387__$1 = tmp11444;var inst_11388__$1 = tmp11443;var inst_11389__$1 = inst_11397;var state_11429__$1 = (function (){var statearr_11450 = state_11429;(statearr_11450[8] = inst_11389__$1);
(statearr_11450[9] = inst_11388__$1);
(statearr_11450[10] = inst_11387__$1);
(statearr_11450[11] = inst_11386__$1);
(statearr_11450[14] = inst_11396);
return statearr_11450;
})();var statearr_11451_11480 = state_11429__$1;(statearr_11451_11480[2] = null);
(statearr_11451_11480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 14))
{var inst_11400 = (state_11429[13]);var inst_11402 = cljs.core.chunked_seq_QMARK_.call(null,inst_11400);var state_11429__$1 = state_11429;if(inst_11402)
{var statearr_11452_11481 = state_11429__$1;(statearr_11452_11481[1] = 17);
} else
{var statearr_11453_11482 = state_11429__$1;(statearr_11453_11482[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 15))
{var state_11429__$1 = state_11429;var statearr_11454_11483 = state_11429__$1;(statearr_11454_11483[2] = null);
(statearr_11454_11483[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 16))
{var inst_11418 = (state_11429[2]);var state_11429__$1 = state_11429;var statearr_11455_11484 = state_11429__$1;(statearr_11455_11484[2] = inst_11418);
(statearr_11455_11484[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 17))
{var inst_11400 = (state_11429[13]);var inst_11404 = cljs.core.chunk_first.call(null,inst_11400);var inst_11405 = cljs.core.chunk_rest.call(null,inst_11400);var inst_11406 = cljs.core.count.call(null,inst_11404);var inst_11386 = inst_11405;var inst_11387 = inst_11404;var inst_11388 = inst_11406;var inst_11389 = 0;var state_11429__$1 = (function (){var statearr_11456 = state_11429;(statearr_11456[8] = inst_11389);
(statearr_11456[9] = inst_11388);
(statearr_11456[10] = inst_11387);
(statearr_11456[11] = inst_11386);
return statearr_11456;
})();var statearr_11457_11485 = state_11429__$1;(statearr_11457_11485[2] = null);
(statearr_11457_11485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 18))
{var inst_11400 = (state_11429[13]);var inst_11409 = cljs.core.first.call(null,inst_11400);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11429__$1,20,out,inst_11409);
} else
{if((state_val_11430 === 19))
{var inst_11415 = (state_11429[2]);var state_11429__$1 = state_11429;var statearr_11458_11486 = state_11429__$1;(statearr_11458_11486[2] = inst_11415);
(statearr_11458_11486[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11430 === 20))
{var inst_11400 = (state_11429[13]);var inst_11411 = (state_11429[2]);var inst_11412 = cljs.core.next.call(null,inst_11400);var inst_11386 = inst_11412;var inst_11387 = null;var inst_11388 = 0;var inst_11389 = 0;var state_11429__$1 = (function (){var statearr_11459 = state_11429;(statearr_11459[8] = inst_11389);
(statearr_11459[9] = inst_11388);
(statearr_11459[10] = inst_11387);
(statearr_11459[11] = inst_11386);
(statearr_11459[15] = inst_11411);
return statearr_11459;
})();var statearr_11460_11487 = state_11429__$1;(statearr_11460_11487[2] = null);
(statearr_11460_11487[1] = 8);
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
var state_machine__6893__auto____0 = (function (){var statearr_11464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11464[0] = state_machine__6893__auto__);
(statearr_11464[1] = 1);
return statearr_11464;
});
var state_machine__6893__auto____1 = (function (state_11429){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11429);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11465){if((e11465 instanceof Object))
{var ex__6896__auto__ = e11465;var statearr_11466_11488 = state_11429;(statearr_11466_11488[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11489 = state_11429;
state_11429 = G__11489;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11467 = f__6963__auto__.call(null);(statearr_11467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11467;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6962__auto___11570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11549){var state_val_11550 = (state_11549[1]);if((state_val_11550 === 1))
{var state_11549__$1 = state_11549;var statearr_11551_11571 = state_11549__$1;(statearr_11551_11571[2] = null);
(statearr_11551_11571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 2))
{var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11549__$1,4,from);
} else
{if((state_val_11550 === 3))
{var inst_11547 = (state_11549[2]);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11549__$1,inst_11547);
} else
{if((state_val_11550 === 4))
{var inst_11532 = (state_11549[7]);var inst_11532__$1 = (state_11549[2]);var inst_11533 = (inst_11532__$1 == null);var state_11549__$1 = (function (){var statearr_11552 = state_11549;(statearr_11552[7] = inst_11532__$1);
return statearr_11552;
})();if(cljs.core.truth_(inst_11533))
{var statearr_11553_11572 = state_11549__$1;(statearr_11553_11572[1] = 5);
} else
{var statearr_11554_11573 = state_11549__$1;(statearr_11554_11573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 5))
{var state_11549__$1 = state_11549;if(cljs.core.truth_(close_QMARK_))
{var statearr_11555_11574 = state_11549__$1;(statearr_11555_11574[1] = 8);
} else
{var statearr_11556_11575 = state_11549__$1;(statearr_11556_11575[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 6))
{var inst_11532 = (state_11549[7]);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11549__$1,11,to,inst_11532);
} else
{if((state_val_11550 === 7))
{var inst_11545 = (state_11549[2]);var state_11549__$1 = state_11549;var statearr_11557_11576 = state_11549__$1;(statearr_11557_11576[2] = inst_11545);
(statearr_11557_11576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 8))
{var inst_11536 = cljs.core.async.close_BANG_.call(null,to);var state_11549__$1 = state_11549;var statearr_11558_11577 = state_11549__$1;(statearr_11558_11577[2] = inst_11536);
(statearr_11558_11577[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 9))
{var state_11549__$1 = state_11549;var statearr_11559_11578 = state_11549__$1;(statearr_11559_11578[2] = null);
(statearr_11559_11578[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 10))
{var inst_11539 = (state_11549[2]);var state_11549__$1 = state_11549;var statearr_11560_11579 = state_11549__$1;(statearr_11560_11579[2] = inst_11539);
(statearr_11560_11579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 11))
{var inst_11542 = (state_11549[2]);var state_11549__$1 = (function (){var statearr_11561 = state_11549;(statearr_11561[8] = inst_11542);
return statearr_11561;
})();var statearr_11562_11580 = state_11549__$1;(statearr_11562_11580[2] = null);
(statearr_11562_11580[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_11566 = [null,null,null,null,null,null,null,null,null];(statearr_11566[0] = state_machine__6893__auto__);
(statearr_11566[1] = 1);
return statearr_11566;
});
var state_machine__6893__auto____1 = (function (state_11549){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11567){if((e11567 instanceof Object))
{var ex__6896__auto__ = e11567;var statearr_11568_11581 = state_11549;(statearr_11568_11581[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11582 = state_11549;
state_11549 = G__11582;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11549){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11569 = f__6963__auto__.call(null);(statearr_11569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11570);
return statearr_11569;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6962__auto___11669 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11647){var state_val_11648 = (state_11647[1]);if((state_val_11648 === 1))
{var state_11647__$1 = state_11647;var statearr_11649_11670 = state_11647__$1;(statearr_11649_11670[2] = null);
(statearr_11649_11670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 2))
{var state_11647__$1 = state_11647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11647__$1,4,ch);
} else
{if((state_val_11648 === 3))
{var inst_11645 = (state_11647[2]);var state_11647__$1 = state_11647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11647__$1,inst_11645);
} else
{if((state_val_11648 === 4))
{var inst_11628 = (state_11647[7]);var inst_11628__$1 = (state_11647[2]);var inst_11629 = (inst_11628__$1 == null);var state_11647__$1 = (function (){var statearr_11650 = state_11647;(statearr_11650[7] = inst_11628__$1);
return statearr_11650;
})();if(cljs.core.truth_(inst_11629))
{var statearr_11651_11671 = state_11647__$1;(statearr_11651_11671[1] = 5);
} else
{var statearr_11652_11672 = state_11647__$1;(statearr_11652_11672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 5))
{var inst_11631 = cljs.core.async.close_BANG_.call(null,tc);var inst_11632 = cljs.core.async.close_BANG_.call(null,fc);var state_11647__$1 = (function (){var statearr_11653 = state_11647;(statearr_11653[8] = inst_11631);
return statearr_11653;
})();var statearr_11654_11673 = state_11647__$1;(statearr_11654_11673[2] = inst_11632);
(statearr_11654_11673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 6))
{var inst_11628 = (state_11647[7]);var inst_11634 = p.call(null,inst_11628);var state_11647__$1 = state_11647;if(cljs.core.truth_(inst_11634))
{var statearr_11655_11674 = state_11647__$1;(statearr_11655_11674[1] = 9);
} else
{var statearr_11656_11675 = state_11647__$1;(statearr_11656_11675[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 7))
{var inst_11643 = (state_11647[2]);var state_11647__$1 = state_11647;var statearr_11657_11676 = state_11647__$1;(statearr_11657_11676[2] = inst_11643);
(statearr_11657_11676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 8))
{var inst_11640 = (state_11647[2]);var state_11647__$1 = (function (){var statearr_11658 = state_11647;(statearr_11658[9] = inst_11640);
return statearr_11658;
})();var statearr_11659_11677 = state_11647__$1;(statearr_11659_11677[2] = null);
(statearr_11659_11677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 9))
{var state_11647__$1 = state_11647;var statearr_11660_11678 = state_11647__$1;(statearr_11660_11678[2] = tc);
(statearr_11660_11678[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 10))
{var state_11647__$1 = state_11647;var statearr_11661_11679 = state_11647__$1;(statearr_11661_11679[2] = fc);
(statearr_11661_11679[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11648 === 11))
{var inst_11628 = (state_11647[7]);var inst_11638 = (state_11647[2]);var state_11647__$1 = state_11647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11647__$1,8,inst_11638,inst_11628);
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
var state_machine__6893__auto____0 = (function (){var statearr_11665 = [null,null,null,null,null,null,null,null,null,null];(statearr_11665[0] = state_machine__6893__auto__);
(statearr_11665[1] = 1);
return statearr_11665;
});
var state_machine__6893__auto____1 = (function (state_11647){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11647);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11666){if((e11666 instanceof Object))
{var ex__6896__auto__ = e11666;var statearr_11667_11680 = state_11647;(statearr_11667_11680[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11681 = state_11647;
state_11647 = G__11681;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11647){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11668 = f__6963__auto__.call(null);(statearr_11668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___11669);
return statearr_11668;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11728){var state_val_11729 = (state_11728[1]);if((state_val_11729 === 7))
{var inst_11724 = (state_11728[2]);var state_11728__$1 = state_11728;var statearr_11730_11746 = state_11728__$1;(statearr_11730_11746[2] = inst_11724);
(statearr_11730_11746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11729 === 6))
{var inst_11714 = (state_11728[7]);var inst_11717 = (state_11728[8]);var inst_11721 = f.call(null,inst_11714,inst_11717);var inst_11714__$1 = inst_11721;var state_11728__$1 = (function (){var statearr_11731 = state_11728;(statearr_11731[7] = inst_11714__$1);
return statearr_11731;
})();var statearr_11732_11747 = state_11728__$1;(statearr_11732_11747[2] = null);
(statearr_11732_11747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11729 === 5))
{var inst_11714 = (state_11728[7]);var state_11728__$1 = state_11728;var statearr_11733_11748 = state_11728__$1;(statearr_11733_11748[2] = inst_11714);
(statearr_11733_11748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11729 === 4))
{var inst_11717 = (state_11728[8]);var inst_11717__$1 = (state_11728[2]);var inst_11718 = (inst_11717__$1 == null);var state_11728__$1 = (function (){var statearr_11734 = state_11728;(statearr_11734[8] = inst_11717__$1);
return statearr_11734;
})();if(cljs.core.truth_(inst_11718))
{var statearr_11735_11749 = state_11728__$1;(statearr_11735_11749[1] = 5);
} else
{var statearr_11736_11750 = state_11728__$1;(statearr_11736_11750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11729 === 3))
{var inst_11726 = (state_11728[2]);var state_11728__$1 = state_11728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11728__$1,inst_11726);
} else
{if((state_val_11729 === 2))
{var state_11728__$1 = state_11728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11728__$1,4,ch);
} else
{if((state_val_11729 === 1))
{var inst_11714 = init;var state_11728__$1 = (function (){var statearr_11737 = state_11728;(statearr_11737[7] = inst_11714);
return statearr_11737;
})();var statearr_11738_11751 = state_11728__$1;(statearr_11738_11751[2] = null);
(statearr_11738_11751[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_11742 = [null,null,null,null,null,null,null,null,null];(statearr_11742[0] = state_machine__6893__auto__);
(statearr_11742[1] = 1);
return statearr_11742;
});
var state_machine__6893__auto____1 = (function (state_11728){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11743){if((e11743 instanceof Object))
{var ex__6896__auto__ = e11743;var statearr_11744_11752 = state_11728;(statearr_11744_11752[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11753 = state_11728;
state_11728 = G__11753;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11728){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11745 = f__6963__auto__.call(null);(statearr_11745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11745;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6962__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_11815){var state_val_11816 = (state_11815[1]);if((state_val_11816 === 1))
{var inst_11795 = cljs.core.seq.call(null,coll);var inst_11796 = inst_11795;var state_11815__$1 = (function (){var statearr_11817 = state_11815;(statearr_11817[7] = inst_11796);
return statearr_11817;
})();var statearr_11818_11836 = state_11815__$1;(statearr_11818_11836[2] = null);
(statearr_11818_11836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 2))
{var inst_11796 = (state_11815[7]);var state_11815__$1 = state_11815;if(cljs.core.truth_(inst_11796))
{var statearr_11819_11837 = state_11815__$1;(statearr_11819_11837[1] = 4);
} else
{var statearr_11820_11838 = state_11815__$1;(statearr_11820_11838[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 3))
{var inst_11813 = (state_11815[2]);var state_11815__$1 = state_11815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11815__$1,inst_11813);
} else
{if((state_val_11816 === 4))
{var inst_11796 = (state_11815[7]);var inst_11799 = cljs.core.first.call(null,inst_11796);var state_11815__$1 = state_11815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11815__$1,7,ch,inst_11799);
} else
{if((state_val_11816 === 5))
{var state_11815__$1 = state_11815;if(cljs.core.truth_(close_QMARK_))
{var statearr_11821_11839 = state_11815__$1;(statearr_11821_11839[1] = 8);
} else
{var statearr_11822_11840 = state_11815__$1;(statearr_11822_11840[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 6))
{var inst_11811 = (state_11815[2]);var state_11815__$1 = state_11815;var statearr_11823_11841 = state_11815__$1;(statearr_11823_11841[2] = inst_11811);
(statearr_11823_11841[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 7))
{var inst_11796 = (state_11815[7]);var inst_11801 = (state_11815[2]);var inst_11802 = cljs.core.next.call(null,inst_11796);var inst_11796__$1 = inst_11802;var state_11815__$1 = (function (){var statearr_11824 = state_11815;(statearr_11824[8] = inst_11801);
(statearr_11824[7] = inst_11796__$1);
return statearr_11824;
})();var statearr_11825_11842 = state_11815__$1;(statearr_11825_11842[2] = null);
(statearr_11825_11842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 8))
{var inst_11806 = cljs.core.async.close_BANG_.call(null,ch);var state_11815__$1 = state_11815;var statearr_11826_11843 = state_11815__$1;(statearr_11826_11843[2] = inst_11806);
(statearr_11826_11843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 9))
{var state_11815__$1 = state_11815;var statearr_11827_11844 = state_11815__$1;(statearr_11827_11844[2] = null);
(statearr_11827_11844[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 10))
{var inst_11809 = (state_11815[2]);var state_11815__$1 = state_11815;var statearr_11828_11845 = state_11815__$1;(statearr_11828_11845[2] = inst_11809);
(statearr_11828_11845[1] = 6);
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
var state_machine__6893__auto____0 = (function (){var statearr_11832 = [null,null,null,null,null,null,null,null,null];(statearr_11832[0] = state_machine__6893__auto__);
(statearr_11832[1] = 1);
return statearr_11832;
});
var state_machine__6893__auto____1 = (function (state_11815){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_11815);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object))
{var ex__6896__auto__ = e11833;var statearr_11834_11846 = state_11815;(statearr_11834_11846[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11847 = state_11815;
state_11815 = G__11847;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_11815){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_11815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_11835 = f__6963__auto__.call(null);(statearr_11835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto__);
return statearr_11835;
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
cljs.core.async.Mux = (function (){var obj11849 = {};return obj11849;
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
cljs.core.async.Mult = (function (){var obj11851 = {};return obj11851;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12075 = (function (cs,ch,mult,meta12076){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12076 = meta12076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12075.cljs$lang$type = true;
cljs.core.async.t12075.cljs$lang$ctorStr = "cljs.core.async/t12075";
cljs.core.async.t12075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12075");
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12077){var self__ = this;
var _12077__$1 = this;return self__.meta12076;
});})(cs))
;
cljs.core.async.t12075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12077,meta12076__$1){var self__ = this;
var _12077__$1 = this;return (new cljs.core.async.t12075(self__.cs,self__.ch,self__.mult,meta12076__$1));
});})(cs))
;
cljs.core.async.__GT_t12075 = ((function (cs){
return (function __GT_t12075(cs__$1,ch__$1,mult__$1,meta12076){return (new cljs.core.async.t12075(cs__$1,ch__$1,mult__$1,meta12076));
});})(cs))
;
}
return (new cljs.core.async.t12075(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6962__auto___12298 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12212){var state_val_12213 = (state_12212[1]);if((state_val_12213 === 32))
{var inst_12156 = (state_12212[7]);var inst_12080 = (state_12212[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12212,31,Object,null,30);var inst_12163 = cljs.core.async.put_BANG_.call(null,inst_12156,inst_12080,done);var state_12212__$1 = state_12212;var statearr_12214_12299 = state_12212__$1;(statearr_12214_12299[2] = inst_12163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 1))
{var state_12212__$1 = state_12212;var statearr_12215_12300 = state_12212__$1;(statearr_12215_12300[2] = null);
(statearr_12215_12300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 33))
{var inst_12169 = (state_12212[9]);var inst_12171 = cljs.core.chunked_seq_QMARK_.call(null,inst_12169);var state_12212__$1 = state_12212;if(inst_12171)
{var statearr_12216_12301 = state_12212__$1;(statearr_12216_12301[1] = 36);
} else
{var statearr_12217_12302 = state_12212__$1;(statearr_12217_12302[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 2))
{var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12212__$1,4,ch);
} else
{if((state_val_12213 === 34))
{var state_12212__$1 = state_12212;var statearr_12218_12303 = state_12212__$1;(statearr_12218_12303[2] = null);
(statearr_12218_12303[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 3))
{var inst_12210 = (state_12212[2]);var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12212__$1,inst_12210);
} else
{if((state_val_12213 === 35))
{var inst_12194 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12219_12304 = state_12212__$1;(statearr_12219_12304[2] = inst_12194);
(statearr_12219_12304[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 4))
{var inst_12080 = (state_12212[8]);var inst_12080__$1 = (state_12212[2]);var inst_12081 = (inst_12080__$1 == null);var state_12212__$1 = (function (){var statearr_12220 = state_12212;(statearr_12220[8] = inst_12080__$1);
return statearr_12220;
})();if(cljs.core.truth_(inst_12081))
{var statearr_12221_12305 = state_12212__$1;(statearr_12221_12305[1] = 5);
} else
{var statearr_12222_12306 = state_12212__$1;(statearr_12222_12306[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 36))
{var inst_12169 = (state_12212[9]);var inst_12173 = cljs.core.chunk_first.call(null,inst_12169);var inst_12174 = cljs.core.chunk_rest.call(null,inst_12169);var inst_12175 = cljs.core.count.call(null,inst_12173);var inst_12148 = inst_12174;var inst_12149 = inst_12173;var inst_12150 = inst_12175;var inst_12151 = 0;var state_12212__$1 = (function (){var statearr_12223 = state_12212;(statearr_12223[10] = inst_12149);
(statearr_12223[11] = inst_12148);
(statearr_12223[12] = inst_12151);
(statearr_12223[13] = inst_12150);
return statearr_12223;
})();var statearr_12224_12307 = state_12212__$1;(statearr_12224_12307[2] = null);
(statearr_12224_12307[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 5))
{var inst_12087 = cljs.core.deref.call(null,cs);var inst_12088 = cljs.core.seq.call(null,inst_12087);var inst_12089 = inst_12088;var inst_12090 = null;var inst_12091 = 0;var inst_12092 = 0;var state_12212__$1 = (function (){var statearr_12225 = state_12212;(statearr_12225[14] = inst_12090);
(statearr_12225[15] = inst_12091);
(statearr_12225[16] = inst_12092);
(statearr_12225[17] = inst_12089);
return statearr_12225;
})();var statearr_12226_12308 = state_12212__$1;(statearr_12226_12308[2] = null);
(statearr_12226_12308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 37))
{var inst_12169 = (state_12212[9]);var inst_12178 = cljs.core.first.call(null,inst_12169);var state_12212__$1 = (function (){var statearr_12227 = state_12212;(statearr_12227[18] = inst_12178);
return statearr_12227;
})();var statearr_12228_12309 = state_12212__$1;(statearr_12228_12309[2] = null);
(statearr_12228_12309[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 6))
{var inst_12140 = (state_12212[19]);var inst_12139 = cljs.core.deref.call(null,cs);var inst_12140__$1 = cljs.core.keys.call(null,inst_12139);var inst_12141 = cljs.core.count.call(null,inst_12140__$1);var inst_12142 = cljs.core.reset_BANG_.call(null,dctr,inst_12141);var inst_12147 = cljs.core.seq.call(null,inst_12140__$1);var inst_12148 = inst_12147;var inst_12149 = null;var inst_12150 = 0;var inst_12151 = 0;var state_12212__$1 = (function (){var statearr_12229 = state_12212;(statearr_12229[20] = inst_12142);
(statearr_12229[10] = inst_12149);
(statearr_12229[19] = inst_12140__$1);
(statearr_12229[11] = inst_12148);
(statearr_12229[12] = inst_12151);
(statearr_12229[13] = inst_12150);
return statearr_12229;
})();var statearr_12230_12310 = state_12212__$1;(statearr_12230_12310[2] = null);
(statearr_12230_12310[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 38))
{var inst_12191 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12231_12311 = state_12212__$1;(statearr_12231_12311[2] = inst_12191);
(statearr_12231_12311[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 7))
{var inst_12208 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12232_12312 = state_12212__$1;(statearr_12232_12312[2] = inst_12208);
(statearr_12232_12312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 39))
{var inst_12169 = (state_12212[9]);var inst_12187 = (state_12212[2]);var inst_12188 = cljs.core.next.call(null,inst_12169);var inst_12148 = inst_12188;var inst_12149 = null;var inst_12150 = 0;var inst_12151 = 0;var state_12212__$1 = (function (){var statearr_12233 = state_12212;(statearr_12233[21] = inst_12187);
(statearr_12233[10] = inst_12149);
(statearr_12233[11] = inst_12148);
(statearr_12233[12] = inst_12151);
(statearr_12233[13] = inst_12150);
return statearr_12233;
})();var statearr_12234_12313 = state_12212__$1;(statearr_12234_12313[2] = null);
(statearr_12234_12313[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 8))
{var inst_12091 = (state_12212[15]);var inst_12092 = (state_12212[16]);var inst_12094 = (inst_12092 < inst_12091);var inst_12095 = inst_12094;var state_12212__$1 = state_12212;if(cljs.core.truth_(inst_12095))
{var statearr_12235_12314 = state_12212__$1;(statearr_12235_12314[1] = 10);
} else
{var statearr_12236_12315 = state_12212__$1;(statearr_12236_12315[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 40))
{var inst_12178 = (state_12212[18]);var inst_12179 = (state_12212[2]);var inst_12180 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12181 = cljs.core.async.untap_STAR_.call(null,m,inst_12178);var state_12212__$1 = (function (){var statearr_12237 = state_12212;(statearr_12237[22] = inst_12179);
(statearr_12237[23] = inst_12180);
return statearr_12237;
})();var statearr_12238_12316 = state_12212__$1;(statearr_12238_12316[2] = inst_12181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 9))
{var inst_12137 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12239_12317 = state_12212__$1;(statearr_12239_12317[2] = inst_12137);
(statearr_12239_12317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 41))
{var inst_12080 = (state_12212[8]);var inst_12178 = (state_12212[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12212,40,Object,null,39);var inst_12185 = cljs.core.async.put_BANG_.call(null,inst_12178,inst_12080,done);var state_12212__$1 = state_12212;var statearr_12240_12318 = state_12212__$1;(statearr_12240_12318[2] = inst_12185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 10))
{var inst_12090 = (state_12212[14]);var inst_12092 = (state_12212[16]);var inst_12098 = cljs.core._nth.call(null,inst_12090,inst_12092);var inst_12099 = cljs.core.nth.call(null,inst_12098,0,null);var inst_12100 = cljs.core.nth.call(null,inst_12098,1,null);var state_12212__$1 = (function (){var statearr_12241 = state_12212;(statearr_12241[24] = inst_12099);
return statearr_12241;
})();if(cljs.core.truth_(inst_12100))
{var statearr_12242_12319 = state_12212__$1;(statearr_12242_12319[1] = 13);
} else
{var statearr_12243_12320 = state_12212__$1;(statearr_12243_12320[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 42))
{var state_12212__$1 = state_12212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12212__$1,45,dchan);
} else
{if((state_val_12213 === 11))
{var inst_12089 = (state_12212[17]);var inst_12109 = (state_12212[25]);var inst_12109__$1 = cljs.core.seq.call(null,inst_12089);var state_12212__$1 = (function (){var statearr_12244 = state_12212;(statearr_12244[25] = inst_12109__$1);
return statearr_12244;
})();if(inst_12109__$1)
{var statearr_12245_12321 = state_12212__$1;(statearr_12245_12321[1] = 16);
} else
{var statearr_12246_12322 = state_12212__$1;(statearr_12246_12322[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 43))
{var state_12212__$1 = state_12212;var statearr_12247_12323 = state_12212__$1;(statearr_12247_12323[2] = null);
(statearr_12247_12323[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 12))
{var inst_12135 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12248_12324 = state_12212__$1;(statearr_12248_12324[2] = inst_12135);
(statearr_12248_12324[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 44))
{var inst_12205 = (state_12212[2]);var state_12212__$1 = (function (){var statearr_12249 = state_12212;(statearr_12249[26] = inst_12205);
return statearr_12249;
})();var statearr_12250_12325 = state_12212__$1;(statearr_12250_12325[2] = null);
(statearr_12250_12325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 13))
{var inst_12099 = (state_12212[24]);var inst_12102 = cljs.core.async.close_BANG_.call(null,inst_12099);var state_12212__$1 = state_12212;var statearr_12251_12326 = state_12212__$1;(statearr_12251_12326[2] = inst_12102);
(statearr_12251_12326[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 45))
{var inst_12202 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12255_12327 = state_12212__$1;(statearr_12255_12327[2] = inst_12202);
(statearr_12255_12327[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 14))
{var state_12212__$1 = state_12212;var statearr_12256_12328 = state_12212__$1;(statearr_12256_12328[2] = null);
(statearr_12256_12328[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 15))
{var inst_12090 = (state_12212[14]);var inst_12091 = (state_12212[15]);var inst_12092 = (state_12212[16]);var inst_12089 = (state_12212[17]);var inst_12105 = (state_12212[2]);var inst_12106 = (inst_12092 + 1);var tmp12252 = inst_12090;var tmp12253 = inst_12091;var tmp12254 = inst_12089;var inst_12089__$1 = tmp12254;var inst_12090__$1 = tmp12252;var inst_12091__$1 = tmp12253;var inst_12092__$1 = inst_12106;var state_12212__$1 = (function (){var statearr_12257 = state_12212;(statearr_12257[14] = inst_12090__$1);
(statearr_12257[15] = inst_12091__$1);
(statearr_12257[16] = inst_12092__$1);
(statearr_12257[27] = inst_12105);
(statearr_12257[17] = inst_12089__$1);
return statearr_12257;
})();var statearr_12258_12329 = state_12212__$1;(statearr_12258_12329[2] = null);
(statearr_12258_12329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 16))
{var inst_12109 = (state_12212[25]);var inst_12111 = cljs.core.chunked_seq_QMARK_.call(null,inst_12109);var state_12212__$1 = state_12212;if(inst_12111)
{var statearr_12259_12330 = state_12212__$1;(statearr_12259_12330[1] = 19);
} else
{var statearr_12260_12331 = state_12212__$1;(statearr_12260_12331[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 17))
{var state_12212__$1 = state_12212;var statearr_12261_12332 = state_12212__$1;(statearr_12261_12332[2] = null);
(statearr_12261_12332[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 18))
{var inst_12133 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12262_12333 = state_12212__$1;(statearr_12262_12333[2] = inst_12133);
(statearr_12262_12333[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 19))
{var inst_12109 = (state_12212[25]);var inst_12113 = cljs.core.chunk_first.call(null,inst_12109);var inst_12114 = cljs.core.chunk_rest.call(null,inst_12109);var inst_12115 = cljs.core.count.call(null,inst_12113);var inst_12089 = inst_12114;var inst_12090 = inst_12113;var inst_12091 = inst_12115;var inst_12092 = 0;var state_12212__$1 = (function (){var statearr_12263 = state_12212;(statearr_12263[14] = inst_12090);
(statearr_12263[15] = inst_12091);
(statearr_12263[16] = inst_12092);
(statearr_12263[17] = inst_12089);
return statearr_12263;
})();var statearr_12264_12334 = state_12212__$1;(statearr_12264_12334[2] = null);
(statearr_12264_12334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 20))
{var inst_12109 = (state_12212[25]);var inst_12119 = cljs.core.first.call(null,inst_12109);var inst_12120 = cljs.core.nth.call(null,inst_12119,0,null);var inst_12121 = cljs.core.nth.call(null,inst_12119,1,null);var state_12212__$1 = (function (){var statearr_12265 = state_12212;(statearr_12265[28] = inst_12120);
return statearr_12265;
})();if(cljs.core.truth_(inst_12121))
{var statearr_12266_12335 = state_12212__$1;(statearr_12266_12335[1] = 22);
} else
{var statearr_12267_12336 = state_12212__$1;(statearr_12267_12336[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 21))
{var inst_12130 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12268_12337 = state_12212__$1;(statearr_12268_12337[2] = inst_12130);
(statearr_12268_12337[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 22))
{var inst_12120 = (state_12212[28]);var inst_12123 = cljs.core.async.close_BANG_.call(null,inst_12120);var state_12212__$1 = state_12212;var statearr_12269_12338 = state_12212__$1;(statearr_12269_12338[2] = inst_12123);
(statearr_12269_12338[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 23))
{var state_12212__$1 = state_12212;var statearr_12270_12339 = state_12212__$1;(statearr_12270_12339[2] = null);
(statearr_12270_12339[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 24))
{var inst_12109 = (state_12212[25]);var inst_12126 = (state_12212[2]);var inst_12127 = cljs.core.next.call(null,inst_12109);var inst_12089 = inst_12127;var inst_12090 = null;var inst_12091 = 0;var inst_12092 = 0;var state_12212__$1 = (function (){var statearr_12271 = state_12212;(statearr_12271[14] = inst_12090);
(statearr_12271[15] = inst_12091);
(statearr_12271[16] = inst_12092);
(statearr_12271[17] = inst_12089);
(statearr_12271[29] = inst_12126);
return statearr_12271;
})();var statearr_12272_12340 = state_12212__$1;(statearr_12272_12340[2] = null);
(statearr_12272_12340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 25))
{var inst_12151 = (state_12212[12]);var inst_12150 = (state_12212[13]);var inst_12153 = (inst_12151 < inst_12150);var inst_12154 = inst_12153;var state_12212__$1 = state_12212;if(cljs.core.truth_(inst_12154))
{var statearr_12273_12341 = state_12212__$1;(statearr_12273_12341[1] = 27);
} else
{var statearr_12274_12342 = state_12212__$1;(statearr_12274_12342[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 26))
{var inst_12140 = (state_12212[19]);var inst_12198 = (state_12212[2]);var inst_12199 = cljs.core.seq.call(null,inst_12140);var state_12212__$1 = (function (){var statearr_12275 = state_12212;(statearr_12275[30] = inst_12198);
return statearr_12275;
})();if(inst_12199)
{var statearr_12276_12343 = state_12212__$1;(statearr_12276_12343[1] = 42);
} else
{var statearr_12277_12344 = state_12212__$1;(statearr_12277_12344[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 27))
{var inst_12149 = (state_12212[10]);var inst_12151 = (state_12212[12]);var inst_12156 = cljs.core._nth.call(null,inst_12149,inst_12151);var state_12212__$1 = (function (){var statearr_12278 = state_12212;(statearr_12278[7] = inst_12156);
return statearr_12278;
})();var statearr_12279_12345 = state_12212__$1;(statearr_12279_12345[2] = null);
(statearr_12279_12345[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 28))
{var inst_12148 = (state_12212[11]);var inst_12169 = (state_12212[9]);var inst_12169__$1 = cljs.core.seq.call(null,inst_12148);var state_12212__$1 = (function (){var statearr_12283 = state_12212;(statearr_12283[9] = inst_12169__$1);
return statearr_12283;
})();if(inst_12169__$1)
{var statearr_12284_12346 = state_12212__$1;(statearr_12284_12346[1] = 33);
} else
{var statearr_12285_12347 = state_12212__$1;(statearr_12285_12347[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 29))
{var inst_12196 = (state_12212[2]);var state_12212__$1 = state_12212;var statearr_12286_12348 = state_12212__$1;(statearr_12286_12348[2] = inst_12196);
(statearr_12286_12348[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 30))
{var inst_12149 = (state_12212[10]);var inst_12148 = (state_12212[11]);var inst_12151 = (state_12212[12]);var inst_12150 = (state_12212[13]);var inst_12165 = (state_12212[2]);var inst_12166 = (inst_12151 + 1);var tmp12280 = inst_12149;var tmp12281 = inst_12148;var tmp12282 = inst_12150;var inst_12148__$1 = tmp12281;var inst_12149__$1 = tmp12280;var inst_12150__$1 = tmp12282;var inst_12151__$1 = inst_12166;var state_12212__$1 = (function (){var statearr_12287 = state_12212;(statearr_12287[10] = inst_12149__$1);
(statearr_12287[11] = inst_12148__$1);
(statearr_12287[12] = inst_12151__$1);
(statearr_12287[13] = inst_12150__$1);
(statearr_12287[31] = inst_12165);
return statearr_12287;
})();var statearr_12288_12349 = state_12212__$1;(statearr_12288_12349[2] = null);
(statearr_12288_12349[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12213 === 31))
{var inst_12156 = (state_12212[7]);var inst_12157 = (state_12212[2]);var inst_12158 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12159 = cljs.core.async.untap_STAR_.call(null,m,inst_12156);var state_12212__$1 = (function (){var statearr_12289 = state_12212;(statearr_12289[32] = inst_12158);
(statearr_12289[33] = inst_12157);
return statearr_12289;
})();var statearr_12290_12350 = state_12212__$1;(statearr_12290_12350[2] = inst_12159);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212__$1);
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
var state_machine__6893__auto____0 = (function (){var statearr_12294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12294[0] = state_machine__6893__auto__);
(statearr_12294[1] = 1);
return statearr_12294;
});
var state_machine__6893__auto____1 = (function (state_12212){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12295){if((e12295 instanceof Object))
{var ex__6896__auto__ = e12295;var statearr_12296_12351 = state_12212;(statearr_12296_12351[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12352 = state_12212;
state_12212 = G__12352;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12212){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12297 = f__6963__auto__.call(null);(statearr_12297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12298);
return statearr_12297;
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
cljs.core.async.Mix = (function (){var obj12354 = {};return obj12354;
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
;var m = (function (){if(typeof cljs.core.async.t12464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12464 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12465){
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
this.meta12465 = meta12465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12464.cljs$lang$type = true;
cljs.core.async.t12464.cljs$lang$ctorStr = "cljs.core.async/t12464";
cljs.core.async.t12464.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12464");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12466){var self__ = this;
var _12466__$1 = this;return self__.meta12465;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12466,meta12465__$1){var self__ = this;
var _12466__$1 = this;return (new cljs.core.async.t12464(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12465__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12464 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12464(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12465){return (new cljs.core.async.t12464(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12465));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12464(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6962__auto___12573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12531){var state_val_12532 = (state_12531[1]);if((state_val_12532 === 1))
{var inst_12470 = (state_12531[7]);var inst_12470__$1 = calc_state.call(null);var inst_12471 = cljs.core.seq_QMARK_.call(null,inst_12470__$1);var state_12531__$1 = (function (){var statearr_12533 = state_12531;(statearr_12533[7] = inst_12470__$1);
return statearr_12533;
})();if(inst_12471)
{var statearr_12534_12574 = state_12531__$1;(statearr_12534_12574[1] = 2);
} else
{var statearr_12535_12575 = state_12531__$1;(statearr_12535_12575[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 2))
{var inst_12470 = (state_12531[7]);var inst_12473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12470);var state_12531__$1 = state_12531;var statearr_12536_12576 = state_12531__$1;(statearr_12536_12576[2] = inst_12473);
(statearr_12536_12576[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 3))
{var inst_12470 = (state_12531[7]);var state_12531__$1 = state_12531;var statearr_12537_12577 = state_12531__$1;(statearr_12537_12577[2] = inst_12470);
(statearr_12537_12577[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 4))
{var inst_12470 = (state_12531[7]);var inst_12476 = (state_12531[2]);var inst_12477 = cljs.core.get.call(null,inst_12476,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12478 = cljs.core.get.call(null,inst_12476,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12479 = cljs.core.get.call(null,inst_12476,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12480 = inst_12470;var state_12531__$1 = (function (){var statearr_12538 = state_12531;(statearr_12538[8] = inst_12478);
(statearr_12538[9] = inst_12477);
(statearr_12538[10] = inst_12480);
(statearr_12538[11] = inst_12479);
return statearr_12538;
})();var statearr_12539_12578 = state_12531__$1;(statearr_12539_12578[2] = null);
(statearr_12539_12578[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 5))
{var inst_12480 = (state_12531[10]);var inst_12483 = cljs.core.seq_QMARK_.call(null,inst_12480);var state_12531__$1 = state_12531;if(inst_12483)
{var statearr_12540_12579 = state_12531__$1;(statearr_12540_12579[1] = 7);
} else
{var statearr_12541_12580 = state_12531__$1;(statearr_12541_12580[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 6))
{var inst_12529 = (state_12531[2]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12531__$1,inst_12529);
} else
{if((state_val_12532 === 7))
{var inst_12480 = (state_12531[10]);var inst_12485 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12480);var state_12531__$1 = state_12531;var statearr_12542_12581 = state_12531__$1;(statearr_12542_12581[2] = inst_12485);
(statearr_12542_12581[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 8))
{var inst_12480 = (state_12531[10]);var state_12531__$1 = state_12531;var statearr_12543_12582 = state_12531__$1;(statearr_12543_12582[2] = inst_12480);
(statearr_12543_12582[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 9))
{var inst_12488 = (state_12531[12]);var inst_12488__$1 = (state_12531[2]);var inst_12489 = cljs.core.get.call(null,inst_12488__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12490 = cljs.core.get.call(null,inst_12488__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12491 = cljs.core.get.call(null,inst_12488__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12531__$1 = (function (){var statearr_12544 = state_12531;(statearr_12544[13] = inst_12490);
(statearr_12544[12] = inst_12488__$1);
(statearr_12544[14] = inst_12491);
return statearr_12544;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12531__$1,10,inst_12489);
} else
{if((state_val_12532 === 10))
{var inst_12495 = (state_12531[15]);var inst_12496 = (state_12531[16]);var inst_12494 = (state_12531[2]);var inst_12495__$1 = cljs.core.nth.call(null,inst_12494,0,null);var inst_12496__$1 = cljs.core.nth.call(null,inst_12494,1,null);var inst_12497 = (inst_12495__$1 == null);var inst_12498 = cljs.core._EQ_.call(null,inst_12496__$1,change);var inst_12499 = (inst_12497) || (inst_12498);var state_12531__$1 = (function (){var statearr_12545 = state_12531;(statearr_12545[15] = inst_12495__$1);
(statearr_12545[16] = inst_12496__$1);
return statearr_12545;
})();if(cljs.core.truth_(inst_12499))
{var statearr_12546_12583 = state_12531__$1;(statearr_12546_12583[1] = 11);
} else
{var statearr_12547_12584 = state_12531__$1;(statearr_12547_12584[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 11))
{var inst_12495 = (state_12531[15]);var inst_12501 = (inst_12495 == null);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12501))
{var statearr_12548_12585 = state_12531__$1;(statearr_12548_12585[1] = 14);
} else
{var statearr_12549_12586 = state_12531__$1;(statearr_12549_12586[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 12))
{var inst_12510 = (state_12531[17]);var inst_12496 = (state_12531[16]);var inst_12491 = (state_12531[14]);var inst_12510__$1 = inst_12491.call(null,inst_12496);var state_12531__$1 = (function (){var statearr_12550 = state_12531;(statearr_12550[17] = inst_12510__$1);
return statearr_12550;
})();if(cljs.core.truth_(inst_12510__$1))
{var statearr_12551_12587 = state_12531__$1;(statearr_12551_12587[1] = 17);
} else
{var statearr_12552_12588 = state_12531__$1;(statearr_12552_12588[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 13))
{var inst_12527 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12553_12589 = state_12531__$1;(statearr_12553_12589[2] = inst_12527);
(statearr_12553_12589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 14))
{var inst_12496 = (state_12531[16]);var inst_12503 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12496);var state_12531__$1 = state_12531;var statearr_12554_12590 = state_12531__$1;(statearr_12554_12590[2] = inst_12503);
(statearr_12554_12590[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 15))
{var state_12531__$1 = state_12531;var statearr_12555_12591 = state_12531__$1;(statearr_12555_12591[2] = null);
(statearr_12555_12591[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 16))
{var inst_12506 = (state_12531[2]);var inst_12507 = calc_state.call(null);var inst_12480 = inst_12507;var state_12531__$1 = (function (){var statearr_12556 = state_12531;(statearr_12556[10] = inst_12480);
(statearr_12556[18] = inst_12506);
return statearr_12556;
})();var statearr_12557_12592 = state_12531__$1;(statearr_12557_12592[2] = null);
(statearr_12557_12592[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 17))
{var inst_12510 = (state_12531[17]);var state_12531__$1 = state_12531;var statearr_12558_12593 = state_12531__$1;(statearr_12558_12593[2] = inst_12510);
(statearr_12558_12593[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 18))
{var inst_12496 = (state_12531[16]);var inst_12490 = (state_12531[13]);var inst_12491 = (state_12531[14]);var inst_12513 = cljs.core.empty_QMARK_.call(null,inst_12491);var inst_12514 = inst_12490.call(null,inst_12496);var inst_12515 = cljs.core.not.call(null,inst_12514);var inst_12516 = (inst_12513) && (inst_12515);var state_12531__$1 = state_12531;var statearr_12559_12594 = state_12531__$1;(statearr_12559_12594[2] = inst_12516);
(statearr_12559_12594[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 19))
{var inst_12518 = (state_12531[2]);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12518))
{var statearr_12560_12595 = state_12531__$1;(statearr_12560_12595[1] = 20);
} else
{var statearr_12561_12596 = state_12531__$1;(statearr_12561_12596[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 20))
{var inst_12495 = (state_12531[15]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12531__$1,23,out,inst_12495);
} else
{if((state_val_12532 === 21))
{var state_12531__$1 = state_12531;var statearr_12562_12597 = state_12531__$1;(statearr_12562_12597[2] = null);
(statearr_12562_12597[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 22))
{var inst_12488 = (state_12531[12]);var inst_12524 = (state_12531[2]);var inst_12480 = inst_12488;var state_12531__$1 = (function (){var statearr_12563 = state_12531;(statearr_12563[19] = inst_12524);
(statearr_12563[10] = inst_12480);
return statearr_12563;
})();var statearr_12564_12598 = state_12531__$1;(statearr_12564_12598[2] = null);
(statearr_12564_12598[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 23))
{var inst_12521 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12565_12599 = state_12531__$1;(statearr_12565_12599[2] = inst_12521);
(statearr_12565_12599[1] = 22);
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
var state_machine__6893__auto____0 = (function (){var statearr_12569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12569[0] = state_machine__6893__auto__);
(statearr_12569[1] = 1);
return statearr_12569;
});
var state_machine__6893__auto____1 = (function (state_12531){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12570){if((e12570 instanceof Object))
{var ex__6896__auto__ = e12570;var statearr_12571_12600 = state_12531;(statearr_12571_12600[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12601 = state_12531;
state_12531 = G__12601;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12531){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12572 = f__6963__auto__.call(null);(statearr_12572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12573);
return statearr_12572;
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
cljs.core.async.Pub = (function (){var obj12603 = {};return obj12603;
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
return (function (p1__12604_SHARP_){if(cljs.core.truth_(p1__12604_SHARP_.call(null,topic)))
{return p1__12604_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12604_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12729 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12730){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12730 = meta12730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12729.cljs$lang$type = true;
cljs.core.async.t12729.cljs$lang$ctorStr = "cljs.core.async/t12729";
cljs.core.async.t12729.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12729");
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12729.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12731){var self__ = this;
var _12731__$1 = this;return self__.meta12730;
});})(mults,ensure_mult))
;
cljs.core.async.t12729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12731,meta12730__$1){var self__ = this;
var _12731__$1 = this;return (new cljs.core.async.t12729(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12730__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12729 = ((function (mults,ensure_mult){
return (function __GT_t12729(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12730){return (new cljs.core.async.t12729(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12730));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12729(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6962__auto___12853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12805){var state_val_12806 = (state_12805[1]);if((state_val_12806 === 1))
{var state_12805__$1 = state_12805;var statearr_12807_12854 = state_12805__$1;(statearr_12807_12854[2] = null);
(statearr_12807_12854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 2))
{var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,4,ch);
} else
{if((state_val_12806 === 3))
{var inst_12803 = (state_12805[2]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === 4))
{var inst_12734 = (state_12805[7]);var inst_12734__$1 = (state_12805[2]);var inst_12735 = (inst_12734__$1 == null);var state_12805__$1 = (function (){var statearr_12808 = state_12805;(statearr_12808[7] = inst_12734__$1);
return statearr_12808;
})();if(cljs.core.truth_(inst_12735))
{var statearr_12809_12855 = state_12805__$1;(statearr_12809_12855[1] = 5);
} else
{var statearr_12810_12856 = state_12805__$1;(statearr_12810_12856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 5))
{var inst_12741 = cljs.core.deref.call(null,mults);var inst_12742 = cljs.core.vals.call(null,inst_12741);var inst_12743 = cljs.core.seq.call(null,inst_12742);var inst_12744 = inst_12743;var inst_12745 = null;var inst_12746 = 0;var inst_12747 = 0;var state_12805__$1 = (function (){var statearr_12811 = state_12805;(statearr_12811[8] = inst_12744);
(statearr_12811[9] = inst_12745);
(statearr_12811[10] = inst_12746);
(statearr_12811[11] = inst_12747);
return statearr_12811;
})();var statearr_12812_12857 = state_12805__$1;(statearr_12812_12857[2] = null);
(statearr_12812_12857[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 6))
{var inst_12782 = (state_12805[12]);var inst_12784 = (state_12805[13]);var inst_12734 = (state_12805[7]);var inst_12782__$1 = topic_fn.call(null,inst_12734);var inst_12783 = cljs.core.deref.call(null,mults);var inst_12784__$1 = cljs.core.get.call(null,inst_12783,inst_12782__$1);var state_12805__$1 = (function (){var statearr_12813 = state_12805;(statearr_12813[12] = inst_12782__$1);
(statearr_12813[13] = inst_12784__$1);
return statearr_12813;
})();if(cljs.core.truth_(inst_12784__$1))
{var statearr_12814_12858 = state_12805__$1;(statearr_12814_12858[1] = 19);
} else
{var statearr_12815_12859 = state_12805__$1;(statearr_12815_12859[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 7))
{var inst_12801 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12816_12860 = state_12805__$1;(statearr_12816_12860[2] = inst_12801);
(statearr_12816_12860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 8))
{var inst_12746 = (state_12805[10]);var inst_12747 = (state_12805[11]);var inst_12749 = (inst_12747 < inst_12746);var inst_12750 = inst_12749;var state_12805__$1 = state_12805;if(cljs.core.truth_(inst_12750))
{var statearr_12820_12861 = state_12805__$1;(statearr_12820_12861[1] = 10);
} else
{var statearr_12821_12862 = state_12805__$1;(statearr_12821_12862[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 9))
{var inst_12780 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12822_12863 = state_12805__$1;(statearr_12822_12863[2] = inst_12780);
(statearr_12822_12863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 10))
{var inst_12744 = (state_12805[8]);var inst_12745 = (state_12805[9]);var inst_12746 = (state_12805[10]);var inst_12747 = (state_12805[11]);var inst_12752 = cljs.core._nth.call(null,inst_12745,inst_12747);var inst_12753 = cljs.core.async.muxch_STAR_.call(null,inst_12752);var inst_12754 = cljs.core.async.close_BANG_.call(null,inst_12753);var inst_12755 = (inst_12747 + 1);var tmp12817 = inst_12744;var tmp12818 = inst_12745;var tmp12819 = inst_12746;var inst_12744__$1 = tmp12817;var inst_12745__$1 = tmp12818;var inst_12746__$1 = tmp12819;var inst_12747__$1 = inst_12755;var state_12805__$1 = (function (){var statearr_12823 = state_12805;(statearr_12823[8] = inst_12744__$1);
(statearr_12823[9] = inst_12745__$1);
(statearr_12823[10] = inst_12746__$1);
(statearr_12823[11] = inst_12747__$1);
(statearr_12823[14] = inst_12754);
return statearr_12823;
})();var statearr_12824_12864 = state_12805__$1;(statearr_12824_12864[2] = null);
(statearr_12824_12864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 11))
{var inst_12758 = (state_12805[15]);var inst_12744 = (state_12805[8]);var inst_12758__$1 = cljs.core.seq.call(null,inst_12744);var state_12805__$1 = (function (){var statearr_12825 = state_12805;(statearr_12825[15] = inst_12758__$1);
return statearr_12825;
})();if(inst_12758__$1)
{var statearr_12826_12865 = state_12805__$1;(statearr_12826_12865[1] = 13);
} else
{var statearr_12827_12866 = state_12805__$1;(statearr_12827_12866[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 12))
{var inst_12778 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12828_12867 = state_12805__$1;(statearr_12828_12867[2] = inst_12778);
(statearr_12828_12867[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 13))
{var inst_12758 = (state_12805[15]);var inst_12760 = cljs.core.chunked_seq_QMARK_.call(null,inst_12758);var state_12805__$1 = state_12805;if(inst_12760)
{var statearr_12829_12868 = state_12805__$1;(statearr_12829_12868[1] = 16);
} else
{var statearr_12830_12869 = state_12805__$1;(statearr_12830_12869[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 14))
{var state_12805__$1 = state_12805;var statearr_12831_12870 = state_12805__$1;(statearr_12831_12870[2] = null);
(statearr_12831_12870[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 15))
{var inst_12776 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12832_12871 = state_12805__$1;(statearr_12832_12871[2] = inst_12776);
(statearr_12832_12871[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 16))
{var inst_12758 = (state_12805[15]);var inst_12762 = cljs.core.chunk_first.call(null,inst_12758);var inst_12763 = cljs.core.chunk_rest.call(null,inst_12758);var inst_12764 = cljs.core.count.call(null,inst_12762);var inst_12744 = inst_12763;var inst_12745 = inst_12762;var inst_12746 = inst_12764;var inst_12747 = 0;var state_12805__$1 = (function (){var statearr_12833 = state_12805;(statearr_12833[8] = inst_12744);
(statearr_12833[9] = inst_12745);
(statearr_12833[10] = inst_12746);
(statearr_12833[11] = inst_12747);
return statearr_12833;
})();var statearr_12834_12872 = state_12805__$1;(statearr_12834_12872[2] = null);
(statearr_12834_12872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 17))
{var inst_12758 = (state_12805[15]);var inst_12767 = cljs.core.first.call(null,inst_12758);var inst_12768 = cljs.core.async.muxch_STAR_.call(null,inst_12767);var inst_12769 = cljs.core.async.close_BANG_.call(null,inst_12768);var inst_12770 = cljs.core.next.call(null,inst_12758);var inst_12744 = inst_12770;var inst_12745 = null;var inst_12746 = 0;var inst_12747 = 0;var state_12805__$1 = (function (){var statearr_12835 = state_12805;(statearr_12835[8] = inst_12744);
(statearr_12835[9] = inst_12745);
(statearr_12835[10] = inst_12746);
(statearr_12835[16] = inst_12769);
(statearr_12835[11] = inst_12747);
return statearr_12835;
})();var statearr_12836_12873 = state_12805__$1;(statearr_12836_12873[2] = null);
(statearr_12836_12873[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 18))
{var inst_12773 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12837_12874 = state_12805__$1;(statearr_12837_12874[2] = inst_12773);
(statearr_12837_12874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 19))
{var state_12805__$1 = state_12805;var statearr_12838_12875 = state_12805__$1;(statearr_12838_12875[2] = null);
(statearr_12838_12875[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 20))
{var state_12805__$1 = state_12805;var statearr_12839_12876 = state_12805__$1;(statearr_12839_12876[2] = null);
(statearr_12839_12876[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 21))
{var inst_12798 = (state_12805[2]);var state_12805__$1 = (function (){var statearr_12840 = state_12805;(statearr_12840[17] = inst_12798);
return statearr_12840;
})();var statearr_12841_12877 = state_12805__$1;(statearr_12841_12877[2] = null);
(statearr_12841_12877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 22))
{var inst_12795 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12842_12878 = state_12805__$1;(statearr_12842_12878[2] = inst_12795);
(statearr_12842_12878[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 23))
{var inst_12782 = (state_12805[12]);var inst_12786 = (state_12805[2]);var inst_12787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12782);var state_12805__$1 = (function (){var statearr_12843 = state_12805;(statearr_12843[18] = inst_12786);
return statearr_12843;
})();var statearr_12844_12879 = state_12805__$1;(statearr_12844_12879[2] = inst_12787);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 24))
{var inst_12784 = (state_12805[13]);var inst_12734 = (state_12805[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12805,23,Object,null,22);var inst_12791 = cljs.core.async.muxch_STAR_.call(null,inst_12784);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,25,inst_12791,inst_12734);
} else
{if((state_val_12806 === 25))
{var inst_12793 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12845_12880 = state_12805__$1;(statearr_12845_12880[2] = inst_12793);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805__$1);
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
var state_machine__6893__auto____0 = (function (){var statearr_12849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12849[0] = state_machine__6893__auto__);
(statearr_12849[1] = 1);
return statearr_12849;
});
var state_machine__6893__auto____1 = (function (state_12805){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e12850){if((e12850 instanceof Object))
{var ex__6896__auto__ = e12850;var statearr_12851_12881 = state_12805;(statearr_12851_12881[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12882 = state_12805;
state_12805 = G__12882;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_12852 = f__6963__auto__.call(null);(statearr_12852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___12853);
return statearr_12852;
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
,cljs.core.range.call(null,cnt));var c__6962__auto___13019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_12989){var state_val_12990 = (state_12989[1]);if((state_val_12990 === 1))
{var state_12989__$1 = state_12989;var statearr_12991_13020 = state_12989__$1;(statearr_12991_13020[2] = null);
(statearr_12991_13020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 2))
{var inst_12952 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12953 = 0;var state_12989__$1 = (function (){var statearr_12992 = state_12989;(statearr_12992[7] = inst_12952);
(statearr_12992[8] = inst_12953);
return statearr_12992;
})();var statearr_12993_13021 = state_12989__$1;(statearr_12993_13021[2] = null);
(statearr_12993_13021[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 3))
{var inst_12987 = (state_12989[2]);var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12989__$1,inst_12987);
} else
{if((state_val_12990 === 4))
{var inst_12953 = (state_12989[8]);var inst_12955 = (inst_12953 < cnt);var state_12989__$1 = state_12989;if(cljs.core.truth_(inst_12955))
{var statearr_12994_13022 = state_12989__$1;(statearr_12994_13022[1] = 6);
} else
{var statearr_12995_13023 = state_12989__$1;(statearr_12995_13023[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 5))
{var inst_12973 = (state_12989[2]);var state_12989__$1 = (function (){var statearr_12996 = state_12989;(statearr_12996[9] = inst_12973);
return statearr_12996;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12989__$1,12,dchan);
} else
{if((state_val_12990 === 6))
{var state_12989__$1 = state_12989;var statearr_12997_13024 = state_12989__$1;(statearr_12997_13024[2] = null);
(statearr_12997_13024[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 7))
{var state_12989__$1 = state_12989;var statearr_12998_13025 = state_12989__$1;(statearr_12998_13025[2] = null);
(statearr_12998_13025[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 8))
{var inst_12971 = (state_12989[2]);var state_12989__$1 = state_12989;var statearr_12999_13026 = state_12989__$1;(statearr_12999_13026[2] = inst_12971);
(statearr_12999_13026[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 9))
{var inst_12953 = (state_12989[8]);var inst_12966 = (state_12989[2]);var inst_12967 = (inst_12953 + 1);var inst_12953__$1 = inst_12967;var state_12989__$1 = (function (){var statearr_13000 = state_12989;(statearr_13000[10] = inst_12966);
(statearr_13000[8] = inst_12953__$1);
return statearr_13000;
})();var statearr_13001_13027 = state_12989__$1;(statearr_13001_13027[2] = null);
(statearr_13001_13027[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 10))
{var inst_12957 = (state_12989[2]);var inst_12958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12989__$1 = (function (){var statearr_13002 = state_12989;(statearr_13002[11] = inst_12957);
return statearr_13002;
})();var statearr_13003_13028 = state_12989__$1;(statearr_13003_13028[2] = inst_12958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12989__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 11))
{var inst_12953 = (state_12989[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12989,10,Object,null,9);var inst_12962 = chs__$1.call(null,inst_12953);var inst_12963 = done.call(null,inst_12953);var inst_12964 = cljs.core.async.take_BANG_.call(null,inst_12962,inst_12963);var state_12989__$1 = state_12989;var statearr_13004_13029 = state_12989__$1;(statearr_13004_13029[2] = inst_12964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12989__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 12))
{var inst_12975 = (state_12989[12]);var inst_12975__$1 = (state_12989[2]);var inst_12976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12975__$1);var state_12989__$1 = (function (){var statearr_13005 = state_12989;(statearr_13005[12] = inst_12975__$1);
return statearr_13005;
})();if(cljs.core.truth_(inst_12976))
{var statearr_13006_13030 = state_12989__$1;(statearr_13006_13030[1] = 13);
} else
{var statearr_13007_13031 = state_12989__$1;(statearr_13007_13031[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 13))
{var inst_12978 = cljs.core.async.close_BANG_.call(null,out);var state_12989__$1 = state_12989;var statearr_13008_13032 = state_12989__$1;(statearr_13008_13032[2] = inst_12978);
(statearr_13008_13032[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 14))
{var inst_12975 = (state_12989[12]);var inst_12980 = cljs.core.apply.call(null,f,inst_12975);var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12989__$1,16,out,inst_12980);
} else
{if((state_val_12990 === 15))
{var inst_12985 = (state_12989[2]);var state_12989__$1 = state_12989;var statearr_13009_13033 = state_12989__$1;(statearr_13009_13033[2] = inst_12985);
(statearr_13009_13033[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 16))
{var inst_12982 = (state_12989[2]);var state_12989__$1 = (function (){var statearr_13010 = state_12989;(statearr_13010[13] = inst_12982);
return statearr_13010;
})();var statearr_13011_13034 = state_12989__$1;(statearr_13011_13034[2] = null);
(statearr_13011_13034[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_13015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13015[0] = state_machine__6893__auto__);
(statearr_13015[1] = 1);
return statearr_13015;
});
var state_machine__6893__auto____1 = (function (state_12989){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_12989);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13016){if((e13016 instanceof Object))
{var ex__6896__auto__ = e13016;var statearr_13017_13035 = state_12989;(statearr_13017_13035[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12989);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13036 = state_12989;
state_12989 = G__13036;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_12989){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_12989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13018 = f__6963__auto__.call(null);(statearr_13018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13019);
return statearr_13018;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13120){var state_val_13121 = (state_13120[1]);if((state_val_13121 === 1))
{var inst_13091 = cljs.core.vec.call(null,chs);var inst_13092 = inst_13091;var state_13120__$1 = (function (){var statearr_13122 = state_13120;(statearr_13122[7] = inst_13092);
return statearr_13122;
})();var statearr_13123_13145 = state_13120__$1;(statearr_13123_13145[2] = null);
(statearr_13123_13145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 2))
{var inst_13092 = (state_13120[7]);var inst_13094 = cljs.core.count.call(null,inst_13092);var inst_13095 = (inst_13094 > 0);var state_13120__$1 = state_13120;if(cljs.core.truth_(inst_13095))
{var statearr_13124_13146 = state_13120__$1;(statearr_13124_13146[1] = 4);
} else
{var statearr_13125_13147 = state_13120__$1;(statearr_13125_13147[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 3))
{var inst_13118 = (state_13120[2]);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13120__$1,inst_13118);
} else
{if((state_val_13121 === 4))
{var inst_13092 = (state_13120[7]);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13120__$1,7,inst_13092);
} else
{if((state_val_13121 === 5))
{var inst_13114 = cljs.core.async.close_BANG_.call(null,out);var state_13120__$1 = state_13120;var statearr_13126_13148 = state_13120__$1;(statearr_13126_13148[2] = inst_13114);
(statearr_13126_13148[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 6))
{var inst_13116 = (state_13120[2]);var state_13120__$1 = state_13120;var statearr_13127_13149 = state_13120__$1;(statearr_13127_13149[2] = inst_13116);
(statearr_13127_13149[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 7))
{var inst_13099 = (state_13120[8]);var inst_13100 = (state_13120[9]);var inst_13099__$1 = (state_13120[2]);var inst_13100__$1 = cljs.core.nth.call(null,inst_13099__$1,0,null);var inst_13101 = cljs.core.nth.call(null,inst_13099__$1,1,null);var inst_13102 = (inst_13100__$1 == null);var state_13120__$1 = (function (){var statearr_13128 = state_13120;(statearr_13128[8] = inst_13099__$1);
(statearr_13128[9] = inst_13100__$1);
(statearr_13128[10] = inst_13101);
return statearr_13128;
})();if(cljs.core.truth_(inst_13102))
{var statearr_13129_13150 = state_13120__$1;(statearr_13129_13150[1] = 8);
} else
{var statearr_13130_13151 = state_13120__$1;(statearr_13130_13151[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 8))
{var inst_13092 = (state_13120[7]);var inst_13099 = (state_13120[8]);var inst_13100 = (state_13120[9]);var inst_13101 = (state_13120[10]);var inst_13104 = (function (){var c = inst_13101;var v = inst_13100;var vec__13097 = inst_13099;var cs = inst_13092;return ((function (c,v,vec__13097,cs,inst_13092,inst_13099,inst_13100,inst_13101,state_val_13121){
return (function (p1__13037_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13037_SHARP_);
});
;})(c,v,vec__13097,cs,inst_13092,inst_13099,inst_13100,inst_13101,state_val_13121))
})();var inst_13105 = cljs.core.filterv.call(null,inst_13104,inst_13092);var inst_13092__$1 = inst_13105;var state_13120__$1 = (function (){var statearr_13131 = state_13120;(statearr_13131[7] = inst_13092__$1);
return statearr_13131;
})();var statearr_13132_13152 = state_13120__$1;(statearr_13132_13152[2] = null);
(statearr_13132_13152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 9))
{var inst_13100 = (state_13120[9]);var state_13120__$1 = state_13120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13120__$1,11,out,inst_13100);
} else
{if((state_val_13121 === 10))
{var inst_13112 = (state_13120[2]);var state_13120__$1 = state_13120;var statearr_13134_13153 = state_13120__$1;(statearr_13134_13153[2] = inst_13112);
(statearr_13134_13153[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13121 === 11))
{var inst_13092 = (state_13120[7]);var inst_13109 = (state_13120[2]);var tmp13133 = inst_13092;var inst_13092__$1 = tmp13133;var state_13120__$1 = (function (){var statearr_13135 = state_13120;(statearr_13135[7] = inst_13092__$1);
(statearr_13135[11] = inst_13109);
return statearr_13135;
})();var statearr_13136_13154 = state_13120__$1;(statearr_13136_13154[2] = null);
(statearr_13136_13154[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_13140 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13140[0] = state_machine__6893__auto__);
(statearr_13140[1] = 1);
return statearr_13140;
});
var state_machine__6893__auto____1 = (function (state_13120){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13120);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13141){if((e13141 instanceof Object))
{var ex__6896__auto__ = e13141;var statearr_13142_13155 = state_13120;(statearr_13142_13155[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13120);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13156 = state_13120;
state_13120 = G__13156;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13120){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13143 = f__6963__auto__.call(null);(statearr_13143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13144);
return statearr_13143;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13226){var state_val_13227 = (state_13226[1]);if((state_val_13227 === 1))
{var inst_13203 = 0;var state_13226__$1 = (function (){var statearr_13228 = state_13226;(statearr_13228[7] = inst_13203);
return statearr_13228;
})();var statearr_13229_13250 = state_13226__$1;(statearr_13229_13250[2] = null);
(statearr_13229_13250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 2))
{var inst_13203 = (state_13226[7]);var inst_13205 = (inst_13203 < n);var state_13226__$1 = state_13226;if(cljs.core.truth_(inst_13205))
{var statearr_13230_13251 = state_13226__$1;(statearr_13230_13251[1] = 4);
} else
{var statearr_13231_13252 = state_13226__$1;(statearr_13231_13252[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 3))
{var inst_13223 = (state_13226[2]);var inst_13224 = cljs.core.async.close_BANG_.call(null,out);var state_13226__$1 = (function (){var statearr_13232 = state_13226;(statearr_13232[8] = inst_13223);
return statearr_13232;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else
{if((state_val_13227 === 4))
{var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,7,ch);
} else
{if((state_val_13227 === 5))
{var state_13226__$1 = state_13226;var statearr_13233_13253 = state_13226__$1;(statearr_13233_13253[2] = null);
(statearr_13233_13253[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 6))
{var inst_13221 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13234_13254 = state_13226__$1;(statearr_13234_13254[2] = inst_13221);
(statearr_13234_13254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 7))
{var inst_13208 = (state_13226[9]);var inst_13208__$1 = (state_13226[2]);var inst_13209 = (inst_13208__$1 == null);var inst_13210 = cljs.core.not.call(null,inst_13209);var state_13226__$1 = (function (){var statearr_13235 = state_13226;(statearr_13235[9] = inst_13208__$1);
return statearr_13235;
})();if(inst_13210)
{var statearr_13236_13255 = state_13226__$1;(statearr_13236_13255[1] = 8);
} else
{var statearr_13237_13256 = state_13226__$1;(statearr_13237_13256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 8))
{var inst_13208 = (state_13226[9]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,11,out,inst_13208);
} else
{if((state_val_13227 === 9))
{var state_13226__$1 = state_13226;var statearr_13238_13257 = state_13226__$1;(statearr_13238_13257[2] = null);
(statearr_13238_13257[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 10))
{var inst_13218 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13239_13258 = state_13226__$1;(statearr_13239_13258[2] = inst_13218);
(statearr_13239_13258[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 11))
{var inst_13203 = (state_13226[7]);var inst_13213 = (state_13226[2]);var inst_13214 = (inst_13203 + 1);var inst_13203__$1 = inst_13214;var state_13226__$1 = (function (){var statearr_13240 = state_13226;(statearr_13240[7] = inst_13203__$1);
(statearr_13240[10] = inst_13213);
return statearr_13240;
})();var statearr_13241_13259 = state_13226__$1;(statearr_13241_13259[2] = null);
(statearr_13241_13259[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_13245 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13245[0] = state_machine__6893__auto__);
(statearr_13245[1] = 1);
return statearr_13245;
});
var state_machine__6893__auto____1 = (function (state_13226){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13246){if((e13246 instanceof Object))
{var ex__6896__auto__ = e13246;var statearr_13247_13260 = state_13226;(statearr_13247_13260[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13261 = state_13226;
state_13226 = G__13261;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13248 = f__6963__auto__.call(null);(statearr_13248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13249);
return statearr_13248;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13333){var state_val_13334 = (state_13333[1]);if((state_val_13334 === 1))
{var inst_13310 = null;var state_13333__$1 = (function (){var statearr_13335 = state_13333;(statearr_13335[7] = inst_13310);
return statearr_13335;
})();var statearr_13336_13359 = state_13333__$1;(statearr_13336_13359[2] = null);
(statearr_13336_13359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 2))
{var state_13333__$1 = state_13333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13333__$1,4,ch);
} else
{if((state_val_13334 === 3))
{var inst_13330 = (state_13333[2]);var inst_13331 = cljs.core.async.close_BANG_.call(null,out);var state_13333__$1 = (function (){var statearr_13337 = state_13333;(statearr_13337[8] = inst_13330);
return statearr_13337;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13333__$1,inst_13331);
} else
{if((state_val_13334 === 4))
{var inst_13313 = (state_13333[9]);var inst_13313__$1 = (state_13333[2]);var inst_13314 = (inst_13313__$1 == null);var inst_13315 = cljs.core.not.call(null,inst_13314);var state_13333__$1 = (function (){var statearr_13338 = state_13333;(statearr_13338[9] = inst_13313__$1);
return statearr_13338;
})();if(inst_13315)
{var statearr_13339_13360 = state_13333__$1;(statearr_13339_13360[1] = 5);
} else
{var statearr_13340_13361 = state_13333__$1;(statearr_13340_13361[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 5))
{var inst_13310 = (state_13333[7]);var inst_13313 = (state_13333[9]);var inst_13317 = cljs.core._EQ_.call(null,inst_13313,inst_13310);var state_13333__$1 = state_13333;if(inst_13317)
{var statearr_13341_13362 = state_13333__$1;(statearr_13341_13362[1] = 8);
} else
{var statearr_13342_13363 = state_13333__$1;(statearr_13342_13363[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 6))
{var state_13333__$1 = state_13333;var statearr_13344_13364 = state_13333__$1;(statearr_13344_13364[2] = null);
(statearr_13344_13364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 7))
{var inst_13328 = (state_13333[2]);var state_13333__$1 = state_13333;var statearr_13345_13365 = state_13333__$1;(statearr_13345_13365[2] = inst_13328);
(statearr_13345_13365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 8))
{var inst_13310 = (state_13333[7]);var tmp13343 = inst_13310;var inst_13310__$1 = tmp13343;var state_13333__$1 = (function (){var statearr_13346 = state_13333;(statearr_13346[7] = inst_13310__$1);
return statearr_13346;
})();var statearr_13347_13366 = state_13333__$1;(statearr_13347_13366[2] = null);
(statearr_13347_13366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 9))
{var inst_13313 = (state_13333[9]);var state_13333__$1 = state_13333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13333__$1,11,out,inst_13313);
} else
{if((state_val_13334 === 10))
{var inst_13325 = (state_13333[2]);var state_13333__$1 = state_13333;var statearr_13348_13367 = state_13333__$1;(statearr_13348_13367[2] = inst_13325);
(statearr_13348_13367[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 11))
{var inst_13313 = (state_13333[9]);var inst_13322 = (state_13333[2]);var inst_13310 = inst_13313;var state_13333__$1 = (function (){var statearr_13349 = state_13333;(statearr_13349[7] = inst_13310);
(statearr_13349[10] = inst_13322);
return statearr_13349;
})();var statearr_13350_13368 = state_13333__$1;(statearr_13350_13368[2] = null);
(statearr_13350_13368[1] = 2);
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
var state_machine__6893__auto____0 = (function (){var statearr_13354 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13354[0] = state_machine__6893__auto__);
(statearr_13354[1] = 1);
return statearr_13354;
});
var state_machine__6893__auto____1 = (function (state_13333){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13333);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13355){if((e13355 instanceof Object))
{var ex__6896__auto__ = e13355;var statearr_13356_13369 = state_13333;(statearr_13356_13369[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13370 = state_13333;
state_13333 = G__13370;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13333){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13357 = f__6963__auto__.call(null);(statearr_13357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13358);
return statearr_13357;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13475){var state_val_13476 = (state_13475[1]);if((state_val_13476 === 1))
{var inst_13438 = (new Array(n));var inst_13439 = inst_13438;var inst_13440 = 0;var state_13475__$1 = (function (){var statearr_13477 = state_13475;(statearr_13477[7] = inst_13439);
(statearr_13477[8] = inst_13440);
return statearr_13477;
})();var statearr_13478_13506 = state_13475__$1;(statearr_13478_13506[2] = null);
(statearr_13478_13506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 2))
{var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13475__$1,4,ch);
} else
{if((state_val_13476 === 3))
{var inst_13473 = (state_13475[2]);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13475__$1,inst_13473);
} else
{if((state_val_13476 === 4))
{var inst_13443 = (state_13475[9]);var inst_13443__$1 = (state_13475[2]);var inst_13444 = (inst_13443__$1 == null);var inst_13445 = cljs.core.not.call(null,inst_13444);var state_13475__$1 = (function (){var statearr_13479 = state_13475;(statearr_13479[9] = inst_13443__$1);
return statearr_13479;
})();if(inst_13445)
{var statearr_13480_13507 = state_13475__$1;(statearr_13480_13507[1] = 5);
} else
{var statearr_13481_13508 = state_13475__$1;(statearr_13481_13508[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 5))
{var inst_13443 = (state_13475[9]);var inst_13439 = (state_13475[7]);var inst_13440 = (state_13475[8]);var inst_13448 = (state_13475[10]);var inst_13447 = (inst_13439[inst_13440] = inst_13443);var inst_13448__$1 = (inst_13440 + 1);var inst_13449 = (inst_13448__$1 < n);var state_13475__$1 = (function (){var statearr_13482 = state_13475;(statearr_13482[11] = inst_13447);
(statearr_13482[10] = inst_13448__$1);
return statearr_13482;
})();if(cljs.core.truth_(inst_13449))
{var statearr_13483_13509 = state_13475__$1;(statearr_13483_13509[1] = 8);
} else
{var statearr_13484_13510 = state_13475__$1;(statearr_13484_13510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 6))
{var inst_13440 = (state_13475[8]);var inst_13461 = (inst_13440 > 0);var state_13475__$1 = state_13475;if(cljs.core.truth_(inst_13461))
{var statearr_13486_13511 = state_13475__$1;(statearr_13486_13511[1] = 12);
} else
{var statearr_13487_13512 = state_13475__$1;(statearr_13487_13512[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 7))
{var inst_13471 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13488_13513 = state_13475__$1;(statearr_13488_13513[2] = inst_13471);
(statearr_13488_13513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 8))
{var inst_13439 = (state_13475[7]);var inst_13448 = (state_13475[10]);var tmp13485 = inst_13439;var inst_13439__$1 = tmp13485;var inst_13440 = inst_13448;var state_13475__$1 = (function (){var statearr_13489 = state_13475;(statearr_13489[7] = inst_13439__$1);
(statearr_13489[8] = inst_13440);
return statearr_13489;
})();var statearr_13490_13514 = state_13475__$1;(statearr_13490_13514[2] = null);
(statearr_13490_13514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 9))
{var inst_13439 = (state_13475[7]);var inst_13453 = cljs.core.vec.call(null,inst_13439);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,11,out,inst_13453);
} else
{if((state_val_13476 === 10))
{var inst_13459 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13491_13515 = state_13475__$1;(statearr_13491_13515[2] = inst_13459);
(statearr_13491_13515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 11))
{var inst_13455 = (state_13475[2]);var inst_13456 = (new Array(n));var inst_13439 = inst_13456;var inst_13440 = 0;var state_13475__$1 = (function (){var statearr_13492 = state_13475;(statearr_13492[7] = inst_13439);
(statearr_13492[8] = inst_13440);
(statearr_13492[12] = inst_13455);
return statearr_13492;
})();var statearr_13493_13516 = state_13475__$1;(statearr_13493_13516[2] = null);
(statearr_13493_13516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 12))
{var inst_13439 = (state_13475[7]);var inst_13463 = cljs.core.vec.call(null,inst_13439);var state_13475__$1 = state_13475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,15,out,inst_13463);
} else
{if((state_val_13476 === 13))
{var state_13475__$1 = state_13475;var statearr_13494_13517 = state_13475__$1;(statearr_13494_13517[2] = null);
(statearr_13494_13517[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 14))
{var inst_13468 = (state_13475[2]);var inst_13469 = cljs.core.async.close_BANG_.call(null,out);var state_13475__$1 = (function (){var statearr_13495 = state_13475;(statearr_13495[13] = inst_13468);
return statearr_13495;
})();var statearr_13496_13518 = state_13475__$1;(statearr_13496_13518[2] = inst_13469);
(statearr_13496_13518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13476 === 15))
{var inst_13465 = (state_13475[2]);var state_13475__$1 = state_13475;var statearr_13497_13519 = state_13475__$1;(statearr_13497_13519[2] = inst_13465);
(statearr_13497_13519[1] = 14);
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
var state_machine__6893__auto____0 = (function (){var statearr_13501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13501[0] = state_machine__6893__auto__);
(statearr_13501[1] = 1);
return statearr_13501;
});
var state_machine__6893__auto____1 = (function (state_13475){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13502){if((e13502 instanceof Object))
{var ex__6896__auto__ = e13502;var statearr_13503_13520 = state_13475;(statearr_13503_13520[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13521 = state_13475;
state_13475 = G__13521;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13475){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13504 = f__6963__auto__.call(null);(statearr_13504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13505);
return statearr_13504;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6962__auto___13664 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6963__auto__ = (function (){var switch__6892__auto__ = (function (state_13634){var state_val_13635 = (state_13634[1]);if((state_val_13635 === 1))
{var inst_13593 = [];var inst_13594 = inst_13593;var inst_13595 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13634__$1 = (function (){var statearr_13636 = state_13634;(statearr_13636[7] = inst_13595);
(statearr_13636[8] = inst_13594);
return statearr_13636;
})();var statearr_13637_13665 = state_13634__$1;(statearr_13637_13665[2] = null);
(statearr_13637_13665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 2))
{var state_13634__$1 = state_13634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13634__$1,4,ch);
} else
{if((state_val_13635 === 3))
{var inst_13632 = (state_13634[2]);var state_13634__$1 = state_13634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13634__$1,inst_13632);
} else
{if((state_val_13635 === 4))
{var inst_13598 = (state_13634[9]);var inst_13598__$1 = (state_13634[2]);var inst_13599 = (inst_13598__$1 == null);var inst_13600 = cljs.core.not.call(null,inst_13599);var state_13634__$1 = (function (){var statearr_13638 = state_13634;(statearr_13638[9] = inst_13598__$1);
return statearr_13638;
})();if(inst_13600)
{var statearr_13639_13666 = state_13634__$1;(statearr_13639_13666[1] = 5);
} else
{var statearr_13640_13667 = state_13634__$1;(statearr_13640_13667[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 5))
{var inst_13595 = (state_13634[7]);var inst_13598 = (state_13634[9]);var inst_13602 = (state_13634[10]);var inst_13602__$1 = f.call(null,inst_13598);var inst_13603 = cljs.core._EQ_.call(null,inst_13602__$1,inst_13595);var inst_13604 = cljs.core.keyword_identical_QMARK_.call(null,inst_13595,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13605 = (inst_13603) || (inst_13604);var state_13634__$1 = (function (){var statearr_13641 = state_13634;(statearr_13641[10] = inst_13602__$1);
return statearr_13641;
})();if(cljs.core.truth_(inst_13605))
{var statearr_13642_13668 = state_13634__$1;(statearr_13642_13668[1] = 8);
} else
{var statearr_13643_13669 = state_13634__$1;(statearr_13643_13669[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 6))
{var inst_13594 = (state_13634[8]);var inst_13619 = inst_13594.length;var inst_13620 = (inst_13619 > 0);var state_13634__$1 = state_13634;if(cljs.core.truth_(inst_13620))
{var statearr_13645_13670 = state_13634__$1;(statearr_13645_13670[1] = 12);
} else
{var statearr_13646_13671 = state_13634__$1;(statearr_13646_13671[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 7))
{var inst_13630 = (state_13634[2]);var state_13634__$1 = state_13634;var statearr_13647_13672 = state_13634__$1;(statearr_13647_13672[2] = inst_13630);
(statearr_13647_13672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 8))
{var inst_13594 = (state_13634[8]);var inst_13598 = (state_13634[9]);var inst_13602 = (state_13634[10]);var inst_13607 = inst_13594.push(inst_13598);var tmp13644 = inst_13594;var inst_13594__$1 = tmp13644;var inst_13595 = inst_13602;var state_13634__$1 = (function (){var statearr_13648 = state_13634;(statearr_13648[7] = inst_13595);
(statearr_13648[8] = inst_13594__$1);
(statearr_13648[11] = inst_13607);
return statearr_13648;
})();var statearr_13649_13673 = state_13634__$1;(statearr_13649_13673[2] = null);
(statearr_13649_13673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 9))
{var inst_13594 = (state_13634[8]);var inst_13610 = cljs.core.vec.call(null,inst_13594);var state_13634__$1 = state_13634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13634__$1,11,out,inst_13610);
} else
{if((state_val_13635 === 10))
{var inst_13617 = (state_13634[2]);var state_13634__$1 = state_13634;var statearr_13650_13674 = state_13634__$1;(statearr_13650_13674[2] = inst_13617);
(statearr_13650_13674[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 11))
{var inst_13598 = (state_13634[9]);var inst_13602 = (state_13634[10]);var inst_13612 = (state_13634[2]);var inst_13613 = [];var inst_13614 = inst_13613.push(inst_13598);var inst_13594 = inst_13613;var inst_13595 = inst_13602;var state_13634__$1 = (function (){var statearr_13651 = state_13634;(statearr_13651[7] = inst_13595);
(statearr_13651[8] = inst_13594);
(statearr_13651[12] = inst_13612);
(statearr_13651[13] = inst_13614);
return statearr_13651;
})();var statearr_13652_13675 = state_13634__$1;(statearr_13652_13675[2] = null);
(statearr_13652_13675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 12))
{var inst_13594 = (state_13634[8]);var inst_13622 = cljs.core.vec.call(null,inst_13594);var state_13634__$1 = state_13634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13634__$1,15,out,inst_13622);
} else
{if((state_val_13635 === 13))
{var state_13634__$1 = state_13634;var statearr_13653_13676 = state_13634__$1;(statearr_13653_13676[2] = null);
(statearr_13653_13676[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 14))
{var inst_13627 = (state_13634[2]);var inst_13628 = cljs.core.async.close_BANG_.call(null,out);var state_13634__$1 = (function (){var statearr_13654 = state_13634;(statearr_13654[14] = inst_13627);
return statearr_13654;
})();var statearr_13655_13677 = state_13634__$1;(statearr_13655_13677[2] = inst_13628);
(statearr_13655_13677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13635 === 15))
{var inst_13624 = (state_13634[2]);var state_13634__$1 = state_13634;var statearr_13656_13678 = state_13634__$1;(statearr_13656_13678[2] = inst_13624);
(statearr_13656_13678[1] = 14);
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
var state_machine__6893__auto____0 = (function (){var statearr_13660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13660[0] = state_machine__6893__auto__);
(statearr_13660[1] = 1);
return statearr_13660;
});
var state_machine__6893__auto____1 = (function (state_13634){while(true){
var ret_value__6894__auto__ = (function (){try{while(true){
var result__6895__auto__ = switch__6892__auto__.call(null,state_13634);if(cljs.core.keyword_identical_QMARK_.call(null,result__6895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6895__auto__;
}
break;
}
}catch (e13661){if((e13661 instanceof Object))
{var ex__6896__auto__ = e13661;var statearr_13662_13679 = state_13634;(statearr_13662_13679[5] = ex__6896__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6894__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13680 = state_13634;
state_13634 = G__13680;
continue;
}
} else
{return ret_value__6894__auto__;
}
break;
}
});
state_machine__6893__auto__ = function(state_13634){
switch(arguments.length){
case 0:
return state_machine__6893__auto____0.call(this);
case 1:
return state_machine__6893__auto____1.call(this,state_13634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6893__auto____0;
state_machine__6893__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6893__auto____1;
return state_machine__6893__auto__;
})()
;})(switch__6892__auto__))
})();var state__6964__auto__ = (function (){var statearr_13663 = f__6963__auto__.call(null);(statearr_13663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6962__auto___13664);
return statearr_13663;
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