/*
 * @Author: liming
 * @Date: 2021-11-25 13:28:26
 * @LastEditTime: 2021-11-25 13:40:02
 * @FilePath: \02-手册指南\03-类\12-存取器2.0.ts
 */

/**
 * TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。

我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。

对于存取器有下面几点需要注意的：

首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，
因为利用这个属性的用户会看到不允许够改变它的值。
 */

(function () {
  // let passcode = "secret passcode1";
  let passcode = "secret passcode";
  
  class Employee {
    private _fullName!: string;

    get fullName(): string {
      return this._fullName
    }

    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      } else {
        console.log("Error: Unauthorized update of employee!");
        
      }
    }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";

  if (employee.fullName) {
    console.log(employee.fullName);
  }
})()
