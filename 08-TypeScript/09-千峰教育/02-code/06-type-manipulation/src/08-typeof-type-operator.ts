/**
 * @Author liming
 * @Date 2023/9/14 22:46
 **/

let s = 'hello'
let n: typeof s
n = 'hello'
// n= 100


type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f(){
    return {
        x:10,
        y:3
    }
}

type P = ReturnType<typeof f>

// const p1:P = 100
const p2:P = {
    x:1,
    y:2
}

function msgbox(){}
let shouldContinue1:typeof msgbox
// let shouldContinue2:typeof msgbox('hello')
// shouldContinue1 = 100
shouldContinue1 = ()=>{
    console.log('111')
}
shouldContinue1()


