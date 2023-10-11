// 链接：http://www.ruanyifeng.com/blog/2014/10/event-loop.html
console.log(1);
setTimeout(function(){console.log(2);},1000);
console.log(3);

setTimeout(function(){console.log(4);}, 0);
console.log(5);