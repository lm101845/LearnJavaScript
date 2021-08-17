// 期约并非一开始就必须处于待定状态，然后通过执行器函数才能转换为落定状态。通过调用
// Promise.resolve() 静态方法，可以实例化一个解决的期约。下面两个期约实例实际上是一样的：
let p1 = new Promise((resolve, reject) => resolve())
let p2 = Promise.resolve()
console.log(p1 === p2)
// false
console.log(p1.value === p2.value)
// true

setTimeout(() => {
    console.log(Promise.resolve());   
});
// Promise <resolved>: undefined
setTimeout(() => {
    console.log(Promise.resolve(3));   
});
// Promise <resolved>: 3
// 多余的参数会忽略
setTimeout(() => {
    console.log(Promise.resolve(4,5,6));   
    //TODO:这里有个bug，但是空间太小了，我的算法写不下。
    // 以后要学着使用这个TODO插件
});
// Promise <resolved>: 4

// 幂等方法
let p3 = Promise.resolve(7)
setTimeout(console.log, 0, p3 === Promise.resolve(p3));
// true
// setTimeout(() => {
//     console.log(p3) === Promise.resolve(p3);   
// });

setTimeout(console.log, 0, p3 === Promise.resolve(Promise.resolve(p3)));

let p4 = Promise.resolve(()=>{})
setTimeout(console.log, 0, p4); // Promise <pending>
// setTimeout(() => {
//     console.log(p4);   
// });
