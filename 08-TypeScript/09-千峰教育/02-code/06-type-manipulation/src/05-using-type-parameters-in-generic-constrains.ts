/**
 * @Author liming
 * @Date 2023/9/5 2:20
 **/
function getProperty<Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key]
}

let x = {
    a:1,
    b:2,
    c:3,
    d:4
}

console.log(getProperty(x,'a'))
getProperty(x,'b')
