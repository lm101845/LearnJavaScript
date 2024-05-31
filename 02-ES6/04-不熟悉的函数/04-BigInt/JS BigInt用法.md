# JS BigInt用法

`BigInt` 是 JavaScript 中的一个内置对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。这在处理大整数时非常有用，因为 JavaScript 的 `Number` 类型只能安全地表示和操作 `2^53 - 1` 以下的整数。

创建 `BigInt` 的方式有两种：

1. 通过在整数的末尾添加 `n` 来创建一个 `BigInt` 字面量。

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
```

2. 通过 `BigInt` 函数将字符串、数字或布尔值转换为 `BigInt`。

```javascript
let bigIntFromString = BigInt("1234567890123456789012345678901234567890");
let bigIntFromNumber = BigInt(10); // 注意：只有当数字在安全整数范围内时，才能从数字创建 BigInt
```

`BigInt` 可以使用大多数数学运算符，如 `+`, `-`, `*`, `**` 和 `%`。

```javascript
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = 10n;

console.log(bigInt1 + bigInt2); // 1234567890123456789012345678901234578900n
console.log(bigInt1 * bigInt2); // 12345678901234567890123456789012345678900n
```

但是，不能将 `BigInt` 与 `Number` 进行混合运算，这会导致错误。

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
let num = 10;

console.log(bigInt + num); // TypeError: Cannot mix BigInt and other types
```

如果需要将 `BigInt` 与 `Number` 进行混合运算，需要先将 `BigInt` 转换为 `Number`，或者将 `Number` 转换为 `BigInt`。但是，将 `BigInt` 转换为 `Number` 可能会丢失精度。

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
let num = 10;

console.log(Number(bigInt) + num); // 注意：可能会丢失精度
console.log(bigInt + BigInt(num));
```

`BigInt` 也可以使用比较运算符，如 `==`, `===`, `<`, `>`, `<=` 和 `>=`。

```javascript
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = 10n;

console.log(bigInt1 > bigInt2); // true
console.log(bigInt1 === bigInt2); // false
```

但是，`BigInt` 不能用于 `Math` 对象的方法，也不能用于需要使用 `Number` 类型的情况，如数组的索引或 `Number` 对象的方法。