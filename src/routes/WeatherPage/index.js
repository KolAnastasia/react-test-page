import Header from "../../components/Header";
import React, { useEffect, useState} from "react";

const WeatherPage = () => {

    
     // fetch("")
       
     const [weather, setWeather] = useState([])

     const fetchData = () => {
      fetch("http://api.openweathermap.org/data/2.5/onecall?lat=51.67736807571518&lon=39.19305461001669&lang=ru&exclude=hourly&appid=53b2874620ba463264e4a8754d293e06")
    
      .then(response => {
           return response.json()
         })
         .then(data => {
           setWeather(data)
           
           
         
         })
       
        
     }
   
     useEffect(() => {
       fetchData()
     }, [])

    const objWeather = Object.values(weather);
    const currentWeatherValues = objWeather[4];
    const currentWeather = currentWeatherValues && currentWeatherValues.weather; 
    const currentWeatherTemp = currentWeatherValues && currentWeatherValues.temp; 
    const currentWeatherDesc = currentWeather && currentWeather[0].description;
    const currentWeatherIconId = currentWeather && currentWeather[0].icon;
    
    
    return (
        <>
          <Header title="weatherPage"></Header>
          <p> Температура воздуха: {Math.trunc(currentWeatherTemp - 272)}</p>
          <p> 
            {currentWeatherDesc} 
            <img src={`http://openweathermap.org/img/wn/${currentWeatherIconId}.png`} />
          </p>
        </>
        
    )
}

export default WeatherPage;