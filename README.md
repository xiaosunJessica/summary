# interview

 ## HTML
  1. 你是如何理解HTML语义的？  
    答：使用合适的标签标示内容。优点在于标签语义化有利于搜索引擎建立索引进行抓取，有助于构建良好的HTML结构，便于团队开发和维护。
  2. meta [viewport](http://blog.doyoe.com/2015/10/13/mobile/%E7%A7%BB%E5%8A%A8%E5%89%8D%E7%AB%AF%E7%AC%AC%E4%B8%80%E5%BC%B9%EF%BC%9Aviewport%E8%AF%A6%E8%A7%A3/) 是做什么用的，怎么写？  
    答：meta表示不能被HTML的其它元素（link，script,base, style, title）之一表示的任何元素信息。viewpoint让web开发者控制视口的尺寸及比例，移动设备的viewpoint指设备屏幕上用来展示网页的那一块区域，也就是浏览器上用来展示网页的那部分，可能比浏览器的可视区大，也可能比浏览器可视区域小，一般情况，比浏览器可视区域大。属性包括width、height、initial-scale、maximum-scale、minimum-scale,使用方式是  

      ````javascript
      <meta name="viewpoint" content="width=device-width, initial-scale=1, maximum-scale=1">
      ````
  3. canvas 元素是干什么的？  
    答： canvas是用来绘制图形的HTML元素。
  4. html5新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？  
    答：  
    [html5新特性](http://www.ganecheng.tech/blog/52819118.html)：
      - 语义特性: header footer
      - 本地存储特性： localStorage, manifest
      - 设备访问特性: Geolocation
      - 连接特性: webSocket
      - 网页多媒体特性: audio、video标签
      - 三维、图形及特效：SVG，Canvas, css3D
      - 性能、集成特性  
      ****
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
  
  类别|     标准模式     |     兼容模式    
  ------------- | ---------------- | -------------- 
  盒模型 | width=元素内容宽度(content-box) | width=width + padding + border(box-sizing: border-box)
  百分比/行内高度 | 给span设置宽高不生效；块级元素的父元素没有高度，子元素的百分比高度无效 | 有效
  margin: auto | 水平居中有效 | 无效，可用text-align解决  

  6. [用户访问页面到最终渲染的整个过程？](https://juejin.im/entry/59e1d31f51882578c3411c77)  
    用户输入url,浏览器向服务器发送请求，获取html,然后进入HTML渲染机制。首先，根据HTML生成DOM树；其次，根据css和js重排页面 
    https://segmentfault.com/a/1190000009317496 
  7. 你对页面进行性能优化的思路和思想是什么？  
  答： 减少http请求; 减少DOM操作，避免不必要的重绘和重排;压缩文件体积；采用CDN；  

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

      box-sizing的常用属性：  
      - content-box是默认属性(w3c标准盒模型)，width和height只是内容的宽和高，并不包括padding、border、margin。上面展示的child实际渲染的宽高为260 * 160

      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/content-box.png" alt="GitHub" title="content-box" width="200" height="200" />

      - border-box(IE盒模型), width和height包含了padding和border,但不不含margin。上面展示的child实际渲染的宽高为220 * 120,多了margin的宽高  
      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/border-box.png" alt="GitHub" title="border-box" width="200" height="200" />
      
  2. 如何居中  
     **水平居中**
     - 容器上定义一个width,然后设置margin: auto  
     - 父容器的text-align: center,子容器的display:inline-block
     - 绝对定位，left: 50%; （margin-left: -宽度/2 或者css3 transform: translate(-宽度/2, 0),其中宽度不确定情况可以使用translate(-50%, 0)）
     - flex方式， justify-content: center

     **垂直居中**
     - 单行文本line-height  
     - 行内块级元素 display:inline-block; vertical-align: middle;
     - 元素高度不定，vertical-align只在父层为td或th时生效，并且父元素display: table，其它不起作用, 子元素display: table-cell; vertical-align:middle;  
      - 绝对定位，top: 50%; （margin-top: -高度/2 或者css3 transform: translate(0, -高度/2),其中高度不确定情况可以使用translate(0，-50%)）
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
        zoom: 1; // 主要针对IE低版本设置的
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
      <!--下面这种方式也可以成为操作父元素 -->
      .clearfix:after {
        content: '';
        display: table/block;
        clear: both;
      }
      ```

  6. 页面导入样式时，使用link和@import有什么区别？  
    答：

      - 加载内容： link是xhtml标签，除了能加载css外，还能加载rss(简单信息聚合——xml文件)；@import只能加载css文件
      - 加载顺序: link在页面载入的同时加载；@import的css是在页面加载完毕后被加载。
      - 兼容性问题： link无兼容性问题; @import是css2.1里提出的，低版本不兼容
      - dom控制问题: link样式，在js中操作dom可修改样式；@import不支持修改

  7. CSS3哪些新特性? 新增伪类有那些？  
    答：css3新特性：圆角（border-radius）、阴影（box-shadow\text-shadow）、渐变（gradients）、过度与动画（transition and animations）,新的布局方式：多列布局（column）、flex、grid。  
    新增伪类： 
     
      新增伪类 | 作用
      -------- | -------
      p:first-of-type | 选择该父节点下的首个p元素
      p:last-of-type | 选择该父节点下的最后p元素
      p:only-of-type | 选择该父节点下，含有一个p元素的p节点，p可以有兄弟节点
      p:only-child | 选择该父节点下，含有唯一一个元素且为p,不含有兄弟节点
      p:nth-child | 选择该父节点下的第n个p节点
      p:nth-last-child | 选择该父节点下的倒数第n个p节点
      p:last-child | 选择该父节点下的最后一个p节点
      p: empty | 选择没有子节点的p
      :not(p) | 选择非p的每个元素

  8. 说下行内元素和块级元素的区别？行内块元素的兼容性使用？  
    答： 
      - 布局上： 行内元素在一行展示，水平排列；块级元素占据一行，垂直排列
      - 结构上： 行内元素不可以插入块级元素，块级元素可以插入行内元素
      - 属性上： 行内元素设置width、height无效，margin和padding上下无效。比较常用的行内元素： a、b、em、i、img、input、label、span、strong、sub、sup、textarea 

      行内块元素的兼容性使用：  

        ```html
          div {
            *display: inline;
            *zoom: 1; // 触发haslayout
            // display: inline-block; 添加后兼容所有浏览器
          } 
        ```
  9. zoom的作用

      - 检查页面是否闭合
      - 样式排除法
      - 检查是否清除浮动
      - IE是否触发haslayout  
  10. [父容器width和height分别为200 * 100， 子元素设置margin:50%时](http://blog.doyoe.com/2013/11/30/css/margin%E7%B3%BB%E5%88%97%E4%B9%8B%E7%99%BE%E5%88%86%E6%AF%94/)  
  （考点包括margin百分比都是针对宽度，内联的上下都不起作用）  
  a. 子元素的margin的百分比针对于父元素的Width  
  b. 子元素margin:50%时，左右margin为100px,加自身的width超出了父元素宽度的范围，此时后面的元素会换行。因此，图中的'2222'虽然是inline-block方式，也在下一行。除非前一个margin的左右百分比之和小于50%,才会展示在一排  
  c. 图中可以看出，子元素margin-top也是50%,所以父元素没有全包子元素，如果希望父元素全包子元素，可以通过在父元素添加overflow: scroll破坏BFC  
  <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/margin-percent.png" alt="GitHub" title="border-box" width="300" height="300" />
  11. [使用css重新定义checkbox](https://github.com/xiaosunJessica/interview/blob/master/html/css-checkbox.html)  
    a. 结合input[type='checkbox']和label  
    b. input[type='checkbox']隐藏掉, label添加伪元素放在input位置处  
    c. input状态为checked时，将label的伪元素content进行修改

  12. AB里面的容器不等高，如何做到使两个背景等高？  
    a. 通过flex方式，让父元素display: flex;  
      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/AB2.png" alt="GitHub" title="border-box" width="300" height="300" />  
    b. 通过position方式，例如：左侧高度固定，父元素position: relatvie; 右侧position: absolute; top: 0; bottom;  
      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/AB1.png" alt="GitHub" title="border-box" width="300" height="300" />  
    c. 父元素display: table; 两个子元素display: table-cell.  
      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/AB3.png" alt="GitHub" title="border-box" width="300" height="300" />  
    d. 父元素使用display: grid; grid-template-colums: 1fr 200px;分为两列，子元素通脱grid-colum: 1/2占左边，另个占右边。  
     <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/AB4.png" alt="GitHub" title="border-box" width="300" height="300" /> 

  13. position的理解  

      取值 | 描述  
      -------| ---------  
      static | 正常布局，top、bottom、left、right、z-index不起作用 
      relatvie | 会留空白，放在正常位置上  
      absolute | 脱离文档，不留空白，相对于非static的祖先元素定位 
      fixed | 脱离文档，不留空白，相对于屏幕视口的位置定位   
  
  14. 右边宽度固定，左侧自适应  
    - flex 
    ````html
    <style>
      body{
          display: flex;
      }
      .left{
          background-color: rebeccapurple;
          height: 200px;
          flex: 1;
      }
      .right{
          background-color: red;
          height: 200px;
          width: 100px;
      }
      </style>
      <body>
          <div class="left"></div>
          <div class="right"></div>
      </body>
    ````  
    - float 

    ````html
      div {
          height: 200px;
      }
      .left {
          float: right;
          width: 200px;
          background-color: rebeccapurple;
      }
      .right {
          margin-right: 200px;
          background-color: red;
      }
    ````  

     - position 
    
    ````html
      body {
          position: relatvie;
      }
      .left {
          position: absolute;
          right: 0;
          width: 200px;
          background-color: rebeccapurple;
      }
      .right {
          margin-right: 200px;
          background-color: red;
      }
    ````  
    - grid  
    ````html
      body {
        display: grid;
        grid-template-columns: 1fr 200px;  // /第一列1fr自适应，第二列200固定
      }
      .left {
        grid-column: 1/2;
        background: red;
      }
    ````
  15. [px、em、rem](http://www.runoob.com/w3cnote/px-em-rem-different.html)  
  答：    
    px是相对于显示器屏幕分辨率而言的。  
    em是相对于当前对象的文本的字体尺寸，如果当前对行内文本的字体尺寸未被设置，则依次向上查找直到相对于浏览器的默认字体  
    rem是相对于html根元素（比较推荐）  
    最后浏览器默认字体是16px,要设置一对一的对应关系，需要设置font-size：62.5%

## JS
  1. JS 有哪些数据类型？  
    答： js基本数据类型：String、Number、Boolean、Null、undefined。混合数据类型Object(Array)
  2. [Promise 怎么使用?](https://github.com/xieranmaya/blog/issues/3)  
      [promise原理与实现](https://juejin.im/post/5a59f8b5f265da3e3a6dbec3#heading-10)
      promise函数时同步的，promise.then函数时异步的setTimeout

      ````javascript
      //声明一个对象
      var promise = new Promise(function(resolve, reject) {
        console.info()
      })

      promise.then();
      ````

  3. AJAX 手写一下(基本步骤)?  

      ````javascript
      // 实例化对象
      var xhr = new XMLHTTPRequest();

      //指定相应函数
      xhr.onreadystatechange = function() {
        if (xhr.readyState ==4) {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
              // success
          } else {
              // error
          }
        }
      }

      //指定请求
      xhr.open(method, url, async);

      // 发送请求
      xhr.send()
      ````

      [ajax清除缓存的方法](https://segmentfault.com/q/1010000002960260)：url + Math.random()

      使用Promise实现ajax???  
      答：

      ````javascript
      var request = (opts) => {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHTTPRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState ==4) {
              if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                  resolve()
              } else {
                  reject()
              }
            }
          }
          xhr.open(opts.method, opts.url, opts.ansyc);
          xhr.send() // 如果是post方式，xhr.send(data)
        })
      }
      ````

  4. 闭包是什么?函数表达式与函数声明的区别？什么情况下使用闭包?  
    答： 闭包是在函数外依然能访问函数里的内容。  
    函数声明包括函数名和函数体function func() {},函数表达式是将函数定义为表达式语句的一部分 var func = function() {}  
      闭包使用场景： 高阶函数，科里化函数（curry）
  5. 什么是立即执行函数？使用立即执行函数的目的是什么？  
    答：立即执行函数就是声明一个匿名函数，并马上调用它。使用立即执行函数的目的是创建一个独立的作用域
  6. async/await 语法了解吗？  
    答：async返回的是promise对象，一旦遇到await就会先返回，等到异步操作完成再接着执行函数体内后面的语句。async函数内部的异步操作执行完，才会执行then方法指定的回调函数。await命令后面是一个promise对象，如果不是，会被立即转换成resolve的promise对象。await后面的promise变成reject后，async函数会中断，没有执行的函数也不会继续执行，为解决该问题可以采用try...catch方式
  7. 如何实现浅拷贝和深拷贝？  
    答：浅拷贝是拷贝原对象的引用；浅拷贝只是将对象的各个属性一次进行拷贝，不会进行递归拷贝

      ````javascript
        function shallowCopy(source) {
          var targetObj = source.constructor === Array ? [] : {}
          for(var key in source) {
            targetObj[key] = source[key]
          }
          return targetObj
        }
      ````
      深拷贝是拷贝出一个新的实例，新实例和之前的实例互不影响。深拷贝不仅将各个对象的属性拷贝出来，而且会递归拷贝各个属性所包含的对象。  

      ````javascript
        function deepCopy(source) {
          var targetObj = source.constructor === Array ? [] : {}
          for (var key in source) {
            if (source[key] && typeof source[key] === 'object') {
              <!--targetObj[key] = source[key].constructor === Array ? [] : {}-->
              targetObj[key] = deepCopy(source[key])
            } else {
              targetObj[key] = source[key]
            }
          }
          return targetObj
        }

        <!-- 利用JSON序列化实现的深拷贝 -->
        function deepCopy(source) {
          return JSON.parse(JSON.stringify(source))
        }

        <!-- es6 -->
        object.assign(target, ...sources)
      ````
  8. [如何实现数组去重？](https://github.com/mqyqingfeng/Blog/issues/27)  
    答：
     - 第一种原始方法：对原数组进行遍历，并在新数组中遍历是否含有，含有就不添加不含有就添加  

      ````javascript
          function unique(arr) {
            var res = [];
            for (var i = 0; i < arr.length; i++) {
              for (var j = 0; j < res.length; j++) {
                if (arr[i] === res[j]) {
                  break;
                }
              }
              if (j === res.length) {
                <!-- 说明res还没有arr[i] -->
                res.push(arr[i])
              }
            }
            return res
          }
      ````

     - indexOf方法

      ````javascript
        function unique(arr) {
          var res = [];
          for (var i = 0; i < arr.length; i++) {
            if (res.indexOf(arr[i]) === -1) {
              res.push(arr[i]);
              continue;
            }
          }
          return res
        }
      ````
      - 排序后去重
      ````javascript
        function unique(arr) {
          var sortArr = arr.sort();
          var res = [];
          var monitor = null
          for (var i = 0; i < sortArr.length -1; i++) {
            if (!monitor || monitor !== sortArr[i]) {
              res.push(sortArr[i]);
            }
            monitor = sortArr[i]
          }
          return res
        }
      ````
      - filter方法(推荐)

      ````javascript
        function unique(arr) {
          return arr.filter((item, index, array) => array.indexOf(item) === index)
        }
      ````
      - es6方法

      ````javascript
        es6数据结构Set类似于数组，但成员唯一，没有重复值。
        function unique(arr) {
          var res = new Set(arr);
          return [...res]
        }

        Array.from方法可以将 Set 结构转为数组。
        
        function unique(arr) {
          var res = new Set(arr);
          return Array.from(new Set(array));
        }
      ````

      为数组设计一个distinct方法  
      如：[1,2,3,1,'2'].distinct() = [1,2,3,'2'],请提供几种思路，至少写一个  

      ````javascript
      Array.prototype.distinct = function() { //这里不适合用箭头函数，不然this指向window
        let arr = this;
        return arr.filter((item, index, arr) => arr.indexOf(item) === index)
      }
      ````

  9. 如何用正则实现 string.trim() ？  
    答：String.prototype.trim = () => this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/, '');

  10. prototype和__proto__的关系是什么？    
    答：prototype只有构造函数才有该属性，后天赋于的。  
    proto/[[prototype]]是任何对象都有的，是私有的，天生自带的; 
    __proto__是js的非标准但浏览器支持的属性。链关系的查找通过__proto__方式，如：obj.__proto__.__proto__    
    每个对象都有[__proto__](http://es6.ruanyifeng.com/#docs/class-extends)属性，指向对应的构造函数的prototype属性。

      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/prototype.png" alt="GitHub" title="prototype" width="400" height="100" />
  11. JS 如何实现继承？  
    答：  
      - 类继承  

        ````javascript
          var obj = { a: 1}
          var myObj = Object.create(obj)
          myObj.a    // 1
        ````  
      - 构造器继承 

        ````javascript
        var Foo = function() {
          this.str = 'foo';
        }
        Foo.prototype = {
          get: function() {
            return this.str
          },
          set: function(val) {
            this.str= val
          }
        }
        var bar = new Foo();
        bar.str // foo
        ```` 

      - [原型继承](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000)  

        ````javascript
          function Foo(name) {
            this.name = name
          }
          Foo.prototype.myName = function() {
            return this.name
          }
          function Bar(name, label) {
            Foo.call(this,name) 
            this.label = label
          }
          Bar.prototype = Object.create(Foo.prototype);
          Bar.prototype.constructor = Bar;
          Bar.prototype.myLabel = function() {
            return this.label
          }
          var test = new Bar('helloName', 'helloLabel');
          test.myLabel();  // hellloLabel
          test.myName();  // hellloName
        ````

      - Mixin  

        ````javascript
          function Mixin(sourceObj, targetObj) {
            for (var key in sourceObj) {
              if (!targetObj[key]) {
                targetObj[key] = sourceObj[key]
              }
            }
            return targetObj
          }
        ````

      - 寄生继承  

        ````javascript
          function Vehicle() {
            this.engines = 1
          }
          Vehicle.prototype = {
            ignition: function() {
              console.info('turning on my engine')
            },
            drive: function() {
              this.ignition();
              console.info('steering and moving forward')
            }
          }
          /*寄生类*/
          function Car() {
            var car = new Vehicle();
            car.wheels = 4;
            var vehDrive = car.drive;
            car.drive = function () {
              vehDrive.call(this);
              console.info('car drive')
            }
            return car
          }

          var myCar = new Car();
        ````
      - es6的class方式  

        ````javascript
          class A {
            constructor(str) {
              this.str = str;
            }
          }

          class B extends A {
            constructor(str) {
              super(str)
            }
          }
        ````
      - call和apply修改this指向的继承

  12. 至少 3 种强制类型转换和 2 种隐式类型转换?    
    答： 强类型转换：String、Number、Boolean  
        隐式类型转换：  
        (1) 字符串 + 数字， 数字转换为字符串。'a' + 1 -> 'a1'  
        (2) 数字减字符串，字符串转数字。如果字符串不是纯数字就会转成NaN。 1 - 'a' -> NaN; 1 - '-2' -> -1  
        (3) 乘、除、大于、小于算法同(2)  
        (4) == 
         - undefined等于null; undefined == null;  
         - 字符串和数字比较时，字符串转数字。  
         - 数字为布尔比较时，布尔转数字。  
         - 字符串和布尔比较时，两者转数字
  13. new操作符做了什么？  
    答：   
    a. 创建一个新的对象  
    b. 这个新对象会执行[[prototype]]/__proto__链接  
    c. 这个新对象会绑定到函数，调用this  
    d. 如果函数没有返回其它对象，那么new表达式中的函数调用会自动绑定这个新对象  
  14. null和undefined的区别？如何判断为NaN数据？  
    答：null是一个表示“无”的对象，转为数值时为0, typeof null输出“object”  
        (1) 作为函数的参数，表示该函数的参数是对象  
        (2) 作为对象原型链的终点  
        - - -

      undefined是一个表示“无”的原始值，转化数值为NaN, typeof undefined输出"undefined"  
          (1) 变量声明了，但没有赋值，等于undefined  
          (2) 调用函数时，应该提供的参数没有提供，该参数等于undeined;  
          (3) 对象没有赋值的属性，该属性的值为undefined  
          (4) 函数没有返回值时，默认返回undefined  

      当算术运算返回一个未定义或无法表示的值时，NaN就产生了。NaN的值表示不是一个数字(Not a number),typeof NaN 输出“number”,判断NaN方法
        (1)Number.isNaN()或者isNaN  
        (2)如果isNaN函数的参数不是Number类型，isNaN会先尝试将参数转换为数值再判断  

        ````javascript
          var isNaN = function(value) {
            var n = parseInt(value);
            return n !== n
          }
        ````
        (3)和全局isNaN相比，Number.isNaN不会进行强制转换
        ````javascript
        Number.isNaN = Number.isNaN || function(value) {
          return typeof value === "number" && isNaN(value)
        }
        ````
      
  15. call() 和 apply() 的区别和作用， bind？  
    答：call和apply用来调用函数，call参数一个一个传入，apply参数是以数组方式。都属于立即执行。call和apply作用是改变this指向。  
      bind绑定后会生成新的函数，调用时才执行，并不会立即执行
  16. JavaScript 的 typeof 返回哪些数据类型?  
    答：typeof返回数据类型string、number、boolean、undefined、object、Symbol、Function
  17. [DOM 事件模型是什么？](http://javascript.ruanyifeng.com/dom/event.html)  
    答：a: EventTarget接口的三个实例方法： 

        - addEventListener: 绑定事件的监听函数，可以添加多个监听函数，能指定是在捕获还是冒泡阶段触发监听函数
        - removeEventListener: 移除事件的监听函数  
        - dispatchEvent: 触发事件 

        b: HTML的on-属性（只在冒泡阶段触发，违反了HTML与javascript代码分离的原则，写在一起不利于代码分工）   
        c: 元素节点的事件属性，如div.onclick;也只在冒泡阶段触发，同一事件只能定义一个监听函数，定义多个时，后一个会覆盖前一个； div.onclick > on-属性
        d: 事件的传播:

        - 第一阶段: 从window对象传导到目标节点（上层传到底层）, 称为"捕获阶段"
        - 第二阶段: 在目标节点上触发，称为"目标阶段"
        - 第三阶段：从目标节点传导回window对象（底层传回到上层）,称为"冒泡阶段"

  18. [事件委托是什么？有什么好处？](https://zhuanlan.zhihu.com/p/26536815)  
    答：事件委托就是把一个元素相应事件的函数委托到另一个元素；一般来讲，把一个或一组元素的事件绑定到它的父层或更外层上面，真正绑定事件是在外层，当事件触发该元素上，通过冒泡触发它的外层元素，从而执行函数。  
    好处： 减少内存消耗，减少重复工作  
  19. 箭头函数考点

      ````javascript
      a => a // 返回a的值
      a => {a} // 返回undefined
      a => ({a}) // 返回对象，{a: a的值}
      a => ({[a]: a}) // 返回对象， {a的值： a的值}
      ````

      <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/array-return.png" alt="GitHub" title="border-box" width="200" height="200" />  
  20. 'b' + 'a' + +'a' +'a'   // "baNaNa"   
      a. 考察+ '字符串'能隐式将字符串转数字类型  
      b. 将字符串转数字过程中，如果是数字类型会直接转换成数字，否则为NaN
  21. [0] == '0'  // true  
      [] == 0  // true  
      [] == []  // false  引用对象不一致  
      [] != []  // true 
      [] == {}  // false  引用对象不一致
  22.  

  ````html
  <div id="d">
    <div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
  </div>
  ````

  ````javascript
  var a = [
    document.getElementById('a'),
    document.getElementById('b'),
    document.getElementById('c'),
  ];
  var b = document.getElementById('d').getElementByTagName('div')
  ````
  请问a, b有什么异同？  
  答： a是数组; b是HTMLCollection,是一种伪数组   

  23. 实现空格分隔字符串
  如： 'Hello'.specify() = 'H e l l o'  
  
      ````javascript
        String.prototype.specify = function() {
          let string = this;
          return string.split('').join(' ')
        }
      ````

  24. 
  ````javascript
  function A() {

  }

  function B(a) {
    this.a = a
  }

  A.prototype.a = 1;
  B.prototype.a = 1;
  console.info(new A().a) // 输出1
  console.info(new B().a) // 输出 undefined
  ````
  考察的点： new对象时，构造函数初始化是否传值；原型链查找值，先从自身找起。  
  因为首先查找自身属性是否含有a,有就取值自己的（B含有，且为undefined）,否则，通过原型链查找原型链上的。  
25. [数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)和[字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)操作方法？    

26. 伪数组定义以及如何转数组？  
答：
  **定义** 

  - 伪数组是一个对象  
  - 伪数组必须含有length属性  
  - 如果length不为0，这数据结构必须按照下标存储  

  **判断是否为真数组**

  - arr instanceof Array 
  - Object.prototype.toString.call(arr) === '[object Array]'  

  **转真数组** 
  - Array.prototype.slice.call(arr)  
27. [原型的理解](https://github.com/xiaosunJessica/interview/blob/master/prototype.md) 
28. [数组降维](http://es6.ruanyifeng.com/#docs/generator)  
  ````javascript
  var arr = [1, [[2, 3], 4], [5, 6]];

  // 迭代器方式
  var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
      var item = a[i];
      if (typeof item !== 'number') {
        yield* flat(item);
      } else {
        yield item;
      }
    }
  };

  for (var f of flat(arr)) {
    console.log(f);
  }

  // 递归方式
  var commonArr = []
  var dimensionReduction = function (arr) {
    if (!arr.length) return
    arr.map(a => {
      if (Array.isArray(a)) {
        commonArr.concat(dimensionReduction(a))
      } else {
        commonArr.push(a)
      }
    })
    return commonArr
  }

  // concat方式
  var commonArr = []
  var dimensionReduction = function(arr) {
    for (let i = 0; i < arr.length ; i++) {
      if (Array.isArray(a)) {
        commonArr.concat(dimensionReduction(a))
      } else {
        commonArr.push(a)
      }
    }
    return commonArr
  }
  ````  
  29. 什么情况下使用递归？   
    -  调用规模有所缩减（通常减半） 
    - 相邻之间有紧密联系，前一次为后一次做准备 
    - 有终止结束的条件
  30. 同一页面不同窗口，当一个页面数据变更时，如果通知另一窗口页面修改？ 
      - [storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)  
      - 走后端接口
  31. 
  ````javascript
  obj = {
      name: 'a',
      getName : function () {
          console.log(this.name);
      }
  }
  var fn = obj.getName
  obj.getName()
  var fn2 = obj.getName()
  fn()
  ````

## HTTP
  1. HTTP 状态码知道哪些？  

   状态码        | 相应类别           | 原因短语  
   ------------- |--------------| --------
   1XX      | 信息性状态码 | 服务器正在处理请求 
   2XX      | 成功状态码      |   请求已正常处理完毕 
   3XX | 重定向状态码      |    需要进行额外操作以完成请求 
   4XX | 客户端错误状态码      |    客户端原因导致服务器无法处理请求 
   5XX | 服务器错误状态码      |    服务器原因导致处理请求出错 
  2. 301 和 302 的区别是什么？  
    答：301适合永久重定向，302是临时重定向  
  3. [HTTP 缓存怎么做？](https://github.com/xiaosunJessica/interview/blob/master/cache.md)  
  4. [Cache-Control 和 Etag 的区别是什么？](https://github.com/rccoder/blog/issues/12)  
    答：带条件的缓存方式Etag和last-modified, 分别对应request-headers下的if-none-match和if-modified-since,如果本地有相关资源的缓存，并且缓存的response headers下有etag或last-modified的情况，这时候去请求服务器，它就是带有条件的get。服务器接到带有该条件的请求，去判断缓存的资源是否是最新的，如果是最新的返回304,否则返回200。  
    另一个对上述的优化是在response headers里加Cache-Control: max-age=*****或expires:,两个若同时存在，则CaChe-Control优先级大于expires，这两个会在服务器请求之前。
  5. Cookie 是什么？Session 是什么？localstorage是什么？

      特性      |    Cookie     |     localStorage        | sessionStorage    
      ---------------------| ----------- | ----------- | ----------- 
      数据的生命周期 | 关闭浏览器后失效 | 除非被清除， 否则永久保存 | 当前会话有效，关闭浏览器清除 
      存放大小 | 4k左右 | 5M | 5M 
      与服务器通信 | 每次会携带在HTTP头中，cookie保存过多数据会带来性能问题 | 仅在客户端中，不参与服务器通信 | 仅在客户端中，不参与服务器通信   

      注意： localstorage只能存储字符串类型，如果需要存储对象，首先需要转换为字符串（JSON.stringify）。将字符串对象转换为字符串采用JSON.parse
  6. 同步和异步的区别?  
    答： 同步是实时处理，异步是分时处理。同步往往会阻塞，没数据过来就等着；异步不会阻塞，没数据来时可以做其它事，有数据了再去处理。同步一定程度上可以看成单线程，异步可以看做多线程
  7. GET 和 POST 的区别是什么？  
      GET用于请求数据，POST用于数据提交。GET方式体现在url上，会有长度限制，且不够安全。POST没长度限制，安全性也相对高点。  
  8. 怎么跨域？JSONP 是什么？CORS 是什么？postMessage 是什么？  
    答： 跨域是只要协议、域名、端口有任何一个不同，都被当做是不同的域。    
         CORS(Cross-Origin Resource Sharing)跨域资源共享：定义了必须在访问开宇资源时，浏览器与服务器应该如何沟通， 基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或相应是应该成功还是失败。  
         JSONP方式是将返回的数据包含在回调函数中使用，例如：  
        ````javascript
          <script type="text/javascript">
            function dosomething(jsondata){
                /*处理获得的json数据*/
            }
          </script>
          <script src="http://example.com/data.php?callback=dosomething"></script>
       ````

  JSONP的优点是不想ajax的XMLHttpRequest那样受同源策略的限制，兼容性更好，古老的浏览器也能使用，缺点是只能进行get方式，post不支持。  
  window.postMessage(message, targetOrigin)方法是html5新引入的特性，可以使用它来向其它window对象发送消息。
  9. [http 2.0对于http 1.x有哪些优点？](https://www.cnblogs.com/frankyou/p/6145485.html)  
  10. [XML和JSON的区别？](https://www.cnblogs.com/gslblog/p/6664641.html)  
  11. 浏览器的hash和history两种路由机制？
   hash是带#号的，浏览器发送url请求时，#后面的不会发送给服务端。#用于浏览器滚动到#后面值的位置。
   histroy更美观，每次输入都会发送请求，而且未找到资源会发出404错误。
  12. token

## WEBPACK
  1. [转译出的文件过大怎么办？](https://www.jianshu.com/p/367dc422393f)   
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
  2. [转译速度慢什么办？](http://www.cnblogs.com/imwtr/p/7801973.html)      
    答： a: 使用监听模式或热更新替换（--watch和hotModuleReplacementPlugin）  
    b: babel-loader开启缓存  
    c: 提取公共代码， 使用CommonsChunkPlugin提取公共模块，可减少文件体积，有助于浏览器的文件缓存
    d: 优化搜索路径，exclude的配置避免多余文件的查找
  3. 写过 webpack loader 吗？
  4. loader与plugin区别？  
    答： loader是一个转换器，作用于文件，主要用于将一个文件转换成另一文件类型，例如*.less使用less-loader转换为*.css。  
    plugin是一个扩展器，作用于webpack。

## React
  1. 你对 react 有什么理解？基于 react 的开发模式比起传统 jqurey 开发模式的最大优势(可以有几个)是什么？
  答： 理解： 通过Virtual DOM和Diff算法隔离DOM操作；采用单项数据流，可跟踪；组件化，JSX自定义标签，便于抽象化。
  优点：react无需直接操作DOM，事件通过改变state间接操作DOM
  2. react在setState后发生了什么（直接说了setState源码）  
  当this.setState调用后，新的State没有立即生效，而是通过ReactUpdate.batchedUpdate存入临时的队列中。当一个transaction完成后，才通过ReactUpdate.flushBatchedUpdates将所有临时state merge并计算新的props和state
  [思维发散问题](https://juejin.im/post/59a699fd6fb9a0247d4f5970
  )  
  3. flux解释
  4. 对react有什么了解（直接说了react中虚拟dom内部表示，mount过程源码和同步过程源码）
  5. combineReduces

## es6和es7的理解
[es6](http://www.cnblogs.com/changyangzhe/articles/5702241.html)
1. 迭代器（Iterator）与生成器（generator）  
  - [迭代器](http://es6.ruanyifeng.com/#docs/iterator)  
  作用有三个： 一是为各种数据结构提供统一的接口；二是使数据按照某种次序排列；三是使用for...of遍历。  
  ````javascript  
  function makeIterator(arrary) {
    var nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length ? 
        {value: array[nextIndex]} :
        {done: true}
      }
    }
  }
  ````  
  一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）
  - [生成器](http://es6.ruanyifeng.com/#docs/generator)  
  Generator是一个状态机。调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是迭代器对象。  
  使用Generator实现斐波拉契数列   

  ````javascript
  function* fibonacci() {
    var [pre, cur] = [0 ,1];
    for(;;) {
      [pre, cur] = [cur, pre + cur];
      yield cur
    }
  }

  for (let n of fibonacci()) {
    if (n > 10) break;
    console.info(n)
  }
  ````
2. es7的装饰器、async/await 
3. var可以重复声明，而let不可以重复声明？  
答： var存在变量提升的问题，再次声明的时候，会忽略掉；let不存在变量提升，会导致暂时性死区的问题，必须先声明才使用。
## 各个模块化的了解

## git
  [rebase和merge区别](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E5%8F%98%E5%9F%BA)  
  答： rebase是回到两个分支的共同祖先，根据当前分支，生成一系列文件补丁，然后以基底分支最后一个提交对象为新的起点，逐个应用补丁，最后生成一个新的提交对象。 (重复提交) 
  merge是将两个分支快照和共同祖先进行三方合并。

## front-end  
  1. 你对异步模型有哪些理解？
  2. 前后端分离的原理及意义？  
  答：原理：后端提供接口，前端获取数组呈现.  
  意义： 前后端解耦，同步开发，提高效率。