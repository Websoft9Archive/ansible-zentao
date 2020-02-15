(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{189:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多...")]),t._v(" "),a("p",[t._v("下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助")]),t._v(" "),a("h2",{attrs:{id:"域名绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),a("p",[t._v("绑定域名的前置条件是：已经完成域名解析（登录域名控制台，增加一个A记录指向服务器公网IP）")]),t._v(" "),a("p",[t._v("完成域名解析后，从服务器安全和后续维护考量，需要完成"),a("strong",[t._v("域名绑定")]),t._v("：")]),t._v(" "),a("p",[t._v("ZenTao 域名绑定操作步骤：")]),t._v(" "),a("ol",[a("li",[t._v("使用 SFTP 工具登录云服务器")]),t._v(" "),a("li",[t._v("修改 "),a("router-link",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("虚拟机主机配置文件")]),t._v("，将其中的域名相关的值"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#### ZenTao(LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName  www.mydomain.com # 修改成您的实际域名\n  DocumentRoot "/data/wwwroot/zentao"\n  ...\n  \n#### ZenTao(LNMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name zentao.example.com; # 修改成您的实际域名\n  ...\n\n')])])])],1),t._v(" "),a("li",[t._v("保存配置文件，"),a("router-link",{attrs:{to:"/zh/admin-services.html#apache"}},[t._v("重启服务")])],1)]),t._v(" "),a("h2",{attrs:{id:"zentao-多语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zentao-多语言","aria-hidden":"true"}},[t._v("#")]),t._v(" ZenTao 多语言")]),t._v(" "),a("p",[t._v("ZenTao 支持多语言，直接到后台切换即可"),a("br"),t._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-changelanguage-websoft9.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"zentao-安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zentao-安装插件","aria-hidden":"true"}},[t._v("#")]),t._v(" ZenTao 安装插件")]),t._v(" "),a("p",[t._v("ZenTao 提供了 "),a("a",{attrs:{href:"https://www.zentao.net/extension-browse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件市场"),a("OutboundLink")],1),t._v(" 以方便用户扩展功能")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("登录后台，打开"),a("strong",[t._v("插件市场")]),t._v("，搜寻所需的扩展\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-dlplugins-websoft9.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("点击【下载】，开始安装（安装过程中需要登录 ZenTao 官网）\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-installplugin-websoft9.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("如果是收费插件，需要输入本地电脑的 MAC 地址以验证版权")])])]),t._v(" "),a("p",[t._v("也可以通过手工安装插件：下载插件，并压缩，然后将目录拷贝到禅道对应的目录，比如 "),a("em",[t._v("/zentao/module")])]),t._v(" "),a("h2",{attrs:{id:"zentao-重置管理员密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zentao-重置管理员密码","aria-hidden":"true"}},[t._v("#")]),t._v(" ZenTao 重置管理员密码")]),t._v(" "),a("p",[t._v("禅道管理员密码忘记了，怎么找回？ 使用 phpMyAdmin 登录禅道数据库 "),a("strong",[t._v("zt_user")]),t._v(" 表，找到用户的记录，把 password 的值改成 "),a("code",[t._v("e10adc3949ba59abbe56e057f20f883e")]),t._v(" ，登录密码重置为："),a("code",[t._v("123456")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-recoverpw-websoft9.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"zentao-命令操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zentao-命令操作","aria-hidden":"true"}},[t._v("#")]),t._v(" ZenTao 命令操作")]),t._v(" "),a("p",[t._v("ZenTao 提供了一套命令操作，详情参考官方文档："),a("a",{attrs:{href:"https://www.zentao.net/book/zentaopmshelp/35.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("初始化管理脚本"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"zentao-集成-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zentao-集成-git","aria-hidden":"true"}},[t._v("#")]),t._v(" ZenTao 集成 Git")]),t._v(" "),a("p",[t._v("参考官方文档："),a("a",{attrs:{href:"https://www.zentao.net/book/zentaopmshelp/207.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成禅道和Git"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);