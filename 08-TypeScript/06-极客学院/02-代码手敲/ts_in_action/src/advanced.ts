/**
 * @Author liming
 * @Date 2022/10/5 21:14
 **/

//从右边到左边的推断
let a = 1;
let b = [2, null];

let c = (x = 1) => x + 1

//从左边到右边的推断
window.onkeydown = event => {
    console.log(event)
}

//类型断言
interface Foo{
    bar:number
}
// let foo = {} as Foo
// foo.bar = 1;

let foo:Foo = {
    bar: 1
}

