console.log("Go...");
let count = 0;
while(count<10){
    count++;
    console.log("counting: " + count);
}
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});