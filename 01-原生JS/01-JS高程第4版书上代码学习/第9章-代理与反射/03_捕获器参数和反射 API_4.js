/**
 * @Author liming
 * @Date 2022/12/13 10:04
 **/

/**
 * 反射 API 为开发者准备好了样板代码，在此基础上开发者可以用最少的代码修改捕获的方法。比如，
 * 下面的代码在某个属性被访问时，会对返回的值进行一番修饰：
 */

const target = {
    foo: 'bar',
    baz: 'qux'
};
const handler = {
    get(trapTarget, property, receiver) {
        let decoration = '';
        if (property === 'foo') {
            decoration = '!!!';
        }
        return Reflect.get(...arguments) + decoration;
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // bar!!!
console.log(target.foo); // bar
console.log(proxy.baz); // qux
console.log(target.baz); // qux
