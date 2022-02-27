/*
 * @Author: liming
 * @Date: 2021-09-02 08:58:40
 * @LastEditTime: 2021-09-02 10:18:14
 * @FilePath: \07-立即执行函数与闭包\01-闭包\06-思考题2.0.js
 */

var name1 = "The Window";

var object = {
  name1: "My Object",
   getNameFunc: function() {
    return function () {
      return this.name1;
    };
  },
};

console.log(object.getNameFunc()());  //undefined


