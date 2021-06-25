const generateHTML = function (createTeam) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
         <script src="index.js"></script>
         <script src="generateHTML.js"></script>
        <title>Team Generator</title>
    </head>
    <body>
        <h1>My Team</h1>
    </body>
    </html>` 
}
//get array through the team
//for each team member pull out objects of array
//slap em to a cards
module.exports = generateHTML;