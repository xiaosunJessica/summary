/**
 * 
 * @param {*} fn 
 * 第一步从使用方式上看
 * new Promise((resolve, reject) => {}).then((res) => console.log(res))
 * Promise 是一个函数，new Promise这个实例上有then方法
 */
// function Promise(fn) {}

const { slice } = require("core-js/fn/array");

// Promise.prototype.then = function(resolve, reject) {}

/**
 * 第二步， 状态
 * pending/fulfilled/rejected, 且状态必须是pending到fulfilled，pending到rejected的
 * 初始化时是pending, 成功了是fulfilled, 失败了是rejected
 * @param {*} fn 
 */

// function Promise(fn) {
//   this.state = 'pending';

//   function resolve() {
//     this.state = 'fulfilled'
//   }

//   function reject() {
//     this.state = 'rejected'
//   }
// }

// Promise.prototype.then = function(resolve, reject) {}

/**
 * 第三步执行函数, 其中传过来的fn的第一个参数的是resolve, 第二个参数是reject
 */
// function Promise(fn) {
//   this.state = 'pending';

//   function resolve() {
//     this.state = 'fulfilled'
//   }

//   function reject() {
//     this.state = 'rejected'
//   }
//   try {
//     fn(resolve, reject)
//   } catch (error) {
//     reject(error)
//   }
// }

// Promise.prototype.then = function(resolve, reject) {}

/**
 * 第4步， 值的存储, 同时可以看到这里的很多之前采用this的全部改成了self的方式，
 * 因为resolve这些方法调用的时候this指向window，而通过self方式能指向Promise的原因是闭包的原因
 * 成功测试用例
 * new Promise((resolve, reject) => resolve(1)).then(res => console.log(res, 'success'), err =>console.log(err, 'error'))
 * 失败测试用例
 * new Promise((resolve, reject) => reject(1)).then(res => console.log(res, 'success'), err =>console.log(err, 'error'))
 */
// function Promise(fn) {
//   const self = this;
//   // promise状态
//   self.state = 'pending';
//   // 成功的值
//   self.value = undefined;
//   // 异常的原因
//   self.reason = undefined;

//   function resolve(value) {
//     self.state = 'fulfilled';
//     self.value = value;
//   }

//   function reject(reason) {
//     self.state = 'rejected';
//     self.reason= reason;
//   }
//   try {
//     fn(resolve, reject)
//   } catch (error) {
//     reject(error)
//   }
// }

// Promise.prototype.then = function(resolve, reject) {
//   const self = this;
//   if (self.state === 'fulfilled') {
//     resolve(self.value);
//     return;
//   }

//   if (self.state === 'rejected') {
//     reject(self.reason);
//     return;
//   }
// }

/**
 * 是不是以为写到这里，Promise就完成了呢，其实，非也，如果Promise是异步的情况，执行then方法是，还未执行resolve/reject,
 * 所以，state一直是pending，执行有问题
 * 测试用例
 * new Promise((resolve, reject) => setTimeout(() => resolve(1), 100)).then(res => console.log(res, 'success'), err =>console.log(err, 'error'))
 */

 /**
  * 第5步处理异步,采用的发布订阅模式,
  * 在then方法中将回调存起来，搜集信息;
  * 等到异步完成后执行resolve/reject方法时，取出信息，执行then的方法了
  * 测试用例
  * new Promise((resolve, reject) => setTimeout(() => resolve(1), 100)).then(res => console.log(res, 'success'), err =>console.log(err, 'error'))
  */

//  function Promise(fn) {
//   const self = this;
//   // promise状态
//   self.state = 'pending';
//   // 成功的值
//   self.value = undefined;
//   // 异常的原因
//   self.reason = undefined;

//    // 存放成功的回调
//    this.onResolvedCallbacks = [];
//    // 存放失败的回调
//    this.onRejectedCallbacks= [];

//   function resolve(value) {
//     self.state = 'fulfilled';
//     self.value = value;
//     // 依次将对应的函数执行
//     self.onResolvedCallbacks.forEach(fn=>fn());
//   }

//   function reject(reason) {
//     self.state = 'rejected';
//     self.reason= reason;
//     // 依次将对应的函数执行
//     self.onRejectedCallbacks.forEach(fn=>fn());
//   }
//   try {
//     fn(resolve, reject)
//   } catch (error) {
//     reject(error)
//   }
// }

// Promise.prototype.then = function(resolve, reject) {
//   const self = this;
//   if (self.state === 'fulfilled') {
//     resolve(self.value);
//     return;
//   }

//   if (self.state === 'rejected') {
//     reject(self.reason);
//     return;
//   }

//   if (self.state === 'pending') {
//     self.onResolvedCallbacks.push(() => {
//       resolve(self.value)
//     })

//     self.onRejectedCallbacks.push(() => {
//       reject(self.reason)
//     })
//   }
// }

/**
 * 期约连锁， then后面可以连锁执行then方法，因此分析then返回的应该是Promise
 * 测试用例
 * new Promise((resolve, reject) => setTimeout(() => reject('fail'), 100)).then().then(res => console.log(res, 'success'), err =>console.log(err, 'error'))
 */

