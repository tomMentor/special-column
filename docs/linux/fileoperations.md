<!--
 * @Author: Tom
 * @Date: 2022-03-02 20:51:50
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
> sudo scp [local.log本地文件] [root用户名]@[ 远程服务IP地址 192.168.0.1 ]:[/data/远程目录]/[local.log 文件名称]

> [local.log 文件名称] 当不输入文件名时，使用默认文件名，输入文件名则更改文件名
## 本地文件复制到远程
```sh
sudo scp local.log root@192.168.0.1:/data/local.log
```

## 本地文件夹复制到远程

```sh
# 不同的地方在于要加个 -r 代表拷贝整个文件夹
sudo scp -r file/ root@192.168.0.1:/data/local.log
```
