/*
 * @Author: liming
 * @Date: 2021-11-23 17:45:42
 * @LastEditTime: 2021-11-23 18:12:17
 * @FilePath: \05-TS\01-5分钟上手TS\class.ts
 */
(function () {
    var Student = /** @class */ (function () {
        // 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    // console.log(document);
    document.body.innerHTML = greeter(user);
})();
