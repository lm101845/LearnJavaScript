/*
 * @Author: liming
 * @Date: 2021-11-24 13:34:07
 * @LastEditTime: 2021-11-24 13:44:13
 * @FilePath: \02-手册指南\02-接口\02-接口初探.ts
 */
interface LabelledValue {
  label: string;
}

function printLabel2(labelObj: LabelledValue):void {
  console.log(labelObj.label);
  
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
// 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
