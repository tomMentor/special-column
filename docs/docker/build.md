<!--
 * @Author: Tom
 * @Date: 2023-04-29 21:53:01
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## 登录远程 docker
```bash
docker login --username=****@sina.cn registry.cn-hangzhou.aliyuncs.com --password='*****'

# 用户名          # 镜像仓库地址                          # 密码
# --username     registry.cn-hangzhou.aliyuncs.com     --password
```
在构建镜像之前，需要在当前目录下，配置 dockerfile
```bash
# 创建文件
touch dockerfile
```
dockerfile
```js

// 获取 nginx
FROM nginx:latest

// 为了文件 COPY 覆盖，我多做了一步, 先删除镜像中的  default.conf 文件
RUN rm -rf /etc/nginx/conf.d/default.conf

// 复制当前目录下的 default.conf 
COPY default.conf /etc/nginx/conf.d/default.conf

// 复制当前目录的静态资源
COPY www/ /var/www/

// 暴露 80 端口
EXPOSE 80

```
default.conf
```conf
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    # access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /var/www;
        index  index.html index.htm;
    }

    # error_page  404              /404.html;

   
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
    
}
```
本地项目目录
```bash
.
├─ dockerfile             
├─ default.conf     # nginx 配置文件
└─ www
   ├─ index.html
   ├─ index.css
   └─ index.css

```

## 本地构建镜像 
```bash
docker build -t registry.cn-hangzhou.aliyuncs.com/container_name/project_name:v0.0.1 .

# 构建     # 为容器打上标签
# build   -t

# 镜像仓库地址                            # 容器名称         # 项目名称        # 版本号
# registry.cn-hangzhou.aliyuncs.com/    container_name/   project_name:   v0.0.1

```
## 查看本地镜像
```bash
docker images

# v0.0.1 已经本地构建成功 
REPOSITORY                                                      TAG       IMAGE ID       CREATED      SIZE
registry.cn-hangzhou.aliyuncs.com/container_name/project_name   v0.0.1    ad0dceeb8821   2 days ago   142MB

```
## 将本地镜像上传到远程镜像仓库
```bash
docker push registry.cn-hangzhou.aliyuncs.com/container_name/project_name:v0.0.1
```
## 查看容器
```bash
docker ps -a

# 显示全部容器（默认只显示运行中的容器）
-a

# 显示最近创建的容器（包括所有状态的容器）
-l 

# 显示总的文件大小
-s

# 显示完整的镜像 ID
–no-trunc

# 静默模式，只显示容器 ID
-q

docker ps -a

# 输出结果
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

# 容器 ID         # 使用的镜像  # 启动容器时运行的命令    # 创建时间   # 容器状态   # 端口及连接类型   # 容器名
CONTAINER ID     IMAGE        COMMAND               CREATED     STATUS      PORTS           NAMES

# 容器状态（7种#）

# 已创建    # 重启中        # 运行中    # 迁移中    # 暂停    # 停止     # 死亡
created    restarting     running    removing   paused   exited     dead

```