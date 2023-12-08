// Put a new file
// Generator for File Name
function generateName() {
    // Generate randdom string
    function generateRandomAlphanumericString(length) {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let alphanumericString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            alphanumericString += characters.charAt(randomIndex);
        }
        return alphanumericString;
    }
    // Generate a random alphanumeric string of a specific length
    const length = 10;
    let randomAlphanumericString = generateRandomAlphanumericString(length);

    let nameAlreadyExists ="";


    // Check if the generated fileName already exists
    nameAlreadyExists = readFile(randomAlphanumericString + ".txt")
    .then(data => {
      console.log('Data received:', data);
      if (nameAlreadyExists != "") {
        generateName();
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle the error
      console.log('No file exist with that name')
    });

    return (randomAlphanumericString);
}


// Use API PUT to create a new file
function generateSnippet(id, parsedContent, plainContent) {
    // Check if you have edited a file or it's brand new
    if (id == "") {
        //Generate File Name
        let id = generateName();
    }

    //Write File using APIF
    let write = writeFile(id, parsedContent, plainContent);

    //Generate snippet
    var snippet =
        '<div>' +
        '<span id = ' + id + '>' +
        '</div>' +
        '<div>' +
        '<script src="https://www.bloggybase.com/index.js?id="' + id + '" >' +
        '</div>'

    return prompt('Generated snippet:\n', snippet);
}

// Parse the text to HTML
function parser(content) {
    const parser = new edjsParser();
    return parser.parse(content);
}
