/** 
 * generator函数的分析 
 * 如果gen是gennerator函数，const g = gen()
 * g返回的对象里有next函数，
 * 可以调用g.next(), 返回对象{done, value}，而且g.next直到done为true才结束，手动调用可一直执行
 * 下面实现数组的迭代器
 */

 function generator(list) {
   let index = 0;
   let len = list.length;
   return {
     next: function() {
       let done = index >= len;
       let value = done ? undefined : list[index++]
       return {
         done,
         value
       }
     }
   }
 }

// 定义生成器函数，入参是任意集合
// function webCanteenGenerator(list) {
//   var index = 0;
//   var len = list.length;
//   return {
//       // 定义 next 方法
//       // 记录每次遍历位置，实现闭包，借助自由变量做迭代过程中的“游标”
//       next: function() {
//           var done = index >= len; // 如果索引还没有超出集合长度，done 为 false
//           var value = !done ? list[index++] : undefined; // 如果 done 为 false，则可以继续取值
//           // 返回遍历是否完毕的状态和当前值
//           return {
//               done: done,
//               value: value
//           }
//       }
//   }
// }

