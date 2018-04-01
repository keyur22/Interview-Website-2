/*Toggle Button*/
function navbar(){
	let nav = document.querySelector(".main-nav");
	nav.classList.toggle("responsive");
}

/*Display Map*/
function displayRoute() {

	var mapCanvas = document.getElementById("maps");
	var mapOptions = {zoom: 5, disableDefaultUI: true};
	var map = new google.maps.Map(mapCanvas, mapOptions);

    var start = new google.maps.LatLng(18.9414215,72.8331207);
    var end = new google.maps.LatLng(19.1129553, 72.8524611);

    var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}