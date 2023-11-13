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

    // Check if the generated fileName already exists
    if (readFile(fileName + ".txt") != "") {
        generateName();
    }

    return (randomAlphanumericString);
}


// Use API PUT to create a new file
function generateSnippet(content, id) {
    // Check if you have edited a file or it's brand new
    if (id == "") {
        //Generate File Name
        let id = generateName();
    }

    //Write File using API
    let write = writeFile(id, content);

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

// Snippet Create button click handler
async function onClickCreateSnippet(editor, fileName) {
    const content = await editor.save();
    const parsedContent = parser(content)
    console.log(parsedContent)
    generateSnippet(parsedContent, fileName)
}



// !!!!!!!!NEED TESTS AFTER AWS DEPLOY
// Read a stored file
async function onClickEditFile(fileName) {
    // Call readFile and add ".txt" to retrive the plain text fail (optimal for edits)
    const response = await fetch(readFile(fileName + ".txt"));
    let JsonContent = await response.json();
    let parsedContent = parser(JsonContent)

    console.log(parsedContent)
    document.getElementById(editor).innerHTML = parsedContent.content
}