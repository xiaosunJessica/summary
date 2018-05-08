# WEBPACK 

 1. 功能  
 webpack是把项目当一个整体，通过给定的主文件，webpack将从这个文件开始找到你的项目的所有依赖，使用loaders处理它们， 最后打包成一个或多个模块  

2. entry 
  用来写入口文件，它将是整个依赖关系的入口  

  ````javascript
  module.export = {
    entry: './src/index.js'
  }
  ````

  如果有多个文件入口时，可以把entry写成一个对象  
  ````javascript
  module.export = {
    entry: {
      main: './src/index.js'
    }
  }
  ````

3. output  
  如果只有一个输出配置  
  ````javascript
  module.export = {
    entry:  {
      main: './src/index.js'
    }, 
    output: {
      filename: 'bundle.js',
      path: path: resolve('./dist')
    }
  }
  ````
  如果要确保一个文件对应一个输出，使用占位符来去报文件的唯一输出  
  ````javascript
  module.export = {
    entry: {
      main: './src/index.js'
    }
    output: {
      filename: '[name].js',
      path: path.resolve('./dist)
    }
  }
  ````
4. loader 
  loader的作用：  
    a. 实现对不同格式的文件处理，比如: JSX转换为js  
    b. 转换这些文件，从而使其能够被添加到依赖图中  
  使用loader，我们能够对调用外部的文件或脚本，实现对不同文件格式的处理，loader需要在webpack.config.js里边单独用module进行配置  

5. plugins  
    loader处理源文件，如jsx,less等，一次处理一个文件。而plugins并不是直接操作单个文件，而是对整个构建过程起作用。
    ExtractTextWebpackPlugin: 将入口中引用Css文件，都打包成独立的css文件，不会内嵌到js文件中  
    HtmlWebpackPlugin: 依据简单的index.html模板，生成一个自动引入你打包后的jsw文件的新index.html   
    HotModuleReplacementPlugin: 允许你在修改组件代码时，自动刷新实时预览修改后的结果  
    UglifyJsPlugin： 用于压缩代码

6. path和publicPath  
  path是所有输出文件的目标路径  
  publicPath输出解析文件的目录，url相对于HTML页面
7. path.resolve和path.join  
  path.resolve将相对路径转换为绝对路径  
  path.join用于连接路径

 2. [转译出的文件过大怎么办？](https://www.jianshu.com/p/367dc422393f)   
    答：  
     a: 代码压缩：UglifyJsPlugin,使用这个会使编译速度变慢，一般在生成环境启用。  
        b: 代码分割：
        ````javascript
        output: {
            path: __dirname + 'xx',
            publicPath: xxx,
            filename: 'bundle.js'
        }
        ````
        c: css单独打包
        ````javascript
        // 引入 css 单独打包插件
      var ExtractTextPlugin = require('extract-text-webpack-plugin');
      // 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
      var packCSS = new ExtractTextPlugin('./css/[name].min.css');

        ````
        d: 去除不必要的插件
        e: 提取第三方库
3. [转译速度慢什么办？](http://www.cnblogs.com/imwtr/p/7801973.html)      
  答： a: 使用监听模式或热更新替换（--watch和hotModuleReplacementPlugin）  
  b: babel-loader开启缓存  
  c: 提取公共代码， 使用CommonsChunkPlugin提取公共模块，可减少文件体积，有助于浏览器的文件缓存
  d: 优化搜索路径，exclude的配置避免多余文件的查找
4. 写过 webpack loader 吗？
5. loader与plugin区别？  
  答： loader是一个转换器，作用于文件，主要用于将一个文件转换成另一文件类型，例如*.less使用less-loader转换为*.css。  
  plugin是一个扩展器，作用于webpack。

## 参考链接  
1. https://segmentfault.com/a/1190000011383224

