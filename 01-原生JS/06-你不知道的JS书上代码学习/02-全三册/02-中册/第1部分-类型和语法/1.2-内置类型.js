/**
 * @Author liming
 * @Date 2024/5/30 9:05
 **/

console.log(typeof undefined === "undefined"); // true
console.log(typeof true === "boolean"); // true
console.log(typeof 42 === "number"); // true
console.log(typeof "42" === "string"); // true
console.log(typeof { life: 42 } === "object"); // true
console.log(typeof Symbol() === "symbol"); // true
console.log(typeof null === "object")  //true 是个bug

var a = null;
console.log(!a && typeof a === "object"); // true
console.log(typeof function a(){ /* .. */ } === "function" )// true

console.log('==================')
function apple(b,c){
    console.log(apple.length)
}

apple(1,2)

console.log('============')

console.log(typeof [1,2,3] === "object"); // true
