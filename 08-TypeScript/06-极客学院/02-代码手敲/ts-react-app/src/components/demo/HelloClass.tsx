/**
 * @Author liming
 * @Date 2022/11/1 17:24
 **/

import React, {Component} from 'react';
import {Button} from "antd"


interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string
}

interface State {
    count: number
}

//泛型第一个参数：属性类型；第二个参数：状态类型
class HelloClass extends Component<Greeting, State> {
    //初始化状态
    state: State = {
        count: 0
    }
    //定义默认属性值，会作为这个类的静态属性存在
    static defaultProps = {
        firstName: "",
        lastName: ""
    }

    render() {
        return (
            <>
                <p>你点击了{this.state.count}次</p>
                <Button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>
                    Hello {this.props.name}
                </Button>
            </>
        );
    }

}

export default HelloClass;
