/**
 * @Author liming
 * @Date 2022/12/13 10:09
 **/

/**
 * 使用捕获器几乎可以改变所有基本方法的行为，但也不是没有限制。根据 ECMAScript 规范，每个
 * 捕获的方法都知道目标对象上下文、捕获函数签名，而捕获处理程序的行为必须遵循“捕获器不变式”
 * （trap invariant）。捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过于反常的行为。
 * 比如，如果目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的
 * 值时，会抛出 TypeError ：
 */

const target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    writable: false,
    value: 'bar'
});
const handler = {
    get() {
        return 'qux';
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);
// TypeError
