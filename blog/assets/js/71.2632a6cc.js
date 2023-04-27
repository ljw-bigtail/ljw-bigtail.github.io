(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{661:function(t,e,r){"use strict";r.r(e);var a=r(10),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Universal Analytics To Google Analytics（分析）4")]),t._v(" "),r("h2",{attrs:{id:"版本说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本说明"}},[t._v("#")]),t._v(" 版本说明")]),t._v(" "),r("ol",[r("li",[t._v("Universal Analytics "),r("strong",[t._v("[UA]")]),t._v(" "),r("ol",[r("li",[t._v("analytics.js")]),t._v(" "),r("li",[t._v("gtag.js")])])]),t._v(" "),r("li",[t._v("Google Analytics（分析）4 "),r("strong",[t._v("[GA4]")]),t._v(" "),r("ol",[r("li",[t._v("gtag.js")])])])]),t._v(" "),r("p",[t._v("UA版本中 analytics.js 是更老的版本，官方曾经有过一次升级到 gtag.js 的说明，如果这次想从 UA 的 analytics.js 直接升级到 GA4 可以直接"),r("a",{attrs:{href:"https://support.google.com/analytics/answer/11150547",target:"_blank",rel:"noopener noreferrer"}},[t._v("看这里：[UA→GA4] 向 Google Analytics（分析）4 发送 analytics.js 事件、计时和异常命中"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("如果 UA版本中使用的是 gtag.js 那么就可以做到直接升级。有两种做法：")]),t._v(" "),r("ol",[r("li",[t._v("将 Google Analytics（分析）4 媒体资源与 Universal Analytics 媒体资源进行关联。官方文档看这里："),r("a",{attrs:{href:"https://support.google.com/analytics/answer/10312255",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置助理 [GA4]"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("添加代码 "),r("code",[t._v("gtag('config', 'G-XXXXXXXX');")]),t._v("。官方文档看这里："),r("a",{attrs:{href:"https://support.google.com/analytics/answer/9310895#gtagjs-enable-basic",target:"_blank",rel:"noopener noreferrer"}},[t._v("[UA→GA4] UA 的 gtag.js 与 GA4 之间对应关系 - 基本数据收集"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"详细说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#详细说明"}},[t._v("#")]),t._v(" 详细说明")]),t._v(" "),r("blockquote",[r("p",[t._v("我们是从 UA gtag.js 升级到 GA4 ，且需要两个版本同时运行")])]),t._v(" "),r("p",[t._v("只需要两步：")]),t._v(" "),r("ol",[r("li",[t._v("手动添加包含 GA4 衡量 ID (G-XXXXXXXX) 的新“config”指令")]),t._v(" "),r("li",[t._v("根据需求调整参数")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://support.google.com/analytics/answer/11091026",target:"_blank",rel:"noopener noreferrer"}},[t._v("[UA→GA4] 将事件同时发送到您的 UA 媒体资源和 GA4 媒体资源"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),r("blockquote",[r("p",[t._v("只说网站相关")])]),t._v(" "),r("ol",[r("li",[t._v("默认的转化事件："),r("strong",[t._v("purchase")]),t._v(" "),r("a",{attrs:{href:"https://support.google.com/analytics/answer/9267568",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源：[GA4] 设置和管理转化事件"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("自动收集的事件："),r("a",{attrs:{href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源：[GA4] 自动收集的事件"),r("OutboundLink")],1),t._v(" "),r("ol",[r("li",[t._v("点击 每当用户点击会将他们带离当前网域的链接时触发")]),t._v(" "),r("li",[t._v("file_download 当用户点击指向以下类型的文件（带有常见文件扩展名）的链接时触发")]),t._v(" "),r("li",[t._v("first_visit 当用户首次访问/启动启用了 Analytics（分析）的网站")]),t._v(" "),r("li",[t._v("page_view 当网页加载或处于活动状态的网站更改浏览器历史记录状态时触发")]),t._v(" "),r("li",[t._v("scroll 当用户首次到达每个页面的底部时（即，当页面 90% 的垂直深度可见时）触发")]),t._v(" "),r("li",[t._v("session_start 当用户与应用或网站互动时触发")]),t._v(" "),r("li",[t._v("user_engagement 当应用在前台运行或网页在浏览器活动窗口中显示至少 1 秒时触发")]),t._v(" "),r("li",[t._v("video_complete 当视频播放完毕时触发（启用 JS API 支持 的嵌入式YouTube）")]),t._v(" "),r("li",[t._v("video_progress 当视频播放完毕时触发（启用 JS API 支持 的嵌入式YouTube）")]),t._v(" "),r("li",[t._v("video_start 当视频播放时长超过 10%、25%、50% 和 75% 时触发（启用 JS API 支持 的嵌入式YouTube）")]),t._v(" "),r("li",[t._v("view_search_results 当用户执行网站搜索时触发，此类事件以网址查询参数表示")])])])]),t._v(" "),r("h2",{attrs:{id:"官方文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[t._v("#")]),t._v(" 官方文档")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://support.google.com/analytics/answer/10759417?hl=zh-Hans&ref_topic=10737980",target:"_blank",rel:"noopener noreferrer"}},[t._v("改用 Google Analytics（分析）4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://support.google.com/analytics/answer/10119380?hl=zh-Hans&ref_topic=11053132",target:"_blank",rel:"noopener noreferrer"}},[t._v("[UA→GA4] 将电子商务数据收集功能从 UA 迁移到 GA4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("GA4 API 文档")]),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);