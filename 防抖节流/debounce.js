// 防抖的意义： 多次触发同一个方法时，在某个时间返回内只需要执行一次，最后一次就行

/** 
 * 1.通过对防抖方法的分析，来研究debounce 
 * const dFnc = debounce(func, 1000);
 * <div onClick={() => dFunc()}></div>
 * 通过分析可以了解到，debounce返回的是一个函数，同时接收的参数有函数和时间
 * @param {Function} func 是防抖需要处理的函数
 * @param {number} [wait=0] wait是延迟时间的时间间隔
 */

//  function debounce(func, wait) {
//     return function(...args){}
//  }

 /** 2. 实现原理： 利用定时器，函数第一次执行时设定一个定时器，之后调用时发现已设定过定时器，则清空之前的定时器并设定新的定时器；
  * 如果存在没有被清空的定时器，当定时器计时结束后触发函数执行
  */

// function debounce(func, wait) {
//   // 通过闭包缓存定时器id
//   let timerId = null;
//   return function(...args){
//     const context = this;
//     // 已存在定时器，清空上一次的定时器
//     if (timerId) clearTimeout(timerId);

//     // 设定新的定时器，定时器结束后执行传入的函数
//     timerId = setTimeout(() => {
//       func.apply(context, args)
//     }, wait)
//   }
// }

/** 3. 结合underscore和lodash查看，手动添加cancel
 *  
 */

function debounce(func, wait) {
  // 通过闭包缓存定时器id
  let timerId = null;
  function debounced(...args) {
    const context = this;
    // 已存在定时器，清空上一次的定时器
    if (timerId) clearTimeout(timerId);

    // 设定新的定时器，定时器结束后执行传入的函数
    timerId = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }

  function cancel() {
    if (timerId) clearTimeout(timerId);
    timerId = null;
  }

  debounced.cancel = cancel;
  return debounced
}