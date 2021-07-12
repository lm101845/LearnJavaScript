/*
 * @Author: liming
 * @Date: 2021-05-25 19:16:54
 * @LastEditTime: 2021-05-25 19:17:08
 * @FilePath: \8.1.4-合并对象\02-获取函数与设置函数.js
 */
/**
 * 获取函数与设置函数
 */
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    }
}

src = {
    get a() {
        console.log('Invoked src getter');
        return 'foo';
    }
}
Object.assign(dest, src);
// 调用 src 的获取方法
// 调用 dest 的设置方法并传入参数"foo"
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest); // { set a(val) {...} }

/**
 * Object.assign() 实际上对每个源对象执行的是浅复制。 如果多个源对象都有相同的属性， 则使
 用最后一个复制的值。 此外， 从源对象访问器属性取得的值， 比如获取函数， 会作为一个静态值赋给目
 标对象。 换句话说， 不能在两个对象间转移获取函数和设置函数。
 */