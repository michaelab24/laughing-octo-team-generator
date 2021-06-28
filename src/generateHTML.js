// const generateManager = function (manager) {
//     return `

//         <div class="col-4 mt-4">
//             <div class="card h-100">
//                 <div class="card-header">
//                     <h3>Manager</h3>
//                 </div>

//                 <div class="card-body">
                        
//                     <div class="name">Name: ${manager.name} </div>
//                     <div class="id">Employee ID: ${manager.id}</div>
//                     <div class="email">Email: ${manager.email}</div>
//                     <div class="office">Office Number: ${manager.officeNumber}</div>
//                 </div>
                
//             </div>
//         </div>
//     `;
// }

// const generateEngineer = function (engineer) {
//     return `

//         <div class="col-4 mt-4">
//             <div class="card h-100">
//                 <div class="card-header">
//                     <h3>Engineer</h3>
//                 </div>

//                 <div class="card-body">
                        
//                     <div class="name">Name: ${engineer.name}</div>
//                     <div class="id">Employee ID: ${engineer.id}</div>
//                     <div class="email">Email: ${engineer.email}</div>
//                     <div class="gitHub">gitHub: ${engineer.github}</div>
//                 </div>
                
//             </div>
//         </div>

//     `;
// }

// const generateIntern = function (intern) {
//     return `

//         <div class="col-4 mt-4">
//             <div class="card h-100">
//                 <div class="card-header">
//                     <h3>Intern</h3>
//                 </div>

//                 <div class="card-body">
                        
//                     <div class="name">Name: ${intern.name}</div>
//                     <div class="id">Employee ID: ${intern.id}</div>
//                     <div class="school">School: ${intern.school}</div>
//                 </div>
                
//             </div>
//         </div>
// `;
// }

// // push array to page 
// generateHTML = (data) => {

//     // array for cards 
//     cardArray = []; 

//     for (let i = 0; i < data.length; i++) {
//         const employee = data[i];
//         const role = employee.getRole(); 


//         // call manager function
//         if (role === 'Manager') {
//             const managerCard = generateManager(employee);

//             cardArray.push(managerCard);
//         }

//         // call engineer function
//         if (role === 'Engineer') {
//             const engineerCard = generateEngineer(employee);

//             cardArray.push(engineerCard);
//         }

//         // call intern function 
//         if (role === 'Intern') {
//             const internCard = generateIntern(employee);

//             cardArray.push(internCard);
//         }
        
//     }

//     // joining strings 
//     const employeeCards = cardArray.join('')

//     // return to generated page
//     const generateTeam = generateTeamPage(employeeCards); 
//     return generateTeam;

// }

// const generateTeamPage = function (createTeam) {
//     return `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <!-- CDN link -->
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
//             <link rel="stylesheet" href="style.css">

//             <title>Team Generator</title>
//         </head>
//         <body>
//         <h1>My Team</h1>

//         <main>
//             <div class="conatiner">
//                 <div class="row justify-content-center" id="team-cards">

//                 </div>
//             </div>
//          </main>   


//         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//             <script src="index.js"></script>
//         </body>
//         </html>

//         `;
// }






            

//module.exports = generateHTML;

// get array through the team
// for each team member pull out objects of array
// slap em to a cards
