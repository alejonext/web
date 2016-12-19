(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("akoenig.deckgrid",[]),angular.module("akoenig.deckgrid").directive("deckgrid",["DeckgridDescriptor",function(e){"use strict";return e.create()}]),angular.module("akoenig.deckgrid").factory("DeckgridDescriptor",["Deckgrid","$templateCache",function(e,t){"use strict";function r(){this.restrict="AE",this.template='<div data-ng-repeat="column in columns" class="{{layout.classList}}"><div data-ng-repeat="card in column" data-ng-include="cardTemplate"></div></div>',this.scope={model:"=source"},this.$$deckgrid=null,this.transclude=!0,this.link=this.$$link.bind(this),this.$$templateKeyIndex=0}return r.prototype.$$destroy=function(){this.$$deckgrid.destroy()},r.prototype.$$link=function(r,n,i,o,a){var c="deckgrid/innerHtmlTemplate"+ ++this.$$templateKeyIndex+".html";r.$on("$destroy",this.$$destroy.bind(this)),angular.isUndefined(i.cardtemplate)?(angular.isUndefined(i.cardtemplatestring)?a(r,function(e){var r,n=[],i=0,o=e.length;for(i;i<o;i+=1)r=e[i].outerHTML,angular.isDefined(r)&&n.push(r);t.put(c,n.join())}):t.put(c,n.attr("cardtemplatestring")),r.cardTemplate=c):r.cardTemplate=i.cardtemplate,r.mother=r.$parent,this.$$deckgrid=e.create(r,n[0])},{create:function(){return new r}}}]),angular.module("akoenig.deckgrid").factory("Deckgrid",["$window","$log",function(e,t){"use strict";function r(t,r){var n,i,o=this;this.$$elem=r,this.$$watchers=[],this.$$scope=t,this.$$scope.columns=[],this.$$scope.layout=this.$$getLayout(),this.$$createColumns(),n=this.$$scope.$watchCollection("model",this.$$onModelChange.bind(this)),this.$$watchers.push(n),angular.forEach(o.$$getMediaQueries(),function(e){function t(){e.removeListener(r)}var r=o.$$onMediaQueryChange.bind(o);e.addListener(r),o.$$watchers.push(t)}),i=e.matchMedia("(orientation: portrait)"),i.addListener(o.$$onMediaQueryChange.bind(o))}return r.prototype.$$getMediaQueries=function(){function t(e){try{return e.sheet.cssRules||[]}catch(e){return[]}}function r(e){var t=/\[(\w*-)?deckgrid\]::?before/g,r=0,n="";if(!e.media||angular.isUndefined(e.cssRules))return!1;for(r=e.cssRules.length-1;r>=0;r-=1)if(n=e.cssRules[r].selectorText,angular.isDefined(n)&&n.match(t))return!0;return!1}var n=[],i=[];return n=Array.prototype.concat.call(Array.prototype.slice.call(document.querySelectorAll("style[type='text/css']")),Array.prototype.slice.call(document.querySelectorAll("link[rel='stylesheet']"))),angular.forEach(n,function(n){var o=t(n);angular.forEach(o,function(t){r(t)&&i.push(e.matchMedia(t.media.mediaText))})}),i},r.prototype.$$createColumns=function(){var e=this;return this.$$scope.layout?(this.$$scope.columns=[],void angular.forEach(this.$$scope.model,function(t,r){var n=r%e.$$scope.layout.columns|0;e.$$scope.columns[n]||(e.$$scope.columns[n]=[]),t.$index=r,e.$$scope.columns[n].push(t)})):t.error("angular-deckgrid: No CSS configuration found (see https://github.com/akoenig/angular-deckgrid#the-grid-configuration)")},r.prototype.$$getLayout=function(){var t,r=e.getComputedStyle(this.$$elem,":before").content;return r&&(r=r.replace(/'/g,""),r=r.replace(/"/g,""),r=r.split(" "),2===r.length&&(t={},t.columns=0|r[0],t.classList=r[1].replace(/\./g," ").trim())),t},r.prototype.$$onMediaQueryChange=function(){var e=this,t=this.$$getLayout();t.columns!==this.$$scope.layout.columns&&(e.$$scope.layout=t,e.$$scope.$apply(function(){e.$$createColumns()}))},r.prototype.$$onModelChange=function(e,t){var r=this;e=e||[],t=t||[],angular.equals(t,e)||r.$$createColumns()},r.prototype.destroy=function(){var e=this.$$watchers.length-1;for(e;e>=0;e-=1)this.$$watchers[e]()},{create:function(e,t){return new r(e,t)}}}]);
},{}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.name=void 0;var _product=require(5),_product2=_interopRequireDefault(_product),name=exports.name="app",app=function e(){_classCallCheck(this,e),this.products=_product2.default};exports.default=app;
},{"5":5}],3:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r}var _angular=require("angular"),angular=_interopRequireWildcard(_angular),_app=require(2),app=_interopRequireWildcard(_app),_item=require(4),item=_interopRequireWildcard(_item),_network=require(6),network=_interopRequireWildcard(_network);require(1),angular.module("web",["akoenig.deckgrid",require("angular-sanitize")]).controller(app.name,app.default).controller(item.name,item.default).directive(network.name,network.default);
},{"1":1,"2":2,"4":4,"6":6,"angular":"angular","angular-sanitize":"angular-sanitize"}],4:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),name=exports.name="item",app=function(){function e(){_classCallCheck(this,e),this.links=[]}return _createClass(e,[{key:"css",value:function e(n){var e={};return n&&(e.backgroundImage="url("+n+")"),e}},{key:"connect",value:function(e){e&&console.log(e),this.links=[];for(var n in e)this.links.push({name:n,url:e[n]});return this.links}}]),e}();exports.default=app;

},{}],5:[function(require,module,exports){
module.exports=[{
	"name" : "AlejoNext",
	"description" : "Desarrolador y Artista",
	"principal" : "Website",
	"links" : {
		"twitter" : "http://twitter.com/alejonext",
		"linkedin" : "https://co.linkedin.com/in/alejonext",
		"github" : "https://github.com/alejonext"
	}
},{
	"name" : "CacheWatch",
	"description" : "Sistema para la captura de HTML generado",
	"principal" : "Website",
	"links" : {
		"Website" : "http://cache.watch/",
		"github" : "https://github.com/cachewatch"
	}
},{
	"name" : "Sopa de letras",
	"description" : "App mobil de sopa de letras",
	"principal" : "android",
	"links" : {
		"android" : "https://play.google.com/store/apps/details?id=co.planext.sopitaDeLetras"
	}
},{
	"name" : "Galeph",
	"description" : "Web especializada en venta de derechos de autor",
	"principal" : "github",
	"links" : {
		"github" : "https://github.com/galeph"
	}
},{
	"name" : "Inlive Galeph",
	"description" : "Web especializada en venta de derechos de autor",
	"principal" : "Website",
	"links" : {
		"Website" : "http://galeph.github.io/landing",
		"github" : "https://github.com/galeph/landing",
		
	}
},{
	"name" : "Iluminame",
	"description" : "App para iluminar",
	"principal" : "android",
	"links" : {
		"android" : "https://play.google.com/store/apps/details?id=co.planext.iluminame"
	}
},{
	"name" : "Llamame cuando",
	"description" : "Simulador de llamdas",
	"principal" : "android",
	"links" : {
		"android" : "https://play.google.com/store/apps/details?id=co.planext.LlamameCuando"
	}
},{
	"name" : "Noche de Galerias",
	"description" : "¿Donde y Cuando habran exposiones?",
	"principal" : "android",
	"links" : {
		"android" : "https://play.google.com/store/apps/details?id=co.planext.nocheDeGalerias",
		"github" : "https://github.com/alejonext/nochedegalerias"
	}
},{
	"name" : "npad",
	"description" : "Sistema de realtime para hacer textos",
	"principal" : "github",
	"links" : {
		"code" : "https://www.npmjs.com/package/netpad",
		"github" : "https://github.com/alejonext/npad"
	}
},{
	"name" : "ink.angular",
	"description" : "Plugin para Ink.Sapo para angular",
	"principal" : "github",
	"links" : {
		"code" : "https://www.npmjs.com/package/ink.angular",
		"github" : "https://github.com/alejonext/ink.angular"
	}
},{
	"name" : "coinbase-service",
	"description" : "Plugin en NodeJs para CoinBase",
	"principal" : "github",
	"links" : {
		"code" : "https://www.npmjs.com/package/coinbase-service",
		"github" : "https://github.com/alejonext/coinbase-service"
	}
},{
	"name" : "JadeRuble",
	"description" : "Plugin para Eclipse (Aptana) para Jade",
	"principal" : "github",
	"links" : {
		"github" : "https://github.com/alejonext/JadeRuble"
	}
},{
	"name" : "mongoose-watch",
	"description" : "Plugin de Mongoose para observar documentos",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
},{
	"name" : "humanquery",
	"description" : "Metodo de busqueda para Mongoose",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
},{
	"name" : "nativescript-i18n",
	"description" : "Metodo de traduccion para NativeScript",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
},{
	"name" : "BNext",
	"description" : "Libreria basica hecha en Less",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
},{
	"name" : "gateway",
	"description" : "Libreria para pagos en liena multiplataforma",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
},{
	"name" : "angular-doorbell",
	"description" : "Metodo para el uso de DoorBell",
	"principal" : "github",
	"links" : {
		"code" : "http://cache.watch/",
		"github" : "http://cache.watch/"
	}
}]
},{}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){return{restrict:"A",template:'<a class="{{item}}" href="{{url}}"><i ng-if="icon" class="fa fa-{{icon}} fa-lg"></i><span ng-if="!icon">{{network}}</span></a>',scope:{network:"=",url:"=",item:"="},link:function(e){e.icon=net[e.network]}}};var net={facebook:"facebook-square",twitter:"twitter-square",google:"google-plus-square",tumblr:"google-plus-square",reddit:"reddit-square",linkedin:"linkedin-square",pinterest:"pinterest-square",email:"envelope-o",github:"github",android:"android",apple:"apple",code:"code"},name=exports.name="network";

},{}]},{},[3]);
