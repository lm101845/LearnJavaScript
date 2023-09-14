/**
 * @Author liming
 * @Date 2023/9/5 1:51
 **/

export default {}
function loggingIdentity<T>(arg:Array<T>):T[]{
    console.log(arg.length)
    // 报错
    return arg
}

loggingIdentity([100,200])
