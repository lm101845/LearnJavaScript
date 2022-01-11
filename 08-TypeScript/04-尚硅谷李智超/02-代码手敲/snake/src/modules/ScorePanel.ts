/*
 * @Author: liming
 * @Date: 2021-08-09 13:11:44
 * @LastEditTime: 2021-08-09 13:13:14
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\snake\src\modules\ScorePanel.ts
 */
//定义表示记分牌的类
class ScorePanel {
  //按理说应该私有化，这里就省事了
  score = 0;
  //一上来分数是0
  level = 1;
  //我们需要把2个元素给存起来
  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  //设置一个变量限制等级
  maxLevel: number;

  //设置一个变量表示多少分升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    //   这个是ES6语法，表示默认值，你没有传参，就使用你传的参数，你没传，就用默认值
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  //设置一个加分的方法
  addScore() {
    //使分数自增
    this.score++;
    this.scoreEle.innerHTML = this.score + "";
    //判断分数是多少
    if (this.score % 10 === 0) {
      //表示每10分升一级
      this.levelUp();
    }
  }

  //提升等级的方法
  //我什么时候升级？必须要满足了一定条件才升级。比如得了10分才升级等
  levelUp() {
    //需要给等级上限，等级越高蛇的移速越快
    if (this.level < this.maxLevel) {
      //只有等级小于10的时候我才让你升级
      this.levelEle.innerHTML = ++this.level + "";
      // 这个是另一种写法
    }
  }
}

const scorePanel = new ScorePanel();
// scorePanel.addScore()
// scorePanel.addScore()
// scorePanel.addScore()

// for (let i = 0; i < 100; i++) {
//     scorePanel.addScore()
// }
export default ScorePanel;
