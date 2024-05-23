/**
 * @Author liming
 * @Date 2024/5/20 14:25
 **/
for (var i=1; i<=5; i++) {
    (function() {
        var j = i;
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })();
}