/**
 * @Author liming
 * @Date 2022/12/8 15:58
 **/
const oneHundred:bigint = BigInt(100)
const anotherHundred:bigint = 100n

// @ts-ignore
const firstName = Symbol("name")
// @ts-ignore
const secondName = Symbol("name")
if(firstName === secondName){
    // @ts-ignore
    console.log('ok')
}
