/*
 * @Author: liming
 * @Date: 2021-11-25 10:25:48
 * @LastEditTime: 2021-11-25 10:31:19
 * @FilePath: \02-手册指南\02-接口\13-混合类型.ts
 */

/**
 * 先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。

一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
 */


/**
 * 在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。
 */
interface Counter {
  (start: number): number
  interval: number
  reset():void
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c1 = getCounter();
c1(10)
c1.reset()
c1.interval = 5.0;
