# TypeScript笔记

> 2024年5月29日开始记录

[阮一峰 TypeScript 教程](https://typescript.p6p.net/)

## `tsconfig.json`配置详解

[tsconfig.json详解](https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html)

## 知识点

### `never`和`unknown`类型

为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript 还引入了“空类型”的概念，即该类型为空，不包含任何值。

由于不存在任何属于“空类型”的值，所以该类型被称为`never`，即不可能有这样的值。

~~~ts
let x: never;
~~~

上面示例中，变量`x`的类型是`never`，就不可能赋给它任何值，否则都会报错。

`never`类型的使用场景，主要是在一些类型运算之中，保证类型运算的完整性，详见后面章节。另外，不可能返回值的函数，返回值的类型就可以写成`never`，详见《函数》一章。

如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于`never`类型。

~~~ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    x; // never 类型
  }
}
~~~

上面示例中，参数变量`x`可能是字符串，也可能是数值，判断了这两种情况后，剩下的最后那个`else`分支里面，`x`就是`never`类型了。

`never`类型的一个重要特点是，可以赋值给任意其他类型。

~~~ts
function f(): never {
  throw new Error("Error");
}

let v1: number = f(); // 不报错
let v2: string = f(); // 不报错
let v3: boolean = f(); // 不报错
~~~

上面示例中，函数`f()`会抛错，所以返回值类型可以写成`never`，即不可能返回任何值。各种其他类型的变量都可以赋值为`f()`的运行结果（`never`类型）。

为什么`never`类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript 就相应规定，任何类型都包含了`never`类型。因此，`never`类型是任何其他类型所共有的，TypeScript 把这种情况称为“底层类型”（bottom type）。

总之，TypeScript 有两个“顶层类型”（`any`和`unknown`），但是“底层类型”只有`never`唯一一个。

#### 疑问1：如何理解never类型可以分配给其他任何类型

在 TypeScript 中，`never` 类型表示的是那些永不存在的值的类型。例如，`never` 是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

当你尝试将一个 `never` 类型的值赋值给其他类型的变量时，TypeScript 不会报错，因为从逻辑上讲，你实际上无法赋值一个 `never` 类型的值。如果你能够赋值，那么这个值的类型就不是 `never`。

这是 TypeScript 类型系统的一部分，用于处理永不可能发生的情况。在实际的编程中，你可能很少直接使用 `never` 类型，但它在某些特殊情况下可能会出现。

以下是一个 `never` 类型的例子：

```typescript
function error(message: string): never {
    throw new Error(message);
}

let x: number;

// No error, even though "error" function has "never" return type
x = error("Something went wrong");
```

在这个例子中，`error` 函数的返回类型是 `never`，这表示这个函数永远不会有返回值。然后我们尝试将 `error` 函数的返回值赋值给一个 `number` 类型的变量 `x`，TypeScript 不会报错，因为从逻辑上讲，`error` 函数永远不会返回一个值，所以这个赋值操作实际上永远不会发生。

#### 疑问2：如何理解底层和顶层

> TypeScript 有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个，如何理解顶层和底层

在 TypeScript 中，"顶层类型" 和 "底层类型" 是用来描述类型系统的层次结构的术语。

"顶层类型"（也被称为 "最大类型"）是可以赋值给任何其他类型的类型。在 TypeScript 中，`any` 和 `unknown` 是顶层类型。这意味着你可以将任何类型的值赋值给 `any` 或 `unknown` 类型的变量。

例如：

```typescript
let a: any = 123; // OK
a = 'hello'; // OK
a = true; // OK

let u: unknown = 123; // OK
u = 'hello'; // OK
u = true; // OK
```

"底层类型"（也被称为 "最小类型"）是可以被赋值给任何其他类型的类型。在 TypeScript 中，`never` 是底层类型。这意味着你可以将 `never` 类型的值赋值给任何类型的变量，但是你不能将其他类型的值赋值给 `never` 类型的变量。

例如：

```typescript
let n: never;

let b: boolean = n; // OK
let s: string = n; // OK
let num: number = n; // OK
```

这些类型的存在，使得 TypeScript 的类型系统能够更好地处理各种复杂的类型场景，提供了更强大的类型安全性。

### 疑问3

在 TypeScript 中，"顶层类型"和"底层类型"是描述类型系统层次结构的术语。

