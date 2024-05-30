/*
 * @Author: liming
 * @Date: 2021-11-25 14:45:24
 * @LastEditTime: 2021-11-25 14:52:51
 * @FilePath: \02-手册指南\03-类\18-把类当做接口使用.ts
 */

/**
 * 如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
 */

class Point {
  // @ts-ignore
  x: number;
  // @ts-ignore
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
