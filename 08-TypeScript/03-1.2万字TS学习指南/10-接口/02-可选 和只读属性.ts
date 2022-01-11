/*
 * @Author: liming
 * @Date: 2022-01-11 14:39:00
 * @LastEditTime: 2022-01-11 14:46:45
 * @FilePath: \03-1.2万字TS学习指南\10-接口\02-可选 和只读属性.ts
 */
(() => {
    interface Person {
        readonly name: string;
        age?: number;
    }

    /**
     * 只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，
     * 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
     */

    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    //ro[0] = 12; //类型“readonly number[]”中的索引签名仅允许读取
    //ro.push(5); // error!
    //ro.length = 100; // error!
    //a = ro; // error!
})();
