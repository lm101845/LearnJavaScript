/**
 * @Author liming
 * @Date 2024/5/24 10:48
 **/

/**
 * 不管是对象文字语法中的 get a() { .. } ，还是 defineProperty(..) 中的显式定义，二者
 * 都会在对象中创建一个不包含值的属性，对于这个属性的访问会自动调用一个隐藏函数，
 * 它的返回值会被当作属性访问的返回值：
 *
 * 由于我们只定义了 a 的 getter，所以对 a 的值进行设置时 set 操作会忽略赋值操作，不会抛
 * 出错误。而且即便有合法的 setter，由于我们自定义的 getter 只会返回 2，所以 set 操作是
 * 没有意义的。
 * @type {{readonly a: number}}
 */
var myObject = {
// 给 a 定义一个 getter
    get a() {
        return 2;
    }
};
myObject.a = 3;
console.log(myObject.a); // 2  不是3！！！！