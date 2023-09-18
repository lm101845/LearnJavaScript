//写法1：
//type加不加都行
// import type { Cat, Dog } from './animal'
// import { createCatName } from './animal'

//写法2：
import { createCatName, type Cat, type Dog } from './animal'

type Animals = Cat | Dog

createCatName()
