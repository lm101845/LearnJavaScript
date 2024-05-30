/**
 * @Author liming
 * @Date 2024/5/29 8:39
 **/
Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};
Bar = Object.create( Foo );
Bar.speak = function() {
    console.log( "Hello, " + this.identify() + "." );
};
var b1 = Object.create( Bar );
// var b1 = Object.create( Object.create( Foo ) );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );
b1.speak();
b2.speak();