/*
 * @Author: liming
 * @Date: 2021-08-09 13:10:45
 * @LastEditTime: 2021-08-09 13:11:31
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\snake\src\modules\Food.ts
 */
//先定义类
//定义食物类Food——吃完就加分，不过食物和食物之间是一样的，吃完都是只加一分
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        //获取页面中的food元素，并将其赋值给element
        this.element = document.getElementById('food')!
        //这个元素不可能为空，所以我们直接在后面加一个叹号，表示没问题
    }
    //蛇迟到食物的时候，食物要消失，所以必须要有一个方法来获取到食物的坐标
    //定义一个获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft 
    }

    //定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop 
    }

    //当蛇吃到食物的时候，食物要出现在一个随机的位置
    change() {
        // this.element.style.left = '80px'
        // this.element.style.top = '180px'

        //要生成一个随机的位置(食物的左边范围只能在墙里面)
        //左边偏移量最小为0，右边偏移量为屏幕宽度-食物大小(300-10)
        //上边偏移量最小为0,下边偏移量为屏幕高度-食物大小(300-10)
        // 蛇移动一次就是一格，一个的大小就是10
        // 并且食物的坐标一定要是整10的，否则蛇就吃不到它

        // Math.round(Math.random() * 290);
        // 四舍五入取整，得到0-290之间的整数
        //Math.round(Math.random() * 29);   //[0,29) =>四舍五入取整=>[0,29]
        let top = Math.round(Math.random() * 29)*10;   //[0,29)*10 =>四舍五入取整=>[0,290]且是10的倍数
        let left = Math.round(Math.random() * 29) * 10;   //[0,29)*10 =>四舍五入取整=>[0,290]且是10的倍数
        
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

//测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);


export default Food