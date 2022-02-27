/*
 * @Author: liming
 * @Date: 2022-02-22 18:11:05
 * @LastEditTime: 2022-02-22 18:11:09
 * @FilePath: \02-代码手敲\03.ts
 */
function add9(x: number, y = 3, z: number, q = 4){ 
    return x + y + z + q;
}

console.log(add9(1, 2, 3, 4));
console.log(add9(1, undefined, 4));
