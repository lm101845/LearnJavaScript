/**
 * @Author liming
 * @Date 2024/5/21 8:37
 **/
function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
console.log(identify.call( me )); // KYLE
console.log(identify.call( you )); // READER
speak.call( me ); // Hello, 我是 KYLE
speak.call( you ); // Hello, 我是 READER