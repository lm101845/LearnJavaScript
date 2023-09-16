/**
 * @Author liming
 * @Date 2023/9/16 14:09
 **/
export default {}

class Base {
    name = 'base'

    constructor() {
        console.log('My name is ' + this.name)
    }
}

class Derived extends Base {
    name = 'derived'

    constructor() {
        super()
        console.log(this.name)
    }
}

const d = new Derived()
