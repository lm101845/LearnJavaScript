/*
 * @Author: liming
 * @Date: 2021-11-25 13:28:26
 * @LastEditTime: 2021-11-25 13:29:29
 * @FilePath: \02-手册指南\03-类\11-存取器.ts
 */

/**
 * TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。
 */

class Employee {
  fullName: string | undefined;
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}
