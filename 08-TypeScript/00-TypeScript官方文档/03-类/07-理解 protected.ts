/*
 * @Author: liming
 * @Date: 2021-11-25 11:22:16
 * @LastEditTime: 2021-11-25 11:32:18
 * @FilePath: \02-手册指南\03-类\07-理解 protected.ts
 */

/**
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。例如：
 */
(function () {
  class Person {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

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
  console.log(howard.getElevatorPitch());
  //console.log(howard.name); // 错误  属性“name”受保护，只能在类“Person”及其子类中访问
})();
