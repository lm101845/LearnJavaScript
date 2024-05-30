/*
 * @Author: liming
 * @Date: 2021-11-26 16:35:39
 * @LastEditTime: 2021-11-26 16:37:48
 * @FilePath: \02-手册指南\04-函数\09-重载.ts
 */

/**
 * JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
 */

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x:any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
let pickedCard11 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard11.card + " of " + pickedCard11.suit);

let pickedCard12 = pickCard(15);
alert("card: " + pickedCard12.card + " of " + pickedCard12.suit);
