<!--
 * @Author: Tom
 * @Date: 2023-05-09 11:35:02
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## Ingress 配置
```bash
# ingress.yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: siemens-web-service-ingress-router
  namespace: default
spec:
  entryPoints:
    - web 
  routes:
  - match: Host(`<Your domain name>`)
    kind: Rule
    services:
    # PS：注意，这个name 是跟你的Service 的 name 保持一致
    - name: test-web-service
      port: 80
```

这个文件是放在项目根目录里的。
```bash
kubectl apply -f ingress.yaml
```

```js
PS: 项目根据目录下的 nginx 配置文件，中的 server_name 要换成 <Your domain name>;

server_name  devops.afs-sms.com;
```


  