/*
 * @Author: liming
 * @Date: 2022-01-30 10:38:09
 * @LastEditTime: 2022-01-30 10:50:02
 * @FilePath: \00-TypeScript官方文档\05-泛型\07-在泛型约束中使用类型参数.ts
 */

(() => { 
    // 你可以声明一个类型参数，且它被另一个类型参数所约束。
    // 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，
    // 因此我们需要在这两个类型之间使用约束。
    //TODO:这样写报错啊
    // function getProperty(obj: T, key: K) {
    //     return obj[key]
    // }

    // let x = { a: 1, b: 2, c: 3, d: 4 };
    // getProperty(x, "a");
    //getProperty(x, "m"); 
    // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
})()
