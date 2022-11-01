"use strict";
/**
 * @Author liming
 * @Date 2022/9/26 21:37
 **/
function render(result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        //value.id++;
        //只读属性不允许修改
    });
}
let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
    ]
};
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B', age: 10}
//         //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
//         //但如果传入对象字面量的话，就不行
//     ]
// })
//解决方式1：把对象字面量赋值给变量
render(result);
//解决方式2：使用类型断言
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
        //但如果传入对象字面量的话，就不行
    ]
});
let chars = ['A', 'B'];
//使用接口定义函数
//之前写法
let add;
//这里是具体函数
let add3 = (a, b) => a + b;
//把lib放在一个函数里面，这样就可以创建多个实例了，它也就不是单例模式了
function getLib() {
    let lib = (() => { });
    lib.version = '1.0';
    lib.doSomething = () => { };
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
