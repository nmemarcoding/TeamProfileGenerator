const inquirer = require('inquirer');
const cssTamplate = require('./template/cssTemplate.js')
const htmlTamplate = require('./template/htmlTamplate.js')
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const employees = [];

const promptManager = () => {

    return inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: "What is the team managers's name?"
        }, {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team managers's email?"
        }, {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team managers's ofiice number?"
        }, {
            name: 'status',
            default: "manager"
        }])
        .then(data => {

            employees.push(new Manager(data.managerName, data.managerEmail, 1, data.managerOfficeNumber))
        })

}

const promptEmployee = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'status',
                message: 'What type of team member whould you like to add?',
                choices: ['Engineer', 'Intern']
            }, {
                type: 'input',
                name: 'engineerName',
                message: "What is your engineer's name?",
                when: ({ status }) => status === "Engineer"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your engineer's id?",
                when: ({ status }) => status === "Engineer"
            }, {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your engineer's email?",
                when: ({ status }) => status === "Engineer"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is your engineer's github username?",
                when: ({ status }) => status === "Engineer"
            }, {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?",
                when: ({ status }) => status === "Intern"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your intern's id?",
                when: ({ status }) => status === "Intern"
            }, {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email?",
                when: ({ status }) => status === "Intern"
            }, {
                type: 'input',
                name: 'internSchool',
                message: "What is your intern's school?",
                when: ({ status }) => status === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Whold you like add an other employee?',
                default: true
            }


        ])
        .then(data => {
            if (data.status === "Engineer") {
                employees.push(new Engineer(data.engineerName, data.engineerEmail, data.engineerId, data.engineerGithub))
            } else {
                employees.push(new Intern(data.internName, data.internEmail, data.internId, data.internSchool))
            }

            if (data.confirmAddEmployee) {

                promptEmployee()
            } else {
                fs.writeFile('./web/index.html', htmlTamplate(employees), err => {
                    if (err) throw new Error(err);
                });
            }
        })

}


fs.writeFile('./web/style.css', cssTamplate, err => {
    if (err) throw new Error(err);
});



promptManager()
    .then(() => {
        promptEmployee()
    })