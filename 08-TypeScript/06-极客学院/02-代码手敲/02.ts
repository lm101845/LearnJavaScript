/*
 * @Author: liming
 * @Date: 2022-02-18 18:31:19
 * @LastEditTime: 2022-02-18 18:53:08
 * @FilePath: \06-极客学院\02-代码手敲\02.ts
 */

//1.定义函数的几种方式——效果一样的
//用函数定义
function add(x: number, y: number):number { 
    return x + y;
}
//用变量定义函数
let add2: (x: number, y: number) => number;

//2.用接口定义函数
interface Add { 
    (x: number, y: number) : number;
}

//3.混合别名
type Add2 = (x: number, y: number) => number
let add3: Add2 = (a, b) => a + b;

//混合类型接口
interface Lib { 
    (): void, 
    version: string,
    doSomething(): void
}

function getLib() { 
    let lib: Lib = (() => { }) as Lib;
    lib.version = "1.0";
    lib.doSomething = () => { }
    return lib
}

// type Turple = [string,number,string]
// let a:Turple = ['1',2,'3',true]