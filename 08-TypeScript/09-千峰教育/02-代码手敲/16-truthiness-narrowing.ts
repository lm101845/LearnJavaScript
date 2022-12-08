/**
 * @Author liming
 * @Date 2022/12/8 16:47
 **/

function printAll(strs:string | string[] | null){
    if(strs && typeof strs === 'object'){
        //防止strs是null
        for(const s of strs){
            console.log(s)
        }
    }
}

function multiplyAll(values:number[] | undefined,factor:number){
    if(!values){
        return values
    }else {
        return values.map(x=>{
            return x * factor
        })
    }
}

console.log(multiplyAll([3,4],1))
