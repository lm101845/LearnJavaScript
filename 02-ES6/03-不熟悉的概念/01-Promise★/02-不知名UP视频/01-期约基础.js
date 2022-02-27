let p = new Promise(()=>{})
// setTimeout也可以写成字符串参数的形式，由于这种形式会造成javascript引擎两次解析，降低性能，故不建议使用
// 如果省略setTimeout的第二个参数，则该参数默认为0
// setTimeout(console.log,0,p)

// 我写的等价写法
setTimeout(() => {
   console.log(p) 
});

// Promise { <pending> }