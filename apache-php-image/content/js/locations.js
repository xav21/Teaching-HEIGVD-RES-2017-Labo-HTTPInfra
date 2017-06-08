
$(function(){
function loadLocations(){
		$.getJSON( "/api/students/", function(locations) {
		console.log(locations);
		var message = "no result";
		if(locations.length>0){
		message = locations[0].country + " " + locations[0].address;
		}
		$(".test").text(message);
		});
		};

	loadLocations();
	setInterval(loadLocations,2000);
});