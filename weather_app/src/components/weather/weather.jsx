import { useEffect, useRef, useState } from "react"
import cloud from "../weather/images/clouds.png"
import humidity from "../weather/images/humidity.png"
import wind from "../weather/images/wind.png"
import clear from "../weather/images/clear.png"
import drizzle from "../weather/images/drizzle.png"
import mist from "../weather/images/mist.png"
import rain from "../weather/images/rain.png"
import snow from "../weather/images/snow.png"
import "../weather/weather.Css"
function Weather(){
    let inputRef=useRef();
    let [WeatherData,setWeatherData]=useState(false );
    const Key="a261d284bc81026e133fab00962ed275";
    const allicons={"01d":clear,"01n":clear,"02d":cloud,"02n":cloud,"03d":cloud,"03n":cloud,"04d":drizzle,"04n":drizzle,"09d":rain,"09n":rain,"10d":rain,"10n":rain,"13d":snow,"13n":snow}
    async function search(city){
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${Key}`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            const icon=allicons[data.weath[0].icon] || clear;
            setWeatherData({
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            });
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        search("Siliana");
        
    },[])
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search()
    }}
    return(
       
        <div>
            <div className="search_bar">
                <span className="uil_search"><img src={search_icon} alt="" /></span>
                <input type="text" placeholder="enter city name" spellCheck="false" useRef={inputref} onKeyDown={handleKeyDown}/>
                {/*</input><button><img src="search.png" alt=""></button>*/}
            </div>
            <div class="weather">
                <img src={clear} className="weather_icon" alt="" />
                <h1 class="temp">{WeatherData.temprature}°C</h1>
                <h2 class="city">{WeatherData.location}</h2>
                <div class="details">
                    <div class="col">
                        <img src={humidity} alt="" />
                    <div>
                        <p class="humidity">{WeatherData.humidity} % </p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src={wind} alt="" />
                    <div>
                        <p class="wind">{WeatherData.windspeed} km/h</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default Weather;