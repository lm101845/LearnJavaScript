"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @Author liming
 * @Date 2022/10/5 21:14
 **/
//从右边到左边的推断
var a = 1;
var b = [2, null];
var c = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
};
//从左边到右边的推断
window.onkeydown = function (event) {
    console.log(event);
};
// let foo = {} as Foo
// foo.bar = 1;
var foo = {
    bar: 1
};
/**
 * @Author liming
 * @Date 2022/10/21 13:22
 **/
define("advanced1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * X兼容Y: X(目标类型) = Y(源类型)
     *
     */
    exports.default = {};
    var s = 'a';
    s = null;
    //字符型是兼容null类型的,即null是字符型的子类型
    console.log(s, 's');
    var x = { a: 1, b: 2 };
    var y = { a: 1, b: 2, c: 3 };
    //问题：x,y是否可以相互赋值？
    x = y; //可以(接口：多的可以赋值给少的,让少的变得多一些)
    //y = x;  //不可以
    console.log(x, 'x');
    console.log(y, 'y');
    //然后定义一个高阶函数
    function hof(handler) {
        return handler;
    }
    //此时，Handler是目标类型，我们实际传入的参数是原类型
    //1)参数个数：目标函数的参数个数(2个)一定要多于原函数的参数个数
    var handler1 = function (a) {
    };
    hof(handler1);
    var handle2 = function (a, b, c) {
    };
    // hof(handler2)
    //不可以，目标函数有2个参数，而原函数有3个，不行！！
    //可选参数和剩余参数
    var a = function (p1, p2) {
    };
    var b = function (p1, p2) {
    };
    var c = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    a = b;
    a = c;
    //原则1：固定参数可以兼容可选参数和剩余参数
    b = c;
    b = a;
    //原则2：可选参数不兼容固定参数和剩余参数——可以通过tsconfig.json来配置("strictFunctionTypes": false)
    c = a;
    c = b;
    //原则3：剩余参数可以兼容固定参数和可选参数
    //2)参数类型
    var handler3 = function (a) {
    };
    var p3d = function (point) {
        console.log(point);
    };
    var p2d = function (point) {
        console.log(point);
    };
    //这2个函数参数个数是相同的，都是一个，参数类型都是对象，只不过p3d参数对象多了一个属性
    //成员个数多的兼容成员个数少的(少的可以给多的赋值，让多的变少)
    p3d = p2d; //可以
    // p2d = p3d;  //不行(也可以配置tsconfig.json)
    //这种叫函数参数的双向协变
    // 3) 返回值类型(目标函数的返回值类型必须与原函数类型相同或者为其子类型)
    var f = function () { return ({ name: 'Alice' }); };
    var g = function () { return ({ name: 'Alice', location: 'Beijing' }); };
    f = g;
    console.log(f, 'f');
    function overload(a, b) { } //这个是具体实现函数
    //function overload(a: any, b: any,c:any): any { }  //这个是具体实现函数,不兼容
    // function overload(a: any): any {}
    // function overload(a: any, b: any, c: any): any {}
    // function overload(a: any, b: any) {}
    //列表中的函数叫目标函数，而具体实现就是源函数
    //所以在重载列表中，目标函数参数要多于源函数参数
    //枚举兼容性
    var Fruit;
    (function (Fruit) {
        Fruit[Fruit["Apple"] = 0] = "Apple";
        Fruit[Fruit["Banana"] = 1] = "Banana";
    })(Fruit || (Fruit = {}));
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Yellow"] = 1] = "Yellow";
    })(Color || (Color = {}));
    //枚举类型和数值类型是完全兼容的
    var fruit = 3;
    console.log(fruit, 'fruit');
    var no = Fruit.Apple;
    console.log(no, 'no');
    // let color:Color.Red = Fruit.Apple;
    //而枚举之间是完全不兼容的
    //类兼容性(和接口比较相似，只比较结构)
    //在比较类兼容的时候，静态成员和构造函数是不参与比较的
    var A = /** @class */ (function () {
        function A(p, q) {
            this.name = '';
            this.id = 1;
        }
        return A;
    }());
    var B = /** @class */ (function () {
        function B(p) {
            this.name = '';
            this.id = 2;
        }
        B.s = 1;
        return B;
    }());
    var aa = new A(1, 2);
    var bb = new B(1);
    // aa = bb;
    // bb = aa;
    //2个实例完全兼容，因为他们都拥有同一个实例属性id，而构造函数和静态属性不比较
    //而如果类中含有私有成员，则这2个类就不兼容了
    //此时只有父类和子类之间是相互兼容的
    var C = /** @class */ (function (_super) {
        __extends(C, _super);
        function C() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return C;
    }(A));
    var cc = new C(1, 2);
    aa = cc;
    cc = aa;
    var obj1 = {};
    var obj2 = {};
    obj1 = obj2;
    //泛型函数
    var log1 = function (x) {
        console.log('x');
        return x;
    };
    var log2 = function (y) {
        console.log('y');
        return y;
    };
    log1 = log2;
});
//如果2个泛型函数的定义相同，但是没有指定类型参数，他们也是兼容的
define("advanced2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @Author liming
     * @Date 2022/10/21 14:44
     * 交叉类型和联合类型
     **/
    exports.default = {};
    var pet = {
        run: function () {
        },
        jump: function () {
        }
    };
    //这个变量是这2个接口的交叉类型(从名称看是取类型的交集，其实是取所有类型的并集)
    //这个变量将同时具备这2个接口的所有方法
    //联合类型指的是声明的类型并不确定，可以是多个类型中的其中一个
    var a = 'a';
    //限定一个变量的取值在某一个特定的范围内
    //字符串的字面量联合类型
    var b;
    //数字的字面量联合类型
    var c;
    //对象的联合类型
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.run = function () { };
        Dog.prototype.eat = function () { };
        return Dog;
    }());
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        Cat.prototype.jump = function () { };
        Cat.prototype.eat = function () { };
        return Cat;
    }());
    var Master;
    (function (Master) {
        Master[Master["Boy"] = 0] = "Boy";
        Master[Master["Girl"] = 1] = "Girl";
    })(Master || (Master = {}));
    function getPet(master) {
        var pet = master === Master.Boy ? new Dog() : new Cat();
        pet.eat();
        //pet是联合类型，类型未确认的情况下，只能访问联合类型的公有方法eat
        return pet;
    }
    //这个代码如果要新增shape,就会有问题，不灵活
    function area(s) {
        switch (s.kind) {
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
            case 'circle':
                return Math.PI * Math.pow(s.radius, 2);
            default:
                return (function (e) { throw new Error(e); })(s);
            //这个函数的作用：检查函数是不是never类型，如果是的话，说明你所有分支都被覆盖了，那这个分支永远不会走到
        }
    }
    console.log(area({ kind: 'circle', radius: 1 }));
});
define("advanced3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @Author liming
     * @Date 2022/10/21 15:24
     **/
    exports.default = {};
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    function getValues(obj, keys) {
        return keys.map(function (key) { return obj[key]; });
    }
    console.log(getValues(obj, ['a', 'b']));
    console.log(getValues(obj, ['e', 'f']));
    var key;
    //索引访问操作符 T[K]
    var value;
    //泛型约束 T extends U
    //改造getValues函数(使得keys里面的元素一定是Obj里面的属性)
    function getValues1(obj, keys) {
        //让K继承Obj所有属性的联合类型
        return keys.map(function (key) { return obj[key]; });
    }
    console.log(getValues1(obj, ['a', 'b']));
});
// console.log(getValues1(obj,['e','f']))
//此时TS的类型检查就发挥作用了
//索引类型可以实现对对象属性的查询和访问
/**
 * @Author liming
 * @Date 2022/10/21 15:37
 **/
