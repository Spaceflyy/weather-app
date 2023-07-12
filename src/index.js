import "./style.css";
import { parseISO, getDay } from "date-fns";

const search = document.getElementById("search");
const form = document.getElementById("form");
const locDisplay = document.getElementById("locDisp");
const temp = document.getElementById("temp");
const currnetWeatherImg = document.getElementById("weatherImg");
const currentWeather = document.getElementById("currentWeather");
const HiLoTemp = document.getElementById("hiLoTemp");
const hourlyContainer = document.getElementById("hourlyContainer");
const threedaycontainer = document.getElementById("threedayContainer");

const getWeatherData = async (location) => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=f5ce7cba05f246508ad95118230507&q=${location}&days=3&aqi=no&alerts=no`
		);

		const data = await response.json();

		const hourly = data.forecast.forecastday[0].hour;
		const dayForecasts = data.forecast.forecastday;
		const weekDay = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		currnetWeatherImg.src = data.current.condition.icon;
		locDisplay.textContent = `${data.location.name}`;
		temp.innerText = `${data.current.temp_c}\u00B0C`;
		currentWeather.innerText = `${data.current.condition.text} `;
		HiLoTemp.innerText = `H:${data.forecast.forecastday[0].day.maxtemp_c}\u00B0C L:${data.forecast.forecastday[0].day.mintemp_c}\u00B0C`;

		hourly.forEach((element) => {
			if (element.time.slice(11) > data.current.last_updated.slice(11)) {
				const container = document.createElement("div");
				const time = document.createElement("p");
				const hourTemp = document.createElement("p");
				const weatherImg = new Image();
				weatherImg.src = element.condition.icon;
				time.innerText = element.time.slice(11);
				hourTemp.innerText = `${element.temp_c}\u00B0C`;
				container.append(time);
				container.append(weatherImg);
				container.append(hourTemp);
				hourlyContainer.append(container);
			}
		});

		for (let i = 0; i < dayForecasts.length; i++) {
			const p = document.createElement("p");

			p.innerText = `${weekDay[getDay(parseISO(dayForecasts[i].date))]} ${
				data.forecast.forecastday[i].day.maxtemp_c
			}\u00B0C L:${data.forecast.forecastday[i].day.mintemp_c}`;

			threedaycontainer.append(p);
		}
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
	hourlyContainer.innerHTML = "";
	getWeatherData(location);
});
