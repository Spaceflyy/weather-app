/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const search = document.getElementById("search");
const subBtn = document.getElementsByTagName("input[type=text]");
const form = document.getElementById("form");
const display = document.getElementById("tempDisplay");

async function getData(location) {
	try {
		const response = await fetch(
			` https://api.weatherapi.com/v1/current.json?key=f5ce7cba05f246508ad95118230507&q=${location}	`
		);
		const data = await response.json();
		console.log(data);
		display.textContent = data.temp_c;
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;
	getData(location);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixVQUFVO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFt0eXBlPXRleHRdXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBEaXNwbGF5XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdGAgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1mNWNlN2NiYTA1ZjI0NjUwOGFkOTUxMTgyMzA1MDcmcT0ke2xvY2F0aW9ufVx0YFxuXHRcdCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRkaXNwbGF5LnRleHRDb250ZW50ID0gZGF0YS50ZW1wX2M7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZXJyb3J9YCk7XG5cdH1cbn1cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoLnZhbHVlO1xuXHRnZXREYXRhKGxvY2F0aW9uKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9