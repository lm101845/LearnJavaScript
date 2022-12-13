/**
 * @Author liming
 * @Date 2022/12/13 9:56
 **/
const target = {
    foo: 'bar'
};
/**
 * 所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。比如， get()
 * 捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
 */
const handler = {
    get(trapTarget, property, receiver) {
        console.log(trapTarget === target);
        console.log(property);
        console.log(receiver === proxy);
    }
};

const proxy = new Proxy(target, handler);
proxy.foo;
