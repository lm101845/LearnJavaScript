/*
 * @Author: liming
 * @Date: 2022-01-11 14:13:13
 * @LastEditTime: 2022-01-11 14:16:43
 * @FilePath: \03-1.2万字TS学习指南\07-函数\02-可选参数及默认参数.ts
 */
//可选参数——注意：可选参数要放到最后一个
/**
 * 在声明函数时，可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。
 * 在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
 * @param name 
 * @param id 
 * @param age 
 * @returns 
 */
(() => { 
    function createUserId(name: string, id: number, age?: number): string {
        return name + id;
    }

    //默认参数
    function createUserId1(
        name: string = "liming",
        id: number,
        age?: number
    ): string {
        return name + id;
    }
})()
