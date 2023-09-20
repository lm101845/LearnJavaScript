/**
 * @Author liming
 * @Date 2023/9/20 14:44
 **/

/**
 * 具体到js来说，由于语言本身的特性，天生就具有运行时动态插入逻辑的能力。
 * 重点在于在原函数上增加其他功能并不改变函数本身。
 * 毕竟函数可以接受一切形式的参数，当然函数也不例外了。
 * 当传入一个函数的时候，我们要对其操作的余地就很大了，
 * 保存原函数，然后利用后续参数加上call或apply，就可以达到我们的目的。
 * 此外为了给函数都增加一个属性，我们在原型上操作就行了。
 *
 * 链接：https://juejin.cn/post/6844903700368982029
 */

// action 即为我们的侧关注点，即logger
Function.prototype.after = function (action) {
    //保留当前函数，这里this指向运行函数即clickHandler
    let func = this;
    console.log(func,'after-打印func')
    // return 被包装过的函数，这里就可以执行其他功能了。
    // 并且该方法挂在Function.prototype上，
    // 被返回的函数依然具有after属性,可以链式调用
    return function () {
        // 原函数执行，这里不考虑异步
        let result = func.apply(this, arguments);
        // 执行之后的操作
        action.apply(this,arguments);
        // 将执行结果返回
        return result;
    };
};


// before 实现类似，只不过执行顺序差别而已
Function.prototype.before = function (action) {
    let func = this;
    console.log(func,'before-打印func')
    return function () {
        console.log(this,'before-打印this')
        action.apply(this,arguments);
        //执行打印日志的action
        return func.apply(this, arguments);
        //返回一个新函数
    };
};
