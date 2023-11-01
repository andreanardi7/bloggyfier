function writeFile(fileName, fileContent){
    // Concat the generated code to the standard naming convention
    fileName.writeFile("blog_" + fileName + ".html"), fileContent, (err) => {
    if (err) throw err;
  };
}

