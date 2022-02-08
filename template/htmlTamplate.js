const card = data => {
    let card = ``;
    data.forEach((element) => {
        if (element.status === 'manager') {
            card += `<!-- card -->
            <div class="card">
                <!-- card header -->
                <div class="cardHeader">
                    <h2 class="name">${element.name}</h2>
                    <h3 class="rule"><span><i class="fas fa-mug-hot"></i></span> Manager</h3>
                </div>
                <!-- end of card header -->
                <!-- card body -->
                <div class="cardBody">
                    <div class="id">ID: ${element.id}</div>
                    <div class="email">Email: ${element.email}</div>
                    <div class="office">Office Number: ${element.officeNumber}</div>
                </div>
            </div>
            <!-- end of card -->`
        } else if (element.status === 'engineer') {
            card += `<!-- card -->
            <div class="card">
                <!-- card header -->
                <div class="cardHeader">
                    <h2 class="name">${element.name}</h2>
                    <h3 class="rule"><span><i class="fas fa-glasses"></i></span> Engineer </h3>
                </div>
                <!-- end of card header -->
                <!-- card body -->
                <div class="cardBody">
                    <div class="id">ID: ${element.id}</div>
                    <div class="email">Email: ${element.email}</div>
                    <div class="office">GitHub: ${element.github}</div>
                </div>
            </div>
            <!-- end of card -->`

        } else if (element.status === 'intern') {
            card += `<!-- card -->
            <div class="card">
                <!-- card header -->
                <div class="cardHeader">
                    <h2 class="name">${element.name}</h2>
                    <h3 class="rule"><span><i class="fas fa-user-graduate"></i></span> Engineer </h3>
                </div>
                <!-- end of card header -->
                <!-- card body -->
                <div class="cardBody">
                    <div class="id">ID: ${element.id}</div>
                    <div class="email">Email: ${element.email}</div>
                    <div class="office">GitHub: ${element.school}</div>
                </div>
            </div>
            <!-- end of card -->`
        }

    })

    return card;
}

module.exports = tamplateData => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/3256877447.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <!-- top section -->
        <!-- top section container -->
        <div class="topSectionContainer">
            <h1>My Team</h1>
        </div>
        <!-- End of top section -->
    
        <!-- card section -->
        <div class="cardSectionContainer">
            ${card(tamplateData)}
        </div>
        <!-- end of card section -->
    </body>
    
    </html>`
}