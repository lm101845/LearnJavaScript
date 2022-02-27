/***
 * 在使⽤TypeScript进⾏业务开发时，可能会存在⼤量的动态对象，为更好的将其类型公开到开发者⾯前，
interface的使⽤是必要的。
除此之外，interface可以实现多类型合并，代码如下
 */

//会员
interface User {
    name: string,
    age: number,
    sex: string
}

//管理员
interface Admin {
    name: string,
    password: string
}

type Person = User | Admin
//此时的arr数组中既可以包括User的结构⼜可以包括Admin的结构(但不能用第三种数据结构)
//type代表你定义了一个新的类型，Person是这个新类型的别名
let arr: Array<Person> = [
    {
        name: '⼩明',
        age: 18,
        sex: '男'
    },
    {
        name: '管理员',
        password: '123456'
    }
]

export default {}
