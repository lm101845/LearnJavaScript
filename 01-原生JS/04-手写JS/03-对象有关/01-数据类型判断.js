/***
 * 方法 slice() 用于创建一个包含原有数组中一个或多个元素的新数组。 slice() 方法可以
接收一个或两个参数：返回元素的开始索引和结束索引。如果只有一个参数，则 slice() 会返回该索引
到数组末尾的所有元素。如果有两个参数，则 slice() 返回从开始索引到结束索引对应的所有元素，其
中不包含结束索引对应的元素。记住，这个操作不影响原始数组。
 */
function typeOf(obj) {
    // let res = Object.prototype.toString.call(obj).split(' ')[1]
    // res = res.substring(0, res.length - 1).toLowerCase()
    // return res
    // 评论区里提到的更好的写法
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
    //如果 slice() 的参数有负值，那么就以数值长度加上这个负值的结果确定位置。
}
console.log(typeOf([]))        // 'array'
console.log(typeOf({}));        // 'object'
console.log(typeOf(new Date));  // 'date'
