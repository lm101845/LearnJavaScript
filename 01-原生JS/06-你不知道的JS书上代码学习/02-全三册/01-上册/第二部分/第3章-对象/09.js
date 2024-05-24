/**
 * @Author liming
 * @Date 2024/5/24 10:51
 **/
var myObject = {
    a:2
};
console.log(("a" in myObject)); // true
console.log(("b" in myObject)); // false
console.log(myObject.hasOwnProperty( "a" )); // true
console.log(myObject.hasOwnProperty( "b" )); // false

console.log( 4 in [2, 4, 6] )
//看起来 in 操作符可以检查容器内是否有某个值，但是它实际上检查的是某
// 个属性名是否存在。对于数组来说这个区别非常重要， 4 in [2, 4, 6] 的结
// 果并不是你期待的 True ，因为 [2, 4, 6] 这个数组中包含的属性名是 0、1、
// 2，没有 4。
