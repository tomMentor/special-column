<!--
 * @Author: Tom
 * @Date: 2023-05-08 11:20:42
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## Pod 一直处于 Pending 状态


```bash
kubectl get pods --all-namespaces -o wide  
```
```js
NAMESPACE     NAME                                READY   STATUS 
default       nginx-deployment-7dd94b49b-f7trw    0/1     Pending
```

查看日志
```bash
kubectl describe pod nginx-deployment-7dd94b49b-f7trw -n default
```
::: danger
   日志结果
:::
```js
Warning  FailedScheduling  6s (x4 over 3m32s)  default-scheduler  0/1 nodes are available: 1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate.
```

解决方案
```bash
# 查看节点的污点
kubectl get no -o yaml | grep taint -A 5

# 删除master节点的污点设置
kubectl taint nodes --all node-role.kubernetes.io/master-

```
## Pod ImagePullBackOff 状态

```bash
kubectl get pods --all-namespaces -o wide  
```
```js
NAMESPACE     NAME                                READY   STATUS 
default       siemens-web-5778864894-6mtml        0/1     `ImagePullBackOff`
```
查看日志
```bash
kubectl describe pod siemens-web-5778864894-6mtml -n default
```
::: danger
   日志结果
:::
k8s 集群无法无法拉取镜像
```js
Events:
  Type     Reason     Age                 From               Message
  ----     ------     ----                ----               -------
  Normal   Scheduled  16m                 default-scheduler  Successfully assigned default/siemens-web-6dd99c4cc9-ddlzd to k8s-master
  Warning  Failed     15m (x6 over 16m)   kubelet            Error: ImagePullBackOff
  Normal   Pulling    15m (x4 over 16m)   kubelet            Pulling image "registry.cn-hangzhou.aliyuncs.com/container/project:v1"
  Warning  Failed     15m (x4 over 16m)   kubelet            Failed to pull image "registry.cn-hangzhou.aliyuncs.com/container/project:v1": rpc error: code = Unknown desc = Error response from daemon: pull access denied for registry.cn-hangzhou.aliyuncs.com/container/project, repository does not exist or may require 'docker login': denied: requested access to the resource is denied
  Warning  Failed     15m (x4 over 16m)   kubelet            Error: ErrImagePull
  Normal   BackOff    88s (x66 over 16m)  kubelet            Back-off pulling image "registry.cn-hangzhou.aliyuncs.com/container/project:v1"
```
关键字错误 `docker login` 

解决方案
```bash
# 查看 namespace
kubectl get namespace

# 创建secret
# default namespace 的name,默认  default，可通过 `kubectl get namespace` 查看
kubectl --namespace  default \
    create secret docker-registry regitsiv  \
    --docker-server=registry.cn-hangzhou.aliyuncs.com \
    --docker-username=*****@sina.cn \
    --docker-password="*****" \
    --docker-email=****@sina.cn
```
再重新执行yaml文件