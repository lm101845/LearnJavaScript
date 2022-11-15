/**
 * @Author liming
 * @Date 2022/11/15 22:48
 **/
import React, { Component } from 'react';
import { Table, Button } from 'antd';
import './index.css';
import QueryForm from "./QueryForm";
import {employeeColumns} from "./colums";
import {EmployeeResponse} from "../../interface/employee";
//为employee组件定义一个状态(该状态使用接口进行声明)
interface State{
    employee:EmployeeResponse
    //export type EmployeeResponse = EmployeeInfo[] | undefined
}

export default class Employee extends Component<{},State> {
    //初始化状态
    //组件状态使用接口定义，这样是有好处的
    state:State = {
        employee:undefined
    }

    getTotal = ()=>{
        let total:number;
        //创建类型保护区块
        if(typeof this.state.employee !== 'undefined'){
            total = this.state.employee.length
        }else{
            total = 0;
        }
        return <p>共有{total}名员工</p>
        //employee可能不是数组，可能是undefined，这样使用length属性就可能有问题
        //我们可以使用类型保护
    }

    setEmployee = (employee:EmployeeResponse)=>{
        //设置employee的状态
        this.setState({
            employee
        })
    }

    render() {
        return (
            <>
                <QueryForm onDataChange={this.setEmployee}/>
                {/*给QueryForm添加一个属性用于做回调*/}
                {/*这里有报错，因为antd对Form组件进行了包装,官方也给了解决方案*/}

                {/*<div className="toolbar">*/}
                {/*    <Button type="primary" icon="plus" onClick={this.handleCreate}>添加新员工</Button>*/}
                {/*    <Button type="primary" icon="download" onClick={this.handleDownload} className="right">导出</Button>*/}
                {/*</div>*/}
                {/*<InfoModal*/}
                {/*    visible={this.state.showModal}*/}
                {/*    edit={this.state.edit}*/}
                {/*    rowData={this.state.rowData}*/}
                {/*    hide={this.hideModal}*/}
                {/*    createData={onCreateEmployee}*/}
                {/*    updateData={onUpdateEmployee}*/}
                {/*/>*/}
                {this.getTotal()}
                <Table
                    columns={employeeColumns}
                    //columns表示表单头
                    dataSource={this.state.employee}
                    //将表单数据绑定到employee组件的状态上
                    className="table"
                />
            </>
        )
    }
}

