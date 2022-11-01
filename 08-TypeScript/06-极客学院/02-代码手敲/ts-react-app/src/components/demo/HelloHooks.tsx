/**
 * @Author liming
 * @Date 2022/11/1 17:56
 **/

import React,{useState,useEffect}from 'react';
import {Button} from "antd"


interface Greeting {
    name: string;
    firstName?:string;
    lastName?:string
}


const HelloHooks = (props:Greeting)=>{
    //定义组件的状态
    const [count,setCount] = useState(0)
    //声明为一个联合类型
    const [text,setText] = useState<string | null>(null)
    useEffect(()=>{
        //每次渲染之后都会执行
        //第2个参数——只有当count改变的时候，渲染逻辑才会执行
        if(count > 5){
            setText("休息一下")
        }
    },[count])
    return (
        <>
            <p>你点击了{count}次-Hooks组件{text}</p>
            <Button onClick={() => {setCount(count + 1)}}>
                Hello {props.name}
            </Button>
        </>
    )
}

HelloHooks.defaultProps = {
    firstName:"",
    lastName:""
}
export default HelloHooks;
