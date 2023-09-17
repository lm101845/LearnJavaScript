/**
 * @Author liming
 * @Date 2023/9/17 14:26
 **/

export default {}

class MyClass {
  name = 'MyClass'
  // getName(){
  //   return this.name
  // }

  //this解决方法1：但是使用箭头函数会浪费内存，每个实例都有一个箭头函数
  // getName = () => {
  //   return this.name
  // }

  //this解决方法2：
  getName(this: MyClass) {
    //this:MyClass 只是告诉编译器这个函数运行时 this 指向 MyClass 的实例，并不会影响生成的代码
    return this.name
  }
}
const c = new MyClass()


console.log(c.getName())   //MyClass

// const g = c.getName
// console.log(g())

const obj = {
  name: 'obj',
  getName: c.getName
}
console.log(obj.getName())   //obj,this指向的是调用者
