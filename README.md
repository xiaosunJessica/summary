# interview

 ## HTML
  1. 你是如何理解HTML语义的？  
    答：使用合适的标签标示内容。优点在于标签语义化有利于搜索引擎建立索引进行抓取，有助于构建良好的HTML结构便于团队开发和维护。
  2. meta viewport 是做什么用的，怎么写？  
    答：meta表示不能被HTML的其它元素（link，script,base, style, title）之一表示的任何元素信息。viewpoint让web开发者控制视口的尺寸及比例,移动设备的viewpoint指设备屏幕上用来展示网页的那一块区域，也就是浏览器上用来展示网页的那部分，可能比浏览器的可视区大，也可能比浏览器可视区域小，一般情况，比浏览器可视区域大。使用方式是<meta name="viewpoint" content="width=device-width, initial-scale=1, maximum-scale=1">
  3. canvas 元素是干什么的？  
    答： canvas是用来绘制图形的HTML元素。
  4. html5新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？  
    答：[html5新特性](http://www.ganecheng.tech/blog/52819118.html)：
      - 语义特性: header footer
      - 本地存储特性： localStorage, manifest
      - 设备访问特性: Geolocation
      - 连接特性: webSocket
      - 网页多媒体特性: audio、video标签
      - 三维、图形及特效：SVG，Canvas, css3D
      - 性能、集成特性  
      ***
      解决兼容性的方法：  
      - 在IE8以下，通过document.createElement(新标签)，并设置css样式。document.createElement('header'), header {display: block};
      - 条件注释的方式
        ```javascript
        <!--[if lt IE 9]>  
        <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>  
        <![endif]-->
        ```
      ***
      HTML和HTML5
      - 文档类型声明上：  
       html:
       ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml">
       ```

      html5: 
      ```html
        <!doctype html>  
      ```
      
      - 结构语义上  
        html: 基本没有体现结构语义，一般为
        ```html
        <div id="header"></div>
        ```
        html5: 具有结构语义
        ```html
        <header></header>
        ```

  5. Doctype作用？标准模式与兼容模式各有什么区别?  
    答： Doctype是document type(文档类型)，告诉浏览器解析器采用哪种规范（html、xhtml）来解析页面，Doctype不存在或格式错误的情况下，采用兼容模式。  
    标准模式（严格模式）展示的支持最新标准的网页。兼容模式（松散模式或怪异模式）展示的是兼顾传统浏览器的网页，向后兼容老式浏览器。  
    具体区别：
       类别 | 标准模式 | 兼容模式
      ---- | ---- | ----
      盒模型 | width=元素真正宽度 | width=width + padding + border
      百分比/行内高度 | 给span设置宽高不生效；父元素没有高度，子元素的百分比高度无效 | 有效
      margin: auto | 水平居中有效 | 无效，可用text-align解决

## CSS
  1. 说说盒模型？ box-sizing常用的属性有哪些？分别有什么作用？ 
    答：css盒模型是css规范的一个模块，每个元素由一个方形的盒子表示。
    该盒子包含有内容区域（content）、内边框区域(padding)、边框区域(border)、外边框区域(margin)  
      内容区域：元素真实内容，包含背景、颜色或图片，大小为content-box  
      内边距区域padding: 如果内容区域设置了背景、颜色或图片，这些样式为延伸到padding上  
      ```html
      <div class="parent">
        <div class="child"></div>
      </div>
      .parent {
        width: 200px;
        height: 100px;
        background: #faa;
      }
      .child {
        width: 100%;
        height: 100%;
        border: 10px solid yellowgreen;
        padding: 10px;
        margin: 10px;
      }
      ```
      box-sizing: content-box
  2. 如何居中  
     **水平居中**
     - 容器上定义一个width,然后设置margin: auto  
     - 父容器的text-align: center,子容器的display:inline-block
     - 绝对定位，left: 50%; （margin-left: -宽度/2 或者css3 transform: translate(-宽度/2, 0)）
     - flex方式， justify-content: center

     **垂直居中**
     - 单行文本line-height  
     - 行内块级元素 display:inline-block; vertical-align: middle;
     - 元素高度不定，vertical-align只在父层为td或th时生效，并且父元素display: table，其它不起作用, 子元素display: table-cell; vertical-align:middle;  
      - 绝对定位，top: 50%; （margin-top: -高度/2 或者css3 transform: translate(0, -高度/2)）
     - flex方式，align-items: center;

  3. 选择器优先级如何确定  
    答： 内联样式 > id选择器（0100） > 类选择器（属性选择器，伪类）（0010） > 类型选择器（伪元素）（0001）> 通配符（0000）  
    ！important会覆盖以上所有。
  4. BFC 是什么？  
    答：[BFC](https://www.jianshu.com/p/66632298e355)即为Block-formatting-context(块级格式化上下文)，它是页面的一块渲染区域，这个区域与外部无关。它有自己的渲染规则，决定了子元素的位置以及和其它元素的关系和作用。  
    **规则**
      - 内部的box垂直方向一个一个放置 
      - 垂直方向距离由margin决定，相邻两个box的margin会发生重叠。
      - BFC是页面上的独立区域，不受外面元素的影响。 
      - 每个元素的margin box左边，与包含块的border box左边相接触
      - BFC区域不会与float box重叠
      - 计算BFC的高度时，浮动元素参与计算  
    **哪些会生成BFC**
      - 根元素
      - float不为none 
      - position为absolute或fixed   
      - display: inline-block, table-cell, table-caption, flex, inline-flex
      - overflow为hidden, scroll, auto(不为hidden)                             
  5. 为什么清除浮动？如何清除浮动？  
    答：
    **原因**  
      一个块级元素的高度如果没有设置height,那么其高度由子元素撑开，如果子元素设置float,它脱离了文档流，父元素的高度会忽略。
      为了使父元素高度撑起来，需要清除浮动。  
    **方法**  
    清除浮动包括操作父元素和操作子元素  
      - 对父元素进行操作  
      ```html
      <div id="parent" class="clearfix">
        <div>float1</div>
        <div>float2</div>
      </div>
      #parent {
        overflow: hidden/auto; // 这种方式是触发父元素的BFC
        zoom: 1; // 该属性不熟悉，主要针对IE低版本设置的
      }
      #parent {
        display: inline-block;
      }
      ```
      - 对子元素进行操作  
      ```html
      <div id="parent" class="clearfix">
        <div>float1</div>
        <div>float2</div>
        <div class="clear"></div>
      </div>
      .clear {
        clear: both;
      }
      // 下面这种方式也可以成为操作父元素
      .clearfix:after {
        content: '';
        display: table/block;
        clear: both;
      }
      ```
  6. 页面导入样式时，使用link和@import有什么区别？
  7. CSS3新增伪类有那些？
  8. CSS3有哪些新特性？
  9. 说下行内元素和块级元素的区别？行内块元素的兼容性使用？

## JS
  1. JS 有哪些数据类型？
  2. Promise 怎么使用?
  3. AJAX 手写一下(基本步骤)?
  4. 闭包是什么?
  5. 什么是立即执行函数？使用立即执行函数的目的是什么？
  6. async/await 语法了解吗？目的是什么？
  7. 如何实现深拷贝？
  8. 如何实现数组去重？
  9. 如何用正则实现 string.trim() ？
  10. JS 原型是什么， prototype和__proto__的关系是什么？
  11. ES 6 中的 class 了解吗？
  12. JS 如何实现继承？
  13. new操作符做了什么？
  14. null和undefined的区别？
  15. call() 和 apply() 的区别和作用， bind？
  16. JavaScript 的 typeof 返回哪些数据类型?
  17. 至少 3 种强制类型转换和 2 种隐式类型转换?

## DOM
  1. DOM 事件模型是什么？
  2. 事件委托是什么？有什么好处？

## HTTP
  1. HTTP 状态码知道哪些？
  2. 301 和 302 的区别是什么？
  3. HTTP 缓存怎么做？
  4. Cache-Control 和 Etag 的区别是什么？
  5. Cookie 是什么？Session 是什么？localstorage是什么
  6. LocalStorage 和 Cookie 的区别是什么？
  7. GET 和 POST 的区别是什么？
  8. 怎么跨域？JSONP 是什么？CORS 是什么？postMessage 是什么？
  9. http 2.0对于http 1.x有哪些优点？
  10. XML和JSON的区别？
  11. 同步和异步的区别?

## WEBPACK
  1. 转译出的文件过大怎么办？
  2. 转译速度慢什么办？
  3. 写过 webpack loader 吗？

## React
  1. 你对 react 有什么理解？基于 react 的开发模式比起传统 jqurey 开发模式的最大优势(可以有几个)是什么？
  2. 你对异步模型有哪些理解？
  3. 前后端分离的原理及意义？
  4. 你对页面进行性能优化的思路和思想是什么？
  5. react在setState后发生了什么（直接说了setState源码）
  6. flux解释
  8. 对react有什么了解（直接说了react中虚拟dom内部表示，mount过程源码和同步过程源码）