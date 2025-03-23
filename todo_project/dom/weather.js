import config from "./apiKey.js";

const weatherContainer = document.querySelector('.weather-container');
const weatherContainer2 = document.querySelector('.weather-container2')
const APIKEY = config;
     
const weatherIcons = ["<img src='icon/cloud.png'/>","icon/rainy.png","icon/sun.png"];
function successGeo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const apiAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    fetch(apiAddress)
    .then(resonse => resonse.json())
    .then(data=>{
        weatherContainer2.innerHTML = `${data.name} <br>`;
        const weatherIcon = iconsSelect(data.weather[0].main);
        weatherContainer.innerHTML =`${weatherIcon} / ${data.main.temp}도`
    });
}

function iconsSelect(weather){
    if (weather=="Clouds"){
        return "☁️"
    } else if(weather=="Rain"){
        return "☀️"
    } else if(weather=="Snow"){
        return "☃️"
    }
}

function errorGeo(){
    alert("날씨 정보 제공을 위해 위치 서비스 허용해주세요.")
}



navigator.geolocation.getCurrentPosition(successGeo,errorGeo);