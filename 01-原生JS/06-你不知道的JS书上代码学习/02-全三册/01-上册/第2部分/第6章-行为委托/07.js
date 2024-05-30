/**
 * @Author liming
 * @Date 2024/5/29 9:34
 **/

class C {
    constructor(id) {
    // 噢，郁闷，我们的 id 属性屏蔽了 id() 方法
        this.id = id;
    }
    id() {
        console.log( "Id: " + id );
    }
}
var c1 = new C( "c1" );
console.log(c1.id)
c1.id(); // TypeError -- c1.id 现在是字符串 "c1"