/**
 * @Author liming
 * @Date 2023/9/16 12:07
 **/
export default {}
class Greeter{
    readonly name:string = 'world'
    constructor() {
        //readonly这个属性在constructor里面是可以被二次赋值的
        this.name = 'hello'
    }
    //类里面的函数
    err(){
        // this.name = '类里面的函数也不能修改只读属性'
    }
}

let p = new Greeter()
console.log(p.name)
// p.name = '修改值报错'


console.log('==================')

class Greeter2{
    readonly name:string = 'world'
    constructor(otherName:string) {
        this.name = otherName
    }
}

const g = new Greeter2("heihei")
//在构造函数里面可以添加参数，修改只读属性
console.log(g.name)

console.log('==================')

class Greeter3{
    readonly name:string = 'world'
    constructor(otherName?:string) {
        if(otherName !== undefined){
            this.name = otherName
        }
    }
}

const l1 = new Greeter3("呼呼呼")
const l2 = new Greeter3()
//在构造函数里面可以添加参数，修改只读属性
console.log(l1.name)
console.log(l2.name)   //world

