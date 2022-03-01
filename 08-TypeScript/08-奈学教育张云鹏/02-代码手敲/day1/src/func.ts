//当函数没有返回数据的时候,返回类型就是void
function test(): void{
    console.log(123);
    
}
test();

//当函数肯定执行不完的时候，返回类型就是never
// ——什么叫执行不完？要么是死循环，要么是抛出异常，这些都不算函数执行完
// 返回never的函数必须存在⽆法达到的终点
function error(message: string): never {
    throw new Error(message);
}
error("Something failed");


// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
fail();

// 返回never的函数必须存在⽆法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

infiniteLoop();
