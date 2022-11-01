/**
 * @Author liming
 * @Date 2022/11/1 14:53
 **/

// class A{
//     a:number = 1;
// }
//
// let {x,y,...z} = {x:1,y:2,a:3,b:4}
// let n = {x,y,...z}

// n = 1;
//让babel只做语言转换，ts只做类型检查
//但是有4种语法在babel无法编译：命名空间，类型断言,常量枚举，默认导出
// 1
// namespace N {
//     export const n = 1
// }

// 2
// let s = <A>{}
// let s = {} as A
// s.a = 1

// 3
// const enum E { A, B }

// 4
// export = s

let hello: string = "Hello TypeScript"
document.querySelectorAll('.app')[0].innerHTML = hello