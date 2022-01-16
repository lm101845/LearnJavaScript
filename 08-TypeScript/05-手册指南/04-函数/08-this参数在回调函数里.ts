/*
 * @Author: liming
 * @Date: 2021-11-26 16:15:49
 * @LastEditTime: 2021-11-26 16:34:21
 * @FilePath: \02-手册指南\04-函数\08-this参数在回调函数里.ts
 */

/**
 * 你可以也看到过在回调函数里的this报错，当你将一个函数传递到某个库函数里稍后会被调用时。 因为当回调被调用的时候，它们会被当成一个普通函数调用， this将为undefined。 稍做改动，你就可以通过 this参数来避免错误。 首先，库函数的作者要指定 this的类型：
 */
interface UIElement {
  addClickListener(onClick:(this:void,e:Event) => void): void
}

class Handler {
  info!: string;
  // onClickBad(this: Handler, e: Event) {
  onClickBad(this: void, e: Event) {
    // oops, used this here. using this callback would crash at runtime

    // can't use this here because it's of type void!
    console.log("clicked!");
    // this.info = e.message;
  }
}

let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!
