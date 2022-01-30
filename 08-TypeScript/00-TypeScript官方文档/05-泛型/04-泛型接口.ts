/*
 * @Author: liming
 * @Date: 2022-01-17 09:14:54
 * @LastEditTime: 2022-01-30 09:59:09
 * @FilePath: \00-TypeScript官方文档\05-泛型\04-泛型接口.ts
 */
(() => { 
    interface GenericIdentityFn { 
        <T>(arg: T): T;
    }

    function identity<T>(arg: T): T{
        return arg;
    }

    let myIdentity: GenericIdentityFn = identity;

    interface GenericIdentityFn1<T> { 
        (arg:T): T;
    }

    function identity1<T>(arg: T): T{
        return arg;
    }

    let myIdentity1: GenericIdentityFn1<number> = identity1;

    /**
     * 注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。
     * 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），
     * 锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，
     * 理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。
     */
})()
