/**
 * @Author liming
 * @Date 2024/5/28 14:45
 **/

var anotherObject = {
    a:2
};
// 创建一个关联到 anotherObject 的对象
var myObject = Object.create( anotherObject );
console.log(myObject.a); // 2

//Object.create它会创建一个
// 对象并把这个对象的 [[Prototype]] 关联到指定的对象

console.log('=============')

for (var k in myObject) {
    console.log("found: " + k);
}
// found: a
console.log(("a" in myObject)); // true