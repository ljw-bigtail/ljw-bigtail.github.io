(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{627:function(s,e,t){"use strict";t.r(e);var a=t(10),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("话说MongoDB就是因为简介，没有那些乱七八糟的事情才用的。但是，不知怎么的，在我的笔记本上始终不能添加为服务，搞得人很心烦。")]),s._v(" "),t("p",[s._v("不过，皇天不负有心人，我终于还是找到了合理的解决办法。")]),s._v(" "),t("h2",{attrs:{id:"始末"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#始末"}},[s._v("#")]),s._v(" 始末")]),s._v(" "),t("p",[s._v("为了做给毕业设计连接数据库，我在MySQL、MongoDB等数据库中挑选。终于，看到了MongoDB这个相对比较简洁的数据库了，没有了数据关系的麻烦，好用了不少。")]),s._v(" "),t("p",[s._v("之后呢，我在公司的台式机上面使用Node.js的中间件mongoose连接MongoDB，一帆风顺。注册服务的方法也确实是简洁明了——我使用了菜鸟教程上的方式：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongod.exe --logpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\MongoDB\\log\\mongodb.log"')]),s._v(" --logappend --dbpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\MongoDB\\db"')]),s._v(" --serviceName "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB"')]),s._v(" --install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后呢，为了把系统迁移到我的笔记本上，我又尝试同样的步骤，但是始终不行。在服务列表中间死活不见踪影。")]),s._v(" "),t("h2",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[s._v("#")]),s._v(" 方法")]),s._v(" "),t("p",[s._v("试了N多次， 终于找到了合适的方法，终于找到了合适的：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongod.exe --logpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\MongoDB\\Server'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\3"}},[s._v("\\3")]),s._v('.4\\log\\mongodb.log"')]),s._v(" --logappend --dbpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\MongoDB\\Server'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\3"}},[s._v("\\3")]),s._v('.4\\db"')]),s._v(" --directoryperdb --serviceName MongoDB -install\n\n//这个是安装版的默认路径，上面的是绿色版的路径\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"报错与解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报错与解决"}},[s._v("#")]),s._v(" 报错与解决")]),s._v(" "),t("p",[s._v("然后呢，我在服务列表里面找到了MongoDB服务。")]),s._v(" "),t("p",[s._v("但是，服务启动的时候报错："),t("code",[s._v("错误码100")]),s._v("。")]),s._v(" "),t("p",[s._v("解决办法：在mongodb安装路径下db文件中有两个文件一个mongod.lock和storage.bson，一般删除mongod.lock就可以了，如果服务错误代码100还不能解决，就把storage.bson一起删掉再启动就可以了！")]),s._v(" "),t("p",[s._v("Tips：mongodb的安装路径里面有两个文件夹：db、log\\mongodb.log都是我之前新建的，分别是用来保存数据库、日志的。")])])}),[],!1,null,null,null);e.default=n.exports}}]);