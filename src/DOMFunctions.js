import { parseISO, getDay } from "date-fns";

// const search = document.getElementById("search");
//

//
//

const createHTMLElements = () => {
	const weathercontainer = document.createElement("div");
	weathercontainer.setAttribute("id", "weatherContainer");
	const currentWeather = document.createElement("div");
	currentWeather.setAttribute("id", "currentWeatherContainer");
	const hourly = document.createElement("div");
	hourly.setAttribute("id", "hourlyContainer");
	const threeday = document.createElement("div");
	threeday.setAttribute("id", "threeDayContainer");
	const otherinfo = document.createElement("div");
	otherinfo.setAttribute("id", "otherInfo");
	const form = document.createElement("form");
	form.setAttribute("id", "form");
	form.setAttribute("action", "post");
	const input = document.createElement("input");
	input.setAttribute("id", "search");
	input.setAttribute("type", "text");
	const button = document.createElement("input");
	button.setAttribute("type", "submit");
	form.append(input);
	form.append(button);
	weathercontainer.append(form);
	weathercontainer.append(currentWeather);
	weathercontainer.append(hourly);
	weathercontainer.append(threeday);
	weathercontainer.append(otherinfo);
	document.body.append(weathercontainer);
};

const showUI = () => {
	const loader = document.querySelector(".loaderContainer");
	const ui = document.getElementById("weatherContainer");
	ui.style.display = "grid";

	loader.style.display = "none";
};

const renderHourlyWeather = (data) => {
	const hourlyContainer = document.getElementById("hourlyContainer");
	const titleContainer = document.createElement("div");
	titleContainer.setAttribute("id", "titleContainer");

	const title = document.createElement("h2");
	title.textContent = "Today's Forecast";
	titleContainer.append(title);
	hourlyContainer.append(titleContainer);
	const hourly = data.forecast.forecastday[0].hour;

	for (let i = 0; i < hourly.length; i += 2) {
		const container = document.createElement("div");
		const time = document.createElement("p");
		const hourTemp = document.createElement("p");
		const weatherImg = new Image();
		weatherImg.src = hourly[i].condition.icon;
		if (
			hourly[i].time.slice(11, 13) === data.current.last_updated.slice(11, 13)
		) {
			time.innerText = "Now";
		} else {
			time.innerText = hourly[i].time.slice(11);
		}

		hourTemp.innerText = `${hourly[i].temp_c}\u00B0C`;

		container.append(time);
		container.append(weatherImg);
		container.append(hourTemp);
		hourlyContainer.append(container);
	}
};

const renderThreeDayForecast = (data) => {
	const threedaycontainer = document.getElementById("threeDayContainer");
	const titleContainer = document.createElement("div");
	titleContainer.setAttribute("id", "titleContainer");
	const title = document.createElement("h2");
	title.textContent = "Three day Forecast";
	titleContainer.append(title);
	threedaycontainer.append(titleContainer);
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
		weatherIcon.src = dayForecasts[i].day.condition.icon;
		day.innerText = `${weekDay[getDay(parseISO(dayForecasts[i].date))]}  `;
		hiTemp.innerText = `H:${dayForecasts[i].day.maxtemp_c}\u00B0C`;
		lowTemp.innerText = `L:${dayForecasts[i].day.mintemp_c}`;
		chanceOfRain.innerText = `${dayForecasts[i].day.daily_chance_of_rain}%`;
		threedaycontainer.append(day);
		imgContainer.append(weatherIcon);
		imgContainer.append(chanceOfRain);
		threedaycontainer.append(imgContainer);
		threedaycontainer.append(lowTemp);
		threedaycontainer.append(hiTemp);
	}
};

