interface MappingType {
    [props: string]: any
}

interface GlobalThis {
    requestMappings: MappingType
}

let _globalThis: GlobalThis = {
    requestMappings: {}
}

function Controller(url?: string) {
    // console.log(url)
    return function (target: any) {
        //存储公共URL
        target.prototype.baseURL = url
    }
}
function Get(url?: string) {
    // console.log(url)
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // 将函数的访问路径保存到全局对象的requestMappings属性中
        if (_globalThis.requestMappings == undefined) {
            _globalThis.requestMappings = {}
        }
        _globalThis.requestMappings[propertyKey] = url
    }
}
// 定义类型
interface UserController {
    [props: string]: any
}
// 定义控制器
@Controller('/user')
class UserController {
    @Get('/hello')
    hello(): string {
        return 'hello'
    }
    @Get('/test')
    test(): string {
        return 'test'
    }
}
// 定义控制器执⾏函数
function runController(controller: any, url: string) {
    // 拆分2级的url路径
    let urlArr: Array<string> = url.replace('/', '').split('/')
    // 获取当前对象的baseURL
    let baseURL = controller.baseURL.replace('/', '')
    // 获取当前url的第⼆级在全局对象中对应的访问路径
    let methodURL = _globalThis.requestMappings[urlArr[1]]
    // 当两级访问路径同时匹配时
    if (urlArr[0] == baseURL && urlArr[1] == methodURL.replace('/', '')) {
        // 执⾏控制器函数并返回结果
        return controller[urlArr[1]]()
    }
}
// 调⽤执⾏函数获取结果
let res = runController(new UserController(), '/user/test')
console.log(res)
export default {}