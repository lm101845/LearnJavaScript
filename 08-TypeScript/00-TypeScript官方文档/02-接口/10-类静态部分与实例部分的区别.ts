/*
 * @Author: liming
 * @Date: 2021-11-24 18:14:09
 * @LastEditTime: 2021-11-24 18:37:50
 * @FilePath: \02-手册指南\02-接口\10-类静态部分与实例部分的区别.ts
 */

/**
 * 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。
 * 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
 *
 * 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。
 * constructor存在于类的静态部分，所以不在检查的范围内。
 *
 *
 * 因此，我们应该直接操作类的静态部分。 看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface5为实例方法所用。
 *  为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
 */

// interface ClockConstructor {
//   new(hour: number, minute: number);
// }

// class Clock3 implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface5;
}
interface ClockInterface5 {
  tick():any;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface5 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface5 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface5 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
