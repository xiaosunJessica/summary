# interview

#HTML
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
        <!--[if lt IE 9]>  
        <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>  
        <![endif]-->

  5. 说下行内元素和块级元素的区别？行内块元素的兼容性使用？
  6. Doctype作用？标准模式与兼容模式各有什么区别?

#CSS
  1. 说说盒模型
  2. 如何居中
  3. 选择器优先级如何确定
  4. BFC 是什么
  5. 如何清除浮动
  6. box-sizing常用的属性有哪些？分别有什么作用？
  7. 页面导入样式时，使用link和@import有什么区别？
  8. CSS3新增伪类有那些？
  9. CSS3有哪些新特性？

#JS
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

#DOM
  1. DOM 事件模型是什么？
  2. 事件委托是什么？有什么好处？

#HTTP
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

#WEBPACK
  1. 转译出的文件过大怎么办？
  2. 转译速度慢什么办？
  3. 写过 webpack loader 吗？

#React
  1. 你对 react 有什么理解？基于 react 的开发模式比起传统 jqurey 开发模式的最大优势(可以有几个)是什么？
  2. 你对异步模型有哪些理解？
  3. 前后端分离的原理及意义？
  4. 你对页面进行性能优化的思路和思想是什么？
  5. react在setState后发生了什么（直接说了setState源码）
  6. flux解释
  8. 对react有什么了解（直接说了react中虚拟dom内部表示，mount过程源码和同步过程源码）
