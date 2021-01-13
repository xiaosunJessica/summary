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

/**
 * 第一步： co的函数，
 * 了解到传入的是generator函数，
 * 返回的是Promise，
 * 且支持generator函数的自执行
 */
// function co(gen) {
//   const g = gen();
//   return new Promise((resolve, reject) => {
//     function next() {

//     }

//     next();
//   })
// }

/** 
 * 第二步： 这里的step其实是thunk函数，是函数的传递
 */
function co(gen) {
  const ctx = this;
  let args = Array.prototype.slice.call(arguments, 1)
  return new Promise((resolve, reject) => {
    let g = gen;
    // 如果gen是函数，执行
    if (typeof gen === 'function') g = gen.apply(ctx, args);
    // 如果next是函数, 说明是迭代器; 否则直接返回
    if (!g || typeof g.next !== 'function') return resolve(g)
    // 
    function step(nextF) {
      let nextResult;
      try {
        nextResult = nextF();
      } catch (err) {
        return reject(err)
      }
      // 如果done为true, 迭代器执行完成
      if (nextResult.done) {
        return resolve(nextResult.value)
      }
      // 继续执行迭代器
      Promise.resolve(nextResult.value).then(function(value){
        step(function(){return g.next(value)})
      }, function(err){
        step(function(){return g.throw(err)})
      })
    }

    step(function() {
      return g.next();
    });
  })
}
