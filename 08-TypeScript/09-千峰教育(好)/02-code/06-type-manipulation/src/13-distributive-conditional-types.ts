/**
 * @Author liming
 * @Date 2023/9/15 12:26
 **/
type ToArray<Type> = Type extends any ? Type[] : never

//string[] | number[]
type StrArrOrNumArr = ToArray<string | number>

let s1: StrArrOrNumArr = ['haha', '你好']
let s2: StrArrOrNumArr = [123, 345]

type ToArrayNonDist<Type> = [Type] extends [any] ? Type : never

type StrArrOrNumber = ToArrayNonDist<string | number>
let s3: StrArrOrNumber = '23'
let s4: StrArrOrNumber = 456
