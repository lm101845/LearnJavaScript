(() => {
    //1.尖括号语法
    //let someValue: any = "this is a string";
    //let strLength: number = (<string>someValue).length;
    
    //2.as语法
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
})()
