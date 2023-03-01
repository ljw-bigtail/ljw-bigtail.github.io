(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{637:function(t,v,o){"use strict";o.r(v);var _=o(11),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,o=t._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("之前听说过听说过清除浮动的各种方法中有一个"),o("code",[t._v("overflow:hidden")]),t._v("，但是一直是认为这是一个“偏门”的方法，并不能作为一个很重要的点来使用。")]),t._v(" "),o("p",[t._v("今天又遇到了这个点，于是百度了一下这个方法的原理，然后就打开了新世界的大门——BFC。")]),t._v(" "),o("h2",{attrs:{id:"原由"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原由"}},[t._v("#")]),t._v(" 原由")]),t._v(" "),o("p",[t._v("先说一下"),o("code",[t._v("overflow:hidden")]),t._v("。")]),t._v(" "),o("p",[t._v("这句代码的原本含义是裁切掉超出的部分，但是float之后的元素已经不占据流的位置， 没有撑开父元素（前提是父元素的"),o("code",[t._v("height:auto")]),t._v("），那就会裁掉float的这一部分。")]),t._v(" "),o("p",[t._v("这是我的一种理解，没有延伸出去的思考可以就到这里了。")]),t._v(" "),o("p",[t._v("但是，至此我还没了解BFC的概念。")]),t._v(" "),o("h2",{attrs:{id:"what"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),o("p",[t._v("BFC（Block Formatting Context）（块级格式化上下文），Web页面中盒模型布局的CSS渲染模式。")]),t._v(" "),o("p",[t._v("说定义的时候就是各种感到难理解，我看了一点相关的知识之后，发现实际上就是这样的：触发了BFC之后就会使得本盒子与外界盒子之间互不影响，最显眼的情况可以看一下这张图。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://ooo.0o0.ooo/2017/06/26/595082c4930e5.jpg",alt:"未触发BFC时的margin处理方式"}})]),t._v(" "),o("p",[o("img",{attrs:{src:"https://ooo.0o0.ooo/2017/06/26/595082c4ac481.jpg",alt:"触发了BFC后，向下不会再影响"}})]),t._v(" "),o("h2",{attrs:{id:"why"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),o("p",[t._v("说了效果，就该再说一下如何为一个容器添加一个触发BFC的样式。")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("display")]),t._v("，值为一下几种："),o("code",[t._v("table-cell、table-caption、flex、inline-block、inline-flex")])]),t._v(" "),o("li",[o("code",[t._v("overflow")]),t._v("，值不为visible时："),o("code",[t._v("auto、scroll、hidden")])]),t._v(" "),o("li",[o("code",[t._v("position")]),t._v("，值为"),o("code",[t._v("absolute、fixed")]),t._v("时")]),t._v(" "),o("li",[o("code",[t._v("float")]),t._v("，除了none时："),o("code",[t._v("left、right")]),t._v("，影响布局")]),t._v(" "),o("li",[o("code",[t._v("<fieldset>")]),t._v("，该标签（元素）")])]),t._v(" "),o("h2",{attrs:{id:"how"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[t._v("#")]),t._v(" How")]),t._v(" "),o("p",[t._v("说道用法，就得先了解BFC的特性，前面的图片描述了其中一条特性：")]),t._v(" "),o("ul",[o("li",[t._v("内部的Box会在垂直方向上，依次排列")]),t._v(" "),o("li",[t._v("Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会叠加")]),t._v(" "),o("li",[t._v("每个元素的margin box的左边，与包含块border box的左边相接触（从左向右），这个特性不会受浮动的影响")]),t._v(" "),o("li",[t._v("BFC的区域不会与float box叠加")]),t._v(" "),o("li",[t._v("BFC是一个独立容器，内部元素不影响外界元素")]),t._v(" "),o("li",[t._v("计算高度时，浮动元素也参与计算")])]),t._v(" "),o("h3",{attrs:{id:"to-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#to-do"}},[t._v("#")]),t._v(" To Do")]),t._v(" "),o("p",[t._v("以前在使用的时候并没有突出注意到BFC的存在，甚至用过，但是不知道这是BFC，哈...")]),t._v(" "),o("p",[t._v("在调整样式的过程中，还是需要去了解原理，然后再使用，避免样式覆盖而产生的莫名其妙，或是去尽量精简代码以实现更优异的编码习惯。")])])}),[],!1,null,null,null);v.default=a.exports}}]);