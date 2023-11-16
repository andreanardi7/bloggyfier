// -------------------onClick controller-------------------
// Snippet Create button click handler
async function onClickCreateSnippet(editor, fileName) {
    const plainContent = await editor.save();
    const parsedContent = parser(plainContent)
    console.log(parsedContent)
    generateSnippet(fileName, parsedContent, plainContent)
}



// !!!!!!!!!!!!!!!!NEED TESTS AFTER AWS DEPLOY!!!!!!!!!!!!!!!!
// Read a stored file
async function onClickEditFile(fileName) {
    // Call readFile and add ".txt" to retrive the plain text fail (optimal for edits)
    const response = await fetch(readFile(fileName + ".txt"));
    let JsonContent = await response.json();
    let parsedContent = parse(JsonContent)

    console.log(parsedContent.content)
    document.getElementById(editor).innerHTML = parsedContent.content
}


// -------------------CSS controller functions-------------------
// Change Theme
function changeMode() {
    const darkModeStyles = document.getElementById('dark-mode-styles');
    const lightModeStyles = document.getElementById('light-mode-styles');

    if (darkModeStyles.disabled) {
        darkModeStyles.removeAttribute('disabled');
        lightModeStyles.setAttribute('disabled', 'true');
    } else {
        darkModeStyles.setAttribute('disabled', 'true');
        lightModeStyles.removeAttribute('disabled');
    }
}


//Handle side menu
function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}


// Open the Credits page
function openCredits() {
    document.getElementById('overlayCredits').style.display = 'block';
    document.getElementById("sideMenu").style.width = "0";
}

function closeCredits() {
    document.getElementById('overlayCredits').style.display = 'none';
}

// Handle hidden text area and button for editing files
function showEdit() {
    document.getElementById('overlayEdit').style.display = 'block';
    document.getElementById("sideMenu").style.width = "0";
}

function hideEdit() {
    document.getElementById('overlayEdit').style.display = 'none';
}