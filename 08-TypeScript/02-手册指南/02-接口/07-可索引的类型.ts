/*
 * @Author: liming
 * @Date: 2021-11-24 17:34:08
 * @LastEditTime: 2021-11-24 17:51:34
 * @FilePath: \02-手册指南\02-接口\07-可索引的类型.ts
 */
interface StringArray {
  [index:number]:string
}

let myArray: StringArray;

myArray = ["Bob", "Fred"];

let myStr: string = myArray[0]

/**
 * 上面例子里，我们定义了StringArray接口，它具有索引签名。 
 * 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
 */

/**
 * TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，
 * 但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
 */

class Animal {
  name: string | undefined;
}

class Dog extends Animal {
  breed: string | undefined;
}

/**
 * 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
 */

interface NotOkay {
  [x: string]: Animal;
  // [x: number]: Animal;
  [x: number]: Dog;
}


interface NumberDictionary {
  [index: string]: number;
  length: number;
  //name: string; //错误，`name`的类型与索引类型返回值的类型不匹配

  //最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
//myArray2[2] = "Mallory"; // 错误!
//你不能设置myArray[2]，因为索引签名是只读的。
