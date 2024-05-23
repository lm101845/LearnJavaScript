/**
 * @Author liming
 * @Date 2024/5/23 8:38
 **/
function foo() {
    console.log( this.a );
}

var a = 2;
foo(); // 2