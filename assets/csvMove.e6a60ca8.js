var Le=Object.defineProperty;var we=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Se=(N,z,T)=>z in N?Le(N,z,{enumerable:!0,configurable:!0,writable:!0,value:T}):N[z]=T,xe=(N,z)=>{for(var T in z||(z={}))De.call(z,T)&&Se(N,T,z[T]);if(we)for(var T of we(z))Be.call(z,T)&&Se(N,T,z[T]);return N};import{_ as Ue,d as Ve,r as he,q as Pe,o as be,c as Me,w as Ce,a as D,t as _e,i as Ae,u as Ne,j as ze,br as Ke,h as Te,k as qe,F as Ge,b as je,p as He,e as We,ai as Ee,f as Qe,M as $e}from"./BaseLayout.fcf2b1f3.js";import{c as Je,D as Ze,L as Ye,F as Xe}from"./Log.e0a01580.js";var Re={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(N,z){(function(T,g){N.exports=g()})(Je,function T(){var g=typeof self!="undefined"?self:typeof window!="undefined"?window:g!==void 0?g:{},K=!g.document&&!!g.postMessage,ve=g.IS_PAPA_WORKER||!1,Y={},ue=0,c={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(_(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!_(e.transform)&&e.transform,e.worker&&c.WORKERS_SUPPORTED){var n=function(){if(!c.WORKERS_SUPPORTED)return!1;var h=(B=g.URL||g.webkitURL||null,E=T.toString(),c.BLOB_URL||(c.BLOB_URL=B.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",E,")();"],{type:"text/javascript"})))),f=new g.Worker(h),B,E;return f.onmessage=F,f.id=ue++,Y[f.id]=f}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=_(e.step),e.chunk=_(e.chunk),e.complete=_(e.complete),e.error=_(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var a=null;return c.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),a=e.download?new de(e):new ie(e)):t.readable===!0&&_(t.read)&&_(t.on)?a=new pe(e):(g.File&&t instanceof File||t instanceof Object)&&(a=new fe(e)),a.stream(t)},unparse:function(t,e){var r=!1,n=!0,a=",",h=`\r
`,f='"',B=f+f,E=!1,s=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||c.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(a=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(E=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(f=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");s=e.columns}e.escapeChar!==void 0&&(B=e.escapeChar+f),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var l=new RegExp(G(f),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return J(null,t,E);if(typeof t[0]=="object")return J(s||Object.keys(t[0]),t,E)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||s),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),J(t.fields||[],t.data||[],E);throw new Error("Unable to serialize unrecognized input");function J(i,k,P){var O="";typeof i=="string"&&(i=JSON.parse(i)),typeof k=="string"&&(k=JSON.parse(k));var U=Array.isArray(i)&&0<i.length,R=!Array.isArray(k[0]);if(U&&n){for(var L=0;L<i.length;L++)0<L&&(O+=a),O+=V(i[L],L);0<k.length&&(O+=h)}for(var o=0;o<k.length;o++){var p=U?i.length:k[o].length,b=!1,A=U?Object.keys(k[o]).length===0:k[o].length===0;if(P&&!U&&(b=P==="greedy"?k[o].join("").trim()==="":k[o].length===1&&k[o][0].length===0),P==="greedy"&&U){for(var m=[],M=0;M<p;M++){var S=R?i[M]:M;m.push(k[o][S])}b=m.join("").trim()===""}if(!b){for(var y=0;y<p;y++){0<y&&!A&&(O+=a);var Z=U&&R?i[y]:y;O+=V(k[o][Z],y)}o<k.length-1&&(!P||0<p&&!A)&&(O+=h)}}return O}function V(i,k){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var P=!1;w&&typeof i=="string"&&w.test(i)&&(i="'"+i,P=!0);var O=i.toString().replace(l,B);return(P=P||r===!0||typeof r=="function"&&r(i,k)||Array.isArray(r)&&r[k]||function(U,R){for(var L=0;L<R.length;L++)if(-1<U.indexOf(R[L]))return!0;return!1}(O,c.BAD_DELIMITERS)||-1<O.indexOf(a)||O.charAt(0)===" "||O.charAt(O.length-1)===" ")?f+O+f:O}}};if(c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!K&&!!g.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=I,c.ParserHandle=me,c.NetworkStreamer=de,c.FileStreamer=fe,c.StringStreamer=ie,c.ReadableStreamStreamer=pe,g.jQuery){var ne=g.jQuery;ne.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(ne(this).prop("tagName").toUpperCase()==="INPUT"&&ne(this).attr("type").toLowerCase()==="file"&&g.FileReader)||!this.files||this.files.length===0)return!0;for(var f=0;f<this.files.length;f++)r.push({file:this.files[f],inputElem:this,instanceConfig:ne.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,f,B,E,s=r[0];if(_(t.before)){var w=t.before(s.file,s.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",f=s.file,B=s.inputElem,E=w.reason,void(_(t.error)&&t.error({name:h},f,B,E));if(w.action==="skip")return void a();typeof w.config=="object"&&(s.instanceConfig=ne.extend(s.instanceConfig,w.config))}else if(w==="skip")return void a()}var l=s.instanceConfig.complete;s.instanceConfig.complete=function(J){_(l)&&l(J,s.file,s.inputElem),a()},c.parse(s.file,s.instanceConfig)}else _(t.complete)&&t.complete()}function a(){r.splice(0,1),n()}}}function q(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var r=$(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new me(r),(this._handle.streamer=this)._config=r}.call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&_(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var h=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var f=h.meta.cursor;this._finished||(this._partialLine=a.substring(f-this._baseIndex),this._baseIndex=f),h&&h.data&&(this._rowCount+=h.data.length);var B=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(ve)g.postMessage({results:h,workerId:c.WORKER_ID,finished:B});else if(_(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!B||!_(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),B||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){_(this._config.error)?this._config.error(e):ve&&this._config.error&&g.postMessage({workerId:c.WORKER_ID,error:e,finished:!1})}}function de(t){var e;(t=t||{}).chunkSize||(t.chunkSize=c.RemoteChunkSize),q.call(this,t),this._nextChunk=K?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),K||(e.onload=u(this._chunkLoaded,this),e.onerror=u(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!K),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var a=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+a)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}K&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function fe(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=c.LocalChunkSize),q.call(this,t);var n=typeof FileReader!="undefined";this.stream=function(a){this._input=a,r=a.slice||a.webkitSlice||a.mozSlice,n?((e=new FileReader).onload=u(this._chunkLoaded,this),e.onerror=u(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);a=r.call(a,this._start,h)}var f=e.readAsText(a,this._config.encoding);n||this._chunkLoaded({target:{result:f}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ie(t){var e;q.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function pe(t){q.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){q.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){q.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=u(function(a){try{e.push(typeof a=="string"?a:a.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=u(function(a){this._streamCleanUp(),this._sendError(a)},this),this._streamEnd=u(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=u(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function me(t){var e,r,n,a=Math.pow(2,53),h=-a,f=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,B=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,E=this,s=0,w=0,l=!1,J=!1,V=[],i={data:[],errors:[],meta:{}};if(_(t.step)){var k=t.step;t.step=function(o){if(i=o,U())O();else{if(O(),i.data.length===0)return;s+=o.data.length,t.preview&&s>t.preview?r.abort():(i.data=i.data[0],k(i,E))}}}function P(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function O(){return i&&n&&(L("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!P(o)})),U()&&function(){if(!i)return;function o(b,A){_(t.transformHeader)&&(b=t.transformHeader(b,A)),V.push(b)}if(Array.isArray(i.data[0])){for(var p=0;U()&&p<i.data.length;p++)i.data[p].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(b,A){var m,M=t.header?{}:[];for(m=0;m<b.length;m++){var S=m,y=b[m];t.header&&(S=m>=V.length?"__parsed_extra":V[m]),t.transform&&(y=t.transform(y,S)),y=R(S,y),S==="__parsed_extra"?(M[S]=M[S]||[],M[S].push(y)):M[S]=y}return t.header&&(m>V.length?L("FieldMismatch","TooManyFields","Too many fields: expected "+V.length+" fields but parsed "+m,w+A):m<V.length&&L("FieldMismatch","TooFewFields","Too few fields: expected "+V.length+" fields but parsed "+m,w+A)),M}var p=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),p=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=V),w+=p,i}()}function U(){return t.header&&V.length===0}function R(o,p){return b=o,t.dynamicTypingFunction&&t.dynamicTyping[b]===void 0&&(t.dynamicTyping[b]=t.dynamicTypingFunction(b)),(t.dynamicTyping[b]||t.dynamicTyping)===!0?p==="true"||p==="TRUE"||p!=="false"&&p!=="FALSE"&&(function(A){if(f.test(A)){var m=parseFloat(A);if(h<m&&m<a)return!0}return!1}(p)?parseFloat(p):B.test(p)?new Date(p):p===""?null:p):p;var b}function L(o,p,b,A){var m={type:o,code:p,message:b};A!==void 0&&(m.row=A),i.errors.push(m)}this.parse=function(o,p,b){var A=t.quoteChar||'"';if(t.newline||(t.newline=function(S,y){S=S.substring(0,1048576);var Z=new RegExp(G(y)+"([^]*?)"+G(y),"gm"),j=(S=S.replace(Z,"")).split("\r"),ee=S.split(`
`),te=1<ee.length&&ee[0].length<j[0].length;if(j.length===1||te)return`
`;for(var H=0,C=0;C<j.length;C++)j[C][0]===`
`&&H++;return H>=j.length/2?`\r
`:"\r"}(o,A)),n=!1,t.delimiter)_(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var m=function(S,y,Z,j,ee){var te,H,C,x;ee=ee||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var le=0;le<ee.length;le++){var v=ee[le],ge=0,re=0,ce=0;C=void 0;for(var ae=new I({comments:j,delimiter:v,newline:y,preview:10}).parse(S),se=0;se<ae.data.length;se++)if(Z&&P(ae.data[se]))ce++;else{var oe=ae.data[se].length;re+=oe,C!==void 0?0<oe&&(ge+=Math.abs(oe-C),C=oe):C=oe}0<ae.data.length&&(re/=ae.data.length-ce),(H===void 0||ge<=H)&&(x===void 0||x<re)&&1.99<re&&(H=ge,te=v,x=re)}return{successful:!!(t.delimiter=te),bestDelimiter:te}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);m.successful?t.delimiter=m.bestDelimiter:(n=!0,t.delimiter=c.DefaultDelimiter),i.meta.delimiter=t.delimiter}var M=$(t);return t.preview&&t.header&&M.preview++,e=o,r=new I(M),i=r.parse(e,p,b),O(),l?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),e=_(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){E.streamer._halted?(l=!1,E.streamer.parseChunk(e,!0)):setTimeout(E.resume,3)},this.aborted=function(){return J},this.abort=function(){J=!0,r.abort(),i.meta.aborted=!0,_(t.complete)&&t.complete(i),e=""}}function G(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function I(t){var e,r=(t=t||{}).delimiter,n=t.newline,a=t.comments,h=t.step,f=t.preview,B=t.fastMode,E=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(E=t.escapeChar),(typeof r!="string"||-1<c.BAD_DELIMITERS.indexOf(r))&&(r=","),a===r)throw new Error("Comment character same as delimiter");a===!0?a="#":(typeof a!="string"||-1<c.BAD_DELIMITERS.indexOf(a))&&(a=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var s=0,w=!1;this.parse=function(l,J,V){if(typeof l!="string")throw new Error("Input must be a string");var i=l.length,k=r.length,P=n.length,O=a.length,U=_(h),R=[],L=[],o=[],p=s=0;if(!l)return W();if(t.header&&!J){var b=l.split(n)[0].split(r),A=[],m={},M=!1;for(var S in b){var y=b[S];_(t.transformHeader)&&(y=t.transformHeader(y,S));var Z=y,j=m[y]||0;for(0<j&&(M=!0,Z=y+"_"+j),m[y]=j+1;A.includes(Z);)Z=Z+"_"+j;A.push(Z)}if(M){var ee=l.split(n);ee[0]=A.join(r),l=ee.join(n)}}if(B||B!==!1&&l.indexOf(e)===-1){for(var te=l.split(n),H=0;H<te.length;H++){if(o=te[H],s+=o.length,H!==te.length-1)s+=n.length;else if(V)return W();if(!a||o.substring(0,O)!==a){if(U){if(R=[],ce(o.split(r)),ye(),w)return W()}else ce(o.split(r));if(f&&f<=H)return R=R.slice(0,f),W(!0)}}return W()}for(var C=l.indexOf(r,s),x=l.indexOf(n,s),le=new RegExp(G(E)+G(e),"g"),v=l.indexOf(e,s);;)if(l[s]!==e)if(a&&o.length===0&&l.substring(s,s+O)===a){if(x===-1)return W();s=x+P,x=l.indexOf(n,s),C=l.indexOf(r,s)}else if(C!==-1&&(C<x||x===-1))o.push(l.substring(s,C)),s=C+k,C=l.indexOf(r,s);else{if(x===-1)break;if(o.push(l.substring(s,x)),oe(x+P),U&&(ye(),w))return W();if(f&&R.length>=f)return W(!0)}else for(v=s,s++;;){if((v=l.indexOf(e,v+1))===-1)return V||L.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:R.length,index:s}),se();if(v===i-1)return se(l.substring(s,v).replace(le,e));if(e!==E||l[v+1]!==E){if(e===E||v===0||l[v-1]!==E){C!==-1&&C<v+1&&(C=l.indexOf(r,v+1)),x!==-1&&x<v+1&&(x=l.indexOf(n,v+1));var ge=ae(x===-1?C:Math.min(C,x));if(l.substr(v+1+ge,k)===r){o.push(l.substring(s,v).replace(le,e)),l[s=v+1+ge+k]!==e&&(v=l.indexOf(e,s)),C=l.indexOf(r,s),x=l.indexOf(n,s);break}var re=ae(x);if(l.substring(v+1+re,v+1+re+P)===n){if(o.push(l.substring(s,v).replace(le,e)),oe(v+1+re+P),C=l.indexOf(r,s),v=l.indexOf(e,s),U&&(ye(),w))return W();if(f&&R.length>=f)return W(!0);break}L.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:R.length,index:s}),v++}}else v++}return se();function ce(Q){R.push(Q),p=s}function ae(Q){var Fe=0;if(Q!==-1){var ke=l.substring(v+1,Q);ke&&ke.trim()===""&&(Fe=ke.length)}return Fe}function se(Q){return V||(Q===void 0&&(Q=l.substring(s)),o.push(Q),s=i,ce(o),U&&ye()),W()}function oe(Q){s=Q,ce(o),o=[],x=l.indexOf(n,s)}function W(Q){return{data:R,errors:L,meta:{delimiter:r,linebreak:n,aborted:w,truncated:!!Q,cursor:p+(J||0)}}}function ye(){h(W()),R=[],L=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return s}}function F(t){var e=t.data,r=Y[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var a={abort:function(){n=!0,d(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:X,resume:X};if(_(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},a),!n);h++);delete e.results}else _(r.userChunk)&&(r.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!n&&d(e.workerId,e.results)}function d(t,e){var r=Y[t];_(r.userComplete)&&r.userComplete(e),r.terminate(),delete Y[t]}function X(){throw new Error("Not implemented.")}function $(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=$(t[r]);return e}function u(t,e){return function(){t.apply(e,arguments)}}function _(t){return typeof t=="function"}return ve&&(g.onmessage=function(t){var e=t.data;if(c.WORKER_ID===void 0&&e&&(c.WORKER_ID=e.workerId),typeof e.input=="string")g.postMessage({workerId:c.WORKER_ID,results:c.parse(e.input,e.config),finished:!0});else if(g.File&&e.input instanceof File||e.input instanceof Object){var r=c.parse(e.input,e.config);r&&g.postMessage({workerId:c.WORKER_ID,results:r,finished:!0})}}),(de.prototype=Object.create(q.prototype)).constructor=de,(fe.prototype=Object.create(q.prototype)).constructor=fe,(ie.prototype=Object.create(ie.prototype)).constructor=ie,(pe.prototype=Object.create(q.prototype)).constructor=pe,c})})(Re);var Ie=Re.exports;const Oe=N=>(He("data-v-20386cf8"),N=N(),We(),N),et=Oe(()=>D("span",null,"\u5546\u54C1\u8FC1\u79FB\u5DE5\u5177",-1)),tt={class:"center"},rt=Oe(()=>D("h3",null,"\u5546\u54C1\u8FC1\u79FB\u5DE5\u5177",-1)),nt={class:"filsList"},it={class:"form"},at={class:"form-item"},st=Ee(" \u4E0A\u4F20\u7684\u6587\u4EF6\u4E3A "),ot=Ee(" \u5546\u54C1\u6570\u636E\uFF0C "),ut=Oe(()=>D("br",null,null,-1)),lt=Ee(" \u8BF7\u9009\u62E9\u60F3\u5BFC\u51FA\u7684\u5E73\u53F0\uFF1A "),ct=["value","disabled"],ht={class:"btn-group center"},dt=Ve({__name:"index",setup(N){const z=he([]),T=Pe("_message"),g=he([{name:"shopline",value:"shopline"},{name:"shopify",value:"shopify"}]),K=he(g.value[0].value),ve=()=>{},Y=he([]),ue=he("--"),c=he("--"),ne=he("0");let q=[];const de=async G=>{const I=xe({},[...Y.value][0]).file,F=new RegExp("^.+?([^]+?)(.[^.]*?)?$","gi");c.value=I.name.replace(F,"$1"),ne.value=(I.size/1e3).toFixed(0);const d=await fe(I),X=d[0];if(Object.keys(X).includes("Product description html"))ue.value=g.value[0].value;else if(Object.keys(X).includes("Body (HTML)"))ue.value=g.value[1].value;else return T({type:"warning",value:"\u4E0A\u4F20\u7684\u6587\u4EF6\u672A\u88AB\u8BC6\u522B\uFF0C\u8BF7\u8054\u7CFB\u535A\u4E3B..."}),Y.value=[],!1;K.value=g.value.filter($=>$.value!=ue.value)[0].value,Y.value=[],q=d},fe=async G=>new Promise((I,F)=>{Ie.parse(G,{dynamicTyping:!1,complete:d=>{const X=[],$=d.data[0];d.data.forEach((u,_)=>{if(_>0&&u.length==$.length){const t={};$.forEach((e,r)=>{t[e]=(u[r]||"").replace(/\t/g,"")}),X.push(t)}}),I(X)},error:d=>{T({type:"warning",value:"\u4E0A\u4F20\u7684\u6587\u4EF6\u672A\u88AB\u8BC6\u522B\uFF0C\u8BF7\u8054\u7CFB\u535A\u4E3B..."})}})}),ie=["Handle","Title","Body (HTML)","Vendor","Product Category","Type","Tags","Published","Option1 Name","Option1 Value","Option2 Name","Option2 Value","Option3 Name","Option3 Value","Option4 Name","Option4 Value","Variant SKU","Variant Grams","Variant Inventory Tracker","Variant Inventory Qty","Variant Inventory Policy","Variant Fulfillment Service","Variant Price","Variant Compare At Price","Variant Requires Shipping","Variant Taxable","Variant Barcode","Image Src","Image Position","Image Alt Text","Gift Card","SEO Title","SEO Description","Google Shopping / Google Product Category","Google Shopping / Gender","Google Shopping / Age Group","Google Shopping / MPN","Google Shopping / Condition","Google Shopping / Custom Product","Google Shopping / Custom Label 0","Google Shopping / Custom Label 1","Google Shopping / Custom Label 2","Google Shopping / Custom Label 3","Google Shopping / Custom Label 4","Variant Image","Variant Weight Unit","Variant Tax Code","Cost per item"];function pe(G,I){let F={fields:[],data:[]};switch(I){case"shopline":break;case"shopify":F.fields=ie,F.data=G.map((d,X)=>ie.map($=>{let u="";switch($){case"Title":u=d["Title*"];break;case"Body (HTML)":u=d["Product description html"];break;case"Product Category":u=d.Collections;break;case"Published":u="TRUE";break;case"Option1 Name":u=d["Option1 name"];break;case"Option1 Value":u=d["Option1 value"];break;case"Option2 Name":u=d["Option2 name"];break;case"Option2 Value":u=d["Option2 value"];break;case"Option3 Name":u=d["Option3 name"];break;case"Option3 Value":u=d["Option3 value"];break;case"Option4 Name":u=d["Option4 name"];break;case"Option4 Value":u=d["Option4 value"];break;case"Variant SKU":u=d.SKU;break;case"Variant Grams":u="300";break;case"Variant Inventory Tracker":u="shopify";break;case"Variant Inventory Qty":u=d["SKU Inventory Quantity"]&&d["SKU Inventory Quantity"]!=0?d["SKU Inventory Quantity"]:"500";break;case"Variant Inventory Policy":u="continue";break;case"Variant Fulfillment Service":u="manual";break;case"Variant Price":u=d["SKU price"];break;case"Variant Compare At Price":u=d["SKU compare at price"]&&d["SKU compare at price"]!="0"?d["SKU compare at price"]:d["SKU price"];break;case"Variant Requires Shipping":u="TRUE";break;case"Variant Taxable":u="FALSE";break;case"Variant Barcode":u=d["Barcode (ISBN,UPC,GTIN,etc.)"];break;case"Image Src":u=d["Master image"];break;case"Image Position":u=d["Master image"]?(X+1).toString():"";break;case"Image Alt Text":u=d["Title*"]+d.Tags;break;case"Gift Card":u="FALSE";break;case"SEO Title":u=d["SEO title"];break;case"SEO Description":u=d["SEO description"];break;case"Variant Image":u=d.Image;break;case"Variant Weight Unit":u="g";break;default:u=d[$];break}return u&&u!=""?u:""}));break}return F}const me=async()=>{if(q.length===0)return T({type:"error",value:"\u6570\u636E\u4E3A\u7A7A\uFF01"}),!1;const G=pe(q,K.value),I=Ie.unparse(G),F="\uFEFF",d=new Blob([F+I],{type:"text/csv;charset=utf-8;"});await Xe.exports.saveAs(d,`${K.value}-${c.value}.csv`),console.log(`${K.value}-${c.value}.csv`),T({type:"success",value:"\u4E0B\u8F7D\u6210\u529F..."})};return(G,I)=>(be(),Me(je,null,{header:Ce(()=>[et]),main:Ce(()=>[D("div",tt,[D("header",null,[rt,D("p",null," \u73B0\u5DF2\u652F\u6301\uFF1A "+_e(g.value.map(F=>F.name.toLocaleUpperCase()).join("\u3001"))+" \u5E73\u53F0\u4E92\u76F8\u5BFC\u5165\u5BFC\u51FA ",1)]),D("div",null,[Ae(Ne(Ze),{value:Y.value,"onUpdate:value":I[0]||(I[0]=F=>Y.value=F),max_size:1024*50,onChange:de,ref:"dropFile",multiple:!1,file_type:["text/csv"]},null,8,["value"])]),D("ul",nt,[D("li",null,[D("span",null,_e(c.value),1),D("span",null,_e(ne.value)+"KB",1)])]),D("div",it,[D("div",at,[D("span",null,[st,D("strong",null,_e(ue.value),1),ot,ut,lt]),ze(D("select",{onChange:ve,"onUpdate:modelValue":I[1]||(I[1]=F=>K.value=F)},[(be(!0),Te(Ge,null,qe(g.value,F=>(be(),Te("option",{key:F.value,value:F.value,disabled:F.value===ue.value},_e(F.name.toLocaleUpperCase()),9,ct))),128))],544),[[Ke,K.value]])])]),D("div",ht,[D("button",{class:"button D large",onClick:me}," \u5BFC\u51FA"+_e(K.value.toLocaleUpperCase()),1)])])]),footer:Ce(()=>[Ae(Ye,{logs:z.value},null,8,["logs"])]),_:1}))}});var ft=Ue(dt,[["__scopeId","data-v-20386cf8"]]);Qe(ft).use($e).mount("#app");
