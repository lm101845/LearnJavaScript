/**
 * @Author liming
 * @Date 2023/10/25 9:42
 **/
function log(){
    console.log('前面的flag为真，就会看到我')
}

let flag = true

flag && log()


//示例2：
// if(a && b){
//     c()
// }

//=> 优化后 a && b && c()
//其他类推


