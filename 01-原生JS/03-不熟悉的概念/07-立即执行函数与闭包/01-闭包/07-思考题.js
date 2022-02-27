/*
 * @Author: liming
 * @Date: 2021-09-02 09:00:55
 * @LastEditTime: 2021-09-02 09:05:24
 * @FilePath: \07-立即执行函数与闭包\07-思考题.js
 */
var name2 = "The Window";

var object = {
  name2: "My Object",

  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name2;
    };
  },
};

console.log(name2);  //The Window
console.log(object.getNameFunc()());   //My Object