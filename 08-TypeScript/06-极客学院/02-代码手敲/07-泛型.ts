/*
 * @Author: liming
 * @Date: 2022-03-02 18:06:50
 * @LastEditTime: 2022-03-02 18:09:30
 * @FilePath: \02-代码手敲\07-泛型.ts
 */

//泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

function log<T>(value: T): T{
    console.log(value);
    return value;
    
}

log<string[]>(['a', 'b'])

type Log = <T>(value: T) => T;
let mylog: Log = log;

interface Log1<T> {
    (value: T): T;
}

let myLog1: Log1<number> = log;

