/**
 * @Author liming
 * @Date 2022/10/22 15:21
 **/
import $ from 'jquery'
//jquery是用JS编写的，我们在使用非TS的类库时，必须为这个类库编写一个声明文件，对外暴露它的API
//幸运的是，大多数的声明文件，社区已经为我们写好了，我们只要安装一个声明包即可 pnpm i @types/xxx
$('.app').css('color','red')

// globalLib({x:1})
// globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething()

import m from "moment";
declare module 'moment'{
    export function myFunction():void
}
//给moment添加一些我们自定义方法
m.myFunction = ()=>{

}

declare global{
    namespace globalLib{
        function doAnything():void
    }
}

globalLib.doAnything = ()=>{}
