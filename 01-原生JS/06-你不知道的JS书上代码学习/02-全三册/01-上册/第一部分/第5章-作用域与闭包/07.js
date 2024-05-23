/**
 * @Author liming
 * @Date 2024/5/20 14:25
 **/
for (var i=1; i<=5; i++) {
    (function() {
        setTimeout( function timer() {
            console.log( i );
        }, i*1000 );
    })();
}