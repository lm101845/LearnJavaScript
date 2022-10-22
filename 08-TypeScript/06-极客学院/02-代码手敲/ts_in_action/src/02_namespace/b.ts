/**
 * @Author liming
 * @Date 2022/10/22 14:37
 **/
///<reference path="a.ts"/>
namespace Shape {
    export function square(x: number) {
        return x * x;
    }
}

console.log(Shape.circle(1))
console.log(Shape.square(1));
//注意：命名空间和模块不要混用
//不要在一个模块中使用命名空间
//命名空间最好在一个全局环境中使用

import circle = Shape.circle
//注意：这里的import和模块中的import没有任何关系
console.log(circle(2))