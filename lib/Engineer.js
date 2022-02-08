const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
        this.status = "engineer"
    }

    getGithub() { return this.github };
    getStatus() { return this.status };
}

module.exports = Engineer