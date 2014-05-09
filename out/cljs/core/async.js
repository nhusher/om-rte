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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10381 = (function (f,fn_handler,meta10382){
this.f = f;
this.fn_handler = fn_handler;
this.meta10382 = meta10382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10381.cljs$lang$type = true;
cljs.core.async.t10381.cljs$lang$ctorStr = "cljs.core.async/t10381";
cljs.core.async.t10381.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10381");
});
cljs.core.async.t10381.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10383){var self__ = this;
var _10383__$1 = this;return self__.meta10382;
});
cljs.core.async.t10381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10383,meta10382__$1){var self__ = this;
var _10383__$1 = this;return (new cljs.core.async.t10381(self__.f,self__.fn_handler,meta10382__$1));
});
cljs.core.async.__GT_t10381 = (function __GT_t10381(f__$1,fn_handler__$1,meta10382){return (new cljs.core.async.t10381(f__$1,fn_handler__$1,meta10382));
});
}
return (new cljs.core.async.t10381(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10385 = buff;if(G__10385)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10385.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10385.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10385);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10385);
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
{var val_10386 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10386);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10386);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10387 = n;var x_10388 = 0;while(true){
if((x_10388 < n__4291__auto___10387))
{(a[x_10388] = 0);
{
var G__10389 = (x_10388 + 1);
x_10388 = G__10389;
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
var G__10390 = (i + 1);
i = G__10390;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10394 = (function (flag,alt_flag,meta10395){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10395 = meta10395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10394.cljs$lang$type = true;
cljs.core.async.t10394.cljs$lang$ctorStr = "cljs.core.async/t10394";
cljs.core.async.t10394.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10394");
});
cljs.core.async.t10394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10396){var self__ = this;
var _10396__$1 = this;return self__.meta10395;
});
cljs.core.async.t10394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10396,meta10395__$1){var self__ = this;
var _10396__$1 = this;return (new cljs.core.async.t10394(self__.flag,self__.alt_flag,meta10395__$1));
});
cljs.core.async.__GT_t10394 = (function __GT_t10394(flag__$1,alt_flag__$1,meta10395){return (new cljs.core.async.t10394(flag__$1,alt_flag__$1,meta10395));
});
}
return (new cljs.core.async.t10394(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10400 = (function (cb,flag,alt_handler,meta10401){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10401 = meta10401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10400.cljs$lang$type = true;
cljs.core.async.t10400.cljs$lang$ctorStr = "cljs.core.async/t10400";
cljs.core.async.t10400.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10400");
});
cljs.core.async.t10400.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10402){var self__ = this;
var _10402__$1 = this;return self__.meta10401;
});
cljs.core.async.t10400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10402,meta10401__$1){var self__ = this;
var _10402__$1 = this;return (new cljs.core.async.t10400(self__.cb,self__.flag,self__.alt_handler,meta10401__$1));
});
cljs.core.async.__GT_t10400 = (function __GT_t10400(cb__$1,flag__$1,alt_handler__$1,meta10401){return (new cljs.core.async.t10400(cb__$1,flag__$1,alt_handler__$1,meta10401));
});
}
return (new cljs.core.async.t10400(cb,flag,alt_handler,null));
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
return (function (p1__10403_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10403_SHARP_,port], null));
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
var G__10404 = (i + 1);
i = G__10404;
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
var alts_BANG___delegate = function (ports,p__10405){var map__10407 = p__10405;var map__10407__$1 = ((cljs.core.seq_QMARK_.call(null,map__10407))?cljs.core.apply.call(null,cljs.core.hash_map,map__10407):map__10407);var opts = map__10407__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10405 = null;if (arguments.length > 1) {
  p__10405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10405);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10408){
var ports = cljs.core.first(arglist__10408);
var p__10405 = cljs.core.rest(arglist__10408);
return alts_BANG___delegate(ports,p__10405);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10416 = (function (ch,f,map_LT_,meta10417){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10417 = meta10417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10416.cljs$lang$type = true;
cljs.core.async.t10416.cljs$lang$ctorStr = "cljs.core.async/t10416";
cljs.core.async.t10416.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10416");
});
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10419 = (function (fn1,_,meta10417,ch,f,map_LT_,meta10420){
this.fn1 = fn1;
this._ = _;
this.meta10417 = meta10417;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10420 = meta10420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10419.cljs$lang$type = true;
cljs.core.async.t10419.cljs$lang$ctorStr = "cljs.core.async/t10419";
cljs.core.async.t10419.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10419");
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10409_SHARP_){return f1.call(null,(((p1__10409_SHARP_ == null))?null:self__.f.call(null,p1__10409_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10421){var self__ = this;
var _10421__$1 = this;return self__.meta10420;
});
cljs.core.async.t10419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10421,meta10420__$1){var self__ = this;
var _10421__$1 = this;return (new cljs.core.async.t10419(self__.fn1,self__._,self__.meta10417,self__.ch,self__.f,self__.map_LT_,meta10420__$1));
});
cljs.core.async.__GT_t10419 = (function __GT_t10419(fn1__$1,___$2,meta10417__$1,ch__$2,f__$2,map_LT___$2,meta10420){return (new cljs.core.async.t10419(fn1__$1,___$2,meta10417__$1,ch__$2,f__$2,map_LT___$2,meta10420));
});
}
return (new cljs.core.async.t10419(fn1,___$1,self__.meta10417,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10418){var self__ = this;
var _10418__$1 = this;return self__.meta10417;
});
cljs.core.async.t10416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10418,meta10417__$1){var self__ = this;
var _10418__$1 = this;return (new cljs.core.async.t10416(self__.ch,self__.f,self__.map_LT_,meta10417__$1));
});
cljs.core.async.__GT_t10416 = (function __GT_t10416(ch__$1,f__$1,map_LT___$1,meta10417){return (new cljs.core.async.t10416(ch__$1,f__$1,map_LT___$1,meta10417));
});
}
return (new cljs.core.async.t10416(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10425 = (function (ch,f,map_GT_,meta10426){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10425.cljs$lang$type = true;
cljs.core.async.t10425.cljs$lang$ctorStr = "cljs.core.async/t10425";
cljs.core.async.t10425.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10425");
});
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10427){var self__ = this;
var _10427__$1 = this;return self__.meta10426;
});
cljs.core.async.t10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10427,meta10426__$1){var self__ = this;
var _10427__$1 = this;return (new cljs.core.async.t10425(self__.ch,self__.f,self__.map_GT_,meta10426__$1));
});
cljs.core.async.__GT_t10425 = (function __GT_t10425(ch__$1,f__$1,map_GT___$1,meta10426){return (new cljs.core.async.t10425(ch__$1,f__$1,map_GT___$1,meta10426));
});
}
return (new cljs.core.async.t10425(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10431 = (function (ch,p,filter_GT_,meta10432){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10432 = meta10432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10431.cljs$lang$type = true;
cljs.core.async.t10431.cljs$lang$ctorStr = "cljs.core.async/t10431";
cljs.core.async.t10431.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10431");
});
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10433){var self__ = this;
var _10433__$1 = this;return self__.meta10432;
});
cljs.core.async.t10431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10433,meta10432__$1){var self__ = this;
var _10433__$1 = this;return (new cljs.core.async.t10431(self__.ch,self__.p,self__.filter_GT_,meta10432__$1));
});
cljs.core.async.__GT_t10431 = (function __GT_t10431(ch__$1,p__$1,filter_GT___$1,meta10432){return (new cljs.core.async.t10431(ch__$1,p__$1,filter_GT___$1,meta10432));
});
}
return (new cljs.core.async.t10431(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___10516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_10495){var state_val_10496 = (state_10495[1]);if((state_val_10496 === 1))
{var state_10495__$1 = state_10495;var statearr_10497_10517 = state_10495__$1;(statearr_10497_10517[2] = null);
(statearr_10497_10517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 2))
{var state_10495__$1 = state_10495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10495__$1,4,ch);
} else
{if((state_val_10496 === 3))
{var inst_10493 = (state_10495[2]);var state_10495__$1 = state_10495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10495__$1,inst_10493);
} else
{if((state_val_10496 === 4))
{var inst_10477 = (state_10495[7]);var inst_10477__$1 = (state_10495[2]);var inst_10478 = (inst_10477__$1 == null);var state_10495__$1 = (function (){var statearr_10498 = state_10495;(statearr_10498[7] = inst_10477__$1);
return statearr_10498;
})();if(cljs.core.truth_(inst_10478))
{var statearr_10499_10518 = state_10495__$1;(statearr_10499_10518[1] = 5);
} else
{var statearr_10500_10519 = state_10495__$1;(statearr_10500_10519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 5))
{var inst_10480 = cljs.core.async.close_BANG_.call(null,out);var state_10495__$1 = state_10495;var statearr_10501_10520 = state_10495__$1;(statearr_10501_10520[2] = inst_10480);
(statearr_10501_10520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 6))
{var inst_10477 = (state_10495[7]);var inst_10482 = p.call(null,inst_10477);var state_10495__$1 = state_10495;if(cljs.core.truth_(inst_10482))
{var statearr_10502_10521 = state_10495__$1;(statearr_10502_10521[1] = 8);
} else
{var statearr_10503_10522 = state_10495__$1;(statearr_10503_10522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 7))
{var inst_10491 = (state_10495[2]);var state_10495__$1 = state_10495;var statearr_10504_10523 = state_10495__$1;(statearr_10504_10523[2] = inst_10491);
(statearr_10504_10523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 8))
{var inst_10477 = (state_10495[7]);var state_10495__$1 = state_10495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10495__$1,11,out,inst_10477);
} else
{if((state_val_10496 === 9))
{var state_10495__$1 = state_10495;var statearr_10505_10524 = state_10495__$1;(statearr_10505_10524[2] = null);
(statearr_10505_10524[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 10))
{var inst_10488 = (state_10495[2]);var state_10495__$1 = (function (){var statearr_10506 = state_10495;(statearr_10506[8] = inst_10488);
return statearr_10506;
})();var statearr_10507_10525 = state_10495__$1;(statearr_10507_10525[2] = null);
(statearr_10507_10525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 11))
{var inst_10485 = (state_10495[2]);var state_10495__$1 = state_10495;var statearr_10508_10526 = state_10495__$1;(statearr_10508_10526[2] = inst_10485);
(statearr_10508_10526[1] = 10);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_10512 = [null,null,null,null,null,null,null,null,null];(statearr_10512[0] = state_machine__7996__auto__);
(statearr_10512[1] = 1);
return statearr_10512;
});
var state_machine__7996__auto____1 = (function (state_10495){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_10495);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e10513){if((e10513 instanceof Object))
{var ex__7999__auto__ = e10513;var statearr_10514_10527 = state_10495;(statearr_10514_10527[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10528 = state_10495;
state_10495 = G__10528;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_10495){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_10495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_10515 = f__8066__auto__.call(null);(statearr_10515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___10516);
return statearr_10515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8065__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_10680){var state_val_10681 = (state_10680[1]);if((state_val_10681 === 1))
{var state_10680__$1 = state_10680;var statearr_10682_10719 = state_10680__$1;(statearr_10682_10719[2] = null);
(statearr_10682_10719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 2))
{var state_10680__$1 = state_10680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10680__$1,4,in$);
} else
{if((state_val_10681 === 3))
{var inst_10678 = (state_10680[2]);var state_10680__$1 = state_10680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10680__$1,inst_10678);
} else
{if((state_val_10681 === 4))
{var inst_10626 = (state_10680[7]);var inst_10626__$1 = (state_10680[2]);var inst_10627 = (inst_10626__$1 == null);var state_10680__$1 = (function (){var statearr_10683 = state_10680;(statearr_10683[7] = inst_10626__$1);
return statearr_10683;
})();if(cljs.core.truth_(inst_10627))
{var statearr_10684_10720 = state_10680__$1;(statearr_10684_10720[1] = 5);
} else
{var statearr_10685_10721 = state_10680__$1;(statearr_10685_10721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 5))
{var inst_10629 = cljs.core.async.close_BANG_.call(null,out);var state_10680__$1 = state_10680;var statearr_10686_10722 = state_10680__$1;(statearr_10686_10722[2] = inst_10629);
(statearr_10686_10722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 6))
{var inst_10626 = (state_10680[7]);var inst_10631 = f.call(null,inst_10626);var inst_10636 = cljs.core.seq.call(null,inst_10631);var inst_10637 = inst_10636;var inst_10638 = null;var inst_10639 = 0;var inst_10640 = 0;var state_10680__$1 = (function (){var statearr_10687 = state_10680;(statearr_10687[8] = inst_10640);
(statearr_10687[9] = inst_10638);
(statearr_10687[10] = inst_10637);
(statearr_10687[11] = inst_10639);
return statearr_10687;
})();var statearr_10688_10723 = state_10680__$1;(statearr_10688_10723[2] = null);
(statearr_10688_10723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 7))
{var inst_10676 = (state_10680[2]);var state_10680__$1 = state_10680;var statearr_10689_10724 = state_10680__$1;(statearr_10689_10724[2] = inst_10676);
(statearr_10689_10724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 8))
{var inst_10640 = (state_10680[8]);var inst_10639 = (state_10680[11]);var inst_10642 = (inst_10640 < inst_10639);var inst_10643 = inst_10642;var state_10680__$1 = state_10680;if(cljs.core.truth_(inst_10643))
{var statearr_10690_10725 = state_10680__$1;(statearr_10690_10725[1] = 10);
} else
{var statearr_10691_10726 = state_10680__$1;(statearr_10691_10726[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 9))
{var inst_10673 = (state_10680[2]);var state_10680__$1 = (function (){var statearr_10692 = state_10680;(statearr_10692[12] = inst_10673);
return statearr_10692;
})();var statearr_10693_10727 = state_10680__$1;(statearr_10693_10727[2] = null);
(statearr_10693_10727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 10))
{var inst_10640 = (state_10680[8]);var inst_10638 = (state_10680[9]);var inst_10645 = cljs.core._nth.call(null,inst_10638,inst_10640);var state_10680__$1 = state_10680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10680__$1,13,out,inst_10645);
} else
{if((state_val_10681 === 11))
{var inst_10651 = (state_10680[13]);var inst_10637 = (state_10680[10]);var inst_10651__$1 = cljs.core.seq.call(null,inst_10637);var state_10680__$1 = (function (){var statearr_10697 = state_10680;(statearr_10697[13] = inst_10651__$1);
return statearr_10697;
})();if(inst_10651__$1)
{var statearr_10698_10728 = state_10680__$1;(statearr_10698_10728[1] = 14);
} else
{var statearr_10699_10729 = state_10680__$1;(statearr_10699_10729[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 12))
{var inst_10671 = (state_10680[2]);var state_10680__$1 = state_10680;var statearr_10700_10730 = state_10680__$1;(statearr_10700_10730[2] = inst_10671);
(statearr_10700_10730[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 13))
{var inst_10640 = (state_10680[8]);var inst_10638 = (state_10680[9]);var inst_10637 = (state_10680[10]);var inst_10639 = (state_10680[11]);var inst_10647 = (state_10680[2]);var inst_10648 = (inst_10640 + 1);var tmp10694 = inst_10638;var tmp10695 = inst_10637;var tmp10696 = inst_10639;var inst_10637__$1 = tmp10695;var inst_10638__$1 = tmp10694;var inst_10639__$1 = tmp10696;var inst_10640__$1 = inst_10648;var state_10680__$1 = (function (){var statearr_10701 = state_10680;(statearr_10701[8] = inst_10640__$1);
(statearr_10701[9] = inst_10638__$1);
(statearr_10701[10] = inst_10637__$1);
(statearr_10701[11] = inst_10639__$1);
(statearr_10701[14] = inst_10647);
return statearr_10701;
})();var statearr_10702_10731 = state_10680__$1;(statearr_10702_10731[2] = null);
(statearr_10702_10731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 14))
{var inst_10651 = (state_10680[13]);var inst_10653 = cljs.core.chunked_seq_QMARK_.call(null,inst_10651);var state_10680__$1 = state_10680;if(inst_10653)
{var statearr_10703_10732 = state_10680__$1;(statearr_10703_10732[1] = 17);
} else
{var statearr_10704_10733 = state_10680__$1;(statearr_10704_10733[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 15))
{var state_10680__$1 = state_10680;var statearr_10705_10734 = state_10680__$1;(statearr_10705_10734[2] = null);
(statearr_10705_10734[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 16))
{var inst_10669 = (state_10680[2]);var state_10680__$1 = state_10680;var statearr_10706_10735 = state_10680__$1;(statearr_10706_10735[2] = inst_10669);
(statearr_10706_10735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 17))
{var inst_10651 = (state_10680[13]);var inst_10655 = cljs.core.chunk_first.call(null,inst_10651);var inst_10656 = cljs.core.chunk_rest.call(null,inst_10651);var inst_10657 = cljs.core.count.call(null,inst_10655);var inst_10637 = inst_10656;var inst_10638 = inst_10655;var inst_10639 = inst_10657;var inst_10640 = 0;var state_10680__$1 = (function (){var statearr_10707 = state_10680;(statearr_10707[8] = inst_10640);
(statearr_10707[9] = inst_10638);
(statearr_10707[10] = inst_10637);
(statearr_10707[11] = inst_10639);
return statearr_10707;
})();var statearr_10708_10736 = state_10680__$1;(statearr_10708_10736[2] = null);
(statearr_10708_10736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 18))
{var inst_10651 = (state_10680[13]);var inst_10660 = cljs.core.first.call(null,inst_10651);var state_10680__$1 = state_10680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10680__$1,20,out,inst_10660);
} else
{if((state_val_10681 === 19))
{var inst_10666 = (state_10680[2]);var state_10680__$1 = state_10680;var statearr_10709_10737 = state_10680__$1;(statearr_10709_10737[2] = inst_10666);
(statearr_10709_10737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10681 === 20))
{var inst_10651 = (state_10680[13]);var inst_10662 = (state_10680[2]);var inst_10663 = cljs.core.next.call(null,inst_10651);var inst_10637 = inst_10663;var inst_10638 = null;var inst_10639 = 0;var inst_10640 = 0;var state_10680__$1 = (function (){var statearr_10710 = state_10680;(statearr_10710[8] = inst_10640);
(statearr_10710[9] = inst_10638);
(statearr_10710[10] = inst_10637);
(statearr_10710[11] = inst_10639);
(statearr_10710[15] = inst_10662);
return statearr_10710;
})();var statearr_10711_10738 = state_10680__$1;(statearr_10711_10738[2] = null);
(statearr_10711_10738[1] = 8);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_10715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10715[0] = state_machine__7996__auto__);
(statearr_10715[1] = 1);
return statearr_10715;
});
var state_machine__7996__auto____1 = (function (state_10680){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_10680);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e10716){if((e10716 instanceof Object))
{var ex__7999__auto__ = e10716;var statearr_10717_10739 = state_10680;(statearr_10717_10739[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10740 = state_10680;
state_10680 = G__10740;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_10680){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_10680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_10718 = f__8066__auto__.call(null);(statearr_10718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto__);
return statearr_10718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
}));
return c__8065__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8065__auto___10821 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_10800){var state_val_10801 = (state_10800[1]);if((state_val_10801 === 1))
{var state_10800__$1 = state_10800;var statearr_10802_10822 = state_10800__$1;(statearr_10802_10822[2] = null);
(statearr_10802_10822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 2))
{var state_10800__$1 = state_10800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10800__$1,4,from);
} else
{if((state_val_10801 === 3))
{var inst_10798 = (state_10800[2]);var state_10800__$1 = state_10800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10800__$1,inst_10798);
} else
{if((state_val_10801 === 4))
{var inst_10783 = (state_10800[7]);var inst_10783__$1 = (state_10800[2]);var inst_10784 = (inst_10783__$1 == null);var state_10800__$1 = (function (){var statearr_10803 = state_10800;(statearr_10803[7] = inst_10783__$1);
return statearr_10803;
})();if(cljs.core.truth_(inst_10784))
{var statearr_10804_10823 = state_10800__$1;(statearr_10804_10823[1] = 5);
} else
{var statearr_10805_10824 = state_10800__$1;(statearr_10805_10824[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 5))
{var state_10800__$1 = state_10800;if(cljs.core.truth_(close_QMARK_))
{var statearr_10806_10825 = state_10800__$1;(statearr_10806_10825[1] = 8);
} else
{var statearr_10807_10826 = state_10800__$1;(statearr_10807_10826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 6))
{var inst_10783 = (state_10800[7]);var state_10800__$1 = state_10800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10800__$1,11,to,inst_10783);
} else
{if((state_val_10801 === 7))
{var inst_10796 = (state_10800[2]);var state_10800__$1 = state_10800;var statearr_10808_10827 = state_10800__$1;(statearr_10808_10827[2] = inst_10796);
(statearr_10808_10827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 8))
{var inst_10787 = cljs.core.async.close_BANG_.call(null,to);var state_10800__$1 = state_10800;var statearr_10809_10828 = state_10800__$1;(statearr_10809_10828[2] = inst_10787);
(statearr_10809_10828[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 9))
{var state_10800__$1 = state_10800;var statearr_10810_10829 = state_10800__$1;(statearr_10810_10829[2] = null);
(statearr_10810_10829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 10))
{var inst_10790 = (state_10800[2]);var state_10800__$1 = state_10800;var statearr_10811_10830 = state_10800__$1;(statearr_10811_10830[2] = inst_10790);
(statearr_10811_10830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10801 === 11))
{var inst_10793 = (state_10800[2]);var state_10800__$1 = (function (){var statearr_10812 = state_10800;(statearr_10812[8] = inst_10793);
return statearr_10812;
})();var statearr_10813_10831 = state_10800__$1;(statearr_10813_10831[2] = null);
(statearr_10813_10831[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_10817 = [null,null,null,null,null,null,null,null,null];(statearr_10817[0] = state_machine__7996__auto__);
(statearr_10817[1] = 1);
return statearr_10817;
});
var state_machine__7996__auto____1 = (function (state_10800){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_10800);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e10818){if((e10818 instanceof Object))
{var ex__7999__auto__ = e10818;var statearr_10819_10832 = state_10800;(statearr_10819_10832[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10833 = state_10800;
state_10800 = G__10833;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_10800){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_10800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_10820 = f__8066__auto__.call(null);(statearr_10820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___10821);
return statearr_10820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8065__auto___10920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_10898){var state_val_10899 = (state_10898[1]);if((state_val_10899 === 1))
{var state_10898__$1 = state_10898;var statearr_10900_10921 = state_10898__$1;(statearr_10900_10921[2] = null);
(statearr_10900_10921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 2))
{var state_10898__$1 = state_10898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10898__$1,4,ch);
} else
{if((state_val_10899 === 3))
{var inst_10896 = (state_10898[2]);var state_10898__$1 = state_10898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10898__$1,inst_10896);
} else
{if((state_val_10899 === 4))
{var inst_10879 = (state_10898[7]);var inst_10879__$1 = (state_10898[2]);var inst_10880 = (inst_10879__$1 == null);var state_10898__$1 = (function (){var statearr_10901 = state_10898;(statearr_10901[7] = inst_10879__$1);
return statearr_10901;
})();if(cljs.core.truth_(inst_10880))
{var statearr_10902_10922 = state_10898__$1;(statearr_10902_10922[1] = 5);
} else
{var statearr_10903_10923 = state_10898__$1;(statearr_10903_10923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 5))
{var inst_10882 = cljs.core.async.close_BANG_.call(null,tc);var inst_10883 = cljs.core.async.close_BANG_.call(null,fc);var state_10898__$1 = (function (){var statearr_10904 = state_10898;(statearr_10904[8] = inst_10882);
return statearr_10904;
})();var statearr_10905_10924 = state_10898__$1;(statearr_10905_10924[2] = inst_10883);
(statearr_10905_10924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 6))
{var inst_10879 = (state_10898[7]);var inst_10885 = p.call(null,inst_10879);var state_10898__$1 = state_10898;if(cljs.core.truth_(inst_10885))
{var statearr_10906_10925 = state_10898__$1;(statearr_10906_10925[1] = 9);
} else
{var statearr_10907_10926 = state_10898__$1;(statearr_10907_10926[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 7))
{var inst_10894 = (state_10898[2]);var state_10898__$1 = state_10898;var statearr_10908_10927 = state_10898__$1;(statearr_10908_10927[2] = inst_10894);
(statearr_10908_10927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 8))
{var inst_10891 = (state_10898[2]);var state_10898__$1 = (function (){var statearr_10909 = state_10898;(statearr_10909[9] = inst_10891);
return statearr_10909;
})();var statearr_10910_10928 = state_10898__$1;(statearr_10910_10928[2] = null);
(statearr_10910_10928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 9))
{var state_10898__$1 = state_10898;var statearr_10911_10929 = state_10898__$1;(statearr_10911_10929[2] = tc);
(statearr_10911_10929[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 10))
{var state_10898__$1 = state_10898;var statearr_10912_10930 = state_10898__$1;(statearr_10912_10930[2] = fc);
(statearr_10912_10930[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10899 === 11))
{var inst_10879 = (state_10898[7]);var inst_10889 = (state_10898[2]);var state_10898__$1 = state_10898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10898__$1,8,inst_10889,inst_10879);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_10916 = [null,null,null,null,null,null,null,null,null,null];(statearr_10916[0] = state_machine__7996__auto__);
(statearr_10916[1] = 1);
return statearr_10916;
});
var state_machine__7996__auto____1 = (function (state_10898){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_10898);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e10917){if((e10917 instanceof Object))
{var ex__7999__auto__ = e10917;var statearr_10918_10931 = state_10898;(statearr_10918_10931[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10932 = state_10898;
state_10898 = G__10932;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_10898){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_10898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_10919 = f__8066__auto__.call(null);(statearr_10919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___10920);
return statearr_10919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8065__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_10979){var state_val_10980 = (state_10979[1]);if((state_val_10980 === 7))
{var inst_10975 = (state_10979[2]);var state_10979__$1 = state_10979;var statearr_10981_10997 = state_10979__$1;(statearr_10981_10997[2] = inst_10975);
(statearr_10981_10997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10980 === 6))
{var inst_10965 = (state_10979[7]);var inst_10968 = (state_10979[8]);var inst_10972 = f.call(null,inst_10965,inst_10968);var inst_10965__$1 = inst_10972;var state_10979__$1 = (function (){var statearr_10982 = state_10979;(statearr_10982[7] = inst_10965__$1);
return statearr_10982;
})();var statearr_10983_10998 = state_10979__$1;(statearr_10983_10998[2] = null);
(statearr_10983_10998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10980 === 5))
{var inst_10965 = (state_10979[7]);var state_10979__$1 = state_10979;var statearr_10984_10999 = state_10979__$1;(statearr_10984_10999[2] = inst_10965);
(statearr_10984_10999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10980 === 4))
{var inst_10968 = (state_10979[8]);var inst_10968__$1 = (state_10979[2]);var inst_10969 = (inst_10968__$1 == null);var state_10979__$1 = (function (){var statearr_10985 = state_10979;(statearr_10985[8] = inst_10968__$1);
return statearr_10985;
})();if(cljs.core.truth_(inst_10969))
{var statearr_10986_11000 = state_10979__$1;(statearr_10986_11000[1] = 5);
} else
{var statearr_10987_11001 = state_10979__$1;(statearr_10987_11001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10980 === 3))
{var inst_10977 = (state_10979[2]);var state_10979__$1 = state_10979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10979__$1,inst_10977);
} else
{if((state_val_10980 === 2))
{var state_10979__$1 = state_10979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10979__$1,4,ch);
} else
{if((state_val_10980 === 1))
{var inst_10965 = init;var state_10979__$1 = (function (){var statearr_10988 = state_10979;(statearr_10988[7] = inst_10965);
return statearr_10988;
})();var statearr_10989_11002 = state_10979__$1;(statearr_10989_11002[2] = null);
(statearr_10989_11002[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_10993 = [null,null,null,null,null,null,null,null,null];(statearr_10993[0] = state_machine__7996__auto__);
(statearr_10993[1] = 1);
return statearr_10993;
});
var state_machine__7996__auto____1 = (function (state_10979){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_10979);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e10994){if((e10994 instanceof Object))
{var ex__7999__auto__ = e10994;var statearr_10995_11003 = state_10979;(statearr_10995_11003[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11004 = state_10979;
state_10979 = G__11004;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_10979){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_10979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_10996 = f__8066__auto__.call(null);(statearr_10996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto__);
return statearr_10996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
}));
return c__8065__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8065__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_11066){var state_val_11067 = (state_11066[1]);if((state_val_11067 === 1))
{var inst_11046 = cljs.core.seq.call(null,coll);var inst_11047 = inst_11046;var state_11066__$1 = (function (){var statearr_11068 = state_11066;(statearr_11068[7] = inst_11047);
return statearr_11068;
})();var statearr_11069_11087 = state_11066__$1;(statearr_11069_11087[2] = null);
(statearr_11069_11087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 2))
{var inst_11047 = (state_11066[7]);var state_11066__$1 = state_11066;if(cljs.core.truth_(inst_11047))
{var statearr_11070_11088 = state_11066__$1;(statearr_11070_11088[1] = 4);
} else
{var statearr_11071_11089 = state_11066__$1;(statearr_11071_11089[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 3))
{var inst_11064 = (state_11066[2]);var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11066__$1,inst_11064);
} else
{if((state_val_11067 === 4))
{var inst_11047 = (state_11066[7]);var inst_11050 = cljs.core.first.call(null,inst_11047);var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11066__$1,7,ch,inst_11050);
} else
{if((state_val_11067 === 5))
{var state_11066__$1 = state_11066;if(cljs.core.truth_(close_QMARK_))
{var statearr_11072_11090 = state_11066__$1;(statearr_11072_11090[1] = 8);
} else
{var statearr_11073_11091 = state_11066__$1;(statearr_11073_11091[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 6))
{var inst_11062 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11074_11092 = state_11066__$1;(statearr_11074_11092[2] = inst_11062);
(statearr_11074_11092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 7))
{var inst_11047 = (state_11066[7]);var inst_11052 = (state_11066[2]);var inst_11053 = cljs.core.next.call(null,inst_11047);var inst_11047__$1 = inst_11053;var state_11066__$1 = (function (){var statearr_11075 = state_11066;(statearr_11075[8] = inst_11052);
(statearr_11075[7] = inst_11047__$1);
return statearr_11075;
})();var statearr_11076_11093 = state_11066__$1;(statearr_11076_11093[2] = null);
(statearr_11076_11093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 8))
{var inst_11057 = cljs.core.async.close_BANG_.call(null,ch);var state_11066__$1 = state_11066;var statearr_11077_11094 = state_11066__$1;(statearr_11077_11094[2] = inst_11057);
(statearr_11077_11094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 9))
{var state_11066__$1 = state_11066;var statearr_11078_11095 = state_11066__$1;(statearr_11078_11095[2] = null);
(statearr_11078_11095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 10))
{var inst_11060 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11079_11096 = state_11066__$1;(statearr_11079_11096[2] = inst_11060);
(statearr_11079_11096[1] = 6);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_11083 = [null,null,null,null,null,null,null,null,null];(statearr_11083[0] = state_machine__7996__auto__);
(statearr_11083[1] = 1);
return statearr_11083;
});
var state_machine__7996__auto____1 = (function (state_11066){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_11066);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e11084){if((e11084 instanceof Object))
{var ex__7999__auto__ = e11084;var statearr_11085_11097 = state_11066;(statearr_11085_11097[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11098 = state_11066;
state_11066 = G__11098;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_11066){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_11066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_11086 = f__8066__auto__.call(null);(statearr_11086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto__);
return statearr_11086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
}));
return c__8065__auto__;
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
cljs.core.async.Mux = (function (){var obj11100 = {};return obj11100;
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
cljs.core.async.Mult = (function (){var obj11102 = {};return obj11102;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11326 = (function (cs,ch,mult,meta11327){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11327 = meta11327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11326.cljs$lang$type = true;
cljs.core.async.t11326.cljs$lang$ctorStr = "cljs.core.async/t11326";
cljs.core.async.t11326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11326");
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11328){var self__ = this;
var _11328__$1 = this;return self__.meta11327;
});})(cs))
;
cljs.core.async.t11326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11328,meta11327__$1){var self__ = this;
var _11328__$1 = this;return (new cljs.core.async.t11326(self__.cs,self__.ch,self__.mult,meta11327__$1));
});})(cs))
;
cljs.core.async.__GT_t11326 = ((function (cs){
return (function __GT_t11326(cs__$1,ch__$1,mult__$1,meta11327){return (new cljs.core.async.t11326(cs__$1,ch__$1,mult__$1,meta11327));
});})(cs))
;
}
return (new cljs.core.async.t11326(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8065__auto___11549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_11463){var state_val_11464 = (state_11463[1]);if((state_val_11464 === 32))
{var inst_11331 = (state_11463[7]);var inst_11407 = (state_11463[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11463,31,Object,null,30);var inst_11414 = cljs.core.async.put_BANG_.call(null,inst_11407,inst_11331,done);var state_11463__$1 = state_11463;var statearr_11465_11550 = state_11463__$1;(statearr_11465_11550[2] = inst_11414);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 1))
{var state_11463__$1 = state_11463;var statearr_11466_11551 = state_11463__$1;(statearr_11466_11551[2] = null);
(statearr_11466_11551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 33))
{var inst_11420 = (state_11463[9]);var inst_11422 = cljs.core.chunked_seq_QMARK_.call(null,inst_11420);var state_11463__$1 = state_11463;if(inst_11422)
{var statearr_11467_11552 = state_11463__$1;(statearr_11467_11552[1] = 36);
} else
{var statearr_11468_11553 = state_11463__$1;(statearr_11468_11553[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 2))
{var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11463__$1,4,ch);
} else
{if((state_val_11464 === 34))
{var state_11463__$1 = state_11463;var statearr_11469_11554 = state_11463__$1;(statearr_11469_11554[2] = null);
(statearr_11469_11554[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 3))
{var inst_11461 = (state_11463[2]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11463__$1,inst_11461);
} else
{if((state_val_11464 === 35))
{var inst_11445 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11470_11555 = state_11463__$1;(statearr_11470_11555[2] = inst_11445);
(statearr_11470_11555[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 4))
{var inst_11331 = (state_11463[7]);var inst_11331__$1 = (state_11463[2]);var inst_11332 = (inst_11331__$1 == null);var state_11463__$1 = (function (){var statearr_11471 = state_11463;(statearr_11471[7] = inst_11331__$1);
return statearr_11471;
})();if(cljs.core.truth_(inst_11332))
{var statearr_11472_11556 = state_11463__$1;(statearr_11472_11556[1] = 5);
} else
{var statearr_11473_11557 = state_11463__$1;(statearr_11473_11557[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 36))
{var inst_11420 = (state_11463[9]);var inst_11424 = cljs.core.chunk_first.call(null,inst_11420);var inst_11425 = cljs.core.chunk_rest.call(null,inst_11420);var inst_11426 = cljs.core.count.call(null,inst_11424);var inst_11399 = inst_11425;var inst_11400 = inst_11424;var inst_11401 = inst_11426;var inst_11402 = 0;var state_11463__$1 = (function (){var statearr_11474 = state_11463;(statearr_11474[10] = inst_11401);
(statearr_11474[11] = inst_11402);
(statearr_11474[12] = inst_11400);
(statearr_11474[13] = inst_11399);
return statearr_11474;
})();var statearr_11475_11558 = state_11463__$1;(statearr_11475_11558[2] = null);
(statearr_11475_11558[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 5))
{var inst_11338 = cljs.core.deref.call(null,cs);var inst_11339 = cljs.core.seq.call(null,inst_11338);var inst_11340 = inst_11339;var inst_11341 = null;var inst_11342 = 0;var inst_11343 = 0;var state_11463__$1 = (function (){var statearr_11476 = state_11463;(statearr_11476[14] = inst_11343);
(statearr_11476[15] = inst_11342);
(statearr_11476[16] = inst_11340);
(statearr_11476[17] = inst_11341);
return statearr_11476;
})();var statearr_11477_11559 = state_11463__$1;(statearr_11477_11559[2] = null);
(statearr_11477_11559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 37))
{var inst_11420 = (state_11463[9]);var inst_11429 = cljs.core.first.call(null,inst_11420);var state_11463__$1 = (function (){var statearr_11478 = state_11463;(statearr_11478[18] = inst_11429);
return statearr_11478;
})();var statearr_11479_11560 = state_11463__$1;(statearr_11479_11560[2] = null);
(statearr_11479_11560[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 6))
{var inst_11391 = (state_11463[19]);var inst_11390 = cljs.core.deref.call(null,cs);var inst_11391__$1 = cljs.core.keys.call(null,inst_11390);var inst_11392 = cljs.core.count.call(null,inst_11391__$1);var inst_11393 = cljs.core.reset_BANG_.call(null,dctr,inst_11392);var inst_11398 = cljs.core.seq.call(null,inst_11391__$1);var inst_11399 = inst_11398;var inst_11400 = null;var inst_11401 = 0;var inst_11402 = 0;var state_11463__$1 = (function (){var statearr_11480 = state_11463;(statearr_11480[10] = inst_11401);
(statearr_11480[11] = inst_11402);
(statearr_11480[20] = inst_11393);
(statearr_11480[12] = inst_11400);
(statearr_11480[19] = inst_11391__$1);
(statearr_11480[13] = inst_11399);
return statearr_11480;
})();var statearr_11481_11561 = state_11463__$1;(statearr_11481_11561[2] = null);
(statearr_11481_11561[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 38))
{var inst_11442 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11482_11562 = state_11463__$1;(statearr_11482_11562[2] = inst_11442);
(statearr_11482_11562[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 7))
{var inst_11459 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11483_11563 = state_11463__$1;(statearr_11483_11563[2] = inst_11459);
(statearr_11483_11563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 39))
{var inst_11420 = (state_11463[9]);var inst_11438 = (state_11463[2]);var inst_11439 = cljs.core.next.call(null,inst_11420);var inst_11399 = inst_11439;var inst_11400 = null;var inst_11401 = 0;var inst_11402 = 0;var state_11463__$1 = (function (){var statearr_11484 = state_11463;(statearr_11484[21] = inst_11438);
(statearr_11484[10] = inst_11401);
(statearr_11484[11] = inst_11402);
(statearr_11484[12] = inst_11400);
(statearr_11484[13] = inst_11399);
return statearr_11484;
})();var statearr_11485_11564 = state_11463__$1;(statearr_11485_11564[2] = null);
(statearr_11485_11564[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 8))
{var inst_11343 = (state_11463[14]);var inst_11342 = (state_11463[15]);var inst_11345 = (inst_11343 < inst_11342);var inst_11346 = inst_11345;var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11346))
{var statearr_11486_11565 = state_11463__$1;(statearr_11486_11565[1] = 10);
} else
{var statearr_11487_11566 = state_11463__$1;(statearr_11487_11566[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 40))
{var inst_11429 = (state_11463[18]);var inst_11430 = (state_11463[2]);var inst_11431 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11432 = cljs.core.async.untap_STAR_.call(null,m,inst_11429);var state_11463__$1 = (function (){var statearr_11488 = state_11463;(statearr_11488[22] = inst_11431);
(statearr_11488[23] = inst_11430);
return statearr_11488;
})();var statearr_11489_11567 = state_11463__$1;(statearr_11489_11567[2] = inst_11432);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 9))
{var inst_11388 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11490_11568 = state_11463__$1;(statearr_11490_11568[2] = inst_11388);
(statearr_11490_11568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 41))
{var inst_11429 = (state_11463[18]);var inst_11331 = (state_11463[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11463,40,Object,null,39);var inst_11436 = cljs.core.async.put_BANG_.call(null,inst_11429,inst_11331,done);var state_11463__$1 = state_11463;var statearr_11491_11569 = state_11463__$1;(statearr_11491_11569[2] = inst_11436);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 10))
{var inst_11343 = (state_11463[14]);var inst_11341 = (state_11463[17]);var inst_11349 = cljs.core._nth.call(null,inst_11341,inst_11343);var inst_11350 = cljs.core.nth.call(null,inst_11349,0,null);var inst_11351 = cljs.core.nth.call(null,inst_11349,1,null);var state_11463__$1 = (function (){var statearr_11492 = state_11463;(statearr_11492[24] = inst_11350);
return statearr_11492;
})();if(cljs.core.truth_(inst_11351))
{var statearr_11493_11570 = state_11463__$1;(statearr_11493_11570[1] = 13);
} else
{var statearr_11494_11571 = state_11463__$1;(statearr_11494_11571[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 42))
{var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11463__$1,45,dchan);
} else
{if((state_val_11464 === 11))
{var inst_11340 = (state_11463[16]);var inst_11360 = (state_11463[25]);var inst_11360__$1 = cljs.core.seq.call(null,inst_11340);var state_11463__$1 = (function (){var statearr_11495 = state_11463;(statearr_11495[25] = inst_11360__$1);
return statearr_11495;
})();if(inst_11360__$1)
{var statearr_11496_11572 = state_11463__$1;(statearr_11496_11572[1] = 16);
} else
{var statearr_11497_11573 = state_11463__$1;(statearr_11497_11573[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 43))
{var state_11463__$1 = state_11463;var statearr_11498_11574 = state_11463__$1;(statearr_11498_11574[2] = null);
(statearr_11498_11574[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 12))
{var inst_11386 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11499_11575 = state_11463__$1;(statearr_11499_11575[2] = inst_11386);
(statearr_11499_11575[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 44))
{var inst_11456 = (state_11463[2]);var state_11463__$1 = (function (){var statearr_11500 = state_11463;(statearr_11500[26] = inst_11456);
return statearr_11500;
})();var statearr_11501_11576 = state_11463__$1;(statearr_11501_11576[2] = null);
(statearr_11501_11576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 13))
{var inst_11350 = (state_11463[24]);var inst_11353 = cljs.core.async.close_BANG_.call(null,inst_11350);var state_11463__$1 = state_11463;var statearr_11502_11577 = state_11463__$1;(statearr_11502_11577[2] = inst_11353);
(statearr_11502_11577[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 45))
{var inst_11453 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11506_11578 = state_11463__$1;(statearr_11506_11578[2] = inst_11453);
(statearr_11506_11578[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 14))
{var state_11463__$1 = state_11463;var statearr_11507_11579 = state_11463__$1;(statearr_11507_11579[2] = null);
(statearr_11507_11579[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 15))
{var inst_11343 = (state_11463[14]);var inst_11342 = (state_11463[15]);var inst_11340 = (state_11463[16]);var inst_11341 = (state_11463[17]);var inst_11356 = (state_11463[2]);var inst_11357 = (inst_11343 + 1);var tmp11503 = inst_11342;var tmp11504 = inst_11340;var tmp11505 = inst_11341;var inst_11340__$1 = tmp11504;var inst_11341__$1 = tmp11505;var inst_11342__$1 = tmp11503;var inst_11343__$1 = inst_11357;var state_11463__$1 = (function (){var statearr_11508 = state_11463;(statearr_11508[14] = inst_11343__$1);
(statearr_11508[15] = inst_11342__$1);
(statearr_11508[16] = inst_11340__$1);
(statearr_11508[17] = inst_11341__$1);
(statearr_11508[27] = inst_11356);
return statearr_11508;
})();var statearr_11509_11580 = state_11463__$1;(statearr_11509_11580[2] = null);
(statearr_11509_11580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 16))
{var inst_11360 = (state_11463[25]);var inst_11362 = cljs.core.chunked_seq_QMARK_.call(null,inst_11360);var state_11463__$1 = state_11463;if(inst_11362)
{var statearr_11510_11581 = state_11463__$1;(statearr_11510_11581[1] = 19);
} else
{var statearr_11511_11582 = state_11463__$1;(statearr_11511_11582[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 17))
{var state_11463__$1 = state_11463;var statearr_11512_11583 = state_11463__$1;(statearr_11512_11583[2] = null);
(statearr_11512_11583[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 18))
{var inst_11384 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11513_11584 = state_11463__$1;(statearr_11513_11584[2] = inst_11384);
(statearr_11513_11584[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 19))
{var inst_11360 = (state_11463[25]);var inst_11364 = cljs.core.chunk_first.call(null,inst_11360);var inst_11365 = cljs.core.chunk_rest.call(null,inst_11360);var inst_11366 = cljs.core.count.call(null,inst_11364);var inst_11340 = inst_11365;var inst_11341 = inst_11364;var inst_11342 = inst_11366;var inst_11343 = 0;var state_11463__$1 = (function (){var statearr_11514 = state_11463;(statearr_11514[14] = inst_11343);
(statearr_11514[15] = inst_11342);
(statearr_11514[16] = inst_11340);
(statearr_11514[17] = inst_11341);
return statearr_11514;
})();var statearr_11515_11585 = state_11463__$1;(statearr_11515_11585[2] = null);
(statearr_11515_11585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 20))
{var inst_11360 = (state_11463[25]);var inst_11370 = cljs.core.first.call(null,inst_11360);var inst_11371 = cljs.core.nth.call(null,inst_11370,0,null);var inst_11372 = cljs.core.nth.call(null,inst_11370,1,null);var state_11463__$1 = (function (){var statearr_11516 = state_11463;(statearr_11516[28] = inst_11371);
return statearr_11516;
})();if(cljs.core.truth_(inst_11372))
{var statearr_11517_11586 = state_11463__$1;(statearr_11517_11586[1] = 22);
} else
{var statearr_11518_11587 = state_11463__$1;(statearr_11518_11587[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 21))
{var inst_11381 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11519_11588 = state_11463__$1;(statearr_11519_11588[2] = inst_11381);
(statearr_11519_11588[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 22))
{var inst_11371 = (state_11463[28]);var inst_11374 = cljs.core.async.close_BANG_.call(null,inst_11371);var state_11463__$1 = state_11463;var statearr_11520_11589 = state_11463__$1;(statearr_11520_11589[2] = inst_11374);
(statearr_11520_11589[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 23))
{var state_11463__$1 = state_11463;var statearr_11521_11590 = state_11463__$1;(statearr_11521_11590[2] = null);
(statearr_11521_11590[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 24))
{var inst_11360 = (state_11463[25]);var inst_11377 = (state_11463[2]);var inst_11378 = cljs.core.next.call(null,inst_11360);var inst_11340 = inst_11378;var inst_11341 = null;var inst_11342 = 0;var inst_11343 = 0;var state_11463__$1 = (function (){var statearr_11522 = state_11463;(statearr_11522[14] = inst_11343);
(statearr_11522[15] = inst_11342);
(statearr_11522[16] = inst_11340);
(statearr_11522[17] = inst_11341);
(statearr_11522[29] = inst_11377);
return statearr_11522;
})();var statearr_11523_11591 = state_11463__$1;(statearr_11523_11591[2] = null);
(statearr_11523_11591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 25))
{var inst_11401 = (state_11463[10]);var inst_11402 = (state_11463[11]);var inst_11404 = (inst_11402 < inst_11401);var inst_11405 = inst_11404;var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11405))
{var statearr_11524_11592 = state_11463__$1;(statearr_11524_11592[1] = 27);
} else
{var statearr_11525_11593 = state_11463__$1;(statearr_11525_11593[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 26))
{var inst_11391 = (state_11463[19]);var inst_11449 = (state_11463[2]);var inst_11450 = cljs.core.seq.call(null,inst_11391);var state_11463__$1 = (function (){var statearr_11526 = state_11463;(statearr_11526[30] = inst_11449);
return statearr_11526;
})();if(inst_11450)
{var statearr_11527_11594 = state_11463__$1;(statearr_11527_11594[1] = 42);
} else
{var statearr_11528_11595 = state_11463__$1;(statearr_11528_11595[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 27))
{var inst_11402 = (state_11463[11]);var inst_11400 = (state_11463[12]);var inst_11407 = cljs.core._nth.call(null,inst_11400,inst_11402);var state_11463__$1 = (function (){var statearr_11529 = state_11463;(statearr_11529[8] = inst_11407);
return statearr_11529;
})();var statearr_11530_11596 = state_11463__$1;(statearr_11530_11596[2] = null);
(statearr_11530_11596[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 28))
{var inst_11420 = (state_11463[9]);var inst_11399 = (state_11463[13]);var inst_11420__$1 = cljs.core.seq.call(null,inst_11399);var state_11463__$1 = (function (){var statearr_11534 = state_11463;(statearr_11534[9] = inst_11420__$1);
return statearr_11534;
})();if(inst_11420__$1)
{var statearr_11535_11597 = state_11463__$1;(statearr_11535_11597[1] = 33);
} else
{var statearr_11536_11598 = state_11463__$1;(statearr_11536_11598[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 29))
{var inst_11447 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11537_11599 = state_11463__$1;(statearr_11537_11599[2] = inst_11447);
(statearr_11537_11599[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 30))
{var inst_11401 = (state_11463[10]);var inst_11402 = (state_11463[11]);var inst_11400 = (state_11463[12]);var inst_11399 = (state_11463[13]);var inst_11416 = (state_11463[2]);var inst_11417 = (inst_11402 + 1);var tmp11531 = inst_11401;var tmp11532 = inst_11400;var tmp11533 = inst_11399;var inst_11399__$1 = tmp11533;var inst_11400__$1 = tmp11532;var inst_11401__$1 = tmp11531;var inst_11402__$1 = inst_11417;var state_11463__$1 = (function (){var statearr_11538 = state_11463;(statearr_11538[10] = inst_11401__$1);
(statearr_11538[11] = inst_11402__$1);
(statearr_11538[12] = inst_11400__$1);
(statearr_11538[31] = inst_11416);
(statearr_11538[13] = inst_11399__$1);
return statearr_11538;
})();var statearr_11539_11600 = state_11463__$1;(statearr_11539_11600[2] = null);
(statearr_11539_11600[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 31))
{var inst_11407 = (state_11463[8]);var inst_11408 = (state_11463[2]);var inst_11409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11410 = cljs.core.async.untap_STAR_.call(null,m,inst_11407);var state_11463__$1 = (function (){var statearr_11540 = state_11463;(statearr_11540[32] = inst_11408);
(statearr_11540[33] = inst_11409);
return statearr_11540;
})();var statearr_11541_11601 = state_11463__$1;(statearr_11541_11601[2] = inst_11410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463__$1);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_11545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11545[0] = state_machine__7996__auto__);
(statearr_11545[1] = 1);
return statearr_11545;
});
var state_machine__7996__auto____1 = (function (state_11463){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_11463);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e11546){if((e11546 instanceof Object))
{var ex__7999__auto__ = e11546;var statearr_11547_11602 = state_11463;(statearr_11547_11602[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11603 = state_11463;
state_11463 = G__11603;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_11548 = f__8066__auto__.call(null);(statearr_11548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___11549);
return statearr_11548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
cljs.core.async.Mix = (function (){var obj11605 = {};return obj11605;
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
;var m = (function (){if(typeof cljs.core.async.t11715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11715 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11716){
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
this.meta11716 = meta11716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11715.cljs$lang$type = true;
cljs.core.async.t11715.cljs$lang$ctorStr = "cljs.core.async/t11715";
cljs.core.async.t11715.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11715");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11717){var self__ = this;
var _11717__$1 = this;return self__.meta11716;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11717,meta11716__$1){var self__ = this;
var _11717__$1 = this;return (new cljs.core.async.t11715(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11716__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11715 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11715(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11716){return (new cljs.core.async.t11715(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11716));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11715(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8065__auto___11824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_11782){var state_val_11783 = (state_11782[1]);if((state_val_11783 === 1))
{var inst_11721 = (state_11782[7]);var inst_11721__$1 = calc_state.call(null);var inst_11722 = cljs.core.seq_QMARK_.call(null,inst_11721__$1);var state_11782__$1 = (function (){var statearr_11784 = state_11782;(statearr_11784[7] = inst_11721__$1);
return statearr_11784;
})();if(inst_11722)
{var statearr_11785_11825 = state_11782__$1;(statearr_11785_11825[1] = 2);
} else
{var statearr_11786_11826 = state_11782__$1;(statearr_11786_11826[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 2))
{var inst_11721 = (state_11782[7]);var inst_11724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11721);var state_11782__$1 = state_11782;var statearr_11787_11827 = state_11782__$1;(statearr_11787_11827[2] = inst_11724);
(statearr_11787_11827[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 3))
{var inst_11721 = (state_11782[7]);var state_11782__$1 = state_11782;var statearr_11788_11828 = state_11782__$1;(statearr_11788_11828[2] = inst_11721);
(statearr_11788_11828[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 4))
{var inst_11721 = (state_11782[7]);var inst_11727 = (state_11782[2]);var inst_11728 = cljs.core.get.call(null,inst_11727,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11729 = cljs.core.get.call(null,inst_11727,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11730 = cljs.core.get.call(null,inst_11727,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11731 = inst_11721;var state_11782__$1 = (function (){var statearr_11789 = state_11782;(statearr_11789[8] = inst_11731);
(statearr_11789[9] = inst_11730);
(statearr_11789[10] = inst_11728);
(statearr_11789[11] = inst_11729);
return statearr_11789;
})();var statearr_11790_11829 = state_11782__$1;(statearr_11790_11829[2] = null);
(statearr_11790_11829[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 5))
{var inst_11731 = (state_11782[8]);var inst_11734 = cljs.core.seq_QMARK_.call(null,inst_11731);var state_11782__$1 = state_11782;if(inst_11734)
{var statearr_11791_11830 = state_11782__$1;(statearr_11791_11830[1] = 7);
} else
{var statearr_11792_11831 = state_11782__$1;(statearr_11792_11831[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 6))
{var inst_11780 = (state_11782[2]);var state_11782__$1 = state_11782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11782__$1,inst_11780);
} else
{if((state_val_11783 === 7))
{var inst_11731 = (state_11782[8]);var inst_11736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11731);var state_11782__$1 = state_11782;var statearr_11793_11832 = state_11782__$1;(statearr_11793_11832[2] = inst_11736);
(statearr_11793_11832[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 8))
{var inst_11731 = (state_11782[8]);var state_11782__$1 = state_11782;var statearr_11794_11833 = state_11782__$1;(statearr_11794_11833[2] = inst_11731);
(statearr_11794_11833[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 9))
{var inst_11739 = (state_11782[12]);var inst_11739__$1 = (state_11782[2]);var inst_11740 = cljs.core.get.call(null,inst_11739__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11741 = cljs.core.get.call(null,inst_11739__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11742 = cljs.core.get.call(null,inst_11739__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11782__$1 = (function (){var statearr_11795 = state_11782;(statearr_11795[13] = inst_11741);
(statearr_11795[14] = inst_11742);
(statearr_11795[12] = inst_11739__$1);
return statearr_11795;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11782__$1,10,inst_11740);
} else
{if((state_val_11783 === 10))
{var inst_11747 = (state_11782[15]);var inst_11746 = (state_11782[16]);var inst_11745 = (state_11782[2]);var inst_11746__$1 = cljs.core.nth.call(null,inst_11745,0,null);var inst_11747__$1 = cljs.core.nth.call(null,inst_11745,1,null);var inst_11748 = (inst_11746__$1 == null);var inst_11749 = cljs.core._EQ_.call(null,inst_11747__$1,change);var inst_11750 = (inst_11748) || (inst_11749);var state_11782__$1 = (function (){var statearr_11796 = state_11782;(statearr_11796[15] = inst_11747__$1);
(statearr_11796[16] = inst_11746__$1);
return statearr_11796;
})();if(cljs.core.truth_(inst_11750))
{var statearr_11797_11834 = state_11782__$1;(statearr_11797_11834[1] = 11);
} else
{var statearr_11798_11835 = state_11782__$1;(statearr_11798_11835[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 11))
{var inst_11746 = (state_11782[16]);var inst_11752 = (inst_11746 == null);var state_11782__$1 = state_11782;if(cljs.core.truth_(inst_11752))
{var statearr_11799_11836 = state_11782__$1;(statearr_11799_11836[1] = 14);
} else
{var statearr_11800_11837 = state_11782__$1;(statearr_11800_11837[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 12))
{var inst_11747 = (state_11782[15]);var inst_11761 = (state_11782[17]);var inst_11742 = (state_11782[14]);var inst_11761__$1 = inst_11742.call(null,inst_11747);var state_11782__$1 = (function (){var statearr_11801 = state_11782;(statearr_11801[17] = inst_11761__$1);
return statearr_11801;
})();if(cljs.core.truth_(inst_11761__$1))
{var statearr_11802_11838 = state_11782__$1;(statearr_11802_11838[1] = 17);
} else
{var statearr_11803_11839 = state_11782__$1;(statearr_11803_11839[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 13))
{var inst_11778 = (state_11782[2]);var state_11782__$1 = state_11782;var statearr_11804_11840 = state_11782__$1;(statearr_11804_11840[2] = inst_11778);
(statearr_11804_11840[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 14))
{var inst_11747 = (state_11782[15]);var inst_11754 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11747);var state_11782__$1 = state_11782;var statearr_11805_11841 = state_11782__$1;(statearr_11805_11841[2] = inst_11754);
(statearr_11805_11841[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 15))
{var state_11782__$1 = state_11782;var statearr_11806_11842 = state_11782__$1;(statearr_11806_11842[2] = null);
(statearr_11806_11842[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 16))
{var inst_11757 = (state_11782[2]);var inst_11758 = calc_state.call(null);var inst_11731 = inst_11758;var state_11782__$1 = (function (){var statearr_11807 = state_11782;(statearr_11807[8] = inst_11731);
(statearr_11807[18] = inst_11757);
return statearr_11807;
})();var statearr_11808_11843 = state_11782__$1;(statearr_11808_11843[2] = null);
(statearr_11808_11843[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 17))
{var inst_11761 = (state_11782[17]);var state_11782__$1 = state_11782;var statearr_11809_11844 = state_11782__$1;(statearr_11809_11844[2] = inst_11761);
(statearr_11809_11844[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 18))
{var inst_11747 = (state_11782[15]);var inst_11741 = (state_11782[13]);var inst_11742 = (state_11782[14]);var inst_11764 = cljs.core.empty_QMARK_.call(null,inst_11742);var inst_11765 = inst_11741.call(null,inst_11747);var inst_11766 = cljs.core.not.call(null,inst_11765);var inst_11767 = (inst_11764) && (inst_11766);var state_11782__$1 = state_11782;var statearr_11810_11845 = state_11782__$1;(statearr_11810_11845[2] = inst_11767);
(statearr_11810_11845[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 19))
{var inst_11769 = (state_11782[2]);var state_11782__$1 = state_11782;if(cljs.core.truth_(inst_11769))
{var statearr_11811_11846 = state_11782__$1;(statearr_11811_11846[1] = 20);
} else
{var statearr_11812_11847 = state_11782__$1;(statearr_11812_11847[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 20))
{var inst_11746 = (state_11782[16]);var state_11782__$1 = state_11782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11782__$1,23,out,inst_11746);
} else
{if((state_val_11783 === 21))
{var state_11782__$1 = state_11782;var statearr_11813_11848 = state_11782__$1;(statearr_11813_11848[2] = null);
(statearr_11813_11848[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 22))
{var inst_11739 = (state_11782[12]);var inst_11775 = (state_11782[2]);var inst_11731 = inst_11739;var state_11782__$1 = (function (){var statearr_11814 = state_11782;(statearr_11814[19] = inst_11775);
(statearr_11814[8] = inst_11731);
return statearr_11814;
})();var statearr_11815_11849 = state_11782__$1;(statearr_11815_11849[2] = null);
(statearr_11815_11849[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11783 === 23))
{var inst_11772 = (state_11782[2]);var state_11782__$1 = state_11782;var statearr_11816_11850 = state_11782__$1;(statearr_11816_11850[2] = inst_11772);
(statearr_11816_11850[1] = 22);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_11820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11820[0] = state_machine__7996__auto__);
(statearr_11820[1] = 1);
return statearr_11820;
});
var state_machine__7996__auto____1 = (function (state_11782){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_11782);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e11821){if((e11821 instanceof Object))
{var ex__7999__auto__ = e11821;var statearr_11822_11851 = state_11782;(statearr_11822_11851[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11852 = state_11782;
state_11782 = G__11852;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_11782){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_11782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_11823 = f__8066__auto__.call(null);(statearr_11823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___11824);
return statearr_11823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
cljs.core.async.Pub = (function (){var obj11854 = {};return obj11854;
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
return (function (p1__11855_SHARP_){if(cljs.core.truth_(p1__11855_SHARP_.call(null,topic)))
{return p1__11855_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11855_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11980 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11981){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11981 = meta11981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11980.cljs$lang$type = true;
cljs.core.async.t11980.cljs$lang$ctorStr = "cljs.core.async/t11980";
cljs.core.async.t11980.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11980");
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11980.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11982){var self__ = this;
var _11982__$1 = this;return self__.meta11981;
});})(mults,ensure_mult))
;
cljs.core.async.t11980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11982,meta11981__$1){var self__ = this;
var _11982__$1 = this;return (new cljs.core.async.t11980(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11981__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11980 = ((function (mults,ensure_mult){
return (function __GT_t11980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11981){return (new cljs.core.async.t11980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11981));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11980(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8065__auto___12104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12056){var state_val_12057 = (state_12056[1]);if((state_val_12057 === 1))
{var state_12056__$1 = state_12056;var statearr_12058_12105 = state_12056__$1;(statearr_12058_12105[2] = null);
(statearr_12058_12105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 2))
{var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,4,ch);
} else
{if((state_val_12057 === 3))
{var inst_12054 = (state_12056[2]);var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else
{if((state_val_12057 === 4))
{var inst_11985 = (state_12056[7]);var inst_11985__$1 = (state_12056[2]);var inst_11986 = (inst_11985__$1 == null);var state_12056__$1 = (function (){var statearr_12059 = state_12056;(statearr_12059[7] = inst_11985__$1);
return statearr_12059;
})();if(cljs.core.truth_(inst_11986))
{var statearr_12060_12106 = state_12056__$1;(statearr_12060_12106[1] = 5);
} else
{var statearr_12061_12107 = state_12056__$1;(statearr_12061_12107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 5))
{var inst_11992 = cljs.core.deref.call(null,mults);var inst_11993 = cljs.core.vals.call(null,inst_11992);var inst_11994 = cljs.core.seq.call(null,inst_11993);var inst_11995 = inst_11994;var inst_11996 = null;var inst_11997 = 0;var inst_11998 = 0;var state_12056__$1 = (function (){var statearr_12062 = state_12056;(statearr_12062[8] = inst_11995);
(statearr_12062[9] = inst_11996);
(statearr_12062[10] = inst_11997);
(statearr_12062[11] = inst_11998);
return statearr_12062;
})();var statearr_12063_12108 = state_12056__$1;(statearr_12063_12108[2] = null);
(statearr_12063_12108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 6))
{var inst_12035 = (state_12056[12]);var inst_12033 = (state_12056[13]);var inst_11985 = (state_12056[7]);var inst_12033__$1 = topic_fn.call(null,inst_11985);var inst_12034 = cljs.core.deref.call(null,mults);var inst_12035__$1 = cljs.core.get.call(null,inst_12034,inst_12033__$1);var state_12056__$1 = (function (){var statearr_12064 = state_12056;(statearr_12064[12] = inst_12035__$1);
(statearr_12064[13] = inst_12033__$1);
return statearr_12064;
})();if(cljs.core.truth_(inst_12035__$1))
{var statearr_12065_12109 = state_12056__$1;(statearr_12065_12109[1] = 19);
} else
{var statearr_12066_12110 = state_12056__$1;(statearr_12066_12110[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 7))
{var inst_12052 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12067_12111 = state_12056__$1;(statearr_12067_12111[2] = inst_12052);
(statearr_12067_12111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 8))
{var inst_11997 = (state_12056[10]);var inst_11998 = (state_12056[11]);var inst_12000 = (inst_11998 < inst_11997);var inst_12001 = inst_12000;var state_12056__$1 = state_12056;if(cljs.core.truth_(inst_12001))
{var statearr_12071_12112 = state_12056__$1;(statearr_12071_12112[1] = 10);
} else
{var statearr_12072_12113 = state_12056__$1;(statearr_12072_12113[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 9))
{var inst_12031 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12073_12114 = state_12056__$1;(statearr_12073_12114[2] = inst_12031);
(statearr_12073_12114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 10))
{var inst_11995 = (state_12056[8]);var inst_11996 = (state_12056[9]);var inst_11997 = (state_12056[10]);var inst_11998 = (state_12056[11]);var inst_12003 = cljs.core._nth.call(null,inst_11996,inst_11998);var inst_12004 = cljs.core.async.muxch_STAR_.call(null,inst_12003);var inst_12005 = cljs.core.async.close_BANG_.call(null,inst_12004);var inst_12006 = (inst_11998 + 1);var tmp12068 = inst_11995;var tmp12069 = inst_11996;var tmp12070 = inst_11997;var inst_11995__$1 = tmp12068;var inst_11996__$1 = tmp12069;var inst_11997__$1 = tmp12070;var inst_11998__$1 = inst_12006;var state_12056__$1 = (function (){var statearr_12074 = state_12056;(statearr_12074[8] = inst_11995__$1);
(statearr_12074[9] = inst_11996__$1);
(statearr_12074[10] = inst_11997__$1);
(statearr_12074[11] = inst_11998__$1);
(statearr_12074[14] = inst_12005);
return statearr_12074;
})();var statearr_12075_12115 = state_12056__$1;(statearr_12075_12115[2] = null);
(statearr_12075_12115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 11))
{var inst_11995 = (state_12056[8]);var inst_12009 = (state_12056[15]);var inst_12009__$1 = cljs.core.seq.call(null,inst_11995);var state_12056__$1 = (function (){var statearr_12076 = state_12056;(statearr_12076[15] = inst_12009__$1);
return statearr_12076;
})();if(inst_12009__$1)
{var statearr_12077_12116 = state_12056__$1;(statearr_12077_12116[1] = 13);
} else
{var statearr_12078_12117 = state_12056__$1;(statearr_12078_12117[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 12))
{var inst_12029 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12079_12118 = state_12056__$1;(statearr_12079_12118[2] = inst_12029);
(statearr_12079_12118[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 13))
{var inst_12009 = (state_12056[15]);var inst_12011 = cljs.core.chunked_seq_QMARK_.call(null,inst_12009);var state_12056__$1 = state_12056;if(inst_12011)
{var statearr_12080_12119 = state_12056__$1;(statearr_12080_12119[1] = 16);
} else
{var statearr_12081_12120 = state_12056__$1;(statearr_12081_12120[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 14))
{var state_12056__$1 = state_12056;var statearr_12082_12121 = state_12056__$1;(statearr_12082_12121[2] = null);
(statearr_12082_12121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 15))
{var inst_12027 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12083_12122 = state_12056__$1;(statearr_12083_12122[2] = inst_12027);
(statearr_12083_12122[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 16))
{var inst_12009 = (state_12056[15]);var inst_12013 = cljs.core.chunk_first.call(null,inst_12009);var inst_12014 = cljs.core.chunk_rest.call(null,inst_12009);var inst_12015 = cljs.core.count.call(null,inst_12013);var inst_11995 = inst_12014;var inst_11996 = inst_12013;var inst_11997 = inst_12015;var inst_11998 = 0;var state_12056__$1 = (function (){var statearr_12084 = state_12056;(statearr_12084[8] = inst_11995);
(statearr_12084[9] = inst_11996);
(statearr_12084[10] = inst_11997);
(statearr_12084[11] = inst_11998);
return statearr_12084;
})();var statearr_12085_12123 = state_12056__$1;(statearr_12085_12123[2] = null);
(statearr_12085_12123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 17))
{var inst_12009 = (state_12056[15]);var inst_12018 = cljs.core.first.call(null,inst_12009);var inst_12019 = cljs.core.async.muxch_STAR_.call(null,inst_12018);var inst_12020 = cljs.core.async.close_BANG_.call(null,inst_12019);var inst_12021 = cljs.core.next.call(null,inst_12009);var inst_11995 = inst_12021;var inst_11996 = null;var inst_11997 = 0;var inst_11998 = 0;var state_12056__$1 = (function (){var statearr_12086 = state_12056;(statearr_12086[16] = inst_12020);
(statearr_12086[8] = inst_11995);
(statearr_12086[9] = inst_11996);
(statearr_12086[10] = inst_11997);
(statearr_12086[11] = inst_11998);
return statearr_12086;
})();var statearr_12087_12124 = state_12056__$1;(statearr_12087_12124[2] = null);
(statearr_12087_12124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 18))
{var inst_12024 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12088_12125 = state_12056__$1;(statearr_12088_12125[2] = inst_12024);
(statearr_12088_12125[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 19))
{var state_12056__$1 = state_12056;var statearr_12089_12126 = state_12056__$1;(statearr_12089_12126[2] = null);
(statearr_12089_12126[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 20))
{var state_12056__$1 = state_12056;var statearr_12090_12127 = state_12056__$1;(statearr_12090_12127[2] = null);
(statearr_12090_12127[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 21))
{var inst_12049 = (state_12056[2]);var state_12056__$1 = (function (){var statearr_12091 = state_12056;(statearr_12091[17] = inst_12049);
return statearr_12091;
})();var statearr_12092_12128 = state_12056__$1;(statearr_12092_12128[2] = null);
(statearr_12092_12128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 22))
{var inst_12046 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12093_12129 = state_12056__$1;(statearr_12093_12129[2] = inst_12046);
(statearr_12093_12129[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 23))
{var inst_12033 = (state_12056[13]);var inst_12037 = (state_12056[2]);var inst_12038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12033);var state_12056__$1 = (function (){var statearr_12094 = state_12056;(statearr_12094[18] = inst_12037);
return statearr_12094;
})();var statearr_12095_12130 = state_12056__$1;(statearr_12095_12130[2] = inst_12038);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12057 === 24))
{var inst_12035 = (state_12056[12]);var inst_11985 = (state_12056[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12056,23,Object,null,22);var inst_12042 = cljs.core.async.muxch_STAR_.call(null,inst_12035);var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12056__$1,25,inst_12042,inst_11985);
} else
{if((state_val_12057 === 25))
{var inst_12044 = (state_12056[2]);var state_12056__$1 = state_12056;var statearr_12096_12131 = state_12056__$1;(statearr_12096_12131[2] = inst_12044);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12100[0] = state_machine__7996__auto__);
(statearr_12100[1] = 1);
return statearr_12100;
});
var state_machine__7996__auto____1 = (function (state_12056){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12056);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12101){if((e12101 instanceof Object))
{var ex__7999__auto__ = e12101;var statearr_12102_12132 = state_12056;(statearr_12102_12132[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12133 = state_12056;
state_12056 = G__12133;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12103 = f__8066__auto__.call(null);(statearr_12103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12104);
return statearr_12103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
,cljs.core.range.call(null,cnt));var c__8065__auto___12270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12240){var state_val_12241 = (state_12240[1]);if((state_val_12241 === 1))
{var state_12240__$1 = state_12240;var statearr_12242_12271 = state_12240__$1;(statearr_12242_12271[2] = null);
(statearr_12242_12271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 2))
{var inst_12203 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12204 = 0;var state_12240__$1 = (function (){var statearr_12243 = state_12240;(statearr_12243[7] = inst_12204);
(statearr_12243[8] = inst_12203);
return statearr_12243;
})();var statearr_12244_12272 = state_12240__$1;(statearr_12244_12272[2] = null);
(statearr_12244_12272[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 3))
{var inst_12238 = (state_12240[2]);var state_12240__$1 = state_12240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12240__$1,inst_12238);
} else
{if((state_val_12241 === 4))
{var inst_12204 = (state_12240[7]);var inst_12206 = (inst_12204 < cnt);var state_12240__$1 = state_12240;if(cljs.core.truth_(inst_12206))
{var statearr_12245_12273 = state_12240__$1;(statearr_12245_12273[1] = 6);
} else
{var statearr_12246_12274 = state_12240__$1;(statearr_12246_12274[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 5))
{var inst_12224 = (state_12240[2]);var state_12240__$1 = (function (){var statearr_12247 = state_12240;(statearr_12247[9] = inst_12224);
return statearr_12247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12240__$1,12,dchan);
} else
{if((state_val_12241 === 6))
{var state_12240__$1 = state_12240;var statearr_12248_12275 = state_12240__$1;(statearr_12248_12275[2] = null);
(statearr_12248_12275[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 7))
{var state_12240__$1 = state_12240;var statearr_12249_12276 = state_12240__$1;(statearr_12249_12276[2] = null);
(statearr_12249_12276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 8))
{var inst_12222 = (state_12240[2]);var state_12240__$1 = state_12240;var statearr_12250_12277 = state_12240__$1;(statearr_12250_12277[2] = inst_12222);
(statearr_12250_12277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 9))
{var inst_12204 = (state_12240[7]);var inst_12217 = (state_12240[2]);var inst_12218 = (inst_12204 + 1);var inst_12204__$1 = inst_12218;var state_12240__$1 = (function (){var statearr_12251 = state_12240;(statearr_12251[10] = inst_12217);
(statearr_12251[7] = inst_12204__$1);
return statearr_12251;
})();var statearr_12252_12278 = state_12240__$1;(statearr_12252_12278[2] = null);
(statearr_12252_12278[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 10))
{var inst_12208 = (state_12240[2]);var inst_12209 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12240__$1 = (function (){var statearr_12253 = state_12240;(statearr_12253[11] = inst_12208);
return statearr_12253;
})();var statearr_12254_12279 = state_12240__$1;(statearr_12254_12279[2] = inst_12209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 11))
{var inst_12204 = (state_12240[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12240,10,Object,null,9);var inst_12213 = chs__$1.call(null,inst_12204);var inst_12214 = done.call(null,inst_12204);var inst_12215 = cljs.core.async.take_BANG_.call(null,inst_12213,inst_12214);var state_12240__$1 = state_12240;var statearr_12255_12280 = state_12240__$1;(statearr_12255_12280[2] = inst_12215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 12))
{var inst_12226 = (state_12240[12]);var inst_12226__$1 = (state_12240[2]);var inst_12227 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12226__$1);var state_12240__$1 = (function (){var statearr_12256 = state_12240;(statearr_12256[12] = inst_12226__$1);
return statearr_12256;
})();if(cljs.core.truth_(inst_12227))
{var statearr_12257_12281 = state_12240__$1;(statearr_12257_12281[1] = 13);
} else
{var statearr_12258_12282 = state_12240__$1;(statearr_12258_12282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 13))
{var inst_12229 = cljs.core.async.close_BANG_.call(null,out);var state_12240__$1 = state_12240;var statearr_12259_12283 = state_12240__$1;(statearr_12259_12283[2] = inst_12229);
(statearr_12259_12283[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 14))
{var inst_12226 = (state_12240[12]);var inst_12231 = cljs.core.apply.call(null,f,inst_12226);var state_12240__$1 = state_12240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12240__$1,16,out,inst_12231);
} else
{if((state_val_12241 === 15))
{var inst_12236 = (state_12240[2]);var state_12240__$1 = state_12240;var statearr_12260_12284 = state_12240__$1;(statearr_12260_12284[2] = inst_12236);
(statearr_12260_12284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12241 === 16))
{var inst_12233 = (state_12240[2]);var state_12240__$1 = (function (){var statearr_12261 = state_12240;(statearr_12261[13] = inst_12233);
return statearr_12261;
})();var statearr_12262_12285 = state_12240__$1;(statearr_12262_12285[2] = null);
(statearr_12262_12285[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12266[0] = state_machine__7996__auto__);
(statearr_12266[1] = 1);
return statearr_12266;
});
var state_machine__7996__auto____1 = (function (state_12240){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12240);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12267){if((e12267 instanceof Object))
{var ex__7999__auto__ = e12267;var statearr_12268_12286 = state_12240;(statearr_12268_12286[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12287 = state_12240;
state_12240 = G__12287;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12240){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12269 = f__8066__auto__.call(null);(statearr_12269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12270);
return statearr_12269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___12395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12371){var state_val_12372 = (state_12371[1]);if((state_val_12372 === 1))
{var inst_12342 = cljs.core.vec.call(null,chs);var inst_12343 = inst_12342;var state_12371__$1 = (function (){var statearr_12373 = state_12371;(statearr_12373[7] = inst_12343);
return statearr_12373;
})();var statearr_12374_12396 = state_12371__$1;(statearr_12374_12396[2] = null);
(statearr_12374_12396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 2))
{var inst_12343 = (state_12371[7]);var inst_12345 = cljs.core.count.call(null,inst_12343);var inst_12346 = (inst_12345 > 0);var state_12371__$1 = state_12371;if(cljs.core.truth_(inst_12346))
{var statearr_12375_12397 = state_12371__$1;(statearr_12375_12397[1] = 4);
} else
{var statearr_12376_12398 = state_12371__$1;(statearr_12376_12398[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 3))
{var inst_12369 = (state_12371[2]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12371__$1,inst_12369);
} else
{if((state_val_12372 === 4))
{var inst_12343 = (state_12371[7]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12371__$1,7,inst_12343);
} else
{if((state_val_12372 === 5))
{var inst_12365 = cljs.core.async.close_BANG_.call(null,out);var state_12371__$1 = state_12371;var statearr_12377_12399 = state_12371__$1;(statearr_12377_12399[2] = inst_12365);
(statearr_12377_12399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 6))
{var inst_12367 = (state_12371[2]);var state_12371__$1 = state_12371;var statearr_12378_12400 = state_12371__$1;(statearr_12378_12400[2] = inst_12367);
(statearr_12378_12400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 7))
{var inst_12350 = (state_12371[8]);var inst_12351 = (state_12371[9]);var inst_12350__$1 = (state_12371[2]);var inst_12351__$1 = cljs.core.nth.call(null,inst_12350__$1,0,null);var inst_12352 = cljs.core.nth.call(null,inst_12350__$1,1,null);var inst_12353 = (inst_12351__$1 == null);var state_12371__$1 = (function (){var statearr_12379 = state_12371;(statearr_12379[10] = inst_12352);
(statearr_12379[8] = inst_12350__$1);
(statearr_12379[9] = inst_12351__$1);
return statearr_12379;
})();if(cljs.core.truth_(inst_12353))
{var statearr_12380_12401 = state_12371__$1;(statearr_12380_12401[1] = 8);
} else
{var statearr_12381_12402 = state_12371__$1;(statearr_12381_12402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 8))
{var inst_12352 = (state_12371[10]);var inst_12350 = (state_12371[8]);var inst_12351 = (state_12371[9]);var inst_12343 = (state_12371[7]);var inst_12355 = (function (){var c = inst_12352;var v = inst_12351;var vec__12348 = inst_12350;var cs = inst_12343;return ((function (c,v,vec__12348,cs,inst_12352,inst_12350,inst_12351,inst_12343,state_val_12372){
return (function (p1__12288_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12288_SHARP_);
});
;})(c,v,vec__12348,cs,inst_12352,inst_12350,inst_12351,inst_12343,state_val_12372))
})();var inst_12356 = cljs.core.filterv.call(null,inst_12355,inst_12343);var inst_12343__$1 = inst_12356;var state_12371__$1 = (function (){var statearr_12382 = state_12371;(statearr_12382[7] = inst_12343__$1);
return statearr_12382;
})();var statearr_12383_12403 = state_12371__$1;(statearr_12383_12403[2] = null);
(statearr_12383_12403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 9))
{var inst_12351 = (state_12371[9]);var state_12371__$1 = state_12371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12371__$1,11,out,inst_12351);
} else
{if((state_val_12372 === 10))
{var inst_12363 = (state_12371[2]);var state_12371__$1 = state_12371;var statearr_12385_12404 = state_12371__$1;(statearr_12385_12404[2] = inst_12363);
(statearr_12385_12404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12372 === 11))
{var inst_12343 = (state_12371[7]);var inst_12360 = (state_12371[2]);var tmp12384 = inst_12343;var inst_12343__$1 = tmp12384;var state_12371__$1 = (function (){var statearr_12386 = state_12371;(statearr_12386[7] = inst_12343__$1);
(statearr_12386[11] = inst_12360);
return statearr_12386;
})();var statearr_12387_12405 = state_12371__$1;(statearr_12387_12405[2] = null);
(statearr_12387_12405[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12391 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12391[0] = state_machine__7996__auto__);
(statearr_12391[1] = 1);
return statearr_12391;
});
var state_machine__7996__auto____1 = (function (state_12371){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12371);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12392){if((e12392 instanceof Object))
{var ex__7999__auto__ = e12392;var statearr_12393_12406 = state_12371;(statearr_12393_12406[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12407 = state_12371;
state_12371 = G__12407;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12371){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12394 = f__8066__auto__.call(null);(statearr_12394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12395);
return statearr_12394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___12500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12477){var state_val_12478 = (state_12477[1]);if((state_val_12478 === 1))
{var inst_12454 = 0;var state_12477__$1 = (function (){var statearr_12479 = state_12477;(statearr_12479[7] = inst_12454);
return statearr_12479;
})();var statearr_12480_12501 = state_12477__$1;(statearr_12480_12501[2] = null);
(statearr_12480_12501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 2))
{var inst_12454 = (state_12477[7]);var inst_12456 = (inst_12454 < n);var state_12477__$1 = state_12477;if(cljs.core.truth_(inst_12456))
{var statearr_12481_12502 = state_12477__$1;(statearr_12481_12502[1] = 4);
} else
{var statearr_12482_12503 = state_12477__$1;(statearr_12482_12503[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 3))
{var inst_12474 = (state_12477[2]);var inst_12475 = cljs.core.async.close_BANG_.call(null,out);var state_12477__$1 = (function (){var statearr_12483 = state_12477;(statearr_12483[8] = inst_12474);
return statearr_12483;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12477__$1,inst_12475);
} else
{if((state_val_12478 === 4))
{var state_12477__$1 = state_12477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12477__$1,7,ch);
} else
{if((state_val_12478 === 5))
{var state_12477__$1 = state_12477;var statearr_12484_12504 = state_12477__$1;(statearr_12484_12504[2] = null);
(statearr_12484_12504[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 6))
{var inst_12472 = (state_12477[2]);var state_12477__$1 = state_12477;var statearr_12485_12505 = state_12477__$1;(statearr_12485_12505[2] = inst_12472);
(statearr_12485_12505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 7))
{var inst_12459 = (state_12477[9]);var inst_12459__$1 = (state_12477[2]);var inst_12460 = (inst_12459__$1 == null);var inst_12461 = cljs.core.not.call(null,inst_12460);var state_12477__$1 = (function (){var statearr_12486 = state_12477;(statearr_12486[9] = inst_12459__$1);
return statearr_12486;
})();if(inst_12461)
{var statearr_12487_12506 = state_12477__$1;(statearr_12487_12506[1] = 8);
} else
{var statearr_12488_12507 = state_12477__$1;(statearr_12488_12507[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 8))
{var inst_12459 = (state_12477[9]);var state_12477__$1 = state_12477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12477__$1,11,out,inst_12459);
} else
{if((state_val_12478 === 9))
{var state_12477__$1 = state_12477;var statearr_12489_12508 = state_12477__$1;(statearr_12489_12508[2] = null);
(statearr_12489_12508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 10))
{var inst_12469 = (state_12477[2]);var state_12477__$1 = state_12477;var statearr_12490_12509 = state_12477__$1;(statearr_12490_12509[2] = inst_12469);
(statearr_12490_12509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12478 === 11))
{var inst_12454 = (state_12477[7]);var inst_12464 = (state_12477[2]);var inst_12465 = (inst_12454 + 1);var inst_12454__$1 = inst_12465;var state_12477__$1 = (function (){var statearr_12491 = state_12477;(statearr_12491[10] = inst_12464);
(statearr_12491[7] = inst_12454__$1);
return statearr_12491;
})();var statearr_12492_12510 = state_12477__$1;(statearr_12492_12510[2] = null);
(statearr_12492_12510[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12496 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12496[0] = state_machine__7996__auto__);
(statearr_12496[1] = 1);
return statearr_12496;
});
var state_machine__7996__auto____1 = (function (state_12477){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12477);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12497){if((e12497 instanceof Object))
{var ex__7999__auto__ = e12497;var statearr_12498_12511 = state_12477;(statearr_12498_12511[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12512 = state_12477;
state_12477 = G__12512;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12499 = f__8066__auto__.call(null);(statearr_12499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12500);
return statearr_12499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___12609 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12584){var state_val_12585 = (state_12584[1]);if((state_val_12585 === 1))
{var inst_12561 = null;var state_12584__$1 = (function (){var statearr_12586 = state_12584;(statearr_12586[7] = inst_12561);
return statearr_12586;
})();var statearr_12587_12610 = state_12584__$1;(statearr_12587_12610[2] = null);
(statearr_12587_12610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 2))
{var state_12584__$1 = state_12584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12584__$1,4,ch);
} else
{if((state_val_12585 === 3))
{var inst_12581 = (state_12584[2]);var inst_12582 = cljs.core.async.close_BANG_.call(null,out);var state_12584__$1 = (function (){var statearr_12588 = state_12584;(statearr_12588[8] = inst_12581);
return statearr_12588;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12584__$1,inst_12582);
} else
{if((state_val_12585 === 4))
{var inst_12564 = (state_12584[9]);var inst_12564__$1 = (state_12584[2]);var inst_12565 = (inst_12564__$1 == null);var inst_12566 = cljs.core.not.call(null,inst_12565);var state_12584__$1 = (function (){var statearr_12589 = state_12584;(statearr_12589[9] = inst_12564__$1);
return statearr_12589;
})();if(inst_12566)
{var statearr_12590_12611 = state_12584__$1;(statearr_12590_12611[1] = 5);
} else
{var statearr_12591_12612 = state_12584__$1;(statearr_12591_12612[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 5))
{var inst_12561 = (state_12584[7]);var inst_12564 = (state_12584[9]);var inst_12568 = cljs.core._EQ_.call(null,inst_12564,inst_12561);var state_12584__$1 = state_12584;if(inst_12568)
{var statearr_12592_12613 = state_12584__$1;(statearr_12592_12613[1] = 8);
} else
{var statearr_12593_12614 = state_12584__$1;(statearr_12593_12614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 6))
{var state_12584__$1 = state_12584;var statearr_12595_12615 = state_12584__$1;(statearr_12595_12615[2] = null);
(statearr_12595_12615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 7))
{var inst_12579 = (state_12584[2]);var state_12584__$1 = state_12584;var statearr_12596_12616 = state_12584__$1;(statearr_12596_12616[2] = inst_12579);
(statearr_12596_12616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 8))
{var inst_12561 = (state_12584[7]);var tmp12594 = inst_12561;var inst_12561__$1 = tmp12594;var state_12584__$1 = (function (){var statearr_12597 = state_12584;(statearr_12597[7] = inst_12561__$1);
return statearr_12597;
})();var statearr_12598_12617 = state_12584__$1;(statearr_12598_12617[2] = null);
(statearr_12598_12617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 9))
{var inst_12564 = (state_12584[9]);var state_12584__$1 = state_12584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12584__$1,11,out,inst_12564);
} else
{if((state_val_12585 === 10))
{var inst_12576 = (state_12584[2]);var state_12584__$1 = state_12584;var statearr_12599_12618 = state_12584__$1;(statearr_12599_12618[2] = inst_12576);
(statearr_12599_12618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12585 === 11))
{var inst_12564 = (state_12584[9]);var inst_12573 = (state_12584[2]);var inst_12561 = inst_12564;var state_12584__$1 = (function (){var statearr_12600 = state_12584;(statearr_12600[7] = inst_12561);
(statearr_12600[10] = inst_12573);
return statearr_12600;
})();var statearr_12601_12619 = state_12584__$1;(statearr_12601_12619[2] = null);
(statearr_12601_12619[1] = 2);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12605 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12605[0] = state_machine__7996__auto__);
(statearr_12605[1] = 1);
return statearr_12605;
});
var state_machine__7996__auto____1 = (function (state_12584){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12584);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12606){if((e12606 instanceof Object))
{var ex__7999__auto__ = e12606;var statearr_12607_12620 = state_12584;(statearr_12607_12620[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12621 = state_12584;
state_12584 = G__12621;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12584){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12608 = f__8066__auto__.call(null);(statearr_12608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12609);
return statearr_12608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___12756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12726){var state_val_12727 = (state_12726[1]);if((state_val_12727 === 1))
{var inst_12689 = (new Array(n));var inst_12690 = inst_12689;var inst_12691 = 0;var state_12726__$1 = (function (){var statearr_12728 = state_12726;(statearr_12728[7] = inst_12691);
(statearr_12728[8] = inst_12690);
return statearr_12728;
})();var statearr_12729_12757 = state_12726__$1;(statearr_12729_12757[2] = null);
(statearr_12729_12757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 2))
{var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12726__$1,4,ch);
} else
{if((state_val_12727 === 3))
{var inst_12724 = (state_12726[2]);var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12726__$1,inst_12724);
} else
{if((state_val_12727 === 4))
{var inst_12694 = (state_12726[9]);var inst_12694__$1 = (state_12726[2]);var inst_12695 = (inst_12694__$1 == null);var inst_12696 = cljs.core.not.call(null,inst_12695);var state_12726__$1 = (function (){var statearr_12730 = state_12726;(statearr_12730[9] = inst_12694__$1);
return statearr_12730;
})();if(inst_12696)
{var statearr_12731_12758 = state_12726__$1;(statearr_12731_12758[1] = 5);
} else
{var statearr_12732_12759 = state_12726__$1;(statearr_12732_12759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 5))
{var inst_12699 = (state_12726[10]);var inst_12694 = (state_12726[9]);var inst_12691 = (state_12726[7]);var inst_12690 = (state_12726[8]);var inst_12698 = (inst_12690[inst_12691] = inst_12694);var inst_12699__$1 = (inst_12691 + 1);var inst_12700 = (inst_12699__$1 < n);var state_12726__$1 = (function (){var statearr_12733 = state_12726;(statearr_12733[10] = inst_12699__$1);
(statearr_12733[11] = inst_12698);
return statearr_12733;
})();if(cljs.core.truth_(inst_12700))
{var statearr_12734_12760 = state_12726__$1;(statearr_12734_12760[1] = 8);
} else
{var statearr_12735_12761 = state_12726__$1;(statearr_12735_12761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 6))
{var inst_12691 = (state_12726[7]);var inst_12712 = (inst_12691 > 0);var state_12726__$1 = state_12726;if(cljs.core.truth_(inst_12712))
{var statearr_12737_12762 = state_12726__$1;(statearr_12737_12762[1] = 12);
} else
{var statearr_12738_12763 = state_12726__$1;(statearr_12738_12763[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 7))
{var inst_12722 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12739_12764 = state_12726__$1;(statearr_12739_12764[2] = inst_12722);
(statearr_12739_12764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 8))
{var inst_12699 = (state_12726[10]);var inst_12690 = (state_12726[8]);var tmp12736 = inst_12690;var inst_12690__$1 = tmp12736;var inst_12691 = inst_12699;var state_12726__$1 = (function (){var statearr_12740 = state_12726;(statearr_12740[7] = inst_12691);
(statearr_12740[8] = inst_12690__$1);
return statearr_12740;
})();var statearr_12741_12765 = state_12726__$1;(statearr_12741_12765[2] = null);
(statearr_12741_12765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 9))
{var inst_12690 = (state_12726[8]);var inst_12704 = cljs.core.vec.call(null,inst_12690);var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,11,out,inst_12704);
} else
{if((state_val_12727 === 10))
{var inst_12710 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12742_12766 = state_12726__$1;(statearr_12742_12766[2] = inst_12710);
(statearr_12742_12766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 11))
{var inst_12706 = (state_12726[2]);var inst_12707 = (new Array(n));var inst_12690 = inst_12707;var inst_12691 = 0;var state_12726__$1 = (function (){var statearr_12743 = state_12726;(statearr_12743[7] = inst_12691);
(statearr_12743[12] = inst_12706);
(statearr_12743[8] = inst_12690);
return statearr_12743;
})();var statearr_12744_12767 = state_12726__$1;(statearr_12744_12767[2] = null);
(statearr_12744_12767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 12))
{var inst_12690 = (state_12726[8]);var inst_12714 = cljs.core.vec.call(null,inst_12690);var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,15,out,inst_12714);
} else
{if((state_val_12727 === 13))
{var state_12726__$1 = state_12726;var statearr_12745_12768 = state_12726__$1;(statearr_12745_12768[2] = null);
(statearr_12745_12768[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 14))
{var inst_12719 = (state_12726[2]);var inst_12720 = cljs.core.async.close_BANG_.call(null,out);var state_12726__$1 = (function (){var statearr_12746 = state_12726;(statearr_12746[13] = inst_12719);
return statearr_12746;
})();var statearr_12747_12769 = state_12726__$1;(statearr_12747_12769[2] = inst_12720);
(statearr_12747_12769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 15))
{var inst_12716 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12748_12770 = state_12726__$1;(statearr_12748_12770[2] = inst_12716);
(statearr_12748_12770[1] = 14);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12752[0] = state_machine__7996__auto__);
(statearr_12752[1] = 1);
return statearr_12752;
});
var state_machine__7996__auto____1 = (function (state_12726){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12726);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12753){if((e12753 instanceof Object))
{var ex__7999__auto__ = e12753;var statearr_12754_12771 = state_12726;(statearr_12754_12771[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12772 = state_12726;
state_12726 = G__12772;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12755 = f__8066__auto__.call(null);(statearr_12755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12756);
return statearr_12755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8065__auto___12915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8066__auto__ = (function (){var switch__7995__auto__ = (function (state_12885){var state_val_12886 = (state_12885[1]);if((state_val_12886 === 1))
{var inst_12844 = [];var inst_12845 = inst_12844;var inst_12846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12885__$1 = (function (){var statearr_12887 = state_12885;(statearr_12887[7] = inst_12846);
(statearr_12887[8] = inst_12845);
return statearr_12887;
})();var statearr_12888_12916 = state_12885__$1;(statearr_12888_12916[2] = null);
(statearr_12888_12916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 2))
{var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12885__$1,4,ch);
} else
{if((state_val_12886 === 3))
{var inst_12883 = (state_12885[2]);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12885__$1,inst_12883);
} else
{if((state_val_12886 === 4))
{var inst_12849 = (state_12885[9]);var inst_12849__$1 = (state_12885[2]);var inst_12850 = (inst_12849__$1 == null);var inst_12851 = cljs.core.not.call(null,inst_12850);var state_12885__$1 = (function (){var statearr_12889 = state_12885;(statearr_12889[9] = inst_12849__$1);
return statearr_12889;
})();if(inst_12851)
{var statearr_12890_12917 = state_12885__$1;(statearr_12890_12917[1] = 5);
} else
{var statearr_12891_12918 = state_12885__$1;(statearr_12891_12918[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 5))
{var inst_12846 = (state_12885[7]);var inst_12849 = (state_12885[9]);var inst_12853 = (state_12885[10]);var inst_12853__$1 = f.call(null,inst_12849);var inst_12854 = cljs.core._EQ_.call(null,inst_12853__$1,inst_12846);var inst_12855 = cljs.core.keyword_identical_QMARK_.call(null,inst_12846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12856 = (inst_12854) || (inst_12855);var state_12885__$1 = (function (){var statearr_12892 = state_12885;(statearr_12892[10] = inst_12853__$1);
return statearr_12892;
})();if(cljs.core.truth_(inst_12856))
{var statearr_12893_12919 = state_12885__$1;(statearr_12893_12919[1] = 8);
} else
{var statearr_12894_12920 = state_12885__$1;(statearr_12894_12920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 6))
{var inst_12845 = (state_12885[8]);var inst_12870 = inst_12845.length;var inst_12871 = (inst_12870 > 0);var state_12885__$1 = state_12885;if(cljs.core.truth_(inst_12871))
{var statearr_12896_12921 = state_12885__$1;(statearr_12896_12921[1] = 12);
} else
{var statearr_12897_12922 = state_12885__$1;(statearr_12897_12922[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 7))
{var inst_12881 = (state_12885[2]);var state_12885__$1 = state_12885;var statearr_12898_12923 = state_12885__$1;(statearr_12898_12923[2] = inst_12881);
(statearr_12898_12923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 8))
{var inst_12849 = (state_12885[9]);var inst_12853 = (state_12885[10]);var inst_12845 = (state_12885[8]);var inst_12858 = inst_12845.push(inst_12849);var tmp12895 = inst_12845;var inst_12845__$1 = tmp12895;var inst_12846 = inst_12853;var state_12885__$1 = (function (){var statearr_12899 = state_12885;(statearr_12899[7] = inst_12846);
(statearr_12899[11] = inst_12858);
(statearr_12899[8] = inst_12845__$1);
return statearr_12899;
})();var statearr_12900_12924 = state_12885__$1;(statearr_12900_12924[2] = null);
(statearr_12900_12924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 9))
{var inst_12845 = (state_12885[8]);var inst_12861 = cljs.core.vec.call(null,inst_12845);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12885__$1,11,out,inst_12861);
} else
{if((state_val_12886 === 10))
{var inst_12868 = (state_12885[2]);var state_12885__$1 = state_12885;var statearr_12901_12925 = state_12885__$1;(statearr_12901_12925[2] = inst_12868);
(statearr_12901_12925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 11))
{var inst_12849 = (state_12885[9]);var inst_12853 = (state_12885[10]);var inst_12863 = (state_12885[2]);var inst_12864 = [];var inst_12865 = inst_12864.push(inst_12849);var inst_12845 = inst_12864;var inst_12846 = inst_12853;var state_12885__$1 = (function (){var statearr_12902 = state_12885;(statearr_12902[12] = inst_12865);
(statearr_12902[7] = inst_12846);
(statearr_12902[13] = inst_12863);
(statearr_12902[8] = inst_12845);
return statearr_12902;
})();var statearr_12903_12926 = state_12885__$1;(statearr_12903_12926[2] = null);
(statearr_12903_12926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 12))
{var inst_12845 = (state_12885[8]);var inst_12873 = cljs.core.vec.call(null,inst_12845);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12885__$1,15,out,inst_12873);
} else
{if((state_val_12886 === 13))
{var state_12885__$1 = state_12885;var statearr_12904_12927 = state_12885__$1;(statearr_12904_12927[2] = null);
(statearr_12904_12927[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 14))
{var inst_12878 = (state_12885[2]);var inst_12879 = cljs.core.async.close_BANG_.call(null,out);var state_12885__$1 = (function (){var statearr_12905 = state_12885;(statearr_12905[14] = inst_12878);
return statearr_12905;
})();var statearr_12906_12928 = state_12885__$1;(statearr_12906_12928[2] = inst_12879);
(statearr_12906_12928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 15))
{var inst_12875 = (state_12885[2]);var state_12885__$1 = state_12885;var statearr_12907_12929 = state_12885__$1;(statearr_12907_12929[2] = inst_12875);
(statearr_12907_12929[1] = 14);
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
});return ((function (switch__7995__auto__){
return (function() {
var state_machine__7996__auto__ = null;
var state_machine__7996__auto____0 = (function (){var statearr_12911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12911[0] = state_machine__7996__auto__);
(statearr_12911[1] = 1);
return statearr_12911;
});
var state_machine__7996__auto____1 = (function (state_12885){while(true){
var ret_value__7997__auto__ = (function (){try{while(true){
var result__7998__auto__ = switch__7995__auto__.call(null,state_12885);if(cljs.core.keyword_identical_QMARK_.call(null,result__7998__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7998__auto__;
}
break;
}
}catch (e12912){if((e12912 instanceof Object))
{var ex__7999__auto__ = e12912;var statearr_12913_12930 = state_12885;(statearr_12913_12930[5] = ex__7999__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7997__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12931 = state_12885;
state_12885 = G__12931;
continue;
}
} else
{return ret_value__7997__auto__;
}
break;
}
});
state_machine__7996__auto__ = function(state_12885){
switch(arguments.length){
case 0:
return state_machine__7996__auto____0.call(this);
case 1:
return state_machine__7996__auto____1.call(this,state_12885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7996__auto____0;
state_machine__7996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7996__auto____1;
return state_machine__7996__auto__;
})()
;})(switch__7995__auto__))
})();var state__8067__auto__ = (function (){var statearr_12914 = f__8066__auto__.call(null);(statearr_12914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8065__auto___12915);
return statearr_12914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8067__auto__);
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