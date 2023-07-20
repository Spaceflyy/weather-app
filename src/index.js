import "./style.css";
import { getLocation, getWeatherData } from "./apiFunctions";
import {
	createHTMLElements,
	showUI,
	bindSearch,
	renderWeather,
} from "./DOMFunctions";

async function test() {
	createHTMLElements();
	renderWeather(await getWeatherData(await getLocation()));

	showUI();
}

async function handleSearch(location) {
	showUI();
	renderWeather(await getWeatherData(location));
	showUI();
}

test();
bindSearch(handleSearch);
