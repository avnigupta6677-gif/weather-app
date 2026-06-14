
async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "77dd68835f106abd5815f79705246f87";  

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();
    if (data.cod != 200) {
    document.getElementById("result").innerHTML = "City not found!";
    return;
}

    const icon = data.weather[0].icon;
    console.log(icon);

    let emoji = "☀️";

    if(data.weather[0].main === "Clouds") emoji = "☁️";
    if(data.weather[0].main === "Rain") emoji = "🌧️";
    if(data.weather[0].main === "Thunderstorm") emoji = "⛈️";

    document.getElementById("result").innerHTML =
    `
    <h2>${data.name}</h2>

<h1>${emoji}</h1>

<p>Temperature: ${data.main.temp}°C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Weather: ${data.weather[0].main}</p>
<p>Country: ${data.sys.country}</p>
<p>Wind Speed: ${data.wind.speed} m/s</p>
<p>Feels Like: ${data.main.feels_like}°C</p>
    `;
}
