/**
 * @Author liming
 * @Date 2023/9/1 14:45
 **/

//https://juejin.cn/post/6844904182843965453#heading-10

//就像所有类型都可以赋值给 any，所有类型也都可以赋值给 unknown。
// 这使得 unknown 成为 TypeScript 类型系统的另一种顶级类型（另一种是 any）。
// let value: unknown;
//
// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

//unknown 类型只能被赋值给 any 类型和 unknown 类型本身。直观地说，这是有道理的：
// 只有能够保存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的值。
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error
