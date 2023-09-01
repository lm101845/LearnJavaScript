export default {}

interface Sister {
    name: string
}

interface Sister {
    age: number
}

const sister1: Sister = {
    //接口同名属性会进行合并
    name: 'sisterAn',
    age: 20
}

// type Sister1 = {
//     name: string
// }
// type Sister1 = {
//     age:number
// }

//在TypeScript中，您不能使用相同的类型别名来定义具有不同属性的类型。
// 当您使用type关键字定义类型别名时，该别名应该唯一，并且只能关联到一个特定的类型。
