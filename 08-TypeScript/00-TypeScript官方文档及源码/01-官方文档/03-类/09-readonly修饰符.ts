/*
 * @Author: liming
 * @Date: 2021-11-25 11:50:32
 * @LastEditTime: 2021-11-25 11:55:59
 * @FilePath: \02-手册指南\03-类\09-readonly修饰符.ts
 */

/***
 * 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName
  }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
