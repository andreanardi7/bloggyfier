// Call WING APIs

// CALL WING API put to write a new file on the bucket
function writeFile(fileName, parsedContent, plainContent ) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "HtmlFile": parsedContent,
        "MarkdownFile": plainContent
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // Manually update port every time (changes at every save)
    fetch("http://127.0.0.1:54099/files/" + fileName, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}



// CALL WING API get to read a file on the bucket
function readFile(fileName) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    // Manually update port every time (changes at every save)
    var JsonResponse = fetch("http://127.0.0.1:54099/files/" + fileName, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return JsonResponse;
}