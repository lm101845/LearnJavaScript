/**
 * @Author liming
 * @Date 2024/5/20 14:17
 **/
function wait(message) {
    setTimeout( function timer() {
        console.log( message );
    }, 1000 );
}
wait( "Hello, closure!" );