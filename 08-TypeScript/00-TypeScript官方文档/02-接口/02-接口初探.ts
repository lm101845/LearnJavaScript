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
/**
 * LabelledValue接口就好比一个名字，用来描述上面例子里的要求。
 *  它代表了有一个label属性且类型为string的对象。
 *  需要注意的是，我们在这里并不能像在其它语言里一样，说传给printLabel的对象实现了这个接口。
 * 我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
 */
// 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
