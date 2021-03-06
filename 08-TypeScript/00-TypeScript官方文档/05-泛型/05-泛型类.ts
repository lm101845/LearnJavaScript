/*
 * @Author: liming
 * @Date: 2022-01-30 10:00:52
 * @LastEditTime: 2022-01-30 10:31:27
 * @FilePath: \00-TypeScript官方文档\05-泛型\05-泛型类.ts
 */
(() => {
    class GenericNumber<T>{
        zeroValue: T | undefined;
        add: ((x: T, y: T) => T) | undefined;
    }
    let myGenericNumber = new GenericNumber<number>()
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { 
        return x + y
    }

    // GenericNumber类的使用是十分直观的，
    // 并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) { return x + y };
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
    
    /**
     * 与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。
    我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
     */
    
    
})()
