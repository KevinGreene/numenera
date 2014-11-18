// Compiled by ClojureScript 0.0-2138
goog.provide('numenera.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
numenera.core.characterList = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
numenera.core.characterName = reagent.core.atom.call(null,"Gregory");
numenera.core.getArticle = (function getArticle(noun){return [cljs.core.str("a"),cljs.core.str(((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["A",null,"E",null,"I",null,"O",null,"U",null], null), null),cljs.core.first.call(null,clojure.string.capitalize.call(null,noun))))?"n":""))].join('');
});
numenera.core.getCharacterString = (function getCharacterString(characterName,p__61495){var map__61497 = p__61495;var map__61497__$1 = ((cljs.core.seq_QMARK_.call(null,map__61497))?cljs.core.apply.call(null,cljs.core.hash_map,map__61497):map__61497);var focus = cljs.core.get.call(null,map__61497__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var character_type = cljs.core.get.call(null,map__61497__$1,new cljs.core.Keyword(null,"character-type","character-type",1324841680));var descriptor = cljs.core.get.call(null,map__61497__$1,new cljs.core.Keyword(null,"descriptor","descriptor",4560504545));return [cljs.core.str(characterName),cljs.core.str(", "),cljs.core.str(numenera.core.getArticle.call(null,descriptor)),cljs.core.str(" "),cljs.core.str(descriptor),cljs.core.str(" "),cljs.core.str(character_type),cljs.core.str(" who "),cljs.core.str(focus)].join('');
});
numenera.core.refresh_character_component = (function refresh_character_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Refresh characters: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return numenera.core.fetch_characters.call(null);
})], null)], null)], null);
});
numenera.core.character_name_input_component = (function character_name_input_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Type your desired name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,numenera.core.characterName),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__61498_SHARP_){return cljs.core.reset_BANG_.call(null,numenera.core.characterName,p1__61498_SHARP_.target.value);
})], null)], null)], null);
});
numenera.core.character_component = (function character_component(characterName,character){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),numenera.core.getCharacterString.call(null,characterName,character)], null);
});
numenera.core.character_list = (function character_list(characterName,characters){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4119__auto__ = (function iter__61503(s__61504){return (new cljs.core.LazySeq(null,(function (){var s__61504__$1 = s__61504;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__61504__$1);if(temp__4092__auto__)
{var s__61504__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__61504__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__61504__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__61506 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__61505 = 0;while(true){
if((i__61505 < size__4118__auto__))
{var character = cljs.core._nth.call(null,c__4117__auto__,i__61505);cljs.core.chunk_append.call(null,b__61506,numenera.core.character_component.call(null,characterName,character));
{
var G__61507 = (i__61505 + 1);
i__61505 = G__61507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61506),iter__61503.call(null,cljs.core.chunk_rest.call(null,s__61504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61506),null);
}
} else
{var character = cljs.core.first.call(null,s__61504__$2);return cljs.core.cons.call(null,numenera.core.character_component.call(null,characterName,character),iter__61503.call(null,cljs.core.rest.call(null,s__61504__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,characters);
})()], null)], null);
});
numenera.core.fetch_characters = (function fetch_characters(){var c = cljs.core.async.chan.call(null);var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_61548){var state_val_61549 = (state_61548[1]);if((state_val_61549 === 5))
{var inst_61544 = (state_61548[2]);var inst_61545 = cljs.core.get.call(null,inst_61544,new cljs.core.Keyword(null,"body","body",1016933652));var inst_61546 = cljs.core.reset_BANG_.call(null,numenera.core.characterList,inst_61545);var state_61548__$1 = state_61548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61548__$1,inst_61546);
} else
{if((state_val_61549 === 4))
{var inst_61538 = (state_61548[7]);var state_61548__$1 = state_61548;var statearr_61550_61562 = state_61548__$1;(statearr_61550_61562[2] = inst_61538);
(statearr_61550_61562[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61549 === 3))
{var inst_61538 = (state_61548[7]);var inst_61541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61538);var state_61548__$1 = state_61548;var statearr_61551_61563 = state_61548__$1;(statearr_61551_61563[2] = inst_61541);
(statearr_61551_61563[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61549 === 2))
{var inst_61538 = (state_61548[7]);var inst_61538__$1 = (state_61548[2]);var inst_61539 = cljs.core.seq_QMARK_.call(null,inst_61538__$1);var state_61548__$1 = (function (){var statearr_61552 = state_61548;(statearr_61552[7] = inst_61538__$1);
return statearr_61552;
})();if(inst_61539)
{var statearr_61553_61564 = state_61548__$1;(statearr_61553_61564[1] = 3);
} else
{var statearr_61554_61565 = state_61548__$1;(statearr_61554_61565[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61549 === 1))
{var inst_61536 = cljs_http.client.get.call(null,"/api/characters/random/5");var state_61548__$1 = state_61548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61548__$1,2,inst_61536);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_61558 = [null,null,null,null,null,null,null,null];(statearr_61558[0] = state_machine__6161__auto__);
(statearr_61558[1] = 1);
return statearr_61558;
});
var state_machine__6161__auto____1 = (function (state_61548){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_61548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e61559){if((e61559 instanceof Object))
{var ex__6164__auto__ = e61559;var statearr_61560_61566 = state_61548;(statearr_61560_61566[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61567 = state_61548;
state_61548 = G__61567;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_61548){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_61548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_61561 = f__6176__auto__.call(null);(statearr_61561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_61561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
numenera.core.character_box = (function character_box(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Characters"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [numenera.core.refresh_character_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [numenera.core.character_name_input_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [numenera.core.character_list,cljs.core.deref.call(null,numenera.core.characterName),cljs.core.deref.call(null,numenera.core.characterList)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [numenera.core.character_box], null),document.getElementById("character-box"));
numenera.core.fetch_characters.call(null);

//# sourceMappingURL=core.js.map