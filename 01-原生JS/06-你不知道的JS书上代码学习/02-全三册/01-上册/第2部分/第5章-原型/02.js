/**
 * @Author liming
 * @Date 2024/5/28 14:58
 **/
var anotherObject = {
    a:2
};
var myObject = Object.create( anotherObject );
anotherObject.a; // 2
console.log(myObject.a); // 2
anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // 隐式屏蔽！
anotherObject.a; // 2
console.log(myObject.a); // 3
myObject.hasOwnProperty( "a" ); // true