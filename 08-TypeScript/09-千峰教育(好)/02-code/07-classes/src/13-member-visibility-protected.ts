/**
 * @Author liming
 * @Date 2023/9/17 13:17
 **/

export default {}
class Greeter {
  public greet() {
    //protected:内的内部可以访问到
    console.log(this.getName())
  }

  protected getName() {
    return 'hello'
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    //protected:内的子类可以访问到
    console.log(this.getName())
  }
}

const g = new SpecialGreeter()
g.greet()
g.howdy()
// g.getName()
//实例无法访问

class Base {
  protected m = 10
}

class Derived extends Base {
  public m = 15
}

const d = new Derived()
console.log(d.m)
