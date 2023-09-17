/**
 * @Author liming
 * @Date 2023/9/17 15:09
 **/

class Params {
    //原始写法：这样定义很麻烦
    // x:number
    // constructor(x:number) {
    //     this.x = x
    // }

    //升级写法
    //这里就算是public，也不能省略
    constructor(public x: number, protected y: string, private z: boolean) {

    }

}

const p = new Params(100, '你好', true)
console.log(p.x)
//这里y,z在实例上都是不能访问的
// console.log(p.y)
// console.log(p.z)
