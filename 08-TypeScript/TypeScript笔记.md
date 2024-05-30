# TypeScript笔记

> 2024年5月29日开始记录

[阮一峰 TypeScript 教程](https://typescript.p6p.net/)

## `tsconfig.json`配置详解

[tsconfig.json详解](https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html)

## 知识点

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