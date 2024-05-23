/**
 * @Author liming
 * @Date 2024/5/20 14:22
 **/
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}