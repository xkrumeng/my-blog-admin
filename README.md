# react+antd+redux

本项目是为了学习下使用[Create React App](https://github.com/facebook/create-react-app) + antd + redux来构建一个项目。

主要是需要学会掌握以下几个知识：

- 使用prettier + eslint 进行代码规范

- 学会使用Redux-devtools进行开发调试

- redux 的使用

- 项目目录结构

## 项目搭建过程

### 1. 使用create-react-app初始化项目

```bash
# 初始化项目
# my-blog-admin 项目名
create-react-app my-blog-admin

# 命令的其它一些使用，请使用 --help查看
```

### 2. 安装antd插件

```bash
yarn add antd
```

### 3. 安装 prettier, eslint规范插件，babel-import插件等

```bash
# husky
# lint-staged
# prettier
# eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier
# babel-import-plugin  # babel插件
# customize-cra # 配合react-app-rewired使用
# react-app-rewired # 重写create-react-app里的构建配置
# less less-loader    # less预编译加载器

yarn add --dev husky lint-staged prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier babel-import-plugin customize-cra react-app-rewired less less-loader
```

### 4. 配置prettier

在根目录下新建 **.prettierrc** 文件， 并且写入内容：

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

### 5. 配置eslint

在根目录下新建 **.eslintrc.js** 文件， 并写入内容:

```js
module.exports = {
  extends: [
    'airbnb',
    'prettier'
  ],
  plugins: ["prettier"],
  rules: {  // 更多其它的规范在此配置
    'prettier/prettier': 'error'
  }
}
```

### 6. 配置pre-commit hooks

在 **Package.json** 里加上:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js, json, css, md}": [
    "prettier --write",
    "git add"
  ]
},
```

### 7. 引入antd

在根目录下创建文件 **config-overrides.js** :

```js
// config-overrides.js

const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({ javascriptEnabled: true })
)

```