/**
 * @Author liming
 * @Date 2022/12/13 10:38
 **/
const myTarget = {};
const proxy = new Proxy(myTarget, {
    get(target, property, receiver) {
        console.log('get()11');
        return Reflect.get(...arguments)
    }
});
proxy.foo;
// get()