/**
 * @Author liming
 * @Date 2022/10/21 15:48
 **/
// T extends U ? X : Y
//条件类型是由条件表达式所声明的类型
//条件类型使类型具有了不唯一性，同样也增加了语言的灵活性
define("advanced5", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {};
});
/**
 * @Author liming
 * @Date 2022/10/5 20:20
 **/
var Asian = /** @class */ (function () {
    //1.类实现接口的时候，必须实现接口中声明的所有属性
    function Asian(name) {
        this.name = name;
    }
    // private name: string;
    //2.接口只能约束类的公有成员
    Asian.prototype.eat = function () {
    };
    Asian.prototype.sleep = function () {
    };
    ;
    return Asian;
}());
var boy = {
    name: "",
    cry: function () { },
    eat: function () { },
    run: function () { }
};
//接口继承类(接口除了可以继承接口之外，还可以继承类——这个就相当于接口把类的成员都抽象了出来——即只有类的成员结构，而没有具体的实现)
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        this.state2 = 10;
    }
    return Auto;
}());
// @ts-ignore
var C = /** @class */ (function () {
    function C() {
        this.state = 888;
        this.state2 = 1000;
    }
    return C;
}());
//此外Auto的子类也可以实现AutoInterface这个接口
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
define("class", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @Author liming
     * @Date 2022/9/26 22:58
     **/
    exports.default = {};
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log('eat');
        };
        return Animal;
    }());
    // let animal = new Animal();
    // 无法创建抽象类的实例，抽象类只能被继承
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            var _this = _super.call(this) || this;
            //受保护成员只能在类或者子类中访问，而不能在类的实例中访问
            _this.legs = 4;
            // private constructor(name:string) {
            // 这个类既不能被实例化，也不能被继承了
            // procted constructor(name:string) {
            // 表明这个类不能被实例化，而只能被继承，只能作为一个基类显示
            _this.name = name;
            return _this;
        }
        // name:string = 'dog'
        // name?:string
        //如果没有this.name = name进行初始化，那就要手动给它一个初始值，或者设置它为可选属性
        Dog.prototype.run = function () {
        };
        Dog.prototype.pri = function () {
        };
        //私有成员只能在类的本身被调用，不能被类的实例调用，也不能被子类调用
        Dog.prototype.pro = function () {
        };
        Dog.prototype.sleep = function () {
            console.log('dog sleep');
        };
        //只读属性，不能被更改
        //只读属性，一定要被初始化(实例属性一样要初始化，如this.name = name)
        Dog.food = 'bones';
        return Dog;
    }(Animal));
    console.log(Dog.prototype);
    //只有constructor和run方法
    console.log(Dog.food);
    // console.log(dog.food)
    var dog = new Dog("wangwang");
    console.log(dog);
    //内部属性只在实例上，而不在原型上
    //dog.pri()
    // dog.pro();
    dog.eat();
    dog.sleep();
    //类的继承
    var Husky = /** @class */ (function (_super) {
        __extends(Husky, _super);
        function Husky(name, color) {
            //子类的构造函数，必须包含super调用,super代表父类的实例
            var _this = _super.call(this, name) || this;
            _this.color = color;
            _this.color = color;
            //注意：this一定要在super调用之后再调用
            // this.pri()
            _this.pro();
            return _this;
        }
        return Husky;
    }(Dog));
    //类的成员修饰符(默认public)
    //类的静态成员可以被继承
    console.log(Husky.food, '类的静态成员可以被继承');
    //抽象类中的多态
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.sleep = function () {
            console.log('cat sleet');
        };
        return Cat;
    }(Animal));
    var cat = new Cat();
    var animals = [dog, cat];
    animals.forEach(function (item) {
        item.sleep();
    });
    //类的this类型，实现链式调用
    var WorkFlow = /** @class */ (function () {
        function WorkFlow() {
        }
        WorkFlow.prototype.step1 = function () {
            return this;
        };
        WorkFlow.prototype.step2 = function () {
            return this;
        };
        return WorkFlow;
    }());
    new WorkFlow().step1().step2();
    var MyFlow = /** @class */ (function (_super) {
        __extends(MyFlow, _super);
        function MyFlow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyFlow.prototype.next = function () {
            return this;
        };
        return MyFlow;
    }(WorkFlow));
    new MyFlow().next().step1().next().step2();
});
//这个可以保证父类和子类之间接口调用的连贯性
/**
 * @Author liming
 * @Date 2022/9/13 17:48
 **/
