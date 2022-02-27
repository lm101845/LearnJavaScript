/*
 * @Author: liming
 * @Date: 2021-11-23 17:30:28
 * @LastEditTime: 2021-11-23 18:07:31
 * @FilePath: \05-TS\01-5分钟上手TS\greeter2.0.ts
 */

(function () {
  function greeter2(person: string) {
    return "Hello, " + person;
  }

  let user2 = "Jane User";

  // let user2 = [0, 1, 2];

  document.body.innerHTML = greeter2(user2);
})();
