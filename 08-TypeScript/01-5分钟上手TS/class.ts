/*
 * @Author: liming
 * @Date: 2021-11-23 17:45:42
 * @LastEditTime: 2021-11-24 10:54:52
 * @FilePath: \01-5分钟上手TS\class.ts
 */

(function () {
  class Student {
    fullName: string;
    // 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = new Student("Jane", "M.", "User");

  // console.log(document);
  
  document.body.innerHTML = greeter(user);
})();
