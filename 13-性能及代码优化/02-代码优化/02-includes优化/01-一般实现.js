/**
 * @Author liming
 * @Date 2023/10/25 9:25
 **/


/**
 * 一般实现——使用||
 * 此种写法的缺点是在需要验证的身份Id 变的很多的时候，重复代码量跟着变多
 */
function verifyIdentity(identityId) {
    if (identityId == 1 || identityId == 2 || identityId == 3 || identityId == 4) {
        return '你的身份合法，请通行！'
    } else {
        return '你的身份未知，警告！'
    }
}
