let nome_file;

// Generatore Nome del file
function generateFile(){
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
  
  // Usage: generate a random alphanumeric string of a specific length
  const length = 10; // Adjust the length as needed
  const randomAlphanumericString = generateRandomAlphanumericString(length);

  // Concat the generated code to the standard naming convention
  nome_file.writeFile("blog_".concat(randomAlphanumericString,".md"), "", (err) => {
    if (err) throw err;
  });
}

// writing of the snippet
function writeFile(nome_file) {
    // i truncate the file name extension with slice(0, -3) 
    let id = nome_file.replace('.md',"")
    var snippet = 
    '<div>'+
        '<span id = ' + id + '>'+
    '</div>'+
    '<div>'+
        '<script src="https://www.bloggyfier.com/index.js?id="' + id + '>'+
    '</div>'
}