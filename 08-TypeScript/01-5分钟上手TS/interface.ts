/*
 * @Author: liming
 * @Date: 2021-11-23 17:41:55
 * @LastEditTime: 2021-11-23 17:43:20
 * @FilePath: \05-TS\01-5分钟上手TS\interface.ts
 */
interface Person{
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
