(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{654:function(v,_,t){"use strict";t.r(_);var a=t(11),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("由于工作中项目"),t("code",[v._v("orderplus-cloud")]),v._v("是Java的Spring框架，velocity模版引擎等技术，前后端没有分离，前端环境使用十分繁琐，且代码不易管理，领导让我寻找合适的前后端分离方案。")]),v._v(" "),t("h2",{attrs:{id:"渲染方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染方案"}},[v._v("#")]),v._v(" 渲染方案")]),v._v(" "),t("blockquote",[t("p",[v._v("多站点思路渲染商城用户端，部署一套代码，针对不同的站点渲染不同的样式\n要求：一次部署、样式可配置、")])]),v._v(" "),t("h3",{attrs:{id:"服务器渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器渲染"}},[v._v("#")]),v._v(" 服务器渲染")]),v._v(" "),t("p",[v._v("思路：页面由后台渲染，用户在管理后台选择皮肤，当顾客访问站点时，请求到后台拼接后的结果DOM。")]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[v._v("相对较快，但服务器压力较大；")]),v._v(" "),t("li",[v._v("当单页面商品数据较大时，传输速度较慢；")]),v._v(" "),t("li",[v._v("无法实现无感翻页；")]),v._v(" "),t("li",[v._v("繁琐，需要使用传统的模板语法开发，前端不可独立上线；")]),v._v(" "),t("li",[v._v("解决SEO问题；")])]),v._v(" "),t("h3",{attrs:{id:"前端管渲染-后台管模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端管渲染-后台管模板"}},[v._v("#")]),v._v(" 前端管渲染，后台管模板")]),v._v(" "),t("p",[v._v("思路：页面由前端渲染，需要从后台获取商品数据、模板数据。")]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[v._v("服务器压力相对较小；")]),v._v(" "),t("li",[v._v("页面由无数模板组成，高度自定义；")]),v._v(" "),t("li",[v._v("无法解决SEO问题，如果每个站点独立部署，可以针对站点做SEO，但无法对列表、商品做SEO；")]),v._v(" "),t("li",[v._v("模板代码由管理后台保存，可以不用上线、实时修改，但改模板影响范围较大，不易控制；")]),v._v(" "),t("li",[v._v("页面由模块组成，模块由模板、商品、图片组成，导致需要对每层绑定数量做强管理，如果由用户自行管理数量，容易影响顾客访问时，网页的响应速度")])]),v._v(" "),t("h3",{attrs:{id:"前端管渲染与模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端管渲染与模板"}},[v._v("#")]),v._v(" 前端管渲染与模板")]),v._v(" "),t("p",[v._v("思路：前端渲染，后台配置皮肤，类似服务器渲染。")]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[v._v("无法解决SEO")]),v._v(" "),t("li",[v._v("开发、上线相对较简单，可独立上线。相比配置模板，更繁琐")])]),v._v(" "),t("h2",{attrs:{id:"框架选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架选择"}},[v._v("#")]),v._v(" 框架选择")]),v._v(" "),t("p",[v._v("现状：已有代码为velocity语法、代码量超多（迭代6年多）")]),v._v(" "),t("p",[v._v("需求：seo、node中台响应速度需要在80ms内")]),v._v(" "),t("h3",{attrs:{id:"可选框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选框架"}},[v._v("#")]),v._v(" 可选框架")]),v._v(" "),t("p",[v._v("Express 最基本的选择，但是约束太少，不适合企业项目")]),v._v(" "),t("p",[v._v("Koa 洋葱模型，但是功能需要找插件")]),v._v(" "),t("p",[v._v("Egg.js koa再封装，功能比较完善")]),v._v(" "),t("p",[v._v("Nuxt.js/Next.js 使用Vue或React，入门稍复杂，迁移太过繁琐")]),v._v(" "),t("p",[v._v("等等···")]),v._v(" "),t("h3",{attrs:{id:"我的选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我的选择"}},[v._v("#")]),v._v(" 我的选择")]),v._v(" "),t("p",[v._v("Egg.js")]),v._v(" "),t("p",[v._v("优点：基于Koa 性能优异，插件机制且插件有很多可以满足项目需求，部署内置多进程管理，测试稳定性高等")])])}),[],!1,null,null,null);_.default=s.exports}}]);