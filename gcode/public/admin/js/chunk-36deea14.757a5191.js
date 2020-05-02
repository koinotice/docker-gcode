(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36deea14"],{"2c47":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-one-to-many"},[!1===e.relationshipSetup?i("v-notice",{attrs:{color:"warning",icon:"warning"}},[e._v(" "+e._s(e.$t("relationship_not_setup"))+" ")]):null===e.initialValue?i("v-spinner"):[e.items&&e.items.length?i("div",{staticClass:"table"},[i("div",{staticClass:"header"},[i("div",{staticClass:"row"},[e.sortable?i("button",{staticClass:"sort-column",on:{click:e.toggleManualSort}},[i("v-icon",{attrs:{name:"sort",small:"",color:e.manualSortActive?"--action":"--blue-grey-300"}})],1):e._e(),e._l(e.visibleFields,(function(t){return i("button",{key:t.field,attrs:{type:"button"},on:{click:function(i){return e.changeSort(t.field)}}},[e._v(" "+e._s(e.$helpers.formatField(t.field,t.collection))+" "),e.sort.field===t.field?i("v-icon",{attrs:{name:e.sort.asc?"arrow_downward":"arrow_upward",size:16}}):e._e()],1)}))],2)]),i("draggable",{staticClass:"body",class:{dragging:e.dragging,readonly:e.readonly},attrs:{handle:".drag-handle",disabled:!e.sortable||!e.manualSortActive},on:{start:function(t){e.dragging=!0},end:function(t){e.dragging=!1}},model:{value:e.itemsSorted,callback:function(t){e.itemsSorted=t},expression:"itemsSorted"}},e._l(e.itemsSorted,(function(t){return i("div",{key:t[e.relatedPrimaryKeyField],staticClass:"row",on:{click:function(i){return e.startEdit(t[e.relatedPrimaryKeyField])}}},[e.sortable?i("div",{staticClass:"sort-column",class:{disabled:!e.manualSortActive}},[e.readonly?e._e():i("v-icon",{staticClass:"drag-handle",attrs:{name:"drag_handle"}})],1):e._e(),e._l(e.visibleFields,(function(e){return i("div",{key:e.field,staticClass:"field-preview"},[i("v-ext-display",{attrs:{"interface-type":e.interface,name:e.field,type:e.type,collection:e.collection,relation:e.relation,datatype:e.datatype,options:e.options,value:String(t[e.field]).startsWith("$temp_")?null:t[e.field],values:t}})],1)})),e.readonly?e._e():i("button",{staticClass:"remove",on:{click:function(i){return i.stopPropagation(),e.deleteItem(t[e.relatedPrimaryKeyField])}}},[i("v-icon",{attrs:{name:"close"}})],1)],2)})),0)],1):i("v-notice",[e._v(e._s(e.$t("no_items_selected")))]),e.readonly?e._e():i("div",{staticClass:"buttons"},[e.options.allow_create?i("v-button",{attrs:{type:"button",disabled:e.readonly},on:{click:e.startAddNewItem}},[i("v-icon",{attrs:{name:"add",left:""}}),e._v(" "+e._s(e.$t("add_new"))+" ")],1):e._e(),e.options.allow_select?i("v-button",{attrs:{type:"button",disabled:e.readonly},on:{click:function(t){e.selectExisting=!0}}},[i("v-icon",{attrs:{name:"playlist_add",left:""}}),e._v(" "+e._s(e.$t("select_existing"))+" ")],1):e._e()],1)],e.selectExisting?i("v-item-select",{attrs:{fields:e.visibleFieldNames,collection:e.relation.collection_many.collection,filters:[],value:e.stagedSelection||e.selectionPrimaryKeys},on:{input:e.stageSelection,done:e.closeSelection,cancel:e.cancelSelection}}):e._e(),e.editItem?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.addNew?e.$t("creating_item"):e.$t("editing_item"),buttons:{save:{text:e.$t("save"),color:"accent"}}},on:{close:e.closeEditItem,save:e.saveEditItem}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{"new-item":"",fields:e.relatedCollectionFields,collection:e.relation.collection_many.collection,"primary-key":e.editItem[e.relatedPrimaryKeyField]||"+",values:e.editItem},on:{"stage-value":e.stageValue}})],1)])],1):e._e()],2)},r=[],a=(i("a4d3"),i("99af"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("a15b"),i("d81d"),i("fb6a"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("ac1f"),i("2532"),i("1276"),i("2ca0"),i("498a"),i("159b"),i("2909")),l=(i("96cf"),i("1da1")),s=i("ade3"),o=i("8db2"),c=i.n(o),d=i("8dee"),u=i.n(d),f=i("649d"),m=i("2ef0");function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={name:"InterfaceOneToMany",mixins:[c.a],data:function(){return{sort:{field:null,asc:!0},selectExisting:!1,editItem:!1,addNew:null,dragging:!1,items:null,loading:!1,error:null,stagedSelection:null,initialValue:null}},computed:{relationshipSetup:function(){return!!this.relation},visibleFields:function(){var e=this;if(!1===this.relationshipSetup)return[];var t,i=this.relation.collection_many.fields,n=this.relation.field_many.field;return this.options.fields?(Array.isArray(this.options.fields)&&(t=this.options.fields.map((function(e){return e.trim()}))),t=this.options.fields.split(",").map((function(e){return e.trim()})),t.map((function(t){var r=i[t];n&&t===n&&(r.readonly=!0);var a=null;return"m2o"===r.type.toLowerCase()&&(a=e.$store.getters.m2o(r.collection,r.field)),"o2m"===r.type.toLowerCase()&&(a=e.$store.getters.o2m(r.collection,r.field)),"translation"===r.type.toLowerCase()&&(a=e.$store.getters.o2m(r.collection,r.field)),r.relation=a,r}))):Object.values(i).filter((function(e){return!0!==e.hidden_browse})).filter((function(e){return!n||e.field!==n})).slice(0,2)},visibleFieldNames:function(){return this.visibleFields.map((function(e){return e.field}))},relatedPrimaryKeyField:function(){return Object(m["find"])(this.relation.collection_many.fields,{primary_key:!0}).field},selectionPrimaryKeys:function(){var e=this;return this.items.map((function(t){return t[e.relatedPrimaryKeyField]}))},sortField:function(){var e=this.options.sort_field;return e?Object(m["find"])(this.relation.collection_many.fields,{field:e}):null},sortable:function(){return!!this.sortField},manualSortActive:function(){return"$manual"===this.sort.field},relatedCollectionFields:function(){var e=this.relation.collection_many.fields,t=this.relation.field_many&&this.relation.field_many.field;return Object(m["mapValues"])(e,(function(e){var i=Object(m["clone"])(e);return i.field===t&&(i.readonly=!0),i}))},itemsSorted:{get:function(){var e=this;return"$manual"===this.sort.field?Object(m["orderBy"])(Object(m["cloneDeep"])(this.items),(function(t){return t[e.sortField.field]}),this.sort.asc?"asc":"desc"):Object(m["orderBy"])(Object(m["cloneDeep"])(this.items),(function(t){return t[e.sort.field]}),this.sort.asc?"asc":"desc")},set:function(e){var t=this;this.items=e.map((function(e,i){return p({},e,Object(s["a"])({},t.sortField.field,i+1))}))}}},watch:{items:function(e,t){null!==t&&this.emitValue(e)}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.sortable?e.sort.field="$manual":e.visibleFieldNames&&e.visibleFieldNames.length>0&&(e.sort.field=e.visibleFieldNames[0]),t.next=3,e.getInitialValue();case 3:e.items=Object(m["cloneDeep"])(e.initialValue)||[];case 4:case"end":return t.stop()}}),t)})))()},methods:{getInitialValue:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getItems(e.relation.collection_many.collection,{fields:"*.*",filter:Object(s["a"])({},e.relation.field_many.field,e.primaryKey)});case 2:i=t.sent,e.initialValue=i.data;case 4:case"end":return t.stop()}}),t)})))()},changeSort:function(e){this.sort.field!==e?(this.sort.asc=!0,this.sort.field=e):this.sort.asc=!this.sort.asc},toggleManualSort:function(){this.sort.field="$manual",this.sort.asc=!0},startAddNewItem:function(){this.addNew=!0;var e=this.relation.collection_many.fields,t=Object(m["mapValues"])(e,(function(e){return e.default_value})),i=this.relation.field_many&&this.relation.field_many.field,n="$temp_"+u.a.generate();t.hasOwnProperty(this.relatedPrimaryKeyField)&&delete t[this.relatedPrimaryKeyField],t.hasOwnProperty(i)&&delete t[i],this.items=[].concat(Object(a["a"])(this.items),[p(Object(s["a"])({},this.relatedPrimaryKeyField,n),t)]),this.startEdit(n)},stageValue:function(e){var t=e.field,i=e.value;this.$set(this.editItem,t,i)},startEdit:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var n,r,a,l,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=Object(m["cloneDeep"])(t.items.find((function(i){return i[t.relatedPrimaryKeyField]===e}))),r="string"===typeof e&&e.startsWith("$temp_"),!1!==r){i.next=9;break}return a=t.relation.collection_many.collection,i.next=6,t.$api.getItem(a,e,{fields:"*.*.*"});case 6:l=i.sent,s=l.data,n=Object(m["merge"])({},s,n);case 9:t.editItem=n;case 10:case"end":return i.stop()}}),i)})))()},saveEditItem:function(){var e=this,t=this.editItem[this.relatedPrimaryKeyField],i=this.relation.field_many&&this.relation.field_many.field;this.items=this.items.map((function(n){if(n[e.relatedPrimaryKeyField]===t){var r=Object(m["clone"])(e.editItem);return r.hasOwnProperty(i)&&delete r[i],r}return n})),this.editItem=null},closeEditItem:function(){this.addNew&&this.items.pop(),this.addNew=!1,this.editItem=null},stageSelection:function(e){this.stagedSelection=e},closeSelection:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i,n,r,l,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.stagedSelection){t.next=3;break}return e.selectExisting=!1,t.abrupt("return");case 3:if(i=e.stagedSelection||[],e.items=e.items.filter((function(t){var n=t[e.relatedPrimaryKeyField];return i.includes(n)})),n=e.items.map((function(t){return t[e.relatedPrimaryKeyField]})),r=Object(m["difference"])(i,n),!(r.length>0)){t.next=13;break}return t.next=10,e.$api.getItem(e.relation.collection_many.collection,r.join(","),{fields:"*.*.*"});case 10:l=t.sent,s=Array.isArray(l.data)?l.data:[l.data],e.items=[].concat(Object(a["a"])(e.items),Object(a["a"])(s));case 13:e.stagedSelection=null,e.selectExisting=!1;case 15:case"end":return t.stop()}}),t)})))()},cancelSelection:function(){this.stagedSelection=null,this.selectExisting=!1},deleteItem:function(e){var t=this;this.items=this.items.filter((function(i){return i[t.relatedPrimaryKeyField]!==e}))},emitValue:function(e){var t=this;e=Object(m["cloneDeep"])(e);var i=this.relation.field_many.field,n=e.map((function(e){var n=e[t.relatedPrimaryKeyField],r=t.initialValue.find((function(e){return e[t.relatedPrimaryKeyField]===n}));if(r){var a=Object(f["diff"])(r,e);if(Object(m["forEach"])(a,(function(i,n){var r=t.relatedCollectionFields[n];if(r){var l=r.type.toLowerCase();"json"!==l&&"translation"!==l&&"array"!==l&&"translation"!==l&&"o2m"!==l||(a[n]=e[n])}})),Object.keys(a).length>0){var l=Object(s["a"])({},t.relatedPrimaryKeyField,r[t.relatedPrimaryKeyField]);return i&&l[t.relatedPrimaryKeyField].hasOwnProperty(i)&&delete l[i],Object(m["merge"])({},l,a)}return null}return i&&e.hasOwnProperty(i)&&delete e[i],"string"===typeof e[t.relatedPrimaryKeyField]&&e[t.relatedPrimaryKeyField].startsWith("$temp_")&&delete e[t.relatedPrimaryKeyField],e})).filter((function(e){return e})),r=this.initialValue.map((function(e){return e[t.relatedPrimaryKeyField]})),l=e.map((function(e){return e[t.relatedPrimaryKeyField]})),o=Object(m["difference"])(r,l),c=o.map((function(e){var n,r;return"relation"===t.options.delete_mode?(r={},Object(s["a"])(r,t.relatedPrimaryKeyField,e),Object(s["a"])(r,i,null),r):(n={},Object(s["a"])(n,t.relatedPrimaryKeyField,e),Object(s["a"])(n,"$delete",!0),n)}));this.$emit("input",[].concat(Object(a["a"])(n),Object(a["a"])(c)))}}},b=h,v=(i("b588"),i("2877")),g=Object(v["a"])(b,n,r,!1,null,"1dce2788",null);t["default"]=g.exports},"83c3":function(e,t,i){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},b588:function(e,t,i){"use strict";var n=i("83c3"),r=i.n(n);r.a}}]);
//# sourceMappingURL=chunk-36deea14.757a5191.js.map