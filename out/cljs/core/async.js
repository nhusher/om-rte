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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10985 = (function (f,fn_handler,meta10986){
this.f = f;
this.fn_handler = fn_handler;
this.meta10986 = meta10986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10985.cljs$lang$type = true;
cljs.core.async.t10985.cljs$lang$ctorStr = "cljs.core.async/t10985";
cljs.core.async.t10985.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10985");
});
cljs.core.async.t10985.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10987){var self__ = this;
var _10987__$1 = this;return self__.meta10986;
});
cljs.core.async.t10985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10987,meta10986__$1){var self__ = this;
var _10987__$1 = this;return (new cljs.core.async.t10985(self__.f,self__.fn_handler,meta10986__$1));
});
cljs.core.async.__GT_t10985 = (function __GT_t10985(f__$1,fn_handler__$1,meta10986){return (new cljs.core.async.t10985(f__$1,fn_handler__$1,meta10986));
});
}
return (new cljs.core.async.t10985(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10989 = buff;if(G__10989)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10989.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10989.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10989);
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
{var val_10990 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10990);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10990);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10991 = n;var x_10992 = 0;while(true){
if((x_10992 < n__4291__auto___10991))
{(a[x_10992] = 0);
{
var G__10993 = (x_10992 + 1);
x_10992 = G__10993;
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
var G__10994 = (i + 1);
i = G__10994;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10998 = (function (flag,alt_flag,meta10999){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10999 = meta10999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10998.cljs$lang$type = true;
cljs.core.async.t10998.cljs$lang$ctorStr = "cljs.core.async/t10998";
cljs.core.async.t10998.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10998");
});
cljs.core.async.t10998.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11000){var self__ = this;
var _11000__$1 = this;return self__.meta10999;
});
cljs.core.async.t10998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11000,meta10999__$1){var self__ = this;
var _11000__$1 = this;return (new cljs.core.async.t10998(self__.flag,self__.alt_flag,meta10999__$1));
});
cljs.core.async.__GT_t10998 = (function __GT_t10998(flag__$1,alt_flag__$1,meta10999){return (new cljs.core.async.t10998(flag__$1,alt_flag__$1,meta10999));
});
}
return (new cljs.core.async.t10998(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11004 = (function (cb,flag,alt_handler,meta11005){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11005 = meta11005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11004.cljs$lang$type = true;
cljs.core.async.t11004.cljs$lang$ctorStr = "cljs.core.async/t11004";
cljs.core.async.t11004.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11004");
});
cljs.core.async.t11004.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11006){var self__ = this;
var _11006__$1 = this;return self__.meta11005;
});
cljs.core.async.t11004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11006,meta11005__$1){var self__ = this;
var _11006__$1 = this;return (new cljs.core.async.t11004(self__.cb,self__.flag,self__.alt_handler,meta11005__$1));
});
cljs.core.async.__GT_t11004 = (function __GT_t11004(cb__$1,flag__$1,alt_handler__$1,meta11005){return (new cljs.core.async.t11004(cb__$1,flag__$1,alt_handler__$1,meta11005));
});
}
return (new cljs.core.async.t11004(cb,flag,alt_handler,null));
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
return (function (p1__11007_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11007_SHARP_,port], null));
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
var G__11008 = (i + 1);
i = G__11008;
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
var alts_BANG___delegate = function (ports,p__11009){var map__11011 = p__11009;var map__11011__$1 = ((cljs.core.seq_QMARK_.call(null,map__11011))?cljs.core.apply.call(null,cljs.core.hash_map,map__11011):map__11011);var opts = map__11011__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11009 = null;if (arguments.length > 1) {
  p__11009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11009);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11012){
var ports = cljs.core.first(arglist__11012);
var p__11009 = cljs.core.rest(arglist__11012);
return alts_BANG___delegate(ports,p__11009);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11020 = (function (ch,f,map_LT_,meta11021){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11021 = meta11021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11020.cljs$lang$type = true;
cljs.core.async.t11020.cljs$lang$ctorStr = "cljs.core.async/t11020";
cljs.core.async.t11020.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11020");
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11023 = (function (fn1,_,meta11021,ch,f,map_LT_,meta11024){
this.fn1 = fn1;
this._ = _;
this.meta11021 = meta11021;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11024 = meta11024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11023.cljs$lang$type = true;
cljs.core.async.t11023.cljs$lang$ctorStr = "cljs.core.async/t11023";
cljs.core.async.t11023.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11023");
});
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11013_SHARP_){return f1.call(null,(((p1__11013_SHARP_ == null))?null:self__.f.call(null,p1__11013_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11025){var self__ = this;
var _11025__$1 = this;return self__.meta11024;
});
cljs.core.async.t11023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11025,meta11024__$1){var self__ = this;
var _11025__$1 = this;return (new cljs.core.async.t11023(self__.fn1,self__._,self__.meta11021,self__.ch,self__.f,self__.map_LT_,meta11024__$1));
});
cljs.core.async.__GT_t11023 = (function __GT_t11023(fn1__$1,___$2,meta11021__$1,ch__$2,f__$2,map_LT___$2,meta11024){return (new cljs.core.async.t11023(fn1__$1,___$2,meta11021__$1,ch__$2,f__$2,map_LT___$2,meta11024));
});
}
return (new cljs.core.async.t11023(fn1,___$1,self__.meta11021,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11022){var self__ = this;
var _11022__$1 = this;return self__.meta11021;
});
cljs.core.async.t11020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11022,meta11021__$1){var self__ = this;
var _11022__$1 = this;return (new cljs.core.async.t11020(self__.ch,self__.f,self__.map_LT_,meta11021__$1));
});
cljs.core.async.__GT_t11020 = (function __GT_t11020(ch__$1,f__$1,map_LT___$1,meta11021){return (new cljs.core.async.t11020(ch__$1,f__$1,map_LT___$1,meta11021));
});
}
return (new cljs.core.async.t11020(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11029 = (function (ch,f,map_GT_,meta11030){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11030 = meta11030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11029.cljs$lang$type = true;
cljs.core.async.t11029.cljs$lang$ctorStr = "cljs.core.async/t11029";
cljs.core.async.t11029.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11029");
});
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11031){var self__ = this;
var _11031__$1 = this;return self__.meta11030;
});
cljs.core.async.t11029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11031,meta11030__$1){var self__ = this;
var _11031__$1 = this;return (new cljs.core.async.t11029(self__.ch,self__.f,self__.map_GT_,meta11030__$1));
});
cljs.core.async.__GT_t11029 = (function __GT_t11029(ch__$1,f__$1,map_GT___$1,meta11030){return (new cljs.core.async.t11029(ch__$1,f__$1,map_GT___$1,meta11030));
});
}
return (new cljs.core.async.t11029(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11035 = (function (ch,p,filter_GT_,meta11036){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11036 = meta11036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11035.cljs$lang$type = true;
cljs.core.async.t11035.cljs$lang$ctorStr = "cljs.core.async/t11035";
cljs.core.async.t11035.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11035");
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11037){var self__ = this;
var _11037__$1 = this;return self__.meta11036;
});
cljs.core.async.t11035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11037,meta11036__$1){var self__ = this;
var _11037__$1 = this;return (new cljs.core.async.t11035(self__.ch,self__.p,self__.filter_GT_,meta11036__$1));
});
cljs.core.async.__GT_t11035 = (function __GT_t11035(ch__$1,p__$1,filter_GT___$1,meta11036){return (new cljs.core.async.t11035(ch__$1,p__$1,filter_GT___$1,meta11036));
});
}
return (new cljs.core.async.t11035(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___11120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11099){var state_val_11100 = (state_11099[1]);if((state_val_11100 === 1))
{var state_11099__$1 = state_11099;var statearr_11101_11121 = state_11099__$1;(statearr_11101_11121[2] = null);
(statearr_11101_11121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 2))
{var state_11099__$1 = state_11099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11099__$1,4,ch);
} else
{if((state_val_11100 === 3))
{var inst_11097 = (state_11099[2]);var state_11099__$1 = state_11099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11099__$1,inst_11097);
} else
{if((state_val_11100 === 4))
{var inst_11081 = (state_11099[7]);var inst_11081__$1 = (state_11099[2]);var inst_11082 = (inst_11081__$1 == null);var state_11099__$1 = (function (){var statearr_11102 = state_11099;(statearr_11102[7] = inst_11081__$1);
return statearr_11102;
})();if(cljs.core.truth_(inst_11082))
{var statearr_11103_11122 = state_11099__$1;(statearr_11103_11122[1] = 5);
} else
{var statearr_11104_11123 = state_11099__$1;(statearr_11104_11123[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 5))
{var inst_11084 = cljs.core.async.close_BANG_.call(null,out);var state_11099__$1 = state_11099;var statearr_11105_11124 = state_11099__$1;(statearr_11105_11124[2] = inst_11084);
(statearr_11105_11124[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 6))
{var inst_11081 = (state_11099[7]);var inst_11086 = p.call(null,inst_11081);var state_11099__$1 = state_11099;if(cljs.core.truth_(inst_11086))
{var statearr_11106_11125 = state_11099__$1;(statearr_11106_11125[1] = 8);
} else
{var statearr_11107_11126 = state_11099__$1;(statearr_11107_11126[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 7))
{var inst_11095 = (state_11099[2]);var state_11099__$1 = state_11099;var statearr_11108_11127 = state_11099__$1;(statearr_11108_11127[2] = inst_11095);
(statearr_11108_11127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 8))
{var inst_11081 = (state_11099[7]);var state_11099__$1 = state_11099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11099__$1,11,out,inst_11081);
} else
{if((state_val_11100 === 9))
{var state_11099__$1 = state_11099;var statearr_11109_11128 = state_11099__$1;(statearr_11109_11128[2] = null);
(statearr_11109_11128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 10))
{var inst_11092 = (state_11099[2]);var state_11099__$1 = (function (){var statearr_11110 = state_11099;(statearr_11110[8] = inst_11092);
return statearr_11110;
})();var statearr_11111_11129 = state_11099__$1;(statearr_11111_11129[2] = null);
(statearr_11111_11129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11100 === 11))
{var inst_11089 = (state_11099[2]);var state_11099__$1 = state_11099;var statearr_11112_11130 = state_11099__$1;(statearr_11112_11130[2] = inst_11089);
(statearr_11112_11130[1] = 10);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_11116 = [null,null,null,null,null,null,null,null,null];(statearr_11116[0] = state_machine__6203__auto__);
(statearr_11116[1] = 1);
return statearr_11116;
});
var state_machine__6203__auto____1 = (function (state_11099){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11117){if((e11117 instanceof Object))
{var ex__6206__auto__ = e11117;var statearr_11118_11131 = state_11099;(statearr_11118_11131[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11132 = state_11099;
state_11099 = G__11132;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11099){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11119 = f__6218__auto__.call(null);(statearr_11119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___11120);
return statearr_11119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6217__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11284){var state_val_11285 = (state_11284[1]);if((state_val_11285 === 1))
{var state_11284__$1 = state_11284;var statearr_11286_11323 = state_11284__$1;(statearr_11286_11323[2] = null);
(statearr_11286_11323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 2))
{var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11284__$1,4,in$);
} else
{if((state_val_11285 === 3))
{var inst_11282 = (state_11284[2]);var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11284__$1,inst_11282);
} else
{if((state_val_11285 === 4))
{var inst_11230 = (state_11284[7]);var inst_11230__$1 = (state_11284[2]);var inst_11231 = (inst_11230__$1 == null);var state_11284__$1 = (function (){var statearr_11287 = state_11284;(statearr_11287[7] = inst_11230__$1);
return statearr_11287;
})();if(cljs.core.truth_(inst_11231))
{var statearr_11288_11324 = state_11284__$1;(statearr_11288_11324[1] = 5);
} else
{var statearr_11289_11325 = state_11284__$1;(statearr_11289_11325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 5))
{var inst_11233 = cljs.core.async.close_BANG_.call(null,out);var state_11284__$1 = state_11284;var statearr_11290_11326 = state_11284__$1;(statearr_11290_11326[2] = inst_11233);
(statearr_11290_11326[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 6))
{var inst_11230 = (state_11284[7]);var inst_11235 = f.call(null,inst_11230);var inst_11240 = cljs.core.seq.call(null,inst_11235);var inst_11241 = inst_11240;var inst_11242 = null;var inst_11243 = 0;var inst_11244 = 0;var state_11284__$1 = (function (){var statearr_11291 = state_11284;(statearr_11291[8] = inst_11244);
(statearr_11291[9] = inst_11243);
(statearr_11291[10] = inst_11241);
(statearr_11291[11] = inst_11242);
return statearr_11291;
})();var statearr_11292_11327 = state_11284__$1;(statearr_11292_11327[2] = null);
(statearr_11292_11327[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 7))
{var inst_11280 = (state_11284[2]);var state_11284__$1 = state_11284;var statearr_11293_11328 = state_11284__$1;(statearr_11293_11328[2] = inst_11280);
(statearr_11293_11328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 8))
{var inst_11244 = (state_11284[8]);var inst_11243 = (state_11284[9]);var inst_11246 = (inst_11244 < inst_11243);var inst_11247 = inst_11246;var state_11284__$1 = state_11284;if(cljs.core.truth_(inst_11247))
{var statearr_11294_11329 = state_11284__$1;(statearr_11294_11329[1] = 10);
} else
{var statearr_11295_11330 = state_11284__$1;(statearr_11295_11330[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 9))
{var inst_11277 = (state_11284[2]);var state_11284__$1 = (function (){var statearr_11296 = state_11284;(statearr_11296[12] = inst_11277);
return statearr_11296;
})();var statearr_11297_11331 = state_11284__$1;(statearr_11297_11331[2] = null);
(statearr_11297_11331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 10))
{var inst_11244 = (state_11284[8]);var inst_11242 = (state_11284[11]);var inst_11249 = cljs.core._nth.call(null,inst_11242,inst_11244);var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11284__$1,13,out,inst_11249);
} else
{if((state_val_11285 === 11))
{var inst_11255 = (state_11284[13]);var inst_11241 = (state_11284[10]);var inst_11255__$1 = cljs.core.seq.call(null,inst_11241);var state_11284__$1 = (function (){var statearr_11301 = state_11284;(statearr_11301[13] = inst_11255__$1);
return statearr_11301;
})();if(inst_11255__$1)
{var statearr_11302_11332 = state_11284__$1;(statearr_11302_11332[1] = 14);
} else
{var statearr_11303_11333 = state_11284__$1;(statearr_11303_11333[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 12))
{var inst_11275 = (state_11284[2]);var state_11284__$1 = state_11284;var statearr_11304_11334 = state_11284__$1;(statearr_11304_11334[2] = inst_11275);
(statearr_11304_11334[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 13))
{var inst_11244 = (state_11284[8]);var inst_11243 = (state_11284[9]);var inst_11241 = (state_11284[10]);var inst_11242 = (state_11284[11]);var inst_11251 = (state_11284[2]);var inst_11252 = (inst_11244 + 1);var tmp11298 = inst_11243;var tmp11299 = inst_11241;var tmp11300 = inst_11242;var inst_11241__$1 = tmp11299;var inst_11242__$1 = tmp11300;var inst_11243__$1 = tmp11298;var inst_11244__$1 = inst_11252;var state_11284__$1 = (function (){var statearr_11305 = state_11284;(statearr_11305[14] = inst_11251);
(statearr_11305[8] = inst_11244__$1);
(statearr_11305[9] = inst_11243__$1);
(statearr_11305[10] = inst_11241__$1);
(statearr_11305[11] = inst_11242__$1);
return statearr_11305;
})();var statearr_11306_11335 = state_11284__$1;(statearr_11306_11335[2] = null);
(statearr_11306_11335[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 14))
{var inst_11255 = (state_11284[13]);var inst_11257 = cljs.core.chunked_seq_QMARK_.call(null,inst_11255);var state_11284__$1 = state_11284;if(inst_11257)
{var statearr_11307_11336 = state_11284__$1;(statearr_11307_11336[1] = 17);
} else
{var statearr_11308_11337 = state_11284__$1;(statearr_11308_11337[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 15))
{var state_11284__$1 = state_11284;var statearr_11309_11338 = state_11284__$1;(statearr_11309_11338[2] = null);
(statearr_11309_11338[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 16))
{var inst_11273 = (state_11284[2]);var state_11284__$1 = state_11284;var statearr_11310_11339 = state_11284__$1;(statearr_11310_11339[2] = inst_11273);
(statearr_11310_11339[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 17))
{var inst_11255 = (state_11284[13]);var inst_11259 = cljs.core.chunk_first.call(null,inst_11255);var inst_11260 = cljs.core.chunk_rest.call(null,inst_11255);var inst_11261 = cljs.core.count.call(null,inst_11259);var inst_11241 = inst_11260;var inst_11242 = inst_11259;var inst_11243 = inst_11261;var inst_11244 = 0;var state_11284__$1 = (function (){var statearr_11311 = state_11284;(statearr_11311[8] = inst_11244);
(statearr_11311[9] = inst_11243);
(statearr_11311[10] = inst_11241);
(statearr_11311[11] = inst_11242);
return statearr_11311;
})();var statearr_11312_11340 = state_11284__$1;(statearr_11312_11340[2] = null);
(statearr_11312_11340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 18))
{var inst_11255 = (state_11284[13]);var inst_11264 = cljs.core.first.call(null,inst_11255);var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11284__$1,20,out,inst_11264);
} else
{if((state_val_11285 === 19))
{var inst_11270 = (state_11284[2]);var state_11284__$1 = state_11284;var statearr_11313_11341 = state_11284__$1;(statearr_11313_11341[2] = inst_11270);
(statearr_11313_11341[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 20))
{var inst_11255 = (state_11284[13]);var inst_11266 = (state_11284[2]);var inst_11267 = cljs.core.next.call(null,inst_11255);var inst_11241 = inst_11267;var inst_11242 = null;var inst_11243 = 0;var inst_11244 = 0;var state_11284__$1 = (function (){var statearr_11314 = state_11284;(statearr_11314[15] = inst_11266);
(statearr_11314[8] = inst_11244);
(statearr_11314[9] = inst_11243);
(statearr_11314[10] = inst_11241);
(statearr_11314[11] = inst_11242);
return statearr_11314;
})();var statearr_11315_11342 = state_11284__$1;(statearr_11315_11342[2] = null);
(statearr_11315_11342[1] = 8);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_11319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11319[0] = state_machine__6203__auto__);
(statearr_11319[1] = 1);
return statearr_11319;
});
var state_machine__6203__auto____1 = (function (state_11284){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11320){if((e11320 instanceof Object))
{var ex__6206__auto__ = e11320;var statearr_11321_11343 = state_11284;(statearr_11321_11343[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11344 = state_11284;
state_11284 = G__11344;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11284){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11322 = f__6218__auto__.call(null);(statearr_11322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto__);
return statearr_11322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
}));
return c__6217__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6217__auto___11425 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11404){var state_val_11405 = (state_11404[1]);if((state_val_11405 === 1))
{var state_11404__$1 = state_11404;var statearr_11406_11426 = state_11404__$1;(statearr_11406_11426[2] = null);
(statearr_11406_11426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 2))
{var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11404__$1,4,from);
} else
{if((state_val_11405 === 3))
{var inst_11402 = (state_11404[2]);var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11404__$1,inst_11402);
} else
{if((state_val_11405 === 4))
{var inst_11387 = (state_11404[7]);var inst_11387__$1 = (state_11404[2]);var inst_11388 = (inst_11387__$1 == null);var state_11404__$1 = (function (){var statearr_11407 = state_11404;(statearr_11407[7] = inst_11387__$1);
return statearr_11407;
})();if(cljs.core.truth_(inst_11388))
{var statearr_11408_11427 = state_11404__$1;(statearr_11408_11427[1] = 5);
} else
{var statearr_11409_11428 = state_11404__$1;(statearr_11409_11428[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 5))
{var state_11404__$1 = state_11404;if(cljs.core.truth_(close_QMARK_))
{var statearr_11410_11429 = state_11404__$1;(statearr_11410_11429[1] = 8);
} else
{var statearr_11411_11430 = state_11404__$1;(statearr_11411_11430[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 6))
{var inst_11387 = (state_11404[7]);var state_11404__$1 = state_11404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11404__$1,11,to,inst_11387);
} else
{if((state_val_11405 === 7))
{var inst_11400 = (state_11404[2]);var state_11404__$1 = state_11404;var statearr_11412_11431 = state_11404__$1;(statearr_11412_11431[2] = inst_11400);
(statearr_11412_11431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 8))
{var inst_11391 = cljs.core.async.close_BANG_.call(null,to);var state_11404__$1 = state_11404;var statearr_11413_11432 = state_11404__$1;(statearr_11413_11432[2] = inst_11391);
(statearr_11413_11432[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 9))
{var state_11404__$1 = state_11404;var statearr_11414_11433 = state_11404__$1;(statearr_11414_11433[2] = null);
(statearr_11414_11433[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 10))
{var inst_11394 = (state_11404[2]);var state_11404__$1 = state_11404;var statearr_11415_11434 = state_11404__$1;(statearr_11415_11434[2] = inst_11394);
(statearr_11415_11434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11405 === 11))
{var inst_11397 = (state_11404[2]);var state_11404__$1 = (function (){var statearr_11416 = state_11404;(statearr_11416[8] = inst_11397);
return statearr_11416;
})();var statearr_11417_11435 = state_11404__$1;(statearr_11417_11435[2] = null);
(statearr_11417_11435[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_11421 = [null,null,null,null,null,null,null,null,null];(statearr_11421[0] = state_machine__6203__auto__);
(statearr_11421[1] = 1);
return statearr_11421;
});
var state_machine__6203__auto____1 = (function (state_11404){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11404);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11422){if((e11422 instanceof Object))
{var ex__6206__auto__ = e11422;var statearr_11423_11436 = state_11404;(statearr_11423_11436[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11437 = state_11404;
state_11404 = G__11437;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11404){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11424 = f__6218__auto__.call(null);(statearr_11424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___11425);
return statearr_11424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6217__auto___11524 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11502){var state_val_11503 = (state_11502[1]);if((state_val_11503 === 1))
{var state_11502__$1 = state_11502;var statearr_11504_11525 = state_11502__$1;(statearr_11504_11525[2] = null);
(statearr_11504_11525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 2))
{var state_11502__$1 = state_11502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11502__$1,4,ch);
} else
{if((state_val_11503 === 3))
{var inst_11500 = (state_11502[2]);var state_11502__$1 = state_11502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11502__$1,inst_11500);
} else
{if((state_val_11503 === 4))
{var inst_11483 = (state_11502[7]);var inst_11483__$1 = (state_11502[2]);var inst_11484 = (inst_11483__$1 == null);var state_11502__$1 = (function (){var statearr_11505 = state_11502;(statearr_11505[7] = inst_11483__$1);
return statearr_11505;
})();if(cljs.core.truth_(inst_11484))
{var statearr_11506_11526 = state_11502__$1;(statearr_11506_11526[1] = 5);
} else
{var statearr_11507_11527 = state_11502__$1;(statearr_11507_11527[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 5))
{var inst_11486 = cljs.core.async.close_BANG_.call(null,tc);var inst_11487 = cljs.core.async.close_BANG_.call(null,fc);var state_11502__$1 = (function (){var statearr_11508 = state_11502;(statearr_11508[8] = inst_11486);
return statearr_11508;
})();var statearr_11509_11528 = state_11502__$1;(statearr_11509_11528[2] = inst_11487);
(statearr_11509_11528[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 6))
{var inst_11483 = (state_11502[7]);var inst_11489 = p.call(null,inst_11483);var state_11502__$1 = state_11502;if(cljs.core.truth_(inst_11489))
{var statearr_11510_11529 = state_11502__$1;(statearr_11510_11529[1] = 9);
} else
{var statearr_11511_11530 = state_11502__$1;(statearr_11511_11530[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 7))
{var inst_11498 = (state_11502[2]);var state_11502__$1 = state_11502;var statearr_11512_11531 = state_11502__$1;(statearr_11512_11531[2] = inst_11498);
(statearr_11512_11531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 8))
{var inst_11495 = (state_11502[2]);var state_11502__$1 = (function (){var statearr_11513 = state_11502;(statearr_11513[9] = inst_11495);
return statearr_11513;
})();var statearr_11514_11532 = state_11502__$1;(statearr_11514_11532[2] = null);
(statearr_11514_11532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 9))
{var state_11502__$1 = state_11502;var statearr_11515_11533 = state_11502__$1;(statearr_11515_11533[2] = tc);
(statearr_11515_11533[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 10))
{var state_11502__$1 = state_11502;var statearr_11516_11534 = state_11502__$1;(statearr_11516_11534[2] = fc);
(statearr_11516_11534[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11503 === 11))
{var inst_11483 = (state_11502[7]);var inst_11493 = (state_11502[2]);var state_11502__$1 = state_11502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11502__$1,8,inst_11493,inst_11483);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_11520 = [null,null,null,null,null,null,null,null,null,null];(statearr_11520[0] = state_machine__6203__auto__);
(statearr_11520[1] = 1);
return statearr_11520;
});
var state_machine__6203__auto____1 = (function (state_11502){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11502);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11521){if((e11521 instanceof Object))
{var ex__6206__auto__ = e11521;var statearr_11522_11535 = state_11502;(statearr_11522_11535[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11536 = state_11502;
state_11502 = G__11536;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11502){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11523 = f__6218__auto__.call(null);(statearr_11523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___11524);
return statearr_11523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6217__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11583){var state_val_11584 = (state_11583[1]);if((state_val_11584 === 7))
{var inst_11579 = (state_11583[2]);var state_11583__$1 = state_11583;var statearr_11585_11601 = state_11583__$1;(statearr_11585_11601[2] = inst_11579);
(statearr_11585_11601[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11584 === 6))
{var inst_11572 = (state_11583[7]);var inst_11569 = (state_11583[8]);var inst_11576 = f.call(null,inst_11569,inst_11572);var inst_11569__$1 = inst_11576;var state_11583__$1 = (function (){var statearr_11586 = state_11583;(statearr_11586[8] = inst_11569__$1);
return statearr_11586;
})();var statearr_11587_11602 = state_11583__$1;(statearr_11587_11602[2] = null);
(statearr_11587_11602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11584 === 5))
{var inst_11569 = (state_11583[8]);var state_11583__$1 = state_11583;var statearr_11588_11603 = state_11583__$1;(statearr_11588_11603[2] = inst_11569);
(statearr_11588_11603[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11584 === 4))
{var inst_11572 = (state_11583[7]);var inst_11572__$1 = (state_11583[2]);var inst_11573 = (inst_11572__$1 == null);var state_11583__$1 = (function (){var statearr_11589 = state_11583;(statearr_11589[7] = inst_11572__$1);
return statearr_11589;
})();if(cljs.core.truth_(inst_11573))
{var statearr_11590_11604 = state_11583__$1;(statearr_11590_11604[1] = 5);
} else
{var statearr_11591_11605 = state_11583__$1;(statearr_11591_11605[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11584 === 3))
{var inst_11581 = (state_11583[2]);var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11583__$1,inst_11581);
} else
{if((state_val_11584 === 2))
{var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11583__$1,4,ch);
} else
{if((state_val_11584 === 1))
{var inst_11569 = init;var state_11583__$1 = (function (){var statearr_11592 = state_11583;(statearr_11592[8] = inst_11569);
return statearr_11592;
})();var statearr_11593_11606 = state_11583__$1;(statearr_11593_11606[2] = null);
(statearr_11593_11606[1] = 2);
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
var state_machine__6203__auto____0 = (function (){var statearr_11597 = [null,null,null,null,null,null,null,null,null];(statearr_11597[0] = state_machine__6203__auto__);
(statearr_11597[1] = 1);
return statearr_11597;
});
var state_machine__6203__auto____1 = (function (state_11583){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11598){if((e11598 instanceof Object))
{var ex__6206__auto__ = e11598;var statearr_11599_11607 = state_11583;(statearr_11599_11607[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11608 = state_11583;
state_11583 = G__11608;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11583){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11600 = f__6218__auto__.call(null);(statearr_11600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto__);
return statearr_11600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
}));
return c__6217__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6217__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_11670){var state_val_11671 = (state_11670[1]);if((state_val_11671 === 1))
{var inst_11650 = cljs.core.seq.call(null,coll);var inst_11651 = inst_11650;var state_11670__$1 = (function (){var statearr_11672 = state_11670;(statearr_11672[7] = inst_11651);
return statearr_11672;
})();var statearr_11673_11691 = state_11670__$1;(statearr_11673_11691[2] = null);
(statearr_11673_11691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 2))
{var inst_11651 = (state_11670[7]);var state_11670__$1 = state_11670;if(cljs.core.truth_(inst_11651))
{var statearr_11674_11692 = state_11670__$1;(statearr_11674_11692[1] = 4);
} else
{var statearr_11675_11693 = state_11670__$1;(statearr_11675_11693[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 3))
{var inst_11668 = (state_11670[2]);var state_11670__$1 = state_11670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11670__$1,inst_11668);
} else
{if((state_val_11671 === 4))
{var inst_11651 = (state_11670[7]);var inst_11654 = cljs.core.first.call(null,inst_11651);var state_11670__$1 = state_11670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11670__$1,7,ch,inst_11654);
} else
{if((state_val_11671 === 5))
{var state_11670__$1 = state_11670;if(cljs.core.truth_(close_QMARK_))
{var statearr_11676_11694 = state_11670__$1;(statearr_11676_11694[1] = 8);
} else
{var statearr_11677_11695 = state_11670__$1;(statearr_11677_11695[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 6))
{var inst_11666 = (state_11670[2]);var state_11670__$1 = state_11670;var statearr_11678_11696 = state_11670__$1;(statearr_11678_11696[2] = inst_11666);
(statearr_11678_11696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 7))
{var inst_11651 = (state_11670[7]);var inst_11656 = (state_11670[2]);var inst_11657 = cljs.core.next.call(null,inst_11651);var inst_11651__$1 = inst_11657;var state_11670__$1 = (function (){var statearr_11679 = state_11670;(statearr_11679[8] = inst_11656);
(statearr_11679[7] = inst_11651__$1);
return statearr_11679;
})();var statearr_11680_11697 = state_11670__$1;(statearr_11680_11697[2] = null);
(statearr_11680_11697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 8))
{var inst_11661 = cljs.core.async.close_BANG_.call(null,ch);var state_11670__$1 = state_11670;var statearr_11681_11698 = state_11670__$1;(statearr_11681_11698[2] = inst_11661);
(statearr_11681_11698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 9))
{var state_11670__$1 = state_11670;var statearr_11682_11699 = state_11670__$1;(statearr_11682_11699[2] = null);
(statearr_11682_11699[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 10))
{var inst_11664 = (state_11670[2]);var state_11670__$1 = state_11670;var statearr_11683_11700 = state_11670__$1;(statearr_11683_11700[2] = inst_11664);
(statearr_11683_11700[1] = 6);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_11687 = [null,null,null,null,null,null,null,null,null];(statearr_11687[0] = state_machine__6203__auto__);
(statearr_11687[1] = 1);
return statearr_11687;
});
var state_machine__6203__auto____1 = (function (state_11670){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_11670);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e11688){if((e11688 instanceof Object))
{var ex__6206__auto__ = e11688;var statearr_11689_11701 = state_11670;(statearr_11689_11701[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11702 = state_11670;
state_11670 = G__11702;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_11670){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_11670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_11690 = f__6218__auto__.call(null);(statearr_11690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto__);
return statearr_11690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
}));
return c__6217__auto__;
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
cljs.core.async.Mux = (function (){var obj11704 = {};return obj11704;
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
cljs.core.async.Mult = (function (){var obj11706 = {};return obj11706;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11930 = (function (cs,ch,mult,meta11931){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11931 = meta11931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11930.cljs$lang$type = true;
cljs.core.async.t11930.cljs$lang$ctorStr = "cljs.core.async/t11930";
cljs.core.async.t11930.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11930");
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11930.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11932){var self__ = this;
var _11932__$1 = this;return self__.meta11931;
});})(cs))
;
cljs.core.async.t11930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11932,meta11931__$1){var self__ = this;
var _11932__$1 = this;return (new cljs.core.async.t11930(self__.cs,self__.ch,self__.mult,meta11931__$1));
});})(cs))
;
cljs.core.async.__GT_t11930 = ((function (cs){
return (function __GT_t11930(cs__$1,ch__$1,mult__$1,meta11931){return (new cljs.core.async.t11930(cs__$1,ch__$1,mult__$1,meta11931));
});})(cs))
;
}
return (new cljs.core.async.t11930(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6217__auto___12153 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_12067){var state_val_12068 = (state_12067[1]);if((state_val_12068 === 32))
{var inst_12011 = (state_12067[7]);var inst_11935 = (state_12067[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12067,31,Object,null,30);var inst_12018 = cljs.core.async.put_BANG_.call(null,inst_12011,inst_11935,done);var state_12067__$1 = state_12067;var statearr_12069_12154 = state_12067__$1;(statearr_12069_12154[2] = inst_12018);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 1))
{var state_12067__$1 = state_12067;var statearr_12070_12155 = state_12067__$1;(statearr_12070_12155[2] = null);
(statearr_12070_12155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 33))
{var inst_12024 = (state_12067[9]);var inst_12026 = cljs.core.chunked_seq_QMARK_.call(null,inst_12024);var state_12067__$1 = state_12067;if(inst_12026)
{var statearr_12071_12156 = state_12067__$1;(statearr_12071_12156[1] = 36);
} else
{var statearr_12072_12157 = state_12067__$1;(statearr_12072_12157[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 2))
{var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12067__$1,4,ch);
} else
{if((state_val_12068 === 34))
{var state_12067__$1 = state_12067;var statearr_12073_12158 = state_12067__$1;(statearr_12073_12158[2] = null);
(statearr_12073_12158[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 3))
{var inst_12065 = (state_12067[2]);var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12067__$1,inst_12065);
} else
{if((state_val_12068 === 35))
{var inst_12049 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12074_12159 = state_12067__$1;(statearr_12074_12159[2] = inst_12049);
(statearr_12074_12159[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 4))
{var inst_11935 = (state_12067[8]);var inst_11935__$1 = (state_12067[2]);var inst_11936 = (inst_11935__$1 == null);var state_12067__$1 = (function (){var statearr_12075 = state_12067;(statearr_12075[8] = inst_11935__$1);
return statearr_12075;
})();if(cljs.core.truth_(inst_11936))
{var statearr_12076_12160 = state_12067__$1;(statearr_12076_12160[1] = 5);
} else
{var statearr_12077_12161 = state_12067__$1;(statearr_12077_12161[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 36))
{var inst_12024 = (state_12067[9]);var inst_12028 = cljs.core.chunk_first.call(null,inst_12024);var inst_12029 = cljs.core.chunk_rest.call(null,inst_12024);var inst_12030 = cljs.core.count.call(null,inst_12028);var inst_12003 = inst_12029;var inst_12004 = inst_12028;var inst_12005 = inst_12030;var inst_12006 = 0;var state_12067__$1 = (function (){var statearr_12078 = state_12067;(statearr_12078[10] = inst_12006);
(statearr_12078[11] = inst_12005);
(statearr_12078[12] = inst_12004);
(statearr_12078[13] = inst_12003);
return statearr_12078;
})();var statearr_12079_12162 = state_12067__$1;(statearr_12079_12162[2] = null);
(statearr_12079_12162[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 5))
{var inst_11942 = cljs.core.deref.call(null,cs);var inst_11943 = cljs.core.seq.call(null,inst_11942);var inst_11944 = inst_11943;var inst_11945 = null;var inst_11946 = 0;var inst_11947 = 0;var state_12067__$1 = (function (){var statearr_12080 = state_12067;(statearr_12080[14] = inst_11945);
(statearr_12080[15] = inst_11944);
(statearr_12080[16] = inst_11947);
(statearr_12080[17] = inst_11946);
return statearr_12080;
})();var statearr_12081_12163 = state_12067__$1;(statearr_12081_12163[2] = null);
(statearr_12081_12163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 37))
{var inst_12024 = (state_12067[9]);var inst_12033 = cljs.core.first.call(null,inst_12024);var state_12067__$1 = (function (){var statearr_12082 = state_12067;(statearr_12082[18] = inst_12033);
return statearr_12082;
})();var statearr_12083_12164 = state_12067__$1;(statearr_12083_12164[2] = null);
(statearr_12083_12164[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 6))
{var inst_11995 = (state_12067[19]);var inst_11994 = cljs.core.deref.call(null,cs);var inst_11995__$1 = cljs.core.keys.call(null,inst_11994);var inst_11996 = cljs.core.count.call(null,inst_11995__$1);var inst_11997 = cljs.core.reset_BANG_.call(null,dctr,inst_11996);var inst_12002 = cljs.core.seq.call(null,inst_11995__$1);var inst_12003 = inst_12002;var inst_12004 = null;var inst_12005 = 0;var inst_12006 = 0;var state_12067__$1 = (function (){var statearr_12084 = state_12067;(statearr_12084[10] = inst_12006);
(statearr_12084[19] = inst_11995__$1);
(statearr_12084[20] = inst_11997);
(statearr_12084[11] = inst_12005);
(statearr_12084[12] = inst_12004);
(statearr_12084[13] = inst_12003);
return statearr_12084;
})();var statearr_12085_12165 = state_12067__$1;(statearr_12085_12165[2] = null);
(statearr_12085_12165[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 38))
{var inst_12046 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12086_12166 = state_12067__$1;(statearr_12086_12166[2] = inst_12046);
(statearr_12086_12166[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 7))
{var inst_12063 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12087_12167 = state_12067__$1;(statearr_12087_12167[2] = inst_12063);
(statearr_12087_12167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 39))
{var inst_12024 = (state_12067[9]);var inst_12042 = (state_12067[2]);var inst_12043 = cljs.core.next.call(null,inst_12024);var inst_12003 = inst_12043;var inst_12004 = null;var inst_12005 = 0;var inst_12006 = 0;var state_12067__$1 = (function (){var statearr_12088 = state_12067;(statearr_12088[21] = inst_12042);
(statearr_12088[10] = inst_12006);
(statearr_12088[11] = inst_12005);
(statearr_12088[12] = inst_12004);
(statearr_12088[13] = inst_12003);
return statearr_12088;
})();var statearr_12089_12168 = state_12067__$1;(statearr_12089_12168[2] = null);
(statearr_12089_12168[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 8))
{var inst_11947 = (state_12067[16]);var inst_11946 = (state_12067[17]);var inst_11949 = (inst_11947 < inst_11946);var inst_11950 = inst_11949;var state_12067__$1 = state_12067;if(cljs.core.truth_(inst_11950))
{var statearr_12090_12169 = state_12067__$1;(statearr_12090_12169[1] = 10);
} else
{var statearr_12091_12170 = state_12067__$1;(statearr_12091_12170[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 40))
{var inst_12033 = (state_12067[18]);var inst_12034 = (state_12067[2]);var inst_12035 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12036 = cljs.core.async.untap_STAR_.call(null,m,inst_12033);var state_12067__$1 = (function (){var statearr_12092 = state_12067;(statearr_12092[22] = inst_12035);
(statearr_12092[23] = inst_12034);
return statearr_12092;
})();var statearr_12093_12171 = state_12067__$1;(statearr_12093_12171[2] = inst_12036);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 9))
{var inst_11992 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12094_12172 = state_12067__$1;(statearr_12094_12172[2] = inst_11992);
(statearr_12094_12172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 41))
{var inst_12033 = (state_12067[18]);var inst_11935 = (state_12067[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12067,40,Object,null,39);var inst_12040 = cljs.core.async.put_BANG_.call(null,inst_12033,inst_11935,done);var state_12067__$1 = state_12067;var statearr_12095_12173 = state_12067__$1;(statearr_12095_12173[2] = inst_12040);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 10))
{var inst_11945 = (state_12067[14]);var inst_11947 = (state_12067[16]);var inst_11953 = cljs.core._nth.call(null,inst_11945,inst_11947);var inst_11954 = cljs.core.nth.call(null,inst_11953,0,null);var inst_11955 = cljs.core.nth.call(null,inst_11953,1,null);var state_12067__$1 = (function (){var statearr_12096 = state_12067;(statearr_12096[24] = inst_11954);
return statearr_12096;
})();if(cljs.core.truth_(inst_11955))
{var statearr_12097_12174 = state_12067__$1;(statearr_12097_12174[1] = 13);
} else
{var statearr_12098_12175 = state_12067__$1;(statearr_12098_12175[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 42))
{var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12067__$1,45,dchan);
} else
{if((state_val_12068 === 11))
{var inst_11944 = (state_12067[15]);var inst_11964 = (state_12067[25]);var inst_11964__$1 = cljs.core.seq.call(null,inst_11944);var state_12067__$1 = (function (){var statearr_12099 = state_12067;(statearr_12099[25] = inst_11964__$1);
return statearr_12099;
})();if(inst_11964__$1)
{var statearr_12100_12176 = state_12067__$1;(statearr_12100_12176[1] = 16);
} else
{var statearr_12101_12177 = state_12067__$1;(statearr_12101_12177[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 43))
{var state_12067__$1 = state_12067;var statearr_12102_12178 = state_12067__$1;(statearr_12102_12178[2] = null);
(statearr_12102_12178[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 12))
{var inst_11990 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12103_12179 = state_12067__$1;(statearr_12103_12179[2] = inst_11990);
(statearr_12103_12179[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 44))
{var inst_12060 = (state_12067[2]);var state_12067__$1 = (function (){var statearr_12104 = state_12067;(statearr_12104[26] = inst_12060);
return statearr_12104;
})();var statearr_12105_12180 = state_12067__$1;(statearr_12105_12180[2] = null);
(statearr_12105_12180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 13))
{var inst_11954 = (state_12067[24]);var inst_11957 = cljs.core.async.close_BANG_.call(null,inst_11954);var state_12067__$1 = state_12067;var statearr_12106_12181 = state_12067__$1;(statearr_12106_12181[2] = inst_11957);
(statearr_12106_12181[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 45))
{var inst_12057 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12110_12182 = state_12067__$1;(statearr_12110_12182[2] = inst_12057);
(statearr_12110_12182[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 14))
{var state_12067__$1 = state_12067;var statearr_12111_12183 = state_12067__$1;(statearr_12111_12183[2] = null);
(statearr_12111_12183[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 15))
{var inst_11945 = (state_12067[14]);var inst_11944 = (state_12067[15]);var inst_11947 = (state_12067[16]);var inst_11946 = (state_12067[17]);var inst_11960 = (state_12067[2]);var inst_11961 = (inst_11947 + 1);var tmp12107 = inst_11945;var tmp12108 = inst_11944;var tmp12109 = inst_11946;var inst_11944__$1 = tmp12108;var inst_11945__$1 = tmp12107;var inst_11946__$1 = tmp12109;var inst_11947__$1 = inst_11961;var state_12067__$1 = (function (){var statearr_12112 = state_12067;(statearr_12112[14] = inst_11945__$1);
(statearr_12112[15] = inst_11944__$1);
(statearr_12112[16] = inst_11947__$1);
(statearr_12112[17] = inst_11946__$1);
(statearr_12112[27] = inst_11960);
return statearr_12112;
})();var statearr_12113_12184 = state_12067__$1;(statearr_12113_12184[2] = null);
(statearr_12113_12184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 16))
{var inst_11964 = (state_12067[25]);var inst_11966 = cljs.core.chunked_seq_QMARK_.call(null,inst_11964);var state_12067__$1 = state_12067;if(inst_11966)
{var statearr_12114_12185 = state_12067__$1;(statearr_12114_12185[1] = 19);
} else
{var statearr_12115_12186 = state_12067__$1;(statearr_12115_12186[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 17))
{var state_12067__$1 = state_12067;var statearr_12116_12187 = state_12067__$1;(statearr_12116_12187[2] = null);
(statearr_12116_12187[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 18))
{var inst_11988 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12117_12188 = state_12067__$1;(statearr_12117_12188[2] = inst_11988);
(statearr_12117_12188[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 19))
{var inst_11964 = (state_12067[25]);var inst_11968 = cljs.core.chunk_first.call(null,inst_11964);var inst_11969 = cljs.core.chunk_rest.call(null,inst_11964);var inst_11970 = cljs.core.count.call(null,inst_11968);var inst_11944 = inst_11969;var inst_11945 = inst_11968;var inst_11946 = inst_11970;var inst_11947 = 0;var state_12067__$1 = (function (){var statearr_12118 = state_12067;(statearr_12118[14] = inst_11945);
(statearr_12118[15] = inst_11944);
(statearr_12118[16] = inst_11947);
(statearr_12118[17] = inst_11946);
return statearr_12118;
})();var statearr_12119_12189 = state_12067__$1;(statearr_12119_12189[2] = null);
(statearr_12119_12189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 20))
{var inst_11964 = (state_12067[25]);var inst_11974 = cljs.core.first.call(null,inst_11964);var inst_11975 = cljs.core.nth.call(null,inst_11974,0,null);var inst_11976 = cljs.core.nth.call(null,inst_11974,1,null);var state_12067__$1 = (function (){var statearr_12120 = state_12067;(statearr_12120[28] = inst_11975);
return statearr_12120;
})();if(cljs.core.truth_(inst_11976))
{var statearr_12121_12190 = state_12067__$1;(statearr_12121_12190[1] = 22);
} else
{var statearr_12122_12191 = state_12067__$1;(statearr_12122_12191[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 21))
{var inst_11985 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12123_12192 = state_12067__$1;(statearr_12123_12192[2] = inst_11985);
(statearr_12123_12192[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 22))
{var inst_11975 = (state_12067[28]);var inst_11978 = cljs.core.async.close_BANG_.call(null,inst_11975);var state_12067__$1 = state_12067;var statearr_12124_12193 = state_12067__$1;(statearr_12124_12193[2] = inst_11978);
(statearr_12124_12193[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 23))
{var state_12067__$1 = state_12067;var statearr_12125_12194 = state_12067__$1;(statearr_12125_12194[2] = null);
(statearr_12125_12194[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 24))
{var inst_11964 = (state_12067[25]);var inst_11981 = (state_12067[2]);var inst_11982 = cljs.core.next.call(null,inst_11964);var inst_11944 = inst_11982;var inst_11945 = null;var inst_11946 = 0;var inst_11947 = 0;var state_12067__$1 = (function (){var statearr_12126 = state_12067;(statearr_12126[14] = inst_11945);
(statearr_12126[15] = inst_11944);
(statearr_12126[16] = inst_11947);
(statearr_12126[17] = inst_11946);
(statearr_12126[29] = inst_11981);
return statearr_12126;
})();var statearr_12127_12195 = state_12067__$1;(statearr_12127_12195[2] = null);
(statearr_12127_12195[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 25))
{var inst_12006 = (state_12067[10]);var inst_12005 = (state_12067[11]);var inst_12008 = (inst_12006 < inst_12005);var inst_12009 = inst_12008;var state_12067__$1 = state_12067;if(cljs.core.truth_(inst_12009))
{var statearr_12128_12196 = state_12067__$1;(statearr_12128_12196[1] = 27);
} else
{var statearr_12129_12197 = state_12067__$1;(statearr_12129_12197[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 26))
{var inst_11995 = (state_12067[19]);var inst_12053 = (state_12067[2]);var inst_12054 = cljs.core.seq.call(null,inst_11995);var state_12067__$1 = (function (){var statearr_12130 = state_12067;(statearr_12130[30] = inst_12053);
return statearr_12130;
})();if(inst_12054)
{var statearr_12131_12198 = state_12067__$1;(statearr_12131_12198[1] = 42);
} else
{var statearr_12132_12199 = state_12067__$1;(statearr_12132_12199[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 27))
{var inst_12006 = (state_12067[10]);var inst_12004 = (state_12067[12]);var inst_12011 = cljs.core._nth.call(null,inst_12004,inst_12006);var state_12067__$1 = (function (){var statearr_12133 = state_12067;(statearr_12133[7] = inst_12011);
return statearr_12133;
})();var statearr_12134_12200 = state_12067__$1;(statearr_12134_12200[2] = null);
(statearr_12134_12200[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 28))
{var inst_12024 = (state_12067[9]);var inst_12003 = (state_12067[13]);var inst_12024__$1 = cljs.core.seq.call(null,inst_12003);var state_12067__$1 = (function (){var statearr_12138 = state_12067;(statearr_12138[9] = inst_12024__$1);
return statearr_12138;
})();if(inst_12024__$1)
{var statearr_12139_12201 = state_12067__$1;(statearr_12139_12201[1] = 33);
} else
{var statearr_12140_12202 = state_12067__$1;(statearr_12140_12202[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 29))
{var inst_12051 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12141_12203 = state_12067__$1;(statearr_12141_12203[2] = inst_12051);
(statearr_12141_12203[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 30))
{var inst_12006 = (state_12067[10]);var inst_12005 = (state_12067[11]);var inst_12004 = (state_12067[12]);var inst_12003 = (state_12067[13]);var inst_12020 = (state_12067[2]);var inst_12021 = (inst_12006 + 1);var tmp12135 = inst_12005;var tmp12136 = inst_12004;var tmp12137 = inst_12003;var inst_12003__$1 = tmp12137;var inst_12004__$1 = tmp12136;var inst_12005__$1 = tmp12135;var inst_12006__$1 = inst_12021;var state_12067__$1 = (function (){var statearr_12142 = state_12067;(statearr_12142[31] = inst_12020);
(statearr_12142[10] = inst_12006__$1);
(statearr_12142[11] = inst_12005__$1);
(statearr_12142[12] = inst_12004__$1);
(statearr_12142[13] = inst_12003__$1);
return statearr_12142;
})();var statearr_12143_12204 = state_12067__$1;(statearr_12143_12204[2] = null);
(statearr_12143_12204[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 31))
{var inst_12011 = (state_12067[7]);var inst_12012 = (state_12067[2]);var inst_12013 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12014 = cljs.core.async.untap_STAR_.call(null,m,inst_12011);var state_12067__$1 = (function (){var statearr_12144 = state_12067;(statearr_12144[32] = inst_12013);
(statearr_12144[33] = inst_12012);
return statearr_12144;
})();var statearr_12145_12205 = state_12067__$1;(statearr_12145_12205[2] = inst_12014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067__$1);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_12149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12149[0] = state_machine__6203__auto__);
(statearr_12149[1] = 1);
return statearr_12149;
});
var state_machine__6203__auto____1 = (function (state_12067){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_12067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e12150){if((e12150 instanceof Object))
{var ex__6206__auto__ = e12150;var statearr_12151_12206 = state_12067;(statearr_12151_12206[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12207 = state_12067;
state_12067 = G__12207;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_12067){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_12067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_12152 = f__6218__auto__.call(null);(statearr_12152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___12153);
return statearr_12152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
cljs.core.async.Mix = (function (){var obj12209 = {};return obj12209;
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
;var m = (function (){if(typeof cljs.core.async.t12319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12319 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12320){
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
this.meta12320 = meta12320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12319.cljs$lang$type = true;
cljs.core.async.t12319.cljs$lang$ctorStr = "cljs.core.async/t12319";
cljs.core.async.t12319.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12319");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12321){var self__ = this;
var _12321__$1 = this;return self__.meta12320;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12321,meta12320__$1){var self__ = this;
var _12321__$1 = this;return (new cljs.core.async.t12319(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12320__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12319 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12319(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12320){return (new cljs.core.async.t12319(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12320));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12319(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6217__auto___12428 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_12386){var state_val_12387 = (state_12386[1]);if((state_val_12387 === 1))
{var inst_12325 = (state_12386[7]);var inst_12325__$1 = calc_state.call(null);var inst_12326 = cljs.core.seq_QMARK_.call(null,inst_12325__$1);var state_12386__$1 = (function (){var statearr_12388 = state_12386;(statearr_12388[7] = inst_12325__$1);
return statearr_12388;
})();if(inst_12326)
{var statearr_12389_12429 = state_12386__$1;(statearr_12389_12429[1] = 2);
} else
{var statearr_12390_12430 = state_12386__$1;(statearr_12390_12430[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 2))
{var inst_12325 = (state_12386[7]);var inst_12328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12325);var state_12386__$1 = state_12386;var statearr_12391_12431 = state_12386__$1;(statearr_12391_12431[2] = inst_12328);
(statearr_12391_12431[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 3))
{var inst_12325 = (state_12386[7]);var state_12386__$1 = state_12386;var statearr_12392_12432 = state_12386__$1;(statearr_12392_12432[2] = inst_12325);
(statearr_12392_12432[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 4))
{var inst_12325 = (state_12386[7]);var inst_12331 = (state_12386[2]);var inst_12332 = cljs.core.get.call(null,inst_12331,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12333 = cljs.core.get.call(null,inst_12331,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12334 = cljs.core.get.call(null,inst_12331,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12335 = inst_12325;var state_12386__$1 = (function (){var statearr_12393 = state_12386;(statearr_12393[8] = inst_12335);
(statearr_12393[9] = inst_12334);
(statearr_12393[10] = inst_12333);
(statearr_12393[11] = inst_12332);
return statearr_12393;
})();var statearr_12394_12433 = state_12386__$1;(statearr_12394_12433[2] = null);
(statearr_12394_12433[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 5))
{var inst_12335 = (state_12386[8]);var inst_12338 = cljs.core.seq_QMARK_.call(null,inst_12335);var state_12386__$1 = state_12386;if(inst_12338)
{var statearr_12395_12434 = state_12386__$1;(statearr_12395_12434[1] = 7);
} else
{var statearr_12396_12435 = state_12386__$1;(statearr_12396_12435[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 6))
{var inst_12384 = (state_12386[2]);var state_12386__$1 = state_12386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12386__$1,inst_12384);
} else
{if((state_val_12387 === 7))
{var inst_12335 = (state_12386[8]);var inst_12340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12335);var state_12386__$1 = state_12386;var statearr_12397_12436 = state_12386__$1;(statearr_12397_12436[2] = inst_12340);
(statearr_12397_12436[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 8))
{var inst_12335 = (state_12386[8]);var state_12386__$1 = state_12386;var statearr_12398_12437 = state_12386__$1;(statearr_12398_12437[2] = inst_12335);
(statearr_12398_12437[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 9))
{var inst_12343 = (state_12386[12]);var inst_12343__$1 = (state_12386[2]);var inst_12344 = cljs.core.get.call(null,inst_12343__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12345 = cljs.core.get.call(null,inst_12343__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12346 = cljs.core.get.call(null,inst_12343__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12386__$1 = (function (){var statearr_12399 = state_12386;(statearr_12399[13] = inst_12346);
(statearr_12399[14] = inst_12345);
(statearr_12399[12] = inst_12343__$1);
return statearr_12399;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12386__$1,10,inst_12344);
} else
{if((state_val_12387 === 10))
{var inst_12350 = (state_12386[15]);var inst_12351 = (state_12386[16]);var inst_12349 = (state_12386[2]);var inst_12350__$1 = cljs.core.nth.call(null,inst_12349,0,null);var inst_12351__$1 = cljs.core.nth.call(null,inst_12349,1,null);var inst_12352 = (inst_12350__$1 == null);var inst_12353 = cljs.core._EQ_.call(null,inst_12351__$1,change);var inst_12354 = (inst_12352) || (inst_12353);var state_12386__$1 = (function (){var statearr_12400 = state_12386;(statearr_12400[15] = inst_12350__$1);
(statearr_12400[16] = inst_12351__$1);
return statearr_12400;
})();if(cljs.core.truth_(inst_12354))
{var statearr_12401_12438 = state_12386__$1;(statearr_12401_12438[1] = 11);
} else
{var statearr_12402_12439 = state_12386__$1;(statearr_12402_12439[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 11))
{var inst_12350 = (state_12386[15]);var inst_12356 = (inst_12350 == null);var state_12386__$1 = state_12386;if(cljs.core.truth_(inst_12356))
{var statearr_12403_12440 = state_12386__$1;(statearr_12403_12440[1] = 14);
} else
{var statearr_12404_12441 = state_12386__$1;(statearr_12404_12441[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 12))
{var inst_12351 = (state_12386[16]);var inst_12346 = (state_12386[13]);var inst_12365 = (state_12386[17]);var inst_12365__$1 = inst_12346.call(null,inst_12351);var state_12386__$1 = (function (){var statearr_12405 = state_12386;(statearr_12405[17] = inst_12365__$1);
return statearr_12405;
})();if(cljs.core.truth_(inst_12365__$1))
{var statearr_12406_12442 = state_12386__$1;(statearr_12406_12442[1] = 17);
} else
{var statearr_12407_12443 = state_12386__$1;(statearr_12407_12443[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 13))
{var inst_12382 = (state_12386[2]);var state_12386__$1 = state_12386;var statearr_12408_12444 = state_12386__$1;(statearr_12408_12444[2] = inst_12382);
(statearr_12408_12444[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 14))
{var inst_12351 = (state_12386[16]);var inst_12358 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12351);var state_12386__$1 = state_12386;var statearr_12409_12445 = state_12386__$1;(statearr_12409_12445[2] = inst_12358);
(statearr_12409_12445[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 15))
{var state_12386__$1 = state_12386;var statearr_12410_12446 = state_12386__$1;(statearr_12410_12446[2] = null);
(statearr_12410_12446[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 16))
{var inst_12361 = (state_12386[2]);var inst_12362 = calc_state.call(null);var inst_12335 = inst_12362;var state_12386__$1 = (function (){var statearr_12411 = state_12386;(statearr_12411[18] = inst_12361);
(statearr_12411[8] = inst_12335);
return statearr_12411;
})();var statearr_12412_12447 = state_12386__$1;(statearr_12412_12447[2] = null);
(statearr_12412_12447[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 17))
{var inst_12365 = (state_12386[17]);var state_12386__$1 = state_12386;var statearr_12413_12448 = state_12386__$1;(statearr_12413_12448[2] = inst_12365);
(statearr_12413_12448[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 18))
{var inst_12351 = (state_12386[16]);var inst_12346 = (state_12386[13]);var inst_12345 = (state_12386[14]);var inst_12368 = cljs.core.empty_QMARK_.call(null,inst_12346);var inst_12369 = inst_12345.call(null,inst_12351);var inst_12370 = cljs.core.not.call(null,inst_12369);var inst_12371 = (inst_12368) && (inst_12370);var state_12386__$1 = state_12386;var statearr_12414_12449 = state_12386__$1;(statearr_12414_12449[2] = inst_12371);
(statearr_12414_12449[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 19))
{var inst_12373 = (state_12386[2]);var state_12386__$1 = state_12386;if(cljs.core.truth_(inst_12373))
{var statearr_12415_12450 = state_12386__$1;(statearr_12415_12450[1] = 20);
} else
{var statearr_12416_12451 = state_12386__$1;(statearr_12416_12451[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 20))
{var inst_12350 = (state_12386[15]);var state_12386__$1 = state_12386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12386__$1,23,out,inst_12350);
} else
{if((state_val_12387 === 21))
{var state_12386__$1 = state_12386;var statearr_12417_12452 = state_12386__$1;(statearr_12417_12452[2] = null);
(statearr_12417_12452[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 22))
{var inst_12343 = (state_12386[12]);var inst_12379 = (state_12386[2]);var inst_12335 = inst_12343;var state_12386__$1 = (function (){var statearr_12418 = state_12386;(statearr_12418[19] = inst_12379);
(statearr_12418[8] = inst_12335);
return statearr_12418;
})();var statearr_12419_12453 = state_12386__$1;(statearr_12419_12453[2] = null);
(statearr_12419_12453[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12387 === 23))
{var inst_12376 = (state_12386[2]);var state_12386__$1 = state_12386;var statearr_12420_12454 = state_12386__$1;(statearr_12420_12454[2] = inst_12376);
(statearr_12420_12454[1] = 22);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_12424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12424[0] = state_machine__6203__auto__);
(statearr_12424[1] = 1);
return statearr_12424;
});
var state_machine__6203__auto____1 = (function (state_12386){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_12386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e12425){if((e12425 instanceof Object))
{var ex__6206__auto__ = e12425;var statearr_12426_12455 = state_12386;(statearr_12426_12455[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12456 = state_12386;
state_12386 = G__12456;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_12386){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_12386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_12427 = f__6218__auto__.call(null);(statearr_12427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___12428);
return statearr_12427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
cljs.core.async.Pub = (function (){var obj12458 = {};return obj12458;
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
return (function (p1__12459_SHARP_){if(cljs.core.truth_(p1__12459_SHARP_.call(null,topic)))
{return p1__12459_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12459_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12584 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12585){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12585 = meta12585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12584.cljs$lang$type = true;
cljs.core.async.t12584.cljs$lang$ctorStr = "cljs.core.async/t12584";
cljs.core.async.t12584.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12584");
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12586){var self__ = this;
var _12586__$1 = this;return self__.meta12585;
});})(mults,ensure_mult))
;
cljs.core.async.t12584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12586,meta12585__$1){var self__ = this;
var _12586__$1 = this;return (new cljs.core.async.t12584(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12585__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12584 = ((function (mults,ensure_mult){
return (function __GT_t12584(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12585){return (new cljs.core.async.t12584(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12585));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12584(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6217__auto___12708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_12660){var state_val_12661 = (state_12660[1]);if((state_val_12661 === 1))
{var state_12660__$1 = state_12660;var statearr_12662_12709 = state_12660__$1;(statearr_12662_12709[2] = null);
(statearr_12662_12709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 2))
{var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12660__$1,4,ch);
} else
{if((state_val_12661 === 3))
{var inst_12658 = (state_12660[2]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === 4))
{var inst_12589 = (state_12660[7]);var inst_12589__$1 = (state_12660[2]);var inst_12590 = (inst_12589__$1 == null);var state_12660__$1 = (function (){var statearr_12663 = state_12660;(statearr_12663[7] = inst_12589__$1);
return statearr_12663;
})();if(cljs.core.truth_(inst_12590))
{var statearr_12664_12710 = state_12660__$1;(statearr_12664_12710[1] = 5);
} else
{var statearr_12665_12711 = state_12660__$1;(statearr_12665_12711[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 5))
{var inst_12596 = cljs.core.deref.call(null,mults);var inst_12597 = cljs.core.vals.call(null,inst_12596);var inst_12598 = cljs.core.seq.call(null,inst_12597);var inst_12599 = inst_12598;var inst_12600 = null;var inst_12601 = 0;var inst_12602 = 0;var state_12660__$1 = (function (){var statearr_12666 = state_12660;(statearr_12666[8] = inst_12599);
(statearr_12666[9] = inst_12600);
(statearr_12666[10] = inst_12601);
(statearr_12666[11] = inst_12602);
return statearr_12666;
})();var statearr_12667_12712 = state_12660__$1;(statearr_12667_12712[2] = null);
(statearr_12667_12712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 6))
{var inst_12637 = (state_12660[12]);var inst_12639 = (state_12660[13]);var inst_12589 = (state_12660[7]);var inst_12637__$1 = topic_fn.call(null,inst_12589);var inst_12638 = cljs.core.deref.call(null,mults);var inst_12639__$1 = cljs.core.get.call(null,inst_12638,inst_12637__$1);var state_12660__$1 = (function (){var statearr_12668 = state_12660;(statearr_12668[12] = inst_12637__$1);
(statearr_12668[13] = inst_12639__$1);
return statearr_12668;
})();if(cljs.core.truth_(inst_12639__$1))
{var statearr_12669_12713 = state_12660__$1;(statearr_12669_12713[1] = 19);
} else
{var statearr_12670_12714 = state_12660__$1;(statearr_12670_12714[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 7))
{var inst_12656 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12671_12715 = state_12660__$1;(statearr_12671_12715[2] = inst_12656);
(statearr_12671_12715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 8))
{var inst_12601 = (state_12660[10]);var inst_12602 = (state_12660[11]);var inst_12604 = (inst_12602 < inst_12601);var inst_12605 = inst_12604;var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12605))
{var statearr_12675_12716 = state_12660__$1;(statearr_12675_12716[1] = 10);
} else
{var statearr_12676_12717 = state_12660__$1;(statearr_12676_12717[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 9))
{var inst_12635 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12677_12718 = state_12660__$1;(statearr_12677_12718[2] = inst_12635);
(statearr_12677_12718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 10))
{var inst_12599 = (state_12660[8]);var inst_12600 = (state_12660[9]);var inst_12601 = (state_12660[10]);var inst_12602 = (state_12660[11]);var inst_12607 = cljs.core._nth.call(null,inst_12600,inst_12602);var inst_12608 = cljs.core.async.muxch_STAR_.call(null,inst_12607);var inst_12609 = cljs.core.async.close_BANG_.call(null,inst_12608);var inst_12610 = (inst_12602 + 1);var tmp12672 = inst_12599;var tmp12673 = inst_12600;var tmp12674 = inst_12601;var inst_12599__$1 = tmp12672;var inst_12600__$1 = tmp12673;var inst_12601__$1 = tmp12674;var inst_12602__$1 = inst_12610;var state_12660__$1 = (function (){var statearr_12678 = state_12660;(statearr_12678[8] = inst_12599__$1);
(statearr_12678[14] = inst_12609);
(statearr_12678[9] = inst_12600__$1);
(statearr_12678[10] = inst_12601__$1);
(statearr_12678[11] = inst_12602__$1);
return statearr_12678;
})();var statearr_12679_12719 = state_12660__$1;(statearr_12679_12719[2] = null);
(statearr_12679_12719[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 11))
{var inst_12599 = (state_12660[8]);var inst_12613 = (state_12660[15]);var inst_12613__$1 = cljs.core.seq.call(null,inst_12599);var state_12660__$1 = (function (){var statearr_12680 = state_12660;(statearr_12680[15] = inst_12613__$1);
return statearr_12680;
})();if(inst_12613__$1)
{var statearr_12681_12720 = state_12660__$1;(statearr_12681_12720[1] = 13);
} else
{var statearr_12682_12721 = state_12660__$1;(statearr_12682_12721[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 12))
{var inst_12633 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12683_12722 = state_12660__$1;(statearr_12683_12722[2] = inst_12633);
(statearr_12683_12722[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 13))
{var inst_12613 = (state_12660[15]);var inst_12615 = cljs.core.chunked_seq_QMARK_.call(null,inst_12613);var state_12660__$1 = state_12660;if(inst_12615)
{var statearr_12684_12723 = state_12660__$1;(statearr_12684_12723[1] = 16);
} else
{var statearr_12685_12724 = state_12660__$1;(statearr_12685_12724[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 14))
{var state_12660__$1 = state_12660;var statearr_12686_12725 = state_12660__$1;(statearr_12686_12725[2] = null);
(statearr_12686_12725[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 15))
{var inst_12631 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12687_12726 = state_12660__$1;(statearr_12687_12726[2] = inst_12631);
(statearr_12687_12726[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 16))
{var inst_12613 = (state_12660[15]);var inst_12617 = cljs.core.chunk_first.call(null,inst_12613);var inst_12618 = cljs.core.chunk_rest.call(null,inst_12613);var inst_12619 = cljs.core.count.call(null,inst_12617);var inst_12599 = inst_12618;var inst_12600 = inst_12617;var inst_12601 = inst_12619;var inst_12602 = 0;var state_12660__$1 = (function (){var statearr_12688 = state_12660;(statearr_12688[8] = inst_12599);
(statearr_12688[9] = inst_12600);
(statearr_12688[10] = inst_12601);
(statearr_12688[11] = inst_12602);
return statearr_12688;
})();var statearr_12689_12727 = state_12660__$1;(statearr_12689_12727[2] = null);
(statearr_12689_12727[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 17))
{var inst_12613 = (state_12660[15]);var inst_12622 = cljs.core.first.call(null,inst_12613);var inst_12623 = cljs.core.async.muxch_STAR_.call(null,inst_12622);var inst_12624 = cljs.core.async.close_BANG_.call(null,inst_12623);var inst_12625 = cljs.core.next.call(null,inst_12613);var inst_12599 = inst_12625;var inst_12600 = null;var inst_12601 = 0;var inst_12602 = 0;var state_12660__$1 = (function (){var statearr_12690 = state_12660;(statearr_12690[8] = inst_12599);
(statearr_12690[16] = inst_12624);
(statearr_12690[9] = inst_12600);
(statearr_12690[10] = inst_12601);
(statearr_12690[11] = inst_12602);
return statearr_12690;
})();var statearr_12691_12728 = state_12660__$1;(statearr_12691_12728[2] = null);
(statearr_12691_12728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 18))
{var inst_12628 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12692_12729 = state_12660__$1;(statearr_12692_12729[2] = inst_12628);
(statearr_12692_12729[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 19))
{var state_12660__$1 = state_12660;var statearr_12693_12730 = state_12660__$1;(statearr_12693_12730[2] = null);
(statearr_12693_12730[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 20))
{var state_12660__$1 = state_12660;var statearr_12694_12731 = state_12660__$1;(statearr_12694_12731[2] = null);
(statearr_12694_12731[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 21))
{var inst_12653 = (state_12660[2]);var state_12660__$1 = (function (){var statearr_12695 = state_12660;(statearr_12695[17] = inst_12653);
return statearr_12695;
})();var statearr_12696_12732 = state_12660__$1;(statearr_12696_12732[2] = null);
(statearr_12696_12732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 22))
{var inst_12650 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12697_12733 = state_12660__$1;(statearr_12697_12733[2] = inst_12650);
(statearr_12697_12733[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 23))
{var inst_12637 = (state_12660[12]);var inst_12641 = (state_12660[2]);var inst_12642 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12637);var state_12660__$1 = (function (){var statearr_12698 = state_12660;(statearr_12698[18] = inst_12641);
return statearr_12698;
})();var statearr_12699_12734 = state_12660__$1;(statearr_12699_12734[2] = inst_12642);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 24))
{var inst_12639 = (state_12660[13]);var inst_12589 = (state_12660[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12660,23,Object,null,22);var inst_12646 = cljs.core.async.muxch_STAR_.call(null,inst_12639);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12660__$1,25,inst_12646,inst_12589);
} else
{if((state_val_12661 === 25))
{var inst_12648 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12700_12735 = state_12660__$1;(statearr_12700_12735[2] = inst_12648);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660__$1);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_12704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12704[0] = state_machine__6203__auto__);
(statearr_12704[1] = 1);
return statearr_12704;
});
var state_machine__6203__auto____1 = (function (state_12660){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e12705){if((e12705 instanceof Object))
{var ex__6206__auto__ = e12705;var statearr_12706_12736 = state_12660;(statearr_12706_12736[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12737 = state_12660;
state_12660 = G__12737;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_12707 = f__6218__auto__.call(null);(statearr_12707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___12708);
return statearr_12707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
,cljs.core.range.call(null,cnt));var c__6217__auto___12874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_12844){var state_val_12845 = (state_12844[1]);if((state_val_12845 === 1))
{var state_12844__$1 = state_12844;var statearr_12846_12875 = state_12844__$1;(statearr_12846_12875[2] = null);
(statearr_12846_12875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 2))
{var inst_12807 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12808 = 0;var state_12844__$1 = (function (){var statearr_12847 = state_12844;(statearr_12847[7] = inst_12808);
(statearr_12847[8] = inst_12807);
return statearr_12847;
})();var statearr_12848_12876 = state_12844__$1;(statearr_12848_12876[2] = null);
(statearr_12848_12876[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 3))
{var inst_12842 = (state_12844[2]);var state_12844__$1 = state_12844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12844__$1,inst_12842);
} else
{if((state_val_12845 === 4))
{var inst_12808 = (state_12844[7]);var inst_12810 = (inst_12808 < cnt);var state_12844__$1 = state_12844;if(cljs.core.truth_(inst_12810))
{var statearr_12849_12877 = state_12844__$1;(statearr_12849_12877[1] = 6);
} else
{var statearr_12850_12878 = state_12844__$1;(statearr_12850_12878[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 5))
{var inst_12828 = (state_12844[2]);var state_12844__$1 = (function (){var statearr_12851 = state_12844;(statearr_12851[9] = inst_12828);
return statearr_12851;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12844__$1,12,dchan);
} else
{if((state_val_12845 === 6))
{var state_12844__$1 = state_12844;var statearr_12852_12879 = state_12844__$1;(statearr_12852_12879[2] = null);
(statearr_12852_12879[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 7))
{var state_12844__$1 = state_12844;var statearr_12853_12880 = state_12844__$1;(statearr_12853_12880[2] = null);
(statearr_12853_12880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 8))
{var inst_12826 = (state_12844[2]);var state_12844__$1 = state_12844;var statearr_12854_12881 = state_12844__$1;(statearr_12854_12881[2] = inst_12826);
(statearr_12854_12881[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 9))
{var inst_12808 = (state_12844[7]);var inst_12821 = (state_12844[2]);var inst_12822 = (inst_12808 + 1);var inst_12808__$1 = inst_12822;var state_12844__$1 = (function (){var statearr_12855 = state_12844;(statearr_12855[10] = inst_12821);
(statearr_12855[7] = inst_12808__$1);
return statearr_12855;
})();var statearr_12856_12882 = state_12844__$1;(statearr_12856_12882[2] = null);
(statearr_12856_12882[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 10))
{var inst_12812 = (state_12844[2]);var inst_12813 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12844__$1 = (function (){var statearr_12857 = state_12844;(statearr_12857[11] = inst_12812);
return statearr_12857;
})();var statearr_12858_12883 = state_12844__$1;(statearr_12858_12883[2] = inst_12813);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12844__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 11))
{var inst_12808 = (state_12844[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12844,10,Object,null,9);var inst_12817 = chs__$1.call(null,inst_12808);var inst_12818 = done.call(null,inst_12808);var inst_12819 = cljs.core.async.take_BANG_.call(null,inst_12817,inst_12818);var state_12844__$1 = state_12844;var statearr_12859_12884 = state_12844__$1;(statearr_12859_12884[2] = inst_12819);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12844__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 12))
{var inst_12830 = (state_12844[12]);var inst_12830__$1 = (state_12844[2]);var inst_12831 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12830__$1);var state_12844__$1 = (function (){var statearr_12860 = state_12844;(statearr_12860[12] = inst_12830__$1);
return statearr_12860;
})();if(cljs.core.truth_(inst_12831))
{var statearr_12861_12885 = state_12844__$1;(statearr_12861_12885[1] = 13);
} else
{var statearr_12862_12886 = state_12844__$1;(statearr_12862_12886[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 13))
{var inst_12833 = cljs.core.async.close_BANG_.call(null,out);var state_12844__$1 = state_12844;var statearr_12863_12887 = state_12844__$1;(statearr_12863_12887[2] = inst_12833);
(statearr_12863_12887[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 14))
{var inst_12830 = (state_12844[12]);var inst_12835 = cljs.core.apply.call(null,f,inst_12830);var state_12844__$1 = state_12844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12844__$1,16,out,inst_12835);
} else
{if((state_val_12845 === 15))
{var inst_12840 = (state_12844[2]);var state_12844__$1 = state_12844;var statearr_12864_12888 = state_12844__$1;(statearr_12864_12888[2] = inst_12840);
(statearr_12864_12888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12845 === 16))
{var inst_12837 = (state_12844[2]);var state_12844__$1 = (function (){var statearr_12865 = state_12844;(statearr_12865[13] = inst_12837);
return statearr_12865;
})();var statearr_12866_12889 = state_12844__$1;(statearr_12866_12889[2] = null);
(statearr_12866_12889[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_12870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12870[0] = state_machine__6203__auto__);
(statearr_12870[1] = 1);
return statearr_12870;
});
var state_machine__6203__auto____1 = (function (state_12844){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_12844);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e12871){if((e12871 instanceof Object))
{var ex__6206__auto__ = e12871;var statearr_12872_12890 = state_12844;(statearr_12872_12890[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12891 = state_12844;
state_12844 = G__12891;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_12844){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_12844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_12873 = f__6218__auto__.call(null);(statearr_12873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___12874);
return statearr_12873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___12999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_12975){var state_val_12976 = (state_12975[1]);if((state_val_12976 === 1))
{var inst_12946 = cljs.core.vec.call(null,chs);var inst_12947 = inst_12946;var state_12975__$1 = (function (){var statearr_12977 = state_12975;(statearr_12977[7] = inst_12947);
return statearr_12977;
})();var statearr_12978_13000 = state_12975__$1;(statearr_12978_13000[2] = null);
(statearr_12978_13000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 2))
{var inst_12947 = (state_12975[7]);var inst_12949 = cljs.core.count.call(null,inst_12947);var inst_12950 = (inst_12949 > 0);var state_12975__$1 = state_12975;if(cljs.core.truth_(inst_12950))
{var statearr_12979_13001 = state_12975__$1;(statearr_12979_13001[1] = 4);
} else
{var statearr_12980_13002 = state_12975__$1;(statearr_12980_13002[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 3))
{var inst_12973 = (state_12975[2]);var state_12975__$1 = state_12975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12975__$1,inst_12973);
} else
{if((state_val_12976 === 4))
{var inst_12947 = (state_12975[7]);var state_12975__$1 = state_12975;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12975__$1,7,inst_12947);
} else
{if((state_val_12976 === 5))
{var inst_12969 = cljs.core.async.close_BANG_.call(null,out);var state_12975__$1 = state_12975;var statearr_12981_13003 = state_12975__$1;(statearr_12981_13003[2] = inst_12969);
(statearr_12981_13003[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 6))
{var inst_12971 = (state_12975[2]);var state_12975__$1 = state_12975;var statearr_12982_13004 = state_12975__$1;(statearr_12982_13004[2] = inst_12971);
(statearr_12982_13004[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 7))
{var inst_12954 = (state_12975[8]);var inst_12955 = (state_12975[9]);var inst_12954__$1 = (state_12975[2]);var inst_12955__$1 = cljs.core.nth.call(null,inst_12954__$1,0,null);var inst_12956 = cljs.core.nth.call(null,inst_12954__$1,1,null);var inst_12957 = (inst_12955__$1 == null);var state_12975__$1 = (function (){var statearr_12983 = state_12975;(statearr_12983[10] = inst_12956);
(statearr_12983[8] = inst_12954__$1);
(statearr_12983[9] = inst_12955__$1);
return statearr_12983;
})();if(cljs.core.truth_(inst_12957))
{var statearr_12984_13005 = state_12975__$1;(statearr_12984_13005[1] = 8);
} else
{var statearr_12985_13006 = state_12975__$1;(statearr_12985_13006[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 8))
{var inst_12956 = (state_12975[10]);var inst_12947 = (state_12975[7]);var inst_12954 = (state_12975[8]);var inst_12955 = (state_12975[9]);var inst_12959 = (function (){var c = inst_12956;var v = inst_12955;var vec__12952 = inst_12954;var cs = inst_12947;return ((function (c,v,vec__12952,cs,inst_12956,inst_12947,inst_12954,inst_12955,state_val_12976){
return (function (p1__12892_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12892_SHARP_);
});
;})(c,v,vec__12952,cs,inst_12956,inst_12947,inst_12954,inst_12955,state_val_12976))
})();var inst_12960 = cljs.core.filterv.call(null,inst_12959,inst_12947);var inst_12947__$1 = inst_12960;var state_12975__$1 = (function (){var statearr_12986 = state_12975;(statearr_12986[7] = inst_12947__$1);
return statearr_12986;
})();var statearr_12987_13007 = state_12975__$1;(statearr_12987_13007[2] = null);
(statearr_12987_13007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 9))
{var inst_12955 = (state_12975[9]);var state_12975__$1 = state_12975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12975__$1,11,out,inst_12955);
} else
{if((state_val_12976 === 10))
{var inst_12967 = (state_12975[2]);var state_12975__$1 = state_12975;var statearr_12989_13008 = state_12975__$1;(statearr_12989_13008[2] = inst_12967);
(statearr_12989_13008[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 11))
{var inst_12947 = (state_12975[7]);var inst_12964 = (state_12975[2]);var tmp12988 = inst_12947;var inst_12947__$1 = tmp12988;var state_12975__$1 = (function (){var statearr_12990 = state_12975;(statearr_12990[11] = inst_12964);
(statearr_12990[7] = inst_12947__$1);
return statearr_12990;
})();var statearr_12991_13009 = state_12975__$1;(statearr_12991_13009[2] = null);
(statearr_12991_13009[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_12995 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12995[0] = state_machine__6203__auto__);
(statearr_12995[1] = 1);
return statearr_12995;
});
var state_machine__6203__auto____1 = (function (state_12975){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_12975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e12996){if((e12996 instanceof Object))
{var ex__6206__auto__ = e12996;var statearr_12997_13010 = state_12975;(statearr_12997_13010[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13011 = state_12975;
state_12975 = G__13011;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_12975){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_12975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_12998 = f__6218__auto__.call(null);(statearr_12998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___12999);
return statearr_12998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___13104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_13081){var state_val_13082 = (state_13081[1]);if((state_val_13082 === 1))
{var inst_13058 = 0;var state_13081__$1 = (function (){var statearr_13083 = state_13081;(statearr_13083[7] = inst_13058);
return statearr_13083;
})();var statearr_13084_13105 = state_13081__$1;(statearr_13084_13105[2] = null);
(statearr_13084_13105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 2))
{var inst_13058 = (state_13081[7]);var inst_13060 = (inst_13058 < n);var state_13081__$1 = state_13081;if(cljs.core.truth_(inst_13060))
{var statearr_13085_13106 = state_13081__$1;(statearr_13085_13106[1] = 4);
} else
{var statearr_13086_13107 = state_13081__$1;(statearr_13086_13107[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 3))
{var inst_13078 = (state_13081[2]);var inst_13079 = cljs.core.async.close_BANG_.call(null,out);var state_13081__$1 = (function (){var statearr_13087 = state_13081;(statearr_13087[8] = inst_13078);
return statearr_13087;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13081__$1,inst_13079);
} else
{if((state_val_13082 === 4))
{var state_13081__$1 = state_13081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13081__$1,7,ch);
} else
{if((state_val_13082 === 5))
{var state_13081__$1 = state_13081;var statearr_13088_13108 = state_13081__$1;(statearr_13088_13108[2] = null);
(statearr_13088_13108[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 6))
{var inst_13076 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13089_13109 = state_13081__$1;(statearr_13089_13109[2] = inst_13076);
(statearr_13089_13109[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 7))
{var inst_13063 = (state_13081[9]);var inst_13063__$1 = (state_13081[2]);var inst_13064 = (inst_13063__$1 == null);var inst_13065 = cljs.core.not.call(null,inst_13064);var state_13081__$1 = (function (){var statearr_13090 = state_13081;(statearr_13090[9] = inst_13063__$1);
return statearr_13090;
})();if(inst_13065)
{var statearr_13091_13110 = state_13081__$1;(statearr_13091_13110[1] = 8);
} else
{var statearr_13092_13111 = state_13081__$1;(statearr_13092_13111[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 8))
{var inst_13063 = (state_13081[9]);var state_13081__$1 = state_13081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13081__$1,11,out,inst_13063);
} else
{if((state_val_13082 === 9))
{var state_13081__$1 = state_13081;var statearr_13093_13112 = state_13081__$1;(statearr_13093_13112[2] = null);
(statearr_13093_13112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 10))
{var inst_13073 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13094_13113 = state_13081__$1;(statearr_13094_13113[2] = inst_13073);
(statearr_13094_13113[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 11))
{var inst_13058 = (state_13081[7]);var inst_13068 = (state_13081[2]);var inst_13069 = (inst_13058 + 1);var inst_13058__$1 = inst_13069;var state_13081__$1 = (function (){var statearr_13095 = state_13081;(statearr_13095[10] = inst_13068);
(statearr_13095[7] = inst_13058__$1);
return statearr_13095;
})();var statearr_13096_13114 = state_13081__$1;(statearr_13096_13114[2] = null);
(statearr_13096_13114[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_13100 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13100[0] = state_machine__6203__auto__);
(statearr_13100[1] = 1);
return statearr_13100;
});
var state_machine__6203__auto____1 = (function (state_13081){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_13081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e13101){if((e13101 instanceof Object))
{var ex__6206__auto__ = e13101;var statearr_13102_13115 = state_13081;(statearr_13102_13115[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13116 = state_13081;
state_13081 = G__13116;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_13081){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_13081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_13103 = f__6218__auto__.call(null);(statearr_13103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___13104);
return statearr_13103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___13213 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_13188){var state_val_13189 = (state_13188[1]);if((state_val_13189 === 1))
{var inst_13165 = null;var state_13188__$1 = (function (){var statearr_13190 = state_13188;(statearr_13190[7] = inst_13165);
return statearr_13190;
})();var statearr_13191_13214 = state_13188__$1;(statearr_13191_13214[2] = null);
(statearr_13191_13214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 2))
{var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,4,ch);
} else
{if((state_val_13189 === 3))
{var inst_13185 = (state_13188[2]);var inst_13186 = cljs.core.async.close_BANG_.call(null,out);var state_13188__$1 = (function (){var statearr_13192 = state_13188;(statearr_13192[8] = inst_13185);
return statearr_13192;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else
{if((state_val_13189 === 4))
{var inst_13168 = (state_13188[9]);var inst_13168__$1 = (state_13188[2]);var inst_13169 = (inst_13168__$1 == null);var inst_13170 = cljs.core.not.call(null,inst_13169);var state_13188__$1 = (function (){var statearr_13193 = state_13188;(statearr_13193[9] = inst_13168__$1);
return statearr_13193;
})();if(inst_13170)
{var statearr_13194_13215 = state_13188__$1;(statearr_13194_13215[1] = 5);
} else
{var statearr_13195_13216 = state_13188__$1;(statearr_13195_13216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 5))
{var inst_13168 = (state_13188[9]);var inst_13165 = (state_13188[7]);var inst_13172 = cljs.core._EQ_.call(null,inst_13168,inst_13165);var state_13188__$1 = state_13188;if(inst_13172)
{var statearr_13196_13217 = state_13188__$1;(statearr_13196_13217[1] = 8);
} else
{var statearr_13197_13218 = state_13188__$1;(statearr_13197_13218[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 6))
{var state_13188__$1 = state_13188;var statearr_13199_13219 = state_13188__$1;(statearr_13199_13219[2] = null);
(statearr_13199_13219[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 7))
{var inst_13183 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13200_13220 = state_13188__$1;(statearr_13200_13220[2] = inst_13183);
(statearr_13200_13220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 8))
{var inst_13165 = (state_13188[7]);var tmp13198 = inst_13165;var inst_13165__$1 = tmp13198;var state_13188__$1 = (function (){var statearr_13201 = state_13188;(statearr_13201[7] = inst_13165__$1);
return statearr_13201;
})();var statearr_13202_13221 = state_13188__$1;(statearr_13202_13221[2] = null);
(statearr_13202_13221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 9))
{var inst_13168 = (state_13188[9]);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,11,out,inst_13168);
} else
{if((state_val_13189 === 10))
{var inst_13180 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13203_13222 = state_13188__$1;(statearr_13203_13222[2] = inst_13180);
(statearr_13203_13222[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 11))
{var inst_13168 = (state_13188[9]);var inst_13177 = (state_13188[2]);var inst_13165 = inst_13168;var state_13188__$1 = (function (){var statearr_13204 = state_13188;(statearr_13204[7] = inst_13165);
(statearr_13204[10] = inst_13177);
return statearr_13204;
})();var statearr_13205_13223 = state_13188__$1;(statearr_13205_13223[2] = null);
(statearr_13205_13223[1] = 2);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_13209 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13209[0] = state_machine__6203__auto__);
(statearr_13209[1] = 1);
return statearr_13209;
});
var state_machine__6203__auto____1 = (function (state_13188){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_13188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e13210){if((e13210 instanceof Object))
{var ex__6206__auto__ = e13210;var statearr_13211_13224 = state_13188;(statearr_13211_13224[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13225 = state_13188;
state_13188 = G__13225;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_13212 = f__6218__auto__.call(null);(statearr_13212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___13213);
return statearr_13212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___13360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_13330){var state_val_13331 = (state_13330[1]);if((state_val_13331 === 1))
{var inst_13293 = (new Array(n));var inst_13294 = inst_13293;var inst_13295 = 0;var state_13330__$1 = (function (){var statearr_13332 = state_13330;(statearr_13332[7] = inst_13295);
(statearr_13332[8] = inst_13294);
return statearr_13332;
})();var statearr_13333_13361 = state_13330__$1;(statearr_13333_13361[2] = null);
(statearr_13333_13361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 2))
{var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13330__$1,4,ch);
} else
{if((state_val_13331 === 3))
{var inst_13328 = (state_13330[2]);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13330__$1,inst_13328);
} else
{if((state_val_13331 === 4))
{var inst_13298 = (state_13330[9]);var inst_13298__$1 = (state_13330[2]);var inst_13299 = (inst_13298__$1 == null);var inst_13300 = cljs.core.not.call(null,inst_13299);var state_13330__$1 = (function (){var statearr_13334 = state_13330;(statearr_13334[9] = inst_13298__$1);
return statearr_13334;
})();if(inst_13300)
{var statearr_13335_13362 = state_13330__$1;(statearr_13335_13362[1] = 5);
} else
{var statearr_13336_13363 = state_13330__$1;(statearr_13336_13363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 5))
{var inst_13298 = (state_13330[9]);var inst_13303 = (state_13330[10]);var inst_13295 = (state_13330[7]);var inst_13294 = (state_13330[8]);var inst_13302 = (inst_13294[inst_13295] = inst_13298);var inst_13303__$1 = (inst_13295 + 1);var inst_13304 = (inst_13303__$1 < n);var state_13330__$1 = (function (){var statearr_13337 = state_13330;(statearr_13337[10] = inst_13303__$1);
(statearr_13337[11] = inst_13302);
return statearr_13337;
})();if(cljs.core.truth_(inst_13304))
{var statearr_13338_13364 = state_13330__$1;(statearr_13338_13364[1] = 8);
} else
{var statearr_13339_13365 = state_13330__$1;(statearr_13339_13365[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 6))
{var inst_13295 = (state_13330[7]);var inst_13316 = (inst_13295 > 0);var state_13330__$1 = state_13330;if(cljs.core.truth_(inst_13316))
{var statearr_13341_13366 = state_13330__$1;(statearr_13341_13366[1] = 12);
} else
{var statearr_13342_13367 = state_13330__$1;(statearr_13342_13367[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 7))
{var inst_13326 = (state_13330[2]);var state_13330__$1 = state_13330;var statearr_13343_13368 = state_13330__$1;(statearr_13343_13368[2] = inst_13326);
(statearr_13343_13368[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 8))
{var inst_13303 = (state_13330[10]);var inst_13294 = (state_13330[8]);var tmp13340 = inst_13294;var inst_13294__$1 = tmp13340;var inst_13295 = inst_13303;var state_13330__$1 = (function (){var statearr_13344 = state_13330;(statearr_13344[7] = inst_13295);
(statearr_13344[8] = inst_13294__$1);
return statearr_13344;
})();var statearr_13345_13369 = state_13330__$1;(statearr_13345_13369[2] = null);
(statearr_13345_13369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 9))
{var inst_13294 = (state_13330[8]);var inst_13308 = cljs.core.vec.call(null,inst_13294);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13330__$1,11,out,inst_13308);
} else
{if((state_val_13331 === 10))
{var inst_13314 = (state_13330[2]);var state_13330__$1 = state_13330;var statearr_13346_13370 = state_13330__$1;(statearr_13346_13370[2] = inst_13314);
(statearr_13346_13370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 11))
{var inst_13310 = (state_13330[2]);var inst_13311 = (new Array(n));var inst_13294 = inst_13311;var inst_13295 = 0;var state_13330__$1 = (function (){var statearr_13347 = state_13330;(statearr_13347[12] = inst_13310);
(statearr_13347[7] = inst_13295);
(statearr_13347[8] = inst_13294);
return statearr_13347;
})();var statearr_13348_13371 = state_13330__$1;(statearr_13348_13371[2] = null);
(statearr_13348_13371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 12))
{var inst_13294 = (state_13330[8]);var inst_13318 = cljs.core.vec.call(null,inst_13294);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13330__$1,15,out,inst_13318);
} else
{if((state_val_13331 === 13))
{var state_13330__$1 = state_13330;var statearr_13349_13372 = state_13330__$1;(statearr_13349_13372[2] = null);
(statearr_13349_13372[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 14))
{var inst_13323 = (state_13330[2]);var inst_13324 = cljs.core.async.close_BANG_.call(null,out);var state_13330__$1 = (function (){var statearr_13350 = state_13330;(statearr_13350[13] = inst_13323);
return statearr_13350;
})();var statearr_13351_13373 = state_13330__$1;(statearr_13351_13373[2] = inst_13324);
(statearr_13351_13373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13331 === 15))
{var inst_13320 = (state_13330[2]);var state_13330__$1 = state_13330;var statearr_13352_13374 = state_13330__$1;(statearr_13352_13374[2] = inst_13320);
(statearr_13352_13374[1] = 14);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_13356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13356[0] = state_machine__6203__auto__);
(statearr_13356[1] = 1);
return statearr_13356;
});
var state_machine__6203__auto____1 = (function (state_13330){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_13330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e13357){if((e13357 instanceof Object))
{var ex__6206__auto__ = e13357;var statearr_13358_13375 = state_13330;(statearr_13358_13375[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13376 = state_13330;
state_13330 = G__13376;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_13330){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_13330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_13359 = f__6218__auto__.call(null);(statearr_13359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___13360);
return statearr_13359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6217__auto___13519 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6218__auto__ = (function (){var switch__6202__auto__ = (function (state_13489){var state_val_13490 = (state_13489[1]);if((state_val_13490 === 1))
{var inst_13448 = [];var inst_13449 = inst_13448;var inst_13450 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13489__$1 = (function (){var statearr_13491 = state_13489;(statearr_13491[7] = inst_13450);
(statearr_13491[8] = inst_13449);
return statearr_13491;
})();var statearr_13492_13520 = state_13489__$1;(statearr_13492_13520[2] = null);
(statearr_13492_13520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 2))
{var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13489__$1,4,ch);
} else
{if((state_val_13490 === 3))
{var inst_13487 = (state_13489[2]);var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13489__$1,inst_13487);
} else
{if((state_val_13490 === 4))
{var inst_13453 = (state_13489[9]);var inst_13453__$1 = (state_13489[2]);var inst_13454 = (inst_13453__$1 == null);var inst_13455 = cljs.core.not.call(null,inst_13454);var state_13489__$1 = (function (){var statearr_13493 = state_13489;(statearr_13493[9] = inst_13453__$1);
return statearr_13493;
})();if(inst_13455)
{var statearr_13494_13521 = state_13489__$1;(statearr_13494_13521[1] = 5);
} else
{var statearr_13495_13522 = state_13489__$1;(statearr_13495_13522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 5))
{var inst_13453 = (state_13489[9]);var inst_13450 = (state_13489[7]);var inst_13457 = (state_13489[10]);var inst_13457__$1 = f.call(null,inst_13453);var inst_13458 = cljs.core._EQ_.call(null,inst_13457__$1,inst_13450);var inst_13459 = cljs.core.keyword_identical_QMARK_.call(null,inst_13450,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13460 = (inst_13458) || (inst_13459);var state_13489__$1 = (function (){var statearr_13496 = state_13489;(statearr_13496[10] = inst_13457__$1);
return statearr_13496;
})();if(cljs.core.truth_(inst_13460))
{var statearr_13497_13523 = state_13489__$1;(statearr_13497_13523[1] = 8);
} else
{var statearr_13498_13524 = state_13489__$1;(statearr_13498_13524[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 6))
{var inst_13449 = (state_13489[8]);var inst_13474 = inst_13449.length;var inst_13475 = (inst_13474 > 0);var state_13489__$1 = state_13489;if(cljs.core.truth_(inst_13475))
{var statearr_13500_13525 = state_13489__$1;(statearr_13500_13525[1] = 12);
} else
{var statearr_13501_13526 = state_13489__$1;(statearr_13501_13526[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 7))
{var inst_13485 = (state_13489[2]);var state_13489__$1 = state_13489;var statearr_13502_13527 = state_13489__$1;(statearr_13502_13527[2] = inst_13485);
(statearr_13502_13527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 8))
{var inst_13453 = (state_13489[9]);var inst_13457 = (state_13489[10]);var inst_13449 = (state_13489[8]);var inst_13462 = inst_13449.push(inst_13453);var tmp13499 = inst_13449;var inst_13449__$1 = tmp13499;var inst_13450 = inst_13457;var state_13489__$1 = (function (){var statearr_13503 = state_13489;(statearr_13503[7] = inst_13450);
(statearr_13503[11] = inst_13462);
(statearr_13503[8] = inst_13449__$1);
return statearr_13503;
})();var statearr_13504_13528 = state_13489__$1;(statearr_13504_13528[2] = null);
(statearr_13504_13528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 9))
{var inst_13449 = (state_13489[8]);var inst_13465 = cljs.core.vec.call(null,inst_13449);var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13489__$1,11,out,inst_13465);
} else
{if((state_val_13490 === 10))
{var inst_13472 = (state_13489[2]);var state_13489__$1 = state_13489;var statearr_13505_13529 = state_13489__$1;(statearr_13505_13529[2] = inst_13472);
(statearr_13505_13529[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 11))
{var inst_13453 = (state_13489[9]);var inst_13457 = (state_13489[10]);var inst_13467 = (state_13489[2]);var inst_13468 = [];var inst_13469 = inst_13468.push(inst_13453);var inst_13449 = inst_13468;var inst_13450 = inst_13457;var state_13489__$1 = (function (){var statearr_13506 = state_13489;(statearr_13506[12] = inst_13469);
(statearr_13506[7] = inst_13450);
(statearr_13506[13] = inst_13467);
(statearr_13506[8] = inst_13449);
return statearr_13506;
})();var statearr_13507_13530 = state_13489__$1;(statearr_13507_13530[2] = null);
(statearr_13507_13530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 12))
{var inst_13449 = (state_13489[8]);var inst_13477 = cljs.core.vec.call(null,inst_13449);var state_13489__$1 = state_13489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13489__$1,15,out,inst_13477);
} else
{if((state_val_13490 === 13))
{var state_13489__$1 = state_13489;var statearr_13508_13531 = state_13489__$1;(statearr_13508_13531[2] = null);
(statearr_13508_13531[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 14))
{var inst_13482 = (state_13489[2]);var inst_13483 = cljs.core.async.close_BANG_.call(null,out);var state_13489__$1 = (function (){var statearr_13509 = state_13489;(statearr_13509[14] = inst_13482);
return statearr_13509;
})();var statearr_13510_13532 = state_13489__$1;(statearr_13510_13532[2] = inst_13483);
(statearr_13510_13532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13490 === 15))
{var inst_13479 = (state_13489[2]);var state_13489__$1 = state_13489;var statearr_13511_13533 = state_13489__$1;(statearr_13511_13533[2] = inst_13479);
(statearr_13511_13533[1] = 14);
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
});return ((function (switch__6202__auto__){
return (function() {
var state_machine__6203__auto__ = null;
var state_machine__6203__auto____0 = (function (){var statearr_13515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13515[0] = state_machine__6203__auto__);
(statearr_13515[1] = 1);
return statearr_13515;
});
var state_machine__6203__auto____1 = (function (state_13489){while(true){
var ret_value__6204__auto__ = (function (){try{while(true){
var result__6205__auto__ = switch__6202__auto__.call(null,state_13489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6205__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6205__auto__;
}
break;
}
}catch (e13516){if((e13516 instanceof Object))
{var ex__6206__auto__ = e13516;var statearr_13517_13534 = state_13489;(statearr_13517_13534[5] = ex__6206__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6204__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13535 = state_13489;
state_13489 = G__13535;
continue;
}
} else
{return ret_value__6204__auto__;
}
break;
}
});
state_machine__6203__auto__ = function(state_13489){
switch(arguments.length){
case 0:
return state_machine__6203__auto____0.call(this);
case 1:
return state_machine__6203__auto____1.call(this,state_13489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6203__auto____0;
state_machine__6203__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6203__auto____1;
return state_machine__6203__auto__;
})()
;})(switch__6202__auto__))
})();var state__6219__auto__ = (function (){var statearr_13518 = f__6218__auto__.call(null);(statearr_13518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6217__auto___13519);
return statearr_13518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6219__auto__);
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