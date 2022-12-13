/**
 * @Author liming
 * @Date 2022/12/13 10:42
 **/

const myTarget = {};
const proxy = new Proxy(myTarget, {
    has(target, property) {
        console.log('has()');
        return Reflect.has(...arguments)
    }
});
console.log('foo' in proxy)
// has()
