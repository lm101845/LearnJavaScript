/**
 * @Author liming
 * @Date 2024/5/1 10:38
 **/

try {
    undefined(); // 执行一个非法操作来强制制造一个异常
}
catch (err) {
    console.log( err ); // 能够正常执行！
}
console.log( err ); // ReferenceError: err not found