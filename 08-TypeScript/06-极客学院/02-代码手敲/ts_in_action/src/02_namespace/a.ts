/**
 * @Author liming
 * @Date 2022/10/22 14:37
 **/

namespace Shape{
    //这些变量只能在Shape命令空间之下可见
    const pi = Math.PI;
    export function circle(r:number){
        //如果想让成员全局可见的话，需要使用export关键字将它导出
        return pi * r ** 2;
    }

    //注意：在命名空间中导出的成员是不可以重复定义的
    // export function square(x: number) {
    //     return x * x;
    // }
}

//命名空间也是可以进行拆分的
