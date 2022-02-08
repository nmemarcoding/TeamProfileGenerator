const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school
        this.status = "intern"
    }
    getSchool() { return this.school };
    getStatus() { return this.status }
}

module.exports = Intern