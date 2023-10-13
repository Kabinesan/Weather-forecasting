const apiKey = "8f0ec604b2eedd917006c3e7d783b8f1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector("input");
const searchbtn = document.querySelector("button");
const weatherIcon = document.querySelector("#weather_icon")

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector("#min_temp").innerHTML = Math.round(data.main.temp_min) + " °C";
    document.querySelector("#max_temp").innerHTML = Math.round(data.main.temp_max) + " °C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
    document.querySelector("#speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector("#pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector("#visibility").innerHTML = (data.visibility)/1000 + " km";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector("#details").style.display = "block";

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})