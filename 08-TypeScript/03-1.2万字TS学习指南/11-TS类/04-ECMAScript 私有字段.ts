/*
 * @Author: liming
 * @Date: 2022-01-11 15:00:55
 * @LastEditTime: 2022-01-11 15:07:23
 * @FilePath: \03-1.2万字TS学习指南\11-TS类\04-ECMAScript 私有字段.ts
 */

/**
 * 与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：

私有字段以 # 字符开头，有时我们称之为私有名称；
每个私有字段名称都唯一地限定于其包含的类；
不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
私有字段不能在包含的类之外访问，甚至不能被检测到。
 */
class Person {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}!`);
    }
}

let semlinker = new Person("Semlinker");

//semlinker.#name;
//属性 "#name" 在类 "Person" 外部不可访问，因为它具有专用标识符
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
