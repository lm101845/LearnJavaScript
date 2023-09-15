/**
 * @Author liming
 * @Date 2023/9/15 11:37
 **/

//https://juejin.cn/post/6994102811218673700?searchId=20230915113528566BB09C3A202EAC8FD3
interface Eg1 {
    name: string,
    readonly age: number,
}
// T1的类型实则是name | age
type T1 = keyof Eg1

//错误用法
// const t1:T1 = {
//     name:'zs',
//     age:18
// }

const t2:T1 = 'name'
const t3:T1 = 'age'



class Eg2 {
    private name: string;
    public readonly age: number;
    protected home: string;
}
// T2实则被约束为 age
// 而name和home不是公有属性，所以不能被keyof获取到
type T2 = keyof Eg2
