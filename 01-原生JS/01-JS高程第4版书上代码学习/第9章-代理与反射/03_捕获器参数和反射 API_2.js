/**
 * @Author liming
 * @Date 2022/12/13 9:56
 **/
const target = {
    foo: 'bar'
};
/**
  * 有了这些参数，就可以重建被捕获方法的原始行为：
 */

// const handler = {
//     get(trapTarget, property, receiver) {
//         // return trapTarget[property];
//         /**
//          * 处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API 方法。这些方法与捕获器拦截
//          * 的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。因此，使用反射 API 也可以
//          * 像下面这样定义出空代理对象：
//          */
//         return Reflect.get(...arguments);
//     }
// };

/**
 * 甚至还可以写得更简洁一些：
 */
const handler = {
    get: Reflect.get
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo); // bar
console.log(target.foo); // bar
