<!--
 * @Author: Tom
 * @Date: 2023-04-29 19:47:35
 * @LastEditors: Please set LastEditors
 * @Description: 
-->

## 准备工作

关闭 liunx 系统防火墙
```bash
# 查看状态防火墙
systemctl status firewalld.service

# Active: inactive (running) 是开启状态
# Active: inactive (dead) 是关闭状态

# 关闭防火墙
systemctl stop firewalld.service

# 永久关闭
systemctl disable firewalld.service
```

```bash
# 将 yum 更新到最新版本
yum update -y
```
```js
状态

Last metadata expiration check: 0:28:09 ago on Sat 29 Apr 2023 09:31:35 PM CST.
Dependencies resolved.
Running scriptlet:
.......
.......
Complete!
```

## Install Docker
安装 Docker
```bash
yum install -y docker
```
查看版本
```bash
docker -v
```
```js
Message

Docker version 23.0.5, build bc4487a
```
版本输出，说明已经安装好了，先查看一下状态，如果 Active 为`inactive (dead)`说明未启动，需要启动 docker
```bash
systemctl status docker

# Message
Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
   Active: inactive (dead) since Sat 2023-04-29 22:25:01 CST; 2min 4s ago
     Docs: https://docs.docker.com
 Main PID: 186015 (dockerd)
    Tasks: 7
   Memory: 118.0M
   CGroup: /system.slice/docker.service
           └─186015 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

# ------------------------------------------------------------------------------------------- #

Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
   Active: active (running) since Sat 2023-04-29 22:25:01 CST; 2min 4s ago
     Docs: https://docs.docker.com
 Main PID: 186015 (dockerd)
    Tasks: 7
   Memory: 118.0M
   CGroup: /system.slice/docker.service
           └─186015 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

# 
`Active: inactive (dead)` 未运行
`Active: active (running)` 运行中

```

启动 Docker
```bash
systemctl start docker

# 重启 Docker
systemctl restart docker

# 这两个命令执行完后，是没有输出信息的，想验证合集是否成功，可查看 docker 状态
```
停止 Docker
```bash
systemctl stop docker
```
```js
Message

Warning: Stopping docker.service, but it can still be activated by: docker.socket

// 已停止
```
其它配置
```bash

# 需要先检查有没有 systemctl 命令
systemctl
# command not found: systemctl。表示没有 systemctl 服务，需要配置 systemctl

# 设置开机启动
systemctl enable docker

# 提交配置修改
systemctl daemon-reload

```
