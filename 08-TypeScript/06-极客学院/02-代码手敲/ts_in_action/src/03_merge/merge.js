"use strict";
/**
 * @Author liming
 * @Date 2022/10/22 14:56
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let a = {
    x: 1,
    y: 1,
    foo(bar) {
        return bar;
    }
};
//命名空间和函数的声明合并(注意：命名空间位置要放在后面)
function Lib() {
}
(function (Lib) {
    Lib.version = '1.1';
})(Lib || (Lib = {}));
console.log(Lib.version);
//命名空间和类的声明合并
class C {
}
(function (C) {
    C.state = 1;
    //这个就相当于给类添加了一个静态的属性
})(C || (C = {}));
console.log(C.state);
//命名空间和枚举的合并
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function mix() { }
    Color.mix = mix;
    //相当于给枚举类型增加了一个方法
})(Color || (Color = {}));
console.log(Color);
