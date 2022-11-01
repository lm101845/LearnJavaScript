"use strict";
/**
 * @Author liming
 * @Date 2022/10/5 21:03
 **/
class Log1 {
    run(value) {
        // static run(value:T){
        //泛型不能应用于类的静态成员
        console.log(value);
        return value;
    }
}
let log1 = new Log1();
log1.run(1);
let log2 = new Log1();
log2.run({ a: '当不指定泛型参数的时候，它就可以是任意值' });
function log(value) {
    //T继承了Length接口，这个表示T受到了一定的约束，就不再是任意类型都可以传了
    //输入的参数不管是什么类型，但是必须具有length属性
    console.log(value, value.length);
    return value;
}
log([1]);
log("123");
log({ length: 3 });