//1.原始类型
var bool = true;
var num = 123;
var str = 'abc';
// str = 123;
// 变量的数据类型不可以改变，不可以赋值
//2.数组类型
//2种声明方式是等价的
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 'abc', 3];
//联合数据类型，数组的元素既可以是number类型，也可以是string类型
//3.元祖类型:特殊的数组，它限定了数组元素的类型和个数(类型要匹配，不能多，也不能少)
var tuple1 = [0, '1'];
// let tuple2:[number,string] = ['1',0]
// let tuple3:[number,string] = [0,'1',2]
//元祖的越界问题：数组有一个push方法，元祖也可以使用——实际开发过程中，强烈不建议这样使用
tuple1.push(2);
//这个方法不会报错！！
console.log(tuple1);
//[0, '1', 2]
//TS是允许我们往元祖中插入新的元素的，但是等我们具体访问，则会出错！！
console.log(tuple1[0]);
console.log(tuple1[1]);
// console.log(tuple1[2])   //报错！！
//4.函数类型
var add1 = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; };
//TS具有类型推断功能，所以函数返回值的类型是可以省略的
//这里我们定义一个函数类型——冒号后面的就是类型！！
//这里compute就是函数类型，但是它没有具体的实现
var compute;
//我们这里来实现一下——等号后面就是实现！！
//在实现的过程中，函数参数的名称可以和定义的时候不一样，而且也不用指定具体的类型
compute = function (a, b) { return a + b; };
//5.对象类型——对象类型是小写的,字符串类型string也是小写
//错误定义对象类型的方法：
// let obj:object = {x:1,y:2};
// obj.x = 3;
//TS中不允许这样操作，因为我们只是简单的定义了obj是object类型，并没有指定它包含了哪些属性
//正确定义对象类型的方法：
var obj = { x: 1, y: 2 };
obj.x = 3;
//这样才可以修改对象中某个属性的值，因为前面具体的说明了这个对象有哪些属性，这些属性有哪些类型
//6.symbol类型
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); //false
//7.undefined和null类型
var un = undefined;
//如果被声明为了undefined，它们就不能被赋值给其他数据类型,null同理。
// un = 3;
//报错：Type '3' is not assignable to type 'undefined'.
var nu = null;
//反过来，其他变量可以被赋值给undefined和null吗？——也不行
num = undefined;
console.log(num);
//Type 'undefined' is not assignable to type 'number'.
// str = null
// console.log(str)
//Type 'null' is not assignable to type 'string'.
//TS官方文档中,【undefined和null是任何类型的子类型】，这说明它们可以被赋值给其他类型，不过我们需要做一些设置
//方法1：tsconfig.js中"strictNullChecks": false即可
//方法2：使用联合类型
//8.void类型——没有任何返回值的类型
//它可以让任何表达式返回undefined
//我们返回undefined最便捷的方法就是 void 0;\
//因为undefined在JS中不是保留字，我们甚至可以自己定义一个undefined来覆盖全局的undefined
//例如：
// (
//     function () {
//         var undefined = 100;
//         console.log(undefined)
//     }
// )()
//9.any类型——如果我们不指定变量的类型，它默认就是any,这和js就没有区别了
//所以，如果不是特殊情况，我们不建议使用any类型
var x;
x = 1;
x = [1, 2, 3];
x = function () { };
//10.never类型——表示永远不会有返回值的类型
//一个函数抛出一个异常，那这个函数永远不会有返回值
var error = function () {
    throw new Error('error');
};
//死循环函数，也是永远不会有返回值的
var endless = function () {
    while (true) {
    }
};
/**
 * @Author liming
 * @Date 2022/9/13 18:29
 **/
