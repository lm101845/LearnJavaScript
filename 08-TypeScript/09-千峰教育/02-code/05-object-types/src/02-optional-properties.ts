type Shape = {}

interface PaintOptions {
  shape: Shape,
  xPos?: number,
  yPos?: number
}

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos
  let yPos = opts.yPos
  console.log(xPos)
}

function paintShape1(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos
  let yPos = opts.yPos === undefined ? 0 : opts.yPos
  console.log(xPos)
}

function paintShape2({ shape: Shape, xPos: number = 8880, yPos = 0 }: PaintOptions) {
  // let xPos = opts.xPos === undefined ? 0 : opts.xPos
  // let yPos = opts.yPos === undefined ? 0 : opts.yPos
  console.log(Shape)
  console.log(number)
}

const shape: Shape = {}
paintShape2({ shape })
paintShape2({ shape, xPos: 100})
paintShape2({ shape, yPos: 100})
paintShape2({ shape, xPos: 100, yPos: 100})
