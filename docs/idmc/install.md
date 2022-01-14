
[![npm version](https://img.shields.io/npm/v/idmc.svg?style=flat-square)](https://www.npmjs.org/package/idmc)


Using npm:

```bash
$ npm install idmc
```


Using yarn:

```bash
$ yarn add idmc
```
## 支持语法

`Javascript` `TypeScript` 

使用前先实例化
```js

const idmc = new Idmc()

// 修改后的数据
idmc.product

```
新增单条
```js
idmc.saveOne()
```

新增多条
```js
idmc.save()
```

删除数据
```js
idmc.remove()
```

修改数据
```js
idmc.update()
```

查询多条数据
```js
idmc.update()
```

查询单条数据
```js
idmc.findOne()
```
## 实例数据

```js
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }

const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }

const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 3 }
```
