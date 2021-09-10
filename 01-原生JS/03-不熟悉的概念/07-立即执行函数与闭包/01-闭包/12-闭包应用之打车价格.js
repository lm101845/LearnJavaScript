/*
 * @Author: liming
 * @Date: 2021-09-02 10:06:25
 * @LastEditTime: 2021-09-02 10:14:15
 * @FilePath: \07-立即执行函数与闭包\01-闭包\12-闭包应用之打车价格.js
 */
// 闭包应用-计算打车价格
// 打车起步价13(3公里内), 之后每多一公里增加 5块钱. 用户输入公里数就可以计算打车价格
// 如果有拥堵情况,总价格多收取10块钱拥堵费
// function fn() {};
// fn();

var car = (function () {
  //start和total都是在一个函数内部，所以都是局部变量
  var start = 13; // 起步价 局部变量
  var total = 0; // 总价 局部变量
  //在立即执行函数里再声明2个函数，一个是正常的总价函数，一个是拥堵的费用函数
  return {
    // 返回的是一个对象
    //正常总价
    price(n) {
      if (n <= 3) {
        total = start;
      } else {
        total = start + (n - 3) * 5;
      }
      return total;
    },

    //拥堵之后的费用
    yd(flag) {
      return flag ? total + 10 : total;
    },
  };
})();

console.log(car.price(3));  //13
// 如果可以连着写就好了
console.log(car.yd(true));   //23

console.log(car.price(1)); // 13
console.log(car.yd(false)); // 13

console.log(car.price(5)); //23
console.log(car.yd(true)); //33