//枚举类型主要分为数字枚举和字符串枚举，用于解决下面这种问题：
/**
 * function initByRole(role){
 *     if(role === 1 || role === 2){
 *         //do sth
 *     }else if(role === 3 || role === 4){
 *         //do sth
 *     }else if(role === 5 || role === 6){
 *         //do sth
 *     }else{
 *         //do sth
 *     }
 * }
 */
//1.数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
/**
 * 枚举的实现原理：反向映射
 * "use strict";
 * var Role;
 * (function (Role) {
 *     Role[Role["Reporter"] = 0] = "Reporter";
 *     Role[Role["Developer"] = 1] = "Developer";
 *     Role[Role["Maintainer"] = 2] = "Maintainer";
 *     Role[Role["Owner"] = 3] = "Owner";
 *     Role[Role["Guest"] = 4] = "Guest";
 * })(Role || (Role = {}));
 */
//枚举非常像对象，我们打印一下看一下
//除了正常枚举成员之外，它还多了其他成员：我们既可以用枚举成员的名字来索引，也可以用值来索引
console.log(Role);
console.log(Role.Owner);
//2.字符串枚举——不可以进行反向映射，只有枚举成员的名字作为索引
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u60A8\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
//3.异构枚举——数字枚举和字符串枚举进行混用
//但这种情况容易引起混淆，所以不建议使用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "YES";
})(Answer || (Answer = {}));
//枚举成员的性质
// Role.Reporter = 5;
//枚举成员的值不可更改，只读
//报错：Attempt to assign to const or readonly variable
//枚举成员的类型分为2类，一类是const mumber(常量枚举)，第二类是computed member(需要被计算的枚举成员)
//第二类成员，不会在编译阶段被计算，而是会保留到程序的执行阶段
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["g"] = 1] = "g";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    // f,
    //需要被计算的枚举成员后面一定要赋一个初始值，不然报错——常量枚举后面则不用
    //Enum member must have initializer.
})(Char || (Char = {}));
console.log(Char);
//作用：我们不需要对象，而只需要对象的值时，就可以用常量枚举
//它可以减少我们在编译环节的代码
var month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */];
//编译后：let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */]
//这样代码会简介很多
//枚举类型
//在很多情况下，枚举和枚举成员都可以单独的作为一种类型存在
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
//情况1：枚举成员没有初始值
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
//情况2：枚举成员都是数字枚举
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
//情况3：枚举成员都是字符串枚举
var e = 3;
var f = 3;
//我们可以把任何的number类型赋值给枚举类型，它的取值也可以超出枚举成员的定义
// console.log(e === f)
//注意：2种不同类型的枚举是不可以进行比较的
var e1 = 1;
var e2;
var e3 = 1;
//e1,e2不同枚举成员类型，不可以比较
// console.log(e1 === e2)
//e1,e3是相同的枚举成员类型，可以比较
console.log(e1 === e3);
var g1 = G.b;
var g2 = G.a;
//而字符串枚举的值，只能是它自身
/**
 * @Author liming
 * @Date 2022/9/26 22:16
 **/
