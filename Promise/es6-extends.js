// 文件./core实现了基本的Promise方法， 但还存在一些列API是如何实现了
const { resolve, reject } = require('core-js/fn/promise');
var Promise = require('./core.js');

function noop(){}

/**
 * API1：catch方法，Promise.prototype.catch
 */

 Promise.prototype.catch = function(onReject) {
   this.then(null, onReject)
 }

 /** 
  * API2: resolve/reject
  */

Promise.resolve = function(value) {
  // if (value instanceof Promise) return value;
  // let newPromise = new Promise(noop);
  // newPromise.state = 'fulfilled';
  // newPromise.value = value;
  // return newPromise
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.reject = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

/**
 * API3: all, promise.all特点是，有一个失败就都失败，返回的是对应传入参数的数组结果，且为Promise对象
 */

Promise.all = function(arr) {
  let args = Array.prototype.slice.call(arr);
  return new Promise((resolve, reject) => {
    let result = [];
    let orderIdx = 0;
    // 成功处理
    const resolveByKey = (value, key) => {
      result[key] = value;
      if (++orderIdx === args.length) {
        resolve(result);
      }
    }
    for (let i = 0; i < args.length; i++) {
      let value = args[i];
      if (value && typeof value.then === 'function') {
        value.then((v) => {
        resolveByKey(v, i)
        }, reject)
      } else {
        resolveByKey(value, i)
      }
    }
  })
}


/**
 * API4: race 采用多个异步同步发起，谁先有结果返回谁的
 */

Promise.race = function(arr) {
  let args = Array.prototype.slice.call(arr);
  return new Promise((resolve, reject) => {
    args.forEach(value => {
     if (value && typeof value.then === 'function') {
       value.then(resolve, reject)
     } else {
       resolve(value)
     }
    });
  })
} 

/**
 * API5: finally, 不管前面的是成功还是失败，finally在异步完成后都会执行
 */

 Promise.prototype.finally = function(cb) {
   return this.then((value) => {
    return Promise.resolve(cb()).then(() => value)
   }, (err) => {
    return Promise.resolve(cb()).then(() => {
      throw err
    })
   })
 }
