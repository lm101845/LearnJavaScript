/**
 * @Author liming
 * @Date 2023/11/8 13:47
 **/

/**
 * 使用 <canvas> 元素时，最好先测试一下 getContext() 方法是否存在。有些浏览器对 HTML 规范
 * 中没有的元素会创建默认 HTML 元素对象。这就意味着即使 drawing 包含一个有效的元素引用，
 * getContext() 方法也未必存在。
 * 可以使用 toDataURL() 方法导出 <canvas> 元素上的图像。这个方法接收一个参数：要生成图像
 * 的 MIME 类型（与用来创建图形的上下文无关）。
 */
let drawing = document.getElementById("drawing");
// 确保浏览器支持<canvas>
if (drawing.getContext) {
//  取得图像的数据 URI
    let imgURI = drawing.toDataURL("image/png");
    console.log(imgURI,'===========imgURI');
//  显示图片
    let image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}
