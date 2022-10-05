/**
 * @Author liming
 * @Date 2022/10/5 20:49
 **/
export default {}
//使用泛型定义一个函数
function log<T>(value: T): T {
    console.log(value);
    return value;
}

//写法1：
log<string[]>(['a', 'b'])

//写法2：使用类型推断
log(['a', 'b'])


//使用泛型定义一个函数类型
//使用类型别名来定义一个泛型函数类型
type Log = <T>(value: T) => T
let myLog: Log = log;

//使用泛型定义一个接口——和类型别名定义方式完全等价
//使用泛型来约束接口的特定成员
interface Log2 {
    <T>(value: T): T;
}

//使用泛型来约束接口的所有成员
interface Log3<T> {
    (value: T): T;
}

let myLog3: Log3<number> = log

//给接口定义默认类型
interface Log4<T = string> {
    (value: T): T;
}

let myLog4: Log4 = log
myLog4("1")


