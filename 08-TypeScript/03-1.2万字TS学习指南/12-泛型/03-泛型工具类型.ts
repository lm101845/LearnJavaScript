/*
 * @Author: liming
 * @Date: 2022-01-11 15:26:12
 * @LastEditTime: 2022-01-11 15:37:45
 * @FilePath: \03-1.2万字TS学习指南\12-泛型\03-泛型工具类型.ts
 */

/**
 * 在 TypeScript 中，typeof 操作符可以用来获取一个变量声明或对象的类型。
 */

interface Person {
    name: string;
    age: number;
}

const sem: Person = { name: "semlinker", age: 30 };

type Sem = typeof sem;

function toArray(x: number): Array<number> { 
    return [x]
}

type Func = typeof toArray; // -> (x: number) => number[]
