/**
 * @Author liming
 * @Date 2023/7/18 9:36
 **/

//在可能的情况下，使用类型参数本身，而不是对其进行约束
//好
function firstElement1<T>(arr:T[]){
    return arr[0]
}

//不好
function firstElement2<T extends any[]>(arr:T){
    return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])


//使用更少的类型参数
//好
function filter1<T>(arr:T[],func:(arg:T)=>boolean){
    return arr.filter(func)
}

//不好
function filter2<T,F extends (arg:T)=>boolean>(arr:T[],fn:F){
    return arr.filter(fn)
}

//不好
function greet<S extends string>(s:S){
    console.log('Hello, ' + s)
}
greet('World')

//好
function greet2(s: string) {
    console.log('Hello, ' + s)
}
