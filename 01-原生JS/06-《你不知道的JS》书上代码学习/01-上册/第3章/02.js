for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0) // 5 5 5 5 5
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0) // 5 5 5 5 5
}
/***
 * for( let i = 0; i< 5; i++) 这句话的圆括号之间，有一个隐藏的作用域
for( let i = 0; i< 5; i++) { 循环体 } 在每次执行循环体之前，JS 引擎会把 i 
在循环体的上下文中重新声明及初始化一次。
 */