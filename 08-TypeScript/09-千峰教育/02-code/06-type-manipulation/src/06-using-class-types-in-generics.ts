/**
 * @Author liming
 * @Date 2023/9/14 22:17
 **/
// function create<Type>(c:{new():Type}):Type{
//     return new c()
// }

class BeeKeeper{
    hasMask:boolean = true
}

class ZooKeeper{
    nameTag:string = 'Mkile'
}

class Animal{
    numLegs:number = 4
}

class Bee extends Animal{
    keeper:BeeKeeper = new BeeKeeper()
}

class Lion extends Animal{
    keeper:ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c:new ()=>A):A{
    return new c()
}

console.log(createInstance(Lion).keeper.nameTag)
console.log(createInstance(Bee).keeper.hasMask)
// console.log(createInstance(BeeKeeper))


