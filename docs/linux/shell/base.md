<!--
 * @Author: your name
 * @Date: 2022-02-10 14:28:52
 * @LastEditTime: 2022-03-03 17:16:25
 * @LastEditors: Please set LastEditors
 * @FilePath: /special-column/docs/shell/base.md
-->
## 文件名获取
> 获取目录下时间最新的文件的文件名
```sh
filename=`ls -lt /dirname/ | grep filename | head -n 1 | awk '{print $9}'`
```

列出此目录下的所有文件并按照时间先后排序 /dirname/ 指目录
```sh
ls -ls /dirname/
```

过滤出包含关键字的文件
```sh
grep filename
```

查看排名第一的文件
```sh
head -n 1
```

打印出第九字段， 文件名
```sh
awk '{print $9}'
```