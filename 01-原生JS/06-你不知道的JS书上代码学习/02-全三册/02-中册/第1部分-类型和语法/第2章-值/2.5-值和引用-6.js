/**
 * @Author liming
 * @Date 2024/5/31 10:29
 **/

function foo(x) {
    x = x + 1;
    console.log(x); // 3
}
var a = 2;
var b = new Number( a ); // Object(a)也一样
foo( b );
console.log( b ); // 是2，不是3

/**
 * 原因是标量基本类型值是不可更改的（字符串和布尔也是如此）。如果一个数字对象的标
 * 量基本类型值是 2 ，那么该值就不能更改，除非创建一个包含新值的数字对象。
 *
 * x = x + 1 中， x 中的标量基本类型值 2 从数字对象中拆封（或者提取）出来后， x 就神不
 * 知鬼不觉地从引用变成了数字对象，它的值为 2 + 1 等于 3 。然而函数外的 b 仍然指向原
 * 来那个值为 2 的数字对象。
 */