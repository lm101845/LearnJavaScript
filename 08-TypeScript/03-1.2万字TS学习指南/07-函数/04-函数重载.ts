/*
 * @Author: liming
 * @Date: 2022-01-11 14:22:42
 * @LastEditTime: 2022-01-11 14:23:55
 * @FilePath: \03-1.2万字TS学习指南\07-函数\04-函数重载.ts
 */

/**
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
 * 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。
 */

// let Combinable:number | string;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: any, b: any) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
