(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{599:function(e,s,t){"use strict";t.r(s);var r=t(10),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("回忆一下毕业设计中用到的知识点，并与现在做的进行对比，找出以后写代码时需要注意的地方")]),e._v(" "),t("p",[e._v("由于毕业设计需要具体实现，但我并不想用jsp的方式去套模板。所以， 我想还是应该看一下Express，因为这个框架可以让我使用点击跳转的功能（路由），实现为一个APP，而不仅仅是静态的确实功能的页面。")]),e._v(" "),t("h2",{attrs:{id:"express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[e._v("#")]),e._v(" Express")]),e._v(" "),t("h3",{attrs:{id:"路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),t("p",[t("strong",[e._v("Express")]),e._v('是基于Node.js环境来实现WebApp的比较好的一种选择，而他其中最重要的就是**"路由(Route)"**。')]),e._v(" "),t("p",[e._v("语法："),t("code",[e._v("app.METHOD (PATH , HANDLER)")]),e._v(" 。")]),e._v(" "),t("p",[e._v("METHOD是HTTP请求，例如get/post/put/delete请求；PATH是服务器路径（字符串/正则），就是浏览页面时的路径；HANDLER是执行函数，传入了request/response两个参数以调节页面内容。")]),e._v(" "),t("h4",{attrs:{id:"路由请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由请求"}},[e._v("#")]),e._v(" 路由请求")]),e._v(" "),t("p",[e._v("Express 定义了如下和 HTTP 请求对应的路由方法： get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。")]),e._v(" "),t("h4",{attrs:{id:"静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[e._v("#")]),e._v(" 静态资源")]),e._v(" "),t("p",[e._v("页面的静态资源还需要手动配置，例如图片、css、javascript等。")]),e._v(" "),t("p",[e._v("语法："),t("code",[e._v("app.use(express.static('public'));")]),e._v("。\n"),t("em",[e._v("访问的时候直接访问public内的路径即可（相对）。")])]),e._v(" "),t("p",[e._v("另外，静态资源加载的方法可以调用多次，也可以虚拟一个路径来方便管理"),t("code",[e._v("app.use('static', express.static('public'));")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),t("h4",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[e._v("#")]),e._v(" 数据库")]),e._v(" "),t("p",[e._v("express不包含连接数据库的模块，安装mongoose，使用它的"),t("code",[e._v("mongoose.connect")]),e._v("即可解决这个问题。")]),e._v(" "),t("h4",{attrs:{id:"登录验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录验证"}},[e._v("#")]),e._v(" 登录验证")]),e._v(" "),t("p",[e._v("express不包含，之后会注意一下可以用那些模块。")]),e._v(" "),t("h4",{attrs:{id:"_404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_404"}},[e._v("#")]),e._v(" 404")]),e._v(" "),t("p",[e._v("404页应该添加一个对应的中间件。\n"),t("code",[e._v("app.use(function(req, res, next){ res.status(404).send('Sorry can not find that!'); });")])]),e._v(" "),t("h4",{attrs:{id:"错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[e._v("#")]),e._v(" 错误处理")]),e._v(" "),t("p",[t("code",[e._v("app.use(function(err, req, res, next){ console.error(err.stack); res.status(500).send('Something broke!'); })")])])])}),[],!1,null,null,null);s.default=a.exports}}]);