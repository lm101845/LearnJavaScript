/**
 * @Author liming
 * @Date 2022/12/13 9:46
 **/

/**
 * 使用代理的主要目的是可以定义捕获器（trap）。捕获器就是在处理程序对象中定义的“基本操作的
 * 拦截器”。每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接
 * 或间接在代理对象上调用。每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对
 * 象之前先调用捕获器函数，从而拦截并修改相应的行为。
 *
 * 例如，可以定义一个 get() 捕获器，在 ECMAScript 操作以某种形式调用 get() 时触发。下面的例
 * 子定义了一个 get() 捕获器：
 *
 * 注意，只有在代理对象上执行这些操作才会触发捕获器。在目标对象上执行这些操作仍然会产生正
 * 常的行为。
 */
const target = {
    foo: 'bar'
};
const handler = {
// 捕获器在处理程序对象中以方法名为键
    get() {
        return 'handler override';
    }
};
const proxy = new Proxy(target, handler);

console.log(target.foo); // bar
console.log(proxy.foo); // handler override

console.log(target['foo']); // bar
console.log(proxy['foo']); // handler override

console.log(Object.create(target)['foo']); // bar
console.log(Object.create(proxy)['foo']); // handler override
