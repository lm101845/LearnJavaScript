/*
 * @Author: liming
 * @Date: 2021-11-25 11:20:30
 * @LastEditTime: 2021-11-25 11:21:36
 * @FilePath: \02-手册指南\03-类\06-比较不同类型.ts
 */

/**
 * TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，
 * 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 
如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员，
并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
 */

(function () {
  class Animal {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }

  class Rhino extends Animal {
    constructor() {
      super("Rhino");
    }
  }

  class Employee {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }

  let animal = new Animal("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");

  animal = rhino;
  //animal = employee; // 错误: Animal 与 Employee 不兼容.
})();
