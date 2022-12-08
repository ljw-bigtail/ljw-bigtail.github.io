(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{631:function(t,a,s){"use strict";s.r(a);var r=s(10),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("XSS攻击与防范")]),t._v(" "),s("h2",{attrs:{id:"攻击方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),s("h3",{attrs:{id:"反射型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),s("p",[t._v("通过URL输入提交到服务器端，待解析响应后，返回到浏览器，并解析执行XSS代码的行为。")]),t._v(" "),s("p",[t._v("例子（常见于插入广告后再进行传播）：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在地址后添加攻击性代码后传播")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xss"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p onclick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert(1)"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"存储型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),s("p",[t._v("上面的不影响服务端，但存储型会影响服务端（存在文件系统、数据库等地方），下次请求时页面不用再次提交XSS代码。")]),t._v(" "),s("h2",{attrs:{id:"防范措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),s("h3",{attrs:{id:"编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码"}},[t._v("#")]),t._v(" 编码")]),t._v(" "),s("p",[t._v("对用户输入的数据进行HTML Entity编码。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("十进制")]),t._v(" "),s("th",[t._v("转义字符")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("“")]),t._v(" "),s("td",[t._v("&#34 ;")]),t._v(" "),s("td",[t._v("&quot ;")])]),t._v(" "),s("tr",[s("td",[t._v("&")]),t._v(" "),s("td",[t._v("&#38 ;")]),t._v(" "),s("td",[t._v("&amp ;")])]),t._v(" "),s("tr",[s("td",[t._v("<")]),t._v(" "),s("td",[t._v("&#60 ;")]),t._v(" "),s("td",[t._v("&lt ;")])]),t._v(" "),s("tr",[s("td",[t._v(">")]),t._v(" "),s("td",[t._v("&#62 ;")]),t._v(" "),s("td",[t._v("&gt ;")])]),t._v(" "),s("tr",[s("td",[t._v("不断开空格（\\s）")]),t._v(" "),s("td",[t._v("&#160 ;")]),t._v(" "),s("td",[t._v("&nbsp ;")])])])]),t._v(" "),s("p",[t._v("使用replace来替换上面的这些字符，使得不影响结果。")]),t._v(" "),s("h3",{attrs:{id:"过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤"}},[t._v("#")]),t._v(" 过滤")]),t._v(" "),s("p",[t._v("删除用户上传的不安全的内容，包括DOM属性，如onerror等事件，或是Style节点、Script节点、Iframe节点等。")]),t._v(" "),s("p",[t._v("直接使用JavaScript来筛选上传的数据即可。")]),t._v(" "),s("h3",{attrs:{id:"校正"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校正"}},[t._v("#")]),t._v(" 校正")]),t._v(" "),s("p",[t._v("避免直接对HTML Entity解码，使用DOM Parse转换，校正不配对的DOM标签。")])])}),[],!1,null,null,null);a.default=v.exports}}]);