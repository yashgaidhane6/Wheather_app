const apiKey = "753a27973326e34a3e102e5fe21088fe";

async function getWeather(){

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("cityName").innerHTML =
    data.name;

    document.getElementById("temp").innerHTML =
    Math.round(data.main.temp) + "°C";

    document.getElementById("humidity").innerHTML =
    data.main.humidity + "%";

    document.getElementById("wind").innerHTML =
    data.wind.speed + " km/h";

    document.getElementById("icon").src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}
