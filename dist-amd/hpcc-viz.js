/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.22 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/** @license
 * RequireJS plugin for async dependency load like JSONP and Google Maps
 * Author: Miller Medeiros
 * Version: 0.1.2 (2014/02/24)
 * Released under the MIT license
 */

/**
 * Basic parser for URL properties
 * @author Miller Medeiros
 * @version 0.1.0 (2011/12/06)
 * MIT license
 */

/** @license
 * RequireJS plugin for loading Google Ajax API modules thru `google.load`
 * Author: Miller Medeiros
 * Version: 0.2.0 (2011/12/06)
 * Released under the MIT license
 */

/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/** @license
 * RequireJS plugin for loading JSON files
 * - depends on Text plugin and it was HEAVILY "inspired" by it as well.
 * Author: Miller Medeiros
 * Version: 0.4.0 (2014/04/10)
 * Released under the MIT license
 */

var requirejs,require,define;(function(global){function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,t){if(e){var n;for(n=0;n<e.length;n+=1)if(e[n]&&t(e[n],n,e))break}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1;n-=1)if(e[n]&&t(e[n],n,e))break}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){if(n||!hasProp(e,i))r&&typeof t=="object"&&t&&!isArray(t)&&!isFunction(t)&&!(t instanceof RegExp)?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function m(e){var t,n;for(t=0;t<e.length;t++){n=e[t];if(n===".")e.splice(t,1),t-=1;else if(n===".."){if(t===0||t===1&&e[2]===".."||e[t-1]==="..")continue;t>0&&(e.splice(t-1,2),t-=2)}}}function g(e,t,n){var r,i,s,u,a,f,l,c,h,p,d,v,g=t&&t.split("/"),y=o.map,b=y&&y["*"];e&&(e=e.split("/"),l=e.length-1,o.nodeIdCompat&&jsSuffixRegExp.test(e[l])&&(e[l]=e[l].replace(jsSuffixRegExp,"")),e[0].charAt(0)==="."&&g&&(v=g.slice(0,g.length-1),e=v.concat(e)),m(e),e=e.join("/"));if(n&&y&&(g||b)){s=e.split("/");e:for(u=s.length;u>0;u-=1){f=s.slice(0,u).join("/");if(g)for(a=g.length;a>0;a-=1){i=getOwn(y,g.slice(0,a).join("/"));if(i){i=getOwn(i,f);if(i){c=i,h=u;break e}}}!p&&b&&getOwn(b,f)&&(p=getOwn(b,f),d=u)}!c&&p&&(c=p,h=d),c&&(s.splice(0,h,c),e=s.join("/"))}return r=getOwn(o.pkgs,e),r?r:e}function y(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName)return t.parentNode.removeChild(t),!0})}function b(e){var t=getOwn(o.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),r.require.undef(e),r.makeRequire(null,{skipMap:!0})([e]),!0}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e,t,n,i){var s,o,u,a,f=null,l=t?t.name:null,h=e,p=!0,m="";return e||(p=!1,e="_@r"+(d+=1)),a=w(e),f=a[0],e=a[1],f&&(f=g(f,l,i),o=getOwn(c,f)),e&&(f?o&&o.normalize?m=o.normalize(e,function(e){return g(e,l,i)}):m=e.indexOf("!")===-1?g(e,l,i):e:(m=g(e,l,i),a=w(m),f=a[0],m=a[1],n=!0,s=r.nameToUrl(m))),u=f&&!o&&!n?"_unnormalized"+(v+=1):"",{prefix:f,name:m,parentMap:t,unnormalized:!!u,url:s,originalName:h,isDefine:p,id:(f?f+"!"+m:m)+u}}function S(e){var t=e.id,n=getOwn(u,t);return n||(n=u[t]=new r.Module(e)),n}function x(e,t,n){var r=e.id,i=getOwn(u,r);hasProp(c,r)&&(!i||i.defineEmitComplete)?t==="defined"&&n(c[r]):(i=S(e),i.error&&t==="error"?n(i.error):i.on(t,n))}function T(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=getOwn(u,t);n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function N(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];typeof t=="string"&&(r.defQueueMap[t]=!0),l.push(e)}),globalDefQueue=[])}function C(e){delete u[e],delete a[e]}function k(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var s=r.id,o=getOwn(u,s);o&&!e.depMatched[i]&&!n[s]&&(getOwn(t,s)?(e.defineDep(i,c[s]),e.check()):k(o,t,n))}),n[r]=!0)}function L(){var e,n,i=o.waitSeconds*1e3,u=i&&r.startTime+i<(new Date).getTime(),f=[],l=[],c=!1,h=!0;if(t)return;t=!0,eachProp(a,function(e){var t=e.map,r=t.id;if(!e.enabled)return;t.isDefine||l.push(e);if(!e.error)if(!e.inited&&u)b(r)?(n=!0,c=!0):(f.push(r),y(r));else if(!e.inited&&e.fetched&&t.isDefine){c=!0;if(!t.prefix)return h=!1}});if(u&&f.length)return e=makeError("timeout","Load timeout for modules: "+f,null,f),e.contextName=r.contextName,T(e);h&&each(l,function(e){k(e,{},{})}),(!u||n)&&c&&(isBrowser||isWebWorker)&&!s&&(s=setTimeout(function(){s=0,L()},50)),t=!1}function A(e){hasProp(c,e[0])||S(E(e[0],null,!0)).init(e[1],e[2])}function O(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function M(e){var t=e.currentTarget||e.srcElement;return O(t,r.onScriptLoad,"load","onreadystatechange"),O(t,r.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function _(){var e;N();while(l.length){e=l.shift();if(e[0]===null)return T(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));A(e)}r.defQueueMap={}}var t,n,r,i,s,o={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},u={},a={},f={},l=[],c={},h={},p={},d=1,v=1;return i={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?c[e.map.id]=e.exports:e.exports=c[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(o.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},n=function(e){this.events=getOwn(f,e.id)||{},this.map=e,this.shim=getOwn(o.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},n.prototype={init:function(e,t,n,r){r=r||{};if(this.inited)return;this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check()},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(this.fetched)return;this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))},load:function(){var e=this.map.url;h[e]||(h[e]=!0,r.load(this.map.id,e))},check:function(){if(!this.enabled||this.enabling)return;var e,t,n=this.map.id,i=this.depExports,s=this.exports,o=this.factory;if(!this.inited)hasProp(r.defQueueMap,n)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(o)){try{s=r.execCb(n,o,i,s)}catch(u){e=u}this.map.isDefine&&s===undefined&&(t=this.module,t?s=t.exports:this.usingExports&&(s=this.exports));if(e){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",T(this.error=e);typeof console!="undefined"&&console.error?console.error(e):req.onError(e)}}else s=o;this.exports=s;if(this.map.isDefine&&!this.ignore){c[n]=s;if(req.onResourceLoad){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(r,this.map,a)}}C(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var e=this.map,t=e.id,n=E(e.prefix);this.depMaps.push(n),x(n,"defined",bind(this,function(n){var i,s,a,f=getOwn(p,this.map.id),l=this.map.name,c=this.map.parentMap?this.map.parentMap.name:null,h=r.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){n.normalize&&(l=n.normalize(l,function(e){return g(e,c,!0)})||""),s=E(e.prefix+"!"+l,this.map.parentMap),x(s,"defined",bind(this,function(e){this.map.normalizedMap=s,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),a=getOwn(u,s.id),a&&(this.depMaps.push(s),this.events.error&&a.on("error",bind(this,function(e){this.emit("error",e)})),a.enable());return}if(f){this.map.url=r.nameToUrl(f),this.load();return}i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(u,function(e){e.map.id.indexOf(t+"_unnormalized")===0&&C(e.map.id)}),T(e)}),i.fromText=bind(this,function(n,s){var u=e.name,a=E(u),f=useInteractive;s&&(n=s),f&&(useInteractive=!1),S(a),hasProp(o.config,t)&&(o.config[u]=o.config[t]);try{req.exec(n)}catch(l){return T(makeError("fromtexteval","fromText eval for "+t+" failed: "+l,l,[t]))}f&&(useInteractive=!0),this.depMaps.push(a),r.completeLoad(u),h([u],i)}),n.load(e.name,h,i,o)})),r.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){a[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,s,o;if(typeof e=="string"){e=E(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,o=getOwn(i,e.id);if(o){this.depExports[t]=o(this);return}this.depCount+=1,x(e,"defined",bind(this,function(e){if(this.undefed)return;this.defineDep(t,e),this.check()})),this.errback?x(e,"error",bind(this,this.errback)):this.events.error&&x(e,"error",bind(this,function(e){this.emit("error",e)}))}n=e.id,s=u[n],!hasProp(i,n)&&s&&!s.enabled&&r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(u,e.id);t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),e==="error"&&delete this.events[e]}},r={config:o,contextName:e,registry:u,defined:c,urlFetched:h,defQueue:l,defQueueMap:{},Module:n,makeModuleMap:E,nextTick:req.nextTick,onError:T,configure:function(e){e.baseUrl&&e.baseUrl.charAt(e.baseUrl.length-1)!=="/"&&(e.baseUrl+="/");var t=o.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(o[t]||(o[t]={}),mixin(o[t],e,!0,!0)):o[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(p[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,n){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=r.makeShimExports(e)),t[n]=e}),o.shim=t),e.packages&&each(e.packages,function(e){var t,n;e=typeof e=="string"?{name:e}:e,n=e.name,t=e.location,t&&(o.paths[n]=e.location),o.pkgs[n]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(u,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=E(t,null,!0))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function s(o,a,f){var l,h,p;return n.enableBuildCallback&&a&&isFunction(a)&&(a.__requireJsBuild=!0),typeof o=="string"?isFunction(a)?T(makeError("requireargs","Invalid require call"),f):t&&hasProp(i,o)?i[o](u[t.id]):req.get?req.get(r,o,t,s):(h=E(o,t,!1,!0),l=h.id,hasProp(c,l)?c[l]:T(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(_(),r.nextTick(function(){_(),p=S(E(null,t)),p.skipMap=n.skipMap,p.init(o,a,f,{enabled:!0}),L()}),s)}return n=n||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var n,i=e.lastIndexOf("."),s=e.split("/")[0],o=s==="."||s==="..";return i!==-1&&(!o||i>1)&&(n=e.substring(i,e.length),e=e.substring(0,i)),r.nameToUrl(g(e,t&&t.id,!0),n,!0)},defined:function(e){return hasProp(c,E(e,t,!1,!0).id)},specified:function(e){return e=E(e,t,!1,!0).id,hasProp(c,e)||hasProp(u,e)}}),t||(s.undef=function(e){N();var n=E(e,t,!0),i=getOwn(u,e);i.undefed=!0,y(e),delete c[e],delete h[n.url],delete f[e],eachReverse(l,function(t,n){t[0]===e&&l.splice(n,1)}),delete r.defQueueMap[e],i&&(i.events.defined&&(f[e]=i.events),C(e))}),s},enable:function(e){var t=getOwn(u,e.id);t&&S(e).enable()},completeLoad:function(e){var t,n,i,s=getOwn(o.shim,e)||{},a=s.exports;N();while(l.length){n=l.shift();if(n[0]===null){n[0]=e;if(t)break;t=!0}else n[0]===e&&(t=!0);A(n)}r.defQueueMap={},i=getOwn(u,e);if(!t&&!hasProp(c,e)&&i&&!i.inited){if(o.enforceDefine&&(!a||!getGlobal(a))){if(b(e))return;return T(makeError("nodefine","No define call for "+e,null,[e]))}A([e,s.deps||[],s.exportsFn])}L()},nameToUrl:function(e,t,n){var i,s,u,a,f,l,c,h=getOwn(o.pkgs,e);h&&(e=h),c=getOwn(p,e);if(c)return r.nameToUrl(c,t,n);if(req.jsExtRegExp.test(e))f=e+(t||"");else{i=o.paths,s=e.split("/");for(u=s.length;u>0;u-=1){a=s.slice(0,u).join("/"),l=getOwn(i,a);if(l){isArray(l)&&(l=l[0]),s.splice(0,u,l);break}}f=s.join("/"),f+=t||(/^data\:|\?/.test(f)||n?"":".js"),f=(f.charAt(0)==="/"||f.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+f}return o.urlArgs?f+((f.indexOf("?")===-1?"?":"&")+o.urlArgs):f},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=M(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=M(e);if(!b(t.id)){var n=[];return eachProp(u,function(e,r){r.indexOf("_@r")!==0&&each(e.depMaps,function(e){return e.id===t.id&&n.push(r),!0})}),T(makeError("scripterror",'Script error for "'+t.id+(n.length?'", needed by: '+n.join(", "):'"'),e,[t.id]))}}},r.require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(e){if(e.readyState==="interactive")return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.22",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,isBrowser=typeof window!="undefined"&&typeof navigator!="undefined"&&!!window.document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(e,t,n,r){var i,s,o=defContextName;return!isArray(e)&&typeof e!="string"&&(s=e,isArray(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),i=getOwn(contexts,o),i||(i=contexts[o]=req.s.newContext(o)),s&&i.configure(s),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick=typeof setTimeout!="undefined"?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,n){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,n){var r=e&&e.config||{},i;if(isBrowser)return i=req.createNode(r,t,n),r.onNodeCreated&&r.onNodeCreated(i,r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),i.attachEvent&&!(i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)):(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(n),e.completeLoad(t)}catch(s){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,s,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){head||(head=e.parentNode),dataMain=e.getAttribute("data-main");if(dataMain)return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,n){var r,i;typeof e!="string"&&(n=t,t=e,e=null),isArray(t)||(n=t,t=null),!t&&isFunction(n)&&(t=[],n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(n.length===1?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),i?(i.defQueue.push([e,t,n]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)})(this),define("requireLib",function(){}),define("css",[],function(){if(typeof window=="undefined")return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,n=!1,r=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?r=!1:t[4]&&(n=parseInt(t[4])<18);var i={};i.pluginBuilder="./css-builder";var s,o,u=function(){s=document.createElement("style"),e.appendChild(s),o=s.styleSheet||s.sheet},a=0,f=[],l,c=function(e){o.addImport(e),s.onload=function(){h()},a++,a==31&&(u(),a=0)},h=function(){l();var e=f.shift();if(!e){l=null;return}l=e[1],c(e[0])},p=function(e,t){(!o||!o.addImport)&&u();if(o&&o.addImport)l?f.push([e,t]):(c(e),l=t);else{s.textContent='@import "'+e+'";';var n=setInterval(function(){try{s.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},d=function(t,n){var i=document.createElement("link");i.type="text/css",i.rel="stylesheet";if(r)i.onload=function(){i.onload=function(){},setTimeout(n,7)};else var s=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==i.href)return clearInterval(s),n()}},10);i.href=t,e.appendChild(i)};return i.normalize=function(e,t){return e.substr(e.length-4,4)==".css"&&(e=e.substr(0,e.length-4)),t(e)},i.load=function(e,t,r,i){(n?p:d)(t.toUrl(e+".css"),r)},i}),define("normalize",[],function(){function s(e,i,s){if(e.match(r)||e.match(n))return e;e=t(e);var a=s.match(n),f=i.match(n);return f&&(!a||a[1]!=f[1]||a[2]!=f[2])?o(e,i):u(o(e,i),s)}function o(e,t){e.substr(0,2)=="./"&&(e=e.substr(2));if(e.match(r)||e.match(n))return e;var i=t.split("/"),s=e.split("/");i.pop();while(curPart=s.shift())curPart==".."?i.pop():i.push(curPart);return i.join("/")}function u(e,t){var n=t.split("/");n.pop(),t=n.join("/")+"/",i=0;while(t.substr(i,1)==e.substr(i,1))i++;while(t.substr(i,1)!="/")i--;t=t.substr(i+1),e=e.substr(i+1),n=t.split("/");var r=e.split("/");out="";while(n.shift())out+="../";while(curPart=r.shift())out+=curPart+"/";return out.substr(0,out.length-1)}var e=/([^:])\/+/g,t=function(t){return t.replace(e,"$1/")},n=/[^\:\/]*:\/\/([^\/])*/,r=/^(\/|data:)/,a=function(e,n,r){n=t(n),r=t(r);var i=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/ig,o,u,e;while(o=i.exec(e)){u=o[3]||o[2]||o[5]||o[6]||o[4];var a;a=s(u,n,r);var f=o[5]||o[6]?1:0;e=e.substr(0,i.lastIndex-u.length-f-1)+a+e.substr(i.lastIndex-f-1),i.lastIndex=i.lastIndex+(a.length-u.length)}return e};return a.convertURIBase=s,a.absoluteURI=o,a.relativeURI=u,a}),define("async",[],function(){function n(e){var t,n;t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=e,n=document.getElementsByTagName("script")[0],n.parentNode.insertBefore(t,n)}function r(t,n){var r=/!(.+)/,i=t.replace(r,""),s=r.test(t)?t.replace(/.+!/,""):e;return i+=i.indexOf("?")<0?"?":"&",i+s+"="+n}function i(){return t+=1,"__async_req_"+t+"__"}var e="callback",t=0;return{load:function(e,t,s,o){if(o&&o.isBuild)s(null);else{var u=i();window[u]=s,n(r(t.toUrl(e),u))}}}}),define("propertyParser",[],function(){function n(t){var n,i={};while(n=e.exec(t))i[n[1]]=r(n[2]||n[3]);return i}function r(e){return t.test(e)?e=e.replace(t,"$1").split(","):e==="null"?e=null:e==="false"?e=!1:e==="true"?e=!0:e===""||e==="''"||e==='""'?e="":isNaN(e)||(e=+e),e}var e=/([\w-]+)\s*:\s*(?:(\[[^\]]+\])|([^,]+)),?/g,t=/^\[([^\]]+)\]$/;return{parseProperties:n,typecastVal:r}}),define("goog",["async","propertyParser"],function(e,t){function r(e){var r=n.exec(e),i={moduleName:r[1],version:r[2]||"1"};return i.settings=t.parseProperties(r[3]),i}var n=/^([^,]+)(?:,([^,]+))?(?:,(.+))?/;return{load:function(e,t,n,i){if(i&&i.isBuild)n(null);else{var s=r(e),o=s.settings;o.callback=n,t(["async!"+(document.location.protocol==="https:"?"https":"http")+"://www.google.com/jsapi"],function(){google.load(s.moduleName,s.version,o)})}}}}),define("text",["module"],function(e){"use strict";var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};t={version:"2.0.12",strip:function(e){if(e){e=e.replace(u,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.indexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1,e.length)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText){r();return}d.isBuild=i&&i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;if(u.indexOf("empty:")===0){r();return}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}};if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"])n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");i.indexOf("﻿")===0&&(i=i.substring(1)),t(i)}catch(s){r&&r(s)}};else if(d.env==="xhr"||!d.env&&t.createXhr())t.get=function(e,n,r,i){var s=t.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)};else if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined")t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return t}),define("json",["text"],function(text){function cacheBust(e){return e=e.replace(CACHE_BUST_FLAG,""),e+=e.indexOf("?")<0?"?":"&",e+CACHE_BUST_QUERY_PARAM+"="+Math.round(2147483647*Math.random())}var CACHE_BUST_QUERY_PARAM="bust",CACHE_BUST_FLAG="!bust",jsonParse=typeof JSON!="undefined"&&typeof JSON.parse=="function"?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(e,t,n,r){r&&r.isBuild&&(r.inlineJSON===!1||e.indexOf(CACHE_BUST_QUERY_PARAM+"=")!==-1)||t.toUrl(e).indexOf("empty:")===0?n(null):text.get(t.toUrl(e),function(t){var i;if(r.isBuild)buildMap[e]=t,n(t);else{try{i=jsonParse(t)}catch(s){n.error(s)}n(i)}},n.error,{accept:"application/json"})},normalize:function(e,t){return e.indexOf(CACHE_BUST_FLAG)!==-1&&(e=cacheBust(e)),t(e)},write:function(e,t,n){if(t in buildMap){var r=buildMap[t];n('define("'+e+"!"+t+'", function(){ return '+r+";});\n")}}}}),function(e,t){typeof define=="function"&&define.amd?define("src/Loader",[],t):e.common_Widget=t()}(this,function(){function t(e){console.log("Loader Error:\n"+e.message)}function n(e){e=e||{};var t=e.protocol||window.location.protocol,n=e.hostname||window.location.hostname,r=e.port!==undefined?e.port:window.location.port,i=n+(r?":"+r:""),s=e.pathname||window.location.pathname,o=t+"//"+i+s;return o}function r(e,t){return n({protocol:window.location.protocol==="https:"?"https:":"http:",hostname:"viz.hpccsystems.com",port:"",pathname:"/"+e+"/dist-amd"+(t?"-src":"")})}function i(e,t,r){return e=e||"master",t=t||"hpcc-systems",r=r||"Visualization",n({hostname:"rawgit.com",port:"",pathname:"/"+t+"/"+r+"/"+e+"/src"})}function o(n,i){n.useSrc=n.useSrc||!1;var o=r(n.ver,n.useSrc),u=o+"/hpcc-bundles-def.js";if(s[u]){setTimeout(function(){i(s[u])},0);return}e([u],function(t){var r=e.config({context:n.ver,baseUrl:o,bundles:t,paths:{src:".","font-awesome":"./font-awesome/css/font-awesome.min"}});s[u]=r,r([o+"/hpcc-viz.js"],function(){i(r)})},t)}function a(n,r){var s=i(n.branch,n.org,n.repo),o=s+"/configRawGit.json";if(u[o]){setTimeout(function(){r(u[o])},0);return}e(["json!"+o],function(t){t.context=n.branch+"_"+n.org+"_"+n.repo,t.baseUrl=s,t.paths.src="../src";var i=e.config(t);u[o]=i,setTimeout(function(){r(i)},0)},t)}var e=e||window.require,s={},u={};return{cdn:function(e,t){o({ver:e},t)},cdnSrc:function(e,t){o({ver:e,useSrc:!0},t)},github:function(e,t,n,r){r=arguments[arguments.length-1];switch(arguments.length){case 1:e="master";case 2:t="hpcc-systems";case 3:n="Visualization"}a({branch:e,org:t,repo:n},r)},create:function(e,n){typeof e=="string"&&(e=JSON.parse(e));switch(e.__version){case"1":case"2":case"3":this.cdn("v1.10.0",function(r){r(["src/other/Persist"],function(t){t.create(e,n)},t)});break;default:this.cdn("v"+e.__version,function(r){r(["src/other/Persist"],function(t){t.create(e,n)},t)})}}}}),define("hpcc-viz",function(){});