define("function", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //定义函数的4种方式
    function add1(x, y) {
        return x + y;
    }
    var add2;
    //注意：后3种只是函数类型的定义，而并没有真正的实现
    //在TS中对函数参数个数有严格要求(多一个少一个都不行)，形参和实参必须一一对应
    add1(1, 2);
    //注意：可选参数必须位于必选参数之后
    function add5(x, y) {
        return y ? x + y : x;
    }
    add5(2);
    //为参数提供默认值
    //注意：在必选参数前，默认参数是不可以省略的,必须明确的传入undefined来获取它的默认值
    function add6(x, y, z, q) {
        if (y === void 0) { y = 0; }
        if (q === void 0) { q = 1; }
        return x + y + z + q;
    }
    console.log(add6(1, undefined, 3), 'add');
    //剩余参数
    function add7(x) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        //这个是剩余参数，它是数组，和arguments对象是有区别的
        //https://www.jianshu.com/p/c3ee2c85f662
        return x + rest.reduce(function (pre, cur) { return pre + cur; });
    }
    console.log(add7(1, 2, 3, 4, 5));
    function add8() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var first = rest[0];
        if (typeof first === 'string') {
            return rest.join('');
        }
        if (typeof first === 'number') {
            return rest.reduce(function (pre, cur) { return pre + cur; });
        }
    }
    console.log(add8(1, 2));
    console.log(add8('a', 'b', 'c'));
    exports.default = {};
});
define("generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @Author liming
     * @Date 2022/10/5 20:49
     **/
    exports.default = {};
    //使用泛型定义一个函数
    function log(value) {
        console.log(value);
        return value;
    }
    //写法1：
    log(['a', 'b']);
    //写法2：使用类型推断
    log(['a', 'b']);
    var myLog = log;
    var myLog3 = log;
    var myLog4 = log;
    myLog4("1");
});
/**
 * @Author liming
 * @Date 2022/10/5 21:03
 **/
