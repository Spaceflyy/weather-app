import { format, parseISO, getDay, daysToWeeks } from "date-fns";
import temp from "./icons/temp.svg";
import water from "./icons/water.svg";
import windIm from "./icons/wind.svg";
import uvIm from "./icons/sun.svg";
import loc from "./icons/loc.svg";

const createHTMLElements = () => {
	const locIcon = new Image();
	locIcon.src = loc;

	locIcon.setAttribute("id", "locButton");

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
	input.setAttribute("placeholder", "Enter city / postcode");
	const button = document.createElement("input");
	button.setAttribute("type", "submit");
	form.append(input);
	form.append(locIcon);
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
	if (ui.style.display === "grid") {
		ui.style.display = "none";
		loader.style.display = "flex";
	} else {
		ui.style.display = "grid";
		loader.style.display = "none";
	}
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
		container.classList.add("hourlyInfo");
		const time = document.createElement("p");
		const hourTemp = document.createElement("p");
		const weatherImg = new Image();

		const line = document.createElement("div");
		line.classList.add("verticalLine");

		weatherImg.src = hourly[i].condition.icon;

		time.innerText = hourly[i].time.slice(11);

		hourTemp.innerText = `${hourly[i].temp_c}\u00B0C`;

		container.append(time);
		container.append(weatherImg);
		container.append(hourTemp);
		if (!(i % 6 === 0) || i === 6 || i === 18) {
			hourlyContainer.append(line);
		}
		hourlyContainer.append(container);
	}
};

const renderThreeDayForecast = (data) => {
	const threedaycontainer = document.getElementById("threeDayContainer");
	const titleContainer = document.createElement("div");
	titleContainer.setAttribute("id", "titleContainer");
	const title = document.createElement("h2");
	title.textContent = "Three Day Forecast";
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
	const line1 = document.createElement("div");
	line1.classList.add("horizontalLine");
	threedaycontainer.append(line1);
	for (let i = 0; i < dayForecasts.length; i++) {
		const line = document.createElement("div");
		line.classList.add("horizontalLine");
		const day = document.createElement("p");
		const hiTemp = document.createElement("p");
		const lowTemp = document.createElement("p");
		const chanceOfRain = document.createElement("p");
		const imgContainer = document.createElement("div");
		const weatherIcon = new Image();
		const rainImg = new Image();
		rainImg.src = water;
		const container = document.createElement("div");
		container.setAttribute("id", "container");
		weatherIcon.src = dayForecasts[i].day.condition.icon;
		if (i === 0) {
			day.innerText = "Today";
		} else {
			day.innerText = `${weekDay[getDay(parseISO(dayForecasts[i].date))]}  `;
		}

		hiTemp.innerText = `H:${dayForecasts[i].day.maxtemp_c}\u00B0C`;
		lowTemp.innerText = `L:${dayForecasts[i].day.mintemp_c}`;
		chanceOfRain.innerText = `${dayForecasts[i].day.daily_chance_of_rain}%`;

		threedaycontainer.append(day);
		imgContainer.append(weatherIcon);
		container.append(rainImg);
		container.append(chanceOfRain);
		imgContainer.append(container);

		threedaycontainer.append(imgContainer);
		threedaycontainer.append(lowTemp);
		threedaycontainer.append(hiTemp);
		threedaycontainer.append(line);
	}
};

const renderCurrentWeather = (data) => {
	const currentWeathercontainer = document.getElementById(
		"currentWeatherContainer"
	);

	const weatherData = document.createElement("div");
	weatherData.setAttribute("id", "currWeatherDisp");
	const timeContainer = document.createElement("div");
	timeContainer.setAttribute("id", "lastUpdated");

	const lastUpdatedTitle = document.createElement("h2");
	lastUpdatedTitle.textContent = "Last Updated";
	const lastUpdated = document.createElement("h3");

	const tempDisp = document.createElement("div");
	tempDisp.setAttribute("id", "tempDisp");

	const locDisplay = document.createElement("p");
	locDisplay.setAttribute("id", "locDisp");
	const currentWeatherImg = document.createElement("img");
	const temp = document.createElement("p");
	const currentWeather = document.createElement("p");
	const hiLoTemp = document.createElement("p");
	lastUpdated.innerText = data.current.last_updated;

	currentWeatherImg.src = data.current.condition.icon;
	locDisplay.textContent = `${data.location.name}`;
	temp.innerText = `${data.current.temp_c}\u00B0C`;
	currentWeather.innerText = `${data.current.condition.text} `;
	hiLoTemp.innerText = ` L:${data.forecast.forecastday[0].day.mintemp_c}\u00B0C H:${data.forecast.forecastday[0].day.maxtemp_c}\u00B0C`;
	weatherData.append(locDisplay);
	weatherData.append(tempDisp);
	tempDisp.append(currentWeatherImg);
	tempDisp.append(temp);
	weatherData.append(currentWeather);
	weatherData.append(hiLoTemp);
	currentWeathercontainer.append(weatherData);
	timeContainer.append(lastUpdatedTitle);
	timeContainer.append(lastUpdated);
	currentWeathercontainer.append(timeContainer);
};

const renderOtherInfo = (data) => {
	const otherinfoContainer = document.getElementById("otherInfo");

	const titleContainer = document.createElement("div");
	titleContainer.setAttribute("id", "titleContainer");
	const title = document.createElement("h2");
	title.textContent = "Air Conditions";

	const realFeelCont = document.createElement("div");
	const container = document.createElement("div");
	const container2 = document.createElement("div");
	const container3 = document.createElement("div");
	const container4 = document.createElement("div");
	const windCont = document.createElement("div");
	const rainCont = document.createElement("div");
	const uvCont = document.createElement("div");

	container.setAttribute("id", "container");
	container2.setAttribute("id", "container");
	container3.setAttribute("id", "container");
	container4.setAttribute("id", "container");

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

	const realFeelImg = new Image();
	realFeelImg.src = temp;

	const rainImg = new Image();
	rainImg.src = water;

	const windImg = new Image();
	windImg.src = windIm;

	const uvImg = new Image();
	uvImg.src = uvIm;

	realFeel.innerText = `${data.current.feelslike_c}\u00B0C`;
	wind.innerText = `${data.current.wind_mph} MPH`;
	rain.innerText = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
	uv.innerText = `${data.current.uv}`;

	container.append(realFeelImg);
	container.append(realFeel);

	container2.append(rainImg);
	container2.append(rain);

	container3.append(windImg);
	container3.append(wind);

	container4.append(uvImg);
	container4.append(uv);

	titleContainer.append(title);
	realFeelCont.append(realFeelTitle);
	realFeelCont.append(container);

	windCont.append(windTitle);
	windCont.append(container2);

	rainCont.append(rainTitle);
	rainCont.append(container3);

	uvCont.append(uvTitle);
	uvCont.append(container4);

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

const bindLocButton = (handler) => {
	const locBtn = document.getElementById("locButton");
	const currentWeather = document.getElementById("currentWeatherContainer");
	const otherInfo = document.getElementById("otherInfo");
	const hourlyContainer = document.getElementById("hourlyContainer");
	const threedaycontainer = document.getElementById("threeDayContainer");
	locBtn.addEventListener("click", () => {
		currentWeather.innerHTML = "";
		otherInfo.innerHTML = "";
		hourlyContainer.innerHTML = "";
		threedaycontainer.innerHTML = "";
		handler();
	});
};

export { createHTMLElements, showUI, renderWeather, bindSearch, bindLocButton };
