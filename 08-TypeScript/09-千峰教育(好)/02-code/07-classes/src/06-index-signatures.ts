/**
 * @Author liming
 * @Date 2023/9/16 13:17
 **/

class MyClass {
    [s: string]: boolean | ((s: string) => boolean)
    // x:number = 100
    // x:string = 'hello'
    x = true
    check(s:string){
        return this[s] as boolean
    }
}
