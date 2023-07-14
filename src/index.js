import "./style.css";
import { getLocation, getWeatherData } from "./apiFunctions";
import { bindSearch, renderWeather } from "./DOMFunctions";

async function test() {
	renderWeather(await getWeatherData(await getLocation()));
}
test();

async function handleSearch(location) {
	renderWeather(await getWeatherData(location));
}

bindSearch(handleSearch);
