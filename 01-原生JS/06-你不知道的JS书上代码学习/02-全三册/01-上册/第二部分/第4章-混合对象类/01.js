/**
 * @Author liming
 * @Date 2024/5/27 17:48
 **/
var Something = {
    cool: function() {
        this.greeting = "Hello World";
        this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1
var Another = {
    cool: function() {
// 隐式把 Something 混入 Another
        Something.cool.call( this );
    }
};
Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1 （count 不是共享状态）