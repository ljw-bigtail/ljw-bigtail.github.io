var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var C=(n,s,l)=>s in n?S(n,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[s]=l,F=(n,s)=>{for(var l in s||(s={}))U.call(s,l)&&C(n,l,s[l]);if(b)for(var l of b(s))$.call(s,l)&&C(n,l,s[l]);return n};import{_ as M,d as P,r as v,q as V,o as m,c as z,w as y,a,t as f,i as x,u as N,j as R,br as q,h as _,k as B,F as L,b as H,p as K,e as O,g as G,f as J,M as Q}from"./BaseLayout.1b913913.js";import{D as W,L as X,F as Y}from"./Log.63222a4b.js";const w=n=>(K("data-v-dc203788"),n=n(),O(),n),Z=w(()=>a("span",null,"\u683C\u5F0F\u8F6C\u6362",-1)),ee={class:"center"},ae=w(()=>a("h3",null,"\u56FE\u7247\u683C\u5F0F\u8F6C\u6362",-1)),te={class:"form"},ne={class:"form-item"},se=w(()=>a("span",null,"\u8BF7\u9009\u62E9\u60F3\u83B7\u53D6\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A",-1)),le=["value","disabled"],oe={class:"filsList"},ue={class:"btn-group center"},ie=P({__name:"index",setup(n){const s=v([]),l=V("_message"),r=v([{name:"jpg/jpeg",value:"jpg",fileType:"image/jpeg"},{name:"png",value:"png",fileType:"image/png"},{name:"bmp",value:"bmp",fileType:"image/bmp"},{name:"webp",value:"webp",fileType:"image/webp"}]),c=v(r.value[0].value),T=()=>{},g=v([]),h=v(""),D=o=>{h.value=F({},[...o][0]).file.type,c.value=r.value.filter(t=>t.fileType!==h.value)[0].value},E=async o=>new Promise((t,e)=>{const u=new FileReader;u.readAsDataURL(o),u.onload=function(){typeof u.result=="string"?t(u.result):e("File Error!")}}),j=async(o,t,e)=>new Promise(function(u,i){o.toBlob(function(d){d?u(d):i("\u6570\u636E\u5F02\u5E38")},t,e)}),k=async(o,t)=>new Promise((e,u)=>{const i=document.createElement("canvas"),d=i.getContext("2d");if(!d)return;const p=new Image;p.src=o,p.onload=async function(){i.width=p.width,i.height=p.height,d.drawImage(p,0,0);const A=await j(i,t,1);e(A)}}),I=async()=>{const{file:o}=F({},[...g.value][0]),t=await E(o),e=r.value.find(i=>i.value==c.value);if(!e)return;const u=await k(t,e.fileType);await Y.exports.saveAs(u,`${o.name}-${G()}.${e.value}`),l({type:"success",value:"\u4E0B\u8F7D\u6210\u529F..."})};return(o,t)=>(m(),z(H,null,{header:y(()=>[Z]),main:y(()=>[a("div",ee,[a("header",null,[ae,a("p",null," \u73B0\u5DF2\u652F\u6301\uFF1A "+f(r.value.map(e=>e.name.toLocaleUpperCase()).join("\u3001"))+" \u683C\u5F0F ",1)]),a("div",null,[x(N(W),{value:g.value,"onUpdate:value":t[0]||(t[0]=e=>g.value=e),max_size:1024*10,onChange:D,ref:"dropFile",multiple:!1,file_type:r.value.map(e=>e.fileType)},null,8,["value","file_type"])]),a("div",te,[a("div",ne,[se,R(a("select",{onChange:T,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e)},[(m(!0),_(L,null,B(r.value,e=>(m(),_("option",{key:e.value,value:e.value,disabled:h.value===e.fileType},f(e.name.toLocaleUpperCase()),9,le))),128))],544),[[q,c.value]])]),a("ul",oe,[(m(!0),_(L,null,B(g.value,e=>(m(),_("li",null,[a("span",null,f(e.file.name),1),a("span",null,f((e.file.size/1e3).toFixed(0))+"KB",1)]))),256))])]),a("div",ue,[a("button",{class:"button D large",onClick:I}," \u4E0B\u8F7D"+f(c.value.toLocaleUpperCase()),1)])])]),footer:y(()=>[x(X,{logs:s.value},null,8,["logs"])]),_:1}))}});var re=M(ie,[["__scopeId","data-v-dc203788"]]);J(re).use(Q).mount("#app");
