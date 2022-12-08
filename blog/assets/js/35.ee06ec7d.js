(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{617:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这个非常实用，重要的是实用meta标签和rem单位。")]),s._v(" "),a("p",[s._v("在接下来的时间，我尽量把之前的代码进行移动适配。")]),s._v(" "),a("h2",{attrs:{id:"基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[s._v("#")]),s._v(" 基础知识")]),s._v(" "),a("p",[s._v("开发过程中，原本PC端可以正常显示的界面在移动端变得乱七八糟，这罪魁祸首就是这些没有统一的概念。")]),s._v(" "),a("h3",{attrs:{id:"像素-pixels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#像素-pixels"}},[s._v("#")]),s._v(" 像素 pixels")]),s._v(" "),a("h4",{attrs:{id:"第一组概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一组概念"}},[s._v("#")]),s._v(" 第一组概念")]),s._v(" "),a("p",[s._v("计算公式：px = ( dpr )² X dp")]),s._v(" "),a("ul",[a("li",[s._v("px：css pixels 逻辑像素，抽象单位，这是开发中常用的像素单位。")]),s._v(" "),a("li",[s._v("dp,pt：device independent pixels 设备无关像素。")]),s._v(" "),a("li",[s._v("dpr：devicePixelRatio 设备像素缩放比。")])]),s._v(" "),a("blockquote",[a("p",[s._v("不同设备的dpr不一定相同（iPhone5的dpr=2）。")])]),s._v(" "),a("h4",{attrs:{id:"第二组概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二组概念"}},[s._v("#")]),s._v(" 第二组概念")]),s._v(" "),a("ul",[a("li",[s._v("DPI：打印机每英寸可以喷的墨汁点")]),s._v(" "),a("li",[s._v("PPI：屏幕每英寸的像素数量，即单位英寸内的像素密度")])]),s._v(" "),a("p",[s._v("这两个概念很容易理解，做好区分即可。")]),s._v(" "),a("h3",{attrs:{id:"视窗-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视窗-viewport"}},[s._v("#")]),s._v(" 视窗 viewport")]),s._v(" "),a("p",[s._v("由于移动端浏览器存在两套viewport（度量viewport、布局viewport），而我们的部分css代码用到了页面宽度（margin:0 auto;），所以会出现一些问题，最常见的就是原本居中的页面，在移动端浏览不居中了。")]),s._v(" "),a("h4",{attrs:{id:"meta标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta标签"}},[s._v("#")]),s._v(" meta标签")]),s._v(" "),a("p",[a("code",[s._v('<meta name = "viewport" content = "name = value,name = value">')]),s._v("，标签中的name，value可以有一下各种选择：")]),s._v(" "),a("ol",[a("li",[s._v("width：设置布局viewport的特定值")]),s._v(" "),a("li",[s._v("initial-scale：设置页面的初始缩放")]),s._v(" "),a("li",[s._v("minimum-scale：最少缩放")]),s._v(" "),a("li",[s._v("maximum-scale：最大缩放")]),s._v(" "),a("li",[s._v("user-scalable：用户能否缩放")])]),s._v(" "),a("p",[s._v("我们通过以上的选项，来控制达到想要的效果。")]),s._v(" "),a("h4",{attrs:{id:"viewport设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport设置"}},[s._v("#")]),s._v(" viewport设置")]),s._v(" "),a("p",[a("code",[s._v('<meta name = "viewport" content = "width=???">')]),s._v("，这个是最简便的解决方法，原理是通过设置移动端的视窗宽度来解决视窗宽度与设备宽度不一致的情况。其中，width值可以console得到。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("p",[s._v("据此，我们得出最佳的viewport设置：【布局 viewport】=【设备宽度】=【度量 viewport】\n"),a("code",[s._v('<meta name = "viewport" content = "width=device-width,initial-scale=1,user-scalable=no">')]),s._v("\n效果是，固定移动端的页面大小，需要为其设置独立的一套css。")]),s._v(" "),a("h3",{attrs:{id:"设计方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计方案"}},[s._v("#")]),s._v(" 设计方案")]),s._v(" "),a("p",[s._v("方案一：根据设备的实际宽度来设计（常用）\n使用【布局 viewport】=【设备宽度】=【度量 viewport】的思想，需要对移动端重新写一套样式。")]),s._v(" "),a("p",[s._v("方案二：1px = 1dp\n缩放0.5。根据设备的物理像素dp等于抽象像素px来设计。此时1像素边框和高清图片都不需处理。")]),s._v(" "),a("h2",{attrs:{id:"高效的移动web布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高效的移动web布局"}},[s._v("#")]),s._v(" 高效的移动WEB布局")]),s._v(" "),a("h3",{attrs:{id:"flexbox弹性盒子布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flexbox弹性盒子布局"}},[s._v("#")]),s._v(" Flexbox弹性盒子布局")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*在父元素的样式中写*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*表示要显示为弹性盒子布局*/")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*在子元素的样式中写*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*表示所占布局的份数*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("由此引发多种可能：")]),s._v(" "),a("ol",[a("li",[s._v("等比划分：子元素均不写宽度，都是用flex表示比例")]),s._v(" "),a("li",[s._v("混合划分：子元素可以有固定宽度，剩余的部分按比例划分")])]),s._v(" "),a("h4",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[s._v("#")]),s._v(" Tips")]),s._v(" "),a("blockquote",[a("p",[s._v("不定宽高的水平垂直居中")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*第一种解决办法*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*第二种，flexbox版*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"flex弹性盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex弹性盒模型"}},[s._v("#")]),s._v(" Flex弹性盒模型")]),s._v(" "),a("blockquote",[a("p",[s._v("父元素的属性")])]),s._v(" "),a("p",[s._v("【 flex-direction 】")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*默认，按列排*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*按列反序排*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*按行排*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*按行反序排*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("【 flex-wrap 】")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowarp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*默认，子元素不换行*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" warp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*子元素换行*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" warp-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*子元素换行，反序排列*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("【 justify-content 】")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*默认，靠左排*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*靠右排*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*居中排列*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space-between"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*靠两边排列*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space-around"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*元素等分，居中*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("【 align-items 】")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠上*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠下*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向居中*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向填满容器*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" baseline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠字体下边缘*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向填充*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("子元素的属性")])]),s._v(" "),a("p",[s._v("【 align-self 】")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠上*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠下*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向居中*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向填满容器*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" baseline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向靠字体下边缘*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*垂直方向填充*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[s._v("#")]),s._v(" 兼容性")]),s._v(" "),a("ul",[a("li",[s._v("IOS 兼容最新的flex布局")]),s._v(" "),a("li",[s._v("Android4.4 以下，只兼容旧版的flexbox布局")]),s._v(" "),a("li",[s._v("Android4.4 以上，兼容最新的flex布局")])]),s._v(" "),a("h3",{attrs:{id:"响应式设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计"}},[s._v("#")]),s._v(" 响应式设计")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 95.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("解决思路：通过媒体查询写不同情况下的响应式代码，百分比布局。")]),s._v(" "),a("p",[s._v("设计点一：百分比布局，可以有平滑的过渡。")]),s._v(" "),a("p",[s._v("设计点二：弹性图片，"),a("code",[s._v("max-width: 100%")]),s._v("。")]),s._v(" "),a("p",[s._v("设计点三：重新布局，舍弃与保留。")]),s._v(" "),a("h3",{attrs:{id:"样式处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式处理"}},[s._v("#")]),s._v(" 样式处理")]),s._v(" "),a("h4",{attrs:{id:"高清图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高清图片"}},[s._v("#")]),s._v(" 高清图片")]),s._v(" "),a("p",[s._v("使用更高分辨率的图片，在retina屏幕上就能显示清晰。")]),s._v(" "),a("p",[s._v("原理是dpr != 1;")]),s._v(" "),a("h4",{attrs:{id:"一像素边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一像素边框"}},[s._v("#")]),s._v(" 一像素边框")]),s._v(" "),a("p",[s._v("1px的边框是用2dp渲染，导致不清晰。")]),s._v(" "),a("p",[s._v("一般使用缩放的方式解决（"),a("code",[s._v("sacleY(0.5)")]),s._v("）。")]),s._v(" "),a("h4",{attrs:{id:"相对单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对单位"}},[s._v("#")]),s._v(" 相对单位")]),s._v(" "),a("p",[s._v("em：根据父节点的font-size为相对单位")]),s._v(" "),a("p",[s._v("rem：根据HTML的font-size为相对单位")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("问题：基值应该是多少？")]),s._v(" "),a("p",[s._v("rem = screen.width/10")]),s._v(" "),a("p",[s._v("为了适应屏幕，建议在 不同屏幕下设置不同的值")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*默认320px*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 32px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*iphone 6*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-device-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("375px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 37.5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*iphone 6 plus*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-device-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("414px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 41.4px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"多行文本溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行文本溢出"}},[s._v("#")]),s._v(" 多行文本溢出")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*单行文本溢出*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inaline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*多行文本溢出*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".intwoline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("word-break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" break-all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"终端交互优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#终端交互优化"}},[s._v("#")]),s._v(" 终端交互优化")]),s._v(" "),a("h3",{attrs:{id:"tap事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tap事件"}},[s._v("#")]),s._v(" Tap事件")]),s._v(" "),a("p",[s._v("由于要判断事件状态，手机设置了click事件的300ms的延迟响应时间，所以要寻求替代的方法。")]),s._v(" "),a("p",[s._v("基于移动框架库Zepto.js实现tap事件。")]),s._v(" "),a("h4",{attrs:{id:"问题-官方已解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-官方已解决"}},[s._v("#")]),s._v(" 问题（官方已解决）")]),s._v(" "),a("p",[s._v("Tap“点透”Bug，重叠部分点击时，会有穿透效果。")]),s._v(" "),a("p",[s._v("解决方案：")]),s._v(" "),a("ol",[a("li",[s._v("使用缓冲动画，过渡300ms的延迟")]),s._v(" "),a("li",[s._v("中间层dom元素的加入，让中间层承受，随后隐藏")]),s._v(" "),a("li",[s._v("“上下”都使用tap事件，原理上解决了问题（但标签原生的click事件不可避免）")]),s._v(" "),a("li",[s._v("改用Fastclick库")])]),s._v(" "),a("h3",{attrs:{id:"触摸-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触摸-touch"}},[s._v("#")]),s._v(" 触摸 touch")]),s._v(" "),a("h4",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[s._v("#")]),s._v(" 事件")]),s._v(" "),a("p",[s._v("touchstart：手指触摸屏幕触发")]),s._v(" "),a("p",[s._v("touchend：手指离开屏幕触发")]),s._v(" "),a("p",[s._v("touchmove：手指滑动触发")]),s._v(" "),a("h4",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),a("p",[s._v("touches：触摸操作返回的touch对象的数组")]),s._v(" "),a("p",[s._v("包含了以下属性：")]),s._v(" "),a("p",[s._v("clientX：触摸点在视窗上的X坐标")]),s._v(" "),a("p",[s._v("clientY：触摸点在视窗上的Y坐标")]),s._v(" "),a("p",[s._v("identifier：触摸的ID，唯一")]),s._v(" "),a("p",[s._v("pageX：触摸点在整个页面的X坐标")]),s._v(" "),a("p",[s._v("pageY：触摸点在整个页面的Y坐标")]),s._v(" "),a("p",[s._v("screenX：触摸点在屏幕中的X坐标")]),s._v(" "),a("p",[s._v("screenY：触摸点在屏幕中的Y坐标")]),s._v(" "),a("p",[s._v("target：触摸点的DOM节点")]),s._v(" "),a("h4",{attrs:{id:"弹性滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性滚动"}},[s._v("#")]),s._v(" 弹性滚动")]),s._v(" "),a("p",[s._v("IOS下")]),s._v(" "),a("ol",[a("li",[s._v("body层，默认自带效果。")]),s._v(" "),a("li",[s._v("局部，"),a("code",[s._v("body{overflow:scroll; -webkit-overflow-scrolling:touch;}")]),s._v("。")])]),s._v(" "),a("p",[s._v("Android下")]),s._v(" "),a("p",[s._v("不支持原生滚动，需要借助第三方库实现，iScroll。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("移动端的使用，不仅仅是基本的浏览，而且由于交互方式发生改变，对应的事件也会发生改变。")]),s._v(" "),a("p",[s._v("我现在对于移动端的认识，已经超过从前，不只是@media了，还明白了事件、viewport的原理等等。")]),s._v(" "),a("p",[s._v("如果可以，我想把之前的“看你有多色”，改成移动端适用的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);