/**
 * @Author liming
 * @Date 2022/10/21 15:48
 **/
// T extends U ? X : Y
//条件类型是由条件表达式所声明的类型
//条件类型使类型具有了不唯一性，同样也增加了语言的灵活性

export default {}
type TypeName<T> =
    T extends string ? "string" :
        T extends number ? "number" :
            T extends boolean ? "boolean" :
                T extends undefined ? "undefined" :
                    T extends Function ? "function" :
                        "object";

type T1 = TypeName<string>
type T2 = TypeName<string[]>

//分布式条件类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

//我们可以使用此进行类型的过滤
type Diff<T,U> = T extends U ? never :T;
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T,undefined|null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>    //这个就是Diff的内置类型
// NonNullable<T>  //这个就是NotNull的内置类型

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType<T>
type T8 = ReturnType<() => string>