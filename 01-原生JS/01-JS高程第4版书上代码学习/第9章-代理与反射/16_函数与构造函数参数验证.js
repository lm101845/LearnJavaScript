/**
 * @Author liming
 * @Date 2022/12/13 11:01
 **/

/**
 * 跟保护和验证对象属性类似，也可对函数和构造函数参数进行审查。比如，可以让函数只接收某种
 * 类型的值：
 */
function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
}

const proxy = new Proxy(median, {
    apply(target, thisArg, argumentsList) {
        for (const arg of argumentsList) {
            if (typeof arg !== 'number') {
                throw 'Non-number argument provided';
            }
        }
        return Reflect.apply(...arguments);
    }
});
console.log(proxy(4, 7, 1)); // 4
console.log(proxy(4, '7', 1));
// Error: Non-number argument provided

//类似地，可以要求实例化时必须给构造函数传参：
class User {
    constructor(id) {
        this.id_ = id;
    }
}
const proxy = new Proxy(User, {
    construct(target, argumentsList, newTarget) {
        if (argumentsList[0] === undefined) {
            throw 'User cannot be instantiated without id';
        } else {
            return Reflect.construct(...arguments);
        }
    }
});
new proxy(1);
new proxy();
// Error: User cannot be instantiated without id
