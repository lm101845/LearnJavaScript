/**
 * @Author liming
 * @Date 2024/5/29 9:35
 **/
class C {
    constructor() {
// 确保修改的是共享状态而不是在实例上创建一个屏蔽属性！
        C.prototype.count++;
// this.count 可以通过委托实现我们想要的功能
        console.log("Hello: " + this.count);
    }
}

// 直接向 prototype 对象上添加一个共享状态
C.prototype.count = 0;
var c1 = new C();
// Hello: 1
var c2 = new C();
// Hello: 2
console.log(c1.count === 2); // true
console.log(c1.count === c2.count); // true