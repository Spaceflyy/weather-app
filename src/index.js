import "./style.css";
import { getLocation, getWeatherData } from "./apiFunctions";
import renderWeather from "./DOMFunctions";

async function test() {
	renderWeather(await getWeatherData(await getLocation()));
}
test();
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;
	hourlyContainer.innerHTML = "";
	getWeatherData(location);
});
