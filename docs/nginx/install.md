<!--
 * @Author: Tom
 * @Date: 2022-03-02 21:51:25
 * @LastEditors: Please set LastEditors
 * @Description: nginx 安装
-->

## Linux 系统

> 在 Linux 系统下安装 Nginx 前需要先安装 gcc-c++编译器，还有依赖的 Pcre和Zlib包；最后再安装 Nginx

Install gcc-c++编译器
```sh
yum install gcc-c++
yum install -y openssl openssl-devel
```

Install Pcre
```sh
yum install -y pcre pcre-devel
```

Install Zlib
```sh
yum install -y zlib zlib-devel
```

下载
```sh
cd /usr/local
wget http://nginx.org/download/nginx-1.20.2.tar.gz

# 解压
tar -zxvf nginx-1.20.2.tar.gz
mv nginx-1.20.2.tar.gz nginx

# 使用nginx默认配置
cd nginx
./configure

# 编译安装
make install

# 进入 nginx sbin 目录
cd sbin

#启动 nginx
./nginx

# 查看nginx 是否正常启动
ps -ef | grep nginx

# 然后浏览输入ip地址，页面出现 Welcome to nginx! 提示， 表示已经成功了。
```
