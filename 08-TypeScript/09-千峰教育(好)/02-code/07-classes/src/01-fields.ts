/**
 * @Author liming
 * @Date 2023/9/15 12:46
 **/
class Point{
    x:number = 0
    y:number = 0
}

const pt = new Point()
pt.x = 100
pt.y = 200
console.log(pt.x)
console.log(pt.y)


class Point2{
    x:number
    y:number
    constructor() {
        this.x = 0
        this.y = 0
    }
}

const pt2 = new Point2()
console.log(pt2.x)
console.log(pt2.y)

class OkGreeter{
    name!:string
    //无法初始化，我们就加!
}
