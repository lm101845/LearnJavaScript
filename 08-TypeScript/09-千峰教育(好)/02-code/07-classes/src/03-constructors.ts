/**
 * @Author liming
 * @Date 2023/9/16 12:15
 **/
export default {}

class Point {
    x: number
    y: number

    constructor(x: number = 0, y: number = 0) {
        //这里的x,y是构造函数的2个形参，和类里面的2个属性并不冲突
        this.x = x
        this.y = y
    }
}

const p = new Point()
console.log(p.x)
console.log(p.y)
//不传的话，就是默认值


console.log('=======================')
class Base{
    k = 4
}

class Derived extends Base{
    //派生的构造函数必须包含super调用
    constructor() {
        super();
        console.log(this.k)
    }
}

