<!--
 * @Author: Tom
 * @Date: 2023-05-08 11:04:51
 * @LastEditors: 
 * @Description: 
-->
## k8s命令行补全

```bash
! grep -q kubectl "$HOME/.bashrc" && echo "source /usr/share/bash-completion/bash_completion" >>"$HOME/.bashrc"
! grep -q kubectl "$HOME/.bashrc" && echo "source <(kubectl completion bash)" >>"$HOME/.bashrc"
! grep -q kubeadm "$HOME/.bashrc" && echo "source <(kubeadm completion bash)" >>"$HOME/.bashrc"
! grep -q crictl "$HOME/.bashrc" && echo "source <(crictl completion bash)" >>"$HOME/.bashrc"
source "$HOME/.bashrc"
```

```bash
# 获取节点
kubectl get nodes -o wide
# 实时查询nodes状态
watch kubectl get nodes -o wide
# 获取pod
kubectl get pods --all-namespaces -o wide
# 查看镜像列表
kubeadm config images list
# 节点加入集群
kubeadm token create --print-join-command
# 描述node
kubectl describe node k8s-master
# 描述pod
kubectl describe pod kube-flannel-ds-hs8bq --namespace=kube-flannel
```