let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1); 
// 书上显示结果是Promise <resolved>
// 但是我实际显示的是Promise { undefined }！！！

setTimeout(() => {
    console.log(p1);   
    // 实际显示的是Promise { undefined }！！！
});

let p2 = new Promise((resolve,reject)=>reject())
setTimeout(() => {
 console.log(p2);  
//  Promise { <rejected> undefined } 
});


// 通过下面的例子可以看出上面代码的执行顺序
new Promise(()=>{
    setTimeout(() => {
        console.log('executor');   
    });
})

setTimeout(() => {
 console.log( 'promise initialized');   
});


// executor
// promise initialized

// 添加 setTimeout 可以推迟切换状态：
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve
    }, 1000);
})

// 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
setTimeout(() => {
    console.log(p3);   
    // Promise { <pending> }
});

// 无论 resolve() 和 reject() 中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默
// 失败，如下所示：

let p4 = new Promise((resolve,reject)=>{
    resolve()
    // Promise { <pending> }

    reject()    
    //这个就没有效果了
    // Promise { undefined }
})

setTimeout(() => {
 console.log(p4);   
//  
});

// 为避免期约卡在待定状态，可以添加一个定时退出功能。比如，
// 可以通过 setTimeout 设置一个10 秒钟后无论如何都会拒绝期约的回调：
let p5 = new Promise((resolve,reject)=>{
    setTimeout(reject, 5000);
})

setTimeout(() => {
 console.log(p5);   
});

setTimeout(() => {
    console.log(p5);   
},8000);