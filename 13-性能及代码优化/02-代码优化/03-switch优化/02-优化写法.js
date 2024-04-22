/**
 * @Author liming
 * @Date 2023/10/25 9:35
 **/

/**
 * 我们用对象形式建立key-value映射关系
 */

let colorMap = {
    black: printBlackBackground,
    red: printRedBackground,
    blue: printBlueBackground,
    green: printGreenBackground,
    yellow: printYellowBackground
}

colorMap[color] ? colorMap[color]() : printYellowBackground()

