const inquirer = require("inquirer");
const fs = require("fs")
const generateHTML = require("./src/generateHTML")

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//team array
const theTeam = []

// start of manager prompts 
const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            theTeam.push(manager);
            console.log(manager);
            addTeamMember()
        })
};

const createTeam = () => {
    addManager()
}
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the engineer?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
        },
    ]).then(engineerData => {

        let { name, id, email, github } = engineerData;

        const engineer = new Engineer(name, id, email, github);

        console.log(engineer);

        theTeam.push(engineer);

        addTeamMember()
    })
}
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the intern?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        },
    ])
        .then(internData => {

            let { name, id, email, school } = internData;

            const intern = new Intern(name, id, email, school);

            console.log(intern);

            theTeam.push(intern);

            addTeamMember()
        })
}
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: "Please choose what type of employee you'd like to add, or select I am done if you're finished.",
            choices: ['Engineer', 'Intern', 'I am done']
        },
    ]).then(memberData => {

        if (memberData.type === 'Engineer') {
            addEngineer()
        } else if (memberData.type === 'Intern') {
            addIntern()
        } else {
            generateTeamPage()
        }
    })
}

// const buildTeam = () => {

//     const html = generateHTML(theTeam)
//     writeFile(html)
// }

const generateTeamPage = function () {

    const htmlArray = []
    const boilerPlate =

        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- CDN link -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="style.css">

            <title>Team Generator</title>
        </head>
        <body>
        <h1>My Team</h1>

        <main>
            <div class="conatiner">
                <div class="row justify-content-center" id="team-cards">
                
                        <div class="col-4 mt-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h3>Manager</h3>
                                </div>
                
                                <div class="card-body">
                                        
                                    <div class="name">Name: ${theTeam[0].name} </div>
                                    <div class="id">Employee ID: ${theTeam[0].id}</div>
                                    <div class="email">Email: ${theTeam[0].email}</div>
                                    <div class="office">Office Number: ${theTeam[0].officeNumber}</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        `
        htmlArray.push(boilerPlate)
        for (i=1; i<theTeam.length; i++) {
            if (theTeam[i].github) {
                const employeeCard = `<div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>Engineer</h3>
                    </div>
    
                    <div class="card-body">
                            
                        <div class="name">Name: ${theTeam[i].name}</div>
                        <div class="id">Employee ID: ${theTeam[i].id}</div>
                        <div class="email">Email: ${theTeam[i].email}</div>
                        <div class="gitHub">gitHub: ${theTeam[i].github}</div>
                    </div>
                    
                </div>
            </div>
                `
            htmlArray.push(employeeCard) 
            }
        }
        const htmlEnding = `
         </main>   

        </body>
        </html>

        `;

    

    
    htmlArray.push(htmlEnding)


    // function to generate HTML page file using file system 
    // const writeFile = data => {
    fs.writeFile('./dist/index.html', htmlArray.join(""), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    });
};


createTeam()
