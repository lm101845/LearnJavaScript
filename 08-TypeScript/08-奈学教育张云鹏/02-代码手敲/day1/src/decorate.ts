//装饰器
/***
 * 装饰器 是⼀种特殊类型的声明，它能够被附加到类声明，⽅法， 访问符)，属性或参数上。 装饰器使⽤
@expression 这种形式， expression 求值后必须为⼀个函数，它会在运⾏时被调⽤，被装饰的声明信息做为参
数传⼊。
 */
function FormatDate() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        //PropertyDescriptor是属性描述器,类似于object.defineProperty对象
        //拦截该装饰器所应⽤属性的set⽅法
        descriptor.set = function (d: Date) {
            let year = d.getFullYear()
            let month = d.getMonth() + 1
            let date = d.getDate()
            let _this: any = this
            _this['_' + key] = `${year}-${month}-${date}`
        }
    }
}

interface User {
    name: string,
    age: number,
    [props: string]: any
}

class User {
    //通过装饰器实现⾃动格式化时间
    @FormatDate()
    set birthday(v) { this._birthday = v }
    get birthday(): Date { return this._birthday }
    constructor({ name, age, birthday }: User) {
        this.name = name,
        this.age = age
        this.birthday = birthday
    }
}
let u = new User({ name: '⼩明', age: 18, birthday: new Date() })
console.log(u)
console.log(u.birthday)
export default {}