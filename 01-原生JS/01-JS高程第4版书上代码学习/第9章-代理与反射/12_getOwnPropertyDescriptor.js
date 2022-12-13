/**
 * @Author liming
 * @Date 2022/12/13 10:44
 **/

const myTarget = {};
const proxy = new Proxy(myTarget, {
    getOwnPropertyDescriptor(target, property) {
        console.log('getOwnPropertyDescriptor()');
        return Reflect.getOwnPropertyDescriptor(...arguments)
    }
});
Object.getOwnPropertyDescriptor(proxy, 'foo');
// getOwnPropertyDescriptor()
