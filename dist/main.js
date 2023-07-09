/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const search = document.getElementById("search");
// const subBtn = document.getElementsByTagName("input[type=text]");
const form = document.getElementById("form");
const display = document.getElementById("tempDisplay");

const getData = async (location) => {
	try {
		const response = await fetch(
			` https://api.weatherapi.com/v1/current.json?key=f5ce7cba05f246508ad95118230507&q=${location}	`
		);
		const data = await response.json();
		display.textContent = `${data.location.name} ${data.current.temp_c}\u00B0C`;
	} catch (error) {
		console.error(`Error: ${error}`);
	}
};

const getlocation = async (lat, long) => {
	const location = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=af91cea604034c6db9a08743831a8590`
	);

	const data = await location.json();

	getData(data.results[0].components.suburb);
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
	getData(location);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixVQUFVO0FBQ2pHO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQ3JFLEdBQUc7QUFDSCwwQkFBMEIsTUFBTTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSSxHQUFHLEtBQUs7QUFDaEU7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuLy8gY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFt0eXBlPXRleHRdXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBEaXNwbGF5XCIpO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdGAgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1mNWNlN2NiYTA1ZjI0NjUwOGFkOTUxMTgyMzA1MDcmcT0ke2xvY2F0aW9ufVx0YFxuXHRcdCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5sb2NhdGlvbi5uYW1lfSAke2RhdGEuY3VycmVudC50ZW1wX2N9XFx1MDBCMENgO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke2Vycm9yfWApO1xuXHR9XG59O1xuXG5jb25zdCBnZXRsb2NhdGlvbiA9IGFzeW5jIChsYXQsIGxvbmcpID0+IHtcblx0Y29uc3QgbG9jYXRpb24gPSBhd2FpdCBmZXRjaChcblx0XHRgaHR0cHM6Ly9hcGkub3BlbmNhZ2VkYXRhLmNvbS9nZW9jb2RlL3YxL2pzb24/cT0ke2xhdH0rJHtsb25nfSZrZXk9YWY5MWNlYTYwNDAzNGM2ZGI5YTA4NzQzODMxYTg1OTBgXG5cdCk7XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IGxvY2F0aW9uLmpzb24oKTtcblxuXHRnZXREYXRhKGRhdGEucmVzdWx0c1swXS5jb21wb25lbnRzLnN1YnVyYik7XG59O1xuXG5jb25zdCBnZXRDb29yZHMgPSAoKSA9PlxuXHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcblxuZ2V0Q29vcmRzKClcblx0LnRoZW4oKHBvc2l0aW9uKSA9PiB7XG5cdFx0Z2V0bG9jYXRpb24ocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcblx0fSlcblx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdH0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHNlYXJjaC52YWx1ZTtcblx0Z2V0RGF0YShsb2NhdGlvbik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==