/*
 * @Author: liming
 * @Date: 2021-08-24 17:55:42
 * @LastEditTime: 2021-08-24 18:10:26
 * @FilePath: \01-尚硅谷李强\02-代码手敲\4-Promise自定义封装\01-初始结构搭建\promise.js
 */
function Promise(executor) {
  // 问题：在当前函数作用域当中，并没有resolve,reject这2个变量，或者说是声明
  // 问题：声明它到底是一个什么类型的数据啊？？resolve后面有括号，明显是函数类型的数据，reject同理
    
    //resolve函数
    function resolve(data) {
        // 这个resolve人家调用的时候，使用了实参'ok'，你这里没有形参，那是不行的
    }

    //reject函数
    function reject(data) { }

    // 注意：index.html里面的两个参数(形参)resolve,reject名字可以随便取，你写a,b也行！！！
    // 而我们这里(promise.js)里面是两个实参，独立函数，你可以写成a,b都行，你只要在用的时候也写成a,b就好了

  //执行器函数在内部是同步调用的
  //那我们在内部如何同步调用这个执行器函数呢？
  executor(resolve, reject);
  // 直接把它拿过来，加一个括号就完事了
  //我们在调用这个函数的时候，需要在里面传递2个实参
}

//添加then 方法
Promise.prototype.then = (onResolved, onRejected) => {
    
}