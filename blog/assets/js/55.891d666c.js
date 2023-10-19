(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{641:function(s,t,e){"use strict";e.r(t);var a=e(10),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Mac使用相关")]),s._v(" "),e("h2",{attrs:{id:"mac-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-常用命令"}},[s._v("#")]),s._v(" Mac 常用命令")]),s._v(" "),e("ul",[e("li",[s._v("【编辑host】sudo vim /etc/hosts")]),s._v(" "),e("li",[s._v("【查看端口号port对应的进程】lsof -i tcp:[port]")]),s._v(" "),e("li",[s._v("【结束进程】sudo kill [pid]")]),s._v(" "),e("li",[s._v("【清屏】clear")]),s._v(" "),e("li",[s._v("【拷贝文件】ctp 文件源路径 文件目标路径")]),s._v(" "),e("li",[s._v("【新建文件】touch [filename.abc]")]),s._v(" "),e("li",[s._v("【解压 需要安装unar】unar [filename.abc]")])]),s._v(" "),e("h2",{attrs:{id:"homebrew-相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-相关"}},[s._v("#")]),s._v(" HomeBrew 相关")]),s._v(" "),e("ul",[e("li",[s._v("【安装homebrew】 "),e("code",[s._v('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')]),s._v(" "),e("ul",[e("li",[s._v("因为是官方的安装脚本，可能速度很慢，此时请使用中科大的脚本 "),e("code",[s._v('/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"')])])])]),s._v(" "),e("li",[s._v("【切换源】需要依次执行下面的命令\n"),e("ul",[e("li",[e("code",[s._v('git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git')])]),s._v(" "),e("li",[e("code",[s._v('git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git')])]),s._v(" "),e("li",[e("code",[s._v('git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git')])]),s._v(" "),e("li",[e("code",[s._v("brew update")])])])])]),s._v(" "),e("h2",{attrs:{id:"解压命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压命令"}},[s._v("#")]),s._v(" 解压命令")]),s._v(" "),e("p",[s._v("官方的支持格式不多，unar是一个万能解压缩工具，需要手动安装下。")]),s._v(" "),e("ul",[e("li",[s._v("【安装解压工具unar】homebrew install unar")]),s._v(" "),e("li",[s._v("【解压命令】unar test.zip -o /home/dir/ -p 123456")])]),s._v(" "),e("blockquote",[e("p",[s._v("-o 是目标路径 -p 是密码，其他的参数输入unar查看下吧")])]),s._v(" "),e("h2",{attrs:{id:"forticlient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forticlient"}},[s._v("#")]),s._v(" FortiClient")]),s._v(" "),e("p",[s._v("m1芯片打开后 软件显示空白。估计是有啥奇怪的问题。")]),s._v(" "),e("p",[s._v("可以使用 开源包"),e("strong",[s._v("openfortivpn")]),s._v(" 启动。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \x3c!--安装openfortivpn--\x3e")]),s._v("\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openfortivpn\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \x3c!--创建文件并配置--\x3e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.22")]),s._v(".228.210\nport "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10443")]),s._v("\nusername "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tigestream@orderplus.com\npassword "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tigestream\ntrusted-cert "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c526ff0f763f519ad61b7c015c38fbd22a1a55b82d0ed680f39f3092c679a339\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \x3c!--终端启动服务--\x3e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" openfortivpn -c "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("config文件目录"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \x3c!-- 也可以写个sh文件直接执行，省的记命令了 --\x3e")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("需要注意：trusted-cert后面的参数大概率不知道，可以先省掉这一行，先启动服务，终端中会报错如下。然后把ERROR中的值粘贴进来再次启动就好了。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ERROR:  Gateway certificate validation failed, and the certificate digest is not "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" whitelist. If you trust it, rerun with:\nERROR:      --trusted-cert c526ff0f763f519ad61b7c015c38fbd22a1a55b82d0ed680f39f3092c679a339\nERROR:  or "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" this line to your configuration file:\nERROR:      trusted-cert "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c526ff0f763f519ad61b7c015c38fbd22a1a55b82d0ed680f39f3092c679a339\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"更新到12后-git没了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新到12后-git没了"}},[s._v("#")]),s._v(" 更新到12后，git没了")]),s._v(" "),e("p",[s._v("更新到 MacOS Monterty(12.2.1) 后，遇到的第一个问题就是，我的git没了。")]),s._v(" "),e("p",[s._v("在我想用brew 重新安装git时，系统提示")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo brew install git")]),s._v("\nError: Running Homebrew as root is extremely dangerous and no longer supported.\nAs Homebrew does not drop privileges on installation you would be giving all\nbuild scripts full access to your system.\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# brew install git")]),s._v("\nError: No developer tools installed.\nInstall the Command Line Tools:\n  xcode-select --install\n\nError: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" must be installed and "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nError: No developer tools installed.\nInstall the Command Line Tools:\n  xcode-select --install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("按照命令执行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xcode-select --install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("等待重新安装xcode之后就可以使用git了")]),s._v(" "),e("blockquote",[e("p",[s._v("百度后发现，mac升级系统时会删除xcode，想不通是为啥；另外升级系统之后，我硬盘多出来20多G，不知道把啥玩意给我删了···")])])])}),[],!1,null,null,null);t.default=n.exports}}]);