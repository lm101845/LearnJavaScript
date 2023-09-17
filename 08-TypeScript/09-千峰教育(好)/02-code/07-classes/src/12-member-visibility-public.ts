/**
 * @Author liming
 * @Date 2023/9/17 13:11
 **/
export default {}
class Greeter{
    public greet(){
        //public可以省略，默认是public
        console.log('hi')
    }

    sayHello(){
        this.greet()
    }
}

class Hello extends Greeter{
    constructor() {
        super();
        this.greet()
    }
}
const g = new Greeter();
g.greet()
