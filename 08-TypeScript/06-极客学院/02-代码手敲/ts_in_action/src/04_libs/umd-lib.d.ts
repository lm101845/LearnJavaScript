declare namespace umdLib {
    const version: string
    function doSomething(): void
}

export as namespace umdLib
//转为umd库设置的语句

export = umdLib
