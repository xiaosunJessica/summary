/** 
 * call 接收的参数是一个一个传入 
 * arg*是一个一个的参数
 * 使用：func.call(context, arg1, arg2, ...)
 */
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    throw new Error('对象必须是方法');
  }

  console.log(arguments, '------arguments------')

  // 获取参数
  let args = [...arguments].slice(1), result = null;

  // 判断context是否传入，没传入的设置成window
  context = context || window;

  // 将调用函数设为对象的方法
  context.fn = this;

  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return result;
}

/** 
 * apply 接收的参数是一个数组形式
 * args 是数组形式的参数
 * 使用：func.apply(context, args)
 */

 Function.prototype.myApply = function(context) {
   if (typeof this !== 'function') {
     throw new Error('this 必须是函数')
   }
   console.log(arguments, '------arguments------')
   // 计算参数
   let result = null;
   // 判断context是否传入，没传入默认是window
   context = context || window;

   // 将方法挂在到context对象上，调用方法时的this就会执行context
   context.fn = this;

   // 执行方法
   if (Array.isArray(arguments[1])) {
    result = context.fn(...arguments[1]);
   } else {
    result = context.fn();
   }

   // 将属性删除
   delete context.fn;

   // 返回结果
   return result;
 }

 /** 
  * bind 和call 及 apply方式的不同，
  * call和apply是立即执行函数，bind并不是
  */

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new Error('this 必须是函数')
  }
  // 获取参数
  let args = [...arguments].slice(1);
  context = context || window;
  context.fn = this;
  return function Fn() {
    return context.fn.myApply(this instanceof Fn ? this : context, args.concat(...arguments));
  }
}

