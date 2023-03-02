(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{628:function(t,s,a){"use strict";a.r(s);var r=a(11),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("文章末尾有下载链接。")]),t._v(" "),a("img",{staticStyle:{width:"200px",margin:"0 auto",display:"block"},attrs:{src:"/blog/images/blog/JavaScript性能优化.png"}}),t._v(" "),a("h2",{attrs:{id:"如何测试性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何测试性能"}},[t._v("#")]),t._v(" 如何测试性能")]),t._v(" "),a("h3",{attrs:{id:"工具、插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具、插件"}},[t._v("#")]),t._v(" 工具、插件")]),t._v(" "),a("p",[t._v("常用工具如下：（因为书的时间比较老，部分工具现在很少有人在用）")]),t._v(" "),a("ul",[a("li",[t._v("Firebug：火狐官方的")]),t._v(" "),a("li",[t._v("Performance：Chrome自带的")]),t._v(" "),a("li",[t._v("Lighthouse：Google的在线工具"),a("a",{attrs:{href:"https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线测试"),a("OutboundLink")],1),t._v("，还有插件版"),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌商店下载地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("WebPageTest：可以模拟使用环境、不同地区的访问性能"),a("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"可视化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[t._v("#")]),t._v(" 可视化")]),t._v(" "),a("p",[t._v("为了让数据更直观，可以手动获取页面渲染各节点的事件戳，进行计算后，发送给服务端；服务端统计数据后，使用各种方法来处理渲染图表即可。")]),t._v(" "),a("p",[t._v("文章中使用的是 "),a("strong",[t._v("R语言")]),t._v(" 其实用什么语言都一样，哪个方便用那个。比如前端来处理的话，肯定会使用 echart 来处理数据，只是熟悉R语言可能会觉着这个更快捷方便。")]),t._v(" "),a("h2",{attrs:{id:"自动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动测试"}},[t._v("#")]),t._v(" 自动测试")]),t._v(" "),a("h3",{attrs:{id:"付费api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#付费api"}},[t._v("#")]),t._v(" 付费API")]),t._v(" "),a("p",[t._v("WebPageTest"),a("a",{attrs:{href:"https://product.webpagetest.org/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("价格表"),a("OutboundLink")],1),t._v("，API文档"),a("a",{attrs:{href:"https://docs.webpagetest.org/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("文章中使用php来调用这个api，但使用啥语言调用都可以，例如使用node也可以。")]),t._v(" "),a("h3",{attrs:{id:"简单的性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的性能分析"}},[t._v("#")]),t._v(" 简单的性能分析")]),t._v(" "),a("p",[t._v("思路：数据源 window.performance，经过计算的数据在何时的时候发送数据给后端，后端收集数据后，绘制性能分析图")]),t._v(" "),a("p",[t._v("参数详解：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"memory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MemoryInfo")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"jsHeapSizeLimit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4294705152")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有被使用的js堆栈内存")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"totalJSHeapSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21986314")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前js堆栈内存总大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"usedJSHeapSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20497006")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 已使用的 小于 totalJSHeapSize 否则内存泄漏")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"eventCounts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EventCounts")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所有已经分发过的 Event")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"timeOrigin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287770.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 性能测量开始时的时间的高精度时间戳")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"timing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"navigationStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287770")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从同一个浏览器上下文的上一个文档卸载(unload)结束时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"fetchStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287770")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器准备好使用HTTP请求")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"secureConnectionStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287815")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回浏览器与服务器开始安全链接的握手时")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"connectStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287785")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTTP请求开始向服务器发送时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"connectEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287851")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回浏览器与服务器之间的连接建立时")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"requestStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287851")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器向服务器发出HTTP请求时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"responseStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287924")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回浏览器从服务器收到（或从本地缓存读取）第一个字节时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"responseEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288370")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"redirectStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个HTTP重定向开始时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"redirectEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一个HTTP重定向完成时")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"unloadEventEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unload事件处理完时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"unloadEventStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unload事件抛出时")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domContentLoadedEventStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288497")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析器发送DOMContentLoaded (en-US) 事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domContentLoadedEventEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288518")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析器发送DOMContentLoaded (en-US) 事件处理完毕")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domLoading"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287953")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM结构开始解析")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domComplete"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288621")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前文档解析完成")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domInteractive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288488")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前网页DOM结构结束解析、开始加载内嵌资源时")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domainLookupStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287774")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 域名查询开始")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"domainLookupEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954287785")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 域名查询结束")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"loadEventStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288621")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load (en-US)事件被发送时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"loadEventEnd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1650954288622")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load (en-US)事件处理完毕时")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"navigation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入方式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 通过点击链接，书签和表单提交，或者脚本操作，或者在url中直接输入地址;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 点击刷新页面按钮或者通过Location.reload()")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 通过历史记录和前进后退访问时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 255 任何其他方式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"redirectCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示在到达这个页面之前重定向了多少次。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br")])]),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[t._v("书中实际测试过，根据实际情况，适当的遵循以下规则可以提升加载时间")]),t._v(" "),a("ol",[a("li",[t._v("使用"),a("code",[t._v("script")]),t._v(" 标签的 "),a("code",[t._v("async")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("惰性加载：在onload里或者在调用时去实例化；异步动态插入js/css文件；")]),t._v(" "),a("li",[t._v("缓存作用域链：例如在循环里取值的性能远差于在外部定义好后在循环村调用（注意 循环次数过少时会有反作用）")]),t._v(" "),a("li",[t._v("jq的性能差于js：框架中使用性能会差；建议遵循 "),a("strong",[t._v("DRY准则")])]),t._v(" "),a("li",[t._v("减少操作dom：循环调用操作dom性能差于缓存需要操作的文件再批量操作dom")]),t._v(" "),a("li",[t._v("减少循环套循环：实际2、3层还勉强能接受，再多就坚决不行")])]),t._v(" "),a("blockquote",[a("p",[t._v("DRY准则：不要重复做自己做过的事")])]),t._v(" "),a("h2",{attrs:{id:"end-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-总结"}},[t._v("#")]),t._v(" End.总结")]),t._v(" "),a("p",[t._v("性能的提升往往要付出更大的代价：需要在可读性、模块化与性能之间做平衡，寻找适合的平衡点能使团队协作更容易")]),t._v(" "),a("blockquote",[a("p",[t._v("下载地址 "),a("a",{attrs:{href:"https://cloud.189.cn/t/VfM3quqMzIBn",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript性能优化》"),a("OutboundLink")],1),t._v(" 访问码：d5cb")])])])}),[],!1,null,null,null);s.default=n.exports}}]);