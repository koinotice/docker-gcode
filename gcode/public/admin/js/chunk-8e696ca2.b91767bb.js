(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e696ca2"],{1645:function(e,t,l){"use strict";var a=l("b916"),n=l.n(a);n.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},b916:function(e,t,l){},e3f1:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",{class:{empty:!e.displayValue}},[e._v(" "+e._s(e.displayValue)+" "),e.displayValue?e._e():[e._v(" "+e._s(e.$t("not_translated_in_language",{language:e.systemLanguagePrinted}))+" ")]],2)},n=[],u=(l("ac1f"),l("1276"),l("ade3")),i=l("8db2"),s=l.n(i),r=l("2ef0"),p={mixins:[s.a],computed:{systemLanguage:function(){return this.$i18n.locale},systemLanguagePrinted:function(){return this.$i18n.availableLanguages[this.systemLanguage].split("(")[0]},systemLanguageValues:function(){var e=this.options.languageField,t=Object(r["find"])(this.value,Object(u["a"])({},e,this.systemLanguage)),l=Object(r["find"])(this.value,Object(u["a"])({},e,this.systemLanguage.split("-")[0]));return t||l},displayValue:function(){return this.value&&0!==this.value.length?this.options.template?this.systemLanguageValues?this.$helpers.micromustache.render(this.options.template,this.systemLanguageValues):null:this.$tc("item_count",(this.value||[]).length):null}}},d=p,o=(l("1645"),l("2877")),c=Object(o["a"])(d,a,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-8e696ca2.b91767bb.js.map