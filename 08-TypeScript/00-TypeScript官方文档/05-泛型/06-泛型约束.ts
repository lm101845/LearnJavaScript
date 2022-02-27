/*
 * @Author: liming
 * @Date: 2022-01-30 10:32:56
 * @LastEditTime: 2022-01-30 10:37:33
 * @FilePath: \00-TypeScript官方文档\05-泛型\06-泛型约束.ts
 */

/**
 * 
 * @param arg 
 * @returns 
 * 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在 loggingIdentity例子中，
 * 我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
 */

(() => { 
    // function loggingIdentity<T>(arg: T): T{
    //     //console.log(arg.length);  // Error: 类型“T”上不存在属性“length”。
    //     return arg;
    // }

    interface LengthWise { 
        length: number;
    }
    function loggingIdentity<T extends LengthWise>(arg: T): T{
        console.log(arg.length);
        return arg;
    }

    //现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
    //loggingIdentity(3);       //类型“number”的参数不能赋给类型“LengthWise”的参数

    //我们需要传入符合约束类型的值，必须包含必须的属性：
    loggingIdentity({length: 10, value: 3});
})()

