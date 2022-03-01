//在src⽂件夹下创建namespace.ts⽂件并编写如下内容
/// <reference path="string-replace.ts" />
namespace StringUtils {
    export const reverse = (str: string): string => {
        let str1 = ''
        for (let i = str.length - 1; i >= 0; i--) {
            str1 += str[i]
        }
        return str1
    }
}
let str = 'abcdefgabcdefg'
str = StringUtils.reverse(str)
str = StringUtils.replaceAll(str, 'a', 'n')
console.log(str)