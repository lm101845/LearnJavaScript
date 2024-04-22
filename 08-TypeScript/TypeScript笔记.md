# TypeScript笔记

## 问题

### 为什么TS中接口可以被extends，而Java中接口只能被implements

这是因为TypeScript和Java的语法和设计理念有所不同。

在Java中，接口是一种约束行为的机制，它定义了实现类必须要实现的方法。一个类可以实现多个接口，通过使用关键字"implements"来表示。

而在TypeScript中，接口不仅可以约束行为，还可以约束结构。接口可以描述对象的形状，包括属性、方法和类型。通过使用关键字"extends"，一个接口可以继承另一个接口的属性和方法，并且可以继承多个接口。

因此，TypeScript的接口更加灵活，可以用于描述对象的结构和行为，而Java的接口主要用于约束行为。

## 代码示例

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