var argLength = process.argv.length;
var counter = 2;
var argTotal = 0;
while (counter < argLength) {
	argTotal += +process.argv[counter];
	counter++;
};
console.log(argTotal);
