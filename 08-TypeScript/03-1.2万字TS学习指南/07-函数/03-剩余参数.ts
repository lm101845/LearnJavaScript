/*
 * @Author: liming
 * @Date: 2022-01-11 14:17:11
 * @LastEditTime: 2022-01-11 14:18:13
 * @FilePath: \03-1.2万字TS学习指南\07-函数\03-剩余参数.ts
 */
function push(array, ...items) { 
    items.forEach(function (item) { 
        array.push(item)
    })
}

let a = []
push(a,1,2,3)
