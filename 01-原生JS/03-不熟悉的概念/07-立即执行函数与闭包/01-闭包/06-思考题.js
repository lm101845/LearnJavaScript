/*
 * @Author: liming
 * @Date: 2021-09-02 08:58:40
 * @LastEditTime: 2021-09-02 09:19:49
 * @FilePath: \07-立即执行函数与闭包\06-思考题.js
 */

var name1 = "The Window";

var object = {
  name1: "My Object",

   function () {
    return function () {
      console.log(name1); //The Window
      console.log(this);
      //一长串，看起来是全局Object
      //this的指向是由它所在函数调用的上下文决定的，而不是由它所在函数定义的上下文决定的。
      console.log(this.name1); //undefined
      return this.name1;
    };
  },
};

// console.log(name);  //The Window
console.log(object.getNameFunc()()); //undefined  ????
