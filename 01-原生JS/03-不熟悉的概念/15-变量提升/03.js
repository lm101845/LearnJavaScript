/* 最后一个栗子 */

console.log(a) //  function a { console.log(10) }
a(); // 10
var a = 3;
function a() {
    console.log(10)
};
console.log(a) // 3
a = 6;
a(); // throw error