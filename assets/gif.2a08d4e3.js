var Oe=Object.defineProperty,ze=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var ue=(r,t,e)=>t in r?Oe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,W=(r,t)=>{for(var e in t||(t={}))_e.call(t,e)&&ue(r,e,t[e]);if(te)for(var e of te(t))Fe.call(t,e)&&ue(r,e,t[e]);return r},Ee=(r,t)=>ze(r,Ue(t));var ke=(r,t)=>{var e={};for(var a in r)_e.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&te)for(var a of te(r))t.indexOf(a)<0&&Fe.call(r,a)&&(e[a]=r[a]);return e};var R=(r,t,e)=>(ue(r,typeof t!="symbol"?t+"":t,e),e);import{g as Me,_ as H,d as X,r as j,o as N,h as q,a as g,i as C,u as z,j as ae,v as ne,p as ge,e as he,F as De,k as Te,t as Pe,n as Ge,l as Re,w as U,c as Ne,m as Ve,q as Ye,b as qe,s as We,f as He,M as Xe}from"./BaseLayout.c39d5479.js";import{c as Ze,F as Ke,S as Je,R as Qe,L as Se,D as et,I as $e,d as tt,T as re,G as rt,a as at}from"./size.3fd26d6e.js";var nt={exports:{}};(function(r){var t=function(e){var a=Object.prototype,c=a.hasOwnProperty,s,l=typeof Symbol=="function"?Symbol:{},u=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",v=l.toStringTag||"@@toStringTag";function y(o,n,i){return Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}),o[n]}try{y({},"")}catch{y=function(n,i,m){return n[i]=m}}function w(o,n,i,m){var p=n&&n.prototype instanceof F?n:F,$=Object.create(p.prototype),B=new se(m||[]);return $._invoke=ee(o,i,B),$}e.wrap=w;function _(o,n,i){try{return{type:"normal",arg:o.call(n,i)}}catch(m){return{type:"throw",arg:m}}}var P="suspendedStart",M="suspendedYield",L="executing",b="completed",f={};function F(){}function E(){}function h(){}var D={};y(D,u,function(){return this});var k=Object.getPrototypeOf,S=k&&k(k(le([])));S&&S!==a&&c.call(S,u)&&(D=S);var x=h.prototype=F.prototype=Object.create(D);E.prototype=h,y(x,"constructor",h),y(h,"constructor",E),E.displayName=y(h,v,"GeneratorFunction");function T(o){["next","throw","return"].forEach(function(n){y(o,n,function(i){return this._invoke(n,i)})})}e.isGeneratorFunction=function(o){var n=typeof o=="function"&&o.constructor;return n?n===E||(n.displayName||n.name)==="GeneratorFunction":!1},e.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,h):(o.__proto__=h,y(o,v,"GeneratorFunction")),o.prototype=Object.create(x),o},e.awrap=function(o){return{__await:o}};function G(o,n){function i($,B,I,O){var A=_(o[$],o,B);if(A.type==="throw")O(A.arg);else{var ce=A.arg,Z=ce.value;return Z&&typeof Z=="object"&&c.call(Z,"__await")?n.resolve(Z.__await).then(function(V){i("next",V,I,O)},function(V){i("throw",V,I,O)}):n.resolve(Z).then(function(V){ce.value=V,I(ce)},function(V){return i("throw",V,I,O)})}}var m;function p($,B){function I(){return new n(function(O,A){i($,B,O,A)})}return m=m?m.then(I,I):I()}this._invoke=p}T(G.prototype),y(G.prototype,d,function(){return this}),e.AsyncIterator=G,e.async=function(o,n,i,m,p){p===void 0&&(p=Promise);var $=new G(w(o,n,i,m),p);return e.isGeneratorFunction(n)?$:$.next().then(function(B){return B.done?B.value:$.next()})};function ee(o,n,i){var m=P;return function($,B){if(m===L)throw new Error("Generator is already running");if(m===b){if($==="throw")throw B;return be()}for(i.method=$,i.arg=B;;){var I=i.delegate;if(I){var O=oe(I,i);if(O){if(O===f)continue;return O}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(m===P)throw m=b,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);m=L;var A=_(o,n,i);if(A.type==="normal"){if(m=i.done?b:M,A.arg===f)continue;return{value:A.arg,done:i.done}}else A.type==="throw"&&(m=b,i.method="throw",i.arg=A.arg)}}}function oe(o,n){var i=o.iterator[n.method];if(i===s){if(n.delegate=null,n.method==="throw"){if(o.iterator.return&&(n.method="return",n.arg=s,oe(o,n),n.method==="throw"))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var m=_(i,o.iterator,n.arg);if(m.type==="throw")return n.method="throw",n.arg=m.arg,n.delegate=null,f;var p=m.arg;if(!p)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f;if(p.done)n[o.resultName]=p.value,n.next=o.nextLoc,n.method!=="return"&&(n.method="next",n.arg=s);else return p;return n.delegate=null,f}T(x),y(x,v,"Generator"),y(x,u,function(){return this}),y(x,"toString",function(){return"[object Generator]"});function we(o){var n={tryLoc:o[0]};1 in o&&(n.catchLoc=o[1]),2 in o&&(n.finallyLoc=o[2],n.afterLoc=o[3]),this.tryEntries.push(n)}function ie(o){var n=o.completion||{};n.type="normal",delete n.arg,o.completion=n}function se(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(we,this),this.reset(!0)}e.keys=function(o){var n=[];for(var i in o)n.push(i);return n.reverse(),function m(){for(;n.length;){var p=n.pop();if(p in o)return m.value=p,m.done=!1,m}return m.done=!0,m}};function le(o){if(o){var n=o[u];if(n)return n.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var i=-1,m=function p(){for(;++i<o.length;)if(c.call(o,i))return p.value=o[i],p.done=!1,p;return p.value=s,p.done=!0,p};return m.next=m}}return{next:be}}e.values=le;function be(){return{value:s,done:!0}}return se.prototype={constructor:se,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(ie),!o)for(var n in this)n.charAt(0)==="t"&&c.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=s)},stop:function(){this.done=!0;var o=this.tryEntries[0],n=o.completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var n=this;function i(O,A){return $.type="throw",$.arg=o,n.next=O,A&&(n.method="next",n.arg=s),!!A}for(var m=this.tryEntries.length-1;m>=0;--m){var p=this.tryEntries[m],$=p.completion;if(p.tryLoc==="root")return i("end");if(p.tryLoc<=this.prev){var B=c.call(p,"catchLoc"),I=c.call(p,"finallyLoc");if(B&&I){if(this.prev<p.catchLoc)return i(p.catchLoc,!0);if(this.prev<p.finallyLoc)return i(p.finallyLoc)}else if(B){if(this.prev<p.catchLoc)return i(p.catchLoc,!0)}else if(I){if(this.prev<p.finallyLoc)return i(p.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(o,n){for(var i=this.tryEntries.length-1;i>=0;--i){var m=this.tryEntries[i];if(m.tryLoc<=this.prev&&c.call(m,"finallyLoc")&&this.prev<m.finallyLoc){var p=m;break}}p&&(o==="break"||o==="continue")&&p.tryLoc<=n&&n<=p.finallyLoc&&(p=null);var $=p?p.completion:{};return $.type=o,$.arg=n,p?(this.method="next",this.next=p.finallyLoc,f):this.complete($)},complete:function(o,n){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&n&&(this.next=n),f},finish:function(o){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===o)return this.complete(i.completion,i.afterLoc),ie(i),f}},catch:function(o){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===o){var m=i.completion;if(m.type==="throw"){var p=m.arg;ie(i)}return p}}throw new Error("illegal catch attempt")},delegateYield:function(o,n,i){return this.delegate={iterator:le(o),resultName:n,nextLoc:i},this.method==="next"&&(this.arg=s),f}},e}(r.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(nt);var ot={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let ve=!1,Be=()=>{};const it=r=>{ve=r},st=r=>{Be=r},lt=(r,t)=>{Be({type:r,message:t}),ve&&console.log(`[${r}] ${t}`)};var Ie={logging:ve,setLogging:it,setCustomLogger:st,log:lt};let K=0,fe=0;const Ce=r=>{const[t,e,a]=r.split(":");return parseFloat(t)*60*60+parseFloat(e)*60+parseFloat(a)};var ct=(r,t)=>{if(typeof r=="string")if(r.startsWith("  Duration")){const e=r.split(", ")[0].split(": ")[1],a=Ce(e);t({duration:a,ratio:fe}),(K===0||K>a)&&(K=a)}else if(r.startsWith("frame")||r.startsWith("size")){const e=r.split("time=")[1].split(" ")[0],a=Ce(e);fe=a/K,t({ratio:fe,time:a})}else r.startsWith("video:")&&(t({ratio:1}),K=0)},ut=(r,t)=>{const e=r._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((a,c)=>{const s=r._malloc(a.length+1);r.writeAsciiToMemory(a,s),r.setValue(e+Uint32Array.BYTES_PER_ELEMENT*c,s,"i32")}),[t.length,e]},ye={exports:{}};(function(r,t){(function(e,a){r.exports=a()})(Ze,function(){function e(){var a=arguments.length;if(a===0)throw new Error("resolveUrl requires at least one argument; got none.");var c=document.createElement("base");if(c.href=arguments[0],a===1)return c.href;var s=document.getElementsByTagName("head")[0];s.insertBefore(c,s.firstChild);for(var l=document.createElement("a"),u,d=1;d<a;d++)l.href=arguments[d],u=l.href,c.href=u;return s.removeChild(c),u}return e})})(ye);const ft="@ffmpeg/ffmpeg",dt="0.10.1",pt="FFmpeg WebAssembly version",mt="src/index.js",gt="src/index.d.ts",ht={example:"examples"},vt={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},yt={"./src/node/index.js":"./src/browser/index.js"},wt={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},bt=["ffmpeg","WebAssembly","video"],_t="Jerome Wu <jeromewus@gmail.com>",Ft="MIT",Et={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},kt={node:">=12.16.1"},$t="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",Ct={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},xt={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"};var Ae={name:ft,version:dt,description:pt,main:mt,types:gt,directories:ht,scripts:vt,browser:yt,repository:wt,keywords:bt,author:_t,license:Ft,bugs:Et,engines:kt,homepage:$t,dependencies:Ct,devDependencies:xt};const{devDependencies:Lt}=Ae;var Dt={corePath:`https://unpkg.com/@ffmpeg/core@${Lt["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const Pt=ye.exports,{log:J}=Ie,de=async(r,t)=>{J("info",`fetch ${r}`);const e=await(await fetch(r)).arrayBuffer();J("info",`${r} file size = ${e.byteLength} bytes`);const a=new Blob([e],{type:t}),c=URL.createObjectURL(a);return J("info",`${r} blob URL = ${c}`),c};var St=async({corePath:r})=>{if(typeof r!="string")throw Error("corePath should be a string!");const t=Pt(r),e=await de(t,"application/javascript"),a=await de(t.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),c=await de(t.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore=="undefined"?new Promise(s=>{const l=document.createElement("script"),u=()=>{l.removeEventListener("load",u),J("info","ffmpeg-core.js script loaded"),s({createFFmpegCore,corePath:e,wasmPath:a,workerPath:c})};l.src=e,l.type="text/javascript",l.addEventListener("load",u),document.getElementsByTagName("head")[0].appendChild(l)}):(J("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:e,wasmPath:a,workerPath:c}))};const Bt=ye.exports,It=r=>new Promise((t,e)=>{const a=new FileReader;a.onload=()=>{t(a.result)},a.onerror=({target:{error:{code:c}}})=>{e(Error(`File could not be read! Code=${c}`))},a.readAsArrayBuffer(r)});var At=async r=>{let t=r;return typeof r=="undefined"?new Uint8Array:(typeof r=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(r)?t=atob(r.split(",")[1]).split("").map(e=>e.charCodeAt(0)):t=await(await fetch(Bt(r))).arrayBuffer():(r instanceof File||r instanceof Blob)&&(t=await It(r)),new Uint8Array(t))};const jt=Dt,Ot=St,zt=At;var je={defaultOptions:jt,getCreateFFmpegCore:Ot,fetchFile:zt};const{defaultArgs:Ut,baseOptions:Mt}=ot,{setLogging:xe,setCustomLogger:Le,log:Y}=Ie,Tt=ct,Gt=ut,{defaultOptions:Rt,getCreateFFmpegCore:Nt}=je,{version:Vt}=Ae,pe=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var Yt=(r={})=>{const E=W(W(W({},Mt),Rt),r),{log:t,logger:e,progress:a}=E,c=ke(E,["log","logger","progress"]);let s=null,l=null,u=null,d=!1,v=a;const y=h=>{h==="FFMPEG_END"&&u!==null&&(u(),u=null,d=!1)},w=({type:h,message:D})=>{Y(h,D),Tt(D,v),y(D)},_=async()=>{if(Y("info","load ffmpeg-core"),s===null){Y("info","loading ffmpeg-core");const{createFFmpegCore:h,corePath:D,workerPath:k,wasmPath:S}=await Nt(c);s=await h({mainScriptUrlOrBlob:D,printErr:x=>w({type:"fferr",message:x}),print:x=>w({type:"ffout",message:x}),locateFile:(x,T)=>{if(typeof window!="undefined"){if(typeof S!="undefined"&&x.endsWith("ffmpeg-core.wasm"))return S;if(typeof k!="undefined"&&x.endsWith("ffmpeg-core.worker.js"))return k}return T+x}}),l=s.cwrap("proxy_main","number",["number","number"]),Y("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},P=()=>s!==null,M=(...h)=>{if(Y("info",`run ffmpeg command: ${h.join(" ")}`),s===null)throw pe;if(d)throw Error("ffmpeg.wasm can only run one command at a time");return d=!0,new Promise(D=>{const k=[...Ut,...h].filter(S=>S.length!==0);u=D,l(...Gt(s,k))})},L=(h,...D)=>{if(Y("info",`run FS.${h} ${D.map(k=>typeof k=="string"?k:`<${k.length} bytes binary file>`).join(" ")}`),s===null)throw pe;{let k=null;try{k=s.FS[h](...D)}catch{throw Error(h==="readdir"?`ffmpeg.FS('readdir', '${D[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:h==="readFile"?`ffmpeg.FS('readFile', '${D[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return k}},b=()=>{if(s===null)throw pe;d=!1,s.exit(1),s=null,l=null,u=null},f=h=>{v=h},F=h=>{Le(h)};return xe(t),Le(e),Y("info",`use ffmpeg.wasm v${Vt}`),{setProgress:f,setLogger:F,setLogging:xe,load:_,isLoaded:P,run:M,exit:b,FS:L}};const qt=Yt,{fetchFile:Wt}=je;var me={createFFmpeg:qt,fetchFile:Wt};class Ht{constructor(t){R(this,"options");this.options=t}async transforms(t){return Promise.all(t.map(async e=>{const a=await this._loadImg(e.file),c=this._paintFrame({img:a,frame:e});return await this._canvasToBlob(c)}))}async transformsCanvas(t){return Promise.all(t.map(async e=>{const a=await this._loadImg(e.file);return this._paintFrame({img:a,frame:e})}))}async _canvasToBlob(t){return new Promise(function(e,a){t.toBlob(function(c){c?e(c):a("\u6570\u636E\u5F02\u5E38")},"image/jpeg",1)})}_canvasToImage(t){var e=new Image;return e.src=t.toDataURL("image/png"),e}async _loadImg(t){return new Promise(function(e){const a=new Image;a.src=window.URL.createObjectURL(t),a.onload=function(){e(a)}})}_paintFrame(t){const{width:e,height:a,rule:c,background:s}=this.options,{img:l,frame:u}=t,d=document.createElement("canvas");d.width=e,d.height=a;const v=d.getContext("2d");if(!l||!v)throw new Error("\u6570\u636E\u5F02\u5E38");v.fillStyle=s,v.fillRect(0,0,d.width,d.height);const{canvasData:y,imgData:w}=function(){const{width:k,height:S}=l,{width:x,height:T}=d,G=Math.max(x/k,T/S),ee=[Math.floor(x/G),Math.floor(T/G)];return{imgData:[Math.floor((k-ee[0])/2),Math.floor((S-ee[1])/2),Math.floor(x/G),Math.floor(T/G)],canvasData:[0,0,x,T]}}(),[_,P,M,L]=w,[b,f,F,E]=y;v.drawImage(l,_,P,M,L,b,f,F,E);const{rotateY:h}=u;if((h==180?-1:1)==-1){const k=v.getImageData(0,0,F,E),S=v.getImageData(0,0,F,E);v.putImageData(this.canvasDataHRevert(k,S),0,0)}return d}canvasDataHRevert(t,e){for(var a=0,c=t.height;a<c;a++)for(var s=0,l=t.width;s<l;s++)e.data[a*l*4+s*4+0]=t.data[a*l*4+(l-s)*4+0],e.data[a*l*4+s*4+1]=t.data[a*l*4+(l-s)*4+1],e.data[a*l*4+s*4+2]=t.data[a*l*4+(l-s)*4+2],e.data[a*l*4+s*4+3]=t.data[a*l*4+(l-s)*4+3];return e}}class Xt{constructor(){R(this,"file");R(this,"frames");R(this,"options");R(this,"music");R(this,"ffmpeg");R(this,"ratio");this.file={gif:null,mp4:null},this.frames=[],this.options={width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5},this.music={start:0},this.ffmpeg=me.createFFmpeg({log:!1}),this.ratio=0}setOpt(t){return this.options=Object.assign(this.options,t),this}setFrame(t){return this.frames=t,this}setMusic(t){return this.music=t,this}logProgress(t,e){if(t<0)return;const a=parseFloat((((e==="gif"?1:0)+t)/2).toFixed(4));a!=this.ratio&&(this.ratio=a,console.log(`\u751F\u6210\u8FDB\u5EA6\uFF1A${this.ratio*100}%`,this.ratio))}async toPreView(){if(this.file={gif:null,mp4:null},this.frames.length==0)return;const e=await new Ht(this.options).transforms(this.frames);return this.ffmpeg.isLoaded()||await this.ffmpeg.load(),await this._makeFile(e),!this.file.mp4||!this.file.gif?{}:{src:URL.createObjectURL(this.file.mp4),size_mp4:this.file.mp4.size,size_gif:this.file.gif.size}}async toFile(t){const e=`${t}-${Me()}.${t}`;let a=null;switch(t){case"gif":a=this.file.gif;break;case"mp4":a=this.file.mp4;break}!a||Ke.exports.saveAs(a,e)}_toTime(t){const e=t%60;return`00:${((t-e)/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}async _makeFile(t){const e=[];t.forEach(async(a,c)=>{this.ffmpeg.FS("writeFile",`${c}.jpg`,await me.fetchFile(a)),e.push(`${c}.jpg`)}),await this._makeMP4(),await this._makeGIF(),e.forEach(a=>this.ffmpeg.FS("unlink",a))}async _makeMP4(){const t="out.mp4",e="music.mp3",{delay:a,quality:c}=this.options,{file:s,start:l}=this.music,u=1e3/a,d=8+Math.round((1-c)*20),v=a/1e3*this.frames.length;if(this.ffmpeg.setProgress(({ratio:w})=>this.logProgress(w,"mp4")),s){this.ffmpeg.FS("writeFile",e,await me.fetchFile(s));const w=this._toTime(l);await this.ffmpeg.run("-r",`${u}`,"-f","image2","-i","%d.jpg","-i",e,"-ss",w,"-t",`${v}`,"-crf",`${d}`,t)}else await this.ffmpeg.run("-r",`${u}`,"-f","image2","-i","%d.jpg","-crf",`${d}`,t);const y=this.ffmpeg.FS("readFile",t).buffer;this.file.mp4=new Blob([y],{type:"video/mp4"})}async _makeGIF(){const t="out.mp4",e="out.gif",{repeat:a}=this.options,c=a==-1?1:0;this.ffmpeg.setProgress(({ratio:l})=>this.logProgress(l,"gif")),await this.ffmpeg.run("-i",t,"-loop",`${c}`,"-vf","split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",e);const s=this.ffmpeg.FS("readFile",e).buffer;this.file.gif=new Blob([s],{type:"image/gif"})}}const Q=r=>(ge("data-v-3f641b60"),r=r(),he(),r),Zt={class:"form"},Kt=Q(()=>g("span",null,"\u5BBD / \u9AD8\uFF1A",-1)),Jt=Q(()=>g("span",null,"\u8D28\u91CF\uFF1A",-1)),Qt=Q(()=>g("span",{for:"background"},"\u80CC\u666F\u8272\uFF1A",-1)),er=Q(()=>g("span",{for:"delay"},"\u505C\u7559\u65F6\u95F4\uFF1A",-1)),tr=Q(()=>g("span",{for:"repeat"},"\u91CD\u590D\u6B21\u6570\uFF1A",-1)),rr=X({__name:"gif-canvas",props:{value:null},emits:["update:value","change"],setup(r,{emit:t}){const e=r,a=j({width:e.value.width,height:e.value.height}),c=function(u){let d=e.value;u&&(d=Object.assign(d,u)),t("update:value",d),t("change")},s=function(u){c(u)},l=function(){c()};return(u,d)=>(N(),q("div",Zt,[g("div",null,[Kt,C(Je,{value:a.value,onChange:s},null,8,["value"])]),g("div",null,[Jt,g("div",null,[C(z(Qe),{ref:"scaleRange",modelValue:r.value.quality,"onUpdate:modelValue":d[0]||(d[0]=v=>r.value.quality=v),onChange:l},null,8,["modelValue"])])]),C(z(Se)),g("div",null,[Qt,g("div",null,[ae(g("input",{type:"color",name:"background","onUpdate:modelValue":d[1]||(d[1]=v=>r.value.background=v),onChange:c},null,544),[[ne,r.value.background]])])]),g("div",null,[er,g("div",null,[ae(g("input",{type:"number",name:"delay",min:"0",placeholder:"\u505C\u7559\u65F6\u95F4 \u6BEB\u79D2","onUpdate:modelValue":d[2]||(d[2]=v=>r.value.delay=v),onChange:c},null,544),[[ne,r.value.delay]])])]),g("div",null,[tr,g("div",null,[ae(g("input",{type:"number",name:"repeat",min:"-1",placeholder:"-1 never 0 ever or number","onUpdate:modelValue":d[3]||(d[3]=v=>r.value.repeat=v),onChange:c},null,544),[[ne,r.value.repeat]])])])]))}});var ar=H(rr,[["__scopeId","data-v-3f641b60"]]);const nr=r=>(ge("data-v-fdcec55e"),r=r(),he(),r),or={class:"form"},ir={class:"music-select"},sr=["onClick"],lr=nr(()=>g("span",null,"\u8D77\u59CB\u65F6\u95F4\uFF1A",-1)),cr=X({__name:"gif-music",props:{value:null},emits:["update:value","change"],setup(r,{emit:t}){const e=r,a=j([]),c=function(l){let u=e.value;l&&(u=Object.assign(u,l)),t("update:value",u),t("change")},s=function(l){l.selected||(a.value=a.value.map(u=>(u.selected=l.id==u.id,u)),c({file:l.file}))};return(l,u)=>(N(),q("div",or,[C(z(et),{value:a.value,"onUpdate:value":u[0]||(u[0]=d=>a.value=d),max_size:1024*50,file_type:["audio/mpeg"]},null,8,["value"]),g("div",ir,[g("ul",null,[(N(!0),q(De,null,Te(a.value,d=>(N(),q("li",{class:"line",onClick:v=>s(d)},[g("span",null,Pe(d.file.name),1),g("span",null,[g("i",{class:Ge(["css-icon",d.selected?"select":""])},null,2)])],8,sr))),256))])]),C(z(Se)),g("div",null,[lr,g("div",null,[ae(g("input",{type:"number",name:"start","onUpdate:modelValue":u[1]||(u[1]=d=>r.value.start=d),onChange:c},null,544),[[ne,r.value.start]])])])]))}});var ur=H(cr,[["__scopeId","data-v-fdcec55e"]]);const fr={class:"frame-editor-item"},dr={class:"img"},pr=["src"],mr={class:"tools icon-group"},gr=X({__name:"item",props:["element","index"],emits:["itemTools","clear"],setup(r,{emit:t}){const e=r,a=()=>{t("itemTools",e.index,"flipX")},c=()=>{t("clear",e.element.id)};return(s,l)=>(N(),q("div",fr,[g("div",dr,[g("img",{src:r.element.src,style:Re({transform:`rotateX(${r.element.rotateX}deg) rotateY(${r.element.rotateY}deg) rotateZ(${r.element.rotateZ}deg)`})},null,12,pr),g("span",null,"\u7B2C "+Pe(r.index+1)+" \u5E27",1)]),g("div",mr,[C(z($e),{type:"flip-x",onClick:a}),C(z($e),{type:"clear",onClick:c})])]))}});var hr=H(gr,[["__scopeId","data-v-75248e5c"]]);const vr=X({__name:"Editor",setup(r,{expose:t}){const e=j([]);let a=null;const c=function(){return e.value.map(f=>W({},f))},s=function(f){if(!f||f.length===0)throw new Error("\u62D6\u5165\u6587\u4EF6\u6570\u636E\u5F02\u5E38");l(f)},l=f=>{a=f},u=function(f){f.stopPropagation(),f.preventDefault()},d=f=>{if(u(f),!a)return;const F=e.value.map(h=>h.id),E=a.filter(h=>!F.includes(h.id));E.length!=0&&(e.value=[...e.value,...E.map(h=>Ee(W({},h),{rotateX:0,rotateY:0,rotateZ:0}))])},v=()=>{console.log("\u4FEE\u6539\u987A\u5E8F")},y=f=>{e.value=e.value.filter(F=>F.id!==f)},w=()=>{e.value=[]},_=(f,F)=>{switch(F){case"flipX":P(f);break;case"flipY":M(f);break;case"turnAnti":L(f);break;case"turn":b(f);break}},P=function(f){e.value[f].rotateY=e.value[f].rotateY==0?180:0},M=function(f){e.value[f].rotateX=e.value[f].rotateX==0?180:0},L=function(f){e.value[f].rotateZ-=90},b=function(f){e.value[f].rotateZ+=90};return t({getFrames:c,setDropCache:s,handleClear:w}),(f,F)=>(N(),q("div",{class:"frame-editor",onDrop:d,onDragover:u},[C(z(tt),{class:"frame-editor-box",modelValue:e.value,"onUpdate:modelValue":F[0]||(F[0]=E=>e.value=E),"item-key":"id",onChange:v},{item:U(({element:E,index:h})=>[C(hr,{element:E,index:h,onItemTools:_,onClear:y},null,8,["element","index"])]),_:1},8,["modelValue"])],32))}});var yr=H(vr,[["__scopeId","data-v-526d5b1e"]]);const wr=["src","width"],br={class:"btn-group center"},_r=X({__name:"PreViewDialog",props:{ratio:{type:Number,default:1}},emits:["footer-click"],setup(r,{expose:t,emit:e}){const a=j(""),c=window.screen.height*.6,s=j(!1),l=j(!1),u=function(w=!1){s.value=!0,l.value=w};t({display:function(w){a.value=w,u()},load:function(){u(!0)},open:u});const y=function(w){e("footer-click",w)};return(w,_)=>(N(),Ne(Ve,{show:s.value,"onUpdate:show":_[2]||(_[2]=P=>s.value=P),loading:l.value,"onUpdate:loading":_[3]||(_[3]=P=>l.value=P)},{content:U(()=>[g("video",{src:a.value,width:c*r.ratio,height:c,class:"preview",controls:"",autoplay:""},null,8,wr)]),footer:U(()=>[g("div",br,[g("button",{class:"button large C",onClick:_[0]||(_[0]=P=>y("gif"))},"\u4E0B\u8F7DGIF"),g("button",{class:"button large C",onClick:_[1]||(_[1]=P=>y("mp4"))},"\u4E0B\u8F7DMP4")])]),_:1},8,["show","loading"]))}});var Fr=H(_r,[["__scopeId","data-v-44d1a161"]]);const Er=r=>(ge("data-v-763a98dd"),r=r(),he(),r),kr=Er(()=>g("span",null,"Pic GIF",-1)),$r={class:"left"},Cr={class:"right"},xr=X({__name:"index",setup(r){const t=j([]),e=j("library"),a=j(""),c=j(),s=j(),l=j(),u=j({width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5}),d=j({start:0}),v=new Xt,y=Ye("_message"),w=()=>{We(()=>{a.value="",c.value.clearSelect(),l.value.handleClear(),y({type:"success",value:"\u6E05\u7406\u6210\u529F..."})})},_=async function(){var L=l.value.getFrames();if(!L||L.length==0){y({type:"warning",value:"\u8BF7\u4ECE\u56FE\u5E93\u4E2D\u9009\u62E9\u3002"});return}y({value:"\u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u8BF7\u7B49\u5F85..."}),s.value.load();const b=await v.setOpt(u.value).setMusic(d.value).setFrame(L).toPreView().catch(h=>console.log(h));if(!(b!=null&&b.src))return;const{src:f,size_mp4:F,size_gif:E}=b;console.log(`
    size_mp4: ${Math.round(F/1024)}KB
    size_gif: ${Math.round(E/1024)}KB
  `),s.value.display(f)},P=function(L){var b=l.value.getFrames();!b||b.length==0||v.toFile(L).catch(f=>console.log(f))},M=function(L){l.value.setDropCache([...L])};return(L,b)=>(N(),q(De,null,[C(qe,null,{header:U(()=>[kr]),main:U(()=>[g("div",$r,[C(z(re).Box,{selected:e.value,"onUpdate:selected":b[0]||(b[0]=f=>e.value=f)},{default:U(()=>[C(z(re).Panel,{key:"library",title:"\u56FE\u5E93"},{default:U(()=>[C(rt,{ref_key:"galleryLoader",ref:c,onDrop:M,multiDrop:!0},null,512)]),_:1}),C(z(re).Panel,{key:"music",title:"\u97F3\u4E50\u5E93"},{default:U(()=>[C(ur,{value:d.value},null,8,["value"])]),_:1}),C(z(re).Panel,{key:"setting",title:"\u8BBE\u7F6E"},{default:U(()=>[C(ar,{value:u.value},null,8,["value"])]),_:1})]),_:1},8,["selected"]),g("div",{class:"btn-group center"},[g("button",{class:"button large",onClick:_},"\u751F\u6210\u9884\u89C8")])]),g("div",Cr,[g("div",{class:"btn-group right"},[g("button",{class:"button A",onClick:w},"\u6E05\u7406\u5E27")]),C(yr,{ref_key:"frameEditor",ref:l},null,512)])]),footer:U(()=>[C(at,{logs:t.value},null,8,["logs"])]),_:1}),C(Fr,{ref_key:"previewDialog",ref:s,ratio:u.value.width/u.value.height,onFooterClick:P},null,8,["ratio"])],64))}});var Lr=H(xr,[["__scopeId","data-v-763a98dd"]]);He(Lr).use(Xe).mount("#app");
