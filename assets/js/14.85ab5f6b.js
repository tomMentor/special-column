(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{575:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"run-nginx-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-nginx-test"}},[s._v("#")]),s._v(" Run nginx test")]),s._v(" "),a("p",[s._v("先检查 Docker 状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Active: active (running) 运行中")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像列表是空的")]),s._v("\nREPOSITORY   TAG       IMAGE ID   CREATED   SIZ\n\n")])])]),a("p",[s._v("镜像列表是空的,首先需要要使用 docker 拉取 nginx 镜像")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 未指定 nginx 版本默认最新版本 latest")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Message\n\nUsing "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("tag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" latest\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("latest\ndocker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("latest\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次查看镜像列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列表中有 nginx 镜像")]),s._v("\nREPOSITORY   TAG       IMAGE ID       CREATED       SIZE\nnginx        latest    6efc10a0510f   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago   142MB\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 nginx 部署")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name run-nginx -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 -d nginx\n\n-------------------------------------------------------------------------------------------\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名字")]),s._v("\n--name \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# #映射端口，将docker宿主机的 8080 端口和容器的80端口进行绑定")]),s._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示启动的是哪个镜像")]),s._v("\n-d nginx\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Message\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成功运行")]),s._v("\n95a08c9651a109278201adc6b4dcd077e81253c42ca926c372cc8bfe36ed040c\n")])])]),a("p",[s._v("验证")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Message\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTAINER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IMAGE")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMAND")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATED")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STATUS")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PORTS")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NAMES")]),s._v("\n95a08c9651a1   nginx     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/docker-entrypoint.…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp   run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nginx\n\n")])])]),a("p",[s._v("浏览可以通过服务器的公网 "),a("code",[s._v("IP:8080")]),s._v(" 访问了, 如果访问不到，需查看服务的安全组，是否暴露 80 端口")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阿里云安全组")]),s._v("\n允许\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t自定义 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("目的")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("源")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问 IP:8080 结果，成功运行")]),s._v("\nWelcome to nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nIf you see "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" the nginx web server is successfully installed and working"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Further configuration is required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nFor online documentation and support please refer to nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nCommercial support is available at nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nThank you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);