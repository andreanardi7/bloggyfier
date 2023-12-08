// Use API GET to read the file from file name
const queryString = window.location.search;
const onlyLettersPattern = /^[A-Za-z]+$/;
const validTags = ["html"];

// Printing even if not accepted just for testing reasons
console.log(queryString);

if (validTags.includes(userQuery)) {
  // Useing a filter to remove bad characters that coul cause an SQL Injection
  if (queryString.match(onlyLettersPattern)) {
    const urlParams = new URLSearchParams(queryString);
    readFile(queryString + ".html");
  }
}
