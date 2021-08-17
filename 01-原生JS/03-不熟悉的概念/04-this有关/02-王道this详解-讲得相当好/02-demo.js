/*
 * @Author: liming
 * @Date: 2021-08-10 15:39:12
 * @LastEditTime: 2021-08-10 15:43:20
 * @FilePath: \04-this有关\02-开课吧-讲得好\02-demo.js
 */

function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

console.log(A.describe()); // "姓名：张三"
console.log(B.describe()); // "姓名：李四"

// 上面代码中，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。

// 只要函数被赋给另一个变量，this的指向就会变。

var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var name = '李四';
var f = A.describe;
console.log(f()); // "姓名：undefined"

/**
 * 总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，所以【函数都是在某个对象之中运行】，
 * this就是函数运行时所在的对象（环境）。这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说，this的指向是动态的，没有办法事先确定到底指向哪个对象，这才是最让初学者感到困惑的地方。
 */