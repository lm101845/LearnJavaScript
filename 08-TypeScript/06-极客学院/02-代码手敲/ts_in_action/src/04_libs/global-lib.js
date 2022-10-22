/**
 * @Author liming
 * @Date 2022/10/22 15:28
 **/

//全局库
function globalLib(options){
    console.log(options)
}

//函数还可以再添加属性
globalLib.version = '1.0.0'
globalLib.doSomething = function (){
    console.log('globalLib do something');
}

