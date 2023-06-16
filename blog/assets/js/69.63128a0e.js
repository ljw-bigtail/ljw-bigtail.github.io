(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{657:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("博客搭建好了，但是我的网站不仅只需要博客，还想放置一些静态页面，这些都可以通过一些shell来执行部署。")]),s._v(" "),t("h2",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),t("ol",[t("li",[s._v("需要一个首页，静态页面就可以，然后首页增加一些入口可以引导进入单独的项目中")]),s._v(" "),t("li",[s._v("博客站点作为一个路径，相当于博客整体从 www.numplanet.com/blog 进入")])]),s._v(" "),t("p",[s._v("总结下，我需要通过shell来在build项目之后再移动文件夹并组成新的项目")]),s._v(" "),t("h2",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),t("ol",[t("li",[s._v("新增一个项目（项目A）作为Github Page存储位置，博客项目（项目B）/其他项目（项目C）作为单独的项目 存储在其他项目中")]),s._v(" "),t("li",[s._v("给项目A中添加shell文件"),t("code",[s._v("deploy.sh")]),s._v("，作为核心部署脚本")]),s._v(" "),t("li",[s._v("给项目B/C等中添加添加shell文件"),t("code",[s._v("deploy.sh")]),s._v("，仅实现跳转到A项目并执行 A/deploy.sh 即可")])]),s._v(" "),t("p",[s._v("举个例子")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# B/C项目中deploy.sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到A项目 并执行sh文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("github-page-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" deploy.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A项目下deploy.sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包 - 复制 子项目文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# blog ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/Blog\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# B项目编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf ./docs/.vuepress/dist/* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("github-page-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io/blog\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目C")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/C\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C项目编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf ./dist/* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("github-page-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包 - 复制 end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("github-page-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("ol",[t("li",[s._v("因为这种项目编译后产生的文件没有执行检查相关的操作，所以最好在命名文件的之后避免文件名重复导致先复制进去的文件被覆盖")]),s._v(" "),t("li",[s._v("GitHub page 发布的速度没有那么快 上传后等两分钟再看")]),s._v(" "),t("li",[s._v("列表下面不能紧跟一个代码块 否则会重复渲染")])]),s._v(" "),t("p",[s._v("如果之前没有注意，可以全局正则搜索下 然后手动给中间增加文字或者其他内容来防止异常产生")]),s._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[s._v("[0-9]\\.\\s(\\S)*\n\n\\`\\`\\`\n\x3c!-- 注意 \\` 是为了让md能识别，自己用的时候去掉\\ --\x3e\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);