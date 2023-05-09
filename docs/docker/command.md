<!--
 * @Author: Tom
 * @Date: 2023-05-01 11:28:53
 * @LastEditors: Please set LastEditors
 * @Description: 
-->

### 常用命令 
```bash
# 查看Images
docker images

# 删除 images
docker rmi <IMAGE ID>

# 列出容器
docker ps -a

# 删除容器
docker rm <CONTAINER ID>

# pull 镜像
docker pull <镜像/路径>



```

<!-- 选项
|名称，简写         |默认          |描述  |
| :--------------  |:---------------|:-----|
| `--all` ， `-a`    |                | 显示所有Images |
| `--digests`        |		              |显示摘要
| `--filter` ， `-f`		|  |根据提供的条件过滤输出|
| `--format`		| |使用Go模板打印漂亮的图像|
| `--no-trunc`		| |不要截断输出|
| `--quiet` ， `-q`	|	|仅显示图片ID|
筛选
过滤标志（`-f`或`--filter`）的格式为“键=值”。如果有多个过滤器，则传递多个标志（例如`--filter "foo=bar" --filter "bif=baz"`）

## 
```bash
docker ps -a
```

## 删除一个或多个Images -->
