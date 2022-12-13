/**
 * @Author liming
 * @Date 2022/12/13 10:04
 **/

/**
 * 事实上，如果真想创建一个可以捕获所有方法，然后将每个方法转发给对应反射 API 的空代理，那
 * 么甚至不需要定义处理程序对象：
 */

const target = {
    foo: 'bar'
};
const proxy = new Proxy(target, Reflect);
console.log(proxy.foo); // bar
console.log(target.foo); // bar
