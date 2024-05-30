/**
 * @Author liming
 * @Date 2024/5/24 10:33
 **/

var myObject = {
    a:2
};
let a = Object.getOwnPropertyDescriptor( myObject, "a" );

console.log(a)

//从 ES5 开始，所有的属性都具备了属性描述符。属性描述符是一个记录，内部包含了这个属性的特性（它是一个数据属性还是一个访问器属性）。