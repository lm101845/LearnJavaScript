/*
 * @Author: liming
 * @Date: 2021-11-25 11:12:55
 * @LastEditTime: 2021-11-25 11:14:07
 * @FilePath: \02-手册指南\03-类\04-公共，私有与受保护的修饰符.ts
 */

class Animal4 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
