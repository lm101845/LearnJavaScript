/*
 * @Author: liming
 * @Date: 2022-03-02 18:13:11
 * @LastEditTime: 2022-03-02 18:13:14
 * @FilePath: \02-代码手敲\08-泛型类.ts
 */
class Log<T>{ 
    run(value: T){
        console.log(value);
        return value;
        
    }
}

let log1 = new Log<number>();
log1.run(1)

interface Length { 
    length: number
}

function log2<T extends Length>(value:T) { 
    console.log(value,value.length);
    
}