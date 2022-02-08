const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
        this.status = "manager";
    }
    getOfficeNumber() { return this.officeNumber };
    getStatus() { return this.status };
}

module.exports = Manager;