"顶层类型"是指可以赋值给任何其他类型的类型。在 TypeScript 中，`any` 和 `unknown` 是顶层类型。你可以把它们想象成一个大**容器(即左边的变量，它是容器，用来装东西)**，可以接受任何类型的值。

例如，你可以把数字、字符串、布尔值等任何类型的值赋值给 `any` 或 `unknown` 类型的变量：

```typescript
let a: any = 123; // OK
a = 'hello'; // OK
a = true; // OK

let u: unknown = 123; // OK
u = 'hello'; // OK
u = true; // OK
```

"底层类型"是指可以被赋值给任何其他类型的类型。在 TypeScript 中，`never` 是底层类型。你可以把它想象成一个小容器，它不能接受任何类型的值，但它可以被赋值给任何类型的变量。

例如，你可以把 `never` 类型的值赋值给数字、字符串、布尔值等任何类型的变量，但你不能把其他类型的值赋值给 `never` 类型的变量：

```typescript
let n: never;

let b: boolean = n; // OK
let s: string = n; // OK
let num: number = n; // OK
```

简单来说，**"顶层类型"就像是一个无底洞，可以接受任何类型的值；"底层类型"就像是一个空洞，不能接受任何类型的值，但它可以适应任何类型的容器**。

### 类型断言

TypeScript 只允许类型断言转换为更具体或不太具体的类型版本。此规则可防止“不可能”的强制，例如：

~~~ts
const x = "hello" as number;
~~~

将类型 string 转换为类型 number 可能是错误的，因为两种类型都没有充分重叠。如果这是有意的，请先将表达式转换为  any 或  unknown （ unknown ，我们将在后面介绍），然后是所需的类型：

~~~ts
const x = ("hello" as unknown) as number;
~~~

### 文字/数字类型

拥有一个只能有一个值的变量并没有多大用处！
但是通过将文字组合成联合，你可以表达一个更有用的概念——例如，只接受一组特定已知值的函数：

