/**
 * @Author liming
 * @Date 2023/9/5 2:15
 **/
export default {}
interface LengthWise{
    length:number
}
function loggingIdentity<Type extends LengthWise>(arg:Type):Type{
    console.log(arg.length)
    return arg
}

loggingIdentity('hello')
loggingIdentity(['hello','world'])
