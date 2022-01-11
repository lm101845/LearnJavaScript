/*
 * @Author: liming
 * @Date: 2021-11-26 13:47:16
 * @LastEditTime: 2021-11-26 13:49:32
 * @FilePath: \02-手册指南\04-函数\03-推断类型.ts
 */


/**
 * 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
 */


// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。


// myAdd has the full function type
let myAdd4 = function (x: number, y: number): number {
  return x + y;
}

let myAdd5: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
}
