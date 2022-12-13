/**
 * @Author liming
 * @Date 2022/12/13 10:47
 **/

/**
 * 通过捕获 get 、 set 和 has 等操作，可以知道对象属性什么时候被访问、被查询。把实现相应捕获
 * 器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问过：
 */
const user = {
    name: 'Jake'
};
const proxy = new Proxy(user, {
    get(target, property, receiver) {
        console.log(`Getting ${property}`);
        return Reflect.get(...arguments);
    },
    set(target, property, value, receiver) {
        console.log(`Setting ${property}=${value}`);
        return Reflect.set(...arguments);
    }
});
proxy.name; // Getting name
proxy.age = 27; // Setting age=27
