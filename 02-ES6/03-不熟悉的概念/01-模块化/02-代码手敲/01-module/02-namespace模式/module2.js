/*
 * @Author: liming
 * @Date: 2021-07-28 20:29:05
 * @LastEditTime: 2021-07-28 20:38:44
 * @FilePath: \01-模块化\02-代码手敲\01-modular\02-namespace模式\module2.js
 */
// namespace模式：简单对象封装
let obj = {
    msg: 'module2',
    foo() {
        // console.log('foo',msg);  
        // 错误写法：必须要加this!!!
        console.log('foo',this.msg);  
    }
}
