(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{609:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("如何通过Hexo和GitHub Page服务搭建免费的个人博客。")]),t._v(" "),a("p",[t._v("还有，如何拯救你的博客(／‵口′)／~╧╧")]),t._v(" "),a("h2",{attrs:{id:"搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[t._v("#")]),t._v(" 搭建")]),t._v(" "),a("h3",{attrs:{id:"搭建本地博客-安装hexo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地博客-安装hexo"}},[t._v("#")]),t._v(" 搭建本地博客（安装Hexo）")]),t._v(" "),a("ol",[a("li",[t._v("新建文件夹作为博客目录（/projectName），在命令行工具中打开；")]),t._v(" "),a("li",[t._v("输入命令"),a("code",[t._v("npm install -g hexo")]),t._v("，全局安装hexo脚手架；")]),t._v(" "),a("li",[t._v("输入命令"),a("code",[t._v("hexo init")]),t._v("，初始化一个hexo博客；")]),t._v(" "),a("li",[t._v("安装依赖包"),a("code",[t._v("npm install")]),t._v("；")]),t._v(" "),a("li",[t._v("发布"),a("code",[t._v("hexo g")]),t._v("；")]),t._v(" "),a("li",[t._v("本地服务器（默认 localhost:4000）"),a("code",[t._v("hexo s")]),t._v("。")])]),t._v(" "),a("p",[t._v("至此，博客已经建立成功（本地）。")]),t._v(" "),a("h3",{attrs:{id:"博客配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客配置"}},[t._v("#")]),t._v(" 博客配置")]),t._v(" "),a("ol",[a("li",[t._v("安装主题到 /projectName/themes 中")]),t._v(" "),a("li",[t._v("打开 projextName/_config.yml，找到theme，填写你的主题名称")]),t._v(" "),a("li",[t._v("打开 /projectName/themes/_config.yml 根据对应的主题文档填写配置")])]),t._v(" "),a("h3",{attrs:{id:"百度收录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度收录"}},[t._v("#")]),t._v(" 百度收录")]),t._v(" "),a("p",[t._v("如果你想要在百度上搜索到你的网站，需要打开"),a("a",{attrs:{href:"https://ziyuan.baidu.com/dashboard/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度搜索资源平台"),a("OutboundLink")],1),t._v("，注册账号后，添加网站并收录。")]),t._v(" "),a("p",[t._v("创建网站后验证操作（文件验证）：")]),t._v(" "),a("ol",[a("li",[t._v("下载百度提供的html文件")]),t._v(" "),a("li",[t._v("粘贴文件到：projectName/source/baidu_***.html")]),t._v(" "),a("li",[t._v("打开 projextName/"),a("em",[t._v("config.yml，找到 skip_render ，填写改文件到名称（baidu")]),t._v("***.html）")]),t._v(" "),a("li",[t._v("编译并发布")]),t._v(" "),a("li",[t._v("点击认证，即可证明网站的所有权")])]),t._v(" "),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),a("h3",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("ul",[a("li",[t._v("Git环境")]),t._v(" "),a("li",[t._v("Node环境")]),t._v(" "),a("li",[t._v("GitHub账号")])]),t._v(" "),a("p",[t._v("环境只需下载安装好，一路next就好，注册的也非常简单，全都是提示。")]),t._v(" "),a("h3",{attrs:{id:"git配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" Git配置")]),t._v(" "),a("p",[t._v("这一步骤的主要是为了连接线上，方便后面把本地的项目发布在线上。")]),t._v(" "),a("h4",{attrs:{id:"生成ssh公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh公钥"}},[t._v("#")]),t._v(" 生成SSH公钥")]),t._v(" "),a("p",[t._v("在Git Bash中运行以下代码：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"747624075@qq.com"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("复制刚刚生成的id_rsa.pub文件中的内容，并粘贴在"),a("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub的SSH key设置"),a("OutboundLink")],1),t._v("选项中。")]),t._v(" "),a("blockquote",[a("p",[t._v("id_rsa.pub的路径： C:\\Users\\windows_username\\.ssh\\id_rsa.pub，windows_username是windows用户名。")])]),t._v(" "),a("h4",{attrs:{id:"校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),a("p",[t._v("Git Bash中运行")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("验证信息如下，即为成功配置SSH。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Hi ljw-bigtail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("2017-12-10更新")])]),t._v(" "),a("p",[t._v("今天，我遇到了一种新的提示：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("The authenticity of "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github.com (***.***.***.***)'")]),t._v(" can't be established.\nRSA key fingerprint is SHA256:*******************************************.\nAre you sure you want to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("continue")]),t._v(" connecting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yes/no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("?\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("填写yes之后就可以正确执行并显示如上的信息。")]),t._v(" "),a("h3",{attrs:{id:"github仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github仓库"}},[t._v("#")]),t._v(" Github仓库")]),t._v(" "),a("p",[t._v("打开你的GitHub，新建版本库，名称为"),a("code",[t._v("GitHubID.github.io")]),t._v("（其中，GitHubID是你自己的id,必须按照这个格式来）。")]),t._v(" "),a("p",[t._v("同理，gitLab使用方法类似。")]),t._v(" "),a("h3",{attrs:{id:"部署配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署配置"}},[t._v("#")]),t._v(" 部署配置")]),t._v(" "),a("ol",[a("li",[t._v("打开 projextName/_config.yml")]),t._v(" "),a("li",[t._v("寻找Deployment(Ctrl+F快捷键可以快速查找)，替换此处代码，其中repo后面有两个‘ljw-bigtail’，第一个是你的GitHubID，第二个是刚才设置的库名")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果你留意了创建仓库时的页面，也可以在上面找到repo后面应该填入的路径。")])]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Deployment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##Docs: https://hexo.io/docs/deployment.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/ljw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bigtail/ljw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bigtail.github.io.git\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("由于我把这里搞错过一次，导致一次迁移时，之前的库死活连接不上，只能删库重来···")]),t._v(" "),a("h3",{attrs:{id:"修改与发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改与发布"}},[t._v("#")]),t._v(" 修改与发布")]),t._v(" "),a("ol",[a("li",[t._v("每次修改后都应该重新编译并发布。在博客目录文件夹（D:\\hexo）中启动Git Bash，输入命令"),a("code",[t._v("hexo g")]),t._v("编译，"),a("code",[t._v("hexo d")]),t._v("发布；")]),t._v(" "),a("li",[t._v("这样就可以成功访问你的博客"),a("code",[t._v("ljw-bigtail.github.io")]),t._v(";")]),t._v(" "),a("li",[t._v("现在，我的博客地址为 "),a("a",{attrs:{href:"http://www.bigtail.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.bigtail.com.cn/"),a("OutboundLink")],1),t._v("，实现方法很简单：申请域名并备案，然后把域名解析到原地址"),a("code",[t._v("ljw-bigtail.github.io")]),t._v("对应的ip上（查看方法，cmd中执行ping命令）。")])]),t._v(" "),a("h2",{attrs:{id:"错误记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误记录"}},[t._v("#")]),t._v(" 错误记录")]),t._v(" "),a("h3",{attrs:{id:"question-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question-1"}},[t._v("#")]),t._v(" Question_1")]),t._v(" "),a("h4",{attrs:{id:"问题1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[t._v("#")]),t._v(" 问题1")]),t._v(" "),a("p",[t._v("在一次发布的时候，出现了一个报错：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("warning: LF will be replaced by CRLF\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("p",[t._v("在git bash中运行")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nhexo clean\nhexo g\nhexo s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"question-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question-2"}},[t._v("#")]),t._v(" Question_2")]),t._v(" "),a("h4",{attrs:{id:"问题2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题2"}},[t._v("#")]),t._v(" 问题2")]),t._v(" "),a("p",[t._v("自从我的笔记本坏掉后，我的博客就再也没有复活。")]),t._v(" "),a("p",[t._v("但是今天实在是忍不了了，想手动修复一下，但是始终有如下报错信息。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ hexo d\nINFO  Deploying: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\nINFO  Clearing .deploy_git folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nINFO  Copying files from public folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nOn branch master\nnothing to commit, working tree clean\nremote: Repository not found.\nfatal: repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/ljw-bigtail/ljw-bigtail.github.com.git/'")]),t._v(" ot found\nFATAL Something"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s wrong. Maybe you can find the solution here: http://hexo.io/dcs/troubleshooting.html\nError: remote: Repository not found.\nfatal: repository '")]),t._v("https://github.com/ljw-bigtail/ljw-bigtail.github.com.git/' ot found\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("我查了好久，但是死活是没有合理的解决办法。")]),t._v(" "),a("p",[t._v("重建了个库，解决。")])])}),[],!1,null,null,null);s.default=n.exports}}]);