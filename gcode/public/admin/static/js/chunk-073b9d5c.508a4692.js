(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073b9d5c"],{"0159":function(e,t,n){},"11d5":function(e,t,n){"use strict";var l=n("0159"),i=n.n(l);i.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},f835:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"select",attrs:{id:e.name,disabled:e.readonly,size:e.options.size,multiple:""},on:{change:function(t){return e.updateValue(t.target.options)}}},[e.options.placeholder?n("option",{attrs:{value:"",disabled:e.required}},[e._v(" "+e._s(e.options.placeholder)+" ")]):e._e(),e._l(e.choices,(function(t,l){return n("option",{key:l,domProps:{value:l,selected:e.value&&e.value.includes(l)}},[e._v(" "+e._s(t)+" ")])}))],2)},i=[],u=(n("4de4"),n("a630"),n("a15b"),n("d81d"),n("ac1f"),n("3ca3"),n("1276"),n("8db2")),a=n.n(u),o={mixins:[a.a],computed:{choices:function(){var e=this.options.choices;return e?("string"===typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}}},methods:{updateValue:function(e){var t=Array.from(e).filter((function(e){return e.selected&&Boolean(e.value)})).map((function(e){return e.value})).join();t&&this.options.wrapWithDelimiter&&(t=",".concat(t,",")),t=t.split(","),this.$emit("input",t)}}},r=o,s=(n("11d5"),n("2877")),c=Object(s["a"])(r,l,i,!1,null,"d8f2c9d2",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-073b9d5c.508a4692.js.map