const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    test("creat an intern object", () => {
        const intern = new Intern('alex', 'alex@yahoo.com', 1, "2Univercity");

        expect(intern.name).toBe("alex");
        expect(intern.email).toBe("alex@yahoo.com");
        expect(intern.school).toBe("2Univercity");
        expect(intern.id).toEqual(expect.any(Number));
    });
    test("get school name", () => {
        const intern = new Intern('alex', 'alex@yahoo.com', 1, "2Univercity");

        expect(intern.getSchool()).toBe("2Univercity");
    })
    test("get intern status", () => {
        const intern = new Intern('alex', 'alex@yahoo.com', 1, "2Univercity");

        expect("intern").toBe(intern.getStatus());

    });
});