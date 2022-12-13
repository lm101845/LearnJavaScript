/**
 * @Author liming
 * @Date 2022/12/13 10:12
 **/

/**
 * 有时候可能需要中断代理对象与目标对象之间的联系。对于使用 new Proxy() 创建的普通代理来
 * 说，这种联系会在代理对象的生命周期内一直持续存在。
 * Proxy 也暴露了 revocable() 方法，这个方法支持撤销代理对象与目标对象的关联。撤销代理的
 * 操作是不可逆的。而且，撤销函数（ revoke() ）是幂等的，调用多少次的结果都一样。撤销代理之后
 * 再调用代理会抛出 TypeError 。
 * 撤销函数和代理对象是在实例化时同时生成的：
 */
const target = {
    foo: 'bar'
};
const handler = {
    get() {
        return 'intercepted';
    }
};
const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy.foo); // intercepted
console.log(target.foo); // bar
revoke();
console.log(proxy.foo); // TypeError
