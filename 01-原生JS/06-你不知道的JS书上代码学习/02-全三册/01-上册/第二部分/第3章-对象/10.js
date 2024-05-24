/**
 * @Author liming
 * @Date 2024/5/24 10:53
 **/

const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// Expected output: true

delete car.make;
if ('make' in car === false) {
    car.make = 'Suzuki';
}

console.log(car.make);
// Expected output: "Suzuki"

/**
 * in 操作符会检查属性是否在对象及其 [[Prototype]] 原型链中（参见第 5 章）。相比之下，
 * hasOwnProperty(..) 只会检查属性是否在 myObject 对象中，不会检查 [[Prototype]] 链。
 * 在第 5 章讲解 [[Prototype]] 时我们会详细介绍这两者的区别。
 */
console.log(car.hasOwnProperty('toString'));
// Expected output: false