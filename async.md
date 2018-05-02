# 异步编程    

## 同步与异步  
  javascript执行环境是'单线程'的，即一次只能执行一个任务，当碰到多个任务时，排队执行，必须等待前一个任务执行完成才执行下一个任务。
### 同步
  同步即为上述描述的情况，程序的执行与任务的执行顺序一致。但这种情况有个坏处是，碰到一个任务比较耗时时，会拖延整个执行进度，如常见的浏览器无响应（假死）现象。
### 异步
  异步是每一个任务有一个或多个回调函数，前一个任务结束后，不是执行后一个任务，而是执行回调函数。后一个任务不等前一个结束就执行了，程序的执行与任务的执行顺序不一致。 

## 异步模式的方式  
  ### 回调函数
  假定有两个函数fn1和fn2,后者等待前者的执行结果
  ````javascript
  fn1();
  fn2();
  ````  
  如果fn1比较耗时，则把fn2改成fn1的回调函数。
  ````javascript
  function fn1(cb) {
    setTimeout(function() {
      // fn1的任务代码
      cb()
    }, 0)
  }
  fn1(fn2)
  ````  
  <!--采用此方式，把同步变成异步操作，fn1不会阻塞程序运行，相当于先执行主逻辑，耗时推迟执行-->
  回调函数的优点是简单、容易理解；缺点是不利于代码的阅读和维护，各个部分之间高度耦合。  
  ### 事件监听和订阅发布模式  
  我怎么理解的这两个差不多呢？？？都是通过状态控制下一个是否执行  
  ### Promise  
  Promise的思想是每一个异步任务返回一个Promise对象，该对象有一个then方法，用于回调。
  ````javascript
  var fn1 = function(resolve, reject) {
    var rand = Math.random() * 10;
    if (rand < 5) {
      resolve(rand)
    } else {
      reject()
    }
  }

  new Promise(fn1).then(fn2)
  ````  
  ### Generator  
  Generator中可以吧异步操作写在yield表达式里面，等到调用next方法时再往后执行。通过迭代器实现ajax操作  
  ````javascript  
  function makeAjaxCall(opt = {}, cb) {
    let xhr = new XMLHTTPRequest();
    xhr.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          cb(request.responseText);
        } else {
          cb(request.status);
        }
      }
    }
    xhr.open(opt.method, opt.url, opt.async) 
    if (data && (method && method.toLowerCase()) === 'post') {
      xhr.send(data)
    } else {
      xhr.send()
    }
  }

  // 主要用于在普通函数的回调中使用迭代器的next方法
  function request(method, url, async) {
    makeAjaxCall({method, url, async}, function(response) {
      it.next(response)
    })
  }

  function* main() {
    var result = yield request('get', 'http://www.baidu.com', true); // 用来请求值
    var resp = JSON.parse(result);
    console.infoo(resp.value)
  }

  var it = main();
  it.next()
  ````  
  很多时候需要并行处理多个任务（多个ajax请求），generator函数中的yield表达式执行后都会暂停函数的执行，不能够同时运行多个yield表达式。
  将上述改为Promise形式  
  ````javascript
  function request(method, url, async) {
    return new Promise(function(resolve, reject) {
      makeAjaxCall({method, url, async}, resolve)
    })
  }
  ````  
  ### async/await 
  async函数时Generator函数语法糖，其实现就是将Generator函数和自动执行器包装在一个函数里。
  ````javascript
  async function fn(args) {}
  
  //等价于
  function fn(args) {
    return autoActuator(function* () {
      // .....
    })
  }

  autoActuator = function(genFn) {
    return new Promise(function(resolve, reject) {
      var genF = genFn();
      function step(nextF) {
        try {
          var next = nextF()
        } catch(e) {
          return reject(e)
        }
        if (next.done) {
          return resolve(next.value)
        }
        Promise.resolve(next.value).then(function(v) {
          step(function() { return genF.next(v)})
        }, function(e) {
          step(function() { return gen.throw(e)})
        })
      }

      step(function() { return genF.next(undefined)})
    })
  }
  ````

## 参考链接
1. http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html?bsh_bid=1736591883  
2. https://github.com/Jocs/jocs.github.io/issues/11
3. http://www.ruanyifeng.com/blog/2015/05/async.html