/*
 * @Author: liming
 * @Date: 2021-11-24 13:34:07
 * @LastEditTime: 2021-11-24 13:43:32
 * @FilePath: \02-手册指南\02-接口\01-接口初探.ts
 */

/***
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */
function printLabel(labelledObj: { label: string }): void {
    //参数labelledObj是对象类型，并且其中有一个string类型的label属性
  console.log(labelledObj.label); 
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
