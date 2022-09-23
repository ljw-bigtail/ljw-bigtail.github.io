(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{652:function(v,_,t){"use strict";t.r(_);var s=t(10),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("平常我们都说的是框架，但是总会遇到不常见的框架，甚至某些古老的框架，我们需要对这些前端技术做一定对分类，以便与开发者理解手上代码的结构性概念。")]),v._v(" "),t("h2",{attrs:{id:"渲染与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染与部署"}},[v._v("#")]),v._v(" 渲染与部署")]),v._v(" "),t("p",[v._v("基于渲染的角度总结，我们可以发现有一下几类：")]),v._v(" "),t("ol",[t("li",[v._v("SSG；")]),v._v(" "),t("li",[v._v("SSR；")]),v._v(" "),t("li",[v._v("CSR；")])]),v._v(" "),t("h3",{attrs:{id:"ssg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssg"}},[v._v("#")]),v._v(" SSG")]),v._v(" "),t("p",[v._v("部署时 通过模版+数据，预先生成静态 html 文件，然后把静态资源完整的放置在服务端")]),v._v(" "),t("p",[v._v("访问时 客户端访问的是静态页面")]),v._v(" "),t("p",[t("strong",[v._v("特点")]),v._v("：")]),v._v(" "),t("ol",[t("li",[v._v("不适合有复杂交互的页面")]),v._v(" "),t("li",[v._v("当数据变化时需要重新部署，数据量较大时，处理性能很差（性能问题解决：增量部署）")]),v._v(" "),t("li",[v._v("完美支持SEO")]),v._v(" "),t("li",[v._v("无需服务端 速度极快")]),v._v(" "),t("li",[v._v("使用 github page 等服务时，可以不需要服务器就可以建立网站")])]),v._v(" "),t("blockquote",[t("p",[v._v("常见框架：hexo、vuepress等")])]),v._v(" "),t("h3",{attrs:{id:"ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[v._v("#")]),v._v(" SSR")]),v._v(" "),t("p",[v._v("部署时 编译服务端逻辑+模版，然后把服务端放在服务器上")]),v._v(" "),t("p",[v._v("访问时 客户端访问服务器，服务器实时获取数据并编译，然后把生成的 html 发送给客户端")]),v._v(" "),t("p",[t("strong",[v._v("特点")]),v._v("：")]),v._v(" "),t("ol",[t("li",[v._v("速度取决于服务端性能、带宽、并发的处理，例如 node服务 会明显慢于传统语言的服务（java等）")]),v._v(" "),t("li",[v._v("数据变化时，无需编译部署，单需要单独维护服务端")]),v._v(" "),t("li",[v._v("服务端使用的模版语法可能于前端的模版有差异，需要注意可能混淆")]),v._v(" "),t("li",[v._v("完美支持SEO")])]),v._v(" "),t("blockquote",[t("p",[v._v("常见框架：egg.js（更像传统语言）、next.js（react）、nust.js（vue）、astro（新的框架）等，这些都是 node 下的服务端\n还有传统语言提供服务端，具体就不列举了")])]),v._v(" "),t("h3",{attrs:{id:"csr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csr"}},[v._v("#")]),v._v(" CSR")]),v._v(" "),t("p",[v._v("部署时 生成编译后的文件，其中的html部分一般只会有很少的dom，具体渲染部分由js来操作")]),v._v(" "),t("p",[v._v("访问时 客户端下载资源，其中js在客户端来渲染DOM")]),v._v(" "),t("p",[t("strong",[v._v("特点")]),v._v("：")]),v._v(" "),t("ol",[t("li",[v._v("无需服务端")]),v._v(" "),t("li",[v._v("渲染性能会差（虽然各个框架发现飞速，但是渲染性能或多或少会慢于静态html文件）")]),v._v(" "),t("li",[v._v("很难支持动态的SEO")]),v._v(" "),t("li",[v._v("各个框架的优点百花齐放，但是一般都有双向绑定")])]),v._v(" "),t("blockquote",[t("p",[v._v("常见框架：VUE、react、svelte等，平常我们使用的就是这些框架")])]),v._v(" "),t("h2",{attrs:{id:"工程化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程化工具"}},[v._v("#")]),v._v(" 工程化工具")]),v._v(" "),t("p",[v._v("工具的还是比较多的，从原来的grunt、gulp，到现在的webpack、vite等...")]),v._v(" "),t("h3",{attrs:{id:"编译工具类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译工具类"}},[v._v("#")]),v._v(" 编译工具类")]),v._v(" "),t("p",[v._v("例如：grunt gulp。")]),v._v(" "),t("p",[v._v("grunt比较老了，所以这里只说下gulp。")]),v._v(" "),t("p",[v._v("gulp实际上就是一堆任务的集合（例如：压缩代码，代码降级，代码检查，代码编译，上传oss，加密等），通过对文件执行自定的任务，来生成最后的可以部署的代码。")]),v._v(" "),t("p",[v._v("这个类工具对代码内部的逻辑没有任何概念，所以逻辑性的无法处理，功能就是不同的任务组合，对工程化有一点帮助，但没有那么紧密")]),v._v(" "),t("h3",{attrs:{id:"打包工具类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包工具类"}},[v._v("#")]),v._v(" 打包工具类")]),v._v(" "),t("p",[v._v("也就是为了解决编译工具无法解决的逻辑性的依赖关系，出现了webpack。")]),v._v(" "),t("p",[v._v("webpack 通过入口来一层层倒入依赖，并且对不同的依赖进行对应的处理。相比编译工具，优势在于：")]),v._v(" "),t("ol",[t("li",[v._v("知道了代码的依赖、引用的关系，可以相对的优化代码（不会打包未引用的代码）")]),v._v(" "),t("li",[v._v("可以把模块拆分到不同的chunk里，就是可以生成可控制的代码")]),v._v(" "),t("li",[v._v("可以实现 tree sharking、code spliting、引用的lazyload等功能")])]),v._v(" "),t("p",[v._v("这样的打包工具有着明显的优点，但是也有一些缺点：模块多了后，打包就会很慢")]),v._v(" "),t("p",[v._v("所以后面出现了 no bundle 的实现， 例如 vite")]),v._v(" "),t("p",[v._v("no bundle 是在开发环境避免打包的操作，开发时速度会好一些，但是部署之后的性能差不多，而且如果优化没做好，体感的访问速度会差一些")]),v._v(" "),t("h3",{attrs:{id:"集成很多项目的工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成很多项目的工程"}},[v._v("#")]),v._v(" 集成很多项目的工程")]),v._v(" "),t("p",[v._v("在很大的公司里会遇到这种问题，但是大部分情况都用不到")]),v._v(" "),t("p",[v._v("如果遇到或有需要，需要去了解下 monorepo（跨项目合作） / 微前端（qiankun.js）")])])}),[],!1,null,null,null);_.default=a.exports}}]);