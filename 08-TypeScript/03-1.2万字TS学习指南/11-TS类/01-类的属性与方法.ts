/*
 * @Author: liming
 * @Date: 2022-01-11 14:49:29
 * @LastEditTime: 2022-01-11 14:51:38
 * @FilePath: \03-1.2万字TS学习指南\11-TS类\01-类的属性与方法.ts
 */

class Greeter {
    //静态属性
    static cname: string = "Greeter";
    //成员属性
    greeting: string;
    // 构造函数 - 执行初始化操作
    constructor(message: string) {
        this.greeting = message;
    }
    // 静态方法
    static getClasName() {
        return "Class name is Greeter";
    }
    // 成员方法
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
