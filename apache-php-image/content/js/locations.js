
$(function(){
function loadLocations(){
		$.getJSON( "/api/locations/", function(locations) {
		console.log(locations);
		var message = "no result";
		if(locations.length>0){
		message = locations[1].country + " " + locations[1].address;
		}
		$(".test").text(message);
		$(".test2").text(locations[0]);
		});
		};

	loadLocations();
	setInterval(loadLocations,2000);
});