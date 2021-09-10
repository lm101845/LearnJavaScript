/*
 * @Author: liming
 * @Date: 2021-09-02 10:24:10
 * @LastEditTime: 2021-09-02 10:28:15
 * @FilePath: \01-JS高程第4版书上代码学习\第10章：函数\10.14-闭包\01.js
 */
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    // 返回一个函数
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

let data = [
  { name: "Zachary", age: 28 },
  { name: "Nicholas", age: 29 },
];
data.sort(createComparisonFunction("name"));
console.log(data[0].name); // Nicholas

data.sort(createComparisonFunction("age"));
console.log(data[0].name); // Zachary

/**
 * 在上面的代码中，数组 data 中包含两个结构相同的对象。每个对象都有一个 name 属性和一个 age
属性。默认情况下， sort() 方法要对这两个对象执行 toString() ，然后再决定它们的顺序，但这样
得不到有意义的结果。而通过调用 createComparisonFunction("name") 来创建一个比较函数，就
可以根据每个对象 name 属性的值来排序，结果 name 属性值为 "Nicholas" 、 age 属性值为 29 的对象
会排在前面。而调用 createComparisonFunction("age") 则会创建一个根据每个对象 age 属性的值
来排序的比较函数，结果 name 属性值为 "Zachary" 、 age 属性值为 28 的对象会排在前面。
 */
