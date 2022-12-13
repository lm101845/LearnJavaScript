/**
 * @Author liming
 * @Date 2022/12/13 10:40
 **/
const myTarget = {};
const proxy = new Proxy(myTarget, {
    set(target, property, value, receiver) {
        console.log('set()');
        return Reflect.set(...arguments)
    }
});
proxy.foo = 'bar';
// set()
