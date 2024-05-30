/**
 * @Author liming
 * @Date 2024/5/23 8:42
 **/
function foo() {
    "use strict";
    console.log( this.a );
}
var a = 2;
foo(); // TypeError: this is undefined