// 泛型
// 可以通过T指定泛型，T所代表的类型与any不同，他会识别到函数实际调⽤时传⼊的类型
// 并可以根据调⽤时的类型⽣成对应的代码提示
function test<T>(arg: T): T {
    //这个T不指一个具体类型
    return arg
}

// 传⼊字符串时，该函数的返回值类型默认为string并且⽆法被更改
//res的类型就是明确的传入的数据类型，这里传入的是字符串，所以res的类型必须是字符串
let res = test('字符串')
let res2 = test<string>('我是字符串')
console.log('res', res)
console.log('res', res2)

// 传⼊数字时 ，该函数的返回值类型被设定为number
let num = test(123)
console.log('num',num)
export default {}