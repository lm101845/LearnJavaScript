/**
 * @Author liming
 * @Date 2023/9/5 1:56
 **/
function identity<Type>(arg:Type):Type{
    return arg
}

// let myIdentity:<Type>(arg:Type)=>Type = identity
// let myIdentity:<Input>(arg:Input)=>Input = identity

// let myIdentity:{<Type>(arg:Type):Type} = identity

/***
 * 这段代码是一个泛型函数的定义和一个变量的声明。
 *
 * 首先，`identity` 是一个泛型函数，它接受一个参数 `arg`，类型为 `Type`，并返回一个与参数类型相同的值。
 * 这个函数的目的是简单地将传入的参数原封不动地返回。
 *
 * 接下来，`myIdentity` 是一个变量，它的类型是一个函数类型。这个函数类型也是一个泛型函数，它接受一个参数 `arg`，
 * 类型为 `Type`，并返回一个与参数类型相同的值。这个变量的目的是存储 `identity` 函数的引用，以便后续调用。
 *
 * 总结起来，这段代码定义了一个泛型函数 `identity`，并将它的引用存储在 `myIdentity` 变量中。这样，
 * 我们就可以使用 `myIdentity` 变量来调用 `identity` 函数，实现参数的原封不动地返回。
 */
interface GenericIdentityFn{
    <Type>(arg:Type):Type
}

let myIdentity:GenericIdentityFn = identity

console.log('================')

interface GenericIdentityFn1<Type>{
    (arg:Type):Type
}
let myIdentity1:GenericIdentityFn1<string> = identity


