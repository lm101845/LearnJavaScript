export type Cat = {
  breed: string
  yearOfBirth: number
}

// export type Dog = {
//   breeds: string[]
//   yearOfBirth: number
// }

export const createCatName = () => 'fluffy'

//接口定义的类型，也是可以直接导入的
export interface Dog {
  breeds: string[]
  yearOfBirth: number
}
