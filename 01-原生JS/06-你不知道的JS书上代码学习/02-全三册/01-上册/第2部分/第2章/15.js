/**
 * @Author liming
 * @Date 2024/5/23 9:37
 **/
// call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数
//例如：
function f(){
    console.log("看我怎么被调用");
    console.log(this) //指向this
}
var obj = {};
f.call(obj) //直接调用函数
var g = f.bind(obj); //bind()不能调用函数
g();  //此时才调用函数