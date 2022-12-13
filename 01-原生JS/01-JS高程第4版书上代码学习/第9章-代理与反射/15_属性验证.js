/**
 * @Author liming
 * @Date 2022/12/13 10:58
 **/

//因为所有赋值操作都会触发 set() 捕获器，所以可以根据所赋的值决定是允许还是拒绝赋值：
const target = {
    onlyNumbersGoHere: 0
};
const proxy = new Proxy(target, {
    set(target, property, value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return Reflect.set(...arguments);
        }
    }
});
proxy.onlyNumbersGoHere = 1;
console.log(proxy.onlyNumbersGoHere); // 1
proxy.onlyNumbersGoHere = '2';
console.log(proxy.onlyNumbersGoHere); // 1
