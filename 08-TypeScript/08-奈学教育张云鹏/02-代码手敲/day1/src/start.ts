let age: number | string = 20;
age = 20;
// age = true;
console.log(age);

let arg: any = 'abc';
arg = [1, 2, 3];
console.log(arg);

let arg1 = true;
// arg1 = 'abc';
console.log(arg1);
//默认类型为设置的值得类型

//在同一文件夹下，TS会把所有的文件里面的变量汇总起来编译，所以如果2个文件夹都有同名的变量，会报错
//解决方法是把每个文件夹使用export default，当成一个模块即可
//你把它们当成模块到处，可以认为是一个闭包，是一个封闭的作用域下的局部变量了。
export default {}
