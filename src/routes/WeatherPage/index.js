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

    const currentWeather = Object.values(weather);
    const currentWeatherValues = currentWeather[4];


      // const weather = Array.from(weatherObj);
    return (
        <>
              <Header title="weatherPage"></Header>
              <div key={weather.current}>

                 {/* { console.log(weather.current)} */}
                  </div>
                <p> 
          
                    {/* {  console.log("2")}
                   {  console.log(Object.values(weather))} */}
                   {  console.log(currentWeatherValues)}  
                   {  console.log("currentWeatherValues")}  
                   {  console.log(currentWeather[4])}  
                   {console.log("1")}
           
                </p>
        </>
        
    )
}

export default WeatherPage;