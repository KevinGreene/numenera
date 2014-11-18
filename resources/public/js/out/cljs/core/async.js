// Compiled by ClojureScript 0.0-2138
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11335 = (function (f,fn_handler,meta11336){
this.f = f;
this.fn_handler = fn_handler;
this.meta11336 = meta11336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11335.cljs$lang$type = true;
cljs.core.async.t11335.cljs$lang$ctorStr = "cljs.core.async/t11335";
cljs.core.async.t11335.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11335");
});
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11337){var self__ = this;
var _11337__$1 = this;return self__.meta11336;
});
cljs.core.async.t11335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11337,meta11336__$1){var self__ = this;
var _11337__$1 = this;return (new cljs.core.async.t11335(self__.f,self__.fn_handler,meta11336__$1));
});
cljs.core.async.__GT_t11335 = (function __GT_t11335(f__$1,fn_handler__$1,meta11336){return (new cljs.core.async.t11335(f__$1,fn_handler__$1,meta11336));
});
}
return (new cljs.core.async.t11335(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11339 = buff;if(G__11339)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__11339.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11339.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11339);
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
{var val_11340 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11340);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11340);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___11341 = n;var x_11342 = 0;while(true){
if((x_11342 < n__4250__auto___11341))
{(a[x_11342] = 0);
{
var G__11343 = (x_11342 + 1);
x_11342 = G__11343;
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
var G__11344 = (i + 1);
i = G__11344;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11348 = (function (flag,alt_flag,meta11349){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11349 = meta11349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11348.cljs$lang$type = true;
cljs.core.async.t11348.cljs$lang$ctorStr = "cljs.core.async/t11348";
cljs.core.async.t11348.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11348");
});
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11350){var self__ = this;
var _11350__$1 = this;return self__.meta11349;
});
cljs.core.async.t11348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11350,meta11349__$1){var self__ = this;
var _11350__$1 = this;return (new cljs.core.async.t11348(self__.flag,self__.alt_flag,meta11349__$1));
});
cljs.core.async.__GT_t11348 = (function __GT_t11348(flag__$1,alt_flag__$1,meta11349){return (new cljs.core.async.t11348(flag__$1,alt_flag__$1,meta11349));
});
}
return (new cljs.core.async.t11348(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11354 = (function (cb,flag,alt_handler,meta11355){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11355 = meta11355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11354.cljs$lang$type = true;
cljs.core.async.t11354.cljs$lang$ctorStr = "cljs.core.async/t11354";
cljs.core.async.t11354.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11354");
});
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11356){var self__ = this;
var _11356__$1 = this;return self__.meta11355;
});
cljs.core.async.t11354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11356,meta11355__$1){var self__ = this;
var _11356__$1 = this;return (new cljs.core.async.t11354(self__.cb,self__.flag,self__.alt_handler,meta11355__$1));
});
cljs.core.async.__GT_t11354 = (function __GT_t11354(cb__$1,flag__$1,alt_handler__$1,meta11355){return (new cljs.core.async.t11354(cb__$1,flag__$1,alt_handler__$1,meta11355));
});
}
return (new cljs.core.async.t11354(cb,flag,alt_handler,null));
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
return (function (p1__11357_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11357_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11358 = (i + 1);
i = G__11358;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
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
var alts_BANG___delegate = function (ports,p__11359){var map__11361 = p__11359;var map__11361__$1 = ((cljs.core.seq_QMARK_.call(null,map__11361))?cljs.core.apply.call(null,cljs.core.hash_map,map__11361):map__11361);var opts = map__11361__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11359 = null;if (arguments.length > 1) {
  p__11359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11359);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11362){
var ports = cljs.core.first(arglist__11362);
var p__11359 = cljs.core.rest(arglist__11362);
return alts_BANG___delegate(ports,p__11359);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11370 = (function (ch,f,map_LT_,meta11371){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11371 = meta11371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11370.cljs$lang$type = true;
cljs.core.async.t11370.cljs$lang$ctorStr = "cljs.core.async/t11370";
cljs.core.async.t11370.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11370");
});
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11373 = (function (fn1,_,meta11371,ch,f,map_LT_,meta11374){
this.fn1 = fn1;
this._ = _;
this.meta11371 = meta11371;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11374 = meta11374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11373.cljs$lang$type = true;
cljs.core.async.t11373.cljs$lang$ctorStr = "cljs.core.async/t11373";
cljs.core.async.t11373.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11373");
});
cljs.core.async.t11373.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11373.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11363_SHARP_){return f1.call(null,(((p1__11363_SHARP_ == null))?null:self__.f.call(null,p1__11363_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11375){var self__ = this;
var _11375__$1 = this;return self__.meta11374;
});
cljs.core.async.t11373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11375,meta11374__$1){var self__ = this;
var _11375__$1 = this;return (new cljs.core.async.t11373(self__.fn1,self__._,self__.meta11371,self__.ch,self__.f,self__.map_LT_,meta11374__$1));
});
cljs.core.async.__GT_t11373 = (function __GT_t11373(fn1__$1,___$2,meta11371__$1,ch__$2,f__$2,map_LT___$2,meta11374){return (new cljs.core.async.t11373(fn1__$1,___$2,meta11371__$1,ch__$2,f__$2,map_LT___$2,meta11374));
});
}
return (new cljs.core.async.t11373(fn1,___$1,self__.meta11371,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11372){var self__ = this;
var _11372__$1 = this;return self__.meta11371;
});
cljs.core.async.t11370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11372,meta11371__$1){var self__ = this;
var _11372__$1 = this;return (new cljs.core.async.t11370(self__.ch,self__.f,self__.map_LT_,meta11371__$1));
});
cljs.core.async.__GT_t11370 = (function __GT_t11370(ch__$1,f__$1,map_LT___$1,meta11371){return (new cljs.core.async.t11370(ch__$1,f__$1,map_LT___$1,meta11371));
});
}
return (new cljs.core.async.t11370(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11379 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11379 = (function (ch,f,map_GT_,meta11380){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11380 = meta11380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11379.cljs$lang$type = true;
cljs.core.async.t11379.cljs$lang$ctorStr = "cljs.core.async/t11379";
cljs.core.async.t11379.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11379");
});
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11381){var self__ = this;
var _11381__$1 = this;return self__.meta11380;
});
cljs.core.async.t11379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11381,meta11380__$1){var self__ = this;
var _11381__$1 = this;return (new cljs.core.async.t11379(self__.ch,self__.f,self__.map_GT_,meta11380__$1));
});
cljs.core.async.__GT_t11379 = (function __GT_t11379(ch__$1,f__$1,map_GT___$1,meta11380){return (new cljs.core.async.t11379(ch__$1,f__$1,map_GT___$1,meta11380));
});
}
return (new cljs.core.async.t11379(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11385 = (function (ch,p,filter_GT_,meta11386){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11386 = meta11386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11385.cljs$lang$type = true;
cljs.core.async.t11385.cljs$lang$ctorStr = "cljs.core.async/t11385";
cljs.core.async.t11385.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11385");
});
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11387){var self__ = this;
var _11387__$1 = this;return self__.meta11386;
});
cljs.core.async.t11385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11387,meta11386__$1){var self__ = this;
var _11387__$1 = this;return (new cljs.core.async.t11385(self__.ch,self__.p,self__.filter_GT_,meta11386__$1));
});
cljs.core.async.__GT_t11385 = (function __GT_t11385(ch__$1,p__$1,filter_GT___$1,meta11386){return (new cljs.core.async.t11385(ch__$1,p__$1,filter_GT___$1,meta11386));
});
}
return (new cljs.core.async.t11385(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___11470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11449){var state_val_11450 = (state_11449[1]);if((state_val_11450 === 1))
{var state_11449__$1 = state_11449;var statearr_11451_11471 = state_11449__$1;(statearr_11451_11471[2] = null);
(statearr_11451_11471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 2))
{var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11449__$1,4,ch);
} else
{if((state_val_11450 === 3))
{var inst_11447 = (state_11449[2]);var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11449__$1,inst_11447);
} else
{if((state_val_11450 === 4))
{var inst_11431 = (state_11449[7]);var inst_11431__$1 = (state_11449[2]);var inst_11432 = (inst_11431__$1 == null);var state_11449__$1 = (function (){var statearr_11452 = state_11449;(statearr_11452[7] = inst_11431__$1);
return statearr_11452;
})();if(cljs.core.truth_(inst_11432))
{var statearr_11453_11472 = state_11449__$1;(statearr_11453_11472[1] = 5);
} else
{var statearr_11454_11473 = state_11449__$1;(statearr_11454_11473[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 5))
{var inst_11434 = cljs.core.async.close_BANG_.call(null,out);var state_11449__$1 = state_11449;var statearr_11455_11474 = state_11449__$1;(statearr_11455_11474[2] = inst_11434);
(statearr_11455_11474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 6))
{var inst_11431 = (state_11449[7]);var inst_11436 = p.call(null,inst_11431);var state_11449__$1 = state_11449;if(cljs.core.truth_(inst_11436))
{var statearr_11456_11475 = state_11449__$1;(statearr_11456_11475[1] = 8);
} else
{var statearr_11457_11476 = state_11449__$1;(statearr_11457_11476[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 7))
{var inst_11445 = (state_11449[2]);var state_11449__$1 = state_11449;var statearr_11458_11477 = state_11449__$1;(statearr_11458_11477[2] = inst_11445);
(statearr_11458_11477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 8))
{var inst_11431 = (state_11449[7]);var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11449__$1,11,out,inst_11431);
} else
{if((state_val_11450 === 9))
{var state_11449__$1 = state_11449;var statearr_11459_11478 = state_11449__$1;(statearr_11459_11478[2] = null);
(statearr_11459_11478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 10))
{var inst_11442 = (state_11449[2]);var state_11449__$1 = (function (){var statearr_11460 = state_11449;(statearr_11460[8] = inst_11442);
return statearr_11460;
})();var statearr_11461_11479 = state_11449__$1;(statearr_11461_11479[2] = null);
(statearr_11461_11479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 11))
{var inst_11439 = (state_11449[2]);var state_11449__$1 = state_11449;var statearr_11462_11480 = state_11449__$1;(statearr_11462_11480[2] = inst_11439);
(statearr_11462_11480[1] = 10);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11466 = [null,null,null,null,null,null,null,null,null];(statearr_11466[0] = state_machine__6161__auto__);
(statearr_11466[1] = 1);
return statearr_11466;
});
var state_machine__6161__auto____1 = (function (state_11449){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11449);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11467){if((e11467 instanceof Object))
{var ex__6164__auto__ = e11467;var statearr_11468_11481 = state_11449;(statearr_11468_11481[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11482 = state_11449;
state_11449 = G__11482;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11449){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11469 = f__6176__auto__.call(null);(statearr_11469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11470);
return statearr_11469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11634){var state_val_11635 = (state_11634[1]);if((state_val_11635 === 1))
{var state_11634__$1 = state_11634;var statearr_11636_11673 = state_11634__$1;(statearr_11636_11673[2] = null);
(statearr_11636_11673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 2))
{var state_11634__$1 = state_11634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11634__$1,4,in$);
} else
{if((state_val_11635 === 3))
{var inst_11632 = (state_11634[2]);var state_11634__$1 = state_11634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11634__$1,inst_11632);
} else
{if((state_val_11635 === 4))
{var inst_11580 = (state_11634[7]);var inst_11580__$1 = (state_11634[2]);var inst_11581 = (inst_11580__$1 == null);var state_11634__$1 = (function (){var statearr_11637 = state_11634;(statearr_11637[7] = inst_11580__$1);
return statearr_11637;
})();if(cljs.core.truth_(inst_11581))
{var statearr_11638_11674 = state_11634__$1;(statearr_11638_11674[1] = 5);
} else
{var statearr_11639_11675 = state_11634__$1;(statearr_11639_11675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 5))
{var inst_11583 = cljs.core.async.close_BANG_.call(null,out);var state_11634__$1 = state_11634;var statearr_11640_11676 = state_11634__$1;(statearr_11640_11676[2] = inst_11583);
(statearr_11640_11676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 6))
{var inst_11580 = (state_11634[7]);var inst_11585 = f.call(null,inst_11580);var inst_11590 = cljs.core.seq.call(null,inst_11585);var inst_11591 = inst_11590;var inst_11592 = null;var inst_11593 = 0;var inst_11594 = 0;var state_11634__$1 = (function (){var statearr_11641 = state_11634;(statearr_11641[8] = inst_11593);
(statearr_11641[9] = inst_11594);
(statearr_11641[10] = inst_11591);
(statearr_11641[11] = inst_11592);
return statearr_11641;
})();var statearr_11642_11677 = state_11634__$1;(statearr_11642_11677[2] = null);
(statearr_11642_11677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 7))
{var inst_11630 = (state_11634[2]);var state_11634__$1 = state_11634;var statearr_11643_11678 = state_11634__$1;(statearr_11643_11678[2] = inst_11630);
(statearr_11643_11678[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 8))
{var inst_11593 = (state_11634[8]);var inst_11594 = (state_11634[9]);var inst_11596 = (inst_11594 < inst_11593);var inst_11597 = inst_11596;var state_11634__$1 = state_11634;if(cljs.core.truth_(inst_11597))
{var statearr_11644_11679 = state_11634__$1;(statearr_11644_11679[1] = 10);
} else
{var statearr_11645_11680 = state_11634__$1;(statearr_11645_11680[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 9))
{var inst_11627 = (state_11634[2]);var state_11634__$1 = (function (){var statearr_11646 = state_11634;(statearr_11646[12] = inst_11627);
return statearr_11646;
})();var statearr_11647_11681 = state_11634__$1;(statearr_11647_11681[2] = null);
(statearr_11647_11681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 10))
{var inst_11594 = (state_11634[9]);var inst_11592 = (state_11634[11]);var inst_11599 = cljs.core._nth.call(null,inst_11592,inst_11594);var state_11634__$1 = state_11634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11634__$1,13,out,inst_11599);
} else
{if((state_val_11635 === 11))
{var inst_11591 = (state_11634[10]);var inst_11605 = (state_11634[13]);var inst_11605__$1 = cljs.core.seq.call(null,inst_11591);var state_11634__$1 = (function (){var statearr_11651 = state_11634;(statearr_11651[13] = inst_11605__$1);
return statearr_11651;
})();if(inst_11605__$1)
{var statearr_11652_11682 = state_11634__$1;(statearr_11652_11682[1] = 14);
} else
{var statearr_11653_11683 = state_11634__$1;(statearr_11653_11683[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 12))
{var inst_11625 = (state_11634[2]);var state_11634__$1 = state_11634;var statearr_11654_11684 = state_11634__$1;(statearr_11654_11684[2] = inst_11625);
(statearr_11654_11684[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 13))
{var inst_11593 = (state_11634[8]);var inst_11594 = (state_11634[9]);var inst_11591 = (state_11634[10]);var inst_11592 = (state_11634[11]);var inst_11601 = (state_11634[2]);var inst_11602 = (inst_11594 + 1);var tmp11648 = inst_11593;var tmp11649 = inst_11591;var tmp11650 = inst_11592;var inst_11591__$1 = tmp11649;var inst_11592__$1 = tmp11650;var inst_11593__$1 = tmp11648;var inst_11594__$1 = inst_11602;var state_11634__$1 = (function (){var statearr_11655 = state_11634;(statearr_11655[14] = inst_11601);
(statearr_11655[8] = inst_11593__$1);
(statearr_11655[9] = inst_11594__$1);
(statearr_11655[10] = inst_11591__$1);
(statearr_11655[11] = inst_11592__$1);
return statearr_11655;
})();var statearr_11656_11685 = state_11634__$1;(statearr_11656_11685[2] = null);
(statearr_11656_11685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 14))
{var inst_11605 = (state_11634[13]);var inst_11607 = cljs.core.chunked_seq_QMARK_.call(null,inst_11605);var state_11634__$1 = state_11634;if(inst_11607)
{var statearr_11657_11686 = state_11634__$1;(statearr_11657_11686[1] = 17);
} else
{var statearr_11658_11687 = state_11634__$1;(statearr_11658_11687[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 15))
{var state_11634__$1 = state_11634;var statearr_11659_11688 = state_11634__$1;(statearr_11659_11688[2] = null);
(statearr_11659_11688[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 16))
{var inst_11623 = (state_11634[2]);var state_11634__$1 = state_11634;var statearr_11660_11689 = state_11634__$1;(statearr_11660_11689[2] = inst_11623);
(statearr_11660_11689[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 17))
{var inst_11605 = (state_11634[13]);var inst_11609 = cljs.core.chunk_first.call(null,inst_11605);var inst_11610 = cljs.core.chunk_rest.call(null,inst_11605);var inst_11611 = cljs.core.count.call(null,inst_11609);var inst_11591 = inst_11610;var inst_11592 = inst_11609;var inst_11593 = inst_11611;var inst_11594 = 0;var state_11634__$1 = (function (){var statearr_11661 = state_11634;(statearr_11661[8] = inst_11593);
(statearr_11661[9] = inst_11594);
(statearr_11661[10] = inst_11591);
(statearr_11661[11] = inst_11592);
return statearr_11661;
})();var statearr_11662_11690 = state_11634__$1;(statearr_11662_11690[2] = null);
(statearr_11662_11690[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 18))
{var inst_11605 = (state_11634[13]);var inst_11614 = cljs.core.first.call(null,inst_11605);var state_11634__$1 = state_11634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11634__$1,20,out,inst_11614);
} else
{if((state_val_11635 === 19))
{var inst_11620 = (state_11634[2]);var state_11634__$1 = state_11634;var statearr_11663_11691 = state_11634__$1;(statearr_11663_11691[2] = inst_11620);
(statearr_11663_11691[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11635 === 20))
{var inst_11605 = (state_11634[13]);var inst_11616 = (state_11634[2]);var inst_11617 = cljs.core.next.call(null,inst_11605);var inst_11591 = inst_11617;var inst_11592 = null;var inst_11593 = 0;var inst_11594 = 0;var state_11634__$1 = (function (){var statearr_11664 = state_11634;(statearr_11664[8] = inst_11593);
(statearr_11664[9] = inst_11594);
(statearr_11664[10] = inst_11591);
(statearr_11664[11] = inst_11592);
(statearr_11664[15] = inst_11616);
return statearr_11664;
})();var statearr_11665_11692 = state_11634__$1;(statearr_11665_11692[2] = null);
(statearr_11665_11692[1] = 8);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11669[0] = state_machine__6161__auto__);
(statearr_11669[1] = 1);
return statearr_11669;
});
var state_machine__6161__auto____1 = (function (state_11634){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11634);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11670){if((e11670 instanceof Object))
{var ex__6164__auto__ = e11670;var statearr_11671_11693 = state_11634;(statearr_11671_11693[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11694 = state_11634;
state_11634 = G__11694;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11634){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11672 = f__6176__auto__.call(null);(statearr_11672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6175__auto___11775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11754){var state_val_11755 = (state_11754[1]);if((state_val_11755 === 1))
{var state_11754__$1 = state_11754;var statearr_11756_11776 = state_11754__$1;(statearr_11756_11776[2] = null);
(statearr_11756_11776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 2))
{var state_11754__$1 = state_11754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11754__$1,4,from);
} else
{if((state_val_11755 === 3))
{var inst_11752 = (state_11754[2]);var state_11754__$1 = state_11754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11754__$1,inst_11752);
} else
{if((state_val_11755 === 4))
{var inst_11737 = (state_11754[7]);var inst_11737__$1 = (state_11754[2]);var inst_11738 = (inst_11737__$1 == null);var state_11754__$1 = (function (){var statearr_11757 = state_11754;(statearr_11757[7] = inst_11737__$1);
return statearr_11757;
})();if(cljs.core.truth_(inst_11738))
{var statearr_11758_11777 = state_11754__$1;(statearr_11758_11777[1] = 5);
} else
{var statearr_11759_11778 = state_11754__$1;(statearr_11759_11778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 5))
{var state_11754__$1 = state_11754;if(cljs.core.truth_(close_QMARK_))
{var statearr_11760_11779 = state_11754__$1;(statearr_11760_11779[1] = 8);
} else
{var statearr_11761_11780 = state_11754__$1;(statearr_11761_11780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 6))
{var inst_11737 = (state_11754[7]);var state_11754__$1 = state_11754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11754__$1,11,to,inst_11737);
} else
{if((state_val_11755 === 7))
{var inst_11750 = (state_11754[2]);var state_11754__$1 = state_11754;var statearr_11762_11781 = state_11754__$1;(statearr_11762_11781[2] = inst_11750);
(statearr_11762_11781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 8))
{var inst_11741 = cljs.core.async.close_BANG_.call(null,to);var state_11754__$1 = state_11754;var statearr_11763_11782 = state_11754__$1;(statearr_11763_11782[2] = inst_11741);
(statearr_11763_11782[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 9))
{var state_11754__$1 = state_11754;var statearr_11764_11783 = state_11754__$1;(statearr_11764_11783[2] = null);
(statearr_11764_11783[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 10))
{var inst_11744 = (state_11754[2]);var state_11754__$1 = state_11754;var statearr_11765_11784 = state_11754__$1;(statearr_11765_11784[2] = inst_11744);
(statearr_11765_11784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11755 === 11))
{var inst_11747 = (state_11754[2]);var state_11754__$1 = (function (){var statearr_11766 = state_11754;(statearr_11766[8] = inst_11747);
return statearr_11766;
})();var statearr_11767_11785 = state_11754__$1;(statearr_11767_11785[2] = null);
(statearr_11767_11785[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11771 = [null,null,null,null,null,null,null,null,null];(statearr_11771[0] = state_machine__6161__auto__);
(statearr_11771[1] = 1);
return statearr_11771;
});
var state_machine__6161__auto____1 = (function (state_11754){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11754);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11772){if((e11772 instanceof Object))
{var ex__6164__auto__ = e11772;var statearr_11773_11786 = state_11754;(statearr_11773_11786[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11787 = state_11754;
state_11754 = G__11787;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11754){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11774 = f__6176__auto__.call(null);(statearr_11774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11775);
return statearr_11774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6175__auto___11874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11852){var state_val_11853 = (state_11852[1]);if((state_val_11853 === 1))
{var state_11852__$1 = state_11852;var statearr_11854_11875 = state_11852__$1;(statearr_11854_11875[2] = null);
(statearr_11854_11875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 2))
{var state_11852__$1 = state_11852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11852__$1,4,ch);
} else
{if((state_val_11853 === 3))
{var inst_11850 = (state_11852[2]);var state_11852__$1 = state_11852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11852__$1,inst_11850);
} else
{if((state_val_11853 === 4))
{var inst_11833 = (state_11852[7]);var inst_11833__$1 = (state_11852[2]);var inst_11834 = (inst_11833__$1 == null);var state_11852__$1 = (function (){var statearr_11855 = state_11852;(statearr_11855[7] = inst_11833__$1);
return statearr_11855;
})();if(cljs.core.truth_(inst_11834))
{var statearr_11856_11876 = state_11852__$1;(statearr_11856_11876[1] = 5);
} else
{var statearr_11857_11877 = state_11852__$1;(statearr_11857_11877[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 5))
{var inst_11836 = cljs.core.async.close_BANG_.call(null,tc);var inst_11837 = cljs.core.async.close_BANG_.call(null,fc);var state_11852__$1 = (function (){var statearr_11858 = state_11852;(statearr_11858[8] = inst_11836);
return statearr_11858;
})();var statearr_11859_11878 = state_11852__$1;(statearr_11859_11878[2] = inst_11837);
(statearr_11859_11878[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 6))
{var inst_11833 = (state_11852[7]);var inst_11839 = p.call(null,inst_11833);var state_11852__$1 = state_11852;if(cljs.core.truth_(inst_11839))
{var statearr_11860_11879 = state_11852__$1;(statearr_11860_11879[1] = 9);
} else
{var statearr_11861_11880 = state_11852__$1;(statearr_11861_11880[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 7))
{var inst_11848 = (state_11852[2]);var state_11852__$1 = state_11852;var statearr_11862_11881 = state_11852__$1;(statearr_11862_11881[2] = inst_11848);
(statearr_11862_11881[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 8))
{var inst_11845 = (state_11852[2]);var state_11852__$1 = (function (){var statearr_11863 = state_11852;(statearr_11863[9] = inst_11845);
return statearr_11863;
})();var statearr_11864_11882 = state_11852__$1;(statearr_11864_11882[2] = null);
(statearr_11864_11882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 9))
{var state_11852__$1 = state_11852;var statearr_11865_11883 = state_11852__$1;(statearr_11865_11883[2] = tc);
(statearr_11865_11883[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 10))
{var state_11852__$1 = state_11852;var statearr_11866_11884 = state_11852__$1;(statearr_11866_11884[2] = fc);
(statearr_11866_11884[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 11))
{var inst_11833 = (state_11852[7]);var inst_11843 = (state_11852[2]);var state_11852__$1 = state_11852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11852__$1,8,inst_11843,inst_11833);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11870 = [null,null,null,null,null,null,null,null,null,null];(statearr_11870[0] = state_machine__6161__auto__);
(statearr_11870[1] = 1);
return statearr_11870;
});
var state_machine__6161__auto____1 = (function (state_11852){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11852);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11871){if((e11871 instanceof Object))
{var ex__6164__auto__ = e11871;var statearr_11872_11885 = state_11852;(statearr_11872_11885[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11886 = state_11852;
state_11852 = G__11886;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11852){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11873 = f__6176__auto__.call(null);(statearr_11873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11874);
return statearr_11873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11933){var state_val_11934 = (state_11933[1]);if((state_val_11934 === 7))
{var inst_11929 = (state_11933[2]);var state_11933__$1 = state_11933;var statearr_11935_11951 = state_11933__$1;(statearr_11935_11951[2] = inst_11929);
(statearr_11935_11951[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 6))
{var inst_11919 = (state_11933[7]);var inst_11922 = (state_11933[8]);var inst_11926 = f.call(null,inst_11919,inst_11922);var inst_11919__$1 = inst_11926;var state_11933__$1 = (function (){var statearr_11936 = state_11933;(statearr_11936[7] = inst_11919__$1);
return statearr_11936;
})();var statearr_11937_11952 = state_11933__$1;(statearr_11937_11952[2] = null);
(statearr_11937_11952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 5))
{var inst_11919 = (state_11933[7]);var state_11933__$1 = state_11933;var statearr_11938_11953 = state_11933__$1;(statearr_11938_11953[2] = inst_11919);
(statearr_11938_11953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 4))
{var inst_11922 = (state_11933[8]);var inst_11922__$1 = (state_11933[2]);var inst_11923 = (inst_11922__$1 == null);var state_11933__$1 = (function (){var statearr_11939 = state_11933;(statearr_11939[8] = inst_11922__$1);
return statearr_11939;
})();if(cljs.core.truth_(inst_11923))
{var statearr_11940_11954 = state_11933__$1;(statearr_11940_11954[1] = 5);
} else
{var statearr_11941_11955 = state_11933__$1;(statearr_11941_11955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 3))
{var inst_11931 = (state_11933[2]);var state_11933__$1 = state_11933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11933__$1,inst_11931);
} else
{if((state_val_11934 === 2))
{var state_11933__$1 = state_11933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11933__$1,4,ch);
} else
{if((state_val_11934 === 1))
{var inst_11919 = init;var state_11933__$1 = (function (){var statearr_11942 = state_11933;(statearr_11942[7] = inst_11919);
return statearr_11942;
})();var statearr_11943_11956 = state_11933__$1;(statearr_11943_11956[2] = null);
(statearr_11943_11956[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11947 = [null,null,null,null,null,null,null,null,null];(statearr_11947[0] = state_machine__6161__auto__);
(statearr_11947[1] = 1);
return statearr_11947;
});
var state_machine__6161__auto____1 = (function (state_11933){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11933);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11948){if((e11948 instanceof Object))
{var ex__6164__auto__ = e11948;var statearr_11949_11957 = state_11933;(statearr_11949_11957[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11958 = state_11933;
state_11933 = G__11958;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11933){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11950 = f__6176__auto__.call(null);(statearr_11950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12020){var state_val_12021 = (state_12020[1]);if((state_val_12021 === 1))
{var inst_12000 = cljs.core.seq.call(null,coll);var inst_12001 = inst_12000;var state_12020__$1 = (function (){var statearr_12022 = state_12020;(statearr_12022[7] = inst_12001);
return statearr_12022;
})();var statearr_12023_12041 = state_12020__$1;(statearr_12023_12041[2] = null);
(statearr_12023_12041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 2))
{var inst_12001 = (state_12020[7]);var state_12020__$1 = state_12020;if(cljs.core.truth_(inst_12001))
{var statearr_12024_12042 = state_12020__$1;(statearr_12024_12042[1] = 4);
} else
{var statearr_12025_12043 = state_12020__$1;(statearr_12025_12043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 3))
{var inst_12018 = (state_12020[2]);var state_12020__$1 = state_12020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12020__$1,inst_12018);
} else
{if((state_val_12021 === 4))
{var inst_12001 = (state_12020[7]);var inst_12004 = cljs.core.first.call(null,inst_12001);var state_12020__$1 = state_12020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12020__$1,7,ch,inst_12004);
} else
{if((state_val_12021 === 5))
{var state_12020__$1 = state_12020;if(cljs.core.truth_(close_QMARK_))
{var statearr_12026_12044 = state_12020__$1;(statearr_12026_12044[1] = 8);
} else
{var statearr_12027_12045 = state_12020__$1;(statearr_12027_12045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 6))
{var inst_12016 = (state_12020[2]);var state_12020__$1 = state_12020;var statearr_12028_12046 = state_12020__$1;(statearr_12028_12046[2] = inst_12016);
(statearr_12028_12046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 7))
{var inst_12001 = (state_12020[7]);var inst_12006 = (state_12020[2]);var inst_12007 = cljs.core.next.call(null,inst_12001);var inst_12001__$1 = inst_12007;var state_12020__$1 = (function (){var statearr_12029 = state_12020;(statearr_12029[7] = inst_12001__$1);
(statearr_12029[8] = inst_12006);
return statearr_12029;
})();var statearr_12030_12047 = state_12020__$1;(statearr_12030_12047[2] = null);
(statearr_12030_12047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 8))
{var inst_12011 = cljs.core.async.close_BANG_.call(null,ch);var state_12020__$1 = state_12020;var statearr_12031_12048 = state_12020__$1;(statearr_12031_12048[2] = inst_12011);
(statearr_12031_12048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 9))
{var state_12020__$1 = state_12020;var statearr_12032_12049 = state_12020__$1;(statearr_12032_12049[2] = null);
(statearr_12032_12049[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12021 === 10))
{var inst_12014 = (state_12020[2]);var state_12020__$1 = state_12020;var statearr_12033_12050 = state_12020__$1;(statearr_12033_12050[2] = inst_12014);
(statearr_12033_12050[1] = 6);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12037 = [null,null,null,null,null,null,null,null,null];(statearr_12037[0] = state_machine__6161__auto__);
(statearr_12037[1] = 1);
return statearr_12037;
});
var state_machine__6161__auto____1 = (function (state_12020){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object))
{var ex__6164__auto__ = e12038;var statearr_12039_12051 = state_12020;(statearr_12039_12051[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12052 = state_12020;
state_12020 = G__12052;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12020){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12040 = f__6176__auto__.call(null);(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_12040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
cljs.core.async.Mux = (function (){var obj12054 = {};return obj12054;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12056 = {};return obj12056;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12280 = (function (cs,ch,mult,meta12281){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12281 = meta12281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12280.cljs$lang$type = true;
cljs.core.async.t12280.cljs$lang$ctorStr = "cljs.core.async/t12280";
cljs.core.async.t12280.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12280");
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12282){var self__ = this;
var _12282__$1 = this;return self__.meta12281;
});})(cs))
;
cljs.core.async.t12280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12282,meta12281__$1){var self__ = this;
var _12282__$1 = this;return (new cljs.core.async.t12280(self__.cs,self__.ch,self__.mult,meta12281__$1));
});})(cs))
;
cljs.core.async.__GT_t12280 = ((function (cs){
return (function __GT_t12280(cs__$1,ch__$1,mult__$1,meta12281){return (new cljs.core.async.t12280(cs__$1,ch__$1,mult__$1,meta12281));
});})(cs))
;
}
return (new cljs.core.async.t12280(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6175__auto___12503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12417){var state_val_12418 = (state_12417[1]);if((state_val_12418 === 32))
{var inst_12361 = (state_12417[7]);var inst_12285 = (state_12417[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12417,31,Object,null,30);var inst_12368 = cljs.core.async.put_BANG_.call(null,inst_12361,inst_12285,done);var state_12417__$1 = state_12417;var statearr_12419_12504 = state_12417__$1;(statearr_12419_12504[2] = inst_12368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 1))
{var state_12417__$1 = state_12417;var statearr_12420_12505 = state_12417__$1;(statearr_12420_12505[2] = null);
(statearr_12420_12505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 33))
{var inst_12374 = (state_12417[9]);var inst_12376 = cljs.core.chunked_seq_QMARK_.call(null,inst_12374);var state_12417__$1 = state_12417;if(inst_12376)
{var statearr_12421_12506 = state_12417__$1;(statearr_12421_12506[1] = 36);
} else
{var statearr_12422_12507 = state_12417__$1;(statearr_12422_12507[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 2))
{var state_12417__$1 = state_12417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12417__$1,4,ch);
} else
{if((state_val_12418 === 34))
{var state_12417__$1 = state_12417;var statearr_12423_12508 = state_12417__$1;(statearr_12423_12508[2] = null);
(statearr_12423_12508[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 3))
{var inst_12415 = (state_12417[2]);var state_12417__$1 = state_12417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12417__$1,inst_12415);
} else
{if((state_val_12418 === 35))
{var inst_12399 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12424_12509 = state_12417__$1;(statearr_12424_12509[2] = inst_12399);
(statearr_12424_12509[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 4))
{var inst_12285 = (state_12417[8]);var inst_12285__$1 = (state_12417[2]);var inst_12286 = (inst_12285__$1 == null);var state_12417__$1 = (function (){var statearr_12425 = state_12417;(statearr_12425[8] = inst_12285__$1);
return statearr_12425;
})();if(cljs.core.truth_(inst_12286))
{var statearr_12426_12510 = state_12417__$1;(statearr_12426_12510[1] = 5);
} else
{var statearr_12427_12511 = state_12417__$1;(statearr_12427_12511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 36))
{var inst_12374 = (state_12417[9]);var inst_12378 = cljs.core.chunk_first.call(null,inst_12374);var inst_12379 = cljs.core.chunk_rest.call(null,inst_12374);var inst_12380 = cljs.core.count.call(null,inst_12378);var inst_12353 = inst_12379;var inst_12354 = inst_12378;var inst_12355 = inst_12380;var inst_12356 = 0;var state_12417__$1 = (function (){var statearr_12428 = state_12417;(statearr_12428[10] = inst_12356);
(statearr_12428[11] = inst_12355);
(statearr_12428[12] = inst_12354);
(statearr_12428[13] = inst_12353);
return statearr_12428;
})();var statearr_12429_12512 = state_12417__$1;(statearr_12429_12512[2] = null);
(statearr_12429_12512[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 5))
{var inst_12292 = cljs.core.deref.call(null,cs);var inst_12293 = cljs.core.seq.call(null,inst_12292);var inst_12294 = inst_12293;var inst_12295 = null;var inst_12296 = 0;var inst_12297 = 0;var state_12417__$1 = (function (){var statearr_12430 = state_12417;(statearr_12430[14] = inst_12297);
(statearr_12430[15] = inst_12295);
(statearr_12430[16] = inst_12296);
(statearr_12430[17] = inst_12294);
return statearr_12430;
})();var statearr_12431_12513 = state_12417__$1;(statearr_12431_12513[2] = null);
(statearr_12431_12513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 37))
{var inst_12374 = (state_12417[9]);var inst_12383 = cljs.core.first.call(null,inst_12374);var state_12417__$1 = (function (){var statearr_12432 = state_12417;(statearr_12432[18] = inst_12383);
return statearr_12432;
})();var statearr_12433_12514 = state_12417__$1;(statearr_12433_12514[2] = null);
(statearr_12433_12514[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 6))
{var inst_12345 = (state_12417[19]);var inst_12344 = cljs.core.deref.call(null,cs);var inst_12345__$1 = cljs.core.keys.call(null,inst_12344);var inst_12346 = cljs.core.count.call(null,inst_12345__$1);var inst_12347 = cljs.core.reset_BANG_.call(null,dctr,inst_12346);var inst_12352 = cljs.core.seq.call(null,inst_12345__$1);var inst_12353 = inst_12352;var inst_12354 = null;var inst_12355 = 0;var inst_12356 = 0;var state_12417__$1 = (function (){var statearr_12434 = state_12417;(statearr_12434[20] = inst_12347);
(statearr_12434[10] = inst_12356);
(statearr_12434[11] = inst_12355);
(statearr_12434[12] = inst_12354);
(statearr_12434[13] = inst_12353);
(statearr_12434[19] = inst_12345__$1);
return statearr_12434;
})();var statearr_12435_12515 = state_12417__$1;(statearr_12435_12515[2] = null);
(statearr_12435_12515[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 38))
{var inst_12396 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12436_12516 = state_12417__$1;(statearr_12436_12516[2] = inst_12396);
(statearr_12436_12516[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 7))
{var inst_12413 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12437_12517 = state_12417__$1;(statearr_12437_12517[2] = inst_12413);
(statearr_12437_12517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 39))
{var inst_12374 = (state_12417[9]);var inst_12392 = (state_12417[2]);var inst_12393 = cljs.core.next.call(null,inst_12374);var inst_12353 = inst_12393;var inst_12354 = null;var inst_12355 = 0;var inst_12356 = 0;var state_12417__$1 = (function (){var statearr_12438 = state_12417;(statearr_12438[10] = inst_12356);
(statearr_12438[11] = inst_12355);
(statearr_12438[12] = inst_12354);
(statearr_12438[13] = inst_12353);
(statearr_12438[21] = inst_12392);
return statearr_12438;
})();var statearr_12439_12518 = state_12417__$1;(statearr_12439_12518[2] = null);
(statearr_12439_12518[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 8))
{var inst_12297 = (state_12417[14]);var inst_12296 = (state_12417[16]);var inst_12299 = (inst_12297 < inst_12296);var inst_12300 = inst_12299;var state_12417__$1 = state_12417;if(cljs.core.truth_(inst_12300))
{var statearr_12440_12519 = state_12417__$1;(statearr_12440_12519[1] = 10);
} else
{var statearr_12441_12520 = state_12417__$1;(statearr_12441_12520[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 40))
{var inst_12383 = (state_12417[18]);var inst_12384 = (state_12417[2]);var inst_12385 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12386 = cljs.core.async.untap_STAR_.call(null,m,inst_12383);var state_12417__$1 = (function (){var statearr_12442 = state_12417;(statearr_12442[22] = inst_12385);
(statearr_12442[23] = inst_12384);
return statearr_12442;
})();var statearr_12443_12521 = state_12417__$1;(statearr_12443_12521[2] = inst_12386);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 9))
{var inst_12342 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12444_12522 = state_12417__$1;(statearr_12444_12522[2] = inst_12342);
(statearr_12444_12522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 41))
{var inst_12383 = (state_12417[18]);var inst_12285 = (state_12417[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12417,40,Object,null,39);var inst_12390 = cljs.core.async.put_BANG_.call(null,inst_12383,inst_12285,done);var state_12417__$1 = state_12417;var statearr_12445_12523 = state_12417__$1;(statearr_12445_12523[2] = inst_12390);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 10))
{var inst_12297 = (state_12417[14]);var inst_12295 = (state_12417[15]);var inst_12303 = cljs.core._nth.call(null,inst_12295,inst_12297);var inst_12304 = cljs.core.nth.call(null,inst_12303,0,null);var inst_12305 = cljs.core.nth.call(null,inst_12303,1,null);var state_12417__$1 = (function (){var statearr_12446 = state_12417;(statearr_12446[24] = inst_12304);
return statearr_12446;
})();if(cljs.core.truth_(inst_12305))
{var statearr_12447_12524 = state_12417__$1;(statearr_12447_12524[1] = 13);
} else
{var statearr_12448_12525 = state_12417__$1;(statearr_12448_12525[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 42))
{var state_12417__$1 = state_12417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12417__$1,45,dchan);
} else
{if((state_val_12418 === 11))
{var inst_12314 = (state_12417[25]);var inst_12294 = (state_12417[17]);var inst_12314__$1 = cljs.core.seq.call(null,inst_12294);var state_12417__$1 = (function (){var statearr_12449 = state_12417;(statearr_12449[25] = inst_12314__$1);
return statearr_12449;
})();if(inst_12314__$1)
{var statearr_12450_12526 = state_12417__$1;(statearr_12450_12526[1] = 16);
} else
{var statearr_12451_12527 = state_12417__$1;(statearr_12451_12527[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 43))
{var state_12417__$1 = state_12417;var statearr_12452_12528 = state_12417__$1;(statearr_12452_12528[2] = null);
(statearr_12452_12528[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 12))
{var inst_12340 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12453_12529 = state_12417__$1;(statearr_12453_12529[2] = inst_12340);
(statearr_12453_12529[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 44))
{var inst_12410 = (state_12417[2]);var state_12417__$1 = (function (){var statearr_12454 = state_12417;(statearr_12454[26] = inst_12410);
return statearr_12454;
})();var statearr_12455_12530 = state_12417__$1;(statearr_12455_12530[2] = null);
(statearr_12455_12530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 13))
{var inst_12304 = (state_12417[24]);var inst_12307 = cljs.core.async.close_BANG_.call(null,inst_12304);var state_12417__$1 = state_12417;var statearr_12456_12531 = state_12417__$1;(statearr_12456_12531[2] = inst_12307);
(statearr_12456_12531[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 45))
{var inst_12407 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12460_12532 = state_12417__$1;(statearr_12460_12532[2] = inst_12407);
(statearr_12460_12532[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 14))
{var state_12417__$1 = state_12417;var statearr_12461_12533 = state_12417__$1;(statearr_12461_12533[2] = null);
(statearr_12461_12533[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 15))
{var inst_12297 = (state_12417[14]);var inst_12295 = (state_12417[15]);var inst_12296 = (state_12417[16]);var inst_12294 = (state_12417[17]);var inst_12310 = (state_12417[2]);var inst_12311 = (inst_12297 + 1);var tmp12457 = inst_12295;var tmp12458 = inst_12296;var tmp12459 = inst_12294;var inst_12294__$1 = tmp12459;var inst_12295__$1 = tmp12457;var inst_12296__$1 = tmp12458;var inst_12297__$1 = inst_12311;var state_12417__$1 = (function (){var statearr_12462 = state_12417;(statearr_12462[27] = inst_12310);
(statearr_12462[14] = inst_12297__$1);
(statearr_12462[15] = inst_12295__$1);
(statearr_12462[16] = inst_12296__$1);
(statearr_12462[17] = inst_12294__$1);
return statearr_12462;
})();var statearr_12463_12534 = state_12417__$1;(statearr_12463_12534[2] = null);
(statearr_12463_12534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 16))
{var inst_12314 = (state_12417[25]);var inst_12316 = cljs.core.chunked_seq_QMARK_.call(null,inst_12314);var state_12417__$1 = state_12417;if(inst_12316)
{var statearr_12464_12535 = state_12417__$1;(statearr_12464_12535[1] = 19);
} else
{var statearr_12465_12536 = state_12417__$1;(statearr_12465_12536[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 17))
{var state_12417__$1 = state_12417;var statearr_12466_12537 = state_12417__$1;(statearr_12466_12537[2] = null);
(statearr_12466_12537[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 18))
{var inst_12338 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12467_12538 = state_12417__$1;(statearr_12467_12538[2] = inst_12338);
(statearr_12467_12538[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 19))
{var inst_12314 = (state_12417[25]);var inst_12318 = cljs.core.chunk_first.call(null,inst_12314);var inst_12319 = cljs.core.chunk_rest.call(null,inst_12314);var inst_12320 = cljs.core.count.call(null,inst_12318);var inst_12294 = inst_12319;var inst_12295 = inst_12318;var inst_12296 = inst_12320;var inst_12297 = 0;var state_12417__$1 = (function (){var statearr_12468 = state_12417;(statearr_12468[14] = inst_12297);
(statearr_12468[15] = inst_12295);
(statearr_12468[16] = inst_12296);
(statearr_12468[17] = inst_12294);
return statearr_12468;
})();var statearr_12469_12539 = state_12417__$1;(statearr_12469_12539[2] = null);
(statearr_12469_12539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 20))
{var inst_12314 = (state_12417[25]);var inst_12324 = cljs.core.first.call(null,inst_12314);var inst_12325 = cljs.core.nth.call(null,inst_12324,0,null);var inst_12326 = cljs.core.nth.call(null,inst_12324,1,null);var state_12417__$1 = (function (){var statearr_12470 = state_12417;(statearr_12470[28] = inst_12325);
return statearr_12470;
})();if(cljs.core.truth_(inst_12326))
{var statearr_12471_12540 = state_12417__$1;(statearr_12471_12540[1] = 22);
} else
{var statearr_12472_12541 = state_12417__$1;(statearr_12472_12541[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 21))
{var inst_12335 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12473_12542 = state_12417__$1;(statearr_12473_12542[2] = inst_12335);
(statearr_12473_12542[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 22))
{var inst_12325 = (state_12417[28]);var inst_12328 = cljs.core.async.close_BANG_.call(null,inst_12325);var state_12417__$1 = state_12417;var statearr_12474_12543 = state_12417__$1;(statearr_12474_12543[2] = inst_12328);
(statearr_12474_12543[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 23))
{var state_12417__$1 = state_12417;var statearr_12475_12544 = state_12417__$1;(statearr_12475_12544[2] = null);
(statearr_12475_12544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 24))
{var inst_12314 = (state_12417[25]);var inst_12331 = (state_12417[2]);var inst_12332 = cljs.core.next.call(null,inst_12314);var inst_12294 = inst_12332;var inst_12295 = null;var inst_12296 = 0;var inst_12297 = 0;var state_12417__$1 = (function (){var statearr_12476 = state_12417;(statearr_12476[14] = inst_12297);
(statearr_12476[29] = inst_12331);
(statearr_12476[15] = inst_12295);
(statearr_12476[16] = inst_12296);
(statearr_12476[17] = inst_12294);
return statearr_12476;
})();var statearr_12477_12545 = state_12417__$1;(statearr_12477_12545[2] = null);
(statearr_12477_12545[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 25))
{var inst_12356 = (state_12417[10]);var inst_12355 = (state_12417[11]);var inst_12358 = (inst_12356 < inst_12355);var inst_12359 = inst_12358;var state_12417__$1 = state_12417;if(cljs.core.truth_(inst_12359))
{var statearr_12478_12546 = state_12417__$1;(statearr_12478_12546[1] = 27);
} else
{var statearr_12479_12547 = state_12417__$1;(statearr_12479_12547[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 26))
{var inst_12345 = (state_12417[19]);var inst_12403 = (state_12417[2]);var inst_12404 = cljs.core.seq.call(null,inst_12345);var state_12417__$1 = (function (){var statearr_12480 = state_12417;(statearr_12480[30] = inst_12403);
return statearr_12480;
})();if(inst_12404)
{var statearr_12481_12548 = state_12417__$1;(statearr_12481_12548[1] = 42);
} else
{var statearr_12482_12549 = state_12417__$1;(statearr_12482_12549[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 27))
{var inst_12356 = (state_12417[10]);var inst_12354 = (state_12417[12]);var inst_12361 = cljs.core._nth.call(null,inst_12354,inst_12356);var state_12417__$1 = (function (){var statearr_12483 = state_12417;(statearr_12483[7] = inst_12361);
return statearr_12483;
})();var statearr_12484_12550 = state_12417__$1;(statearr_12484_12550[2] = null);
(statearr_12484_12550[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 28))
{var inst_12353 = (state_12417[13]);var inst_12374 = (state_12417[9]);var inst_12374__$1 = cljs.core.seq.call(null,inst_12353);var state_12417__$1 = (function (){var statearr_12488 = state_12417;(statearr_12488[9] = inst_12374__$1);
return statearr_12488;
})();if(inst_12374__$1)
{var statearr_12489_12551 = state_12417__$1;(statearr_12489_12551[1] = 33);
} else
{var statearr_12490_12552 = state_12417__$1;(statearr_12490_12552[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 29))
{var inst_12401 = (state_12417[2]);var state_12417__$1 = state_12417;var statearr_12491_12553 = state_12417__$1;(statearr_12491_12553[2] = inst_12401);
(statearr_12491_12553[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 30))
{var inst_12356 = (state_12417[10]);var inst_12355 = (state_12417[11]);var inst_12354 = (state_12417[12]);var inst_12353 = (state_12417[13]);var inst_12370 = (state_12417[2]);var inst_12371 = (inst_12356 + 1);var tmp12485 = inst_12355;var tmp12486 = inst_12354;var tmp12487 = inst_12353;var inst_12353__$1 = tmp12487;var inst_12354__$1 = tmp12486;var inst_12355__$1 = tmp12485;var inst_12356__$1 = inst_12371;var state_12417__$1 = (function (){var statearr_12492 = state_12417;(statearr_12492[10] = inst_12356__$1);
(statearr_12492[11] = inst_12355__$1);
(statearr_12492[12] = inst_12354__$1);
(statearr_12492[13] = inst_12353__$1);
(statearr_12492[31] = inst_12370);
return statearr_12492;
})();var statearr_12493_12554 = state_12417__$1;(statearr_12493_12554[2] = null);
(statearr_12493_12554[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 31))
{var inst_12361 = (state_12417[7]);var inst_12362 = (state_12417[2]);var inst_12363 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12364 = cljs.core.async.untap_STAR_.call(null,m,inst_12361);var state_12417__$1 = (function (){var statearr_12494 = state_12417;(statearr_12494[32] = inst_12363);
(statearr_12494[33] = inst_12362);
return statearr_12494;
})();var statearr_12495_12555 = state_12417__$1;(statearr_12495_12555[2] = inst_12364);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417__$1);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12499[0] = state_machine__6161__auto__);
(statearr_12499[1] = 1);
return statearr_12499;
});
var state_machine__6161__auto____1 = (function (state_12417){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12500){if((e12500 instanceof Object))
{var ex__6164__auto__ = e12500;var statearr_12501_12556 = state_12417;(statearr_12501_12556[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12557 = state_12417;
state_12417 = G__12557;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12417){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12502 = f__6176__auto__.call(null);(statearr_12502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12503);
return statearr_12502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
cljs.core.async.Mix = (function (){var obj12559 = {};return obj12559;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12669 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12670){
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
this.meta12670 = meta12670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12669.cljs$lang$type = true;
cljs.core.async.t12669.cljs$lang$ctorStr = "cljs.core.async/t12669";
cljs.core.async.t12669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12671){var self__ = this;
var _12671__$1 = this;return self__.meta12670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12671,meta12670__$1){var self__ = this;
var _12671__$1 = this;return (new cljs.core.async.t12669(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12669(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12670){return (new cljs.core.async.t12669(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12669(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6175__auto___12778 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12736){var state_val_12737 = (state_12736[1]);if((state_val_12737 === 1))
{var inst_12675 = (state_12736[7]);var inst_12675__$1 = calc_state.call(null);var inst_12676 = cljs.core.seq_QMARK_.call(null,inst_12675__$1);var state_12736__$1 = (function (){var statearr_12738 = state_12736;(statearr_12738[7] = inst_12675__$1);
return statearr_12738;
})();if(inst_12676)
{var statearr_12739_12779 = state_12736__$1;(statearr_12739_12779[1] = 2);
} else
{var statearr_12740_12780 = state_12736__$1;(statearr_12740_12780[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 2))
{var inst_12675 = (state_12736[7]);var inst_12678 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12675);var state_12736__$1 = state_12736;var statearr_12741_12781 = state_12736__$1;(statearr_12741_12781[2] = inst_12678);
(statearr_12741_12781[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 3))
{var inst_12675 = (state_12736[7]);var state_12736__$1 = state_12736;var statearr_12742_12782 = state_12736__$1;(statearr_12742_12782[2] = inst_12675);
(statearr_12742_12782[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 4))
{var inst_12675 = (state_12736[7]);var inst_12681 = (state_12736[2]);var inst_12682 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12683 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12684 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12685 = inst_12675;var state_12736__$1 = (function (){var statearr_12743 = state_12736;(statearr_12743[8] = inst_12682);
(statearr_12743[9] = inst_12683);
(statearr_12743[10] = inst_12685);
(statearr_12743[11] = inst_12684);
return statearr_12743;
})();var statearr_12744_12783 = state_12736__$1;(statearr_12744_12783[2] = null);
(statearr_12744_12783[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 5))
{var inst_12685 = (state_12736[10]);var inst_12688 = cljs.core.seq_QMARK_.call(null,inst_12685);var state_12736__$1 = state_12736;if(inst_12688)
{var statearr_12745_12784 = state_12736__$1;(statearr_12745_12784[1] = 7);
} else
{var statearr_12746_12785 = state_12736__$1;(statearr_12746_12785[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 6))
{var inst_12734 = (state_12736[2]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12736__$1,inst_12734);
} else
{if((state_val_12737 === 7))
{var inst_12685 = (state_12736[10]);var inst_12690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12685);var state_12736__$1 = state_12736;var statearr_12747_12786 = state_12736__$1;(statearr_12747_12786[2] = inst_12690);
(statearr_12747_12786[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 8))
{var inst_12685 = (state_12736[10]);var state_12736__$1 = state_12736;var statearr_12748_12787 = state_12736__$1;(statearr_12748_12787[2] = inst_12685);
(statearr_12748_12787[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 9))
{var inst_12693 = (state_12736[12]);var inst_12693__$1 = (state_12736[2]);var inst_12694 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12695 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12696 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12736__$1 = (function (){var statearr_12749 = state_12736;(statearr_12749[13] = inst_12696);
(statearr_12749[14] = inst_12695);
(statearr_12749[12] = inst_12693__$1);
return statearr_12749;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12736__$1,10,inst_12694);
} else
{if((state_val_12737 === 10))
{var inst_12700 = (state_12736[15]);var inst_12701 = (state_12736[16]);var inst_12699 = (state_12736[2]);var inst_12700__$1 = cljs.core.nth.call(null,inst_12699,0,null);var inst_12701__$1 = cljs.core.nth.call(null,inst_12699,1,null);var inst_12702 = (inst_12700__$1 == null);var inst_12703 = cljs.core._EQ_.call(null,inst_12701__$1,change);var inst_12704 = (inst_12702) || (inst_12703);var state_12736__$1 = (function (){var statearr_12750 = state_12736;(statearr_12750[15] = inst_12700__$1);
(statearr_12750[16] = inst_12701__$1);
return statearr_12750;
})();if(cljs.core.truth_(inst_12704))
{var statearr_12751_12788 = state_12736__$1;(statearr_12751_12788[1] = 11);
} else
{var statearr_12752_12789 = state_12736__$1;(statearr_12752_12789[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 11))
{var inst_12700 = (state_12736[15]);var inst_12706 = (inst_12700 == null);var state_12736__$1 = state_12736;if(cljs.core.truth_(inst_12706))
{var statearr_12753_12790 = state_12736__$1;(statearr_12753_12790[1] = 14);
} else
{var statearr_12754_12791 = state_12736__$1;(statearr_12754_12791[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 12))
{var inst_12715 = (state_12736[17]);var inst_12701 = (state_12736[16]);var inst_12696 = (state_12736[13]);var inst_12715__$1 = inst_12696.call(null,inst_12701);var state_12736__$1 = (function (){var statearr_12755 = state_12736;(statearr_12755[17] = inst_12715__$1);
return statearr_12755;
})();if(cljs.core.truth_(inst_12715__$1))
{var statearr_12756_12792 = state_12736__$1;(statearr_12756_12792[1] = 17);
} else
{var statearr_12757_12793 = state_12736__$1;(statearr_12757_12793[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 13))
{var inst_12732 = (state_12736[2]);var state_12736__$1 = state_12736;var statearr_12758_12794 = state_12736__$1;(statearr_12758_12794[2] = inst_12732);
(statearr_12758_12794[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 14))
{var inst_12701 = (state_12736[16]);var inst_12708 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12701);var state_12736__$1 = state_12736;var statearr_12759_12795 = state_12736__$1;(statearr_12759_12795[2] = inst_12708);
(statearr_12759_12795[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 15))
{var state_12736__$1 = state_12736;var statearr_12760_12796 = state_12736__$1;(statearr_12760_12796[2] = null);
(statearr_12760_12796[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 16))
{var inst_12711 = (state_12736[2]);var inst_12712 = calc_state.call(null);var inst_12685 = inst_12712;var state_12736__$1 = (function (){var statearr_12761 = state_12736;(statearr_12761[18] = inst_12711);
(statearr_12761[10] = inst_12685);
return statearr_12761;
})();var statearr_12762_12797 = state_12736__$1;(statearr_12762_12797[2] = null);
(statearr_12762_12797[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 17))
{var inst_12715 = (state_12736[17]);var state_12736__$1 = state_12736;var statearr_12763_12798 = state_12736__$1;(statearr_12763_12798[2] = inst_12715);
(statearr_12763_12798[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 18))
{var inst_12701 = (state_12736[16]);var inst_12696 = (state_12736[13]);var inst_12695 = (state_12736[14]);var inst_12718 = cljs.core.empty_QMARK_.call(null,inst_12696);var inst_12719 = inst_12695.call(null,inst_12701);var inst_12720 = cljs.core.not.call(null,inst_12719);var inst_12721 = (inst_12718) && (inst_12720);var state_12736__$1 = state_12736;var statearr_12764_12799 = state_12736__$1;(statearr_12764_12799[2] = inst_12721);
(statearr_12764_12799[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 19))
{var inst_12723 = (state_12736[2]);var state_12736__$1 = state_12736;if(cljs.core.truth_(inst_12723))
{var statearr_12765_12800 = state_12736__$1;(statearr_12765_12800[1] = 20);
} else
{var statearr_12766_12801 = state_12736__$1;(statearr_12766_12801[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 20))
{var inst_12700 = (state_12736[15]);var state_12736__$1 = state_12736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12736__$1,23,out,inst_12700);
} else
{if((state_val_12737 === 21))
{var state_12736__$1 = state_12736;var statearr_12767_12802 = state_12736__$1;(statearr_12767_12802[2] = null);
(statearr_12767_12802[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 22))
{var inst_12693 = (state_12736[12]);var inst_12729 = (state_12736[2]);var inst_12685 = inst_12693;var state_12736__$1 = (function (){var statearr_12768 = state_12736;(statearr_12768[19] = inst_12729);
(statearr_12768[10] = inst_12685);
return statearr_12768;
})();var statearr_12769_12803 = state_12736__$1;(statearr_12769_12803[2] = null);
(statearr_12769_12803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12737 === 23))
{var inst_12726 = (state_12736[2]);var state_12736__$1 = state_12736;var statearr_12770_12804 = state_12736__$1;(statearr_12770_12804[2] = inst_12726);
(statearr_12770_12804[1] = 22);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12774[0] = state_machine__6161__auto__);
(statearr_12774[1] = 1);
return statearr_12774;
});
var state_machine__6161__auto____1 = (function (state_12736){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12736);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12775){if((e12775 instanceof Object))
{var ex__6164__auto__ = e12775;var statearr_12776_12805 = state_12736;(statearr_12776_12805[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12806 = state_12736;
state_12736 = G__12806;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12736){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12777 = f__6176__auto__.call(null);(statearr_12777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12778);
return statearr_12777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
cljs.core.async.Pub = (function (){var obj12808 = {};return obj12808;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__12809_SHARP_){if(cljs.core.truth_(p1__12809_SHARP_.call(null,topic)))
{return p1__12809_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12809_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12934 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12935){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12935 = meta12935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12934.cljs$lang$type = true;
cljs.core.async.t12934.cljs$lang$ctorStr = "cljs.core.async/t12934";
cljs.core.async.t12934.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12934");
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12936){var self__ = this;
var _12936__$1 = this;return self__.meta12935;
});})(mults,ensure_mult))
;
cljs.core.async.t12934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12936,meta12935__$1){var self__ = this;
var _12936__$1 = this;return (new cljs.core.async.t12934(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12935__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12934 = ((function (mults,ensure_mult){
return (function __GT_t12934(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12935){return (new cljs.core.async.t12934(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12935));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12934(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6175__auto___13058 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13010){var state_val_13011 = (state_13010[1]);if((state_val_13011 === 1))
{var state_13010__$1 = state_13010;var statearr_13012_13059 = state_13010__$1;(statearr_13012_13059[2] = null);
(statearr_13012_13059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 2))
{var state_13010__$1 = state_13010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13010__$1,4,ch);
} else
{if((state_val_13011 === 3))
{var inst_13008 = (state_13010[2]);var state_13010__$1 = state_13010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13010__$1,inst_13008);
} else
{if((state_val_13011 === 4))
{var inst_12939 = (state_13010[7]);var inst_12939__$1 = (state_13010[2]);var inst_12940 = (inst_12939__$1 == null);var state_13010__$1 = (function (){var statearr_13013 = state_13010;(statearr_13013[7] = inst_12939__$1);
return statearr_13013;
})();if(cljs.core.truth_(inst_12940))
{var statearr_13014_13060 = state_13010__$1;(statearr_13014_13060[1] = 5);
} else
{var statearr_13015_13061 = state_13010__$1;(statearr_13015_13061[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 5))
{var inst_12946 = cljs.core.deref.call(null,mults);var inst_12947 = cljs.core.vals.call(null,inst_12946);var inst_12948 = cljs.core.seq.call(null,inst_12947);var inst_12949 = inst_12948;var inst_12950 = null;var inst_12951 = 0;var inst_12952 = 0;var state_13010__$1 = (function (){var statearr_13016 = state_13010;(statearr_13016[8] = inst_12951);
(statearr_13016[9] = inst_12950);
(statearr_13016[10] = inst_12952);
(statearr_13016[11] = inst_12949);
return statearr_13016;
})();var statearr_13017_13062 = state_13010__$1;(statearr_13017_13062[2] = null);
(statearr_13017_13062[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 6))
{var inst_12987 = (state_13010[12]);var inst_12939 = (state_13010[7]);var inst_12989 = (state_13010[13]);var inst_12987__$1 = topic_fn.call(null,inst_12939);var inst_12988 = cljs.core.deref.call(null,mults);var inst_12989__$1 = cljs.core.get.call(null,inst_12988,inst_12987__$1);var state_13010__$1 = (function (){var statearr_13018 = state_13010;(statearr_13018[12] = inst_12987__$1);
(statearr_13018[13] = inst_12989__$1);
return statearr_13018;
})();if(cljs.core.truth_(inst_12989__$1))
{var statearr_13019_13063 = state_13010__$1;(statearr_13019_13063[1] = 19);
} else
{var statearr_13020_13064 = state_13010__$1;(statearr_13020_13064[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 7))
{var inst_13006 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13021_13065 = state_13010__$1;(statearr_13021_13065[2] = inst_13006);
(statearr_13021_13065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 8))
{var inst_12951 = (state_13010[8]);var inst_12952 = (state_13010[10]);var inst_12954 = (inst_12952 < inst_12951);var inst_12955 = inst_12954;var state_13010__$1 = state_13010;if(cljs.core.truth_(inst_12955))
{var statearr_13025_13066 = state_13010__$1;(statearr_13025_13066[1] = 10);
} else
{var statearr_13026_13067 = state_13010__$1;(statearr_13026_13067[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 9))
{var inst_12985 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13027_13068 = state_13010__$1;(statearr_13027_13068[2] = inst_12985);
(statearr_13027_13068[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 10))
{var inst_12951 = (state_13010[8]);var inst_12950 = (state_13010[9]);var inst_12952 = (state_13010[10]);var inst_12949 = (state_13010[11]);var inst_12957 = cljs.core._nth.call(null,inst_12950,inst_12952);var inst_12958 = cljs.core.async.muxch_STAR_.call(null,inst_12957);var inst_12959 = cljs.core.async.close_BANG_.call(null,inst_12958);var inst_12960 = (inst_12952 + 1);var tmp13022 = inst_12951;var tmp13023 = inst_12950;var tmp13024 = inst_12949;var inst_12949__$1 = tmp13024;var inst_12950__$1 = tmp13023;var inst_12951__$1 = tmp13022;var inst_12952__$1 = inst_12960;var state_13010__$1 = (function (){var statearr_13028 = state_13010;(statearr_13028[14] = inst_12959);
(statearr_13028[8] = inst_12951__$1);
(statearr_13028[9] = inst_12950__$1);
(statearr_13028[10] = inst_12952__$1);
(statearr_13028[11] = inst_12949__$1);
return statearr_13028;
})();var statearr_13029_13069 = state_13010__$1;(statearr_13029_13069[2] = null);
(statearr_13029_13069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 11))
{var inst_12963 = (state_13010[15]);var inst_12949 = (state_13010[11]);var inst_12963__$1 = cljs.core.seq.call(null,inst_12949);var state_13010__$1 = (function (){var statearr_13030 = state_13010;(statearr_13030[15] = inst_12963__$1);
return statearr_13030;
})();if(inst_12963__$1)
{var statearr_13031_13070 = state_13010__$1;(statearr_13031_13070[1] = 13);
} else
{var statearr_13032_13071 = state_13010__$1;(statearr_13032_13071[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 12))
{var inst_12983 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13033_13072 = state_13010__$1;(statearr_13033_13072[2] = inst_12983);
(statearr_13033_13072[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 13))
{var inst_12963 = (state_13010[15]);var inst_12965 = cljs.core.chunked_seq_QMARK_.call(null,inst_12963);var state_13010__$1 = state_13010;if(inst_12965)
{var statearr_13034_13073 = state_13010__$1;(statearr_13034_13073[1] = 16);
} else
{var statearr_13035_13074 = state_13010__$1;(statearr_13035_13074[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 14))
{var state_13010__$1 = state_13010;var statearr_13036_13075 = state_13010__$1;(statearr_13036_13075[2] = null);
(statearr_13036_13075[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 15))
{var inst_12981 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13037_13076 = state_13010__$1;(statearr_13037_13076[2] = inst_12981);
(statearr_13037_13076[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 16))
{var inst_12963 = (state_13010[15]);var inst_12967 = cljs.core.chunk_first.call(null,inst_12963);var inst_12968 = cljs.core.chunk_rest.call(null,inst_12963);var inst_12969 = cljs.core.count.call(null,inst_12967);var inst_12949 = inst_12968;var inst_12950 = inst_12967;var inst_12951 = inst_12969;var inst_12952 = 0;var state_13010__$1 = (function (){var statearr_13038 = state_13010;(statearr_13038[8] = inst_12951);
(statearr_13038[9] = inst_12950);
(statearr_13038[10] = inst_12952);
(statearr_13038[11] = inst_12949);
return statearr_13038;
})();var statearr_13039_13077 = state_13010__$1;(statearr_13039_13077[2] = null);
(statearr_13039_13077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 17))
{var inst_12963 = (state_13010[15]);var inst_12972 = cljs.core.first.call(null,inst_12963);var inst_12973 = cljs.core.async.muxch_STAR_.call(null,inst_12972);var inst_12974 = cljs.core.async.close_BANG_.call(null,inst_12973);var inst_12975 = cljs.core.next.call(null,inst_12963);var inst_12949 = inst_12975;var inst_12950 = null;var inst_12951 = 0;var inst_12952 = 0;var state_13010__$1 = (function (){var statearr_13040 = state_13010;(statearr_13040[8] = inst_12951);
(statearr_13040[9] = inst_12950);
(statearr_13040[16] = inst_12974);
(statearr_13040[10] = inst_12952);
(statearr_13040[11] = inst_12949);
return statearr_13040;
})();var statearr_13041_13078 = state_13010__$1;(statearr_13041_13078[2] = null);
(statearr_13041_13078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 18))
{var inst_12978 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13042_13079 = state_13010__$1;(statearr_13042_13079[2] = inst_12978);
(statearr_13042_13079[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 19))
{var state_13010__$1 = state_13010;var statearr_13043_13080 = state_13010__$1;(statearr_13043_13080[2] = null);
(statearr_13043_13080[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 20))
{var state_13010__$1 = state_13010;var statearr_13044_13081 = state_13010__$1;(statearr_13044_13081[2] = null);
(statearr_13044_13081[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 21))
{var inst_13003 = (state_13010[2]);var state_13010__$1 = (function (){var statearr_13045 = state_13010;(statearr_13045[17] = inst_13003);
return statearr_13045;
})();var statearr_13046_13082 = state_13010__$1;(statearr_13046_13082[2] = null);
(statearr_13046_13082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 22))
{var inst_13000 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13047_13083 = state_13010__$1;(statearr_13047_13083[2] = inst_13000);
(statearr_13047_13083[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 23))
{var inst_12987 = (state_13010[12]);var inst_12991 = (state_13010[2]);var inst_12992 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12987);var state_13010__$1 = (function (){var statearr_13048 = state_13010;(statearr_13048[18] = inst_12991);
return statearr_13048;
})();var statearr_13049_13084 = state_13010__$1;(statearr_13049_13084[2] = inst_12992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13011 === 24))
{var inst_12939 = (state_13010[7]);var inst_12989 = (state_13010[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13010,23,Object,null,22);var inst_12996 = cljs.core.async.muxch_STAR_.call(null,inst_12989);var state_13010__$1 = state_13010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13010__$1,25,inst_12996,inst_12939);
} else
{if((state_val_13011 === 25))
{var inst_12998 = (state_13010[2]);var state_13010__$1 = state_13010;var statearr_13050_13085 = state_13010__$1;(statearr_13050_13085[2] = inst_12998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13010__$1);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13054[0] = state_machine__6161__auto__);
(statearr_13054[1] = 1);
return statearr_13054;
});
var state_machine__6161__auto____1 = (function (state_13010){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13010);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13055){if((e13055 instanceof Object))
{var ex__6164__auto__ = e13055;var statearr_13056_13086 = state_13010;(statearr_13056_13086[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13087 = state_13010;
state_13010 = G__13087;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13010){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13057 = f__6176__auto__.call(null);(statearr_13057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13058);
return statearr_13057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
,cljs.core.range.call(null,cnt));var c__6175__auto___13224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13194){var state_val_13195 = (state_13194[1]);if((state_val_13195 === 1))
{var state_13194__$1 = state_13194;var statearr_13196_13225 = state_13194__$1;(statearr_13196_13225[2] = null);
(statearr_13196_13225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 2))
{var inst_13157 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13158 = 0;var state_13194__$1 = (function (){var statearr_13197 = state_13194;(statearr_13197[7] = inst_13158);
(statearr_13197[8] = inst_13157);
return statearr_13197;
})();var statearr_13198_13226 = state_13194__$1;(statearr_13198_13226[2] = null);
(statearr_13198_13226[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 3))
{var inst_13192 = (state_13194[2]);var state_13194__$1 = state_13194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13194__$1,inst_13192);
} else
{if((state_val_13195 === 4))
{var inst_13158 = (state_13194[7]);var inst_13160 = (inst_13158 < cnt);var state_13194__$1 = state_13194;if(cljs.core.truth_(inst_13160))
{var statearr_13199_13227 = state_13194__$1;(statearr_13199_13227[1] = 6);
} else
{var statearr_13200_13228 = state_13194__$1;(statearr_13200_13228[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 5))
{var inst_13178 = (state_13194[2]);var state_13194__$1 = (function (){var statearr_13201 = state_13194;(statearr_13201[9] = inst_13178);
return statearr_13201;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13194__$1,12,dchan);
} else
{if((state_val_13195 === 6))
{var state_13194__$1 = state_13194;var statearr_13202_13229 = state_13194__$1;(statearr_13202_13229[2] = null);
(statearr_13202_13229[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 7))
{var state_13194__$1 = state_13194;var statearr_13203_13230 = state_13194__$1;(statearr_13203_13230[2] = null);
(statearr_13203_13230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 8))
{var inst_13176 = (state_13194[2]);var state_13194__$1 = state_13194;var statearr_13204_13231 = state_13194__$1;(statearr_13204_13231[2] = inst_13176);
(statearr_13204_13231[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 9))
{var inst_13158 = (state_13194[7]);var inst_13171 = (state_13194[2]);var inst_13172 = (inst_13158 + 1);var inst_13158__$1 = inst_13172;var state_13194__$1 = (function (){var statearr_13205 = state_13194;(statearr_13205[7] = inst_13158__$1);
(statearr_13205[10] = inst_13171);
return statearr_13205;
})();var statearr_13206_13232 = state_13194__$1;(statearr_13206_13232[2] = null);
(statearr_13206_13232[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 10))
{var inst_13162 = (state_13194[2]);var inst_13163 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13194__$1 = (function (){var statearr_13207 = state_13194;(statearr_13207[11] = inst_13162);
return statearr_13207;
})();var statearr_13208_13233 = state_13194__$1;(statearr_13208_13233[2] = inst_13163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 11))
{var inst_13158 = (state_13194[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13194,10,Object,null,9);var inst_13167 = chs__$1.call(null,inst_13158);var inst_13168 = done.call(null,inst_13158);var inst_13169 = cljs.core.async.take_BANG_.call(null,inst_13167,inst_13168);var state_13194__$1 = state_13194;var statearr_13209_13234 = state_13194__$1;(statearr_13209_13234[2] = inst_13169);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 12))
{var inst_13180 = (state_13194[12]);var inst_13180__$1 = (state_13194[2]);var inst_13181 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13180__$1);var state_13194__$1 = (function (){var statearr_13210 = state_13194;(statearr_13210[12] = inst_13180__$1);
return statearr_13210;
})();if(cljs.core.truth_(inst_13181))
{var statearr_13211_13235 = state_13194__$1;(statearr_13211_13235[1] = 13);
} else
{var statearr_13212_13236 = state_13194__$1;(statearr_13212_13236[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 13))
{var inst_13183 = cljs.core.async.close_BANG_.call(null,out);var state_13194__$1 = state_13194;var statearr_13213_13237 = state_13194__$1;(statearr_13213_13237[2] = inst_13183);
(statearr_13213_13237[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 14))
{var inst_13180 = (state_13194[12]);var inst_13185 = cljs.core.apply.call(null,f,inst_13180);var state_13194__$1 = state_13194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13194__$1,16,out,inst_13185);
} else
{if((state_val_13195 === 15))
{var inst_13190 = (state_13194[2]);var state_13194__$1 = state_13194;var statearr_13214_13238 = state_13194__$1;(statearr_13214_13238[2] = inst_13190);
(statearr_13214_13238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13195 === 16))
{var inst_13187 = (state_13194[2]);var state_13194__$1 = (function (){var statearr_13215 = state_13194;(statearr_13215[13] = inst_13187);
return statearr_13215;
})();var statearr_13216_13239 = state_13194__$1;(statearr_13216_13239[2] = null);
(statearr_13216_13239[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13220[0] = state_machine__6161__auto__);
(statearr_13220[1] = 1);
return statearr_13220;
});
var state_machine__6161__auto____1 = (function (state_13194){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13221){if((e13221 instanceof Object))
{var ex__6164__auto__ = e13221;var statearr_13222_13240 = state_13194;(statearr_13222_13240[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13241 = state_13194;
state_13194 = G__13241;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13194){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13223 = f__6176__auto__.call(null);(statearr_13223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13224);
return statearr_13223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13325){var state_val_13326 = (state_13325[1]);if((state_val_13326 === 1))
{var inst_13296 = cljs.core.vec.call(null,chs);var inst_13297 = inst_13296;var state_13325__$1 = (function (){var statearr_13327 = state_13325;(statearr_13327[7] = inst_13297);
return statearr_13327;
})();var statearr_13328_13350 = state_13325__$1;(statearr_13328_13350[2] = null);
(statearr_13328_13350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 2))
{var inst_13297 = (state_13325[7]);var inst_13299 = cljs.core.count.call(null,inst_13297);var inst_13300 = (inst_13299 > 0);var state_13325__$1 = state_13325;if(cljs.core.truth_(inst_13300))
{var statearr_13329_13351 = state_13325__$1;(statearr_13329_13351[1] = 4);
} else
{var statearr_13330_13352 = state_13325__$1;(statearr_13330_13352[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 3))
{var inst_13323 = (state_13325[2]);var state_13325__$1 = state_13325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13325__$1,inst_13323);
} else
{if((state_val_13326 === 4))
{var inst_13297 = (state_13325[7]);var state_13325__$1 = state_13325;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13325__$1,7,inst_13297);
} else
{if((state_val_13326 === 5))
{var inst_13319 = cljs.core.async.close_BANG_.call(null,out);var state_13325__$1 = state_13325;var statearr_13331_13353 = state_13325__$1;(statearr_13331_13353[2] = inst_13319);
(statearr_13331_13353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 6))
{var inst_13321 = (state_13325[2]);var state_13325__$1 = state_13325;var statearr_13332_13354 = state_13325__$1;(statearr_13332_13354[2] = inst_13321);
(statearr_13332_13354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 7))
{var inst_13304 = (state_13325[8]);var inst_13305 = (state_13325[9]);var inst_13304__$1 = (state_13325[2]);var inst_13305__$1 = cljs.core.nth.call(null,inst_13304__$1,0,null);var inst_13306 = cljs.core.nth.call(null,inst_13304__$1,1,null);var inst_13307 = (inst_13305__$1 == null);var state_13325__$1 = (function (){var statearr_13333 = state_13325;(statearr_13333[8] = inst_13304__$1);
(statearr_13333[9] = inst_13305__$1);
(statearr_13333[10] = inst_13306);
return statearr_13333;
})();if(cljs.core.truth_(inst_13307))
{var statearr_13334_13355 = state_13325__$1;(statearr_13334_13355[1] = 8);
} else
{var statearr_13335_13356 = state_13325__$1;(statearr_13335_13356[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 8))
{var inst_13304 = (state_13325[8]);var inst_13305 = (state_13325[9]);var inst_13306 = (state_13325[10]);var inst_13297 = (state_13325[7]);var inst_13309 = (function (){var c = inst_13306;var v = inst_13305;var vec__13302 = inst_13304;var cs = inst_13297;return ((function (c,v,vec__13302,cs,inst_13304,inst_13305,inst_13306,inst_13297,state_val_13326){
return (function (p1__13242_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13242_SHARP_);
});
;})(c,v,vec__13302,cs,inst_13304,inst_13305,inst_13306,inst_13297,state_val_13326))
})();var inst_13310 = cljs.core.filterv.call(null,inst_13309,inst_13297);var inst_13297__$1 = inst_13310;var state_13325__$1 = (function (){var statearr_13336 = state_13325;(statearr_13336[7] = inst_13297__$1);
return statearr_13336;
})();var statearr_13337_13357 = state_13325__$1;(statearr_13337_13357[2] = null);
(statearr_13337_13357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 9))
{var inst_13305 = (state_13325[9]);var state_13325__$1 = state_13325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13325__$1,11,out,inst_13305);
} else
{if((state_val_13326 === 10))
{var inst_13317 = (state_13325[2]);var state_13325__$1 = state_13325;var statearr_13339_13358 = state_13325__$1;(statearr_13339_13358[2] = inst_13317);
(statearr_13339_13358[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13326 === 11))
{var inst_13297 = (state_13325[7]);var inst_13314 = (state_13325[2]);var tmp13338 = inst_13297;var inst_13297__$1 = tmp13338;var state_13325__$1 = (function (){var statearr_13340 = state_13325;(statearr_13340[11] = inst_13314);
(statearr_13340[7] = inst_13297__$1);
return statearr_13340;
})();var statearr_13341_13359 = state_13325__$1;(statearr_13341_13359[2] = null);
(statearr_13341_13359[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13345[0] = state_machine__6161__auto__);
(statearr_13345[1] = 1);
return statearr_13345;
});
var state_machine__6161__auto____1 = (function (state_13325){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13346){if((e13346 instanceof Object))
{var ex__6164__auto__ = e13346;var statearr_13347_13360 = state_13325;(statearr_13347_13360[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13361 = state_13325;
state_13325 = G__13361;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13325){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13348 = f__6176__auto__.call(null);(statearr_13348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13349);
return statearr_13348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13431){var state_val_13432 = (state_13431[1]);if((state_val_13432 === 1))
{var inst_13408 = 0;var state_13431__$1 = (function (){var statearr_13433 = state_13431;(statearr_13433[7] = inst_13408);
return statearr_13433;
})();var statearr_13434_13455 = state_13431__$1;(statearr_13434_13455[2] = null);
(statearr_13434_13455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 2))
{var inst_13408 = (state_13431[7]);var inst_13410 = (inst_13408 < n);var state_13431__$1 = state_13431;if(cljs.core.truth_(inst_13410))
{var statearr_13435_13456 = state_13431__$1;(statearr_13435_13456[1] = 4);
} else
{var statearr_13436_13457 = state_13431__$1;(statearr_13436_13457[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 3))
{var inst_13428 = (state_13431[2]);var inst_13429 = cljs.core.async.close_BANG_.call(null,out);var state_13431__$1 = (function (){var statearr_13437 = state_13431;(statearr_13437[8] = inst_13428);
return statearr_13437;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13431__$1,inst_13429);
} else
{if((state_val_13432 === 4))
{var state_13431__$1 = state_13431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13431__$1,7,ch);
} else
{if((state_val_13432 === 5))
{var state_13431__$1 = state_13431;var statearr_13438_13458 = state_13431__$1;(statearr_13438_13458[2] = null);
(statearr_13438_13458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 6))
{var inst_13426 = (state_13431[2]);var state_13431__$1 = state_13431;var statearr_13439_13459 = state_13431__$1;(statearr_13439_13459[2] = inst_13426);
(statearr_13439_13459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 7))
{var inst_13413 = (state_13431[9]);var inst_13413__$1 = (state_13431[2]);var inst_13414 = (inst_13413__$1 == null);var inst_13415 = cljs.core.not.call(null,inst_13414);var state_13431__$1 = (function (){var statearr_13440 = state_13431;(statearr_13440[9] = inst_13413__$1);
return statearr_13440;
})();if(inst_13415)
{var statearr_13441_13460 = state_13431__$1;(statearr_13441_13460[1] = 8);
} else
{var statearr_13442_13461 = state_13431__$1;(statearr_13442_13461[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 8))
{var inst_13413 = (state_13431[9]);var state_13431__$1 = state_13431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13431__$1,11,out,inst_13413);
} else
{if((state_val_13432 === 9))
{var state_13431__$1 = state_13431;var statearr_13443_13462 = state_13431__$1;(statearr_13443_13462[2] = null);
(statearr_13443_13462[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 10))
{var inst_13423 = (state_13431[2]);var state_13431__$1 = state_13431;var statearr_13444_13463 = state_13431__$1;(statearr_13444_13463[2] = inst_13423);
(statearr_13444_13463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13432 === 11))
{var inst_13408 = (state_13431[7]);var inst_13418 = (state_13431[2]);var inst_13419 = (inst_13408 + 1);var inst_13408__$1 = inst_13419;var state_13431__$1 = (function (){var statearr_13445 = state_13431;(statearr_13445[7] = inst_13408__$1);
(statearr_13445[10] = inst_13418);
return statearr_13445;
})();var statearr_13446_13464 = state_13431__$1;(statearr_13446_13464[2] = null);
(statearr_13446_13464[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13450 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13450[0] = state_machine__6161__auto__);
(statearr_13450[1] = 1);
return statearr_13450;
});
var state_machine__6161__auto____1 = (function (state_13431){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13431);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13451){if((e13451 instanceof Object))
{var ex__6164__auto__ = e13451;var statearr_13452_13465 = state_13431;(statearr_13452_13465[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13466 = state_13431;
state_13431 = G__13466;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13431){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13453 = f__6176__auto__.call(null);(statearr_13453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13454);
return statearr_13453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13538){var state_val_13539 = (state_13538[1]);if((state_val_13539 === 1))
{var inst_13515 = null;var state_13538__$1 = (function (){var statearr_13540 = state_13538;(statearr_13540[7] = inst_13515);
return statearr_13540;
})();var statearr_13541_13564 = state_13538__$1;(statearr_13541_13564[2] = null);
(statearr_13541_13564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 2))
{var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13538__$1,4,ch);
} else
{if((state_val_13539 === 3))
{var inst_13535 = (state_13538[2]);var inst_13536 = cljs.core.async.close_BANG_.call(null,out);var state_13538__$1 = (function (){var statearr_13542 = state_13538;(statearr_13542[8] = inst_13535);
return statearr_13542;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13538__$1,inst_13536);
} else
{if((state_val_13539 === 4))
{var inst_13518 = (state_13538[9]);var inst_13518__$1 = (state_13538[2]);var inst_13519 = (inst_13518__$1 == null);var inst_13520 = cljs.core.not.call(null,inst_13519);var state_13538__$1 = (function (){var statearr_13543 = state_13538;(statearr_13543[9] = inst_13518__$1);
return statearr_13543;
})();if(inst_13520)
{var statearr_13544_13565 = state_13538__$1;(statearr_13544_13565[1] = 5);
} else
{var statearr_13545_13566 = state_13538__$1;(statearr_13545_13566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 5))
{var inst_13515 = (state_13538[7]);var inst_13518 = (state_13538[9]);var inst_13522 = cljs.core._EQ_.call(null,inst_13518,inst_13515);var state_13538__$1 = state_13538;if(inst_13522)
{var statearr_13546_13567 = state_13538__$1;(statearr_13546_13567[1] = 8);
} else
{var statearr_13547_13568 = state_13538__$1;(statearr_13547_13568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 6))
{var state_13538__$1 = state_13538;var statearr_13549_13569 = state_13538__$1;(statearr_13549_13569[2] = null);
(statearr_13549_13569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 7))
{var inst_13533 = (state_13538[2]);var state_13538__$1 = state_13538;var statearr_13550_13570 = state_13538__$1;(statearr_13550_13570[2] = inst_13533);
(statearr_13550_13570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 8))
{var inst_13515 = (state_13538[7]);var tmp13548 = inst_13515;var inst_13515__$1 = tmp13548;var state_13538__$1 = (function (){var statearr_13551 = state_13538;(statearr_13551[7] = inst_13515__$1);
return statearr_13551;
})();var statearr_13552_13571 = state_13538__$1;(statearr_13552_13571[2] = null);
(statearr_13552_13571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 9))
{var inst_13518 = (state_13538[9]);var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13538__$1,11,out,inst_13518);
} else
{if((state_val_13539 === 10))
{var inst_13530 = (state_13538[2]);var state_13538__$1 = state_13538;var statearr_13553_13572 = state_13538__$1;(statearr_13553_13572[2] = inst_13530);
(statearr_13553_13572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 11))
{var inst_13518 = (state_13538[9]);var inst_13527 = (state_13538[2]);var inst_13515 = inst_13518;var state_13538__$1 = (function (){var statearr_13554 = state_13538;(statearr_13554[7] = inst_13515);
(statearr_13554[10] = inst_13527);
return statearr_13554;
})();var statearr_13555_13573 = state_13538__$1;(statearr_13555_13573[2] = null);
(statearr_13555_13573[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13559 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13559[0] = state_machine__6161__auto__);
(statearr_13559[1] = 1);
return statearr_13559;
});
var state_machine__6161__auto____1 = (function (state_13538){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13538);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13560){if((e13560 instanceof Object))
{var ex__6164__auto__ = e13560;var statearr_13561_13574 = state_13538;(statearr_13561_13574[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13575 = state_13538;
state_13538 = G__13575;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13538){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13562 = f__6176__auto__.call(null);(statearr_13562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13563);
return statearr_13562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13680){var state_val_13681 = (state_13680[1]);if((state_val_13681 === 1))
{var inst_13643 = (new Array(n));var inst_13644 = inst_13643;var inst_13645 = 0;var state_13680__$1 = (function (){var statearr_13682 = state_13680;(statearr_13682[7] = inst_13644);
(statearr_13682[8] = inst_13645);
return statearr_13682;
})();var statearr_13683_13711 = state_13680__$1;(statearr_13683_13711[2] = null);
(statearr_13683_13711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 2))
{var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13680__$1,4,ch);
} else
{if((state_val_13681 === 3))
{var inst_13678 = (state_13680[2]);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13680__$1,inst_13678);
} else
{if((state_val_13681 === 4))
{var inst_13648 = (state_13680[9]);var inst_13648__$1 = (state_13680[2]);var inst_13649 = (inst_13648__$1 == null);var inst_13650 = cljs.core.not.call(null,inst_13649);var state_13680__$1 = (function (){var statearr_13684 = state_13680;(statearr_13684[9] = inst_13648__$1);
return statearr_13684;
})();if(inst_13650)
{var statearr_13685_13712 = state_13680__$1;(statearr_13685_13712[1] = 5);
} else
{var statearr_13686_13713 = state_13680__$1;(statearr_13686_13713[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 5))
{var inst_13644 = (state_13680[7]);var inst_13645 = (state_13680[8]);var inst_13653 = (state_13680[10]);var inst_13648 = (state_13680[9]);var inst_13652 = (inst_13644[inst_13645] = inst_13648);var inst_13653__$1 = (inst_13645 + 1);var inst_13654 = (inst_13653__$1 < n);var state_13680__$1 = (function (){var statearr_13687 = state_13680;(statearr_13687[10] = inst_13653__$1);
(statearr_13687[11] = inst_13652);
return statearr_13687;
})();if(cljs.core.truth_(inst_13654))
{var statearr_13688_13714 = state_13680__$1;(statearr_13688_13714[1] = 8);
} else
{var statearr_13689_13715 = state_13680__$1;(statearr_13689_13715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 6))
{var inst_13645 = (state_13680[8]);var inst_13666 = (inst_13645 > 0);var state_13680__$1 = state_13680;if(cljs.core.truth_(inst_13666))
{var statearr_13691_13716 = state_13680__$1;(statearr_13691_13716[1] = 12);
} else
{var statearr_13692_13717 = state_13680__$1;(statearr_13692_13717[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 7))
{var inst_13676 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13693_13718 = state_13680__$1;(statearr_13693_13718[2] = inst_13676);
(statearr_13693_13718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 8))
{var inst_13644 = (state_13680[7]);var inst_13653 = (state_13680[10]);var tmp13690 = inst_13644;var inst_13644__$1 = tmp13690;var inst_13645 = inst_13653;var state_13680__$1 = (function (){var statearr_13694 = state_13680;(statearr_13694[7] = inst_13644__$1);
(statearr_13694[8] = inst_13645);
return statearr_13694;
})();var statearr_13695_13719 = state_13680__$1;(statearr_13695_13719[2] = null);
(statearr_13695_13719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 9))
{var inst_13644 = (state_13680[7]);var inst_13658 = cljs.core.vec.call(null,inst_13644);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,11,out,inst_13658);
} else
{if((state_val_13681 === 10))
{var inst_13664 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13696_13720 = state_13680__$1;(statearr_13696_13720[2] = inst_13664);
(statearr_13696_13720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 11))
{var inst_13660 = (state_13680[2]);var inst_13661 = (new Array(n));var inst_13644 = inst_13661;var inst_13645 = 0;var state_13680__$1 = (function (){var statearr_13697 = state_13680;(statearr_13697[7] = inst_13644);
(statearr_13697[12] = inst_13660);
(statearr_13697[8] = inst_13645);
return statearr_13697;
})();var statearr_13698_13721 = state_13680__$1;(statearr_13698_13721[2] = null);
(statearr_13698_13721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 12))
{var inst_13644 = (state_13680[7]);var inst_13668 = cljs.core.vec.call(null,inst_13644);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,15,out,inst_13668);
} else
{if((state_val_13681 === 13))
{var state_13680__$1 = state_13680;var statearr_13699_13722 = state_13680__$1;(statearr_13699_13722[2] = null);
(statearr_13699_13722[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 14))
{var inst_13673 = (state_13680[2]);var inst_13674 = cljs.core.async.close_BANG_.call(null,out);var state_13680__$1 = (function (){var statearr_13700 = state_13680;(statearr_13700[13] = inst_13673);
return statearr_13700;
})();var statearr_13701_13723 = state_13680__$1;(statearr_13701_13723[2] = inst_13674);
(statearr_13701_13723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 15))
{var inst_13670 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13702_13724 = state_13680__$1;(statearr_13702_13724[2] = inst_13670);
(statearr_13702_13724[1] = 14);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13706[0] = state_machine__6161__auto__);
(statearr_13706[1] = 1);
return statearr_13706;
});
var state_machine__6161__auto____1 = (function (state_13680){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13680);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13707){if((e13707 instanceof Object))
{var ex__6164__auto__ = e13707;var statearr_13708_13725 = state_13680;(statearr_13708_13725[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13726 = state_13680;
state_13680 = G__13726;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13680){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13709 = f__6176__auto__.call(null);(statearr_13709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13710);
return statearr_13709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_13839){var state_val_13840 = (state_13839[1]);if((state_val_13840 === 1))
{var inst_13798 = [];var inst_13799 = inst_13798;var inst_13800 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13839__$1 = (function (){var statearr_13841 = state_13839;(statearr_13841[7] = inst_13799);
(statearr_13841[8] = inst_13800);
return statearr_13841;
})();var statearr_13842_13870 = state_13839__$1;(statearr_13842_13870[2] = null);
(statearr_13842_13870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 2))
{var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13839__$1,4,ch);
} else
{if((state_val_13840 === 3))
{var inst_13837 = (state_13839[2]);var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13839__$1,inst_13837);
} else
{if((state_val_13840 === 4))
{var inst_13803 = (state_13839[9]);var inst_13803__$1 = (state_13839[2]);var inst_13804 = (inst_13803__$1 == null);var inst_13805 = cljs.core.not.call(null,inst_13804);var state_13839__$1 = (function (){var statearr_13843 = state_13839;(statearr_13843[9] = inst_13803__$1);
return statearr_13843;
})();if(inst_13805)
{var statearr_13844_13871 = state_13839__$1;(statearr_13844_13871[1] = 5);
} else
{var statearr_13845_13872 = state_13839__$1;(statearr_13845_13872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 5))
{var inst_13803 = (state_13839[9]);var inst_13807 = (state_13839[10]);var inst_13800 = (state_13839[8]);var inst_13807__$1 = f.call(null,inst_13803);var inst_13808 = cljs.core._EQ_.call(null,inst_13807__$1,inst_13800);var inst_13809 = cljs.core.keyword_identical_QMARK_.call(null,inst_13800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13810 = (inst_13808) || (inst_13809);var state_13839__$1 = (function (){var statearr_13846 = state_13839;(statearr_13846[10] = inst_13807__$1);
return statearr_13846;
})();if(cljs.core.truth_(inst_13810))
{var statearr_13847_13873 = state_13839__$1;(statearr_13847_13873[1] = 8);
} else
{var statearr_13848_13874 = state_13839__$1;(statearr_13848_13874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 6))
{var inst_13799 = (state_13839[7]);var inst_13824 = inst_13799.length;var inst_13825 = (inst_13824 > 0);var state_13839__$1 = state_13839;if(cljs.core.truth_(inst_13825))
{var statearr_13850_13875 = state_13839__$1;(statearr_13850_13875[1] = 12);
} else
{var statearr_13851_13876 = state_13839__$1;(statearr_13851_13876[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 7))
{var inst_13835 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13852_13877 = state_13839__$1;(statearr_13852_13877[2] = inst_13835);
(statearr_13852_13877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 8))
{var inst_13803 = (state_13839[9]);var inst_13799 = (state_13839[7]);var inst_13807 = (state_13839[10]);var inst_13812 = inst_13799.push(inst_13803);var tmp13849 = inst_13799;var inst_13799__$1 = tmp13849;var inst_13800 = inst_13807;var state_13839__$1 = (function (){var statearr_13853 = state_13839;(statearr_13853[7] = inst_13799__$1);
(statearr_13853[11] = inst_13812);
(statearr_13853[8] = inst_13800);
return statearr_13853;
})();var statearr_13854_13878 = state_13839__$1;(statearr_13854_13878[2] = null);
(statearr_13854_13878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 9))
{var inst_13799 = (state_13839[7]);var inst_13815 = cljs.core.vec.call(null,inst_13799);var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13839__$1,11,out,inst_13815);
} else
{if((state_val_13840 === 10))
{var inst_13822 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13855_13879 = state_13839__$1;(statearr_13855_13879[2] = inst_13822);
(statearr_13855_13879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 11))
{var inst_13803 = (state_13839[9]);var inst_13807 = (state_13839[10]);var inst_13817 = (state_13839[2]);var inst_13818 = [];var inst_13819 = inst_13818.push(inst_13803);var inst_13799 = inst_13818;var inst_13800 = inst_13807;var state_13839__$1 = (function (){var statearr_13856 = state_13839;(statearr_13856[7] = inst_13799);
(statearr_13856[12] = inst_13817);
(statearr_13856[13] = inst_13819);
(statearr_13856[8] = inst_13800);
return statearr_13856;
})();var statearr_13857_13880 = state_13839__$1;(statearr_13857_13880[2] = null);
(statearr_13857_13880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 12))
{var inst_13799 = (state_13839[7]);var inst_13827 = cljs.core.vec.call(null,inst_13799);var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13839__$1,15,out,inst_13827);
} else
{if((state_val_13840 === 13))
{var state_13839__$1 = state_13839;var statearr_13858_13881 = state_13839__$1;(statearr_13858_13881[2] = null);
(statearr_13858_13881[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 14))
{var inst_13832 = (state_13839[2]);var inst_13833 = cljs.core.async.close_BANG_.call(null,out);var state_13839__$1 = (function (){var statearr_13859 = state_13839;(statearr_13859[14] = inst_13832);
return statearr_13859;
})();var statearr_13860_13882 = state_13839__$1;(statearr_13860_13882[2] = inst_13833);
(statearr_13860_13882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13840 === 15))
{var inst_13829 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13861_13883 = state_13839__$1;(statearr_13861_13883[2] = inst_13829);
(statearr_13861_13883[1] = 14);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13865[0] = state_machine__6161__auto__);
(statearr_13865[1] = 1);
return statearr_13865;
});
var state_machine__6161__auto____1 = (function (state_13839){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_13839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13866){if((e13866 instanceof Object))
{var ex__6164__auto__ = e13866;var statearr_13867_13884 = state_13839;(statearr_13867_13884[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13885 = state_13839;
state_13839 = G__13885;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_13839){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_13839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13868 = f__6176__auto__.call(null);(statearr_13868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13869);
return statearr_13868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
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