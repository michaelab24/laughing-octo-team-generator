const generateHTML = function (createTeam) {
    return `<!DOCTYPE html>
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

    <div class="row">
        <div id="cards" class="teamCards">
            <div id="manager" class="bossMan">
                <div>Name: <span id="name1"></span></div>
                <div>Employee ID: <span id="id1"></span></div>
                <div>Email: <span id="email1"></span></div>
                <div>Office Number: <span id="num1"></span></div>
            </div>
            <div id="cards" class="teamCards">
                <div id="engineer" class="codeMan">
                    <div>Name: <span id="name2"></span></div>
                    <div>Employee ID: <span id="id2"></span></div>
                    <div>Email: <span id="email2"></span></div>
                    <div>gitHub: <span id="gitHub"></span></div>
                </div>
            </div>
            <div id="cards" class="teamCards">
                <div id="intern" class="lowMan">
                    <div>Name: <span id="name3"></span></div>
                    <div>Email: <span id="email3"></span></div>
                    <div>School: <span id="school"></span></div>
                </div>
            </div>
        </div>
    </div>




        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="index.js"></script>
    </body>
    </html>`
}
//get array through the team
//for each team member pull out objects of array
//slap em to a cards
module.exports = generateHTML;