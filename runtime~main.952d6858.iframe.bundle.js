(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({265:"foundations-designTokens-typography-mdx",536:"overview-changelog-mdx",614:"components-Popover-Popover-stories-mdx",693:"components-Textarea-Textarea-stories-mdx",731:"components-Menu-Menu-stories-mdx",818:"components-Skeleton-Skeleton-stories-mdx",911:"components-Input-Input-stories-mdx",989:"foundations-designTokens-color-colors-mdx",995:"components-Radio-Radio-stories-mdx",1054:"components-Card-Card-stories-mdx",1237:"components-Portal-Portal-stories-mdx",1583:"overview-testing-mdx",1889:"foundations-themes-overview-stories-mdx",1893:"components-TopBanner-TopBanner-stories-mdx",2239:"components-Editable-Editable-stories-mdx",2548:"components-InputErrorMessage-InputErrorMessage-stories-mdx",2611:"components-Button-Button-stories-mdx",2667:"components-Select-Select-stories-mdx",3507:"components-Spacer-Spacer-stories-mdx",3612:"components-Label-Label-stories-mdx",4517:"components-ViewButtonGroup-ViewButtonGroup-stories-mdx",4811:"components-DateRangePicker-DateRangePicker-stories-mdx",4982:"components-Code-Code-stories-mdx",5071:"components-DatePicker-DatePicker-stories-mdx",5606:"foundations-designTokens-space-mdx",5876:"components-ThemeProvider-ThemeProvider-stories-mdx",6025:"components-Checkbox-Checkbox-stories-mdx",6298:"components-Pagination-Pagination-stories-mdx",6513:"components-Table-Table-stories-mdx",6666:"components-Hint-Hint-stories-mdx",6675:"components-Flex-Flex-stories-mdx",7131:"foundations-designTokens-transitionTime-mdx",7497:"components-Stats-Stats-stories-mdx",7566:"components-IconButton-IconButton-stories-mdx",7807:"foundations-icons-icons-stories",7828:"components-Loading-Loading-stories-mdx",7931:"foundations-designTokens-radius-mdx",8082:"components-Tag-Tag-stories-mdx",8143:"components-SearchInput-SearchInput-stories-mdx",8180:"components-Modal-Modal-stories-mdx",8218:"foundations-designTokens-zIndices-mdx",8276:"foundations-icons-icons-mdx",8576:"components-Toast-Toast-stories-mdx",8835:"overview-advanced-usage-mdx",8836:"components-Avatar-Avatar-stories-mdx",9021:"components-Tabs-Tabs-stories-mdx",9062:"components-Toggle-Toggle-stories-mdx",9093:"components-Alert-Alert-stories-mdx",9306:"components-ProgressBar-ProgressBar-stories-mdx",9394:"components-Tooltip-Tooltip-stories-mdx",9590:"overview-intro-mdx",9691:"components-Link-Link-stories-mdx",9931:"components-StepWizard-StepWizard-stories-mdx"}[chunkId]||chunkId)+"."+{265:"601f3052",536:"98d8d97f",614:"b002ee4e",653:"e5c552c4",693:"f483e061",731:"27ef2d87",818:"bc2cfbca",911:"1e912e37",935:"58c9a71d",989:"6ea50034",995:"96377f7f",1054:"a4a51106",1214:"bf75ff2d",1237:"381ac2eb",1479:"6094587d",1583:"58d6ecef",1889:"53f7c509",1893:"224ae220",2239:"ad4eb94d",2333:"e166d35e",2548:"fae5e015",2611:"2d44f8a5",2667:"8f749ddc",3507:"d6dae567",3612:"310c8f21",4056:"c7048d09",4446:"7e0a1a55",4463:"db6c903b",4517:"7bf43bcc",4811:"8e52b7e9",4982:"21faeb2e",4993:"e5a8ebe8",5071:"5df7edd8",5606:"8bea1a6e",5661:"6c08f54b",5876:"372cf563",6025:"e3342a73",6298:"1b85128c",6513:"2f62e790",6666:"255bc331",6675:"3ef6cdf9",7058:"f227a98d",7093:"631a257e",7125:"56b0ca0a",7131:"7cf42d17",7432:"d80a3670",7497:"b771ae75",7566:"cfcc38da",7807:"8ddad057",7828:"1442c7a4",7931:"9bb4e384",8082:"d34ad585",8143:"2ffeefc8",8180:"c9bf5218",8218:"05d48631",8276:"b0c6d960",8576:"85a27f12",8835:"5e523e0f",8836:"e7d61b61",8923:"382f317c",9021:"f5194dea",9062:"14f42f51",9093:"5e124080",9203:"b7604808",9306:"631b1d3d",9394:"31fcd035",9433:"5815c0b3",9590:"55f81348",9691:"122ee20a",9872:"a94c4c3c",9931:"b2d31605"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@lokalise/louis:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@lokalise/louis:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();