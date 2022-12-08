// /**
//  * @Author liming
//  * @Date 2022/12/8 14:09
//  **/
//
// let x = undefined
// let x1:undefined = undefined
//
// let y:null = null
//
// // let z:string = undefined
// //报错：不能将undefined分配给类型string
//
// function doSomething(x:string|null){
//     //方法1：类型缩小的方法判断
//     if(x === null){
//         //做一些事情
//     }else{
//         console.log('hello' + x.toUpperCase())
//     }
// }
//
// //方法2：非空断言运算符
// //?表示允许为undefined，即不传递，!表示你告诉ts这个不会是undefined或null
// //注意：不要过多的使用!，因为它可能会带来一些意外的问题
// function liveDangerously(x?:number | null){
//     console.log(x!.toFixed(2))
// }
