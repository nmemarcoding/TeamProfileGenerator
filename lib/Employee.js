class Employee {
    constructor(name, email, id, status) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.status = status;
    }
    getName() { return this.name };
    getEmail() { return this.email };
    getId() { return this.id };
    getStatus() { return this.status };

}

module.exports = Employee;