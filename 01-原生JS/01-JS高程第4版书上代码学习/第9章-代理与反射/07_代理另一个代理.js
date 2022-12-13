/**
 * @Author liming
 * @Date 2022/12/13 10:30
 **/

/**
 * 代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理。这
 * 样就可以在一个目标对象之上构建多层拦截网：
 */

const target = {
    foo: 'bar'
};
const firstProxy = new Proxy(target, {
    get() {
        console.log('first proxy');
        return Reflect.get(...arguments);
    }
});
const secondProxy = new Proxy(firstProxy, {
    get() {
        console.log('second proxy');
        return Reflect.get(...arguments);
    }
});
console.log(secondProxy.foo);
// second proxy
// first proxy
// bar
