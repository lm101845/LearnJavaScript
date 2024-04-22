/**
 * @Author liming
 * @Date 2023/10/25 9:27
 **/

/**
 * 此种写法的在需要验证的身份Id 变多的时候，
 * 只需要在includes前的数组里后面继续添加就行，缺点是仍然占用4行
 * @param identityId
 * @returns {string}
 */
function verifyIdentity(identityId) {
    if ([1, 2, 3, 4].includes(identityId)) {
        return '你的身份合法，请通行！'
    } else {
        return '你的身份未知，警告！'
    }
}
