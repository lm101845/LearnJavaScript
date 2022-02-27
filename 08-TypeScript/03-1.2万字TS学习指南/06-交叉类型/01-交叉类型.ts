/*
 * @Author: liming
 * @Date: 2022-01-11 13:51:18
 * @LastEditTime: 2022-01-11 13:58:47
 * @FilePath: \03-1.2万字TS学习指南\06-交叉类型\01-交叉类型.ts
 */
(() => { 
    interface IPerson {
        id: string;
        age: number;
    }

    interface IWorker {
        companyId: string;
    }

    type IStaff = IPerson & IWorker;

    const staff: IStaff = {
        id: "01",
        age: 18,
        companyId: "ETF",
    };

    console.log(staff);
})()
