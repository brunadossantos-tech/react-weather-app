import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Search from "./Search";

export default function Weather(props){
    const[weather, setWeather] = useState({ ready: false });
    const[city, setCity] = useState(props.city);

    function showWeather(response){
        setWeather({
            ready: true,
            name: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        let api = "e6fd7ecc8e8874aa21ff2b9996064645";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
        axios.get(url).then(showWeather);
  }
     function showCity(event) {
        setCity(event.target.value);
  }
    function searchWeather(event){
        event.preventDefault();
        handleSubmit();
    }

    if (weather.ready){
        return(
            <div className="Weather">
                <form onSubmit={searchWeather}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter city"
                                className="form"
                                onChange={showCity}/>
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary wt-100"/>
                        </div>
                    </div>
                </form>
                <Search data={weather} />
            </div>
        );
    } else{
        handleSubmit();
        return(
            <div>
                <p>Loading...</p>
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={30000}
                />
            </div>
        );
    }
}
