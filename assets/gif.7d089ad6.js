var Ve=Object.defineProperty,Ye=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var fe=(t,a,e)=>a in t?Ve(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,X=(t,a)=>{for(var e in a||(a={}))xe.call(a,e)&&fe(t,e,a[e]);if(oe)for(var e of oe(a))Le.call(a,e)&&fe(t,e,a[e]);return t},Se=(t,a)=>Ye(t,qe(a));var De=(t,a)=>{var e={};for(var o in t)xe.call(t,o)&&a.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&oe)for(var o of oe(t))a.indexOf(o)<0&&Le.call(t,o)&&(e[o]=t[o]);return e};var V=(t,a,e)=>(fe(t,typeof a!="symbol"?a+"":a,e),e);import{g as Oe,d as Y,r as S,u as We,h as He,n as ye,i as Xe,o as B,j,k as F,l as I,m as Q,a as p,q as K,t as be,s as pe,v as we,x as Ze,_ as q,y as Ke,z as re,A as ie,p as _e,e as Fe,F as ze,B as Je,w as U,c as Qe,C as et,b as tt,f as at}from"./plugin-vue_export-helper.46a6feae.js";import{c as ot,F as nt,u as rt,S as it,R as st,L as je,D as lt,I as Pe,d as ct,T as ne,G as ut,a as dt,M as ft}from"./size.b84adfc1.js";var pt={exports:{}};(function(t){var a=function(e){var o=Object.prototype,c=o.hasOwnProperty,i,l=typeof Symbol=="function"?Symbol:{},u=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",v=l.toStringTag||"@@toStringTag";function h(r,n,s){return Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{h({},"")}catch{h=function(n,s,m){return n[s]=m}}function w(r,n,s,m){var g=n&&n.prototype instanceof _?n:_,C=Object.create(g.prototype),A=new ce(m||[]);return C._invoke=ae(r,s,A),C}e.wrap=w;function $(r,n,s){try{return{type:"normal",arg:r.call(n,s)}}catch(m){return{type:"throw",arg:m}}}var D="suspendedStart",G="suspendedYield",T="executing",f="completed",y={};function _(){}function k(){}function b(){}var x={};h(x,u,function(){return this});var E=Object.getPrototypeOf,P=E&&E(E(ue([])));P&&P!==o&&c.call(P,u)&&(x=P);var L=b.prototype=_.prototype=Object.create(x);k.prototype=b,h(L,"constructor",b),h(b,"constructor",k),k.displayName=h(b,v,"GeneratorFunction");function R(r){["next","throw","return"].forEach(function(n){h(r,n,function(s){return this._invoke(n,s)})})}e.isGeneratorFunction=function(r){var n=typeof r=="function"&&r.constructor;return n?n===k||(n.displayName||n.name)==="GeneratorFunction":!1},e.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,b):(r.__proto__=b,h(r,v,"GeneratorFunction")),r.prototype=Object.create(L),r},e.awrap=function(r){return{__await:r}};function N(r,n){function s(C,A,O,M){var z=$(r[C],r,A);if(z.type==="throw")M(z.arg);else{var de=z.arg,Z=de.value;return Z&&typeof Z=="object"&&c.call(Z,"__await")?n.resolve(Z.__await).then(function(W){s("next",W,O,M)},function(W){s("throw",W,O,M)}):n.resolve(Z).then(function(W){de.value=W,O(de)},function(W){return s("throw",W,O,M)})}}var m;function g(C,A){function O(){return new n(function(M,z){s(C,A,M,z)})}return m=m?m.then(O,O):O()}this._invoke=g}R(N.prototype),h(N.prototype,d,function(){return this}),e.AsyncIterator=N,e.async=function(r,n,s,m,g){g===void 0&&(g=Promise);var C=new N(w(r,n,s,m),g);return e.isGeneratorFunction(n)?C:C.next().then(function(A){return A.done?A.value:C.next()})};function ae(r,n,s){var m=D;return function(C,A){if(m===T)throw new Error("Generator is already running");if(m===f){if(C==="throw")throw A;return Ce()}for(s.method=C,s.arg=A;;){var O=s.delegate;if(O){var M=se(O,s);if(M){if(M===y)continue;return M}}if(s.method==="next")s.sent=s._sent=s.arg;else if(s.method==="throw"){if(m===D)throw m=f,s.arg;s.dispatchException(s.arg)}else s.method==="return"&&s.abrupt("return",s.arg);m=T;var z=$(r,n,s);if(z.type==="normal"){if(m=s.done?f:G,z.arg===y)continue;return{value:z.arg,done:s.done}}else z.type==="throw"&&(m=f,s.method="throw",s.arg=z.arg)}}}function se(r,n){var s=r.iterator[n.method];if(s===i){if(n.delegate=null,n.method==="throw"){if(r.iterator.return&&(n.method="return",n.arg=i,se(r,n),n.method==="throw"))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var m=$(s,r.iterator,n.arg);if(m.type==="throw")return n.method="throw",n.arg=m.arg,n.delegate=null,y;var g=m.arg;if(!g)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;if(g.done)n[r.resultName]=g.value,n.next=r.nextLoc,n.method!=="return"&&(n.method="next",n.arg=i);else return g;return n.delegate=null,y}R(L),h(L,v,"Generator"),h(L,u,function(){return this}),h(L,"toString",function(){return"[object Generator]"});function Ee(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function le(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function ce(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(Ee,this),this.reset(!0)}e.keys=function(r){var n=[];for(var s in r)n.push(s);return n.reverse(),function m(){for(;n.length;){var g=n.pop();if(g in r)return m.value=g,m.done=!1,m}return m.done=!0,m}};function ue(r){if(r){var n=r[u];if(n)return n.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var s=-1,m=function g(){for(;++s<r.length;)if(c.call(r,s))return g.value=r[s],g.done=!1,g;return g.value=i,g.done=!0,g};return m.next=m}}return{next:Ce}}e.values=ue;function Ce(){return{value:i,done:!0}}return ce.prototype={constructor:ce,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(le),!r)for(var n in this)n.charAt(0)==="t"&&c.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=i)},stop:function(){this.done=!0;var r=this.tryEntries[0],n=r.completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function s(M,z){return C.type="throw",C.arg=r,n.next=M,z&&(n.method="next",n.arg=i),!!z}for(var m=this.tryEntries.length-1;m>=0;--m){var g=this.tryEntries[m],C=g.completion;if(g.tryLoc==="root")return s("end");if(g.tryLoc<=this.prev){var A=c.call(g,"catchLoc"),O=c.call(g,"finallyLoc");if(A&&O){if(this.prev<g.catchLoc)return s(g.catchLoc,!0);if(this.prev<g.finallyLoc)return s(g.finallyLoc)}else if(A){if(this.prev<g.catchLoc)return s(g.catchLoc,!0)}else if(O){if(this.prev<g.finallyLoc)return s(g.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,n){for(var s=this.tryEntries.length-1;s>=0;--s){var m=this.tryEntries[s];if(m.tryLoc<=this.prev&&c.call(m,"finallyLoc")&&this.prev<m.finallyLoc){var g=m;break}}g&&(r==="break"||r==="continue")&&g.tryLoc<=n&&n<=g.finallyLoc&&(g=null);var C=g?g.completion:{};return C.type=r,C.arg=n,g?(this.method="next",this.next=g.finallyLoc,y):this.complete(C)},complete:function(r,n){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&n&&(this.next=n),y},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.finallyLoc===r)return this.complete(s.completion,s.afterLoc),le(s),y}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc===r){var m=s.completion;if(m.type==="throw"){var g=m.arg;le(s)}return g}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,s){return this.delegate={iterator:ue(r),resultName:n,nextLoc:s},this.method==="next"&&(this.arg=i),y}},e}(t.exports);try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}})(pt);var gt={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let ke=!1,Me=()=>{};const mt=t=>{ke=t},ht=t=>{Me=t},vt=(t,a)=>{Me({type:t,message:a}),ke&&console.log(`[${t}] ${a}`)};var Ue={logging:ke,setLogging:mt,setCustomLogger:ht,log:vt};let J=0,ge=0;const Be=t=>{const[a,e,o]=t.split(":");return parseFloat(a)*60*60+parseFloat(e)*60+parseFloat(o)};var yt=(t,a)=>{if(typeof t=="string")if(t.startsWith("  Duration")){const e=t.split(", ")[0].split(": ")[1],o=Be(e);a({duration:o,ratio:ge}),(J===0||J>o)&&(J=o)}else if(t.startsWith("frame")||t.startsWith("size")){const e=t.split("time=")[1].split(" ")[0],o=Be(e);ge=o/J,a({ratio:ge,time:o})}else t.startsWith("video:")&&(a({ratio:1}),J=0)},bt=(t,a)=>{const e=t._malloc(a.length*Uint32Array.BYTES_PER_ELEMENT);return a.forEach((o,c)=>{const i=t._malloc(o.length+1);t.writeAsciiToMemory(o,i),t.setValue(e+Uint32Array.BYTES_PER_ELEMENT*c,i,"i32")}),[a.length,e]},$e={exports:{}};(function(t,a){(function(e,o){t.exports=o()})(ot,function(){function e(){var o=arguments.length;if(o===0)throw new Error("resolveUrl requires at least one argument; got none.");var c=document.createElement("base");if(c.href=arguments[0],o===1)return c.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(c,i.firstChild);for(var l=document.createElement("a"),u,d=1;d<o;d++)l.href=arguments[d],u=l.href,c.href=u;return i.removeChild(c),u}return e})})($e);const wt="@ffmpeg/ffmpeg",_t="0.10.1",Ft="FFmpeg WebAssembly version",kt="src/index.js",$t="src/index.d.ts",Et={example:"examples"},Ct={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},xt={"./src/node/index.js":"./src/browser/index.js"},Lt={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},St=["ffmpeg","WebAssembly","video"],Dt="Jerome Wu <jeromewus@gmail.com>",Pt="MIT",Bt={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},It={node:">=12.16.1"},At="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",Ot={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},zt={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"};var Te={name:wt,version:_t,description:Ft,main:kt,types:$t,directories:Et,scripts:Ct,browser:xt,repository:Lt,keywords:St,author:Dt,license:Pt,bugs:Bt,engines:It,homepage:At,dependencies:Ot,devDependencies:zt};const{devDependencies:jt}=Te;var Mt={corePath:`https://unpkg.com/@ffmpeg/core@${jt["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const Ut=$e.exports,{log:ee}=Ue,me=async(t,a)=>{ee("info",`fetch ${t}`);const e=await(await fetch(t)).arrayBuffer();ee("info",`${t} file size = ${e.byteLength} bytes`);const o=new Blob([e],{type:a}),c=URL.createObjectURL(o);return ee("info",`${t} blob URL = ${c}`),c};var Tt=async({corePath:t})=>{if(typeof t!="string")throw Error("corePath should be a string!");const a=Ut(t),e=await me(a,"application/javascript"),o=await me(a.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),c=await me(a.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore=="undefined"?new Promise(i=>{const l=document.createElement("script"),u=()=>{l.removeEventListener("load",u),ee("info","ffmpeg-core.js script loaded"),i({createFFmpegCore,corePath:e,wasmPath:o,workerPath:c})};l.src=e,l.type="text/javascript",l.addEventListener("load",u),document.getElementsByTagName("head")[0].appendChild(l)}):(ee("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:e,wasmPath:o,workerPath:c}))};const Gt=$e.exports,Rt=t=>new Promise((a,e)=>{const o=new FileReader;o.onload=()=>{a(o.result)},o.onerror=({target:{error:{code:c}}})=>{e(Error(`File could not be read! Code=${c}`))},o.readAsArrayBuffer(t)});var Nt=async t=>{let a=t;return typeof t=="undefined"?new Uint8Array:(typeof t=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t)?a=atob(t.split(",")[1]).split("").map(e=>e.charCodeAt(0)):a=await(await fetch(Gt(t))).arrayBuffer():(t instanceof File||t instanceof Blob)&&(a=await Rt(t)),new Uint8Array(a))};const Vt=Mt,Yt=Tt,qt=Nt;var Ge={defaultOptions:Vt,getCreateFFmpegCore:Yt,fetchFile:qt};const{defaultArgs:Wt,baseOptions:Ht}=gt,{setLogging:Ie,setCustomLogger:Ae,log:H}=Ue,Xt=yt,Zt=bt,{defaultOptions:Kt,getCreateFFmpegCore:Jt}=Ge,{version:Qt}=Te,he=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var ea=(t={})=>{const k=X(X(X({},Ht),Kt),t),{log:a,logger:e,progress:o}=k,c=De(k,["log","logger","progress"]);let i=null,l=null,u=null,d=!1,v=o;const h=b=>{b==="FFMPEG_END"&&u!==null&&(u(),u=null,d=!1)},w=({type:b,message:x})=>{H(b,x),Xt(x,v),h(x)},$=async()=>{if(H("info","load ffmpeg-core"),i===null){H("info","loading ffmpeg-core");const{createFFmpegCore:b,corePath:x,workerPath:E,wasmPath:P}=await Jt(c);i=await b({mainScriptUrlOrBlob:x,printErr:L=>w({type:"fferr",message:L}),print:L=>w({type:"ffout",message:L}),locateFile:(L,R)=>{if(typeof window!="undefined"){if(typeof P!="undefined"&&L.endsWith("ffmpeg-core.wasm"))return P;if(typeof E!="undefined"&&L.endsWith("ffmpeg-core.worker.js"))return E}return R+L}}),l=i.cwrap("proxy_main","number",["number","number"]),H("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},D=()=>i!==null,G=(...b)=>{if(H("info",`run ffmpeg command: ${b.join(" ")}`),i===null)throw he;if(d)throw Error("ffmpeg.wasm can only run one command at a time");return d=!0,new Promise(x=>{const E=[...Wt,...b].filter(P=>P.length!==0);u=x,l(...Zt(i,E))})},T=(b,...x)=>{if(H("info",`run FS.${b} ${x.map(E=>typeof E=="string"?E:`<${E.length} bytes binary file>`).join(" ")}`),i===null)throw he;{let E=null;try{E=i.FS[b](...x)}catch{throw Error(b==="readdir"?`ffmpeg.FS('readdir', '${x[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:b==="readFile"?`ffmpeg.FS('readFile', '${x[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return E}},f=()=>{if(i===null)throw he;d=!1,i.exit(1),i=null,l=null,u=null},y=b=>{v=b},_=b=>{Ae(b)};return Ie(a),Ae(e),H("info",`use ffmpeg.wasm v${Qt}`),{setProgress:y,setLogger:_,setLogging:Ie,load:$,isLoaded:D,run:G,exit:f,FS:T}};const ta=ea,{fetchFile:aa}=Ge;var ve={createFFmpeg:ta,fetchFile:aa};class oa{constructor(a){V(this,"options");this.options=a}async transforms(a){return Promise.all(a.map(async e=>{const o=await this._loadImg(e.file),c=this._paintFrame({img:o,frame:e});return await this._canvasToBlob(c)}))}async transformsCanvas(a){return Promise.all(a.map(async e=>{const o=await this._loadImg(e.file);return this._paintFrame({img:o,frame:e})}))}async _canvasToBlob(a){return new Promise(function(e,o){a.toBlob(function(c){c?e(c):o("\u6570\u636E\u5F02\u5E38")},"image/jpeg",1)})}_canvasToImage(a){var e=new Image;return e.src=a.toDataURL("image/png"),e}async _loadImg(a){return new Promise(function(e){const o=new Image;o.src=window.URL.createObjectURL(a),o.onload=function(){e(o)}})}_paintFrame(a){const{width:e,height:o,rule:c,background:i}=this.options,{img:l,frame:u}=a,d=document.createElement("canvas");d.width=e,d.height=o;const v=d.getContext("2d");if(!l||!v)throw new Error("\u6570\u636E\u5F02\u5E38");v.fillStyle=i,v.fillRect(0,0,d.width,d.height);const{canvasData:h,imgData:w}=function(){const{width:E,height:P}=l,{width:L,height:R}=d,N=Math.max(L/E,R/P),ae=[Math.floor(L/N),Math.floor(R/N)];return{imgData:[Math.floor((E-ae[0])/2),Math.floor((P-ae[1])/2),Math.floor(L/N),Math.floor(R/N)],canvasData:[0,0,L,R]}}(),[$,D,G,T]=w,[f,y,_,k]=h;v.drawImage(l,$,D,G,T,f,y,_,k);const{rotateY:b}=u;if((b==180?-1:1)==-1){const E=v.getImageData(0,0,_,k),P=v.getImageData(0,0,_,k);v.putImageData(this.canvasDataHRevert(E,P),0,0)}return d}canvasDataHRevert(a,e){for(var o=0,c=a.height;o<c;o++)for(var i=0,l=a.width;i<l;i++)e.data[o*l*4+i*4+0]=a.data[o*l*4+(l-i)*4+0],e.data[o*l*4+i*4+1]=a.data[o*l*4+(l-i)*4+1],e.data[o*l*4+i*4+2]=a.data[o*l*4+(l-i)*4+2],e.data[o*l*4+i*4+3]=a.data[o*l*4+(l-i)*4+3];return e}}class na{constructor(){V(this,"file");V(this,"frames");V(this,"options");V(this,"music");V(this,"ffmpeg");V(this,"ratio");this.file={gif:null,mp4:null},this.frames=[],this.options={width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5},this.music={start:0},this.ffmpeg=ve.createFFmpeg({log:!1}),this.ratio=0}setOpt(a){return this.options=Object.assign(this.options,a),this}setFrame(a){return this.frames=a,this}setMusic(a){return this.music=a,this}logProgress(a,e){if(a<0)return;const o=parseFloat((((e==="gif"?1:0)+a)/2).toFixed(4));o!=this.ratio&&(this.ratio=o,console.log(`\u751F\u6210\u8FDB\u5EA6\uFF1A${this.ratio*100}%`,this.ratio))}async toPreView(){if(this.file={gif:null,mp4:null},this.frames.length==0)return;const e=await new oa(this.options).transforms(this.frames);return this.ffmpeg.isLoaded()||await this.ffmpeg.load(),await this._makeFile(e),!this.file.mp4||!this.file.gif?{}:{src:URL.createObjectURL(this.file.mp4),size_mp4:this.file.mp4.size,size_gif:this.file.gif.size}}async toFile(a){const e=`${a}-${Oe()}.${a}`;let o=null;switch(a){case"gif":o=this.file.gif;break;case"mp4":o=this.file.mp4;break}!o||nt.exports.saveAs(o,e)}_toTime(a){const e=a%60;return`00:${((a-e)/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}async _makeFile(a){const e=[];a.forEach(async(o,c)=>{this.ffmpeg.FS("writeFile",`${c}.jpg`,await ve.fetchFile(o)),e.push(`${c}.jpg`)}),await this._makeMP4(),await this._makeGIF(),e.forEach(o=>this.ffmpeg.FS("unlink",o))}async _makeMP4(){const a="out.mp4",e="music.mp3",{delay:o,quality:c}=this.options,{file:i,start:l}=this.music,u=1e3/o,d=8+Math.round((1-c)*20),v=o/1e3*this.frames.length;if(this.ffmpeg.setProgress(({ratio:w})=>this.logProgress(w,"mp4")),i){this.ffmpeg.FS("writeFile",e,await ve.fetchFile(i));const w=this._toTime(l);await this.ffmpeg.run("-r",`${u}`,"-f","image2","-i","%d.jpg","-i",e,"-ss",w,"-t",`${v}`,"-crf",`${d}`,a)}else await this.ffmpeg.run("-r",`${u}`,"-f","image2","-i","%d.jpg","-crf",`${d}`,a);const h=this.ffmpeg.FS("readFile",a).buffer;this.file.mp4=new Blob([h],{type:"video/mp4"})}async _makeGIF(){const a="out.mp4",e="out.gif",{repeat:o}=this.options,c=o==-1?1:0;this.ffmpeg.setProgress(({ratio:l})=>this.logProgress(l,"gif")),await this.ffmpeg.run("-i",a,"-loop",`${c}`,"-vf","split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",e);const i=this.ffmpeg.FS("readFile",e).buffer;this.file.gif=new Blob([i],{type:"image/gif"})}}const ra=["id","onKeyup"],ia=p("span",{class:"css-icon delete"},null,-1),sa=[ia],la={class:"dialog-header"},ca={class:"dialog-header-left"},ua={class:"dialog-header-right"},da={class:"dialog-content"},fa={key:1,class:"dialog-footer"},pa=Y({__name:"Dialog",props:{manner:{type:String,default:"mac"},title:{type:String},needClose:{type:Boolean,default:!0},glass:{type:Boolean,default:!1},show:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},escOut:{type:Boolean,default:!0},size:{type:Number},fullBackground:{type:String,default:""}},emits:["update:show","update:loading"],setup(t,{emit:a}){const e=t,o=S(rt()),c=We(),i=S(!1),l=function(){a("update:show",!1),a("update:loading",!1)},u=function(){i.value=!i.value},d=h=>(e.escOut&&h.key==="Escape"&&l(),!1);He(()=>e.show,function(h,w){ye(()=>{h?v.value.focus():v.value.blur()})});const v=S();return Xe(()=>{ye(()=>{const h=document.body;h.append?h.append(v.value):h.appendChild(v.value)})}),(h,w)=>(B(),j("div",{ref_key:"dialog",ref:v,id:o.value,class:Q(["dialog","dialog-"+t.manner,t.show?"open":"",i.value?"dialog-full":"",t.size?`dialog-size-${t.size}`:""]),tabindex:"1",onKeyup:Ze(d,["stop"])},[F(I(_a),{show:t.show,onClick:l},null,8,["show"]),F(I(ba),{class:Q(["dialog-loading",t.loading?"show":""])},null,8,["class"]),p("div",{class:Q(["dialog-center-box",t.glass?"glass":"",t.fullBackground?"opacity-bg":""]),style:we({backgroundImage:`url(${t.fullBackground})`})},[t.needClose&&t.manner=="simple"?(B(),j("div",{key:0,class:"dialog-close",onClick:l},sa)):K("",!0),p("div",la,[p("div",ca,[t.manner=="mac"?(B(),j("span",{key:0,class:"css-icon delete mini",onClick:l})):K("",!0),t.manner=="mac"?(B(),j("span",{key:1,class:"css-icon plus mini",onClick:u})):K("",!0)]),p("header",null,be(t.title),1),p("div",ua,[I(c).header?pe(h.$slots,"header",{key:0}):K("",!0)])]),p("div",da,[pe(h.$slots,"content")]),I(c).footer?(B(),j("div",fa,[pe(h.$slots,"footer")])):K("",!0)],6)],42,ra))}}),ga={},ma={class:"global-loading"},ha=Ke('<div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div><div class="global-loading-dot" data-v-825b8702></div>',12),va=[ha];function ya(t,a){return B(),j("div",ma,va)}var ba=q(ga,[["render",ya],["__scopeId","data-v-825b8702"]]);const wa=Y({__name:"Overlay",props:{show:{type:Boolean,default:!1},opacity:{type:Number,default:.2}},setup(t){return(a,e)=>(B(),j("div",{class:Q(["overlay",t.show?"overlay-show":""]),style:we({background:`rgba(0, 0, 0, ${t.opacity})`})},null,6))}});var _a=q(wa,[["__scopeId","data-v-3f70eb1d"]]);const te=t=>(_e("data-v-3f641b60"),t=t(),Fe(),t),Fa={class:"form"},ka=te(()=>p("span",null,"\u5BBD / \u9AD8\uFF1A",-1)),$a=te(()=>p("span",null,"\u8D28\u91CF\uFF1A",-1)),Ea=te(()=>p("span",{for:"background"},"\u80CC\u666F\u8272\uFF1A",-1)),Ca=te(()=>p("span",{for:"delay"},"\u505C\u7559\u65F6\u95F4\uFF1A",-1)),xa=te(()=>p("span",{for:"repeat"},"\u91CD\u590D\u6B21\u6570\uFF1A",-1)),La=Y({__name:"gif-canvas",props:{value:null},emits:["update:value","change"],setup(t,{emit:a}){const e=t,o=S({width:e.value.width,height:e.value.height}),c=function(u){let d=e.value;u&&(d=Object.assign(d,u)),a("update:value",d),a("change")},i=function(u){c(u)},l=function(){c()};return(u,d)=>(B(),j("div",Fa,[p("div",null,[ka,F(it,{value:o.value,onChange:i},null,8,["value"])]),p("div",null,[$a,p("div",null,[F(I(st),{ref:"scaleRange",modelValue:t.value.quality,"onUpdate:modelValue":d[0]||(d[0]=v=>t.value.quality=v),onChange:l},null,8,["modelValue"])])]),F(I(je)),p("div",null,[Ea,p("div",null,[re(p("input",{type:"color",name:"background","onUpdate:modelValue":d[1]||(d[1]=v=>t.value.background=v),onChange:c},null,544),[[ie,t.value.background]])])]),p("div",null,[Ca,p("div",null,[re(p("input",{type:"number",name:"delay",min:"0",placeholder:"\u505C\u7559\u65F6\u95F4 \u6BEB\u79D2","onUpdate:modelValue":d[2]||(d[2]=v=>t.value.delay=v),onChange:c},null,544),[[ie,t.value.delay]])])]),p("div",null,[xa,p("div",null,[re(p("input",{type:"number",name:"repeat",min:"-1",placeholder:"-1 never 0 ever or number","onUpdate:modelValue":d[3]||(d[3]=v=>t.value.repeat=v),onChange:c},null,544),[[ie,t.value.repeat]])])])]))}});var Sa=q(La,[["__scopeId","data-v-3f641b60"]]);const Da=t=>(_e("data-v-fdcec55e"),t=t(),Fe(),t),Pa={class:"form"},Ba={class:"music-select"},Ia=["onClick"],Aa=Da(()=>p("span",null,"\u8D77\u59CB\u65F6\u95F4\uFF1A",-1)),Oa=Y({__name:"gif-music",props:{value:null},emits:["update:value","change"],setup(t,{emit:a}){const e=t,o=S([]),c=function(l){let u=e.value;l&&(u=Object.assign(u,l)),a("update:value",u),a("change")},i=function(l){l.selected||(o.value=o.value.map(u=>(u.selected=l.id==u.id,u)),c({file:l.file}))};return(l,u)=>(B(),j("div",Pa,[F(I(lt),{value:o.value,"onUpdate:value":u[0]||(u[0]=d=>o.value=d),max_size:1024*50,file_type:["audio/mpeg"]},null,8,["value"]),p("div",Ba,[p("ul",null,[(B(!0),j(ze,null,Je(o.value,d=>(B(),j("li",{class:"line",onClick:v=>i(d)},[p("span",null,be(d.file.name),1),p("span",null,[p("i",{class:Q(["css-icon",d.selected?"select":""])},null,2)])],8,Ia))),256))])]),F(I(je)),p("div",null,[Aa,p("div",null,[re(p("input",{type:"number",name:"start","onUpdate:modelValue":u[1]||(u[1]=d=>t.value.start=d),onChange:c},null,544),[[ie,t.value.start]])])])]))}});var za=q(Oa,[["__scopeId","data-v-fdcec55e"]]);const ja={class:"frame-editor-item"},Ma={class:"img"},Ua=["src"],Ta={class:"tools icon-group"},Ga=Y({__name:"item",props:["element","index"],emits:["itemTools","clear"],setup(t,{emit:a}){const e=t,o=()=>{a("itemTools",e.index,"flipX")},c=()=>{a("clear",e.element.id)};return(i,l)=>(B(),j("div",ja,[p("div",Ma,[p("img",{src:t.element.src,style:we({transform:`rotateX(${t.element.rotateX}deg) rotateY(${t.element.rotateY}deg) rotateZ(${t.element.rotateZ}deg)`})},null,12,Ua),p("span",null,"\u7B2C "+be(t.index+1)+" \u5E27",1)]),p("div",Ta,[F(I(Pe),{type:"flip-x",onClick:o}),F(I(Pe),{type:"clear",onClick:c})])]))}});var Ra=q(Ga,[["__scopeId","data-v-75248e5c"]]);const Na=Y({__name:"Editor",setup(t,{expose:a}){const e=S([]);let o=null;const c=function(){return e.value.map(f=>X({},f))},i=function(f){if(!f||f.length===0)throw new Error("\u62D6\u5165\u6587\u4EF6\u6570\u636E\u5F02\u5E38");l(f)},l=f=>{o=f},u=function(f){f.stopPropagation(),f.preventDefault()},d=f=>{if(u(f),!o)return;const y=e.value.map(k=>k.id),_=o.filter(k=>!y.includes(k.id));_.length!=0&&(e.value=[...e.value,..._.map(k=>Se(X({},k),{rotateX:0,rotateY:0,rotateZ:0}))])};a({getFrames:c,setDropCache:i});const v=()=>{console.log("\u4FEE\u6539\u987A\u5E8F")},h=f=>{e.value=e.value.filter(y=>y.id!==f)},w=(f,y)=>{switch(y){case"flipX":$(f);break;case"flipY":D(f);break;case"turnAnti":G(f);break;case"turn":T(f);break}},$=function(f){e.value[f].rotateY=e.value[f].rotateY==0?180:0},D=function(f){e.value[f].rotateX=e.value[f].rotateX==0?180:0},G=function(f){e.value[f].rotateZ-=90},T=function(f){e.value[f].rotateZ+=90};return(f,y)=>(B(),j("div",{class:"frame-editor",onDrop:d,onDragover:u},[F(I(ct),{class:"frame-editor-box",modelValue:e.value,"onUpdate:modelValue":y[0]||(y[0]=_=>e.value=_),"item-key":"id",onChange:v},{item:U(({element:_,index:k})=>[F(Ra,{element:_,index:k,onItemTools:w,onClear:h},null,8,["element","index"])]),_:1},8,["modelValue"])],32))}});var Va=q(Na,[["__scopeId","data-v-d1682cd0"]]);const Ya=["src","width"],qa={class:"btn-group center"},Wa=Y({__name:"PreViewDialog",props:{ratio:{type:Number,default:1}},emits:["footer-click"],setup(t,{expose:a,emit:e}){const o=S(""),c=window.screen.height*.6,i=S(!1),l=S(!1),u=function(w=!1){i.value=!0,l.value=w};a({display:function(w){o.value=w,u()},load:function(){u(!0)},open:u});const h=function(w){e("footer-click",w)};return(w,$)=>(B(),Qe(pa,{show:i.value,"onUpdate:show":$[2]||($[2]=D=>i.value=D),loading:l.value,"onUpdate:loading":$[3]||($[3]=D=>l.value=D)},{content:U(()=>[p("video",{src:o.value,width:c*t.ratio,height:c,class:"preview",controls:"",autoplay:""},null,8,Ya)]),footer:U(()=>[p("div",qa,[p("button",{class:"button large C",onClick:$[0]||($[0]=D=>h("gif"))},"\u4E0B\u8F7DGIF"),p("button",{class:"button large C",onClick:$[1]||($[1]=D=>h("mp4"))},"\u4E0B\u8F7DMP4")])]),_:1},8,["show","loading"]))}});var Ha=q(Wa,[["__scopeId","data-v-44d1a161"]]);const Re=t=>(_e("data-v-9a1a9786"),t=t(),Fe(),t),Xa=Re(()=>p("span",null,"Pic GIF",-1)),Za=Re(()=>p("button",{class:"button C"},[p("a",{href:"./collage.html"},"Pic Collage")],-1)),Ka={class:"left"},Ja={class:"right"},Qa=Y({__name:"index",setup(t){const a=S([]),e=S("library"),o=S(""),c=S(),i=S(),l=S(),u=S({width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5}),d=S({start:0}),v=new na,h=et("_message"),w=()=>{ye(()=>{o.value="",c.value.clearSelect(),h({type:"success",value:"\u6E05\u7406\u6210\u529F..."})})},$=f=>{a.value.push({value:f,timestamp:Oe()})},D=async function(){var f=l.value.getFrames();if(!f||f.length==0){h({type:"warning",value:"\u8BF7\u4ECE\u56FE\u5E93\u4E2D\u9009\u62E9\u3002"});return}h({value:"\u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u8BF7\u7B49\u5F85..."}),i.value.load();const y=await v.setOpt(u.value).setMusic(d.value).setFrame(f).toPreView().catch(x=>console.log(x));if(!(y!=null&&y.src))return;const{src:_,size_mp4:k,size_gif:b}=y;console.log(`
    size_mp4: ${Math.round(k/1024)}KB
    size_gif: ${Math.round(b/1024)}KB
  `),i.value.display(_)},G=function(f){var y=l.value.getFrames();!y||y.length==0||v.toFile(f).catch(_=>console.log(_))},T=function(f){l.value.setDropCache([...f])};return(f,y)=>(B(),j(ze,null,[F(tt,{needLog:!0},{header:U(()=>[Xa]),menu:U(()=>[Za]),main:U(()=>[p("div",Ka,[F(I(ne).Box,{selected:e.value,"onUpdate:selected":y[0]||(y[0]=_=>e.value=_)},{default:U(()=>[F(I(ne).Panel,{key:"library",title:"\u56FE\u5E93"},{default:U(()=>[F(ut,{ref_key:"galleryLoader",ref:c,onLog:$,onDrop:T,multiDrop:!0},null,512)]),_:1}),F(I(ne).Panel,{key:"music",title:"\u97F3\u4E50\u5E93"},{default:U(()=>[F(za,{value:d.value},null,8,["value"])]),_:1}),F(I(ne).Panel,{key:"setting",title:"\u8BBE\u7F6E"},{default:U(()=>[F(Sa,{value:u.value},null,8,["value"])]),_:1})]),_:1},8,["selected"]),p("div",{class:"btn-group center"},[p("button",{class:"button large",onClick:D},"\u751F\u6210\u9884\u89C8")])]),p("div",Ja,[p("div",{class:"btn-group right"},[p("button",{class:"button A",onClick:w},"\u6E05\u7406\u5E27")]),F(Va,{ref_key:"frameEditor",ref:l},null,512)])]),footer:U(()=>[F(dt,{logs:a.value},null,8,["logs"])]),_:1}),F(Ha,{ref_key:"previewDialog",ref:i,ratio:u.value.width/u.value.height,onFooterClick:G},null,8,["ratio"])],64))}});var eo=q(Qa,[["__scopeId","data-v-9a1a9786"]]);const Ne=at(eo);Ne.use(ft);Ne.mount("#app");
