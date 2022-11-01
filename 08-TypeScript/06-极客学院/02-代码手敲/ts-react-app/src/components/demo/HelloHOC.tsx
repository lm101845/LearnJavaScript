/**
 * @Author liming
 * @Date 2022/11/1 17:37
 **/

import React,{Component} from 'react'

import HelloClass from "./HelloClass";

interface Loading{
    loading:string;
}
//编写一个高阶组件，这个组件的参数就是一个需要被包装的组件
function HelloHOC<P>(WrappedComponent:React.ComponentType<P>){
    return class extends Component<P & Loading>{
        //使用泛型的交叉类型——其实是并集，同时具有P和Loading属性
        render() {
            const {loading,...props} = this.props;
            return loading ? <div>Loading...</div>:<WrappedComponent {...props as P}/>
        }
    }
}

export default HelloHOC(HelloClass)