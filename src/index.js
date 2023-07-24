import "./style.css";
import { getLocation, getWeatherData } from "./apiFunctions";
import {
	bindLocButton,
	createHTMLElements,
	showUI,
	bindSearch,
	renderWeather,
} from "./DOMFunctions";

async function setup() {
	createHTMLElements();
	renderWeather(await getWeatherData("London"));
	showUI();
}

async function handleSearch(location) {
	showUI();
	renderWeather(await getWeatherData(location));
	showUI();
}

async function handleGetLoc() {
	showUI();
	renderWeather(await getWeatherData(await getLocation()));

	showUI();
}

setup();
bindLocButton(handleGetLoc);
bindSearch(handleSearch);
