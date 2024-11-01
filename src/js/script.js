const apiKey = "b1bfd3185080b533d65e16e8b46e9ae1"
const openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="
const openWeatherIMG = "https://openweathermap.org/img/wn/"
const openWeatherPARANS = "&lang=pt_br&units=metric"


function getUserInput() {
    const cityName = document.querySelector(".control-weatherSearchButton").value
    getApiData(cityName)
}


async function getApiData(cityName){
    const rawData = await fetch(`${openWeatherURL}${cityName}&appid=${apiKey}${openWeatherPARANS}`).then(response => response.json() )
    updateScreenValues(rawData);
    console.log(rawData);
}


function updateScreenValues(data){
    document.querySelector(".data_city_name").innerHTML = data.name
    document.querySelector(".data_country").innerHTML = data.sys.country
    document.querySelector(".data_temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".data_text_description").innerHTML = data.weather[0].description
    document.querySelector(".data_weather_logo").src = data.weather[0].description.src=`${openWeatherIMG}${data.weather[0].icon}.png`

    document.querySelector(".data_wind_speed").innerHTML = data.wind.speed + " Km/h"
    document.querySelector(".data_wind_direction").innerHTML = data.wind.deg + "°"
    document.querySelector(".data_pressure").innerHTML = data.main.pressure  + " hPa"

}