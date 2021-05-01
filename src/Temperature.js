import React, { useState } from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("metric");

    function convertF(event){
        event.preventDefault();
        setUnit("imperial");
    }

    function convertC(event){
        event.preventDefault();
        setUnit("metric");
    }

    if (unit === "metric"){
        return(
            <div className="weatherUnits">
                <span className="temperature">{props.metric}</span>
                <span className="units">ºC |</span>
                <span className="units">
                    <a href="/" onClick={convertF}>ºF</a>
                </span>
            </div>
        );
    } else{
        let imperial = (Math.round(props.celsius *9)/5+32);
        return(
            <div className="weatherUnits">
                <span className="temperature">{imperial}</span>
                <span className="units">
                    <a href="/" onClick={convertC}>ºC</a>{" "}|{" "}
                </span>
                <span className="units">ºF</span>
            </div>
        );
    }
}