// write the following bash script in js:
// cat file | wc -l

const fs = require("fs");

myBuffer = fs.readFileSync(process.argv[2]);

str = myBuffer.toString();

console.log(str.split("\n").length - 1);
