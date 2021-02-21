// Page structure created w/bootstrap and fontawesome
const generateHTML = function (teamString) {

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your Team!</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">    
      
  </head>
  
    <body>
    
        <div class="header">
          <div class="jumbotron bg-info">
            <h1 class="display-4 text-white text-center">My Team</h1>
          </div>
        
          <div class="d-flex justify-content-center">
            <div class="row">
              ${teamString} 
          </div>
        </div>
      
      <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
    </body>
  
  </html>`
}

// Cards generated for every employee class information added via inquirer
const generateCard = function (arr) {
  
  // Icons from Fontawesome that will change based on their entered role
  let positionIcon;
  // What will determine their display
  let roleInfo;

  if (arr.title === "Manager") {
    positionIcon = `<i style="color: cyan
    " class="fas fa-chalkboard-teacher"></i>`
    roleInfo = `Office Number: ${arr.officeNumber}`
  } else if (arr.title === "Engineer") {
    positionIcon = `<i style="color: cyan" class="fas fa-drafting-compass"></i>`
    roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank" class="text-dark">${arr.github}</a>`
  } else if (arr.title === "Intern") {
    positionIcon = `<i style="color: cyan" class="fas fa-school"></i>`
    roleInfo = `School: ${arr.school}`
  }

  return  `
  <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded m-3">
        <div class="card-header bg-dark border">
            <h4 class="text-white text-center">${arr.name}</h4>  
            <h4 class="text-white text-center">${positionIcon}</i> ${arr.title}</h4>
        </div>

        <div class="card-body bg-light border">
            <ul class="list text-black">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}" class="text-dark">${arr.email}</a></li>
                <li>${roleInfo}</li>
            </ul>
        </div>
    </div>
  </div>
  `

}


exports.generateHTML = generateHTML;
exports.generateCard = generateCard;