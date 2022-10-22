/**
 * @Author liming
 * @Date 2022/10/22 14:56
 **/

export default {}
interface A{
    x:number;
    // y:number;
    // y:string
    foo(bar:number):number  //5
    foo(bar:'a'):number    //2
}

interface A{
    y:number
    foo(bar:string):string   //3
    foo(bar:number[]):number[]   //4
    foo(bar:'b'):number   //1

    //这样就实现了函数重载
}

let a:A = {
    x:1,
    y:1,
    foo(bar:any){
        return bar
    }
}

//命名空间和函数的声明合并(注意：命名空间位置要放在后面)
function Lib(){

}

namespace Lib{
    export let version = '1.1';
}

console.log(Lib.version)


//命名空间和类的声明合并
class C{

}

namespace C{
    export let state = 1;
    //这个就相当于给类添加了一个静态的属性
}

console.log(C.state)


//命名空间和枚举的合并
enum Color{
    Red,
    Yellow,
    Blue
}

namespace Color{
    export function mix(){}
    //相当于给枚举类型增加了一个方法
}

console.log(Color)
