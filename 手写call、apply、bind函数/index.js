/** 
 * call 接收的参数是一个一个传入 
 * 使用：func.call(context, args)
 */
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    throw new Error('对象必须是方法');
  }

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