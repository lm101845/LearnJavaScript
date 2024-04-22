/**
 * @Author liming
 * @Date 2023/10/25 9:19
 **/


function previewWeek(i) {
    return i > 0 && i < 8 ? '星期' + ['一', '二', '三', '四', '五', '六', '日'][i - 1] : ''
}

/**
 * 总结：有些时候，重复的代码比较多，我们可以把重复的代码提出来，
 * 观察剩下的动态的值，如果可以与索引建立关系更好，可以进一步简化我们的代码
 */

/**
 * 评论：建议大家不要随便拆分字符串，可以写数组保存起来重复使用，
 * 不然以后搜索代码很麻烦“星期一”搜索不到，导致修改遗漏，太多这样的案例了
 */

/**
 * 老铁，仑的意思是 [ ‘星期一’, ‘星期二’, ‘星期三’, ‘星期四’, ‘星期五’, ‘星期六’, ‘星期日’][i] 这个意思？
 */
