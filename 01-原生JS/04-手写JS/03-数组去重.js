//ES5 实现
function unique(arr) {
    var res = arr.filter(function (item, index, array) {
        return array.indexOf(item) === index
    })
    return res
}

console.log(unique([1, 2, 3, 4, 2, 3, 5]));
// console.log(unique([1, 2, 3, 4, '2', 3, 5]));


//ES6 实现
var unique = arr => [...new Set(arr)]

