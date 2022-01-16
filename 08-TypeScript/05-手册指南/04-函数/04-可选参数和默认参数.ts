/*
 * @Author: liming
 * @Date: 2021-11-26 13:51:03
 * @LastEditTime: 2021-11-26 13:57:07
 * @FilePath: \02-手册指南\04-函数\04-可选参数和默认参数.ts
 */

/**
 * TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
 */

function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

//let result = buildName("Bob")
//报错：应有 2 个参数，但获得 1 个。

//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result0 = buildName("Bob", "Adams"); // ah, just right

// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：

function buildName2(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName2("Bob"); // works correctly now
//let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName2("Bob", "Adams"); // ah, just right


/**
 * 可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。

在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"。
 */

function buildName3(firstName: string, lastName: string = "Smith") {
  return firstName + " " + lastName;
}

let result11 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result12 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
//let result13 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result14 = buildName3("Bob", "Adams");         // ah, just right

console.log(result11);
console.log(result12);
console.log(result14);

