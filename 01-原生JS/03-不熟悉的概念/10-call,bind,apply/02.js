// https://segmentfault.com/a/1190000004581945
var list1 = [0, 1, 2];
var list2 = [3, 4, 5];
[].push.apply(list1, list2);

console.log(list1);// >>> [0,1,2,3,4,5]