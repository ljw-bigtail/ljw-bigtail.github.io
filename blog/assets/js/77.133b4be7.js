(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{662:function(s,n,t){"use strict";t.r(n);var a=t(10),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("批量把网易云音乐会员下载的文件转换为mp3+封面")]),s._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/waterkokoro/ncmTranslatorScript_python",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载python脚本"),t("OutboundLink")],1),s._v("，下载项目中的"),t("code",[s._v("ncmTranslator.py")]),s._v("文件")]),s._v(" "),t("li",[s._v("新建文件夹（最好不要放在下载文件夹里，会报错，放桌面就行），把ncm文件与ncmTranslator.py文件拖在一起")]),s._v(" "),t("li",[s._v("如果没有 python3 安装一下(Mac)："),t("code",[s._v("brew install python3")])]),s._v(" "),t("li",[s._v("因为脚本中使用了 `` 包，直接执行时候会报错，所以需要修改一些东西")]),s._v(" "),t("li",[s._v("执行脚本")]),s._v(" "),t("li",[s._v("稍等片刻 封面/MP3 就能在刚才新建的文件夹中找到了")])]),s._v(" "),t("p",[s._v("使用到的脚本如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 python3")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 crypto (pip3是python3自带的)")]),s._v("\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crypto\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找 python3 的安装目录 因为版本号不确定 所以最好执行下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python3\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回 /Library/Frameworks/Python.framework/Versions/3.10/bin/python3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制出来下一步要用，替换其中的 bin/python3 变成 lib/python3.10/site-packages")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 得到 /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开上面拼出来的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 目录中是否有 crypto Crypto-1.4.1.dist-info 两个文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改名称变成大写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" crypto Crypto\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" crypto-1.4.1.dist-info Crypto-1.4.1.dist-info\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 pycryptodome")]),s._v("\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pycryptodome\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" python3 /Users/leo/Desktop/ncm/ncmTranslator.py\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行的过程中就能看到文件一步步的解析出来了～")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"编辑mp3文件标签信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑mp3文件标签信息"}},[s._v("#")]),s._v(" 编辑mp3文件标签信息")]),s._v(" "),t("p",[s._v("安装个 mp3tag 操作，支持按规则批量编辑。")]),s._v(" "),t("p",[s._v("提示没权限时候，777就行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 权限给满")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" ./ncm/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"导入封面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入封面"}},[s._v("#")]),s._v(" 导入封面")]),s._v(" "),t("p",[s._v("全选文件， 点击标题栏的魔法棒，选择导入封面")]),s._v(" "),t("p",[s._v("格式字符串填写："),t("code",[s._v("%_filename%.jpg")])]),s._v(" "),t("p",[s._v("勾选移除封面，否则不会覆盖已有的封面")])])}),[],!1,null,null,null);n.default=e.exports}}]);