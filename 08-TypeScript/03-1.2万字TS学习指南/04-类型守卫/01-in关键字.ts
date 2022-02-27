(() => {
    interface Admin {
        name: string;
        privileges: string[];
    }

    interface Employee {
        name: string;
        startDate: Date;
    }

    type UnknownEmployee = Employee | Admin;
    //type:其作用就是给类型起一个新名字，可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型

    function printEmployeeInformation(emp: UnknownEmployee) { 
        console.log("Name: " + emp.name);
        if ("privileges" in emp) { 
            console.log("Privileges: " + emp.privileges);
        }
        if ("startDate" in emp) { 
            console.log("Start Date: " + emp.startDate);
        }
    }
})()
