/*
 * @Author: liming
 * @Date: 2021-11-24 18:37:17
 * @LastEditTime: 2021-11-25 10:21:39
 * @FilePath: \02-手册指南\02-接口\11-继承接口.ts
 */

/**
 * 和类一样，接口也可以相互继承。
 *  这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
interface Shape {
  color:string
}

interface Square extends Shape {
  sideLength:number
}

let square = <Square>{};
square.color = 'blue'
square.sideLength = 10;



