/*
 * @Author: liming
 * @Date: 2022-02-18 18:22:01
 * @LastEditTime: 2022-02-18 18:22:18
 * @FilePath: \06-极客学院\02-代码手敲\01.ts
 */
interface List{
    id:number,
    name:string
}

interface Result { 
    data:List[]
}

function render(result: Result) { 
    result.data.forEach((value) => { 
        console.log(value.id,value.name);
        
    })
}

let result = {
    data: [
        {id:1,name:'孙悟空'}
    ]
}

render(result)