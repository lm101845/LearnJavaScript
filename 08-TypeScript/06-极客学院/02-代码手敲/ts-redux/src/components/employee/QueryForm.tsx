/**
 * @Author liming
 * @Date 2022/11/15 22:48
 **/
import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import {FormComponentProps} from "antd/lib/form";
/**
 *  <QueryForm onDataChange={this.setEmployee}/>报错的解决方案
 */
import {EmployeeRequest,EmployeeResponse} from '../../interface/employee'
import {get} from '../../utils/request'
import {GET_EMPLOYEE_URL} from '../../constants/urls'
const { Option } = Select;

interface Props extends FormComponentProps{
    //定义一个接口，继承它
    onDataChange(data:EmployeeResponse):void
}


class QueryForm extends Component<Props,EmployeeRequest>{
    //第一个是属性类型props，我们不需要，第2个是状态类型state

    //初始化状态
    state:EmployeeRequest = {
        name:"",
        departmentId:undefined
    }
    //姓名输入框绑定事件
    handleNameChange = (e:React.FormEvent<HTMLInputElement>)=>{
        this.setState({
            name:e.currentTarget.value
        })
    }
    //部门选项框绑定事件
    handleDepartmentChange = (value:number)=>{
        this.setState({
            departmentId:value
        })
    }
    //点击按钮和页面初始化都要调用查询员工这一方法
    //查询按钮
    handleSubmit = ()=>{
        this.queryEmployee(this.state)
    }

    componentDidMount() {
        this.queryEmployee(this.state)
    }

    queryEmployee = (param:EmployeeRequest)=>{
        console.log(param,'param')
        get(GET_EMPLOYEE_URL,param).then(res=>{
            console.log(res,'res')
            this.props.onDataChange(res.data)
            //在这里把res.data传过去
        })
        //这个是封装的get请求
    }
    render() {
        return (
            <Form layout="inline">
                <Form.Item>
                    {/*将input指定为受控组件*/}
                    <Input
                        placeholder="姓名"
                        style={{ width: 120 }}
                        maxLength={20}
                        allowClear
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                <Select
                    placeholder="部门"
                    style={{ width: 120 }}
                    allowClear
                    value={this.state.departmentId}
                    onChange={this.handleDepartmentChange}
                >
                    <Option value={1}>技术部</Option>
                    {/*技术部是实际在网页上的内容,1是实际传给后台表单处理内容*/}
                    <Option value={2}>产品部</Option>
                    <Option value={3}>市场部</Option>
                    <Option value={4}>运营部</Option>
                </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" icon="search" onClick={this.handleSubmit}>查询</Button>
                </Form.Item>
                <Form.Item>
                    <Button>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrapQueryForm = Form.create<Props>({
    //经 Form.create() 包装过的组件会自带 this.props.form 属性
    name:'employee_query'
})(QueryForm)

export default WrapQueryForm;
