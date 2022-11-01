"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author liming
 * @Date 2022/10/22 15:21
 **/
const jquery_1 = __importDefault(require("jquery"));
//jquery是用JS编写的，我们在使用非TS的类库时，必须为这个类库编写一个声明文件，对外暴露它的API
//幸运的是，大多数的声明文件，社区已经为我们写好了，我们只要安装一个声明包即可 pnpm i @types/xxx
(0, jquery_1.default)('.app').css('color', 'red');
// globalLib({x:1})
// globalLib.doSomething()
const module_lib_1 = __importDefault(require("./module-lib"));
module_lib_1.default.doSomething();
const umd_lib_1 = __importDefault(require("./umd-lib"));
umd_lib_1.default.doSomething();
const moment_1 = __importDefault(require("moment"));
//给moment添加一些我们自定义方法
moment_1.default.myFunction = () => {
};
globalLib.doAnything = () => { };
