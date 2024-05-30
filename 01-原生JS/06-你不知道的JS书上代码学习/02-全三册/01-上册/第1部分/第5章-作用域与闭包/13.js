/**
 * @Author liming
 * @Date 2024/5/20 15:13
 **/
var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log( this.id );
    }
};
var id = "not awesome"
obj.cool(); // 酷
setTimeout( obj.cool, 1000 ); // 不酷