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
		console.log(data);
		display.innerText = data.current.temp_c;
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;
	getData(location);
});
