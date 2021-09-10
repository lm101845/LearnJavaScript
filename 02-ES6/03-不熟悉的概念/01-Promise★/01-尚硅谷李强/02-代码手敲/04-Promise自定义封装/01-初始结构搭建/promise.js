/*
 * @Author: liming
 * @Date: 2021-08-24 17:55:42
 * @LastEditTime: 2021-09-10 21:13:32
 * @FilePath: \01-Promise★\01-尚硅谷李强\02-代码手敲\04-Promise自定义封装\01-初始结构搭建\promise.js
 */
function Promise(executor) {
    // 问题：在当前函数作用域当中，并没有resolve,reject这2个变量，或者说是声明
    // 问题：声明它到底是一个什么类型的数据啊？？resolve后面有括号，明显是函数类型的数据，reject同理

    //添加属性——设置初始值
    this.PromiseState = 'pending'
    this.PromiseResult = null

    // 我们预先保存实例对象的this值
    console.log('函数外面的this', this);
    const _this = this
    //resolve函数
    function resolve(data) {
        console.log('函数里面的this', this);
        console.log('_this', _this);
        // 这个resolve人家调用的时候，使用了实参'ok'，你这里没有形参，那是不行的
        // 1.修改对象的的状态 (promiseState)

        // 在改对象状态之前，先判断一下这个对象状态是否被改过了，如果改了就没必要再改了
        if (_this.PromiseState !== 'pending') return
        _this.PromiseState = 'fulfilled'     //resolved(和fulfilled表示的意思一样)
        // 2.设置对象结果值 (promiseResult)
        _this.PromiseResult = data
        // 注意：这里的this出了问题，resolve函数调用的时候，是直接调用的(window)
    }

    //reject函数
    function reject(data) {
        // 1.修改对象的的状态 (promiseState)
        // 在改对象状态之前，先判断一下这个对象状态是否被改过了，如果改了就没必要再改了
        if(_this.PromiseState !== 'pending') return 
        _this.PromiseState = 'rejected' //rejected()
        // 2.设置对象结果值 (promiseResult)
        _this.PromiseResult = data
    }

    // 注意：index.html里面的两个参数(形参)resolve,reject名字可以随便取，你写a,b也行！！！
    // 而我们这里(promise.js)里面是两个实参，独立函数，你可以写成a,b都行，你只要在用的时候也写成a,b就好了

    //执行器函数在内部是【同步调用】的
    //那我们在内部如何同步调用这个执行器函数呢？
    //   executor(resolve, reject);
    // 直接把它拿过来，加一个括号就完事了
    //我们在调用这个函数的时候，需要在里面传递2个实参

    try {
        //同步调用——执行器函数
        executor(resolve, reject);
    } catch(e) {
        //修改Promise对象的状态为失败
        reject(e)
    }
}

//添加then 方法
Promise.prototype.then = function(onResolved, onRejected){
    //调用回调函数  PromiseState
    // 我们不能直接调用onResolved()或者onRejected()
    // 这2个回调函数的执行是要有条件的！！！

    // 成功的判断条件：实例对象身上的PromiseState属性
    if (this.PromiseState === 'fulfilled') {
        // 这个函数内部的this是指向实例对象p的！！！
        // onResolved()
        onResolved(this.PromiseResult)
        // 注意：p.then里面的第一个参数是函数，它是有形参的，而我们这里调用的时候并没有传递实参
        // 所以我们这里需要把实参给补一下

        // 实参是谁呢？then这个函数最终的处理结果是成功的那个值，所以传入的实参就是Promise成功的那个结果值

        // 而那个结果值在哪里存着呢？是在实例对象的PromiseResult这里面存着的
    }

    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult)
    }
}