/*
 * @Author: liming
 * @Date: 2021-11-25 10:46:21
 * @LastEditTime: 2021-11-25 10:47:31
 * @FilePath: \02-手册指南\03-类\02-继承.ts
 */

/**
 * 这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里， Dog是一个 派生类，它派生自 Animal 基类，
 * 通过 extends关键字。 派生类通常被称作 子类，基类通常被称作 超类。

因为 Dog继承了 Animal的功能，因此我们可以创建一个 Dog的实例，它能够 bark()和 move()。
 */
class Animal2 {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
    
  }
}

class Dog2 extends Animal2 {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog2();
dog.bark();
dog.move(10);
dog.bark();
