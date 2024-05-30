/**
 * @Author liming
 * @Date 2024/5/24 10:15
 **/
var myObject = {
    foo: function() {
        console.log( "foo" );
    }
};
var someFoo = myObject.foo;
someFoo(); // function foo(){..}
myObject.foo(); // function foo(){..}