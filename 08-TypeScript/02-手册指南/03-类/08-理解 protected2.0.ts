/*
 * @Author: liming
 * @Date: 2021-11-25 11:22:16
 * @LastEditTime: 2021-11-25 11:34:13
 * @FilePath: \02-手册指南\03-类\08-理解 protected2.0.ts
 */

/**
 * 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，
 * 因为 Employee是由 Person派生而来的。

构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，
 */
(function () {
  class Person {
    protected name: string;
    protected constructor(theName: string) {
      this.name = theName;
    }
  }

  // Employee 能够继承 Person
  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  //let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
})();
