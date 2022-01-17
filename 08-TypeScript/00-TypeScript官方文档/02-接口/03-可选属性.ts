/*
 * @Author: liming
 * @Date: 2021-11-24 13:46:22
 * @LastEditTime: 2021-11-24 16:41:04
 * @FilePath: \02-手册指南\02-接口\03-可选属性.ts
 */

/**
 * 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 
 * 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
 */
(function () {
    interface SquareConfig {
  // 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
  color?: string;
  width?: number;
}

    function createSquare(config: SquareConfig): { color: string; area: number } {
    //表示返回值类型是{ color: string; area: number }这样的对象类型
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
    console.log(mySquare);
    
    /**
     * 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
     *  比如，我们故意将createSquare里的color属性名拼错，就会得到一个错误提示：
    */
})()
