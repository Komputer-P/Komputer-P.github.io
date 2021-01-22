var fs = require('fs');

//readFileSync
// console.log("Read Begin");
// var result = fs.readFileSync('sample.txt','utf8');
// console.log(result);
// console.log("Read Ended");

console.log("First");
fs.readFile('sample.txt','utf8',function(err, result) {
  console.log(result);
});
console.log("Next");
