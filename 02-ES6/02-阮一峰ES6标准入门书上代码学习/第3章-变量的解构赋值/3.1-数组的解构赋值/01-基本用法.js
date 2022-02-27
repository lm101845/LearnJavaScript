/*
 * @Author: liming
 * @Date: 2021-07-13 21:52:09
 * @LastEditTime: 2021-07-13 21:56:56
 * @FilePath: \02-阮一峰ES6标准入门书上代码学习\第3章-变量的解构赋值\3.1-数组的解构赋值\01-基本用法.js
 */
let [a, b, c] = [1, 2, 3]
console.log(a);
console.log(b);
console.log(c);

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third);
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
console.log(tail);
tail // [2, 3, 4]

let [m, n, ...z] = ['a'];
console.log(m);
console.log(n);
console.log(z);
m // "a"
n // undefined
z // []