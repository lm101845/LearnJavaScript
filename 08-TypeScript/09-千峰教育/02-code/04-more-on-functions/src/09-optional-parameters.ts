/**
 * @Author liming
 * @Date 2023/7/18 9:53
 **/
export default {}

//问号与初始值同时出现，舍弃一个即可
function f(n: number = 100) {
    console.log(n.toFixed())
    console.log(n.toFixed(3))
}

f(123.45678)
f()
