/*
 * @Author: liming
 * @Date: 2021-05-25 19:09:11
 * @LastEditTime: 2021-05-25 19:17:16
 * @FilePath: \8.1.4-合并对象\01-简单复制.js
 */

let dest, src, result;
/**
 * 简单复制
 */
dest = {};
src = {
    id: 'src'
};

result = Object.assign(dest, src)
// dest由原来的空对象变成一个有id属性的对象
// 并且返回值赋值给了result

// Object.assign 修改目标对象
// 也会返回修改后的目标对象
console.log(dest === result); // true
console.log(dest !== src); // true  
console.log(result); // { id: src }
console.log(dest); // { id: src }

/**
 * 多个源对象
 */
dest = {};
result = Object.assign(dest, {
    a: 'foo'
}, {
    b: 'bar'
});
console.log(result); // { a: foo, b: bar }