const renderCurrentWeather = (data) => {
	const currentWeathercontainer = document.getElementById(
		"currentWeatherContainer"
	);

	const tempDisp = document.createElement("div");
	tempDisp.setAttribute("id", "tempDisp");

	const locDisplay = document.createElement("p");
	locDisplay.setAttribute("id", "locDisp");
	const currentWeatherImg = document.createElement("img");
	const temp = document.createElement("p");
	const currentWeather = document.createElement("p");
	const hiLoTemp = document.createElement("p");

	currentWeatherImg.src = data.current.condition.icon;
	locDisplay.textContent = `${data.location.name}`;
	temp.innerText = `${data.current.temp_c}\u00B0C`;
	currentWeather.innerText = `${data.current.condition.text} `;
	hiLoTemp.innerText = `H:${data.forecast.forecastday[0].day.maxtemp_c}\u00B0C L:${data.forecast.forecastday[0].day.mintemp_c}\u00B0C`;
	currentWeathercontainer.append(locDisplay);
	currentWeathercontainer.append(tempDisp);
	tempDisp.append(currentWeatherImg);
	tempDisp.append(temp);
	currentWeathercontainer.append(currentWeather);
	currentWeathercontainer.append(hiLoTemp);
};

const renderOtherInfo = (data) => {
	const otherinfoContainer = document.getElementById("otherInfo");

	const titleContainer = document.createElement("div");
	titleContainer.setAttribute("id", "titleContainer");
	const title = document.createElement("h2");
	title.textContent = "Air Conditions";

	const realFeelCont = document.createElement("div");
	const windCont = document.createElement("div");
	const rainCont = document.createElement("div");
	const uvCont = document.createElement("div");

	realFeelCont.setAttribute("id", "realFeelContainer");
	windCont.setAttribute("id", "windContainer");
	rainCont.setAttribute("id", "rainContainer");
	uvCont.setAttribute("id", "uvContainer");

	const realFeelTitle = document.createElement("h3");
	const windTitle = document.createElement("h3");
	const rainTitle = document.createElement("h3");
	const uvTitle = document.createElement("h3");

	realFeelTitle.textContent = "Real Feel";
	windTitle.textContent = "Wind Speed";
	rainTitle.textContent = "Chance Of Rain";
	uvTitle.textContent = "UV Index";

	const realFeel = document.createElement("p");
	const wind = document.createElement("p");
	const rain = document.createElement("p");
	const uv = document.createElement("p");

	realFeel.setAttribute("id", "realFeel");
	wind.setAttribute("id", "windSpeed");
	rain.setAttribute("id", "rain");
	uv.setAttribute("id", "uv");

	realFeel.innerText = `${data.current.feelslike_c}\u00B0C`;
	wind.innerText = `${data.current.wind_mph} MPH`;
	rain.innerText = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
	uv.innerText = `${data.current.uv}`;

	titleContainer.append(title);
	realFeelCont.append(realFeelTitle);
	windCont.append(windTitle);
	windCont.append(wind);
	rainCont.append(rainTitle);
	rainCont.append(rain);
	uvCont.append(uvTitle);
	uvCont.append(uv);
	realFeelCont.append(realFeel);
	otherinfoContainer.append(titleContainer);
	otherinfoContainer.append(realFeelCont);
	otherinfoContainer.append(windCont);
	otherinfoContainer.append(rainCont);
	otherinfoContainer.append(uvCont);
};

async function renderWeather(data) {
	renderCurrentWeather(data);
	renderHourlyWeather(data);
	renderThreeDayForecast(data);
	renderOtherInfo(data);
}
const bindSearch = (handler) => {
	const form = document.getElementById("form");
	const currentWeather = document.getElementById("currentWeatherContainer");
	const otherInfo = document.getElementById("otherInfo");
	const hourlyContainer = document.getElementById("hourlyContainer");
	const threedaycontainer = document.getElementById("threeDayContainer");
	const search = document.getElementById("search");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const location = search.value;
		currentWeather.innerHTML = "";
		otherInfo.innerHTML = "";
		hourlyContainer.innerHTML = "";
		threedaycontainer.innerHTML = "";
		handler(location);
	});
};

export { createHTMLElements, showUI, renderWeather, bindSearch };