var Log1 = /** @class */ (function () {
    function Log1() {
    }
    Log1.prototype.run = function (value) {
        // static run(value:T){
        //泛型不能应用于类的静态成员
        console.log(value);
        return value;
    };
    return Log1;
}());
var log1 = new Log1();
log1.run(1);
var log2 = new Log1();
log2.run({ a: '当不指定泛型参数的时候，它就可以是任意值' });
function log(value) {
    //T继承了Length接口，这个表示T受到了一定的约束，就不再是任意类型都可以传了
    //输入的参数不管是什么类型，但是必须具有length属性
    console.log(value, value.length);
    return value;
}
log([1]);
log("123");
log({ length: 3 });
/**
 * @Author liming
 * @Date 2022/10/21 14:27
 **/
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('Hello Java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('Hello JavaScript');
    };
    return JavaScript;
}());
function isJava(lang) {
    //这个叫做类型谓词
    return lang.helloJava !== undefined;
}
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    //我们不知道程序在运行的时候，会传入什么样的参数，使得我们在每一处都要加上类型断言，这样代码可读性很差
    //而类型保护机制会对类型进行预判
    //方法0：使用类型断言
    // if((lang as Java).helloJava){
    //     (lang as Java).helloJava()
    // }else{
    //     (lang as JavaScript).helloJavaScript()
    // }
    //方法1：使用instanceof
    // if(lang instanceof Java){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    //方法2：使用in
    // if('java' in lang){
    //     //使用in关键字判断java属性是否在这个对象中
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    //方法3：使用typeof
    // if(typeof x === 'string'){
    //     x.length;
    // }else{
    //     x.toFixed(2);
    // }
    //方法4：创建一个类型保护函数
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    return lang;
}
// getLanguage(Type.Strong)
/**
 * @Author liming
 * @Date 2022/10/27 12:24
 **/
define("05_tsconfig/amd", ["require", "exports"], function (require, exports) {
    "use strict";
    var a = 1;
    return a;
});
/**
 * @Author liming
 * @Date 2022/9/13 16:38
 **/
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log([1, 2, [3, 4]].flat());
    var hello = "Hello TypeScript";
    document.querySelectorAll('.app')[0].innerHTML = hello;
});
/**
 * @Author liming
 * @Date 2022/9/26 21:37
 **/
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        //value.id++;
        //只读属性不允许修改
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
    ]
};
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B', age: 10}
//         //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
//         //但如果传入对象字面量的话，就不行
//     ]
// })
//解决方式1：把对象字面量赋值给变量
render(result);
//解决方式2：使用类型断言
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 18 }
        //它允许这种情况发生,只要传入的对象有id,name就行，有多余属性也行
        //但如果传入对象字面量的话，就不行
    ]
});
var chars = ['A', 'B'];
//使用接口定义函数
//之前写法
var add;
//这里是具体函数
var add3 = function (a, b) { return a + b; };
//把lib放在一个函数里面，这样就可以创建多个实例了，它也就不是单例模式了
function getLib() {
    var lib = (function () { });
    lib.version = '1.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
/**
 * @Author liming
 * @Date 2022/10/22 14:07
 **/
define("01_module/es6/b", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.str = void 0;
    // 导出常量
    exports.str = 'Hello';
});
/**
 * @Author liming
 * @Date 2022/10/22 14:07
 **/
