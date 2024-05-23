/**
 * @Author liming
 * @Date 2024/5/1 10:42
 **/

let j;
for (j=0; j<10; j++) {
    let i = j; // 每个迭代重新绑定！
    console.log( i );
}