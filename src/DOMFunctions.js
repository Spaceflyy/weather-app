import { parseISO, getDay } from "date-fns";

const search = document.getElementById("search");
const form = document.getElementById("form");
const locDisplay = document.getElementById("locDisp");
const temp = document.getElementById("temp");
const currentWeatherImg = document.getElementById("weatherImg");
const currentWeather = document.getElementById("currentWeather");
const HiLoTemp = document.getElementById("hiLoTemp");
const hourlyContainer = document.getElementById("hourlyContainer");
const threedaycontainer = document.getElementById("threedayContainer");

const realFeel = document.getElementById("realFeel");
const wind = document.getElementById("windSpeed");
const rain = document.getElementById("rain");
const uv = document.getElementById("uv");

const renderHourlyWeather = (data) => {
	const hourly = data.forecast.forecastday[0].hour;
	hourly.forEach((element) => {
		const container = document.createElement("div");
		const time = document.createElement("p");
		const hourTemp = document.createElement("p");
		const weatherImg = new Image();
		weatherImg.src = element.condition.icon;
		if (element.time.slice(11, 13) === data.current.last_updated.slice(11, 13)) {
			time.innerText = "Now";
		} else {
			time.innerText = element.time.slice(11);
		}

		console.log(`element.time: ${element.time.slice(11, 13)}`);
		console.log(`data.current: ${data.current.last_updated.slice(11)}`);
		hourTemp.innerText = `${element.temp_c}\u00B0C`;
		container.append(time);
		container.append(weatherImg);
		container.append(hourTemp);
		hourlyContainer.append(container);
	});
};

const renderThreeDayForecast = (data) => {
	console.log(data);
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
	for (let i = 0; i < dayForecasts.length; i++) {
		const day = document.createElement("p");
		const hiTemp = document.createElement("p");
		const lowTemp = document.createElement("p");
		const chanceOfRain = document.createElement("p");
		const imgContainer = document.createElement("div");
		const weatherIcon = new Image();
		weatherIcon.src = data.current.condition.icon;
		day.innerText = `${weekDay[getDay(parseISO(dayForecasts[i].date))]}  `;
		hiTemp.innerText = `H:${data.forecast.forecastday[i].day.maxtemp_c}\u00B0C`;
		lowTemp.innerText = `L:${data.forecast.forecastday[i].day.mintemp_c}`;
		chanceOfRain.innerText = `${data.forecast.forecastday[i].day.daily_chance_of_rain}%`;
		threedaycontainer.append(day);
		imgContainer.append(weatherIcon);
		imgContainer.append(chanceOfRain);
		threedaycontainer.append(imgContainer);
		threedaycontainer.append(lowTemp);
		threedaycontainer.append(hiTemp);
	}
};

async function renderWeather(data) {
	currentWeatherImg.src = data.current.condition.icon;
	locDisplay.textContent = `${data.location.name}`;
	temp.innerText = `${data.current.temp_c}\u00B0C`;
	currentWeather.innerText = `${data.current.condition.text} `;
	realFeel.innerText = `${data.current.feelslike_c}\u00B0C`;
	wind.innerText = `${data.current.wind_mph} MPH`;
	rain.innerText = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
	uv.innerText = `${data.current.uv}`;
	HiLoTemp.innerText = `H:${data.forecast.forecastday[0].day.maxtemp_c}\u00B0C L:${data.forecast.forecastday[0].day.mintemp_c}\u00B0C`;

	renderHourlyWeather(data);
	renderThreeDayForecast(data);
}
const bindSearch = (handler) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const location = search.value;
		hourlyContainer.innerHTML = "";
		threedaycontainer.innerHTML = "";
		handler(location);
	});
};

export { renderWeather, bindSearch };
