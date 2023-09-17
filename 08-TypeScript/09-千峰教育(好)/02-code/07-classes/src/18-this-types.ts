/**
 * @Author liming
 * @Date 2023/9/17 14:47
 **/

export default {}
class Box{
    content:string = ''
    set(value:string){
        this.content = value
        return this
        //这个this是指Box的实例吗
    }
}

class ClearableBox extends Box {
  clear() {
    this.content = ''
  }
}

const a = new ClearableBox()
const b = a.set("hello")
console.log(b)
//b是父类实例还是子类实例呢？？？
//ClearableBox { content: 'hello' }  哈哈，是子类实例


console.log('==================================')

class Box1{
    content:string = ''
    sameAs(other:this){
        return other.content === this.content
    }
}

class DerivedBox extends Box1{
    otherContent:string = '?'
}

const base = new Box1()
const derived = new DerivedBox()
// derived.sameAs(base)   //报错
