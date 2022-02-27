/*
 * @Author: liming
 * @Date: 2022-01-11 10:44:53
 * @LastEditTime: 2022-01-11 11:13:31
 * @FilePath: \03-1.2万字TS学习指南\05-联合类型和类型别名\01-联合类型.ts
 */

const sayHello = (name: string | undefined) => {
    /**
     * 例如，这里 name 的类型是 string | undefined 
     * 意味着可以将 string 或 undefined 的值传递给sayHello 函数。
     */
}

sayHello("Semlinker");
sayHello(undefined);
