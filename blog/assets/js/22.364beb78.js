(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{612:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我认为Ajax是非常关键的知识，但是由于并没有接触过实际的项目，我认为自己的Ajax水平差很远。")]),t._v(" "),a("p",[t._v("未完待续。")]),t._v(" "),a("h2",{attrs:{id:"异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),a("h3",{attrs:{id:"现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[t._v("#")]),t._v(" 现状")]),t._v(" "),a("p",[t._v("过去是提交表单刷新，如果出现错误需要等服务器返回验证才能再次更正，原因是缺少XMLHttpRequest对象。")]),t._v(" "),a("p",[t._v("现在有了XMLHttpRequest对象，就可以用于后台和服务器交换数据，并且不刷新页面，实现异步。")]),t._v(" "),a("h3",{attrs:{id:"实现异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现异步"}},[t._v("#")]),t._v(" 实现异步")]),t._v(" "),a("ol",[a("li",[t._v("用HTML、CSS表示页面；")]),t._v(" "),a("li",[t._v("用XMLHttpRequest和Web服务器进行交换数据的异步交换；")]),t._v(" "),a("li",[t._v("用JavaScript操作DOM，实现局部刷新。")])]),t._v(" "),a("h3",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),a("h4",{attrs:{id:"创建xmlhttprequest对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建xmlhttprequest对象"}},[t._v("#")]),t._v(" 创建XMLHttpRequest对象")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//普通写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//兼容写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IE7+,FF,Chrome,Opera,SF")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.XMLHTTP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IE5、IE6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"xmlhttprequest发送请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest发送请求"}},[t._v("#")]),t._v(" XMLHttpRequest发送请求")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//按逻辑顺序")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("asyns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“请求头属性”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“请求头参数”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//POST中不可缺少的代码")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"详解方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详解方法"}},[t._v("#")]),t._v(" 详解方法")]),t._v(" "),a("ul",[a("li",[t._v("创建请求：open(method,url,asyns)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("method")]),t._v(" "),a("td",[t._v("表示发送请求的方式（GET / POST）")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("表示请求地址（相对地址 / 绝对地址）")])]),t._v(" "),a("tr",[a("td",[t._v("async")]),t._v(" "),a("td",[t._v("表示请求类型是否是异步（异步true / 同步false）")])])])]),t._v(" "),a("ul",[a("li",[t._v("发送请求：send(string)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("情况")]),t._v(" "),a("th",[t._v("内容")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("请求方法为GET")]),t._v(" "),a("td",[t._v("为空或null")])]),t._v(" "),a("tr",[a("td",[t._v("请求方法为POST")]),t._v(" "),a("td",[t._v("填写请求体")])])])]),t._v(" "),a("h4",{attrs:{id:"xmlhttprequest取得响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest取得响应"}},[t._v("#")]),t._v(" XMLHttpRequest取得响应")]),t._v(" "),a("p",[t._v("responseText：获取字符串形式的响应数据")]),t._v(" "),a("p",[t._v("responseXML：获取XML形式的响应数据")]),t._v(" "),a("p",[t._v("status和statusText：以数字和文本形式返回HTTP状态码")]),t._v(" "),a("p",[t._v("getAllResponseHeader()：获取所有的响应报头")]),t._v(" "),a("p",[t._v("getResponseHeader()：查询响应中某个字段的值")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("readyState属性")]),t._v(" "),a("p",[t._v("0：请求未初始化，open还未调用")]),t._v(" "),a("p",[t._v("1：服务器连接已经建立，open已经调用")]),t._v(" "),a("p",[t._v("2：请求已接收，也就是接收到头信息了")]),t._v(" "),a("p",[t._v("3：请求处理中，也即是接收到响应主体了")]),t._v(" "),a("p",[t._v("4：请求完成，且响应完成")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get.php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断是否成功取得服务器响应")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//功能代码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("需要软件：XAMPP v3.2.2、Fiddler4")]),t._v(" "),a("p",[t._v("需要文件：测试用的php文件（"),a("a",{attrs:{href:"http://pan.baidu.com/s/1nuWX6Gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度网盘"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("h4",{attrs:{id:"测试步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试步骤"}},[t._v("#")]),t._v(" 测试步骤")]),t._v(" "),a("ol",[a("li",[t._v("打开XAMPP，开启Apache服务，点击Start。如果端口冲突，点击Config-httpd.conf，配置端口号；")]),t._v(" "),a("li",[t._v("把php文件放在xampp里（C:\\xampp\\htdocs\\ajaxDemo），在浏览器中打开（ "),a("a",{attrs:{href:"http://localhost:8081/ajaxDemo/server.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8081/ajaxDemo/server.php"),a("OutboundLink")],1),t._v(" ），会显示参数错误（后面会用fiddler模拟）；")]),t._v(" "),a("li",[t._v("打开Fiddler，点击右侧的Composer；")]),t._v(" "),a("li",[t._v("选择GET，输入URL（ "),a("a",{attrs:{href:"http://localhost:8081/ajaxDemo/server.php?number:101",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8081/ajaxDemo/server.php?number:101"),a("OutboundLink")],1),t._v(" ），获得员工信息（php文件内含的）（显示在Inspectors内），如果URL的参数不写或出错，会返回错误；")]),t._v(" "),a("li",[t._v("选择POST，输入URL（ "),a("a",{attrs:{href:"http://localhost:8081/ajaxDemo/server.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8081/ajaxDemo/server.php"),a("OutboundLink")],1),t._v(" ），在请求头填写（Content-Type: application/x-www-form-urlencoded）（为了告诉服务器说这是POST请求），返回（参数错误，员工信息填写不全），因为并没有填写信息；")]),t._v(" "),a("li",[t._v("再在请求体填写规定格式的信息（name=陆家伟&number=119&sex=男&job=前端工程师），返回（员工：陆家伟 信息保存成功！）（实际php未真正保存信息到数据库，因为并没有使用数据库）；")]),t._v(" "),a("li",[t._v("测试完成。")])]),t._v(" "),a("p",[a("em",[t._v("规定：信息填写完后，回车或Execute，就可以发送信息了。")])]),t._v(" "),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),a("p",[t._v("json是一种方便的数据格式。")]),t._v(" "),a("h3",{attrs:{id:"json规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json规则"}},[t._v("#")]),t._v(" json规则")]),t._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("“名称”：“值对”，")]),t._v(" "),a("h4",{attrs:{id:"解析方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析方法"}},[t._v("#")]),t._v(" 解析方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("eval( '(' + jsonData + ')' );")]),t._v("，解析并执行（如果json内有function）。")]),t._v(" "),a("li",[a("code",[t._v("JSON.parse(jsonData);")]),t._v("，仅解析。"),a("em",[t._v("推荐")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//基本的json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("“staff”")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"王五"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解析方法1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解析方法2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jsonObj.staff[0].name;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//基本的json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("“staff”")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"王五"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解析方法1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解析方法2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jsonObj.staff[0].name;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("用来与服务器交互数据的一种协议。")]),t._v(" "),a("h3",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ol",[a("li",[t._v("简历TCP连接")]),t._v(" "),a("li",[t._v("Web浏览器向Web服务器发送请求命令")]),t._v(" "),a("li",[t._v("Web浏览器发送请求头信息")]),t._v(" "),a("li",[t._v("Web服务器应答")]),t._v(" "),a("li",[t._v("Web服务器发送应答头信息")]),t._v(" "),a("li",[t._v("Web服务器向浏览器发送数据")]),t._v(" "),a("li",[t._v("Web服务器关闭TCP连接")])]),t._v(" "),a("h3",{attrs:{id:"http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[t._v("#")]),t._v(" HTTP请求")]),t._v(" "),a("ol",[a("li",[t._v("HTTP请求的方法或动作，（GET或者POST）。")]),t._v(" "),a("li",[t._v("正在请求的URL，（地址）。")]),t._v(" "),a("li",[t._v("请求头，（包含客户端环境信息，身份验证等）。")]),t._v(" "),a("li",[t._v("请求体，（包含查询字符串，表单信息）。")]),t._v(" "),a("li",[t._v("请求头与请求体中间存在一个空行表示分隔。")])]),t._v(" "),a("h3",{attrs:{id:"http请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[t._v("#")]),t._v(" HTTP请求方法")]),t._v(" "),a("ul",[a("li",[t._v("GET：一般用于信息查询获取，查询内容对任何人可见，使用URL传递参数，对发送信息的数量有限制（2000字符内）。")]),t._v(" "),a("li",[t._v("POST：发送信，一般用于修改服务器的资源，对于发送信息无限制。")])]),t._v(" "),a("h3",{attrs:{id:"http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),a("ul",[a("li",[t._v("1XX：信息类，表示收到请求，正在处理；")]),t._v(" "),a("li",[t._v("2XX：成功，表示成功被接收；")]),t._v(" "),a("li",[t._v("3XX：重定向，表示请求不成功，客户需要采取进一步的错误；")]),t._v(" "),a("li",[t._v("4XX：客户端错误，表示请求有错误；")]),t._v(" "),a("li",[t._v("5XX：服务器错误，表示服务器不能完成处理请求。")])]),t._v(" "),a("h4",{attrs:{id:"常见的有"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的有"}},[t._v("#")]),t._v(" 常见的有")]),t._v(" "),a("p",[t._v("100：请求已经接受，请继续发送其余请求")]),t._v(" "),a("p",[t._v("200：成功")]),t._v(" "),a("p",[t._v("202：已经接受请求，但未处理完成")]),t._v(" "),a("p",[t._v("205：没有新内容，强制清除表单内容")]),t._v(" "),a("p",[t._v("301：客户请求的文档在其他地方，并返回新URL")]),t._v(" "),a("p",[t._v("302：同301，但是新URL是临时的")]),t._v(" "),a("p",[t._v("303：请求方法错误，原来是POST，改成GET")]),t._v(" "),a("p",[t._v("304：服务器发现缓存未更改，让浏览器读缓存")]),t._v(" "),a("p",[t._v("400：语法错误")]),t._v(" "),a("p",[t._v("403：资源不可用")]),t._v(" "),a("p",[t._v("404：无法找到资源")]),t._v(" "),a("p",[t._v("414：URL太长")]),t._v(" "),a("p",[t._v("500：服务器跪了")]),t._v(" "),a("p",[t._v("501：服务器不支持这个功能")]),t._v(" "),a("p",[t._v("502：服务器作为网关或代理访问下一个服务器，但收到了非法应答")]),t._v(" "),a("p",[t._v("503：服务器维护或高负载未能应答")]),t._v(" "),a("p",[t._v("504：类似502，服务器未收到应答")]),t._v(" "),a("p",[t._v("505：服务器不支持HTTP的版本")])])}),[],!1,null,null,null);s.default=e.exports}}]);