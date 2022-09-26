/**
 * @Author liming
 * @Date 2022/9/26 22:16
 **/

//定义函数的4种方式
function add1(x: number, y: number) {
    return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

//以后就用这种吧，这种感觉用的最多了
interface add4 {
    (x: number, y: number): number
}

//注意：后3种只是函数类型的定义，而并没有真正的实现

//在TS中对函数参数个数有严格要求(多一个少一个都不行)，形参和实参必须一一对应
add1(1, 2);

//注意：可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
    return y ? x + y : x;
}

add5(2)

//为参数提供默认值
//注意：在必选参数前，默认参数是不可以省略的,必须明确的传入undefined来获取它的默认值
function add6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q;
}

console.log(add6(1,undefined,3),'add');

//剩余参数
function add7(x:number,...rest:number[]){
    //这个是剩余参数，它是数组，和arguments对象是有区别的
    //https://www.jianshu.com/p/c3ee2c85f662
    return x + rest.reduce((pre,cur)=>pre + cur)
}

console.log(add7(1,2,3,4,5));

//函数重载
//TS要求我们在一个类型最宽泛的版本中(any)实现这个重载
function add8(...rest:number[]):number;
function add8(...rest:string[]):string;
function add8(...rest:any[]):any{
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur)=>pre + cur)
    }
}

console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))

export default {}


