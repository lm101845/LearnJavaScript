let obj = {
    name: '⼩明',
    age: 18,
    sex: '男'
}
// 当使⽤函数获取该动态类型变量时，getObj的返回结果并不能描述其内部属性
function getObj(): object {
    return obj
}
let obj1 = getObj()
console.log('obj1',obj1)
console.log('====================');


interface User {
    name: string,
    age: number,
    sex: string
}
function getObjType(): User {
    return obj
}
// 此时返回的数据会带有该数据的类型描述
let obj2 = getObjType()
console.log('obj2', obj2)
console.log('========================');


interface User2{
    username: string,
    password: string,
    [props: string]: any
    //这个表示这个接口结构明确要求有username和password2个属性，
    //但是未来你可以有其他属性，其他属性我就不做约定和限制了
}
let user3: User2 = {
    username: '小明',
    password: '123456',
    nickname:'一代狠人王土根'
}
console.log('user3', user3)
console.log('============================');



// 只读属性定义
interface Point {
    readonly x: number,
    readonly y: number
}
let point: Point = { x: 10, y: 10 }
// 初始化后，x和y是啥就是啥了，此时point的x和y不可以更改
// point.x = 5
// 限制类型后的数据不可以使⽤规定类型外的属性
// let point1:Point = {x:10,y:10,z:11}

interface Config {
    entry: Array<any>,
    output: string,
    // 该属性可以动态定义⾮必要内容外的属性类型，使⽤后可以对原有对象扩展属性
    [str: string]: any
}
let config: Config = { entry: [1, 2], output: './', name: 'abc' }
console.log('config',config)
console.log('==============================');

// 定义函数类型
interface SelectFunc {
    (pno: number, psize: number): Array<User>
}
// 定义类型后该函数可以不需要描述返回值和参数类型
let func: SelectFunc = function (pno, psize) {
    return [{ name: '⼩花', age: 18, sex: '⼥' }, { name: '⼩⽩', age: 18, sex: '男' }]
}
let res = func(1, 10)
console.log('res',res)
