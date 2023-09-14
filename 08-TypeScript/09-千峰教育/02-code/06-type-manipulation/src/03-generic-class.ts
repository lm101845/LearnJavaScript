/**
 * @Author liming
 * @Date 2023/9/5 2:10
 **/

class GenericNumber<NumType>{
    zeroValue:NumType
    //会报错，"strictPropertyInitialization": false,暂时不让它报错
    add:(x:NumType,y:NumType)=>NumType
}

let myGeneric = new GenericNumber<number>()
myGeneric.zeroValue = 0
myGeneric.add = (x,y)=>{
    return x+ y
}

let myGeneric1 = new GenericNumber<string>()
myGeneric1.zeroValue = 'hello'
myGeneric1.add = (x,y)=>{
    return x+ y
}
