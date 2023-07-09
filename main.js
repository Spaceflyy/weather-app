/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const search = document.getElementById("search");
// const subBtn = document.getElementsByTagName("input[type=text]");
const form = document.getElementById("form");
const display = document.getElementById("tempDisplay");

async function getData(location) {
	try {
		const response = await fetch(
			` https://api.weatherapi.com/v1/current.json?key=f5ce7cba05f246508ad95118230507&q=${location}	`
		);
		const data = await response.json();
		display.textContent = data.current.temp_c;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixVQUFVO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbi8vIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRbdHlwZT10ZXh0XVwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wRGlzcGxheVwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZjVjZTdjYmEwNWYyNDY1MDhhZDk1MTE4MjMwNTA3JnE9JHtsb2NhdGlvbn1cdGBcblx0XHQpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0ZGlzcGxheS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZXJyb3J9YCk7XG5cdH1cbn1cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoLnZhbHVlO1xuXHRnZXREYXRhKGxvY2F0aW9uKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9