define("01_module/es6/a", ["require", "exports", "01_module/es6/b"], function (require, exports, b_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hello = exports.G = exports.f = exports.c = exports.b = exports.a = void 0;
    // 单独导出
    exports.a = 1;
    // 批量导出
    var b = 2;
    exports.b = b;
    var c = 3;
    exports.c = c;
    // 导出函数
    function f() { }
    exports.f = f;
    // 导出时起别名
    function g() { }
    exports.G = g;
    // 默认导出，无需函数名
    function default_1() {
        console.log("I'm default");
    }
    exports.default = default_1;
    Object.defineProperty(exports, "hello", { enumerable: true, get: function () { return b_1.str; } });
});
/**
 * @Author liming
 * @Date 2022/10/22 14:07
 **/
define("01_module/es6/c", ["require", "exports", "01_module/es6/a", "01_module/es6/a", "01_module/es6/a"], function (require, exports, a_1, All, a_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    All = __importStar(All);
    a_2 = __importDefault(a_2);
    console.log(a_1.a, a_1.b, a_1.c);
    var p = {
        x: 1,
        y: 1
    };
    console.log(All, 'All');
    (0, a_2.default)();
});
/**
 * @Author liming
 * @Date 2022/10/22 14:16
 **/
define("01_module/es6/d", ["require", "exports"], function (require, exports) {
    "use strict";
    return function () {
        console.log("I'm default11111111");
    };
});
//这个语法会被编译为module.exports,就是顶级导出了
//此时就不能有其他导出了
// export let a = 1
define("01_module/node/a.node", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @Author liming
     * @Date 2022/10/22 14:14
     **/
    exports.default = {};
    var a = {
        x: 1,
        y: 2
    };
    // 整体导出
    module.exports = a;
});
/**
 * @Author liming
 * @Date 2022/10/22 14:14
 **/
// exports === module.exports
// exports就是module.exports的引用
// 导出多个变量
// module.exports = {}
exports.c = 3;
exports.d = 4;
/**
 * @Author liming
 * @Date 2022/10/22 14:14
 **/
define("01_module/node/c.node", ["require", "exports", "01_module/es6/d"], function (require, exports, c4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var c1 = require('./a.node');
    var c2 = require('./b.node');
    var c3 = require('../es6/a');
    console.log(c1);
    console.log(c2);
    // c3()
    console.log(c3, 'c3');
    c3.default();
    c4();
});
/**
 * @Author liming
 * @Date 2022/10/22 14:37
 **/
var Shape;
(function (Shape) {
    //这些变量只能在Shape命令空间之下可见
    var pi = Math.PI;
    function circle(r) {
        //如果想让成员全局可见的话，需要使用export关键字将它导出
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
    //注意：在命名空间中导出的成员是不可以重复定义的
    // export function square(x: number) {
    //     return x * x;
    // }
})(Shape || (Shape = {}));
//命名空间也是可以进行拆分的
/**
 * @Author liming
 * @Date 2022/10/22 14:37
 **/
///<reference path="a.ts"/>
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.circle(1));
console.log(Shape.square(1));
//注意：命名空间和模块不要混用
//不要在一个模块中使用命名空间
//命名空间最好在一个全局环境中使用
var circle = Shape.circle;
//注意：这里的import和模块中的import没有任何关系
console.log(circle(2));
/**
 * @Author liming
 * @Date 2022/10/22 14:56
 **/
define("03_merge/merge", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {};
    var a = {
        x: 1,
        y: 1,
        foo: function (bar) {
            return bar;
        }
    };
    //命名空间和函数的声明合并(注意：命名空间位置要放在后面)
    function Lib() {
    }
    (function (Lib) {
        Lib.version = '1.1';
    })(Lib || (Lib = {}));
    console.log(Lib.version);
    //命名空间和类的声明合并
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    (function (C) {
        C.state = 1;
        //这个就相当于给类添加了一个静态的属性
    })(C || (C = {}));
    console.log(C.state);
    //命名空间和枚举的合并
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Yellow"] = 1] = "Yellow";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    (function (Color) {
        function mix() { }
        Color.mix = mix;
        //相当于给枚举类型增加了一个方法
    })(Color || (Color = {}));
    console.log(Color);
});
/**
 * @Author liming
 * @Date 2022/10/27 12:06
 **/
var s = 'a';
/**
 * @Author liming
 * @Date 2022/10/27 12:11
 **/
var libs = {};
