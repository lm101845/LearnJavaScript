/*
 * @Author: liming
 * @Date: 2021-11-25 10:22:05
 * @LastEditTime: 2021-11-25 10:25:26
 * @FilePath: \02-手册指南\02-接口\12-合成接口.ts
 */

/**
 * 一个接口可以继承多个接口，创建出多个接口的合成接口。
 */
interface Shape {
  color:string
}

interface PenStroke {
  penWidth:number
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
