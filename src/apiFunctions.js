async function getWeatherData(location) {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=f5ce7cba05f246508ad95118230507&q=${location}&days=3&aqi=no&alerts=no`
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}
const getCoords = () =>
	new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

getCoords()
	.then((position) => position)
	.catch((err) => {
		console.error(err);
	});

async function getLocation() {
	if (navigator.geolocation) {
		try {
			const locationCoords = await getCoords();
			const lat = await locationCoords.coords.latitude;
			const long = locationCoords.coords.longitude;

			const location = await fetch(
				`https://api.opencagedata.com/geocode/v1/json?q=${String(lat)}+${String(
					long
				)}&key=af91cea604034c6db9a08743831a8590`
			);
			const data = await location.json();

			return data.results[0].components.postcode;
		} catch (error) {
			if (error.code === 1) {
				console.log("NOOOO");
			}
		}
	}
}

export { getWeatherData, getLocation };
