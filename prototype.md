# 原型  
  ````javascipt
    function Person(arg) {
      this.person = arg
    }

    var student = new Person('student') 
  ````
上述代码，只是在Person上实例化一个对象student，但是Person和student之间的关系如下图所示：

<img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/prototype/proto1.png" alt="图1" title="图1" width="300" height="300" />  


 *这里特别要注意的是prototype与__proto__的区别，prototype是函数才有的属性，而__proto__是每个对象都有的属性。(__proto__不是一个规范属性，只是部分浏览器实现了此属性，对应的标准属性是[[Prototype]])*

 原型链是从当前原型上依次向上查找直到null才结束，上述的原型链为： 
 student --> Person.prototype --> Object.prototype --> null  
 因此，将上述的原型补上的原型链关系图如下所示：  

 <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/prototype/proto2.png" alt="图2" title="图2" width="300" height="300" />  

 上述的Person是一个函数，它属于函数的实例化对象，而函数也是对象。同时，需要注意的是: *所有函数的原型都是Function。prototype*,这其中包括Function的构造函数和Object构造函数（下图标红部分）。因此，将函数的原型关系加入进去，如下如所示：  

  <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/prototype/proto3.png" alt="图3" title="图3" width="300" height="300" />  

## 原型链的继承  
  1. 假设Student继承于Person, 则Student的构造函数如下  

  ````javascript
    funciton Student(obj) {
      Person.call(this, obj); // 调用Person构造函数，绑定this变量
      this.class = obj.class || '';
    } 
  ````
上述，虽然调用了Person的构造函数，但不等于继承了Person，此时由Student实例化的对象原型链为：  
new Student() -->  Student.prototype --> Object.prototype --> null  
而为了让Student继承于Person,必须使得原型链为：  
new Student() --> Student.prototype --> Person.prototype --> Object.prototype -> null.  
如果我们只是使用  
````javascript
Student.prototype = Person.prototype
````  
但是，这时候的Student.prototype.constructor是指向Person。此时需要： 
````javascript
Student.prototype.constructor = Student
````  
*注意，上面实现的方式，让Studeng和Person共享了一个原型对象，StudenT的存在没有意义* 
此时，可以借助中间对象来实现正确的原型链。采用空函数的方式，如下所示：  
````javascript
var Person = function(p) {
  this.p = p;
}

var Student = function(obj) {
  Person.call(this, obj);
  this.class = obj.class || ''
}

var F = function() {

}

// 把F的原型指向Person.prototype;
F.prototype = Person.prototype;

Student.prototype = new F();
Student.prototype.constructor = Student;
//继续在Student原型上定义方法
Student.prototype.getClass = function() {
  return this.class
}
````  
把上式的继承方式进行封装，实现代码如下：  
````javascript
  function inherit(Child, Parent) {
    var F = function() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
  }
````  
此时上面的代码使用封装的继承来写：  
````javascript
var Person = function(p) {
  this.p = p;
}

var Student = function(obj) {
  Person.call(this, obj);
  this.class = obj.class || ''
}

var F = function() {

}

inherit(Student, Person)
Student.prototype.getClass = function() {
  return this.class
}
````  
其中，inherit可以用Object.create()来代替。    

## 参考链接
1. https://zhuanlan.zhihu.com/p/30004089
2. https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000