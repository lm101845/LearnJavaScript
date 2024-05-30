/**
 * @Author liming
 * @Date 2024/5/28 15:39
 **/
// 下面这段荒谬的代码试图站在“类”的角度使用 instanceof 来判断两个对象的关系：
// 用来判断 o1 是否关联到（委托）o2 的辅助函数
function isRelatedTo(o1, o2) {
    function F(){}
    F.prototype = o2;
    return o1 instanceof F;
}
var a = {};
var b = Object.create( a );
console.log(isRelatedTo( b, a )); // true