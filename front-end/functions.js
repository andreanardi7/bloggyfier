let fileName;

// Generatore Nome del file
function generateName() {
    // Generate randdom string
    function generateRandomAlphanumericString(length) {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let alphanumericString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            alphanumericString += characters.charAt(randomIndex);
        }

        // Generate a random alphanumeric string of a specific length
        const length = 10;
        const randomAlphanumericString = generateRandomAlphanumericString(length);
        return ("blog_" + randomAlphanumericString + ".html");
    }
}

function writeFile(fileName, fileContent) {
    //CALL WING API put

    // Concat the generated code to the standard naming convention

    //fileName.writeFile("blog_" + fileName + ".html"), fileContent, (err) => {
    //if (err) throw err;
    //};
}

function readFile(fileName) {
    //CALL WING API get

    //return fileContent;
}