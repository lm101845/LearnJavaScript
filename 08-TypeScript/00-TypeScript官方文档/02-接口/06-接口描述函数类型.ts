/*
 * @Author: liming
 * @Date: 2021-11-24 17:24:53
 * @LastEditTime: 2021-11-24 17:31:43
 * @FilePath: \02-手册指南\02-接口\06-函数类型.ts
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
    //约束这个函数的参数类型和返回值类型
}

// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。

/**
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
 *  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
 */

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}

/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：
 */

let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch('你好','不'));

