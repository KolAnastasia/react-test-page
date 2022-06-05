import Header from "../../components/Header";
import React, { useEffect, useState} from "react";

const WeatherPage = () => {

    
     // fetch("")
       
     const [users, setUsers] = useState([])

     const fetchData = () => {
       fetch("https://api.openweathermap.org/data/3.0/onecall?lat=51.67736807571518&lon=39.19305461001669&exclude=hourly&appid=53b2874620ba463264e4a8754d293e06")
         .then(response => {
           return response.json()
         })
         .then(data => {
           setUsers(data)
         })
     }
   
     useEffect(() => {
       fetchData()
     }, [])

    return (
        <>
              <Header title="weatherPage"></Header>
                <p> 
                    This is WeatherPage;
                </p>
        </>
        
    )
}

export default WeatherPage;