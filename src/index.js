import "./style.css";
import { getLocation, getWeatherData } from "./apiFunctions";
import { showUI, bindSearch, renderWeather } from "./DOMFunctions";

async function test() {
	renderWeather(await getWeatherData(await getLocation()));
	showUI();
}
async function handleSearch(location) {
	renderWeather(await getWeatherData(location));
}
test();
bindSearch(handleSearch);
