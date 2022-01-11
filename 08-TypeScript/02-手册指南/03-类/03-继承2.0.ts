/*
 * @Author: liming
 * @Date: 2021-11-25 10:48:44
 * @LastEditTime: 2021-11-25 11:12:22
 * @FilePath: \02-手册指南\03-类\03-继承2.0.ts
 */

/**
 * 与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
 * 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
 * 
 * 
 * 这个例子演示了如何在子类里可以重写父类的方法。 Snake类和 Horse类都创建了 move方法，
 * 它们重写了从 Animal继承来的 move方法，使得 move方法根据不同的类而具有不同的功能。
 *  注意，即使 tom被声明为 Animal类型，但因为它的值是 Horse，调用 tom.move(34)时，它会调用 Horse里重写的方法：
 */
class Animal3 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snakes extends Animal3 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal3 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snakes("Sammy the Python");

let tom: Animal3 = new Horse("Tommy the Palomino");

sam.move();
// tom.move(34);
tom.move();
