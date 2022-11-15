/**
 * @Author liming
 * @Date 2022/11/15 22:51
 **/

//请求
export interface EmployeeRequest{
    name:string;
    departmentId: number | undefined;
}

//响应
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined
//导出的是一个类型
