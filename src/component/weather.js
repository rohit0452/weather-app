import React from "react";

const Weather =(props)=> {
        return (
            <div>
                {props.city && <h2 id="cityname"> {props.city}  , {props.country} </h2>}
                {props.temperature && <h1 id="temp"> {props.temperature} ° </h1>}
                {props.description && <h2 id="description"> {props.description} </h2>}
                {props.humadity && <p id="humadity"> Humidity : {props.humadity}    </p>} 
                {props.error && <p id="err">{props.error}</p>}
            </div>

        )
    }

export default Weather