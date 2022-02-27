/*
 * @Author: liming
 * @Date: 2021-11-24 17:55:55
 * @LastEditTime: 2021-11-24 18:09:48
 * @FilePath: \02-手册指南\02-接口\09-类类型2.0.ts
 */
interface ClockInterface2 {
  currentTime: Date;
  setTime(d:Date):void
  //你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
}

class Clock2 implements ClockInterface2 {
  currentTime!: Date;
  constructor(h: number, m: number) { }
  setTime(d: Date) {
    this.currentTime = d;
  }
}

//接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。


