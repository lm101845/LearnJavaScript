//请求的接口
export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}

//响应的接口
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined
