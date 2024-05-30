/*
 * @Author: liming
 * @Date: 2021-11-25 14:29:56
 * @LastEditTime: 2021-11-25 14:35:06
 * @FilePath: \02-手册指南\03-类\17-构造函数2.0.ts
 */
(function () {
  class Greeter {
    static standardGreeting = "Hello, there";
    greeting!: string;
    greet() {
      if (this.greeting) {
        return "Hello, " + this.greeting;
      }else {
        return Greeter.standardGreeting;
      }
    }
  }

  let greeter1: Greeter;
  greeter1 = new Greeter();
  console.log(greeter1.greet());

  let greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = "Hey there!";

  let greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());
})()
