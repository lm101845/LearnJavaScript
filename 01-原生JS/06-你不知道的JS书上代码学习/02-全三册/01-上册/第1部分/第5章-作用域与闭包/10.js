/**
 * @Author liming
 * @Date 2024/5/20 14:32
 **/
function CoolModule(id) {
    function identify() {
        console.log( id );
    }
    return {
        identify: identify
    };
}
var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );
foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"

