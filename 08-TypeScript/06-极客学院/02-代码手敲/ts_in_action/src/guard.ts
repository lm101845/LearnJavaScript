/**
 * @Author liming
 * @Date 2022/10/21 14:27
 **/

enum Type {
    Strong, Week
}

class Java {
    helloJava() {
        console.log('Hello Java')
    }

    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }

    javascript: any
}

function isJava(lang:Java | JavaScript):lang is Java{
    //这个叫做类型谓词
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    //我们不知道程序在运行的时候，会传入什么样的参数，使得我们在每一处都要加上类型断言，这样代码可读性很差
    //而类型保护机制会对类型进行预判

    //方法0：使用类型断言
    // if((lang as Java).helloJava){
    //     (lang as Java).helloJava()
    // }else{
    //     (lang as JavaScript).helloJavaScript()
    // }

    //方法1：使用instanceof
    // if(lang instanceof Java){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }

    //方法2：使用in
    // if('java' in lang){
    //     //使用in关键字判断java属性是否在这个对象中
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }

    //方法3：使用typeof
    // if(typeof x === 'string'){
    //     x.length;
    // }else{
    //     x.toFixed(2);
    // }

    //方法4：创建一个类型保护函数
    if(isJava(lang)){
        lang.helloJava()
    }else{
        lang.helloJavaScript()
    }
    return lang;
}

// getLanguage(Type.Strong)