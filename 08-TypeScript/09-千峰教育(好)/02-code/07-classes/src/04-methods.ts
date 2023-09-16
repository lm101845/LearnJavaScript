/**
 * @Author liming
 * @Date 2023/9/16 12:54
 **/
export default {}
class Point{
    x:number = 10
    y:number = 20

    scale(n:number):void{
        this.x *= n
        this.y *= n
    }
}

const p = new Point()
p.scale(10)
console.log(p.x)
console.log(p.y)

console.log('=====================================')
let x:number = 0
class C{
    s:string = 'hello'
    m(){
        x = 100
        //这个x读取的是class类外面的变量x
    }
}
