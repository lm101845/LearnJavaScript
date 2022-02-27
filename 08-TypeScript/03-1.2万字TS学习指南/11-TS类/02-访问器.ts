/*
 * @Author: liming
 * @Date: 2022-01-11 14:53:31
 * @LastEditTime: 2022-01-11 14:54:45
 * @FilePath: \03-1.2万字TS学习指南\11-TS类\02-访问器.ts
 */

let passcode = "Hello TypeScript";

class Employee {
    private _fullName: string
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "Hello TypeScript") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}
