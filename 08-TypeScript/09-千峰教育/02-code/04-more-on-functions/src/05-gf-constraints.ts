function longest<T extends {length:number}>(a:T,b:T) {
    return a.length >= b.length ? a : b
}

const longerArray = longest([1, 2], [2, 3, 4])
const longerString = longest('felix', 'lu')
// const notOk = longest(10, 100)
