/*
 * @Author: liming
 * @Date: 2021-08-09 21:50:48
 * @LastEditTime: 2021-08-09 22:38:14
 * @FilePath: \03-拉钩教育\02-代码手敲\02-强类型的优势.js
 */
function render(element) {
  element.className = "container";
  //因为开发工具无法推断出这个element是什么类型的,所以它就没办法给你智能提示一些具体成员了
  element.innerHtml = "hello world";
  // 这里innerHtml写错了，也不会提示错误
}

const util = {
    //定义了util的一个工具函数
    aaa: () => {
        // 5个月以后，你发现aaa这个成员名称起的有点草率，你想改，但是不敢改了
        console.log("util func");
    }
}

function sum(a, b) {
    // 只有弱类型语言才需要写这种类型判断，强类型语言则不需要，你写的类型不对直接编译报错，爽歪歪
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('arguments must be a number')
    }
    return a + b
}