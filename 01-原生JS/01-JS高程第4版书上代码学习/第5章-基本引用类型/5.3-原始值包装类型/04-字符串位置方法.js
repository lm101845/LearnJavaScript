/*
 * @Author: liming
 * @Date: 2021-05-27 15:20:46
 * @LastEditTime: 2021-05-27 15:21:22
 * @FilePath: \LearnJavaScript\01-JS高程第4版代码\第5章-基本引用类型\5.3-原始值包装类型\04-字符串位置方法.js
 */

/**
 * 有两个方法用于在字符串中定位子字符串： indexOf() 和 lastIndexOf()。 这两个方法从字符
 串中搜索传入的字符串， 并返回位置（ 如果没找到， 则返回 - 1）。 两者的区别在于， indexOf() 方法
 从字符串开头开始查找子字符串， 而 lastIndexOf() 方法从字符串末尾开始查找子字符串。 来看下面
 的例子：
 */

 let stringValue = "hello world";
 console.log(stringValue.indexOf("o")); // 4
 console.log(stringValue.lastIndexOf("o")); // 7