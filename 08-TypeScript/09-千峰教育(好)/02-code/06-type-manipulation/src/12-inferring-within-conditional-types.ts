/**
 * @Author liming
 * @Date 2023/9/15 11:52
 **/

export default {}
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never

//Num
type Num = GetReturnType<() => number>

// let num:Num = 'ZHANGSAN'
let num: Num = 123456

//string
type Str = GetReturnType<(x: string) => string>
let str: Str = '123'
// let str:Str = 456

//boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>
let bools: Bools = [true, false]

//never
type Never = GetReturnType<string>
let nev: Never = 'error' as never

function stringOrNum(x: string): number
function stringOrNum(x: number): string
function stringOrNum(x: string | number): string | number
function stringOrNum(x:string | number):string|number{
    return Math.random() > 0.5 ? 'hello' :23
}

//string | number
type T88 = ReturnType<typeof stringOrNum>
