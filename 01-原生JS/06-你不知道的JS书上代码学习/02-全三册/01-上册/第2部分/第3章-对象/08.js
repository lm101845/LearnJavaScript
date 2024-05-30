/**
 * @Author liming
 * @Date 2024/5/24 10:49
 **/

/**
 * 为了让属性更合理，还应当定义 setter，和你期望的一样，setter 会覆盖单个属性默认的
 * [[Put]] （也被称为赋值）操作。通常来说 getter 和 setter 是成对出现的（只定义一个的话
 * 通常会产生意料之外的行为）：
 */
var myObject = {
// 给 a 定义一个 getter
    get a() {
        return this._a_;
    },
// 给 a 定义一个 setter
    set a(val) {
        this._a_ = val * 2;
    }
};
myObject.a = 2;
console.log(myObject.a); // 4