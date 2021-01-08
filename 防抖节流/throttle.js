// 节流： 限制目标函数调用的频率，

const throttle = function(func, wait) {
  // 上一次执行的事件
  let previous = 0;
  const throttled = function (...args) {
    let now = new Date().getTime();
    context = this;
    if (now - previous > wait) {
      previous = now;
      func.apply(context, args)
    } 
  }
  return throttled
}