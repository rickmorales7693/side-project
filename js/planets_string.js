(function(){
	"use strict";

	var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	
	var planetsArray = planetsString.split("|");

	console.log(planetsArray)
	
	// TODO: Convert planetsString to an array, save it to planetsArray.

	var planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Urnaus","Neptune"];
	var planetsString = planets.join("|");
	console.log(planetsString)

	// TODO: Create a string with <br> tags between each planet. console.log() your results.
	//       Why might this be useful?

	var listPlanets = planetsString.split("|");
	var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
	console.log(listPlanets);
	console.log(brlistPlanets);

	// Bonus: Create a second string that would display your planets in an undordered list.
	//        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
	//        console.log() your results.

	
	
})();
