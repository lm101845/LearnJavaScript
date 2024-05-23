/**
 * @Author liming
 * @Date 2024/5/20 14:35
 **/
var foo = (function CoolModule(id) {
    function change() {
// 修改公共 API
        publicAPI.identify = identify2;
    }
    function identify1() {
        console.log( id );
    }
    function identify2() {
        console.log( id.toUpperCase() );
    }
    var publicAPI = {
        change: change,
        identify: identify1
    };
    return publicAPI;
})( "foo module" );
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE