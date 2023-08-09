import{_ as V,d as X,q as W,r as U,bv as N,o as I,h as $,a as v,u as J,j as P,bs as H,t as O,n as Q,F as Y,k as Z,ai as G,p as ee,e as te}from"./BaseLayout.65496372.js";const ae=["data-uploading"],ne=["id","accept","multiple"],oe={class:""},ie={class:"button large"},se=X({__name:"DropFile",props:{value:{default:()=>[]},max_size:{default:1024*10},multiple:{type:Boolean,default:!0},file_type:{default:()=>["image/jpeg","image/png","image/webp"]}},emits:["update:value","change","log"],setup(o,{emit:y}){const s=o,r=W("_message"),F=U(!1);let g=[];const d=N(),h=U(!1),m=U(0),e=U(0),t=async function(n){const p=n.target.files;await w(p)},l=function(n){n.stopPropagation(),n.preventDefault()},a=async function(n){l(n);let p=n.dataTransfer.files;await w(p),F.value=!1},u=function(n){l(n),F.value=!0},z=function(n){l(n),F.value=!1},C=function(){document.querySelector("#drop-file-core_"+d).click()},E=n=>new Promise((p,b)=>{let c=new FileReader;c.onload=()=>{if(!(event!=null&&event.target))return;const i=event==null?void 0:event.target;i.result&&typeof i.result=="string"?p(i.result):b("img empty")},c.readAsDataURL(n)}),M=async n=>new Promise((p,b)=>{const c=new Image;c.src=n,c.onload=function(){const i=document.createElement("canvas"),f=i.getContext("2d");if(!f){b("autoCropImg error.");return}i.width=c.width,i.height=c.height,f.drawImage(c,0,0);const R=f.getImageData(0,0,i.width,i.height).data;let A=i.width,S=0,L=i.height,T=0;for(let j=0;j<i.width;j++)for(let D=0;D<i.height;D++){const k=(j+i.width*D)*4;(R[k]==255||R[k+1]==255||R[k+2]==255||R[k+3]==255)&&(T=Math.max(D,T),S=Math.max(j,S),L=Math.min(D,L),A=Math.min(j,A))}A++,S++,L++,T++;const _=document.createElement("canvas");_.width=S-A,_.height=T-L;const q=_.getContext("2d");if(!q){b("autoCropImg error.");return}q.drawImage(c,A,L,_.width,_.height,0,0,_.width,_.height),p(_.toDataURL())}}),x=async n=>{if(["image/jpeg","image/png","image/webp"].includes(n.type)){const p=await E(n);return M(p)}return window.URL.createObjectURL(n)},w=async n=>{if(!n)return;let p=n.length;s.multiple||(p=1),g=s.value;const b=g.length;h.value=!0;let c=[];for(let i=0;i<p;i++){const f=n[i];if(!s.file_type.includes("*")){if(!s.file_type.includes(f.type)){r({type:"warning",value:`\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u683C\u5F0F\u4E3A\uFF1A${s.file_type}\uFF0C\u8BE5\u6587\u4EF6\u7684\u683C\u5F0F\u662F${f.type}`});return}}if(f.size>s.max_size*1e3){r({type:"warning",value:`\u5141\u8BB8\u4E0A\u4F20\u7684\u6700\u5927\u6587\u4EF6\u5927\u5C0F\u4E3A\uFF1A${s.max_size/1e3}MB`});return}c.push(i),m.value+=f.size/1e3/1e3}for(let i=0;i<c.length;i++)(async function(f){g.push({id:N(),src:await x(f),file:f,selected:!1}),e.value+=f.size/1e3/1e3,y("change",[...g]),y("update:value",[...g]),g.length==b+c.length&&(h.value=!1)})(n[c[i]])};return(n,p)=>(I(),$("div",{class:"drop-file","data-uploading":h.value},[v("input",{type:"file",id:`drop-file-core_${J(d)}`,accept:o.file_type.join(","),class:"drop-file-core",multiple:o.multiple,onChange:t},null,40,ne),v("div",{class:Q(["drop-file-box",[F.value?"drop-in":""]]),onDrop:a,onDragenter:u,onDragleave:z,onDragover:l,onClick:C},[v("div",oe,[P(v("button",ie,"\u70B9\u51FB\u4E0A\u4F20",512),[[H,!h.value]]),P(v("span",null,"\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF",512),[[H,!h.value]]),P(v("p",null," \u5B8C\u6210\u8FDB\u5EA6\uFF1A"+O((e.value/m.value*100).toFixed(1))+"% ",513),[[H,h.value]]),v("i",null,O(e.value.toFixed(1))+"MB / "+O(m.value.toFixed(1))+"MB",1)])],34)],8,ae))}});var ge=V(se,[["__scopeId","data-v-7774164e"]]),B=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ve(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function he(o){if(o.__esModule)return o;var y=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(o).forEach(function(s){var r=Object.getOwnPropertyDescriptor(o,s);Object.defineProperty(y,s,r.get?r:{enumerable:!0,get:function(){return o[s]}})}),y}var re={exports:{}};(function(o,y){(function(s,r){r()})(B,function(){function s(e,t){return typeof t=="undefined"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function r(e,t,l){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){m(a.response,t,l)},a.onerror=function(){console.error("could not download file")},a.send()}function F(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function g(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof B=="object"&&B.global===B?B:void 0,h=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(e,t,l){var a=d.URL||d.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener",typeof e=="string"?(u.href=e,u.origin===location.origin?g(u):F(u.href)?r(e,t,l):g(u,u.target="_blank")):(u.href=a.createObjectURL(e),setTimeout(function(){a.revokeObjectURL(u.href)},4e4),setTimeout(function(){g(u)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,l){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(s(e,l),t);else if(F(e))r(e,t,l);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){g(a)})}}:function(e,t,l,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof e=="string")return r(e,t,l);var u=e.type==="application/octet-stream",z=/constructor/i.test(d.HTMLElement)||d.safari,C=/CriOS\/[\d]+/.test(navigator.userAgent);if((C||u&&z||h)&&typeof FileReader!="undefined"){var E=new FileReader;E.onloadend=function(){var w=E.result;w=C?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=w:location=w,a=null},E.readAsDataURL(e)}else{var M=d.URL||d.webkitURL,x=M.createObjectURL(e);a?a.location=x:location.href=x,a=null,setTimeout(function(){M.revokeObjectURL(x)},4e4)}});d.saveAs=m.saveAs=m,o.exports=m})})(re);const K=o=>(ee("data-v-a2de274a"),o=o(),te(),o),le={id:"log"},ue=K(()=>v("h3",{class:"title"},"\u65E5\u5FD7\uFF1A",-1)),ce={class:"log-mes"},de=K(()=>v("br",null,null,-1)),pe=X({__name:"Log",props:{logs:null},setup(o){return(y,s)=>(I(),$("div",le,[ue,v("div",ce,[v("ul",null,[(I(!0),$(Y,null,Z(o.logs,r=>(I(),$("li",{key:r.timestamp},[G(O(r.timestamp)+" ",1),de,G(" "+O(r.value),1)]))),128))])])]))}});var me=V(pe,[["__scopeId","data-v-a2de274a"]]);export{ge as D,re as F,me as L,ve as a,B as c,he as g};
