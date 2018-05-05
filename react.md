# React
  1. 你对 react 有什么理解？基于 react 的开发模式比起传统 jqurey 开发模式的最大优势(可以有几个)是什么？
  答： 理解： 通过Virtual DOM和Diff算法隔离DOM操作；采用单项数据流，可跟踪；组件化，JSX自定义标签，便于抽象化。
  优点：react无需直接操作DOM，事件通过改变state间接操作DOM
  2. react在setState后发生了什么（直接说了setState源码）  
  当this.setState调用后，新的State没有立即生效，而是通过ReactUpdate.batchedUpdate存入临时的队列中。当一个transaction完成后，才通过ReactUpdate.flushBatchedUpdates将所有临时state merge并计算新的props和state
  [思维发散问题](https://juejin.im/post/59a699fd6fb9a0247d4f5970
  )  
  3. flux解释
  4. react生命周期
  5. combineReduces
  6. 不适用redux,组件之间如何通信？  
  7. 两个组件之间交互方式？ 
  8. props和State区别  
  9. 数据流过程  
  <img src="https://github.com/xiaosunJessica/interview/blob/master/images/redux-flow.jpeg" alt="图1" title="图1" width="300" height="300" /> 
  
  10. reducer是什么？
  11. 对比redux和mobx   

  类别 | redux | mobx  
  ----|----|----
  store | 单一 | 多个  
  管理数据 | 干净 | 复杂、凌乱  
  数据对象 | plain javascript | observable对plain javascript进行包装的  
  组件 | 区分smart和dumb组件 | 不区分

  12. react的虚拟DOM和diff算法，渲染方式？  
    React元素不是真实的DOM元素，仅仅是js对象，它由React.CreateElement()创建。  

  ````javascript
    {
      // 标签名
    tagName: 'div',
    // 属性
    properties: {style: {}},
    // 子节点
    children: [],
    // 唯一标识：
    key: 1
    }
  ````
  将虚拟DOM(React元素)转成真实DOM并渲染到页面是通过React.render()实现的。  

  React首次渲染过程：

    a. 通过ReactCompositeComponent实例化组件并加载,创建自定义组件的实例（调用构造器函数）  
    b. 调用该组件的渲染函数并且通过React.createElement创建React元素。它可以直接被调用或通过Babel解析JSX后替代渲染中的标签。  
    c. 使用React.render方式将VDOM渲染到浏览器DOM，加载DOM组件，创建DOM，加载监听事件等。  
    d. 处理DOM组件的直接子组件，如果它是ReactDOMComponent(html)直接跳转到c,否则，它是ReactCompositeComponent（自定义组件），跳转到a。  
  React更新的过程：   

    I. 在React修改数据的时候，我们会调用React提供的setState修改数据。  
    II. React根据新数据生成新的VDOM  
    III. React拿着新的VDOM和之前的DOM执行diff算法，找到不同的地方生成patches
    IV. 最后将patches一次更新到真实DOM上，完成更新
