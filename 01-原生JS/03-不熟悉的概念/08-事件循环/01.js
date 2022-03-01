let a = () => {
    setTimeout(() => {
        console.log('任务队列函数1')
    }, 0)

    for (let i = 0; i < 10; i++) {
        console.log('a的for循环')
    }
    console.log('a事件执行完')
}
let b = () => {
    setTimeout(() => {
        console.log('任务队列函数2')
    }, 0)

    for (let i = 0; i < 10; i++) {
        console.log('b的for循环')
    }
    console.log('b事件执行完')
}
let c = () => {
    setTimeout(() => {
        console.log('任务队列函数3')
    }, 0)
    for (let i = 0; i < 10; i++) {
        console.log('c的for循环')
    }
    console.log('c事件执行完')
}
a();
b();
c();
// 当a、b、c函数都执行完成之后，三个setTimeout才会依次执行
