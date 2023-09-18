/**
 * @Author liming
 * @Date 2023/9/18 21:23
 **/

export default {}
const someclass = class<Type> {
    content: Type

    constructor(value: Type) {
        this.content = value
    }
}

const m = new someclass("HELLO")
console.log(m.content)


