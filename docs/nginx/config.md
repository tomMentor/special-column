<!--
 * @Author: Tom
 * @Date: 2022-03-03 16:56:21
 * @LastEditors: Please set LastEditors
 * @Description: 配置
-->
## 自定义配置

### 后端代理
```json
location ^~/ssdtest {
      proxy_set_header X-Real-lp       $remote_addr;
      proxy_set_header Host            $http_host;
      proxy_set_header X-Forward-For   $proxy_add_x_forwarded_for;
      proxy_pass http://localhost:8083/ssd;
}

```
> proxy_pass http://localhost:8083/ssd; 将后端服务地址，进一步映射，前端通过，服务外网 IP/ssdtest 访问

### 前端代理

```json
location ^~/admin/main {
    alias /data/web;
    index index.html index.html;
}
```
> alias /data/apps/ssd/web/web-main; 映射文件目录
