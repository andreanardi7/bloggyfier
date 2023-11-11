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
    const randomAlphanumericString = generateRandomAlphanumericString(length);
    return (randomAlphanumericString);
}

// Use API PUT to create a new file
function generateSnippet(content) {

    //Generate File Name
    let id = generateName();

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
async function onCreateSnippetClick(editor) {
    const content = await editor.save();
    const parsedContent = parser(content)
    console.log(parsedContent)
    generateSnippet(parsedContent)
}



// !!!!!!!!NEED TESTS AFTER AWS DEPLOY
// Read a stored file
function editFile(fileName) {
    // Call readFile and add ".txt" to retrive the plain text fail (optimal for edits)
    document.getElementById(editor).innerHTML = readFile(fileName + ".txt")
    hideEdit()
}