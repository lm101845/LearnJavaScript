/*
 * @Author: liming
 * @Date: 2021-08-10 15:36:49
 * @LastEditTime: 2021-08-10 15:40:05
 * @FilePath: \04-this有关\02-开课吧-讲得好\01-demo-this指向.js
 */
// 我想了一下，用HTML写太麻烦，还是直接写js吧
      var person = {
        name: "张三",
        describe: function () {
          return "姓名：" + this.name;
        },
      };

      console.log(person.describe());
      // "姓名：张三"

      /**
       * 上面代码中，this.name表示name属性所在的那个对象。由于this.name是在describe方法中调用，而describe方法所在的当前对象是person，因此this指向person，this.name就是person.name。

由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的。
       */

      var A = {
        name: "张三",
        describe: function () {
          return "姓名：" + this.name;
        },
      };

      var B = {
        name: "李四",
      };

      B.describe = A.describe;
      console.log(B.describe());
      // "姓名：李四"