/**
 * 第6步，实现连锁功能
 */

// function Promise(fn) {
//   const self = this;
//   // promise状态
//   self.state = 'pending';
//   // 成功的值
//   self.value = undefined;
//   // 异常的原因
//   self.reason = undefined;

//    // 存放成功的回调
//    this.onResolvedCallbacks = [];
//    // 存放失败的回调
//    this.onRejectedCallbacks= [];

//   function resolve(value) {
//     self.state = 'fulfilled';
//     self.value = value;
//     // 依次将对应的函数执行
//     self.onResolvedCallbacks.forEach(fn=>fn());
//   }

//   function reject(reason) {
//     self.state = 'rejected';
//     self.reason= reason;
//     // 依次将对应的函数执行
//     self.onRejectedCallbacks.forEach(fn=>fn());
//   }
//   try {
//     fn(resolve, reject)
//   } catch (error) {
//     reject(error)
//   }
// }

// Promise.prototype.then = function(resolve, reject) {
//   const self = this;
//   // 这里的resolve/ reject可能没值，需要包装下
//   resolve = typeof resolve === 'function' ? resolve : noop;
//   reject = typeof reject === 'function' ? reject : function(err){throw(err)}
//   let promise2 = new Promise((_resolve, _reject) => {
//     if (self.state === 'fulfilled') {
//       // 这里的res可能是then执行后返回的Promise，因此需要循环继续调用
//       let res = resolve(self.value);
//       resolvePromise(promise2, res, _resolve, _reject)
//     }
  
//     if (self.state === 'rejected') {
//       let res = reject(self.reason);
//       resolvePromise(promise2, res, _resolve, _reject)
//     }
  
//     if (self.state === 'pending') {
//       self.onResolvedCallbacks.push(() => {
//         let res = resolve(self.value)
//         resolvePromise(promise2, res, _resolve, _reject)
//       })
  
//       self.onRejectedCallbacks.push(() => {
//         let res = reject(self.reason)
//         resolvePromise(promise2, res, _resolve, _reject)
//       })
//     }
//   });
//   return promise2;
// }

// function noop(){}

// function resolvePromise(promise, value, resolve, reject) {
//   if ((typeof value === 'object' && value !== null ) || typeof value === 'function') {
//     if (typeof value.then === 'function') {
//       // 如果value是函数的话，执行then继续，
//       value.then.call(value, (success) => {
//         resolvePromise(promise, success, resolve, reject)
//       }, (fail) => {
//         reject(fail)
//       })
//     } else {
//       resolve(value)
//     }
//   } else {
//     resolve(value)
//   }
// }


function noop(){}

function resolvePromise(promise, value, resolve, reject) {
  if ((typeof value === 'object' && value !== null ) || typeof value === 'function') {
    if (typeof value.then === 'function') {
      // 如果value是函数的话，执行then继续，
      value.then.call(value, (success) => {
        resolvePromise(promise, success, resolve, reject)
      }, (fail) => {
        reject(fail)
      })
    } else {
      resolve(value)
    }
  } else {
    resolve(value)
  }
}
function Promise(fn) {
  const self = this;
  // promise状态
  self.state = 'pending';
  // 成功的值
  self.value = undefined;
  // 异常的原因
  self.reason = undefined;

   // 存放成功的回调
   this.onResolvedCallbacks = [];
   // 存放失败的回调
   this.onRejectedCallbacks= [];

  function resolve(value) {
    self.state = 'fulfilled';
    self.value = value;
    // 依次将对应的函数执行
    self.onResolvedCallbacks.forEach(fn=>fn());
  }

  function reject(reason) {
    self.state = 'rejected';
    self.reason= reason;
    // 依次将对应的函数执行
    self.onRejectedCallbacks.forEach(fn=>fn());
  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function(resolve, reject) {
  const self = this;
  // 这里的resolve/ reject可能没值，需要包装下
  resolve = typeof resolve === 'function' ? resolve : noop;
  reject = typeof reject === 'function' ? reject : function(err){throw(err)}
  let promise2 = new Promise((_resolve, _reject) => {
    if (self.state === 'fulfilled') {
      // 这里的res可能是then执行后返回的Promise，因此需要循环继续调用
     setTimeout(() => {
      try {
        let res = resolve(self.value);
        resolvePromise(promise2, res, _resolve, _reject)
      } catch (error) {
        reject(error)
      }
     }, 0)
    }
  
    if (self.state === 'rejected') {
      setTimeout(() => {
        try {
          let res = reject(self.reason);
          resolvePromise(promise2, res, _resolve, _reject)
        } catch (error) {
          reject(error)
        }
      }, 0)
    
    }
  
    if (self.state === 'pending') {
      self.onResolvedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let res = resolve(self.value);
            resolvePromise(promise2, res, _resolve, _reject)
          } catch (error) {
            reject(error)
          }
         }, 0)
      })
  
      self.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let res = reject(self.reason);
            resolvePromise(promise2, res, _resolve, _reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      })
    }
  });
  return promise2;
}

export default Promise
