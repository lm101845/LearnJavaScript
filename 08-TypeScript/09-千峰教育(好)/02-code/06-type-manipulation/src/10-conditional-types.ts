/**
 * @Author liming
 * @Date 2023/9/14 23:44
 **/

interface Animal {
    live(): void
}

interface Dog extends Animal {
    woof(): void
}

type Example1 = Dog extends Animal ? number : string

type Example2 = RegExp extends Animal ? number : string


interface IdLabel {
    id: number
}

interface NameLabel {
    name: string
}

function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel
//定义函数的实现
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw ''
}


type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
    throw ''
}

let a = createLabel2('typescript')
let b = createLabel2(120)
