/**
 * @Author liming
 * @Date 2023/7/18 10:07
 **/

//重载函数，不要实现
function makeDate(timestamp:number):Date
function makeDate(m: number, d: number, y: number): Date

//实现函数
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5, 6, 7)
// const d3 = makeDate(5, 9)
console.log(d1)
console.log(d2)
