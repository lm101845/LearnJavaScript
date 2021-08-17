// 与 Promise.resolve() 类似， Promise.reject() 会实例化一个拒绝的期约并抛出一个异步错误
// （这个错误不能通过 try / catch 捕获，而只能通过拒绝处理程序捕获）。下面的两个期约实例实际上是
// 一样的：

let p1 = new Promise((resolve,reject)=>{
    reject()
})

let p2 = Promise.reject()

// 这个拒绝的期约的理由就是传给 Promise.reject() 的第一个参数。这个参数也会传给后续的拒
// 绝处理程序：
let p = Promise.reject(3)
setTimeout(() => {
//  console.log(p);   
//  Promise { <rejected> 3 }
});

// p.then(null,(e)=>setTimeout(console.log,0,e))
// 3

setTimeout(console.log, 0, Promise.reject(Promise.resolve()));