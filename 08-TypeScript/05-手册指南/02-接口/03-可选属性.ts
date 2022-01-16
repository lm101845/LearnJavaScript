/*
 * @Author: liming
 * @Date: 2021-11-24 13:46:22
 * @LastEditTime: 2021-11-24 16:41:04
 * @FilePath: \02-手册指南\02-接口\03-可选属性.ts
 */
interface SquareConfig {
  // 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
