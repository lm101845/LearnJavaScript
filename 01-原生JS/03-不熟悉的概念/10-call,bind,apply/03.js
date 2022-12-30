/**
 * @Author liming
 * @Date 2022/12/30 9:11
 **/
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//先将内置的 arguments 转换为真正的数组
/**
 * 类数组（Array-like）对象
 * slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。一个函数中的 arguments 就是一个类数组对象的例子。
 *
 * function list() {
 *   return Array.prototype.slice.call(arguments);
 * }
 *
 * var list1 = list(1, 2, 3); // [1, 2, 3]
 * Copy to Clipboard
 * 除了使用 Array.prototype.slice.call(arguments)，你也可以简单的使用 [].slice.call(arguments) 来代替。另外，你可以使用 bind 来简化该过程。
 *
 * var unboundSlice = Array.prototype.slice;
 * var slice = Function.prototype.call.bind(unboundSlice);
 *
 * function list() {
 *   return slice(arguments);
 * }
 *
 * var list1 = list(1, 2, 3); // [1, 2, 3]
 */

function list() {
    console.log(arguments,'--arguments')
    console.log(typeof arguments,'arguments类型')
    //object
    //[Arguments] { '0': 1, '1': 2, '2': 3 }
    console.log(Array.prototype.slice(arguments))
    //[]
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);
console.log(list1)
// [1, 2, 3]

/**
 * 在这段代码中，Array.prototype.slice(arguments) 和 Array.prototype.slice.call(arguments) 都是在调用 slice 方法，但是前者并没有得到正确的结果，而后者得到了正确的结果。
 *
 * 这是因为 Array.prototype.slice 方法的语法是 slice(start, end)，它接受两个参数：一个是起始位置，一个是结束位置。当我们直接调用 Array.prototype.slice(arguments) 时，实际上相当于调用了 slice(arguments)，这样就没有传入正确的参数，所以得到的结果是空数组。
 *
 * 而 Array.prototype.slice.call(arguments) 则是使用了 call 方法来调用 slice 方法。call 方法的语法是 call(thisArg, arg1, arg2, ...)，它接受一个 this 参数和一些其他参数。在这里，我们把 arguments 作为 this 参数传入了 slice 方法，这样就可以将 arguments 作为数组来使用了。因此，调用 Array.prototype.slice.call(arguments) 后，我们得到的结果是 arguments 中的所有元素组成的数组。
 *
 * 综上所述，在 JavaScript 中，如果要将一个类数组对象（如 arguments）转换为数组，可以使用 Array.prototype.slice.call(arguments) 的方法。
 */