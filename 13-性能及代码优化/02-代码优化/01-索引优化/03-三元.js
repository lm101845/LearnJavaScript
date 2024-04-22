/**
 * @Author liming
 * @Date 2023/10/25 9:18
 **/
function previewWeek(i) {
    return i == 1 ? '星期一' :
        i == 2 ? '星期二' :
            i == 3 ? '星期三' :
                i == 4 ? '星期四' :
                    i == 5 ? '星期五' :
                        i == 6 ? '星期六' :
                            i == 7 ? '星期日' : ''
}
