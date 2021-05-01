import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";

export default function Search(props){
    return(
        <div className="Search">
            <h1>
                {props.data.name}
            </h1>
            <ul>
                <li>
                    <Date date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src={props.data.icon}
                            alt={props.data.description}
                            className="float-left"/>{""}
                        <div className="float-left">
                            <Temperature metric={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humdity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}Km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}