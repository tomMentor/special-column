<!--
 * @Author: Tom
 * @Date: 2023-05-09 11:43:52
 * @LastEditors: Please set LastEditors
 * @Description: 
-->


查看traefik是否已运行
```bash
kubectl get service
```
```js
NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                                        AGE
kubernetes            ClusterIP   10.96.0.1       <none>        443/TCP                                        24h
test-web-service      ClusterIP   10.98.10.44     <none>        80/TCP                                         18h
traefik               NodePort    10.109.252.39   <none>        8000:30518/TCP,8080:30064/TCP,4443:32029/TCP   17h
```
## 配置服务器的 nginx 映射

```bash
cd /etc/nginx/conf.d/
vim k8s.conf
```
```bash
server {
        listen  80;
        server_name     <Your domain name>;

        location / {
                # proxy_pass    http://127.0.0.1:8000;
                proxy_pass      http://主机IP:30518;
                proxy_set_header Host $host;
        }
}
```
退出保存
```bash
# 测试是否配置正确
nginx -t
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
# syntax is ok 代表配置正确

# 重启nginx 
nginx -s reload
```
大功告成，可以通过域名访问了.