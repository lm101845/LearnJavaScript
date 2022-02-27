//在src⽂件夹下创建string-replace.ts⽂件并编写如下内容
namespace StringUtils {
    export const replaceAll = (str: string, replaceStr: string, targetStr: string): string => {
        let reg = new RegExp(replaceStr, 'g')
        return str.replace(reg, targetStr)
    }
}