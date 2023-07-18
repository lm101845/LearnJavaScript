/**
 * @Author liming
 * @Date 2023/7/18 9:31
 **/

function combine<T>(arr1:T[],arr2:T[]):T[]{
    return arr1.concat(arr2)
}

const arr = combine<string | number>(["string"], [1, 2, 3])

console.log(arr)
