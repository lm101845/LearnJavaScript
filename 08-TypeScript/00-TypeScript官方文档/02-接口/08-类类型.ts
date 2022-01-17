/*
 * @Author: liming
 * @Date: 2021-11-24 17:55:55
 * @LastEditTime: 2021-11-24 18:02:07
 * @FilePath: \02-手册指南\02-接口\08-类类型.ts
 */
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime!: Date;
  constructor(h: number, m: number) { }
}
