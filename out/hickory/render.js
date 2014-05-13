// Compiled by ClojureScript 0.0-2173
goog.provide('hickory.render');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('hickory.utils');
goog.require('hickory.utils');
goog.require('hickory.hiccup_utils');
goog.require('hickory.hiccup_utils');
/**
* Given a map entry m, representing the attribute name and value, returns a
* string representing that key/value pair as it would be rendered into HTML.
*/
hickory.render.render_hickory_attribute = (function render_hickory_attribute(m){return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,cljs.core.key.call(null,m))),cljs.core.str("=\""),cljs.core.str(hickory.utils.html_escape.call(null,cljs.core.val.call(null,m))),cljs.core.str("\"")].join('');
});
/**
* Given a hickory HTML DOM map structure (as returned by as-hickory), returns a
* string containing HTML it represents. Keep in mind this function is not super
* fast or heavy-duty.
* 
* Note that it will NOT in general be the case that
* 
* (= my-html-src (hickory-to-html (as-hickory (parse my-html-src))))
* 
* as we do not keep any letter case or whitespace information, any
* "tag-soupy" elements, attribute quote characters used, etc.
*/
hickory.render.hickory_to_html = (function hickory_to_html(dom){if(typeof dom === 'string')
{return hickory.utils.html_escape.call(null,dom);
} else
{try{var G__9622 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(dom);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"comment","comment",1964302801),G__9622))
{return [cljs.core.str("<!--"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str("-->")].join('');
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"element","element",3646034542),G__9622))
{if(cljs.core.truth_(hickory.utils.void_element.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))))
{return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">")].join('');
} else
{if(cljs.core.truth_(hickory.utils.unescapable_content.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))))
{return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(">")].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory_to_html,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(">")].join('');
} else
{return null;
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document-type","document-type",2553302046),G__9622))
{return hickory.utils.render_doctype.call(null,cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.Keyword(null,"name","name",1017277949)], null)),cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.Keyword(null,"publicid","publicid",2307505334)], null)),cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.Keyword(null,"systemid","systemid",2989990652)], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",1875625101),G__9622))
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory_to_html,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(dom)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(dom))].join('')));
} else
{return null;
}
}
}
}
}
}catch (e9621){if((e9621 instanceof Error))
{var e = e9621;throw (cljs.core.truth_(hickory.utils.starts_with.call(null,(e["message"]),"No matching clause: "))?cljs.core.ex_info.call(null,[cljs.core.str("Not a valid node: "),cljs.core.str(cljs.core.pr_str.call(null,dom))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",1014003892),dom], null)):e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9621;
} else
{return null;
}
}
}}
});
/**
* Given a hiccup attribute map, returns a string containing the attributes
* rendered as they should appear in an HTML tag, right after the tag (including
* a leading space to separate from the tag, if any attributes present).
*/
hickory.render.render_hiccup_attrs = (function render_hiccup_attrs(attrs){var attrs_str = clojure.string.join.call(null," ",cljs.core.sort.call(null,cljs.core.filter.call(null,(function (p1__9623_SHARP_){return !(cljs.core.empty_QMARK_.call(null,p1__9623_SHARP_));
}),(function (){var iter__4160__auto__ = (function iter__9632(s__9633){return (new cljs.core.LazySeq(null,(function (){var s__9633__$1 = s__9633;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9633__$1);if(temp__4092__auto__)
{var s__9633__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9633__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9633__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9635 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9634 = 0;while(true){
if((i__9634 < size__4159__auto__))
{var vec__9638 = cljs.core._nth.call(null,c__4158__auto__,i__9634);var k = cljs.core.nth.call(null,vec__9638,0,null);var v = cljs.core.nth.call(null,vec__9638,1,null);cljs.core.chunk_append.call(null,b__9635,((v === true)?[cljs.core.str(cljs.core.name.call(null,k))].join(''):(((v == null))?"":((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(hickory.utils.html_escape.call(null,v)),cljs.core.str("\"")].join(''):null))));
{
var G__9640 = (i__9634 + 1);
i__9634 = G__9640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9635),iter__9632.call(null,cljs.core.chunk_rest.call(null,s__9633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9635),null);
}
} else
{var vec__9639 = cljs.core.first.call(null,s__9633__$2);var k = cljs.core.nth.call(null,vec__9639,0,null);var v = cljs.core.nth.call(null,vec__9639,1,null);return cljs.core.cons.call(null,((v === true)?[cljs.core.str(cljs.core.name.call(null,k))].join(''):(((v == null))?"":((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(hickory.utils.html_escape.call(null,v)),cljs.core.str("\"")].join(''):null))),iter__9632.call(null,cljs.core.rest.call(null,s__9633__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,attrs);
})())));if(!(cljs.core.empty_QMARK_.call(null,attrs_str)))
{return [cljs.core.str(" "),cljs.core.str(attrs_str)].join('');
} else
{return attrs_str;
}
});
/**
* Given a normalized hiccup element (such as the output of
* hickory.hiccup-utils/normalize-form; see this function's docstring
* for more detailed definition of a normalized hiccup element), renders
* it to HTML and returns it as a string.
*/
hickory.render.render_hiccup_element = (function render_hiccup_element(n_element){var vec__9642 = n_element;var tag = cljs.core.nth.call(null,vec__9642,0,null);var attrs = cljs.core.nth.call(null,vec__9642,1,null);var content = cljs.core.nthnext.call(null,vec__9642,2);if(cljs.core.truth_(hickory.utils.void_element.call(null,tag)))
{return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(hickory.render.render_hiccup_attrs.call(null,attrs)),cljs.core.str(">")].join('');
} else
{return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(hickory.render.render_hiccup_attrs.call(null,attrs)),cljs.core.str(">"),cljs.core.str(hickory.render.hiccup_to_html.call(null,content)),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(">")].join('');
}
});
/**
* Given a normalized hiccup form (such as the output of
* hickory.hiccup-utils/normalize-form; see this function's docstring
* for more detailed definition of a normalized hiccup form), renders
* it to HTML and returns it as a string.
*/
hickory.render.render_hiccup_form = (function render_hiccup_form(n_form){if(cljs.core.vector_QMARK_.call(null,n_form))
{return hickory.render.render_hiccup_element.call(null,n_form);
} else
{return n_form;
}
});
/**
* Given a sequence of hiccup forms (as returned by as-hiccup), returns a
* string containing HTML it represents. Keep in mind this function is not super
* fast or heavy-duty, and definitely not a replacement for dedicated hiccup
* renderers, like hiccup itself, which *is* fast and heavy-duty.
* 
* Note that it will NOT in general be the case that
* 
* (= my-html-src (hiccup-to-html (as-hiccup (parse my-html-src))))
* 
* as we do not keep any letter case or whitespace information, any
* "tag-soupy" elements, attribute quote characters used, etc. It will also
* not generally be the case that this function's output will exactly match
* hiccup's.
*/
hickory.render.hiccup_to_html = (function hiccup_to_html(hiccup_forms){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__9643_SHARP_){return hickory.render.render_hiccup_form.call(null,hickory.hiccup_utils.normalize_form.call(null,p1__9643_SHARP_));
}),hiccup_forms));
});

//# sourceMappingURL=render.js.map