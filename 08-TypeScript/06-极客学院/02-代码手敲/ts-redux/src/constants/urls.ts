export const GET_EMPLOYEE_URL = '/api/employee/getEmployee.action';
//运行完package.json中的mock命令后，浏览器输入http://localhost:4000/employee/getEmployee.json即可看到接口数据
//以api为开头，以action为结尾
//此时会报错：
// http://localhost:3000/api/employee/getEmployee.action?name 504
//此时需要做一些自定义的配置(setupProxy.js进行配置)


// export const GET_EMPLOYEE_URL = '/api/employee/getEmployee';
// export const CREATE_EMPLOYEE_URL = '/api/employee/createEmployee';
// export const DELETE_EMPLOYEE_URL = '/api/employee/deleteEmployee';
// export const UPDATE_EMPLOYEE_URL = '/api/employee/updateEmployee';
// export const DOWNLOAD_EMPLOYEE_URL = '/api/employee/downloadEmployee';

