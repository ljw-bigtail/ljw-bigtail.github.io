var Ze=Object.defineProperty,Ke=Object.defineProperties;var Je=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ue=(e,t,a)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,H=(e,t)=>{for(var a in t||(t={}))De.call(t,a)&&ue(e,a,t[a]);if(oe)for(var a of oe(t))Ie.call(t,a)&&ue(e,a,t[a]);return e},fe=(e,t)=>Ke(e,Je(t));var Pe=(e,t)=>{var a={};for(var o in e)De.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&oe)for(var o of oe(e))t.indexOf(o)<0&&Ie.call(e,o)&&(a[o]=e[o]);return a};var q=(e,t,a)=>(ue(e,typeof t!="symbol"?t+"":t,a),a);import{g as je,_ as U,d as Y,r as D,o as P,h as O,a as f,i as x,j as ie,v as re,p as Q,e as ee,F as Me,k as Qe,t as ke,n as X,l as et,w as j,u as we,m as tt,q as Ue,s as at,x as ge,y as pe,c as ot,z as it,b as rt,A as nt,B as st,f as Ge}from"./plugin-vue_export-helper.f6a4ff40.js";import{c as lt,F as dt,S as ct,R as ut,L as Re,D as ft,I as Be,d as gt,T as pt,a as ve,G as vt,b as ht}from"./Line.298d4a51.js";var mt={exports:{}};(function(e){var t=function(a){var o=Object.prototype,s=o.hasOwnProperty,n,d=typeof Symbol=="function"?Symbol:{},c=d.iterator||"@@iterator",g=d.asyncIterator||"@@asyncIterator",m=d.toStringTag||"@@toStringTag";function y(r,i,l){return Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}),r[i]}try{y({},"")}catch{y=function(i,l,v){return i[l]=v}}function w(r,i,l,v){var p=i&&i.prototype instanceof _?i:_,E=Object.create(p.prototype),B=new le(v||[]);return E._invoke=ae(r,l,B),E}a.wrap=w;function k(r,i,l){try{return{type:"normal",arg:r.call(i,l)}}catch(v){return{type:"throw",arg:v}}}var S="suspendedStart",G="suspendedYield",M="executing",u="completed",h={};function _(){}function F(){}function b(){}var C={};y(C,c,function(){return this});var $=Object.getPrototypeOf,I=$&&$($(de([])));I&&I!==o&&s.call(I,c)&&(C=I);var L=b.prototype=_.prototype=Object.create(C);F.prototype=b,y(L,"constructor",b),y(b,"constructor",F),F.displayName=y(b,m,"GeneratorFunction");function R(r){["next","throw","return"].forEach(function(i){y(r,i,function(l){return this._invoke(i,l)})})}a.isGeneratorFunction=function(r){var i=typeof r=="function"&&r.constructor;return i?i===F||(i.displayName||i.name)==="GeneratorFunction":!1},a.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,b):(r.__proto__=b,y(r,m,"GeneratorFunction")),r.prototype=Object.create(L),r},a.awrap=function(r){return{__await:r}};function V(r,i){function l(E,B,A,T){var z=k(r[E],r,B);if(z.type==="throw")T(z.arg);else{var ce=z.arg,Z=ce.value;return Z&&typeof Z=="object"&&s.call(Z,"__await")?i.resolve(Z.__await).then(function(N){l("next",N,A,T)},function(N){l("throw",N,A,T)}):i.resolve(Z).then(function(N){ce.value=N,A(ce)},function(N){return l("throw",N,A,T)})}}var v;function p(E,B){function A(){return new i(function(T,z){l(E,B,T,z)})}return v=v?v.then(A,A):A()}this._invoke=p}R(V.prototype),y(V.prototype,g,function(){return this}),a.AsyncIterator=V,a.async=function(r,i,l,v,p){p===void 0&&(p=Promise);var E=new V(w(r,i,l,v),p);return a.isGeneratorFunction(i)?E:E.next().then(function(B){return B.done?B.value:E.next()})};function ae(r,i,l){var v=S;return function(E,B){if(v===M)throw new Error("Generator is already running");if(v===u){if(E==="throw")throw B;return Se()}for(l.method=E,l.arg=B;;){var A=l.delegate;if(A){var T=ne(A,l);if(T){if(T===h)continue;return T}}if(l.method==="next")l.sent=l._sent=l.arg;else if(l.method==="throw"){if(v===S)throw v=u,l.arg;l.dispatchException(l.arg)}else l.method==="return"&&l.abrupt("return",l.arg);v=M;var z=k(r,i,l);if(z.type==="normal"){if(v=l.done?u:G,z.arg===h)continue;return{value:z.arg,done:l.done}}else z.type==="throw"&&(v=u,l.method="throw",l.arg=z.arg)}}}function ne(r,i){var l=r.iterator[i.method];if(l===n){if(i.delegate=null,i.method==="throw"){if(r.iterator.return&&(i.method="return",i.arg=n,ne(r,i),i.method==="throw"))return h;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var v=k(l,r.iterator,i.arg);if(v.type==="throw")return i.method="throw",i.arg=v.arg,i.delegate=null,h;var p=v.arg;if(!p)return i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,h;if(p.done)i[r.resultName]=p.value,i.next=r.nextLoc,i.method!=="return"&&(i.method="next",i.arg=n);else return p;return i.delegate=null,h}R(L),y(L,m,"Generator"),y(L,c,function(){return this}),y(L,"toString",function(){return"[object Generator]"});function Le(r){var i={tryLoc:r[0]};1 in r&&(i.catchLoc=r[1]),2 in r&&(i.finallyLoc=r[2],i.afterLoc=r[3]),this.tryEntries.push(i)}function se(r){var i=r.completion||{};i.type="normal",delete i.arg,r.completion=i}function le(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(Le,this),this.reset(!0)}a.keys=function(r){var i=[];for(var l in r)i.push(l);return i.reverse(),function v(){for(;i.length;){var p=i.pop();if(p in r)return v.value=p,v.done=!1,v}return v.done=!0,v}};function de(r){if(r){var i=r[c];if(i)return i.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var l=-1,v=function p(){for(;++l<r.length;)if(s.call(r,l))return p.value=r[l],p.done=!1,p;return p.value=n,p.done=!0,p};return v.next=v}}return{next:Se}}a.values=de;function Se(){return{value:n,done:!0}}return le.prototype={constructor:le,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(se),!r)for(var i in this)i.charAt(0)==="t"&&s.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=n)},stop:function(){this.done=!0;var r=this.tryEntries[0],i=r.completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var i=this;function l(T,z){return E.type="throw",E.arg=r,i.next=T,z&&(i.method="next",i.arg=n),!!z}for(var v=this.tryEntries.length-1;v>=0;--v){var p=this.tryEntries[v],E=p.completion;if(p.tryLoc==="root")return l("end");if(p.tryLoc<=this.prev){var B=s.call(p,"catchLoc"),A=s.call(p,"finallyLoc");if(B&&A){if(this.prev<p.catchLoc)return l(p.catchLoc,!0);if(this.prev<p.finallyLoc)return l(p.finallyLoc)}else if(B){if(this.prev<p.catchLoc)return l(p.catchLoc,!0)}else if(A){if(this.prev<p.finallyLoc)return l(p.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,i){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.tryLoc<=this.prev&&s.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var p=v;break}}p&&(r==="break"||r==="continue")&&p.tryLoc<=i&&i<=p.finallyLoc&&(p=null);var E=p?p.completion:{};return E.type=r,E.arg=i,p?(this.method="next",this.next=p.finallyLoc,h):this.complete(E)},complete:function(r,i){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&i&&(this.next=i),h},finish:function(r){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.finallyLoc===r)return this.complete(l.completion,l.afterLoc),se(l),h}},catch:function(r){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.tryLoc===r){var v=l.completion;if(v.type==="throw"){var p=v.arg;se(l)}return p}}throw new Error("illegal catch attempt")},delegateYield:function(r,i,l){return this.delegate={iterator:de(r),resultName:i,nextLoc:l},this.method==="next"&&(this.arg=n),h}},a}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(mt);var bt={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let $e=!1,Ve=()=>{};const yt=e=>{$e=e},wt=e=>{Ve=e},_t=(e,t)=>{Ve({type:e,message:t}),$e&&console.log(`[${e}] ${t}`)};var Ye={logging:$e,setLogging:yt,setCustomLogger:wt,log:_t};let K=0,he=0;const Ae=e=>{const[t,a,o]=e.split(":");return parseFloat(t)*60*60+parseFloat(a)*60+parseFloat(o)};var xt=(e,t)=>{if(typeof e=="string")if(e.startsWith("  Duration")){const a=e.split(", ")[0].split(": ")[1],o=Ae(a);t({duration:o,ratio:he}),(K===0||K>o)&&(K=o)}else if(e.startsWith("frame")||e.startsWith("size")){const a=e.split("time=")[1].split(" ")[0],o=Ae(a);he=o/K,t({ratio:he,time:o})}else e.startsWith("video:")&&(t({ratio:1}),K=0)},Ft=(e,t)=>{const a=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((o,s)=>{const n=e._malloc(o.length+1);e.writeAsciiToMemory(o,n),e.setValue(a+Uint32Array.BYTES_PER_ELEMENT*s,n,"i32")}),[t.length,a]},Ee={exports:{}};(function(e,t){(function(a,o){e.exports=o()})(lt,function(){function a(){var o=arguments.length;if(o===0)throw new Error("resolveUrl requires at least one argument; got none.");var s=document.createElement("base");if(s.href=arguments[0],o===1)return s.href;var n=document.getElementsByTagName("head")[0];n.insertBefore(s,n.firstChild);for(var d=document.createElement("a"),c,g=1;g<o;g++)d.href=arguments[g],c=d.href,s.href=c;return n.removeChild(s),c}return a})})(Ee);const kt="@ffmpeg/ffmpeg",$t="0.10.1",Et="FFmpeg WebAssembly version",Ct="src/index.js",Lt="src/index.d.ts",St={example:"examples"},Dt={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},It={"./src/node/index.js":"./src/browser/index.js"},Pt={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},Bt=["ffmpeg","WebAssembly","video"],At="Jerome Wu <jeromewus@gmail.com>",zt="MIT",Ot={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Tt={node:">=12.16.1"},jt="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",Mt={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},Ut={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"};var qe={name:kt,version:$t,description:Et,main:Ct,types:Lt,directories:St,scripts:Dt,browser:It,repository:Pt,keywords:Bt,author:At,license:zt,bugs:Ot,engines:Tt,homepage:jt,dependencies:Mt,devDependencies:Ut};const{devDependencies:Gt}=qe;var Rt={corePath:`https://unpkg.com/@ffmpeg/core@${Gt["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const Vt=Ee.exports,{log:J}=Ye,me=async(e,t)=>{J("info",`fetch ${e}`);const a=await(await fetch(e)).arrayBuffer();J("info",`${e} file size = ${a.byteLength} bytes`);const o=new Blob([a],{type:t}),s=URL.createObjectURL(o);return J("info",`${e} blob URL = ${s}`),s};var Yt=async({corePath:e})=>{if(typeof e!="string")throw Error("corePath should be a string!");const t=Vt(e),a=await me(t,"application/javascript"),o=await me(t.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),s=await me(t.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore=="undefined"?new Promise(n=>{const d=document.createElement("script"),c=()=>{d.removeEventListener("load",c),J("info","ffmpeg-core.js script loaded"),n({createFFmpegCore,corePath:a,wasmPath:o,workerPath:s})};d.src=a,d.type="text/javascript",d.addEventListener("load",c),document.getElementsByTagName("head")[0].appendChild(d)}):(J("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:a,wasmPath:o,workerPath:s}))};const qt=Ee.exports,Nt=e=>new Promise((t,a)=>{const o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=({target:{error:{code:s}}})=>{a(Error(`File could not be read! Code=${s}`))},o.readAsArrayBuffer(e)});var Ht=async e=>{let t=e;return typeof e=="undefined"?new Uint8Array:(typeof e=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(a=>a.charCodeAt(0)):t=await(await fetch(qt(e))).arrayBuffer():(e instanceof File||e instanceof Blob)&&(t=await Nt(e)),new Uint8Array(t))};const Wt=Rt,Xt=Yt,Zt=Ht;var Ne={defaultOptions:Wt,getCreateFFmpegCore:Xt,fetchFile:Zt};const{defaultArgs:Kt,baseOptions:Jt}=bt,{setLogging:ze,setCustomLogger:Oe,log:W}=Ye,Qt=xt,ea=Ft,{defaultOptions:ta,getCreateFFmpegCore:aa}=Ne,{version:oa}=qe,be=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var ia=(e={})=>{const F=H(H(H({},Jt),ta),e),{log:t,logger:a,progress:o}=F,s=Pe(F,["log","logger","progress"]);let n=null,d=null,c=null,g=!1,m=o;const y=b=>{b==="FFMPEG_END"&&c!==null&&(c(),c=null,g=!1)},w=({type:b,message:C})=>{W(b,C),Qt(C,m),y(C)},k=async()=>{if(W("info","load ffmpeg-core"),n===null){W("info","loading ffmpeg-core");const{createFFmpegCore:b,corePath:C,workerPath:$,wasmPath:I}=await aa(s);n=await b({mainScriptUrlOrBlob:C,printErr:L=>w({type:"fferr",message:L}),print:L=>w({type:"ffout",message:L}),locateFile:(L,R)=>{if(typeof window!="undefined"){if(typeof I!="undefined"&&L.endsWith("ffmpeg-core.wasm"))return I;if(typeof $!="undefined"&&L.endsWith("ffmpeg-core.worker.js"))return $}return R+L}}),d=n.cwrap("proxy_main","number",["number","number"]),W("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},S=()=>n!==null,G=(...b)=>{if(W("info",`run ffmpeg command: ${b.join(" ")}`),n===null)throw be;if(g)throw Error("ffmpeg.wasm can only run one command at a time");return g=!0,new Promise(C=>{const $=[...Kt,...b].filter(I=>I.length!==0);c=C,d(...ea(n,$))})},M=(b,...C)=>{if(W("info",`run FS.${b} ${C.map($=>typeof $=="string"?$:`<${$.length} bytes binary file>`).join(" ")}`),n===null)throw be;{let $=null;try{$=n.FS[b](...C)}catch{throw Error(b==="readdir"?`ffmpeg.FS('readdir', '${C[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:b==="readFile"?`ffmpeg.FS('readFile', '${C[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return $}},u=()=>{if(n===null)throw be;g=!1,n.exit(1),n=null,d=null,c=null},h=b=>{m=b},_=b=>{Oe(b)};return ze(t),Oe(a),W("info",`use ffmpeg.wasm v${oa}`),{setProgress:h,setLogger:_,setLogging:ze,load:k,isLoaded:S,run:G,exit:u,FS:M}};const ra=ia,{fetchFile:na}=Ne;var ye={createFFmpeg:ra,fetchFile:na};class sa{constructor(t){q(this,"options");this.options=t}async transforms(t){return Promise.all(t.map(async a=>{const o=await this._loadImg(a.file),s=this._paintFrame({img:o,frame:a});return await this._canvasToBlob(s)}))}async transformsCanvas(t){return Promise.all(t.map(async a=>{const o=await this._loadImg(a.file);return this._paintFrame({img:o,frame:a})}))}async _canvasToBlob(t){return new Promise(function(a,o){t.toBlob(function(s){s?a(s):o("\u6570\u636E\u5F02\u5E38")},"image/jpeg",1)})}_canvasToImage(t){var a=new Image;return a.src=t.toDataURL("image/png"),a}async _loadImg(t){return new Promise(function(a){const o=new Image;o.src=window.URL.createObjectURL(t),o.onload=function(){a(o)}})}_paintFrame(t){const{width:a,height:o,rule:s,background:n}=this.options,{img:d,frame:c}=t,g=document.createElement("canvas");g.width=a,g.height=o;const m=g.getContext("2d");if(!d||!m)throw new Error("\u6570\u636E\u5F02\u5E38");m.fillStyle=n,m.fillRect(0,0,g.width,g.height);const{canvasData:y,imgData:w}=function(){const{width:$,height:I}=d,{width:L,height:R}=g,V=Math.max(L/$,R/I),ae=[Math.floor(L/V),Math.floor(R/V)];return{imgData:[Math.floor(($-ae[0])/2),Math.floor((I-ae[1])/2),Math.floor(L/V),Math.floor(R/V)],canvasData:[0,0,L,R]}}(),[k,S,G,M]=w,[u,h,_,F]=y;m.drawImage(d,k,S,G,M,u,h,_,F);const{rotateY:b}=c;if((b==180?-1:1)==-1){const $=m.getImageData(0,0,_,F),I=m.getImageData(0,0,_,F);m.putImageData(this.canvasDataHRevert($,I),0,0)}return g}canvasDataHRevert(t,a){for(var o=0,s=t.height;o<s;o++)for(var n=0,d=t.width;n<d;n++)a.data[o*d*4+n*4+0]=t.data[o*d*4+(d-n)*4+0],a.data[o*d*4+n*4+1]=t.data[o*d*4+(d-n)*4+1],a.data[o*d*4+n*4+2]=t.data[o*d*4+(d-n)*4+2],a.data[o*d*4+n*4+3]=t.data[o*d*4+(d-n)*4+3];return a}}class la{constructor(){q(this,"file");q(this,"frames");q(this,"options");q(this,"music");q(this,"ffmpeg");q(this,"ratio");this.file={gif:null,mp4:null},this.frames=[],this.options={width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5},this.music={start:0},this.ffmpeg=ye.createFFmpeg({log:!1}),this.ratio=0}setOpt(t){return this.options=Object.assign(this.options,t),this}setFrame(t){return this.frames=t,this}setMusic(t){return this.music=t,this}logProgress(t,a){if(t<0)return;const o=parseFloat((((a==="gif"?1:0)+t)/2).toFixed(4));o!=this.ratio&&(this.ratio=o,console.log(`\u751F\u6210\u8FDB\u5EA6\uFF1A${this.ratio*100}%`,this.ratio))}async toPreView(){if(this.file={gif:null,mp4:null},this.frames.length==0)return;const a=await new sa(this.options).transforms(this.frames);return this.ffmpeg.isLoaded()||await this.ffmpeg.load(),await this._makeFile(a),!this.file.mp4||!this.file.gif?{}:{src:URL.createObjectURL(this.file.mp4),size_mp4:this.file.mp4.size,size_gif:this.file.gif.size}}async toFile(t){const a=`${t}-${je()}.${t}`;let o=null;switch(t){case"gif":o=this.file.gif;break;case"mp4":o=this.file.mp4;break}!o||dt.exports.saveAs(o,a)}_toTime(t){const a=t%60;return`00:${((t-a)/60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}async _makeFile(t){const a=[];t.forEach(async(o,s)=>{this.ffmpeg.FS("writeFile",`${s}.jpg`,await ye.fetchFile(o)),a.push(`${s}.jpg`)}),await this._makeMP4(),await this._makeGIF(),a.forEach(o=>this.ffmpeg.FS("unlink",o))}async _makeMP4(){const t="out.mp4",a="music.mp3",{delay:o,quality:s}=this.options,{file:n,start:d}=this.music,c=1e3/o,g=8+Math.round((1-s)*20),m=o/1e3*this.frames.length;if(this.ffmpeg.setProgress(({ratio:w})=>this.logProgress(w,"mp4")),n){this.ffmpeg.FS("writeFile",a,await ye.fetchFile(n));const w=this._toTime(d);await this.ffmpeg.run("-r",`${c}`,"-f","image2","-i","%d.jpg","-i",a,"-ss",w,"-t",`${m}`,"-crf",`${g}`,t)}else await this.ffmpeg.run("-r",`${c}`,"-f","image2","-i","%d.jpg","-crf",`${g}`,t);const y=this.ffmpeg.FS("readFile",t).buffer;this.file.mp4=new Blob([y],{type:"video/mp4"})}async _makeGIF(){const t="out.mp4",a="out.gif",{repeat:o}=this.options,s=o==-1?1:0;this.ffmpeg.setProgress(({ratio:d})=>this.logProgress(d,"gif")),await this.ffmpeg.run("-i",t,"-loop",`${s}`,"-vf","split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",a);const n=this.ffmpeg.FS("readFile",a).buffer;this.file.gif=new Blob([n],{type:"image/gif"})}}const te=e=>(Q("data-v-53a05af4"),e=e(),ee(),e),da={class:"form"},ca=te(()=>f("span",null,"\u5BBD / \u9AD8\uFF1A",-1)),ua=te(()=>f("span",null,"\u8D28\u91CF\uFF1A",-1)),fa=te(()=>f("span",{for:"background"},"\u80CC\u666F\u8272\uFF1A",-1)),ga=te(()=>f("span",{for:"delay"},"\u505C\u7559\u65F6\u95F4\uFF1A",-1)),pa=te(()=>f("span",{for:"repeat"},"\u91CD\u590D\u6B21\u6570\uFF1A",-1)),va=Y({__name:"gif-canvas",props:{value:null},emits:["update:value","change"],setup(e,{emit:t}){const a=e,o=D({width:a.value.width,height:a.value.height}),s=function(c){let g=a.value;c&&(g=Object.assign(g,c)),t("update:value",g),t("change")},n=function(c){s(c)},d=function(){s()};return(c,g)=>(P(),O("div",da,[f("div",null,[ca,x(ct,{value:o.value,onChange:n},null,8,["value"])]),f("div",null,[ua,f("div",null,[x(ut,{ref:"scaleRange",value:e.value.quality,"onUpdate:value":g[0]||(g[0]=m=>e.value.quality=m),onChange:d},null,8,["value"])])]),x(Re),f("div",null,[fa,f("div",null,[ie(f("input",{type:"color",name:"background","onUpdate:modelValue":g[1]||(g[1]=m=>e.value.background=m),onChange:s},null,544),[[re,e.value.background]])])]),f("div",null,[ga,f("div",null,[ie(f("input",{type:"number",name:"delay",min:"0",placeholder:"\u505C\u7559\u65F6\u95F4 \u6BEB\u79D2","onUpdate:modelValue":g[2]||(g[2]=m=>e.value.delay=m),onChange:s},null,544),[[re,e.value.delay]])])]),f("div",null,[pa,f("div",null,[ie(f("input",{type:"number",name:"repeat",min:"-1",placeholder:"-1 never 0 ever or number","onUpdate:modelValue":g[3]||(g[3]=m=>e.value.repeat=m),onChange:s},null,544),[[re,e.value.repeat]])])])]))}});var ha=U(va,[["__scopeId","data-v-53a05af4"]]);const ma=e=>(Q("data-v-2f6a4484"),e=e(),ee(),e),ba={class:"form"},ya={class:"music-select"},wa=["onClick"],_a=ma(()=>f("span",null,"\u8D77\u59CB\u65F6\u95F4\uFF1A",-1)),xa=Y({__name:"gif-music",props:{value:null},emits:["update:value","change"],setup(e,{emit:t}){const a=e,o=D([]),s=function(d){let c=a.value;d&&(c=Object.assign(c,d)),t("update:value",c),t("change")},n=function(d){d.selected||(o.value=o.value.map(c=>(c.selected=d.id==c.id,c)),s({file:d.file}))};return(d,c)=>(P(),O("div",ba,[x(ft,{value:o.value,"onUpdate:value":c[0]||(c[0]=g=>o.value=g),max_size:1024*50,file_type:["audio/mpeg"]},null,8,["value"]),f("div",ya,[f("ul",null,[(P(!0),O(Me,null,Qe(o.value,g=>(P(),O("li",{class:"line",onClick:m=>n(g)},[f("span",null,ke(g.file.name),1),f("span",null,[f("i",{class:X(["css-icon",g.selected?"select":""])},null,2)])],8,wa))),256))])]),x(Re),f("div",null,[_a,f("div",null,[ie(f("input",{type:"number",name:"start","onUpdate:modelValue":c[1]||(c[1]=g=>e.value.start=g),onChange:s},null,544),[[re,e.value.start]])])])]))}});var Fa=U(xa,[["__scopeId","data-v-2f6a4484"]]);const ka={class:"frame-editor-item"},$a={class:"img"},Ea=["src"],Ca={class:"tools icon-group"},La=Y({__name:"item",props:["element","index"],emits:["itemTools","clear"],setup(e,{emit:t}){const a=e,o=()=>{t("itemTools",a.index,"flipX")},s=()=>{t("clear",a.element.id)};return(n,d)=>(P(),O("div",ka,[f("div",$a,[f("img",{src:e.element.src,style:et({transform:`rotateX(${e.element.rotateX}deg) rotateY(${e.element.rotateY}deg) rotateZ(${e.element.rotateZ}deg)`})},null,12,Ea),f("span",null,"\u7B2C "+ke(e.index+1)+" \u5E27",1)]),f("div",Ca,[x(Be,{type:"flip-x",onClick:o}),x(Be,{type:"clear",onClick:s})])]))}});var Sa=U(La,[["__scopeId","data-v-c5901816"]]);const Da=Y({__name:"Editor",setup(e,{expose:t}){const a=D([]);let o=null;const s=function(){return a.value.map(u=>H({},u))},n=function(u){if(!u||u.length===0)throw new Error("\u62D6\u5165\u6587\u4EF6\u6570\u636E\u5F02\u5E38");d(u)},d=u=>{o=u},c=function(u){u.stopPropagation(),u.preventDefault()},g=u=>{if(c(u),!o)return;const h=a.value.map(F=>F.id),_=o.filter(F=>!h.includes(F.id));_.length!=0&&(a.value=[...a.value,..._.map(F=>fe(H({},F),{rotateX:0,rotateY:0,rotateZ:0}))])};t({getFrames:s,setDropCache:n});const m=()=>{console.log("\u4FEE\u6539\u987A\u5E8F")},y=u=>{a.value=a.value.filter(h=>h.id!==u)},w=(u,h)=>{switch(h){case"flipX":k(u);break;case"flipY":S(u);break;case"turnAnti":G(u);break;case"turn":M(u);break}},k=function(u){a.value[u].rotateY=a.value[u].rotateY==0?180:0},S=function(u){a.value[u].rotateX=a.value[u].rotateX==0?180:0},G=function(u){a.value[u].rotateZ-=90},M=function(u){a.value[u].rotateZ+=90};return(u,h)=>(P(),O("div",{class:"frame-editor",onDrop:g,onDragover:c},[x(we(gt),{class:"frame-editor-box",modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=_=>a.value=_),"item-key":"id",onChange:m},{item:j(({element:_,index:F})=>[x(Sa,{element:_,index:F,onItemTools:w,onClear:y},null,8,["element","index"])]),_:1},8,["modelValue"])],32))}});var Ia=U(Da,[["__scopeId","data-v-d1682cd0"]]);const Pa={},Ba={class:"dialog-loading global-loading"},Aa=tt('<div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div><div class="global-loading-dot" data-v-ed30dbd0></div>',12),za=[Aa];function Oa(e,t){return P(),O("div",Ba,za)}var Ta=U(Pa,[["render",Oa],["__scopeId","data-v-ed30dbd0"]]);const ja=Y({__name:"Overlay",props:{show:{type:Boolean,default:!1}},setup(e){return(t,a)=>(P(),O("div",{class:X(["overlay",e.show?"overlay-show":""])},null,2))}});var Ma=U(ja,[["__scopeId","data-v-07cab184"]]);const Ua=e=>(Q("data-v-19456f35"),e=e(),ee(),e),Ga=["id"],Ra={class:"dialog-center-box"},Va=Ua(()=>f("span",{class:"css-icon delete bold"},null,-1)),Ya=[Va],qa={key:1,class:"dialog-header"},Na={class:"dialog-content"},Ha={key:2,class:"dialog-footer"},Wa=Y({__name:"Dialog",props:{size:{type:String,default:"max-content"},needClose:{type:Boolean,default:!0},show:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["update:show","update:loading"],setup(e,{emit:t}){const a=D(Ue()),o=at(),s=function(){t("update:show",!1),t("update:loading",!1)};return(n,d)=>(P(),O("div",{id:a.value,class:X(["dialog","dialog-"+e.size,e.show?"open":""])},[x(Ma,{show:e.show,onClick:s},null,8,["show"]),x(Ta,{class:X(["dialog-loading",e.loading?"show":""])},null,8,["class"]),f("div",Ra,[e.needClose?(P(),O("div",{key:0,class:"dialog-close",onClick:s},Ya)):ge("",!0),we(o).header?(P(),O("div",qa,[pe(n.$slots,"header",{},void 0,!0)])):ge("",!0),f("div",Na,[pe(n.$slots,"content",{},void 0,!0)]),we(o).footer?(P(),O("div",Ha,[pe(n.$slots,"footer",{},void 0,!0)])):ge("",!0)])],10,Ga))}});var Xa=U(Wa,[["__scopeId","data-v-19456f35"]]);const Za=["src","width"],Ka={class:"btn-group center"},Ja=Y({__name:"PreViewDialog",props:{ratio:{type:Number,default:1}},emits:["footer-click"],setup(e,{expose:t,emit:a}){const o=D(""),s=window.screen.height*.6,n=D(!1),d=D(!1),c=function(w=!1){n.value=!0,d.value=w};t({display:function(w){o.value=w,c()},load:function(){c(!0)},open:c});const y=function(w){a("footer-click",w)};return(w,k)=>(P(),ot(Xa,{show:n.value,"onUpdate:show":k[2]||(k[2]=S=>n.value=S),loading:d.value,"onUpdate:loading":k[3]||(k[3]=S=>d.value=S)},{content:j(()=>[f("video",{src:o.value,width:s*e.ratio,height:s,class:"preview",controls:"",autoplay:""},null,8,Za)]),footer:j(()=>[f("div",Ka,[f("button",{class:"button large C",onClick:k[0]||(k[0]=S=>y("gif"))},"\u4E0B\u8F7DGIF"),f("button",{class:"button large C",onClick:k[1]||(k[1]=S=>y("mp4"))},"\u4E0B\u8F7DMP4")])]),_:1},8,["show","loading"]))}});var Qa=U(Ja,[["__scopeId","data-v-44d1a161"]]);const He=e=>(Q("data-v-eac69548"),e=e(),ee(),e),eo=He(()=>f("span",null,"Pic GIF",-1)),to=He(()=>f("button",{class:"button C"},[f("a",{href:"./collage.html"},"Pic Collage")],-1)),ao={class:"left"},oo={class:"right"},io=Y({__name:"index",setup(e){const t=D([]),a=D("library"),o=D(""),s=D(),n=D(),d=D(),c=D({width:800,height:1e3,repeat:0,delay:750,background:"#FFFFFF",rule:3,quality:.5}),g=D({start:0}),m=new la,y=it("_message"),w=()=>{nt(()=>{o.value="",s.value.clearSelect(),y({type:"success",value:"\u6E05\u7406\u6210\u529F..."})})},k=u=>{t.value.push({value:u,timestamp:je()})},S=async function(){var u=d.value.getFrames();if(!u||u.length==0){y({type:"warning",value:"\u8BF7\u4ECE\u56FE\u5E93\u4E2D\u9009\u62E9\u3002"});return}y({value:"\u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u8BF7\u7B49\u5F85..."}),n.value.load();const h=await m.setOpt(c.value).setMusic(g.value).setFrame(u).toPreView().catch(C=>console.log(C));if(!(h!=null&&h.src))return;const{src:_,size_mp4:F,size_gif:b}=h;console.log(`
    size_mp4: ${Math.round(F/1024)}KB
    size_gif: ${Math.round(b/1024)}KB
  `),n.value.display(_)},G=function(u){var h=d.value.getFrames();!h||h.length==0||m.toFile(u).catch(_=>console.log(_))},M=function(u){d.value.setDropCache([...u])};return(u,h)=>(P(),O(Me,null,[x(rt,{needLog:!0},{header:j(()=>[eo]),menu:j(()=>[to]),main:j(()=>[f("div",ao,[x(pt,{selected:a.value,"onUpdate:selected":h[0]||(h[0]=_=>a.value=_)},{default:j(()=>[x(ve,{key:"library",title:"\u56FE\u5E93"},{default:j(()=>[x(vt,{ref_key:"galleryLoader",ref:s,onLog:k,onDrop:M,multiDrop:!0},null,512)]),_:1}),x(ve,{key:"music",title:"\u97F3\u4E50\u5E93"},{default:j(()=>[x(Fa,{value:g.value},null,8,["value"])]),_:1}),x(ve,{key:"setting",title:"\u8BBE\u7F6E"},{default:j(()=>[x(ha,{value:c.value},null,8,["value"])]),_:1})]),_:1},8,["selected"]),f("div",{class:"btn-group center"},[f("button",{class:"button large",onClick:S},"\u751F\u6210\u9884\u89C8")])]),f("div",oo,[f("div",{class:"btn-group right"},[f("button",{class:"button A",onClick:w},"\u6E05\u7406\u5E27")]),x(Ia,{ref_key:"frameEditor",ref:d},null,512)])]),footer:j(()=>[x(ht,{logs:t.value},null,8,["logs"])]),_:1}),x(Qa,{ref_key:"previewDialog",ref:n,ratio:c.value.width/c.value.height,onFooterClick:G},null,8,["ratio"])],64))}});var ro=U(io,[["__scopeId","data-v-eac69548"]]);const no=e=>(Q("data-v-0026c91e"),e=e(),ee(),e),so=no(()=>f("i",{class:"css-icon delete"},null,-1)),lo=[so],co=Y({__name:"Message",props:{type:{type:String,default:"info"},value:{type:String,default:""},timeout:{type:Number,default:3e3},remove:Function},setup(e){const t=e;let a;const o=D(!1);st(()=>{o.value=!0;const n=300;a=setTimeout(function(){o.value=!1,setTimeout(function(){typeof t.remove=="function"&&t.remove()},n)},t.timeout-n)});const s=()=>{typeof t.remove=="function"&&t.remove(),a&&clearTimeout(a)};return(n,d)=>(P(),O("div",{class:X(["global-message-box",o.value?"open":""])},[f("div",{class:X(["global-message-value",e.type])},ke(e.value),3),f("span",{class:"global-message-btn",onClick:s},lo)],2))}});var We=U(co,[["__scopeId","data-v-0026c91e"]]);let Te;const _e={margin:40,zIndex:1e4};let Xe=0,Ce=_e.margin,xe=[];const uo=(e,t)=>{xe.push(e),e.setAttribute("no",t.toString()),e.classList.add("global_message"),e.style.position="fixed",e.style.right=`${_e.margin}px`,e.style.zIndex=_e.zIndex.toString(),e.style.top=`${Ce}px`},fo=(e,t,a)=>{xe.forEach((o,s)=>{s>0&&(o.style.top=`${o.offsetTop-xe[s-1].offsetHeight}px`)}),Ce-=t.offsetHeight,Xe--,a&&a()},go=(e,t)=>{const a=e.getAttribute("no");if(!a)return;const o=Ge(We,fe(H({},t),{modelValue:!0,remove(){fo(parseInt(a),e,()=>{o.unmount(),document.body.removeChild(e)})}}));return o.mount(e)};function Fe(e={}){e.id=`message_${Ue()}`;const t=document.createElement("div");return uo(t,Xe++),document.body.appendChild(t),Te=go(t,e),Ce+=t.offsetHeight,Te}Fe.install=e=>{e.component("message",We),e.provide("_message",Fe)};const po=Ge(ro);po.use(Fe).mount("#app");
