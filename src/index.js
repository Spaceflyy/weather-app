import "./style.css";

const search = document.getElementById("search");

const form = document.getElementById("form");
const locDisplay = document.getElementById("locDisp");
const temp = document.getElementById("temp");
const weatherImg = document.getElementById("weatherImg");
const currentWeather = document.getElementById("currentWeather");
const HiLoTemp = document.getElementById("hiLoTemp");

const getWeatherData = async (location) => {
	try {
		const response = await fetch(
			` https://api.weatherapi.com/v1/forecast.json?key=f5ce7cba05f246508ad95118230507&q=${location}	`
		);

		const data = await response.json();

		weatherImg.src = data.current.condition.icon;
		locDisplay.textContent = `${data.location.name}`;
		temp.innerText = `${data.current.temp_c}\u00B0C`;
		currentWeather.innerText = `${data.current.condition.text} `;
		HiLoTemp.innerText = `H:${data.forecast.forecastday[0].day.maxtemp_c}\u00B0C L:${data.forecast.forecastday[0].day.mintemp_c}\u00B0C`;
		// , ${data.location.region}, ${data.location.country}
	} catch (error) {
		console.error(`Error: ${error}`);
	}
};

const getlocation = async (lat, long) => {
	const location = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${String(lat)}+${String(
			long
		)}&key=af91cea604034c6db9a08743831a8590`
	);
	const data = await location.json();
	getWeatherData(data.results[0].components.postcode);
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
	getWeatherData(location);
});
