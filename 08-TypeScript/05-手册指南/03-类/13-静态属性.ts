/*
 * @Author: liming
 * @Date: 2021-11-25 13:41:28
 * @LastEditTime: 2021-11-25 14:02:50
 * @FilePath: \02-手册指南\03-类\13-静态属性.ts
 */

/**
 * 到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。
 *  我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，
 * 我们使用 static定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，
 * 都要在 origin前面加上类名。 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
 */
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist)/this.scale
  }
  constructor(public scale: number) { }
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
