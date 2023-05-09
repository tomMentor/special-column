<!--
 * @Author: Tom
 * @Date: 2023-04-29 21:53:19
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## Run nginx test
先检查 Docker 状态
```bash
systemctl status docker

# Active: active (running) 运行中

docker images

# 镜像列表是空的
REPOSITORY   TAG       IMAGE ID   CREATED   SIZ

```
镜像列表是空的,首先需要要使用 docker 拉取 nginx 镜像
```sh
docker pull nginx
# 未指定 nginx 版本默认最新版本 latest
```
```js
Message

Using default tag: latest
..............
..........
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```
```bash
# 再次查看镜像列表
docker images

# 列表中有 nginx 镜像
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    6efc10a0510f   2 weeks ago   142MB

# 将 nginx 部署
docker run --name run-nginx -p 8080:80 -d nginx

-------------------------------------------------------------------------------------------

# 运行
docker run

# 容器名字
--name 

# #映射端口，将docker宿主机的 8080 端口和容器的80端口进行绑定
-p 8080:80 

# 表示启动的是哪个镜像
-d nginx
```
```js
Message

// 成功运行
95a08c9651a109278201adc6b4dcd077e81253c42ca926c372cc8bfe36ed040c
```
验证
```bash
# 查看容器状态
docker ps -a
```
```js
Message

// 运行成功
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
95a08c9651a1   nginx     "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp   run-nginx

```
浏览可以通过服务器的公网 `IP:8080` 访问了, 如果访问不到，需查看服务的安全组，是否暴露 80 端口
```js
// 阿里云安全组
允许	1	自定义 TCP	目的:80/80  源:0.0.0.0/0

// 访问 IP:8080 结果，成功运行
Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```
