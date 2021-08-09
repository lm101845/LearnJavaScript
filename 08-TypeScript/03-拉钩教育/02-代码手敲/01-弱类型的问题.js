/*
 * @Author: liming
 * @Date: 2021-08-09 21:36:55
 * @LastEditTime: 2021-08-09 21:46:42
 * @FilePath: \03-拉钩教育\02-代码手敲\01-弱类型的问题.js
 */
const obj = {}

// 例子1：
obj.foo()
//你只有运行阶段才能发现这句代码写错了,obj对象身上根本没有foo方法

setTimeout(() => {
   obj.foo() 
}, 100000)
// 过了一段时间运行这段代码的时候才发现写错了


//例子2：
function sum(a, b) {
    console.log(sum(100,100));
    console.log(sum(100, '100'));
    //你第二个参数写错了，就返回了你根本不想要的结果
    //多人协同开发的情况下，不是所有的人都能遵从约定
}

// 例子3：
const obj = {}
//对象的属性名只能是字符串或者ES6中的symbol

obj[true] = 100
console.log(obj);
//这个对象的属性名实际上是字符串的'true'
//如果我们不知道对象的属性名会自动转换为字符串的一个特点，那么这里就可能感觉很奇怪。