/*
 * @Author: liming
 * @Date: 2022-01-11 10:46:30
 * @LastEditTime: 2022-01-11 11:26:19
 * @FilePath: \03-1.2万字TS学习指南\05-联合类型和类型别名\02-可辨识联合.ts
 */


/**
 * 在上述代码中，我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，
 * 在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。
 */
enum CarTransmission {
    Automatic = 200,
    Manual = 300,
}

interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number   //year
}

interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission;
}

interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
}

type Vehicle = Motorcycle | Car | Truck;


const EVALUATION_FACTOR = Math.PI; 

// function evaluatePrice(vehicle: Vehicle) {
//     return vehicle.capacity * EVALUATION_FACTOR;
// }

// 这样写会报错
function evaluatePrice(vehicle: Vehicle) { 
    switch (vehicle.vType) { 
        case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
    }

    }

    /**
     * 在以上代码中，
     * 我们使用 switch 和 case 运算符来实现类型守卫，从而确保在 evaluatePrice 方法中，我们可以安全地访问 vehicle 对象中的所包含的属性，来正确的计算该车辆类型所对应的价格。
     */

const myTruck: Truck = { vType: 'truck', capacity: 9.5 }
evaluatePrice(myTruck);
