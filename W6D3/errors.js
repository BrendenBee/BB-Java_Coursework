let fs = require("fs");

fs.readFile("callbacks.js", handleFile);
//using node.js
function handleFile(error, file) {
  if (error) {
      return console.error("There was an error: " + error);
} else {
    console.log("No error detected");
    console.log(file);
}
}
