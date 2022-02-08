const Engineer = require('../lib/Engineer.js');

describe("Enginier", () => {
    test("creat an enginier object", () => {
        const engineer = new Engineer('alex', 'alex@yahoo.com', 1, "github.com/alex", )

        expect(engineer.name).toBe("alex");
        expect(engineer.email).toBe("alex@yahoo.com");
        expect(engineer.github).toBe("github.com/alex");
        expect(engineer.id).toEqual(expect.any(Number));
    });
    test("get engineer github", () => {
        const engineer = new Engineer('alex', 'alex@yahoo.com', 1, "github.com/alex")
        expect("github.com/alex").toBe(engineer.getGithub());

    });
    test("get engineer status", () => {
        const engineer = new Engineer('alex', 'alex@yahoo.com', 1, "github.com/alex")

        expect("engineer").toBe(engineer.getStatus());

    });
});