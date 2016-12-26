if ("geolocation" in navigator) {
	console.log("geolocation is avaiable")
} else {
	console.log("geolocation is NOT avaiable")
}

function getLocation() {navigator.geolocation.getCurrentPosition(onLocation, onError)}

function onLocation(position) {
	console.log('Your latitude is: ' + position.coords.latitude);
	console.log('Your longitude is: ' + position.coords.longitude);
	document.getElementById('position').innerHTML = 'Lat: ' +
	position.coords.latitude + ' , Lon: ' + position.coords.longitude
}

function onError(error) {console.error(error)}