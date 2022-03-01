//src/test1.ts⽂件中的内容
// interface User {
//     name: string,
//     age: number,
//     birthday: Date,
//     [props: string]: any
// }

//我们虽然在这里没有定义接口User8，但是它通过寻找机制找到了
/***
 * 完全可以通过⽂件拆除的形式将类型提取到外部⽂件，但这种⽅式在构建JavaScript时会⽣成⽆⽤的空模块，因
为在做语⾔转换时类型会被完全抹去，所以interface中的内容其实最后并不存在。这时就需要使⽤d.ts⽂件了。
d.ts⽂件的作⽤就是⽤来描述⽂件类型，类型识别器默认寻找node_modules/@types⽂件夹来进⾏全局类型的检
索，可以在tsconfig.json⽂件中配置typeRoots来修改d.ts的存放位置
 */
let user1: User8 = {
    name: '⼩⽩',
    age: 20,
    birthday: new Date(),
    money: 100
}
console.log(user1)
export default {}
