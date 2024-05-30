/*
 * @Author: liming
 * @Date: 2021-11-25 10:40:12
 * @LastEditTime: 2021-11-25 10:42:39
 * @FilePath: \02-手册指南\03-类\01-使用类的例子.ts
 */
class Greeter {
  greeting!: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'hello' + this.greeting;
  }
}

let greeter = new Greeter("world");

console.log(greeter.greet());

