/*
 * @Author: liming
 * @Date: 2021-11-23 16:37:44
 * @LastEditTime: 2021-11-23 18:07:51
 * @FilePath: \05-TS\01-5åéä¸æTS\greeter.ts
 */

(function () {
  function greeter(person) {
    return "Hello, " + person;
  }

  let user = "Jane User";

  document.body.innerHTML = greeter(user);
})();
