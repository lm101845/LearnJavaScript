/**
 * @Author liming
 * @Date 2024/5/1 10:34
 **/

var a = 2;
(function foo() {
    var a = 3;
    console.log( a ); // 3
})();
console.log( a ); // 2