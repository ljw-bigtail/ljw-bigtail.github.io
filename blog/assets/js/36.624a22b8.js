(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{637:function(a,t,s){"use strict";s.r(t);var v=s(11),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("经过这两天的思考，终于把移动端的相册做好了。"),s("a",{attrs:{href:"https://github.com/ljw-bigtail/WEB-photo-album",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github-移动WEB相册"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"构思"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构思"}},[a._v("#")]),a._v(" 构思")]),a._v(" "),s("p",[a._v("一开始，我的想法是做一个可以适合移动端浏览的照片展示工具，作为练习，然后突然想到ajax也可以用在里面，与是就有了之下的东西。")]),a._v(" "),s("h3",{attrs:{id:"页面结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面结构"}},[a._v("#")]),a._v(" 页面结构")]),a._v(" "),s("p",[a._v("因为之前有看过慕课上的视频，所以很认同用canvas的加载方法，")]),a._v(" "),s("p",[a._v("所以，有标题、有图片列表、有放大图。")]),a._v(" "),s("h3",{attrs:{id:"样式结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式结构"}},[a._v("#")]),a._v(" 样式结构")]),a._v(" "),s("p",[a._v("样式很简单：")]),a._v(" "),s("p",[a._v("缩放页面，深色背景加上方形缩略图，中间加上padding。")]),a._v(" "),s("p",[a._v("展示页面，根据宽、高选择合适的作为基准，加上padding即可。")]),a._v(" "),s("h3",{attrs:{id:"交互结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交互结构"}},[a._v("#")]),a._v(" 交互结构")]),a._v(" "),s("p",[a._v("刚开始没有写ajax时，我想分为两个个模块：canvas图片，绑定事件；之后就表示为三个模块。")]),a._v(" "),s("p",[a._v("然后呢，我使用了移动端的zepto框架的touch模块。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://odmo6x3ig.bkt.clouddn.com/16-12-16/34428852-file_1481857865911_2b22.gif",alt:"预览"}})]),a._v(" "),s("h2",{attrs:{id:"实现与改版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现与改版"}},[a._v("#")]),a._v(" 实现与改版")]),a._v(" "),s("h3",{attrs:{id:"第一版-load-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-load-js"}},[a._v("#")]),a._v(" 第一版（load.js）")]),a._v(" "),s("h4",{attrs:{id:"加载图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载图片"}},[a._v("#")]),a._v(" 加载图片")]),a._v(" "),s("ol",[s("li",[a._v("手动设定图片数量"),s("code",[a._v("total")]),a._v("；")]),a._v(" "),s("li",[a._v("通过for循环依次加载html结构"),s("code",[a._v("<li><canvas></li>")]),a._v("；")]),a._v(" "),s("li",[a._v("根据for循环的i设置图片的路径，然后给canvas加载图片；")]),a._v(" "),s("li",[a._v("改变ul的html结构"),s("code",[a._v("$().html()")]),a._v("。")])]),a._v(" "),s("h4",{attrs:{id:"滑动加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滑动加载"}},[a._v("#")]),a._v(" 滑动加载")]),a._v(" "),s("ol",[s("li",[a._v("给body绑定swipe事件；")]),a._v(" "),s("li",[a._v("新增的内容根据之前一样的方式，但是我还没封装；")]),a._v(" "),s("li",[a._v("最后呢，使用"),s("code",[a._v(".append()")]),a._v("方法，在ul尾部加载新li。")])]),a._v(" "),s("h3",{attrs:{id:"第二版-photo-js、ajaxpic-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二版-photo-js、ajaxpic-js"}},[a._v("#")]),a._v(" 第二版（photo.js、ajaxPic.js）")]),a._v(" "),s("h4",{attrs:{id:"加载图片-photo-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载图片-photo-js"}},[a._v("#")]),a._v(" 加载图片（photo.js）")]),a._v(" "),s("p",[a._v("这部分的思路和方法和之前的一样，没什么改变。")]),a._v(" "),s("h4",{attrs:{id:"绑定事件-photo-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定事件-photo-js"}},[a._v("#")]),a._v(" 绑定事件（photo.js）")]),a._v(" "),s("p",[a._v("按照之前的思路，我写了两部分：给每张小图绑定放大事件，给每张大图绑定事件")]),a._v(" "),s("h5",{attrs:{id:"小图的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小图的事件"}},[a._v("#")]),a._v(" 小图的事件")]),a._v(" "),s("p",[a._v("小图的事件比较简单，就是点击每张小图片后，显示放大的图片。")]),a._v(" "),s("p",[a._v("这里需要用到一个jQuery的方法"),s("code",[a._v("delegate()")]),a._v("，因为zepto里面已经包含了这个方法，所以就不用再引用jQuery了。")]),a._v(" "),s("p",[a._v("因为我的大图展示在div里了，所以我只需要设置好每张图对应的css即可。")]),a._v(" "),s("ol",[s("li",[a._v("首先设置大图背景的宽高，有与全屏比较好看，所以宽高需要动态设置。")]),a._v(" "),s("li",[a._v("然后设置一个自定义属性，用于获取li的序号，然后生成大图的路径。")]),a._v(" "),s("li",[a._v("大图的padding需要动态改变，逻辑是：根据图片的宽高比确定图片的横\\竖（高/宽>1.2，竖图）。如果是横图，左右padding为0，只设置上下padding；如果是竖图，上下padding为0，只设置左右padding。")])]),a._v(" "),s("h5",{attrs:{id:"大图的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大图的事件"}},[a._v("#")]),a._v(" 大图的事件")]),a._v(" "),s("ol",[s("li",[a._v("点击隐藏事件，用hide()方法即可。")]),a._v(" "),s("li",[a._v("左划，显示上一张图；右划，显示下一张图。")]),a._v(" "),s("li",[a._v("加载图片时，需要引用加载大图的方法，为了美观，还需要使用animate.css，这些加载需要改变class值，所以需要给loadImg方法添加回调函数和"),s("code",[a._v("callback&&callback();")]),a._v("。")])]),a._v(" "),s("h4",{attrs:{id:"ajax加载-ajaxpic-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax加载-ajaxpic-js"}},[a._v("#")]),a._v(" ajax加载（ajaxPic.js）")]),a._v(" "),s("ol",[s("li",[a._v("我使用ajax的思路是：用json保存图片的路径，然后加载图片时，仅解析数据之后通过url加载图片。")]),a._v(" "),s("li",[a._v("当加载json数据返回200时，运行加载图片的代码。（目前还是没有封装）。")]),a._v(" "),s("li",[a._v("其他的，就是最基本的异步加载的那些方法。")])]),a._v(" "),s("p",[a._v("这里出现了一个问题，加载没成功，F12之后，报错。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ajaxPic.js:31 XMLHttpRequest cannot load file:///C:/Users/Administrator/Desktop/%E7%A7%BB%E5%8A%A8WEB%E7%9B%B8%E5%86%8C/ajax/photo.json. Cross origin requests are only supported "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("翻译之后明白了是跨域的问题，解决方法也很简单，就是把文件全部部署在服务器上，但是我之前的服务器忘记续费了，所以只能换另一种方法，webstorm。")]),a._v(" "),s("blockquote",[s("p",[a._v("Tip：之前，一直使用sublime，虽然下载了webstorm，但是基本不怎么用。这回，明白了它的好。")])]),a._v(" "),s("h3",{attrs:{id:"第三版-ajaxload-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三版-ajaxload-js"}},[a._v("#")]),a._v(" 第三版（ajaxLoad.js）")]),a._v(" "),s("p",[a._v("这回把需要的方法都封装了，为了加载时后的复用。")]),a._v(" "),s("h4",{attrs:{id:"图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[a._v("#")]),a._v(" 图片")]),a._v(" "),s("ol",[s("li",[a._v("image(photoSrc)，canvas加载图片的方法，本来是为了防止以后还要用，所以就封装了（结果没用上···）。")]),a._v(" "),s("li",[a._v("loadPhoto(photoLen)，批量加载，麻烦的地方在于计算padding（每行最左边，padding-left = 0;）。")]),a._v(" "),s("li",[a._v("接着就是使用ajax加载数据，因为之前封装好了方法，所以，只需要调用loadPhoto就可以了，由于id不能重复，所以我使用全局变量关联加载数据次数和滑动次数（loadNum）。")])]),a._v(" "),s("h4",{attrs:{id:"绑定方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定方法"}},[a._v("#")]),a._v(" 绑定方法")]),a._v(" "),s("p",[a._v("与之前的交互几乎一样，需要更改的是index值，修正了之前加载后的图片绑定的事件的问题。")]),a._v(" "),s("h2",{attrs:{id:"想法与改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想法与改进"}},[a._v("#")]),a._v(" 想法与改进")]),a._v(" "),s("blockquote",[s("p",[a._v("之前还有一些想法没有实现，主要是逻辑方面没理清：我想做每次滑动都加载一部分图片，但是写出来之后却发现加载了节点却没加载对应的图片。")])]),a._v(" "),s("p",[a._v("现在解决了。方法就是改变之前的html()，使用append()。＼(＾∀＾)メ(＾∀＾)ノ")]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("p",[a._v("12-16更新")]),a._v(" "),s("blockquote",[s("p",[a._v("现在解决了穿透的问题，但是又发现了新问题：zepto在chrome上非常不稳定，经常失效。")])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);