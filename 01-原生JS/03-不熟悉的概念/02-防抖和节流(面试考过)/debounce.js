//https://github.com/mqyqingfeng/Blog/issues/22
var count = 1;
var container = document.getElementById('container');
//原始没有防抖
// container.onmousemove = getUserAction;
function getUserAction() {
    container.innerHTML = count++;
    console.log('count的值现在是：', count);
    console.log('this的值为', this);
    /***
     * 如果我们在 getUserAction 函数中 console.log(this)，
     * 在不使用 debounce 函数的时候，this 的值为：<div id="container"></div>
     * 但是如果使用我们的 debounce 函数，this 就会指向 Window 对象！
       所以我们需要将 this 指向正确的对象。
     */
};


var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};

var setUseAction = debounce(getUserAction, 10000, true);

container.onmousemove = setUseAction;

document.getElementById("button").addEventListener('click', function () {
    setUseAction.cancel();
})


// 第一版
// function debounce(func, wait) {
//     console.log('debounce里面的this指向window对象！！',this);
//     var timeout;
//     return function () {
//         clearTimeout(timeout)
//         timeout = setTimeout(func, wait);
//     }
// }
//debounce是window调用的,所以里面的this会指向window对象

// 第二版
// function debounce(func, wait) {
//     var timeout;

//     return function () {
//         var context = this;

//         clearTimeout(timeout)
//         timeout = setTimeout(function () {
//             func.apply(context)
//         }, wait);
//     }
// }

/***
 * JavaScript 在事件处理函数中会提供事件对象 event，
 * 如果我们不使用 debouce 函数，这里会打印 MouseEvent 对象，
 * 但是在我们实现的 debounce 函数中，却只会打印 undefined!
 * 所以我们再修改一下代码：
 */
// 第三版
// function debounce(func, wait) {
//     var timeout;

//     return function () {
//         var context = this;
//         var args = arguments;

//         clearTimeout(timeout)
//         timeout = setTimeout(function () {
//             func.apply(context, args)
//         }, wait);
//     }
// }
// 到此为止，我们修复了两个小问题：
// this 指向
// event 对象

/***
 * 这个时候，代码已经很是完善了，但是为了让这个函数更加完善，我们接下来思考一个新的需求。
这个需求就是：
我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
想想这个需求也是很有道理的嘛，那我们加个 immediate 参数判断是否是立刻执行。
 */
// 第四版
// function debounce(func, wait, immediate) {

//     var timeout;

//     return function () {
//         var context = this;
//         var args = arguments;

//         if (timeout) clearTimeout(timeout);
//         if (immediate) {
//             // 如果已经执行过，不再执行
//             var callNow = !timeout;
//             timeout = setTimeout(function () {
//                 timeout = null;
//             }, wait)
//             if (callNow) func.apply(context, args)
//         }
//         else {
//             timeout = setTimeout(function () {
//                 func.apply(context, args)
//             }, wait);
//         }
//     }
// }


/**
 * 
 */

// 第五版
// function debounce(func, wait, immediate) {

//     var timeout, result;

//     return function () {
//         var context = this;
//         var args = arguments;

//         if (timeout) clearTimeout(timeout);
//         if (immediate) {
//             // 如果已经执行过，不再执行
//             var callNow = !timeout;
//             timeout = setTimeout(function () {
//                 timeout = null;
//             }, wait)
//             if (callNow) result = func.apply(context, args)
//         }
//         else {
//             timeout = setTimeout(function () {
//                 func.apply(context, args)
//             }, wait);
//         }
//         return result;
//     }
// }

/**
 * 最后我们再思考一个小需求，我希望能取消 debounce 函数，比如说我 debounce 的时间间隔是 10 秒钟，immediate 为 true，这样的话，我只有等 10 秒后才能重新触发事件，现在我希望有一个按钮，
 * 点击后，取消防抖，这样我再去触发，就可以又立刻执行啦，是不是很开心？
 */
// 第六版
function debounce(func, wait, immediate) {

    var timeout, result;

    var debounced = function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
// container.onmousemove = debounce(getUserAction, 1000);
container.onmousemove = debounce(getUserAction, 1000, false);
