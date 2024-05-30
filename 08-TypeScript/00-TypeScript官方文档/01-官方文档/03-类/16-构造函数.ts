/*
 * @Author: liming
 * @Date: 2021-11-25 14:24:17
 * @LastEditTime: 2021-11-25 14:26:25
 * @FilePath: \02-手册指南\03-类\16-构造函数.ts
 */

/**当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。 */
(function () {
  class Greeter {
    greeting!: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "hello" + this.greeting;
    }
  }

  let greeter: Greeter;

  greeter = new Greeter("world");
  console.log(greeter.greet());
})()
