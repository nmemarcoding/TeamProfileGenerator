const Manager = require('../lib/Manager');

describe("Manager", () => {
    test("creat an manager object", () => {
        const manager = new Manager('alex', 'alex@yahoo.com', 1, 2)

        expect(manager.name).toBe("alex");
        expect(manager.email).toBe("alex@yahoo.com");
        expect(manager.officeNumber).toEqual(expect.any(Number))
        expect(manager.id).toEqual(expect.any(Number));
    });
    test("get manager office number", () => {
        const manager = new Manager('alex', 'alex@yahoo.com', 1, 2)

        expect(2).toBe(manager.getOfficeNumber());
    })
    test("get manager status", () => {
        const manager = new Manager('alex', 'alex@yahoo.com', 1, 2)

        expect("manager").toBe(manager.getStatus());

    });
});