/**
 * @Author liming
 * @Date 2023/7/20 22:41
 **/
export default {}
function multiply(n:number,...m:number[]){
    return m.map(x=>n * x)
}

const a = multiply(10, 1, 2, 3, 4, 60, 100)

console.log(a)
