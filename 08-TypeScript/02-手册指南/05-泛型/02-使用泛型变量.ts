(() => {
    function identity<T>(arg: T): T {
        return arg;
    }

    /**
 * 
 * @param arg 
 * @returns 
 * 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
 */

    // let output = identity<string>("myString");

    //第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
    let output = identity("myString"); // type of output will be 'string'

    // function loggingIdentity<T>(arg: T): T{
    //         //console.log(arg.length); // Error: T doesn't have .length
    //         return arg;
    // }

    function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
        /**
         * 你可以这样理解loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时 T的的类型为number。
         *  这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。
         */
    }

    function loggingIdentity2<T>(arg: Array<T>): Array<T> {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
})();
