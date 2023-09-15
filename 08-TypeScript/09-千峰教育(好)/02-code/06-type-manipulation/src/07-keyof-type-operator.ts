/**
 * @Author liming
 * @Date 2023/9/14 22:28
 **/
// type Person = {
//     name: string,
//     age: number
// }
//
// type P = keyof Person
//
// const p1:P = 'name'
// const p2:P = 'age'
// // const p3:P = 'sex'



// type Arrayish = {
//     [n:number]:unknown
// }
//
// type A = keyof Arrayish
//
// const a:A = 0
// const b:A = '123'


type Mapish = {
    [k:string]:boolean
}

type M = keyof Mapish

const m1:M = 'S'
const m2:M = 100   //也可以是数字！！

