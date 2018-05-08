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
  5. combineReducers, applyMiddleware 
  ````javascript
  const combineReducers = reducers => {
    return (state ={}, action) => {
      return Object.keys(reducers).reduce(
        (nextState, key) => {
          nextState[key] = reducers[key](state[key], action)
          return nextState
        }, 
        {}
      )
    }
  }

  applyMiddleware = (...middlewares) => {
    return createStore => (reducer, preloadedState, enhancer) => {
      let store = createStore(reducer, preloadedState, enhancer);
      let dispatch = store.dispatch;
      let chain = [];

      let middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action)
      }

      chain = middlewares.map(middleware => middleware(middlewateAPI));
      dispatch = compose(...chain)(store.dispatch);
      
      return {...store, dispatch}
    }
  }
  ````
  7. [两个组件之间交互方式？](http://www.alloyteam.com/2016/01/some-methods-of-reactjs-communication-between-components/)  
    - 父子组件间通信方式     
      父组件通过props向子组件传递需要的信息；  
      子组件向父组件通信方式： 回调函数，自定义事件机制；
    - 兄弟组件间的通信方式  
      将数据挂载在父组件中，由两组间共享  
    - 层级较深的组件通信  
      a. 使用第三方库redux/mobx等  
      b. 全局事件,采用发布/订阅模式，在componentDidMount来绑定事件，在componentWillUnMount时候卸载事件  
      c. 使用context(上下文)可以让子组件直接访问祖先的数据或函数，无需从祖先组件一层层传递，childContextTypes是必须的  
    
    总结： 简单的组件通信采用props和callback方法，但项目规模变大，层级变深，这些方法不适用，全局事件可以让组件直接沟通，但是数据流动变得很乱，使用redux可以让整个项目的数据变得比较清晰。  
  8. props和State区别  
    答： props是一个从外部传进组件的参数，用于父组件向子组件传递数据，不可修改；
    state用于组件内部状态使用，可修改   
  9. 数据流过程  
  <img src="https://github.com/xiaosunJessica/interview/blob/master/images/redux-flow.jpeg" alt="图1" title="图1" width="300" height="300" /> 
  
  10. redux, react-redux是什么？  
    redux基本概念： 
      web应用是一个状态机，视图与状态一一对应 ；  
      所有状态，保存在一个对象里，即为store;  
      store是通过createStore这个函数创建的；  
      store.getState获取整个State, store.dispatch是view发出的action;  
      store收到Action以后，必须给出新的State,计算新的state的是reducer,它是一个纯函数；
    react-redux: 
      connect方法是一个返回高阶组件的高阶函数，用于从UI组件生成容器组件；  
      Provider组件，可以让容器拿到State  
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
