var http = require("http");

//Print out messaage
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
};

//Print out error messages
function printError(error){
	console.error(error.message);
}

function get(username) {
	//Connect to the API URL
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
	  var body = "";
	  response.on('data', function(chunk) {
	  	body += chunk;
	  });

	  response.on('end', function() {
	  	if(response.statusCode === 200) {
	  		try {
	  			//Parse Data

		  		var profile = JSON.parse(body);
		  		// Print the Data
		  		printMessage(username, profile.badges.length, profile.points.JavaScript);
		  	} catch(error) {
		  		//Parse Error
		  		printError(error);
		  	}
		} else {
			//Status COde Error
			printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
		}
	  	//the process of converting a string into a data structure = PARSING
	  	//JSON = JavaScript Object Notation
	  });
	});

	//Connection Error
	request.on("error", printError);
}

//export function called get
module.exports.get = get;


