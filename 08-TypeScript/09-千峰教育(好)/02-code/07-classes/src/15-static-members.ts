/**
 * @Author liming
 * @Date 2023/9/17 14:10
 **/

export default {}

class MyClass {
  private static x = 880
  static y = 2110

  static printX() {
    //x经过static之后，就只能在类的内部访问了
    console.log(MyClass.x)
  }
}

// console.log(MyClass.x)
console.log(MyClass.y)
MyClass.printX()

class Base {
  static getGreeting() {
    return 'hello world'
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting()
}


class S {
  // static name = "s"
  //特殊的静态名称，如name，不要使用！！！
}

//TS里面是没有静态类的概念的

class MyStaticClass {
  static doSomething() {}
}

function doSomething() {

}

const MyHelperObject = {
  doSomething() {}
}
