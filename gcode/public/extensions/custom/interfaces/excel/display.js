parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../node_modules/@directus/extension-toolkit/mixins/interface.js":[function(require,module,exports) {
module.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"display.vue":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@directus/extension-toolkit/mixins/interface"));function t(e){return e&&e.__esModule?e:{default:e}}var r={mixins:[e.default],computed:{url:function(){return this.$helpers.micromustache.render(this.options.url_template,this.values)}}};exports.default=r;
(function(){var t,e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,((t=function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"no-wrap",attrs:{href:this.url,target:"_blank"}},[this._v(" "+this._s(this.$t("interfaces.excel.excel_item"))+"\n")])})._withStripped=!0,{render:t,staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0}));})();
},{"@directus/extension-toolkit/mixins/interface":"../node_modules/@directus/extension-toolkit/mixins/interface.js"}]},{},["display.vue"], "__DirectusExtension__")
//# sourceMappingURL=display.js.map