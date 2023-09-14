/**
 * @Author liming
 * @Date 2023/9/14 23:14
 **/
// type Person = {
//     age: number,
//     name: string,
//     alive: boolean
// }
//
// type Age = Person['age']
// let age: Age = 99

interface Person {
    age: number,
    name: string,
    alive: boolean
}

type T1 = Person['age' | 'name']
const t11: T1 = '100'
const i12: T1 = 100

type T2 = Person[keyof Person]

type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
const I31: I3 = true
const I32: I3 = 'hello'
// const I33: I3 = 100

// type I4 = Person['alve']

const MyArray = [
    {name: 'zs', age: 16},
    {sex:true,hobby:['吃饭','睡觉']},
    {name: 'ww', age: 46},
]

type Person2 = typeof MyArray[number]
type Person3 = typeof MyArray[number]['name']
//它获取的是数组某个元素的类型了

const p8:Person2 = {
    name:'zd',
    age:11,
    // aa:55
}

const p9:Person2 = {
    sex:false,
    hobby: ['抽烟','喝酒']
}
