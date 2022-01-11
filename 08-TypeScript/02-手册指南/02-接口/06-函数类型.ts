/*
 * @Author: liming
 * @Date: 2021-11-24 17:24:53
 * @LastEditTime: 2021-11-24 17:31:43
 * @FilePath: \02-手册指南\02-接口\06-函数类型.ts
 */
interface SearchFunc {
  (source:string,subString:string):boolean;
}

// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}

/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：
 */
