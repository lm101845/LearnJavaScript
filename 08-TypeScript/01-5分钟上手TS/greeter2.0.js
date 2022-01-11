/*
 * @Author: liming
 * @Date: 2021-11-23 17:30:28
 * @LastEditTime: 2021-11-23 17:39:14
 * @FilePath: \05-TS\01-5分钟上手TS\greeter2.0.ts
 */
function greeter2(person) {
    return "Hello, " + person;
}
var user2 = "Jane User";
// let user2 = [0, 1, 2];
document.body.innerHTML = greeter2(user2);
