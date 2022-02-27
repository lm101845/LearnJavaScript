/*
 * @Author: liming
 * @Date: 2021-08-10 15:43:59
 * @LastEditTime: 2021-08-10 15:45:29
 * @FilePath: \04-this有关\02-开课吧-讲得好\03-this实质.js
 */

// JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系。
// 上面的代码将一个对象赋值给变量obj。JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。也就是说，变量obj是一个地址（reference）。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。

// 原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。

// {
//   foo: {
//     [[value]]: 5
//     [[writable]]: true
//     [[enumerable]]: true
//     [[configurable]]: true
//   }
// }