<!--
 * @Author: Tom
 * @Date: 2023-05-06 11:28:34
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## 卸载

停止相关服务
```bash
systemctl stop kubelet 
systemctl stop etcd 
systemctl stop docker
```
卸载K8S
```bash
kubeadm reset -f
```

删除相关目录及文件
```bash
modprobe -r ipip
lsmod
rm -rf ~/.kube/
rm -rf /etc/kubernetes/
rm -rf /etc/systemd/system/kubelet.service.d
rm -rf /etc/systemd/system/kubelet.service
rm -rf /usr/bin/kube*
rm -rf /etc/cni
rm -rf /opt/cni
rm -rf /var/lib/etcd
rm -rf /var/etcd
```
卸载k8s相关程序
```bash
yum -y remove kube*
```

验证
```bahs
kubectl version
```