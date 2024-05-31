/**
 * @Author liming
 * @Date 2024/5/31 8:54
 **/
// 使用 slice 方法从 myCar 创建一个 newCar。
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
//浅拷贝
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// 改变 myHonda 对象的 color。
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
