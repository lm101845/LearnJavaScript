/**
 * @Author liming
 * @Date 2024/5/24 10:46
 **/
var myObject = {
// 给 a 定义一个 getter
    get a() {
        return 2;
    }
};
Object.defineProperty(
    myObject, // 目标对象
    "b", // 属性名
    { // 描述符
// 给 b 设置一个 getter
        get: function () {
            return this.a * 2
        },
// 确保 b 会出现在对象的属性列表中
        enumerable: true
    }
);
console.log(myObject.a); // 2
console.log(myObject.b); // 4