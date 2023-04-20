(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{627:function(t,v,_){"use strict";_.r(v);var a=_(10),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("主要写的是正则表达式的表示方法，和一些常见的例子。")]),t._v(" "),_("h2",{attrs:{id:"表示公式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表示公式"}},[t._v("#")]),t._v(" 表示公式")]),t._v(" "),_("h3",{attrs:{id:"基础符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础符号"}},[t._v("#")]),t._v(" 基础符号")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("基础符号")]),t._v(" "),_("th",[t._v("功能")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v(".")]),t._v(" "),_("td",[t._v("任意字符（除换行符外：\\n，\\r，\\u2028 or \\u2029）")]),t._v(" "),_("td",[t._v("/.../.test('1a@');")])]),t._v(" "),_("tr",[_("td",[t._v("\\d")]),t._v(" "),_("td",[t._v("数字0 - 9")]),t._v(" "),_("td",[t._v("/\\d\\d\\d/.test('123');")])]),t._v(" "),_("tr",[_("td",[t._v("\\D")]),t._v(" "),_("td",[t._v("非\\d，即不是0 - 9的字符")]),t._v(" "),_("td",[t._v("/\\D\\D\\D/.test('ab!');")])]),t._v(" "),_("tr",[_("td",[t._v("\\w")]),t._v(" "),_("td",[t._v("数字0 - 9，字母a-z和A-Z")]),t._v(" "),_("td",[t._v('/\\w\\w\\w/.test("aB9_");')])]),t._v(" "),_("tr",[_("td",[t._v("\\W")]),t._v(" "),_("td",[t._v("非\\w")]),t._v(" "),_("td",[t._v('/\\W\\W\\W/.test("@!#");')])]),t._v(" "),_("tr",[_("td",[t._v("\\s")]),t._v(" "),_("td",[t._v("空格符、TAB、换页符、换行符")]),t._v(" "),_("td",[t._v('/\\sabc/.test("abc");')])]),t._v(" "),_("tr",[_("td",[t._v("\\S")]),t._v(" "),_("td",[t._v("非\\s")]),t._v(" "),_("td",[t._v("none")])]),t._v(" "),_("tr",[_("td",[t._v("\\t \\r \\n \\v \\f")]),t._v(" "),_("td",[t._v("tab 回车 换行 垂直制表符 换行符")]),t._v(" "),_("td",[t._v("none")])])])]),t._v(" "),_("h3",{attrs:{id:"范围符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#范围符号"}},[t._v("#")]),t._v(" 范围符号")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("范围符号")]),t._v(" "),_("th",[t._v("功能")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("[...]")]),t._v(" "),_("td",[t._v("字符范围")]),t._v(" "),_("td",[t._v("[a-z]  [0-9]  [A-Z0-9a-z]")])]),t._v(" "),_("tr",[_("td",[t._v("[^...]")]),t._v(" "),_("td",[t._v("字符范围外")]),t._v(" "),_("td",[t._v("[^a-z]  [^0-9]")])]),t._v(" "),_("tr",[_("td",[t._v("^")]),t._v(" "),_("td",[t._v("行首")]),t._v(" "),_("td",[t._v("^Hi")])]),t._v(" "),_("tr",[_("td",[t._v("$")]),t._v(" "),_("td",[t._v("行尾")]),t._v(" "),_("td",[t._v("test$")])]),t._v(" "),_("tr",[_("td",[t._v("\\b")]),t._v(" "),_("td",[t._v("零宽单词边界")]),t._v(" "),_("td",[t._v("\\bno")])]),t._v(" "),_("tr",[_("td",[t._v("\\B")]),t._v(" "),_("td",[t._v("非\\b")]),t._v(" "),_("td",[t._v("none")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("零宽单词边界：表示单词的两侧（每个单词）")])]),t._v(" "),_("h3",{attrs:{id:"分组符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分组符号"}},[t._v("#")]),t._v(" 分组符号")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("分组")]),t._v(" "),_("th",[t._v("功能")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("(x)")]),t._v(" "),_("td",[t._v("分组，并记录匹配到的字符串")]),t._v(" "),_("td",[t._v("/(abc)/")])]),t._v(" "),_("tr",[_("td",[t._v("\\1")]),t._v(" "),_("td",[t._v("引用前面的分组")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("\\n")]),t._v(" "),_("td",[t._v("表示使用分组符(x)匹配到的字符串")]),t._v(" "),_("td",[t._v("/(abc)\\1/.test('abcabc');")])]),t._v(" "),_("tr",[_("td",[t._v("(?:x)")]),t._v(" "),_("td",[t._v("仅分组，不引用")]),t._v(" "),_("td",[t._v("/(?:abc)(def)\\1/.test(abcdefdef);")])])])]),t._v(" "),_("h3",{attrs:{id:"重复符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重复符号"}},[t._v("#")]),t._v(" 重复符号")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("重复")]),t._v(" "),_("th",[t._v("功能")]),t._v(" "),_("th",[t._v("例子")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("x*  x+")]),t._v(" "),_("td",[t._v("重复次数>=0  重复次数>0  贪婪算法")]),t._v(" "),_("td",[t._v("正则表达式：abc*将匹配ab、abc、abcccccc； 正则表达式：abc+将匹配abc、abcccccc，不匹配ab")])]),t._v(" "),_("tr",[_("td",[t._v("x*?  x+?")]),t._v(" "),_("td",[t._v("同上 非贪婪算法")]),t._v(" "),_("td",[t._v("正则表达式：abc*?在abcccccc中将匹配ab；abc+?将匹配abc")])]),t._v(" "),_("tr",[_("td",[t._v("x?")]),t._v(" "),_("td",[t._v("出现0或1次")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("x/y")]),t._v(" "),_("td",[t._v("x或者y")]),t._v(" "),_("td",[t._v("x/y匹配x，也匹配y")])]),t._v(" "),_("tr",[_("td",[t._v("x{n},x{n,},x{n,m}")]),t._v(" "),_("td",[t._v("重复n次，重复>=n次，m>=重复次数>=n")]),t._v(" "),_("td",[t._v("x{5}匹配xxxxx1asd，x{1,3}匹配x/xx/xxx")])])])]),t._v(" "),_("h3",{attrs:{id:"标志位符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标志位符号"}},[t._v("#")]),t._v(" 标志位符号")]),t._v(" "),_("p",[t._v("三个标志位（写在后一个“ / ”后）（只用写缩写）：")]),t._v(" "),_("ul",[_("li",[t._v("g：（global）匹配所有情况")]),t._v(" "),_("li",[t._v("i：（ignoreCase）忽略大小写")]),t._v(" "),_("li",[t._v("m：（multiline）跨行匹配")]),t._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token regex"}},[_("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("abc")]),_("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("gim")])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])])]),t._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token regex"}},[_("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("abc")]),_("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("gim")])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"regexp对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#regexp对象"}},[t._v("#")]),t._v(" RegExp对象")]),t._v(" "),_("h3",{attrs:{id:"regexp对象的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#regexp对象的属性"}},[t._v("#")]),t._v(" RegExp对象的属性")]),t._v(" "),_("ul",[_("li",[t._v("global  ——  布尔值")]),t._v(" "),_("li",[t._v("ignoreCase  ——  布尔值")]),t._v(" "),_("li",[t._v("multiline  ——  布尔值")]),t._v(" "),_("li",[t._v("source  ——  正则内容")])]),t._v(" "),_("h3",{attrs:{id:"regexp对象的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#regexp对象的方法"}},[t._v("#")]),t._v(" RegExp对象的方法")]),t._v(" "),_("ul",[_("li",[t._v("compile();")])]),t._v(" "),_("blockquote",[_("p",[t._v("功能：改变正则属性")])]),t._v(" "),_("ul",[_("li",[t._v("exec();")])]),t._v(" "),_("blockquote",[_("p",[t._v("功能：执行正则表达式的匹配\n返回：一个数组，包含匹配结果")])]),t._v(" "),_("ul",[_("li",[t._v("test();")])]),t._v(" "),_("blockquote",[_("p",[t._v("功能：测试正则表达式的匹配\n返回：匹配成功与否的布尔值")])]),t._v(" "),_("ul",[_("li",[t._v("toString();")])]),t._v(" "),_("blockquote",[_("p",[t._v("功能：将RegExp对象转换成字符串\n返回：正则内容，字符串")])]),t._v(" "),_("ul",[_("li",[t._v("toSource();")])]),t._v(" "),_("blockquote",[_("p",[t._v("功能：返回RegExp对象的源代码")])]),t._v(" "),_("h2",{attrs:{id:"常见的验证公式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的验证公式"}},[t._v("#")]),t._v(" 常见的验证公式")])])}),[],!1,null,null,null);v.default=e.exports}}]);