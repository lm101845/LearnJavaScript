/**
 * @Author liming
 * @Date 2022/12/13 10:18
 **/

/**
 * 很多反射方法返回称作“状态标记”的布尔值，表示意图执行的操作是否成功。有时候，状态标记
 * 比那些返回修改后的对象或者抛出错误（取决于方法）的反射 API 方法更有用。例如，可以使用反射
 * API 对下面的代码进行重构：
 */

// 初始代码
const o = {};
try {
    Object.defineProperty(o, 'foo', 'bar');
    console.log('success');
} catch(e) {
    console.log('failure');
}

// 在定义新属性时如果发生问题， Reflect.defineProperty() 会返回 false ，而不是抛出错误。
// 因此使用这个反射方法可以这样重构上面的代码：
// 重构后的代码
const o = {};
if(Reflect.defineProperty(o, 'foo', {value: 'bar'})) {
    console.log('success');
} else {
    console.log('failure');
}

