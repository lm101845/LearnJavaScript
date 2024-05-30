/*
 * @Author: liming
 * @Date: 2021-11-26 13:58:36
 * @LastEditTime: 2021-11-26 14:39:29
 * @FilePath: \02-手册指南\04-函数\05-剩余参数.ts
 */

/**
 * 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。

在TypeScript里，你可以把所有参数收集到一个变量里：
 */

function buildName6(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun:(fname:string,...rest:string[]) =>string = buildName6
