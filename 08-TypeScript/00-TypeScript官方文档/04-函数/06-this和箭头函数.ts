/*
 * @Author: liming
 * @Date: 2021-11-26 15:27:44
 * @LastEditTime: 2021-11-26 15:44:01
 * @FilePath: \02-手册指南\04-函数\06-this和箭头函数.ts
 */
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return  () => {
      let pickedCard = Math.floor(Math.random() * 52);
      // pickedCard的范围是[0,51]
      let pickedSuit = Math.floor(pickedCard / 13);
      //pickedSuit的范围是[0,3]
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
