/*
 * @Author: liming
 * @Date: 2021-08-17 20:25:01
 * @LastEditTime: 2021-08-17 21:03:20
 * @FilePath: \01-尚硅谷\02-代码手敲\code\http-ajax-axios\test.js
 */
/**
 * 这个是JS高程第21章的内容
 * 4. 通信错误
随着 Ajax 编程的出现，Web 应用程序在运行期间动态加载数据和功能成为常见的情形。JavaScript
和服务器之间的通信也会出现错误。
第一种错误是 URL 格式或发送数据的格式不正确。通常，在把数据发送到服务器之前没有用encodeURIComponent() 编码，会导致这种错误。例如，下面的 URL 格式就不正确：
http://www.yourdomain.com/?redir=http://www.someotherdomain.com?a=b&c=d
这个 URL 可以通过用 encodeURIComponent() 编码 "redir=" 后面的内容来修复，得到的结果如
下所示：
http://www.example.com/?redir=http%3A%2F%2Fwww.someotherdomain.com%3Fa%3Db%26c%3Dd
对于查询字符串，应该都要通过 encodeURIComponent() 编码。为此，可以专门定义一个处理查
询字符串的函数，比如：
 */

// JS高程给的函数
function addQueryStringArg(url, name, value) {
  if (url.indexOf("?") == -1) {
    url += "?";
  } else {
    url += "&";
  }
  url += "${encodeURIComponent(name)=${encodeURIComponent(value)}";
  return url;
}

// 老师自己写的函数
let params = {
  id: 1,
  name: "zs",
  // 要求：将一个对象params:{id: 1,name:zs}转换为id=1&name=zs这种格式呢？
};
let result = Object.keys(params);
let queryString = ''
console.log(result);   //[ 'id', 'name' ]
 result.forEach(key => {
    //  forEach这个方法只会对每一项运行传入的函数，并且【没有返回值】
    // 本质上，forEach方法相当于使用for循环遍历数组
    queryString+= `${key}=${params[key]}&`
 })
if (queryString) {
    //去掉最后的&
    console.log(queryString.length);
    // queryString.substring(0, queryString.length-1)
    queryString = queryString.substring(0, queryString.length-1)
    // 虎头蛇尾,[0,1),包头不包尾
    // substring不会改变字符串本身，所以需要重新赋值
    // subString2个参数，都指的是索引！！！
}
console.log(queryString);
// id=1name=zs
// id=1&name=zs&
// id=1&name=zs