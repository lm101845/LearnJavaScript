/*
 * @Author: liming
 * @Date: 2022-01-11 15:23:06
 * @LastEditTime: 2022-01-11 15:25:14
 * @FilePath: \03-1.2万字TS学习指南\12-泛型\02-泛型对象.ts
 */

/**
 * 对刚接触 TypeScript 泛型的小伙伴来说，看到 T 和 E，还有 K 和 V 这些泛型变量时，估计会一脸懵逼。其实这些大写字母并没有什么本质的区别，只不过是一个约定好的规范而已。也就是说使用大写字母 A-Z 定义的类型变量都属于泛型，把 T 换成 A，也是一样的。下面我们介绍一下一些常见泛型变量代表的意思：

T（Type）：表示一个 TypeScript 类型
K（Key）：表示对象中的键类型
V（Value）：表示对象中的值类型
E（Element）：表示元素类型
 */
class GenericNumber<T>{
    zeroValue: T;
    add:(x:T,y:T)=>T
}

let myGenericNumber = new GenericNumber<number>()

myGenericNumber.zeroValue = 0;

myGenericNumber.add = function (x, y) { 
    return x + y;
}
