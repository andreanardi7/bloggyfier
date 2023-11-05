// Use API PUT to create a new file

function generateSnippet(text) {

  //Generate File Name
  let id = generateName();

  //Write File using API
  let write = writeFile(id, text);

  //Generate snippet
  var snippet =
    '<div>' +
    '<span id = ' + id + '>' +
    '</div>' +
    '<div>' +
    '<script src="https://www.bloggyfier.com/index.js?id="' + id + '>' +
    '</div>'

  return alert('Generated snippet:\n' + snippet);
}



// Use API GET to read the file from file name