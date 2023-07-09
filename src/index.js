const search = document.getElementById("search");
// const subBtn = document.getElementsByTagName("input[type=text]");
const form = document.getElementById("form");
const display = document.getElementById("tempDisplay");

const getData = async (location) => {
	try {
		const response = await fetch(
			` https://api.weatherapi.com/v1/current.json?key=f5ce7cba05f246508ad95118230507&q=${location}	`
		);
		const data = await response.json();
		display.textContent = `${data.location.name} ${data.current.temp_c}\u00B0C`;
	} catch (error) {
		console.error(`Error: ${error}`);
	}
};

const getlocation = async (lat, long) => {
	const location = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=af91cea604034c6db9a08743831a8590`
	);

	const data = await location.json();

	getData(data.results[0].components.suburb);
};

const getCoords = () =>
	new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

getCoords()
	.then((position) => {
		getlocation(position.coords.latitude, position.coords.longitude);
	})
	.catch((err) => {
		console.error(err);
	});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;
	getData(location);
});
