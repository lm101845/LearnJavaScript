/*
 * @Author: liming
 * @Date: 2021-11-24 17:05:10
 * @LastEditTime: 2021-11-24 17:23:23
 * @FilePath: \02-手册指南\02-接口\05-额外的属性检查.ts
 */
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config:SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// let mySquare2 = createSquare({coloUr: "black", width: 100});

// 绕开这些检查非常简单。 最简便的方法是使用类型断言：
//let mySquare2 = createSquare({ coloUr: "black", width: 100 } as SquareConfig);


// 然而，最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
//  如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

/**
 * 我们稍后会讲到索引签名，但在这我们要表示的是SquareConfig可以有任意数量的属性，
 * 并且只要它们不是color和width，那么就无所谓它们的类型是什么。
 */

let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
