/*
 * @Author: liming
 * @Date: 2021-11-24 13:34:07
 * @LastEditTime: 2021-11-24 13:43:32
 * @FilePath: \02-手册指南\02-接口\01-接口初探.ts
 */
function printLabel(labelledObj:{label:string}):void {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
