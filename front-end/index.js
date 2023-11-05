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
    '<script src="https://www.bloggybase.com/reader.js?id="' + id + '>' +
    '</div>'

  return alert('Generated snippet:\n' + snippet);
}

// Parse the text to HTML
function parser(output) {
  const parser = new edjsParser();
  return parser.parse(output);
}

// Button click
async function onCreateSnippetClick(editor) {
  const content = await editor.save();
  const parsedContent = parser(content)
  console.log(parsedContent)
  generateSnippet(parsedContent)
}