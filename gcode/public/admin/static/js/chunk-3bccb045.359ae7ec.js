(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bccb045"],{"04d8":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-contextual-menu",{attrs:{trigger:"hover",text:e.itemCount,options:e.menuOptions,icon:null,placement:"right-end"}})},u=[],i=n("8db2"),r=n.n(i),a=n("2ef0"),o={name:"DisplayRepeater",mixins:[r.a],computed:{itemCount:function(){return this.$tc("item_count",(this.value||[]).length,{count:(this.value||[]).length})},menuOptions:function(){var e=this,t=[];return Object(a["forEach"])(this.value,(function(n){t.push({text:e.$helpers.micromustache.render(e.options.template,n)})})),t.length?t:null}}},p=o,c=n("2877"),d=Object(c["a"])(p,l,u,!1,null,"aa99e6c8",null);t["default"]=d.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}}}]);
//# sourceMappingURL=chunk-3bccb045.359ae7ec.js.map