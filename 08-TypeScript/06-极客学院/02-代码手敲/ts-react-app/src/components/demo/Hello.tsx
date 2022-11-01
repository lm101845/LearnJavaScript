import React from 'react';
import {Button} from "antd"

//使用React.FC,它的默认属性必须是可选属性才行
interface Greeting {
    name: string;
    firstName?:string;
    lastName?:string
}

// const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>
// const Hello: React.FC<Greeting> = (props) => <Button>Hello {props.name}</Button>
//使用解构赋值,把props解构为一个对象
const Hello: React.FC<Greeting> = ({name,firstName,lastName}) => <Button>Hello {name}</Button>

Hello.defaultProps = {
    firstName:"",
    lastName:""
}
export default Hello;
