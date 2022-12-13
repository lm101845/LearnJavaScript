/**
 * @Author liming
 * @Date 2022/12/13 10:43
 **/
const myTarget = {};
const proxy = new Proxy(myTarget, {
    defineProperty(target, property, descriptor) {
        console.log('defineProperty()');
        return Reflect.defineProperty(...arguments)
    }
});
Object.defineProperty(proxy, 'foo', { value: 'bar' });
// defineProperty()