~~~ts
function printText(s: string, alignment: "left" | "right" | "center") {
 // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
~~~

数字文字类型的工作方式相同：

~~~ts
function compare(a: string, b: string): -1 | 0 | 1 {
 return a === b ? 0 : a > b ? 1 : -1;
}
~~~

### as const 断言

[as const 断言-阮一峰](https://typescript.p6p.net/typescript-tutorial/assert.html#as-const-%E6%96%AD%E8%A8%80)

### in操作符

#### in 运算符

JavaScript 语言中，`in`运算符用来确定对象是否包含某个属性名。

javascript

```
const obj = { a: 123 };

if ("a" in obj) console.log("found a");
```

上面示例中，`in`运算符用来判断对象`obj`是否包含属性`a`。

`in`运算符的左侧是一个字符串，表示属性名，右侧是一个对象。它的返回值是一个布尔值。

TypeScript 语言的类型运算中，`in`运算符有不同的用法，用来取出（遍历）联合类型的每一个成员类型。

typescript

```ts
type U = "a" | "b" | "c";

type Foo = {
  [Prop in U]: number;
};
// 等同于
type Foo = {
  a: number;
  b: number;
  c: number;
};
```

上面示例中，`[Prop in U]`表示依次取出联合类型`U`的每一个成员。

上一小节的例子也提到，`[Prop in keyof Obj]`表示取出对象`Obj`的每一个键名。

### 类型谓词( is关键字 )

TypeScript 中的 `is` 关键字，它被称为类型谓词，用来判断一个变量属于某个接口或类型。

`is`运算符用来描述返回值属于`true`还是`false`。

```ts
type Fish = {
 name: string
 swim: () => void
}
 
type Bird = {
 name: string
 fly: () => void
}
 
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

这段代码定义了两种类型：`Fish` 和 `Bird`，并定义了一个函数 `isFish`，用于判断一个对象是否为 `Fish` 类型。

`Fish` 类型有两个属性：`name`（一个字符串）和 `swim`（一个没有参数和返回值的函数）。

`Bird` 类型也有两个属性：`name`（一个字符串）和 `fly`（一个没有参数和返回值的函数）。

`isFish` 函数接受一个参数 `pet`，这个参数可以是 `Fish` 类型或 `Bird` 类型。函数返回一个布尔值，表示 `pet` 是否为 `Fish` 类型。

在函数体中，`(pet as Fish).swim !== undefined` 是一个类型断言，它尝试将 `pet` 当作 `Fish` 类型来处理，并检查 `swim` 属性是否存在。如果 `swim` 属性存在，那么 `pet` 就是 `Fish` 类型，函数返回 `true`；否则，函数返回 `false`。(如果不存在，就返回false)

这种函数通常用于类型保护，在 TypeScript 中，类型保护是一种表达式，它在编译时期就能通过类型检查。如果这种表达式在运行时期为 `true`，那么在这个表达式的作用域中，变量的类型就是该类型保护所指定的类型。

`is`运算符总是用于描述函数的返回值类型，写法采用`parameterName is Type`的形式，即左侧为当前函数的参数名，右侧为某一种类型。它返回一个布尔值，表示左侧参数是否属于右侧的类型。

```ts
type A = { a: string };
type B = { b: string };

function isTypeA(x: A | B): x is A {
  if ("a" in x) return true;
  return false;
}
```

上面示例中，返回值类型`x is A`可以准确描述函数体内部的运算逻辑。

#### 有关问题

> `pet is Fish`是什么意思，它是boolean类型吗

`pet is Fish` 是 TypeScript 中的类型谓词。类型谓词是一种特殊的返回类型，用于在编译时期就能通过类型检查的表达式。在这个例子中，`pet is Fish` 表示的是 "参数 `pet` 是 `Fish` 类型"。

类型谓词的格式为 `参数 is 类型`，在这个例子中，参数是 `pet`，类型是 `Fish`。如果 `isFish` 函数返回 `true`，那么 TypeScript 编译器就会知道在这个函数返回 `true` 的代码块中，`pet` 的类型是 `Fish`。

虽然类型谓词在运行时的行为类似于 `boolean` 类型（因为它实际上是返回 `true` 或 `false`），但在编译时，它提供了额外的类型信息，这是普通的 `boolean` 类型无法提供的。因此，`pet is Fish` 不应被视为 `boolean` 类型，而应被视为一种特殊的返回类型。

#### 代码含义

~~~ts
function getSmallPet(): Fish | Bird {
    
 let fish: Fish = {
  name: 'gold fish',
  swim: () => {
 }
}
 
 let bird: Bird = {
  name: 'sparrow',
  fly: () => {
 }
}
 return true ? bird : fish
 //这里true只是随便写，实际根据情况进行判断
}
// 这里 pet 的 swim 和 fly 都可以访问了
let pet = getSmallPet()
if (isFish(pet)) {
 pet.swim()
} else {
 pet.fly()
}
~~~

这段代码定义了一个函数 `getSmallPet`，该函数返回一个 `Fish` 类型或 `Bird` 类型的对象。在函数体中，首先定义了一个 `Fish` 类型的对象 `fish` 和一个 `Bird` 类型的对象 `bird`。然后，函数返回 `bird` 或 `fish`，这取决于三元运算符 `true ? bird : fish` 的结果。

在这个例子中，因为条件始终为 `true`，所以函数始终返回 `bird`。这是一个简化的示例，实际的代码中可能会有更复杂的逻辑来决定返回 `bird` 还是 `fish`。

然后，代码创建了一个 `pet` 对象，该对象是 `getSmallPet` 函数的返回值。因此，`pet` 是一个 `Bird` 类型的对象。

接下来，代码使用 `isFish` 函数来检查 `pet` 是否为 `Fish` 类型。如果 `pet` 是 `Fish` 类型，那么就调用 `pet` 的 `swim` 方法；否则，就调用 `pet` 的 `fly` 方法。在这个例子中，因为 `pet` 是 `Bird` 类型，所以会调用 `pet` 的 `fly` 方法。

总的来说，这段代码展示了如何使用 TypeScript 的类型保护和类型断言来处理联合类型。

## 常见问题

### 问题1

> **为什么TS中接口可以被extends，而Java中接口只能被implements**

这是因为TypeScript和Java的语法和设计理念有所不同。

在Java中，接口是一种约束行为的机制，它定义了实现类必须要实现的方法。一个类可以实现多个接口，通过使用关键字"implements"来表示。

而在TypeScript中，接口不仅可以约束行为，还可以约束结构。接口可以描述对象的形状，包括属性、方法和类型。通过使用关键字"extends"，一个接口可以继承另一个接口的属性和方法，并且可以继承多个接口。

因此，TypeScript的接口更加灵活，可以用于描述对象的结构和行为，而Java的接口主要用于约束行为。

### 问题2

> **TS中type和interface的区别**

在 TypeScript 中，`type` 和 `interface` 都可以用来定义类型，但它们之间存在一些关键的区别：

1. **扩展和实现**：`interface` 可以被扩展（extends）和实现（implements），这使得你可以创建新的接口，这些接口继承自其他接口，或者创建类，这些类实现了特定的接口。而 `type` 不能被扩展或实现。

2. **合并声明**：`interface` 支持合并声明。如果你在多个地方声明了同名的接口，那么它们将被合并为一个接口。`type` 不支持合并声明。

3. **更复杂的类型**：`type` 可以表示更复杂的类型，包括联合类型（Union）、交叉类型（Intersection）、元组（Tuple）、映射类型（Mapped types）等。`interface` 不能表示这些类型。

以下是 `type` 和 `interface` 的使用示例：

```typescript
// 使用 interface 定义类型
interface Person {
  name: string;
  age: number;
}

// 使用 type 定义类型
type Animal = {
  name: string;
  age: number;
};

// 使用 interface 扩展类型
interface Employee extends Person {
  salary: number;
}

// 使用 type 表示复杂的类型
type StringOrNumber = string | number;
```

总的来说，如果你需要定义一个对象的结构，或者需要扩展或实现类型，那么 `interface` 是一个好的选择。如果你需要表示更复杂的类型，或者需要使用联合类型、交叉类型等，那么 `type` 是一个好的选择。

### 问题3

> **TS中`typeof`的作用**

在 TypeScript 中，`typeof` 是一个关键字，用于获取一个变量或表达式的类型。这在 TypeScript 中是非常有用的，因为它允许你创建新的类型，这些类型是基于运行时的值的类型。

例如，假设你有一个对象 `person`，你想创建一个新的类型，这个类型具有与 `person` 相同的属性和类型。你可以使用 `typeof` 关键字来实现这一点：

```typescript
const person = {
  name: 'John',
  age: 30
};

type PersonType = typeof person;
```

在这个例子中，`PersonType` 现在是一个具有 `name` 和 `age` 属性的类型，这些属性的类型分别是 `string` 和 `number`，这与 `person` 对象的属性和类型相匹配。

注意，`typeof` 关键字在 TypeScript 中的行为与在 JavaScript 中稍有不同。在 JavaScript 中，`typeof` 返回一个表示类型的字符串，例如 `'string'`、`'number'`、`'object'` 等。而在 TypeScript 中，`typeof` 返回的是一个类型，而不是一个字符串。

### 问题4

>TS中`<>`语法作用

在 TypeScript 中，`<>` 通常用于两个主要的场景：类型断言和泛型。

1. **类型断言**：`<>` 可以用于类型断言，这是一种告诉 TypeScript 编译器，“相信我，我知道我在做什么”的方式。例如，如果你有一个 `any` 类型的变量，你可以使用类型断言来告诉 TypeScript 这个变量的实际类型：

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

在这个例子中，`<string>someValue` 是一个类型断言，表示我们知道 `someValue` 实际上是一个字符串。

2. **泛型**：`<>` 也用于定义和使用泛型。泛型是一种在定义函数、接口或类时不预先指定具体的类型，而在使用时再指定类型的方式。例如，你可以定义一个返回参数相同的函数：

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

在这个例子中，`T` 是一个类型变量，它代表任何类型。在函数调用时，我们使用 `<string>` 来指定 `T` 的具体类型为 `string`。

注意：在 JSX 语法中，由于 `<>` 被用于表示 JSX 标签，所以类型断言必须使用 `as` 语法，不能使用 `<>` 语法。

### 问题5
>

### 问题6
>

### 问题7
>

### 问题8
>

### 问题9
>

### 问题10
>

### 问题11
>

### 问题12
>

### 问题13

## TS代码分析

> 2023年11月9日14:14:45

### 示例1

~~~ts
export declare function legacy_createStore<S, A extends Action, Ext, StateExt>(
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<Ext, StateExt>
): Store<S & StateExt, A> & Ext
~~~

你给出的代码是 TypeScript 中用于创建 store 的一个函数声明，这通常与 Redux 库一起使用。这段代码中涉及的类型参数和具名参数都是用于定义和增强 store 的。

让我们逐一解释每个部分：

1. `export declare function legacy_createStore`: 这是一个导出的函数声明，函数名为 `legacy_createStore`。
2. `<S, A extends Action, Ext, StateExt>`: 这是类型参数列表。你可以理解为这是为函数 `legacy_createStore` 定义了几个类型参数，这些类型参数在函数的其余部分被使用。


	* `S`: 这个类型参数代表 store 的初始状态。
	* `A extends Action`: 这个类型参数 `A` 继承自 `Action`，表示 action 的类型。
	* `Ext`: 这个类型参数用于表示 enhancer 的类型。
	* `StateExt`: 这个类型参数用于表示扩展状态的类型。
3. `(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S & StateExt, A> & Ext`: 这是函数的具名参数和返回类型声明。


	* `reducer: Reducer<S, A>`: 这是一个具名参数，类型为 `Reducer<S, A>`。`Reducer<S, A>` 是一个函数，它接收当前的状态 `S` 和一个 action `A`，然后返回一个新的状态。
	* `enhancer?: StoreEnhancer<Ext, StateExt>`: 这是另一个具名参数，它是一个可选参数。它的类型是 `StoreEnhancer<Ext, StateExt>`，这是一个函数，用于增强 store。
	* 返回类型: `Store<S & StateExt, A> & Ext`: 这是函数的返回类型。`Store<S & StateExt, A>` 表示一个具有指定状态类型和 action 类型的 store。`& Ext` 表示这个 store 还具有 `Ext` 类型的额外接口。

这个函数 `legacy_createStore` 的目的是为了创建一个具有特定状态类型、action 类型和额外接口的 store。store 是 Redux 中用于管理应用状态的核心概念。

### 示例2

~~~ts
export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S
~~~

你给出的代码片段是 TypeScript 中的一种类型定义，具体来说是一种泛型 reducer 类型。让我们逐行解析它：

1. `export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S`:

* `export type`: 这是 TypeScript 的关键字，用于声明一个导出的类型。类型是用来描述值的结构或行为的。
* `Reducer`: 这是你定义的新类型的名称。
* `<S = any, A extends Action = AnyAction>`: 这是类型参数的声明。有两个参数，一个是 `S` 默认值为 `any`，另一个是 `A` 默认值为 `AnyAction`。这里，`any` 和 `AnyAction` 是类型，表示任何值都可以。
* `(state: S | undefined, action: A)`: 这是函数的参数列表。`state` 参数可能是 `S` 类型的值或者 `undefined`，`action` 参数是 `A` 类型的值。
* `=> S`: 这是函数的返回类型。函数的结果是 `S` 类型的值。

总的来说，这个类型定义了一个名为 `Reducer` 的泛型函数，该函数接收两个参数：`state` 和 `action`，并返回一个 `S` 类型的状态。这种类型经常在 Redux 中用于描述如何根据一个 action 来更新 state。

### 示例3

~~~ts
type RootState = ReturnType<typeof store.getState>
~~~

在上面的代码片段中，`type RootState = ReturnType<typeof store.getState>` 是 TypeScript 中的一种类型定义方式。让我们逐步解析这个语句：

1. `type`: 这是 TypeScript 关键字，用于声明一个新的类型。
2. `RootState`: 这是你定义的新类型的名称。
3. `=`: 这是 TypeScript 中的赋值操作符，用于将右侧的类型赋值给左侧的 `RootState` 类型。
4. `ReturnType<typeof store.getState>`: 这是通过使用 `ReturnType` 类型和 `typeof` 操作符来获取 `store.getState` 的返回类型。


	* `ReturnType`: 这是一个 TypeScript 类型别名，用于获取函数的返回类型。它可以用于任何函数表达式或箭头函数。
	* `typeof store.getState`: 这里使用 `typeof` 操作符来获取 `store.getState` 的类型。`store.getState` 可能是一个函数或对象，使用 `typeof` 可以获取它的类型。

通过使用上述语句，你告诉 TypeScript，`RootState` 应该与 `store.getState` 的返回类型相同。换句话说，`RootState` 类型应该与 `store.getState` 返回的值相对应。

这样的类型定义可以帮助你确保 `RootState` 的值与 `store.getState` 的返回值在类型上是匹配的，从而提供更好的类型安全性。