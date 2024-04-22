/**
 * @Author liming
 * @Date 2023/10/25 9:37
 **/
function request(options) {
    let method = options.method || 'GET'
    let data = options.data || {}
    //...
}

//基于 ES6 优化后的写法1
function request(method='GET',data={}){
    //...
}


//基于 ES6 优化后的写法2
function request(options = {}) {
    const { method = 'GET', data = {} } = options;
    //...
}

/**
 * 在上述代码中，我使用了ES6的解构赋值语法，
 * 将函数参数options中的method和data提取出来，并在它们没有定义的情况下赋予默认值。
 * 这种方式的优点是，它使代码更简洁，并避免了在逻辑错误的情况下（比如options对象没有定义method或data属性）抛出错误。
 *
 * 另外，我还添加了{}在request函数的参数中，以使其具有默认的空对象。
 * 这样做的目的是为了在调用函数时如果没有提供任何参数，那么函数内部可以访问到options对象，
 * 而不是undefined。
 */

/**
 * 感觉很多优化，使用TS就迎刃而解了
 */
