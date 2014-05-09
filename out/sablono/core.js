// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__9841__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__9840 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__9840,0,null);var body = cljs.core.nthnext.call(null,vec__9840,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9841 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9841__delegate.call(this,args);};
G__9841.cljs$lang$maxFixedArity = 0;
G__9841.cljs$lang$applyTo = (function (arglist__9842){
var args = cljs.core.seq(arglist__9842);
return G__9841__delegate(args);
});
G__9841.cljs$core$IFn$_invoke$arity$variadic = G__9841__delegate;
return G__9841;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__9847(s__9848){return (new cljs.core.LazySeq(null,(function (){var s__9848__$1 = s__9848;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9848__$1);if(temp__4092__auto__)
{var s__9848__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9848__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9848__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9850 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9849 = 0;while(true){
if((i__9849 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__9849);cljs.core.chunk_append.call(null,b__9850,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__9851 = (i__9849 + 1);
i__9849 = G__9851;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9850),iter__9847.call(null,cljs.core.chunk_rest.call(null,s__9848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9850),null);
}
} else
{var args = cljs.core.first.call(null,s__9848__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__9847.call(null,cljs.core.rest.call(null,s__9848__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__9856(s__9857){return (new cljs.core.LazySeq(null,(function (){var s__9857__$1 = s__9857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9857__$1);if(temp__4092__auto__)
{var s__9857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9857__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9857__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9859 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9858 = 0;while(true){
if((i__9858 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__9858);cljs.core.chunk_append.call(null,b__9859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__9860 = (i__9858 + 1);
i__9858 = G__9860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9859),iter__9856.call(null,cljs.core.chunk_rest.call(null,s__9857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9859),null);
}
} else
{var style = cljs.core.first.call(null,s__9857__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__9856.call(null,cljs.core.rest.call(null,s__9857__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__9861){
var styles = cljs.core.seq(arglist__9861);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to9862 = (function() { 
var link_to9862__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to9862 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to9862__delegate.call(this,url,content);};
link_to9862.cljs$lang$maxFixedArity = 1;
link_to9862.cljs$lang$applyTo = (function (arglist__9863){
var url = cljs.core.first(arglist__9863);
var content = cljs.core.rest(arglist__9863);
return link_to9862__delegate(url,content);
});
link_to9862.cljs$core$IFn$_invoke$arity$variadic = link_to9862__delegate;
return link_to9862;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to9862);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to9864 = (function() { 
var mail_to9864__delegate = function (e_mail,p__9865){var vec__9867 = p__9865;var content = cljs.core.nth.call(null,vec__9867,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to9864 = function (e_mail,var_args){
var p__9865 = null;if (arguments.length > 1) {
  p__9865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to9864__delegate.call(this,e_mail,p__9865);};
mail_to9864.cljs$lang$maxFixedArity = 1;
mail_to9864.cljs$lang$applyTo = (function (arglist__9868){
var e_mail = cljs.core.first(arglist__9868);
var p__9865 = cljs.core.rest(arglist__9868);
return mail_to9864__delegate(e_mail,p__9865);
});
mail_to9864.cljs$core$IFn$_invoke$arity$variadic = mail_to9864__delegate;
return mail_to9864;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to9864);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list9869 = (function unordered_list9869(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__9874(s__9875){return (new cljs.core.LazySeq(null,(function (){var s__9875__$1 = s__9875;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9875__$1);if(temp__4092__auto__)
{var s__9875__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9875__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9875__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9877 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9876 = 0;while(true){
if((i__9876 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__9876);cljs.core.chunk_append.call(null,b__9877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__9878 = (i__9876 + 1);
i__9876 = G__9878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9877),iter__9874.call(null,cljs.core.chunk_rest.call(null,s__9875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9877),null);
}
} else
{var x = cljs.core.first.call(null,s__9875__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__9874.call(null,cljs.core.rest.call(null,s__9875__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list9869);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list9879 = (function ordered_list9879(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__9884(s__9885){return (new cljs.core.LazySeq(null,(function (){var s__9885__$1 = s__9885;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9885__$1);if(temp__4092__auto__)
{var s__9885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9885__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9885__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9887 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9886 = 0;while(true){
if((i__9886 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__9886);cljs.core.chunk_append.call(null,b__9887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__9888 = (i__9886 + 1);
i__9886 = G__9888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9887),iter__9884.call(null,cljs.core.chunk_rest.call(null,s__9885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9887),null);
}
} else
{var x = cljs.core.first.call(null,s__9885__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__9884.call(null,cljs.core.rest.call(null,s__9885__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list9879);
/**
* Create an image element.
*/
sablono.core.image9889 = (function() {
var image9889 = null;
var image9889__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image9889__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image9889 = function(src,alt){
switch(arguments.length){
case 1:
return image9889__1.call(this,src);
case 2:
return image9889__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image9889.cljs$core$IFn$_invoke$arity$1 = image9889__1;
image9889.cljs$core$IFn$_invoke$arity$2 = image9889__2;
return image9889;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image9889);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__9890_SHARP_,p2__9891_SHARP_){return [cljs.core.str(p1__9890_SHARP_),cljs.core.str("["),cljs.core.str(p2__9891_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__9892_SHARP_,p2__9893_SHARP_){return [cljs.core.str(p1__9892_SHARP_),cljs.core.str("-"),cljs.core.str(p2__9893_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field9894 = (function() {
var color_field9894 = null;
var color_field9894__1 = (function (name__4882__auto__){return color_field9894.call(null,name__4882__auto__,null);
});
var color_field9894__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4882__auto__,value__4883__auto__);
});
color_field9894 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return color_field9894__1.call(this,name__4882__auto__);
case 2:
return color_field9894__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field9894.cljs$core$IFn$_invoke$arity$1 = color_field9894__1;
color_field9894.cljs$core$IFn$_invoke$arity$2 = color_field9894__2;
return color_field9894;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field9894);
/**
* Creates a date input field.
*/
sablono.core.date_field9895 = (function() {
var date_field9895 = null;
var date_field9895__1 = (function (name__4882__auto__){return date_field9895.call(null,name__4882__auto__,null);
});
var date_field9895__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4882__auto__,value__4883__auto__);
});
date_field9895 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return date_field9895__1.call(this,name__4882__auto__);
case 2:
return date_field9895__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field9895.cljs$core$IFn$_invoke$arity$1 = date_field9895__1;
date_field9895.cljs$core$IFn$_invoke$arity$2 = date_field9895__2;
return date_field9895;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field9895);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field9896 = (function() {
var datetime_field9896 = null;
var datetime_field9896__1 = (function (name__4882__auto__){return datetime_field9896.call(null,name__4882__auto__,null);
});
var datetime_field9896__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_field9896 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_field9896__1.call(this,name__4882__auto__);
case 2:
return datetime_field9896__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field9896.cljs$core$IFn$_invoke$arity$1 = datetime_field9896__1;
datetime_field9896.cljs$core$IFn$_invoke$arity$2 = datetime_field9896__2;
return datetime_field9896;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field9896);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field9897 = (function() {
var datetime_local_field9897 = null;
var datetime_local_field9897__1 = (function (name__4882__auto__){return datetime_local_field9897.call(null,name__4882__auto__,null);
});
var datetime_local_field9897__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_local_field9897 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_local_field9897__1.call(this,name__4882__auto__);
case 2:
return datetime_local_field9897__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field9897.cljs$core$IFn$_invoke$arity$1 = datetime_local_field9897__1;
datetime_local_field9897.cljs$core$IFn$_invoke$arity$2 = datetime_local_field9897__2;
return datetime_local_field9897;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field9897);
/**
* Creates a email input field.
*/
sablono.core.email_field9898 = (function() {
var email_field9898 = null;
var email_field9898__1 = (function (name__4882__auto__){return email_field9898.call(null,name__4882__auto__,null);
});
var email_field9898__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4882__auto__,value__4883__auto__);
});
email_field9898 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return email_field9898__1.call(this,name__4882__auto__);
case 2:
return email_field9898__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field9898.cljs$core$IFn$_invoke$arity$1 = email_field9898__1;
email_field9898.cljs$core$IFn$_invoke$arity$2 = email_field9898__2;
return email_field9898;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field9898);
/**
* Creates a file input field.
*/
sablono.core.file_field9899 = (function() {
var file_field9899 = null;
var file_field9899__1 = (function (name__4882__auto__){return file_field9899.call(null,name__4882__auto__,null);
});
var file_field9899__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4882__auto__,value__4883__auto__);
});
file_field9899 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return file_field9899__1.call(this,name__4882__auto__);
case 2:
return file_field9899__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field9899.cljs$core$IFn$_invoke$arity$1 = file_field9899__1;
file_field9899.cljs$core$IFn$_invoke$arity$2 = file_field9899__2;
return file_field9899;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field9899);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field9900 = (function() {
var hidden_field9900 = null;
var hidden_field9900__1 = (function (name__4882__auto__){return hidden_field9900.call(null,name__4882__auto__,null);
});
var hidden_field9900__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4882__auto__,value__4883__auto__);
});
hidden_field9900 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return hidden_field9900__1.call(this,name__4882__auto__);
case 2:
return hidden_field9900__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field9900.cljs$core$IFn$_invoke$arity$1 = hidden_field9900__1;
hidden_field9900.cljs$core$IFn$_invoke$arity$2 = hidden_field9900__2;
return hidden_field9900;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field9900);
/**
* Creates a month input field.
*/
sablono.core.month_field9901 = (function() {
var month_field9901 = null;
var month_field9901__1 = (function (name__4882__auto__){return month_field9901.call(null,name__4882__auto__,null);
});
var month_field9901__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4882__auto__,value__4883__auto__);
});
month_field9901 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return month_field9901__1.call(this,name__4882__auto__);
case 2:
return month_field9901__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field9901.cljs$core$IFn$_invoke$arity$1 = month_field9901__1;
month_field9901.cljs$core$IFn$_invoke$arity$2 = month_field9901__2;
return month_field9901;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field9901);
/**
* Creates a number input field.
*/
sablono.core.number_field9902 = (function() {
var number_field9902 = null;
var number_field9902__1 = (function (name__4882__auto__){return number_field9902.call(null,name__4882__auto__,null);
});
var number_field9902__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4882__auto__,value__4883__auto__);
});
number_field9902 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return number_field9902__1.call(this,name__4882__auto__);
case 2:
return number_field9902__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field9902.cljs$core$IFn$_invoke$arity$1 = number_field9902__1;
number_field9902.cljs$core$IFn$_invoke$arity$2 = number_field9902__2;
return number_field9902;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field9902);
/**
* Creates a password input field.
*/
sablono.core.password_field9903 = (function() {
var password_field9903 = null;
var password_field9903__1 = (function (name__4882__auto__){return password_field9903.call(null,name__4882__auto__,null);
});
var password_field9903__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4882__auto__,value__4883__auto__);
});
password_field9903 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return password_field9903__1.call(this,name__4882__auto__);
case 2:
return password_field9903__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field9903.cljs$core$IFn$_invoke$arity$1 = password_field9903__1;
password_field9903.cljs$core$IFn$_invoke$arity$2 = password_field9903__2;
return password_field9903;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field9903);
/**
* Creates a range input field.
*/
sablono.core.range_field9904 = (function() {
var range_field9904 = null;
var range_field9904__1 = (function (name__4882__auto__){return range_field9904.call(null,name__4882__auto__,null);
});
var range_field9904__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4882__auto__,value__4883__auto__);
});
range_field9904 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return range_field9904__1.call(this,name__4882__auto__);
case 2:
return range_field9904__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field9904.cljs$core$IFn$_invoke$arity$1 = range_field9904__1;
range_field9904.cljs$core$IFn$_invoke$arity$2 = range_field9904__2;
return range_field9904;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field9904);
/**
* Creates a search input field.
*/
sablono.core.search_field9905 = (function() {
var search_field9905 = null;
var search_field9905__1 = (function (name__4882__auto__){return search_field9905.call(null,name__4882__auto__,null);
});
var search_field9905__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4882__auto__,value__4883__auto__);
});
search_field9905 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return search_field9905__1.call(this,name__4882__auto__);
case 2:
return search_field9905__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field9905.cljs$core$IFn$_invoke$arity$1 = search_field9905__1;
search_field9905.cljs$core$IFn$_invoke$arity$2 = search_field9905__2;
return search_field9905;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field9905);
/**
* Creates a tel input field.
*/
sablono.core.tel_field9906 = (function() {
var tel_field9906 = null;
var tel_field9906__1 = (function (name__4882__auto__){return tel_field9906.call(null,name__4882__auto__,null);
});
var tel_field9906__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4882__auto__,value__4883__auto__);
});
tel_field9906 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return tel_field9906__1.call(this,name__4882__auto__);
case 2:
return tel_field9906__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field9906.cljs$core$IFn$_invoke$arity$1 = tel_field9906__1;
tel_field9906.cljs$core$IFn$_invoke$arity$2 = tel_field9906__2;
return tel_field9906;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field9906);
/**
* Creates a text input field.
*/
sablono.core.text_field9907 = (function() {
var text_field9907 = null;
var text_field9907__1 = (function (name__4882__auto__){return text_field9907.call(null,name__4882__auto__,null);
});
var text_field9907__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4882__auto__,value__4883__auto__);
});
text_field9907 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return text_field9907__1.call(this,name__4882__auto__);
case 2:
return text_field9907__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field9907.cljs$core$IFn$_invoke$arity$1 = text_field9907__1;
text_field9907.cljs$core$IFn$_invoke$arity$2 = text_field9907__2;
return text_field9907;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field9907);
/**
* Creates a time input field.
*/
sablono.core.time_field9908 = (function() {
var time_field9908 = null;
var time_field9908__1 = (function (name__4882__auto__){return time_field9908.call(null,name__4882__auto__,null);
});
var time_field9908__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4882__auto__,value__4883__auto__);
});
time_field9908 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return time_field9908__1.call(this,name__4882__auto__);
case 2:
return time_field9908__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field9908.cljs$core$IFn$_invoke$arity$1 = time_field9908__1;
time_field9908.cljs$core$IFn$_invoke$arity$2 = time_field9908__2;
return time_field9908;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field9908);
/**
* Creates a url input field.
*/
sablono.core.url_field9909 = (function() {
var url_field9909 = null;
var url_field9909__1 = (function (name__4882__auto__){return url_field9909.call(null,name__4882__auto__,null);
});
var url_field9909__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4882__auto__,value__4883__auto__);
});
url_field9909 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return url_field9909__1.call(this,name__4882__auto__);
case 2:
return url_field9909__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field9909.cljs$core$IFn$_invoke$arity$1 = url_field9909__1;
url_field9909.cljs$core$IFn$_invoke$arity$2 = url_field9909__2;
return url_field9909;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field9909);
/**
* Creates a week input field.
*/
sablono.core.week_field9910 = (function() {
var week_field9910 = null;
var week_field9910__1 = (function (name__4882__auto__){return week_field9910.call(null,name__4882__auto__,null);
});
var week_field9910__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4882__auto__,value__4883__auto__);
});
week_field9910 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return week_field9910__1.call(this,name__4882__auto__);
case 2:
return week_field9910__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field9910.cljs$core$IFn$_invoke$arity$1 = week_field9910__1;
week_field9910.cljs$core$IFn$_invoke$arity$2 = week_field9910__2;
return week_field9910;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field9910);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box9911 = (function() {
var check_box9911 = null;
var check_box9911__1 = (function (name){return check_box9911.call(null,name,null);
});
var check_box9911__2 = (function (name,checked_QMARK_){return check_box9911.call(null,name,checked_QMARK_,"true");
});
var check_box9911__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box9911 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box9911__1.call(this,name);
case 2:
return check_box9911__2.call(this,name,checked_QMARK_);
case 3:
return check_box9911__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box9911.cljs$core$IFn$_invoke$arity$1 = check_box9911__1;
check_box9911.cljs$core$IFn$_invoke$arity$2 = check_box9911__2;
check_box9911.cljs$core$IFn$_invoke$arity$3 = check_box9911__3;
return check_box9911;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box9911);
/**
* Creates a radio button.
*/
sablono.core.radio_button9912 = (function() {
var radio_button9912 = null;
var radio_button9912__1 = (function (group){return radio_button9912.call(null,group,null);
});
var radio_button9912__2 = (function (group,checked_QMARK_){return radio_button9912.call(null,group,checked_QMARK_,"true");
});
var radio_button9912__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button9912 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button9912__1.call(this,group);
case 2:
return radio_button9912__2.call(this,group,checked_QMARK_);
case 3:
return radio_button9912__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button9912.cljs$core$IFn$_invoke$arity$1 = radio_button9912__1;
radio_button9912.cljs$core$IFn$_invoke$arity$2 = radio_button9912__2;
radio_button9912.cljs$core$IFn$_invoke$arity$3 = radio_button9912__3;
return radio_button9912;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button9912);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options9913 = (function() {
var select_options9913 = null;
var select_options9913__1 = (function (coll){return select_options9913.call(null,coll,null);
});
var select_options9913__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__9922(s__9923){return (new cljs.core.LazySeq(null,(function (){var s__9923__$1 = s__9923;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9923__$1);if(temp__4092__auto__)
{var s__9923__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9923__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9923__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9925 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9924 = 0;while(true){
if((i__9924 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__9924);cljs.core.chunk_append.call(null,b__9925,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9928 = x;var text = cljs.core.nth.call(null,vec__9928,0,null);var val = cljs.core.nth.call(null,vec__9928,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__9928,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options9913.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__9930 = (i__9924 + 1);
i__9924 = G__9930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9925),iter__9922.call(null,cljs.core.chunk_rest.call(null,s__9923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9925),null);
}
} else
{var x = cljs.core.first.call(null,s__9923__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9929 = x;var text = cljs.core.nth.call(null,vec__9929,0,null);var val = cljs.core.nth.call(null,vec__9929,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__9929,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options9913.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__9922.call(null,cljs.core.rest.call(null,s__9923__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options9913 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options9913__1.call(this,coll);
case 2:
return select_options9913__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options9913.cljs$core$IFn$_invoke$arity$1 = select_options9913__1;
select_options9913.cljs$core$IFn$_invoke$arity$2 = select_options9913__2;
return select_options9913;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options9913);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down9931 = (function() {
var drop_down9931 = null;
var drop_down9931__2 = (function (name,options){return drop_down9931.call(null,name,options,null);
});
var drop_down9931__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down9931 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down9931__2.call(this,name,options);
case 3:
return drop_down9931__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down9931.cljs$core$IFn$_invoke$arity$2 = drop_down9931__2;
drop_down9931.cljs$core$IFn$_invoke$arity$3 = drop_down9931__3;
return drop_down9931;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down9931);
/**
* Creates a text area element.
*/
sablono.core.text_area9932 = (function() {
var text_area9932 = null;
var text_area9932__1 = (function (name){return text_area9932.call(null,name,null);
});
var text_area9932__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area9932 = function(name,value){
switch(arguments.length){
case 1:
return text_area9932__1.call(this,name);
case 2:
return text_area9932__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area9932.cljs$core$IFn$_invoke$arity$1 = text_area9932__1;
text_area9932.cljs$core$IFn$_invoke$arity$2 = text_area9932__2;
return text_area9932;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area9932);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label9933 = (function label9933(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label9933);
/**
* Creates a submit button.
*/
sablono.core.submit_button9934 = (function submit_button9934(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button9934);
/**
* Creates a form reset button.
*/
sablono.core.reset_button9935 = (function reset_button9935(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button9935);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to9936 = (function() { 
var form_to9936__delegate = function (p__9937,body){var vec__9939 = p__9937;var method = cljs.core.nth.call(null,vec__9939,0,null);var action = cljs.core.nth.call(null,vec__9939,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to9936 = function (p__9937,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to9936__delegate.call(this,p__9937,body);};
form_to9936.cljs$lang$maxFixedArity = 1;
form_to9936.cljs$lang$applyTo = (function (arglist__9940){
var p__9937 = cljs.core.first(arglist__9940);
var body = cljs.core.rest(arglist__9940);
return form_to9936__delegate(p__9937,body);
});
form_to9936.cljs$core$IFn$_invoke$arity$variadic = form_to9936__delegate;
return form_to9936;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to9936);

//# sourceMappingURL=core.js.map