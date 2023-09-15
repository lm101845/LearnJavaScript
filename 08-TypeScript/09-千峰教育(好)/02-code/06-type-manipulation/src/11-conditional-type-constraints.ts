/**
 * @Author liming
 * @Date 2023/9/15 11:10
 **/
export default {}
// type MessageOf<T> = T['message']
type MessageOf<T extends {message:unknown}> = T['message']

interface Email{
    message:string
}

type EmailMesageContents = MessageOf<Email>


type MessageOf1<T> = T extends {message:unknown} ? T['message'] : never

interface Dog{
    back():void
}

type EmailMesageContents1 = MessageOf1<Email>

const emc:EmailMesageContents1 = 'bababa'


type DogMessageContents = MessageOf1<Dog>
// const dmc:DogMessageContents = 'error'
const dmc:DogMessageContents = 'error' as never
/**
 * never类型是 TypeScript 中的底层类型。它在以下情况中很好的被使用：
 *
 * 一个从来不会有返回值的函数,即死循环（如：如果函数内含有while(true) {}）；
 * 一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo的返回类型是never）；
 * never 仅能被赋值给另外一个 never 类型，因此可以用它来进行编译时的全面的检查
 */

type Flatten<T> = T extends any[] ? T[number] : T
//T[number]表述数组索引，即数组里面的元素

//string类型
type Str = Flatten<string[]>

//元素本身：number类型
type Num = Flatten<number>
