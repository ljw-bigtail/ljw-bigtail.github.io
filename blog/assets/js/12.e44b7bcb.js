(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{601:function(t,e,_){"use strict";_.r(e);var a=_(10),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("在云澜软件实习的期间，收获颇多。")]),t._v(" "),_("p",[t._v("明明白白做人，兢兢业业做事。")]),t._v(" "),_("h2",{attrs:{id:"第一件事-搞定服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一件事-搞定服务"}},[t._v("#")]),t._v(" 第一件事 搞定服务")]),t._v(" "),_("h3",{attrs:{id:"安装配置管理系统-jeecms-v7系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装配置管理系统-jeecms-v7系统"}},[t._v("#")]),t._v(" 安装配置管理系统（JEECMS-V7系统）")]),t._v(" "),_("h4",{attrs:{id:"环境1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境1"}},[t._v("#")]),t._v(" 环境1")]),t._v(" "),_("p",[t._v("jdk 8.0.1010.13")]),t._v(" "),_("p",[t._v("Tomcat 8.5.6")]),t._v(" "),_("p",[t._v("MySQL 5.5.28（"),_("a",{attrs:{href:"http://www.server110.com/mysql/201308/784.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.server110.com/mysql/201308/784.html"),_("OutboundLink")],1),t._v(" ）")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1mi6luXE",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度云"),_("OutboundLink")],1)]),t._v(" "),_("h4",{attrs:{id:"系统安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统安装"}},[t._v("#")]),t._v(" 系统安装")]),t._v(" "),_("ol",[_("li",[t._v("将程序解压后的ROOT文件夹拷贝到tomcat安装目录下的webapps文件夹下")]),t._v(" "),_("li",[t._v("启动tomcat，在地址栏上输入 "),_("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),_("OutboundLink")],1),t._v(" (端口和部署路径视安装设置而定)")]),t._v(" "),_("li",[t._v("点下一步，在“2.系统参数配置”里输入MySql的密码，然后提交，等待提示“3.系统安装完成”")]),t._v(" "),_("li",[t._v("提示如下\n"),_("ol",[_("li",[t._v("恭喜您，系统已经安装成功！")]),t._v(" "),_("li",[t._v("请重启TOMCAT服务。只有重启TOMCAT服务之后，安装才能生效。")]),t._v(" "),_("li",[t._v("后台登录地址“网站根路径/jeeadmin/jeecms/index.do”")]),t._v(" "),_("li",[t._v("后台管理员admin，密码password。")])])]),t._v(" "),_("li",[t._v("登入 "),_("a",{attrs:{href:"http://localhost:8080/jeeadmin/jeecms/index.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/jeeadmin/jeecms/index.do"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("输入账号：admin，密码：password")]),t._v(" "),_("li",[t._v("成功打开系统。")])]),t._v(" "),_("h4",{attrs:{id:"tips-wrong"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tips-wrong"}},[t._v("#")]),t._v(" Tips+Wrong")]),t._v(" "),_("ul",[_("li",[t._v("问题1：开始我用的是免安装版的jdk和tomcat，然后安装到第四步时，提示已经安装完成，但我在进入"),_("a",{attrs:{href:"http://localhost:8080/jeeadmin/jeecms/index.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/jeeadmin/jeecms/index.do"),_("OutboundLink")],1),t._v(" 时提示错误503。")]),t._v(" "),_("li",[t._v("解决办法：删除之前使用的jdk和tomcat，百度上有教程，重新下载新版本的，（apache-tomcat-8.5.6）（jdk_8u101_windows_i586_8.0.1010.13）。之后按照步骤重新配置就可以成功登入")])]),t._v(" "),_("h3",{attrs:{id:"快速配置网站"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速配置网站"}},[t._v("#")]),t._v(" 快速配置网站")]),t._v(" "),_("h4",{attrs:{id:"流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),_("ul",[_("li",[t._v("建立数据库（默认的数据库在 \\ROOT\\install\\db 里，在MySQL里执行）")]),t._v(" "),_("li",[t._v("配置站点（界面右上角-配置-站点设置-域名）")])]),t._v(" "),_("h3",{attrs:{id:"啰嗦一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#啰嗦一下"}},[t._v("#")]),t._v(" 啰嗦一下")]),t._v(" "),_("p",[t._v("之前把系统环境配好了，我以为我需要做的是：在这个后台进行某些操作，生成新的页面（改css之类的）。实际上，是把公司二次开发的源码用eclipse在tomcat上连接数据库，跑起来。（这里出现了两个压缩包，一个是官方的正式系统，一个是未打包的公司二次开发的数据文件）（之前一直理解是都可以在tomcat存放应用的文件夹放置，实际上需要用eclipse run as server）。")]),t._v(" "),_("p",[t._v("之前一直有问题，在网上查了之后，决定把这些记录下来，便于今后使用。")]),t._v(" "),_("h3",{attrs:{id:"环境2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境2"}},[t._v("#")]),t._v(" 环境2")]),t._v(" "),_("ol",[_("li",[t._v("安装jdk，配置环境变量")]),t._v(" "),_("li",[t._v("安装tomcat，配置环境变量")]),t._v(" "),_("li",[t._v("安装eclipse，配置选项")]),t._v(" "),_("li",[t._v("安装MySql，创建数据库")])]),t._v(" "),_("h4",{attrs:{id:"jdk"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[t._v("#")]),t._v(" JDK")]),t._v(" "),_("h5",{attrs:{id:"下载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1pLzZT8J",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk1.6 --- 百度云"),_("OutboundLink")],1)]),t._v(" "),_("h5",{attrs:{id:"安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),_("p",[t._v("按步骤来，之间要注意并记录下的是安装路径（第一次是jdk的路径，第二次是jre的路径），推荐放在D盘根目录下（D:/Java/）。")]),t._v(" "),_("h5",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),_("p",[t._v("我的电脑 - 右键 - 属性 - 高级系统设置 - 高级 - 环境变量")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("环境变量")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("JAVA_HOME")]),t._v(" "),_("td",[t._v("jdk路径（D:\\Java\\jdk1.6.0）")])]),t._v(" "),_("tr",[_("td",[t._v("Path")]),t._v(" "),_("td",[t._v("%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;")])]),t._v(" "),_("tr",[_("td",[t._v("CLASSPATH")]),t._v(" "),_("td",[t._v(".;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\tools.jar")])])])]),t._v(" "),_("p",[t._v("Tips：")]),t._v(" "),_("p",[t._v("Path环境变量可能原来有内容，如果有，就在参数前面加一个 “ ; ” 。")]),t._v(" "),_("p",[t._v("配置后的检查办法是，Win+R，cmd，回车，运行命令"),_("code",[t._v("java -version")]),t._v("，可以查看jdk版本。")]),t._v(" "),_("h4",{attrs:{id:"tomcat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" tomcat")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1pLzZT8J",target:"_blank",rel:"noopener noreferrer"}},[t._v("tomcat 6 绿色版 --- 百度云"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("绿色版不用安装，直接复制到位就可以了（D:/tomcat/）")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("环境变量")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CATALINA_BASE")]),t._v(" "),_("td",[t._v("tomcat路径（D:\\tomcat）")])]),t._v(" "),_("tr",[_("td",[t._v("CATALINA_HOME")]),t._v(" "),_("td",[t._v("tomcat路径（D:\\tomcat）")])]),t._v(" "),_("tr",[_("td",[t._v("PATH")]),t._v(" "),_("td",[t._v("%CATALINA_HOME%\\lib;%CATALINA_HOME%\\bin")])])])]),t._v(" "),_("p",[t._v("Tips：")]),t._v(" "),_("p",[t._v("环境变量和JDK一样。")]),t._v(" "),_("p",[t._v("绿色版是不用担心注册表的，但之前用过安装版的tomcat的一定要打开注册表，Ctrl+F搜索tomcat然后删除。")]),t._v(" "),_("h4",{attrs:{id:"mysql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" mysql")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1pLzZT8J",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql 5.5.28 绿色版 --- 百度云"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("next，勾选，next，选择Custom，设置路径（D:/MySQL/MySQL Server 5.5/），next，设置路径（同前一个），next。")]),t._v(" "),_("p",[t._v("选择Detailed Configuration，next，Server Machine，next，next，Manual Setting（数字改成2000），next，两项都打勾，Manuel Selected ···（选择utf-8），next，勾选Include···，next，Modify···，输入密码两次，next，等待。")]),t._v(" "),_("p",[t._v("打开MySQL 5.5 Command Line Client，然后输入登录密码。")]),t._v(" "),_("p",[t._v("输入以下命令：")]),t._v(" "),_("p",[t._v("create database 库名;")]),t._v(" "),_("p",[t._v("use 数据库;")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("source sql文件路径;\n")])])]),_("blockquote",[_("p",[t._v("文件最好放在根目录。\n根据sql文件的大小可能会等待很久（我等了一下午）。")])]),t._v(" "),_("h4",{attrs:{id:"eclipse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[t._v("#")]),t._v(" eclipse")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1pLzZT8J",target:"_blank",rel:"noopener noreferrer"}},[t._v("eclipse 绿色版 --- 百度云"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("解压就好，绿色版的。")]),t._v(" "),_("ul",[_("li",[t._v("配置eclipse：打开eclipse，选择Window - Preferences，Java - Installed JREs，add，Standard VM，Next，Directory（选择jdk路径），Finish，勾选Name为jdk的；左侧列表，选择Server - Runtime Environments，add，Apache - tomcat6.0，next，选择Browse（tomcat路径），下拉列表里选择Workbench default JRE，Finish，点击OK。")]),t._v(" "),_("li",[t._v("导入项目源码：File - Import，General - ExisIting Projects into Workspace，next，第一个是导入文件夹，第二个是导入压缩包，根据需求都可以，勾选Copy projects into workspace，Finish。")]),t._v(" "),_("li",[t._v("配置项目：在项目上右键 - Properties，Resource - Text file encoding - other - UTF-8， Java Build Path - Libraries中查看是否有问题包（双击JRE System Library - Workspace default JRE - Finish） - Order and Export（Select All） - OK。")]),t._v(" "),_("li",[t._v("新建服务器：在下栏中Server处，右键 - New - Server，Apache - Tomcat 6.0 - Next - 选中项目 - Add - Finish，在服务器名上右键 - start。")]),t._v(" "),_("li",[t._v("打开项目：localhost:8080。")])]),t._v(" "),_("h2",{attrs:{id:"第二件事-jeecms建站"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二件事-jeecms建站"}},[t._v("#")]),t._v(" 第二件事 JEECMS建站")]),t._v(" "),_("p",[t._v("今天的任务是套用静态模板，使用jeecms生成动态的网站。")]),t._v(" "),_("p",[t._v("总的来说并不难，只要找到了规律就可以。")]),t._v(" "),_("h3",{attrs:{id:"第一步-创建静态模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一步-创建静态模板"}},[t._v("#")]),t._v(" 第一步，创建静态模板")]),t._v(" "),_("p",[t._v("之前练习了那么多，现在终于派上用场了。")]),t._v(" "),_("p",[t._v("因为公司提供了新闻类网站的模板，我就看了一下结构，并且实现套用jeecms的内置标签就可以了。")]),t._v(" "),_("h4",{attrs:{id:"jeecms-v7的内置标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jeecms-v7的内置标签"}},[t._v("#")]),t._v(" Jeecms v7的内置标签")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://odmo6x3ig.bkt.clouddn.com/16-10-21/15434937.jpg",alt:"举个例子"}})]),t._v(" "),_("ul",[_("li",[t._v("嵌入网页"),_("code",[t._v('[#include "../include/resource.html" /]')]),t._v("，把重用的部分源码写进新的文件中，然后在合适的位置进行调用。")])]),t._v(" "),_("hr"),t._v(" "),_("ul",[_("li",[t._v("配置文章列表"),_("code",[t._v("[@cms_content_list count='4' orderBy='4' typeId='2' titLen='26' siteId='2'] 内容 [/@cms_content_list]")]),t._v("，把文章列表进行表示的标签，其中的各个参数代表不同意义，需要与下一个标签配合使用。")]),t._v(" "),_("li",[t._v("配置文章"),_("code",[t._v("[#list tag_list as art] 文章内容 [/#list]")]),t._v("，类似于"),_("code",[t._v("<li>")]),t._v("标签，不过只需要一个就可以实现多个标签。")]),t._v(" "),_("li",[t._v("文章内容"),_("code",[t._v("[@text_cut s=art.title len=titLen /]")]),t._v("，填充上一个标签的内容。通过参数取得不同的标题内容。")])]),t._v(" "),_("h3",{attrs:{id:"第二部-使用模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二部-使用模板"}},[t._v("#")]),t._v(" 第二部，使用模板")]),t._v(" "),_("ol",[_("li",[t._v("打开eclipse，导入你的模板")]),t._v(" "),_("li",[t._v("html路径：/WebContent/WEN-INF/t/cms/www/")]),t._v(" "),_("li",[t._v("js\\css\\img路径：/WebContent/r/cms/www/")]),t._v(" "),_("li",[t._v("启动server。")])]),t._v(" "),_("h3",{attrs:{id:"第三步-配置后台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三步-配置后台"}},[t._v("#")]),t._v(" 第三步，配置后台")]),t._v(" "),_("ol",[_("li",[t._v("启动server后。")]),t._v(" "),_("li",[t._v("登入后台（ "),_("a",{attrs:{href:"http://localhost:8080/jeeadmin/jeecms/login.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/jeeadmin/jeecms/login.do"),_("OutboundLink")],1),t._v(" ）配置 - 站点管理 - 添加站点。")]),t._v(" "),_("li",[t._v("需要填的属性：站点名称（随便），域名（重点，127.0.0.4），路径（www），其余不变。")]),t._v(" "),_("li",[t._v("然后在右上角下拉列表选择你的站点。")]),t._v(" "),_("li",[t._v("配置 - 模板 - 设置 - 默认方案 - 选择你的模板 - 设置。")]),t._v(" "),_("li",[t._v("OK！")])]),t._v(" "),_("p",[_("a",{attrs:{href:"http://pan.baidu.com/s/1jI6VIj8",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源下载"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("h3",{attrs:{id:"进度12-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进度12-5"}},[t._v("#")]),t._v(" 进度12.5%")]),t._v(" "),_("p",[t._v("至此，我在公司学到的东西仅限于jeecms的使用、前后端不分离的工作常态与适应工作环境。")]),t._v(" "),_("p",[t._v("我度过很长一段零散的空余时间，在这些碎片中，我迷失了。")]),t._v(" "),_("p",[t._v("就像是在远洋的途中，感受在风暴之巅，孤独而又彷惶。")]),t._v(" "),_("blockquote",[_("p",[t._v("路漫漫其修远兮，吾将上下而求索。")])]),t._v(" "),_("h3",{attrs:{id:"进度25"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进度25"}},[t._v("#")]),t._v(" 进度25%")]),t._v(" "),_("p",[t._v("期间，我加了几次班，不是因为残留的工作，而是因为一次对话，我选择加班。")]),t._v(" "),_("p",[t._v("关于时间碎片，我决定用做项目和看书去提升技术，充分利用时间。")]),t._v(" "),_("p",[t._v("关于经验，我明白，有些事情，不是说说就能明白的；有些时间，非得经历才能感受。")]),t._v(" "),_("p",[t._v("时间线上，我没有止步，我也不会止步；也许会在某时某刻，我会放慢脚步，但我不允许自己止步于此。")]),t._v(" "),_("p",[t._v("因为迷失，不仅仅是对时间的伤害，还是对意志的摧残。")]),t._v(" "),_("h3",{attrs:{id:"进度50"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进度50"}},[t._v("#")]),t._v(" 进度50%")]),t._v(" "),_("p",[t._v("在这期间，我收获到了非常多的东西：")]),t._v(" "),_("p",[t._v("从项目，我自己设计并实现了学校能工院的网站的前端部分，再过一阵正式上线，这就算是一个项目了。")]),t._v(" "),_("p",[t._v("在写页面的过程中，10次改动（以后可能还需要更改）、优化流程等都让我学到了很多知识。")]),t._v(" "),_("p",[t._v("还有一些别的演示Demo，补充了一些知识。")]),t._v(" "),_("ul",[_("li",[t._v("以前我自己写页面，不存在动态的输出，所以就没有考虑过当页面出现形变时，应该做什么。其实很简单，我使用min-Height、max-Height来实现页面的伸缩。")]),t._v(" "),_("li",[t._v("本来这套页面的css在我写了之后就没想过要做大的改变，但之后他们说需要增加页面，我再次翻看css时候发现写的比较乱，So，我注释了页面，并且学习css的书写规范。")])]),t._v(" "),_("p",[t._v("从公司，我学到了很多自学接触不到的东西，做人、做事、态度。")]),t._v(" "),_("p",[t._v("公司的这个扶贫平台项目在横山演示的时候出现了一点问题，算是危机（部分演示账号无法登陆），不过白总完美的应对过去了，但第二天开的会，让我明白了如何及时、高效的应对危机是作为员工必须要做到的（如果不能做到及时想到，就应该准备好预案，以便完整的应对突发事件）。")]),t._v(" "),_("ul",[_("li",[t._v("广阔的视野。确实，做事，就要有比其他人更广的眼界，做不到这点就难以提高。我在锻炼，并且我认为有了突飞猛进的发展。ㄟ(≧◇≦)ㄏ")]),t._v(" "),_("li",[t._v("高效的工作。在扶贫平台中，我的任务主要是录入数据、测试，我认为只有更高效的执行，公司才会给我安排更多的任务。在实习期间，公司不会给非常难的开发任务，但我可以从公司分给我的任务里发现产品的流程、结构等，慢慢熟悉业务，然后刷新存在感。")]),t._v(" "),_("li",[t._v("细致的做事。在无数次的测试中，我发现开发的过程中，只有熟悉并使用规范才能减少维护所产生的时间成本。")]),t._v(" "),_("li",[t._v('完整的逻辑。在录数据阶段，发现了一些逻辑问题，有一些在我请教了公司的前辈之后，搞明白了；还有一些，比较大的逻辑问题，需要修改后台代码，有些逻辑甚至需要改动很大 ，公司是经不起这样大的风险的。应对方法确实有，但这样挖坑会导致更麻烦的问题（前面说的演示账号无法登陆就是"果"）。So，必须要在写代码之前，优化逻辑，完善流程，确定每个参与者对业务流程的熟悉与问题。')])]),t._v(" "),_("h3",{attrs:{id:"进度100"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进度100"}},[t._v("#")]),t._v(" 进度100%")]),t._v(" "),_("blockquote",[_("p",[t._v("补记于2017-02-03")])]),t._v(" "),_("p",[t._v("其实早就应该写下来这后续的记录，但是一直比较忙。")]),t._v(" "),_("p",[t._v("后续的部分也并没有什么大的改变，只是学到的东西不仅限于表面的东西，更多的，是一种氛围，一种态度。")]),t._v(" "),_("p",[t._v("多说无益，还是做好自己应该做的事，问心无愧得好。")])])}),[],!1,null,null,null);e.default=v.exports}}]);