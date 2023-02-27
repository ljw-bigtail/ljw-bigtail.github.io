(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{620:function(t,a,s){"use strict";s.r(a);var n=s(11),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("主要整理出了js使用中容易被忽略的点，了解了这些，对于代码中的异常解决、性能优化等方面都有一些帮助")]),t._v(" "),s("img",{staticStyle:{width:"200px",margin:"0 auto",display:"block"},attrs:{src:"/blog/images/blog/JavaScript秘密花园.png"}}),t._v(" "),s("h2",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),s("h3",{attrs:{id:"除了-null-和-undefined-所有的变量都可以作为对象使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#除了-null-和-undefined-所有的变量都可以作为对象使用"}},[t._v("#")]),t._v(" 除了 null 和 undefined，所有的变量都可以作为对象使用")]),t._v(" "),s("p",[t._v("直接使用数组会报错是由于解析异常导致，可以使用 "),s("code",[t._v("1..toString()")]),t._v(" 或 "),s("code",[t._v("1 .toString()")]),t._v(" 或 "),s("code",[t._v("(1).toString()")]),t._v(" 代替")]),t._v(" "),s("h3",{attrs:{id:"获取对象属性时-会逐层向上获取原型链上的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取对象属性时-会逐层向上获取原型链上的属性"}},[t._v("#")]),t._v(" 获取对象属性时，会逐层向上获取原型链上的属性")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("for in")]),t._v(" 循环属性时，也会遍历原型链上的所有属性，可能会造成性能问题，所以需要防止原型链过长的问题。")]),t._v(" "),s("h3",{attrs:{id:"不建议直接在内置对象的原型链上绑定方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不建议直接在内置对象的原型链上绑定方法"}},[t._v("#")]),t._v(" 不建议直接在内置对象的原型链上绑定方法")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("Object.prototype.xx = func")]),t._v(" 可以实现，且很多第三方库都是这样兼容新方法（例如ES6的Array.forEach），其他情况一定要禁止修改内置对象的原型链！")]),t._v(" "),s("h3",{attrs:{id:"hasownproperty-可以在处理属性时不查找原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty-可以在处理属性时不查找原型链"}},[t._v("#")]),t._v(" hasOwnProperty 可以在处理属性时不查找原型链")]),t._v(" "),s("p",[t._v("所以在"),s("code",[t._v("for...in")]),t._v("时，可以增加个if判断，如果只是"),s("code",[t._v("Object.xx")]),t._v("，在属性值为undefined等情况时，可能无法正确处理是真的没有属性 还是属性就为undefined")]),t._v(" "),s("h2",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("h3",{attrs:{id:"函数定义会变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数定义会变量提升"}},[t._v("#")]),t._v(" 函数定义会变量提升")]),t._v(" "),s("p",[s("code",[t._v("function XX(){}")]),t._v("会先被解析为函数，所以哪怕先调用后定义也可以；"),s("code",[t._v("var a = function(){}")]),t._v("不会，因为解析的是定义变量a，定义变量时不会引起变量提升")]),t._v(" "),s("h3",{attrs:{id:"this的五种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this的五种情况"}},[t._v("#")]),t._v(" this的五种情况")]),t._v(" "),s("ol",[s("li",[t._v("全局环境中：指向全局对象")]),t._v(" "),s("li",[t._v("函数调用中"),s("code",[t._v("func()")]),t._v("：指向全局对象，即使在函数中定义函数，this也指向全局对象")]),t._v(" "),s("li",[t._v("方法调用中"),s("code",[t._v("obj.func()")]),t._v("：指向obj对象")]),t._v(" "),s("li",[t._v("构造函数中"),s("code",[t._v("new obj()")]),t._v("：指向实例化对象")]),t._v(" "),s("li",[t._v("显示设置中"),s("code",[t._v("bind(obj, params)")]),t._v("：指向obj对象")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("全局对象")]),t._v(" 在浏览器中执行js，this会指向Window；其他例如Node中，因为全局对象不是Window，所以不会指向Window")])]),t._v(" "),s("h3",{attrs:{id:"循环中延时执行闭包会导致循环index丢失-需要使用匿名自执行函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环中延时执行闭包会导致循环index丢失-需要使用匿名自执行函数"}},[t._v("#")]),t._v(" 循环中延时执行闭包会导致循环index丢失，需要使用匿名自执行函数")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"arguments是长得像数组的object-所以不能直接使用array的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments是长得像数组的object-所以不能直接使用array的方法"}},[t._v("#")]),t._v(" arguments是长得像数组的Object，所以不能直接使用Array的方法")]),t._v(" "),s("p",[t._v("需要手动创建后再使用")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\nArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),s("p",[t._v("工厂模式实际上是返回了一个闭包，所以在实例化的时候，如果要在原型链上定义属性，是无法访问到的")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _a.b == undefined")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"不要使用隐式全局变量-可能导致难以发现的bug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要使用隐式全局变量-可能导致难以发现的bug"}},[t._v("#")]),t._v(" 不要使用隐式全局变量，可能导致难以发现的bug")]),t._v(" "),s("p",[t._v("不定义变量直接赋值，会导致隐式的全局变量产生")]),t._v(" "),s("h3",{attrs:{id:"推荐使用匿名函数来创建明明空间-来防止命名冲突增强模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐使用匿名函数来创建明明空间-来防止命名冲突增强模块化"}},[t._v("#")]),t._v(" 推荐使用匿名函数来创建明明空间，来防止命名冲突增强模块化")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("obj")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),s("h3",{attrs:{id:"不建议使用forin来便利数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不建议使用forin来便利数组"}},[t._v("#")]),t._v(" 不建议使用forin来便利数组")]),t._v(" "),s("p",[t._v("即使js中数组实际也是Object，也可以使用forin来便利，但是由于forin会遍历原型上的所有属性，所以性能相对差很多")]),t._v(" "),s("h3",{attrs:{id:"请在循环前缓存数组的length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请在循环前缓存数组的length"}},[t._v("#")]),t._v(" 请在循环前缓存数组的length")]),t._v(" "),s("p",[t._v("相对于循环中访问array.length，循环前缓存length的性能更好")]),t._v(" "),s("h2",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("h3",{attrs:{id:"的性能优于"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#的性能优于"}},[t._v("#")]),t._v(" === 的性能优于 ==")]),t._v(" "),s("p",[t._v("由于 == 会执行一次强制类型转换，所以性能开销相对较大")]),t._v(" "),s("h3",{attrs:{id:"typeof拿到的值和实际的类型大概率不符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof拿到的值和实际的类型大概率不符"}},[t._v("#")]),t._v(" typeof拿到的值和实际的类型大概率不符")]),t._v(" "),s("p",[t._v("除了 String Number Function Boolean 外，Date Error Array RegExp 等 还有new出来的都会被识别为object，所以如果需要识别完整的正确的类型，还需要手动写方法")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Object.prototype.toString => "[object Array]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String Array等")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"核心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心"}},[t._v("#")]),t._v(" 核心")]),t._v(" "),s("h3",{attrs:{id:"尽量不要使用eval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量不要使用eval"}},[t._v("#")]),t._v(" 尽量不要使用eval")]),t._v(" "),s("ul",[s("li",[t._v("安全问题")]),t._v(" "),s("li",[t._v("把eval赋值给其他参数的，作用域被提升至全局")])]),t._v(" "),s("h3",{attrs:{id:"尽量使用分号-减少解析错误等情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量使用分号-减少解析错误等情况"}},[t._v("#")]),t._v(" 尽量使用分号，减少解析错误等情况")]),t._v(" "),s("p",[t._v("如果本行代码有前置括号，解析器不会给上一行结尾增加分号，则可能引起解析异常")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会被解析为")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会报错 undefined is not a function")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"settimeout-setinterval中使用this-可能会指向全局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-setinterval中使用this-可能会指向全局"}},[t._v("#")]),t._v(" setTimeout setInterval中使用this，可能会指向全局")]),t._v(" "),s("p",[t._v("因为等代码执行到此，this会丢失；在前面创建一个变量值为this再去使用，可以解决问题。")]),t._v(" "),s("h3",{attrs:{id:"settimeout-setinterval第一个参数尽量不要传递字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-setinterval第一个参数尽量不要传递字符串"}},[t._v("#")]),t._v(" setTimeout setInterval第一个参数尽量不要传递字符串")]),t._v(" "),s("p",[t._v("函数内部使用了eval去执行字符串，会产生种种问题，建议不要这样处理，如果需要使用，建议包在匿名函数内部")]),t._v(" "),s("h2",{attrs:{id:"end-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end-总结"}},[t._v("#")]),t._v(" End.总结")]),t._v(" "),s("blockquote",[s("p",[t._v("下载地址 "),s("a",{attrs:{href:"https://cloud.189.cn/t/yqiAJjiQjyUj",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript秘密花园》"),s("OutboundLink")],1),t._v(" 访问码：9gpd")])])])}),[],!1,null,null,null);a.default=r.exports}}]);