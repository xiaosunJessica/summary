/** 
 * 手写async await 方法
 * @param generatorFunc 是一个generator函数
 * 参考文档：https://www.cnblogs.com/wangshengliangblog/p/13053480.html
 */

function asyncToGenerator (generatorFunc) {
  // 返回一个新的函数
  return function() {
    // 先调用generator函数生成迭代器
    const gen = generatorFunc.apply(this, arguments);

    // 返回一个Promise,因为外部都是用.then的方式，或者await的方式去使用这个函数的返回值的
    // var test = asyncToGenerator(testG); test().then(res => console.log(res))
    return new Promise((resolve, reject) => {
      // 内部定义一个step函数，用来一步一步的跨过yield的阻碍
      // key有next和throw两种取值，分别对应gen的next和throw方法
      // arg参数则是用来把promise resolve出来的值交给下一个yield
      function step(key, arg) {
        let generatorResult;
        // 这个方法需要包裹在try catch中，如果报错就把promise给reject掉，外部通过catch可以获取到错误
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }

        // gen.next()得到的结果是一个{value, done}的结构
        const { value, done } = generatorResult;

        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(function onResolve(val){
            step('next', val)
          }, function onReject(err) {
            step('throw', err)
          })
        }
      }
      step('next')
    })
  }
}
