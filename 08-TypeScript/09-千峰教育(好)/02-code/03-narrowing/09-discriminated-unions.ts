/**
 * @Author liming
 * @Date 2024/5/31 14:39
 **/
//  interface Shape {
//   kind: 'circle' | 'square'  //字符串字面量
//   radius?: number
//   sideLength?: number
// }


interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

// function handleShape(shape: Shape) {
//   if (shape.kind === 'rect') {
//
//   }
// }

//  function getArea(shape: Shape) {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2
//   }
// }

function getArea(shape: Shape) {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2

        case 'square':
            return shape.sideLength ** 2
    }
}
