/*
 * @Author: liming
 * @Date: 2021-08-09 20:40:41
 * @LastEditTime: 2021-08-09 21:04:14
 * @FilePath: \01-尚硅谷李智超TS\02-代码手敲\snake\src\modules\Snake.ts
 */
class Snake {
  //表示蛇头的元素
  head: HTMLElement;
  //蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;
  //HTMLCollection是一个集合，这个集合会实时刷新的
    constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector("#snake>div") as HTMLElement;
    // querySelector只会取一个，就是第一个
    // 类型断言
    this.bodies = this.element.getElementsByTagName("div");
  }

  //获取蛇的坐标(蛇头坐标)
  get X() {
    return this.head.offsetLeft;
  }

  //获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    this.head.style.left = value + "px";
  }

  set Y(value) {
    this.head.style.top = value + "px";
    }
    
    //蛇增加身体的方法
    addBody() {
      //向element中添加一个div
      this.element.insertAdjacentHTML("beforebegin", "<div></div>");
      //insertAdjacentElement这个方法我从来都没见过。。。
    }

}