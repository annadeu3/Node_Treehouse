var profile = require("./profile.js"); //make sure to add the "./" , don't have to
//put the .js at the end
var users = process.argv.slice(2);
// process is a global object we can access things like the current version
// of node and arguments passed in the command line
//argv= property of process object
users.forEach(profile.get); //forEach passes one parameter
//forEach method on arrays in Node.js b/c of v8 JS engine
