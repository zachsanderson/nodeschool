var fs = require('fs');
var inputFile = fs.readFileSync(process.argv[2]).toString().split('\n');
var lineCount = inputFile.length - 1;
console.log(lineCount);;
