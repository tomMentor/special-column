(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{585:function(s,t,e){"use strict";e.r(t);var a=e(13),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),e("p",[s._v("停止相关服务")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl stop kubelet \nsystemctl stop etcd \nsystemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),e("p",[s._v("卸载K8S")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubeadm reset -f\n")])])]),e("p",[s._v("删除相关目录及文件")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("modprobe -r ipip\nlsmod\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.kube/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/kubernetes/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/systemd/system/kubelet.service.d\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/systemd/system/kubelet.service\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/bin/kube*\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/cni\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /opt/cni\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/etcd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/etcd\n")])])]),e("p",[s._v("卸载k8s相关程序")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum -y remove kube*\n")])])]),e("p",[s._v("验证")]),s._v(" "),e("div",{staticClass:"language-bahs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl version\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);