/*
 * @Author: liming
 * @Date: 2021-11-25 11:56:37
 * @LastEditTime: 2021-11-25 11:58:41
 * @FilePath: \02-手册指南\03-类\10-参数属性.ts
 */

/**
 * 在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，
 * 并且立刻将 theName的值赋给 name，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。
 * 下面的例子是对之前 Octopus类的修改版，使用了参数属性：
 */


/**
 * 注意看我们是如何舍弃了 theName，仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
 */
(function () {
  class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
      
    }
  }
})()
