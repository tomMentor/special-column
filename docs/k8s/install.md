<!--
 * @Author: Tom
 * @Date: 2023-05-06 11:29:57
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## 准备工作

修改主机名(我只演示一台节点)
```bash
# 主节点
hostnamectl set-hostname k8s-master

```
修改hosts
```bahs
cat >/etc/hosts <<EOF
192.168.56.101    k8s-master
EOF
```

转发IPv4并让iptables看到桥接流量
```bash
cat >/etc/modules-load.d/k8s.conf <<EOF
overlay
br_netfilter
EOF
```
```bash
modprobe overlay
modprobe br_netfilter
```
```bahs
cat >/etc/sysctl.d/k8s.conf <<EOF
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
net.ipv4.ip_forward=1
EOF
```
```bahs
sysctl --system
```

```bash
# 通过运行以下指令确认 br_netfilter 和 overlay 模块被加载
lsmod | egrep 'overlay|br_netfilter'
# 通过运行以下指令确认 net.bridge.bridge-nf-call-iptables、net.bridge.bridge-nf-call-ip6tables 系统变量在你的 sysctl 配置中被设置为 1
sysctl net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward
```
关闭swap分区或者禁用swap文件
```bash
swapoff -a && sed -ri 's/.*swap.*/#&/' /etc/fstab
```
关闭selinux
```bash
setenforce 0 && sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config
```
## 安装k8s

使用阿里云k8s源
```bahs
cat >/etc/yum.repos.d/kubernetes.repo <<EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```
安装工具kubelet、kubeadm、kubectl
```
yum install -y kubelet-1.23.17 kubeadm-1.23.17 kubectl-1.23.17 --disableexcludes=kubernetes
```

```js
Message / 安装成功

Installed:
  cri-tools-1.26.0-0.x86_64               
  kubeadm-1.23.17-0.x86_64               
  kubectl-1.23.17-0.x86_64               
  kubelet-1.23.17-0.x86_64               
  kubernetes-cni-1.2.0-0.x86_64              

Complete!
```