/*
 * @Author: liming
 * @Date: 2021-11-24 17:55:55
 * @LastEditTime: 2021-11-24 18:02:07
 * @FilePath: \02-手册指南\02-接口\08-类类型.ts
 */
/**
 * 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
 */
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    //类实现了这一接口
        /**
     * 在 TypeScript 2.7 版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 ! 号，
     * 从而告诉 TypeScript 该属性会被明确地赋值。为了更好地理解它的作用
     * 通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。   
     */
    currentTime!: Date;

  constructor(h: number, m: number) { }
}
