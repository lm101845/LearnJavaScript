/**
 * @Author liming
 * @Date 2023/9/16 14:15
 **/
export default {}
class MsgError extends Error {
  constructor(m: string) {
    super(m)
    // 明确的设置原型
    Object.setPrototypeOf(this, MsgError.prototype)
    //由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [[Prototype]]
    // 在各个浏览器和 JavaScript 引擎上都是一个很慢的操作
  }

  sayHello() {
    return 'hello ' + this.message
    //基类里面有message
  }
}

const msgError = new MsgError('hello')
console.log(msgError.sayHello())

console.log("=================")

class MsgError2 extends Error {
  constructor(m: string) {
    super(m)

    // 明确的设置原型
    Object.setPrototypeOf(this, MsgError.prototype)
  }
  sayHello() {
    return 'hello ' + this.message
  }
}

const msgError2 = new MsgError2('hello')

console.log(msgError2 instanceof MsgError)
