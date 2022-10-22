/**
 * @Author liming
 * @Date 2022/10/22 15:34
 **/

//函数和命名空间的声明合并，相当于为函数添加了一些属性
declare function globalLib(options:globalLib.Options):void;

declare namespace globalLib{
    const version:string;
    function doSomething():void
    interface Options{
        [key:string]:any
    }
}
