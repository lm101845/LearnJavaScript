/**
 * @Author liming
 * @Date 2022/10/21 15:24
 **/
export default {}

let obj = {
    a: 1,
    b: 2,
    c: 3
}

function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

console.log(getValues(obj,['a','b']))
console.log(getValues(obj,['e','f']))

//索引类型的查询操作符  keyof T
interface Obj{
    a:number,
    b:string
}

let key:keyof Obj

//索引访问操作符 T[K]

let value:Obj['a']

//泛型约束 T extends U

//改造getValues函数(使得keys里面的元素一定是Obj里面的属性)
function getValues1<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
    //让K继承Obj所有属性的联合类型
    return keys.map(key => obj[key])
}

console.log(getValues1(obj,['a','b']))
// console.log(getValues1(obj,['e','f']))
//此时TS的类型检查就发挥作用了
//索引类型可以实现对对象属性的查询和访问




