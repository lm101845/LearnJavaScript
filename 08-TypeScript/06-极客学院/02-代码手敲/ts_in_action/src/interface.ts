/**
 * @Author liming
 * @Date 2022/9/26 21:37
 **/

interface List {
    readonly id: number;
    name: string;
    //解决方式3：字符串索引签名
    // [x:string]:any
    age?: number
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        //value.id++;
        //只读属性不允许修改
    })
}

let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
    ]
}


// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B', age: 10}
//         //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
//         //但如果传入对象字面量的话，就不行
//     ]
// })

//解决方式1：把对象字面量赋值给变量
render(result)

//解决方式2：使用类型断言
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 18}
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
        //但如果传入对象字面量的话，就不行
    ]
} as Result)

interface StringArray {
    [index: number]: string

    //此索引签名含义：用任意的数字去索引StringArray，都会得到一个string
    //这就相当于声明了一个字符串类型的数组
}

let chars: StringArray = ['A', 'B'];

interface Names {
    [x: string]: string

    // y:number
    //  这个不被允许了！
    [z: number]: string

    //2种数字签名是可以混用的
    //但注意：数字索引签名的返回值，一定要是字符串索引签名返回值的【子类型】
    //这是因为JS会进行类型转换，将number转换为string,这样就会保持类型的兼容性
}

//使用接口定义函数
//之前写法
let add: (x: number, y: number) => number

//接口写法
interface Add {
    (x: number, y: number): number
}

//更简单方式：类型别名(就是为函数类型起一个名字)
type Add1 = (x: number, y: number) => number

//这里是具体函数
let add3: Add1 = (a, b) => a + b

//混合类型接口,这个接口里面又有函数，又有属性
interface Lib{
    ():void;
    version:string;
    doSomething():void;
}

//把lib放在一个函数里面，这样就可以创建多个实例了，它也就不是单例模式了
function getLib(){
    let lib:Lib = (()=>{}) as Lib;
    lib.version = '1.0'
    lib.doSomething = ()=>{}
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();

let lib2 = getLib();


