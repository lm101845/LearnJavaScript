/**
 * @Author liming
 * @Date 2023/9/15 11:55
 **/
function log(...args: never[]): void {
    console.log(args);
}

// log(1, 2, 3); // 输出: [1, 2, 3]
