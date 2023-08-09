(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{664:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("看了飞猪在掘金上发的文"),t("RouterLink",{attrs:{to:"/blogs/Store/2022-12-05【demo】.html"}},[s._v("改良了下传说中最快的终端")]),s._v("，想着尝试一下。在使用的过程中发现一些步骤在文章中没有写明，所以我补充记录一下。")],1),s._v(" "),t("h2",{attrs:{id:"fish设为默认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fish设为默认"}},[s._v("#")]),s._v(" fish设为默认")]),s._v(" "),t("p",[s._v("文章中可以跳转到"),t("a",{attrs:{href:"https://fishshell.com/docs/current/index.html#default-shell",target:"_blank",rel:"noopener noreferrer"}},[s._v("fishshell官方文档"),t("OutboundLink")],1),s._v("中查看，官方提到的步骤是：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 /etc/shells 文件中添加一行内容：/usr/local/bin/fish ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" /usr/local/bin/fish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/shells\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置默认shell ")]),s._v("\nchsh -s /usr/local/bin/fish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"终端中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终端中"}},[s._v("#")]),s._v(" 终端中")]),s._v(" "),t("p",[s._v("因为我使用的是brew安装的fish，所以文件路径会不一样，这里的命令会有一点改动：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先查看fish安装的位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" fish\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是返回值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fish: /opt/homebrew/bin/fish /opt/homebrew/share/man/man1/fish.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以替换路径执行下面这两句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" /opt/homebrew/bin/fish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/shells\nchsh -s /opt/homebrew/bin/fish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("要注意的是，"),t("code",[s._v("chsh -s")]),s._v(" 命令是用来配置MacOS中的终端默认打开的工具")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是MacOS默认的工具，恢复默认用这个")]),s._v("\nchsh -s /bin/zsh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"alacritty中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alacritty中"}},[s._v("#")]),s._v(" Alacritty中")]),s._v(" "),t("p",[s._v("如果想在使用 Alacritty 时默认打开 fish，则需要编辑 "),t("code",[s._v("alacritty.yml")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v("步骤：打开文章中提到的 "),t("code",[s._v("alacritty.yml")]),s._v(" 文件，路径 "),t("code",[s._v("~/.config/alacritty/alacritty.yml")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置默认shell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shell")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("program")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /opt/homebrew/bin/fish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("保存后重新打开 Alacritty 即可")]),s._v(" "),t("h3",{attrs:{id:"vscode中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode中"}},[s._v("#")]),s._v(" VScode中")]),s._v(" "),t("p",[s._v("同理，如果想在 VScode 中设置默认 那就在设置中查找 "),t("code",[s._v("shellArgs.osx")]),s._v(" 并选择 "),t("code",[s._v("fish")])])])}),[],!1,null,null,null);a.default=n.exports}}]);