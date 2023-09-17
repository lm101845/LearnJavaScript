/**
 * @Author liming
 * @Date 2023/9/17 14:18
 **/
class Box<Type> {
    contents: Type

    //属性contents必须要初始化，这里我们使用构造函数对它进行初始化
    constructor(value: Type) {
        this.contents = value
    }

}

//写法1：
const b: Box<string> = new Box("hello")
//写法2：
const c = new Box<number>(4567)
console.log(b)
console.log(c)
