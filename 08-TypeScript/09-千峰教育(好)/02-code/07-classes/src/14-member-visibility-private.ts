/**
 * @Author liming
 * @Date 2023/9/17 13:20
 **/
export default {}
class Base {
  private x = 0

  //类的内部可以访问
  printX() {
    console.log(this.x)
  }
}

class Derived extends Base {
  showX() {
    //子类里面无法访问父类私有属性x
    // console.log(this.x)
  }
}

const d = new Derived()
// console.log(d.x)
//子类实例也无法访问父类私有属性


class A {
  private x =10

  public sameAs(other: A) {
    return other.x === this.x
  }
}
