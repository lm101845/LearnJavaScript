/*
 * @Author: liming
 * @Date: 2021-11-25 11:15:09
 * @LastEditTime: 2021-11-25 11:18:38
 * @FilePath: \02-手册指南\03-类\05-理解 private.ts
 */
/**
 * 当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
 */

class Animal5 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new Animal5("Cat").name; // 错误: 'name' 是私有的.
