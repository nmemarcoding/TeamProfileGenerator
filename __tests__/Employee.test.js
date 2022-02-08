const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    test("creat an employee object", () => {
        const employee = new Employee('alex', 'alex@yahoo.com', 1, "manager")

        expect(employee.name).toBe("alex");
        expect(employee.email).toBe("alex@yahoo.com");
        expect(employee.status).toBe("manager" || "engineer" || "intern")
        expect(employee.id).toEqual(expect.any(Number));
    });
    test("get employee name", () => {
        const employee = new Employee('alex', 'alex@yahoo.com', 1)
        expect('alex').toBe(employee.getName());

    });
    test("get employee email", () => {
        const employee = new Employee('alex', 'alex@yahoo.com', 1)
        expect("alex@yahoo.com").toBe(employee.getEmail());

    });
    test("get employee id", () => {
        const employee = new Employee('alex', 'alex@yahoo.com', 1)
        expect(1).toBe(employee.getId());

    });
});