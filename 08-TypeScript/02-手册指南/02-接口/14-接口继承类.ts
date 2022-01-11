/*
 * @Author: liming
 * @Date: 2021-11-25 10:32:40
 * @LastEditTime: 2021-11-25 10:36:09
 * @FilePath: \02-手册指南\02-接口\14-接口继承类.ts
 */

/**
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。
 *  这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 
这个子类除了继承至基类外与基类没有任何关系。 例：
 */

class Control {
  private state:any
}

interface SelectableControl extends Control {
  select():void
}

class Button extends Control implements SelectableControl {
  select() {
    // ...
  }
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
// 类型 "Image2" 中缺少属性 "state"，但类型 "SelectableControl" 中需要该属性。
// class Image2 implements SelectableControl {
//     select() { }
// }

class Location2 {

}
