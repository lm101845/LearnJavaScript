// object是创建对象属性的最基本⽅式
let obj: object = {
    name: '⼩明',
    age: 18,
    sex: '男'
}

class Ren {
    name?: string
    age?: number
    sex?: string
    //顺序前加一个?表示这个顺序是可选的
    constructor(name?: string, age?: number, sex?: string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
}
// object也适⽤于⾯向对象的类型声明
let r: object = new Ren('⼩花', 20, '⼥')
//这样写不会有代码提示,输入r.它不会提示r一共有多少属性

// 在使⽤明确对象时可以直接使⽤class名称作为类型
let r1: Ren = new Ren('⼩⻩', 21, '男')
//这样写有代码提示，输入r1.它就会提示r1一共有多少属性

let r2: Ren = {
    name: '⼩明',
    age: 18,
    // sex:'女'
}

let r3: Ren = new Ren('⼩⻩', 21, )
//虽然类的三个属性是可选的，但是我在new的时候，如果某个属性不传的话，会报错
// 报错信息：应有 3 个参数，但获得 2 个
//记住：class类约束的是类的自由属性，但我们在new的时候，先执行的是constructor构造函数
//构造函数只要你写了这3个参数了，它就认为你一定得传这3个参数，而且得按类型传
//如果你想new的时候，也能自由传，那么构造函数也可以加?写成可选的,这样r3就不会报错了

let r4 = new Ren()

console.log(obj, r, r1,r2,r3,r4)
export default {}
