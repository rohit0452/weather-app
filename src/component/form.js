import React from "react";
import "../App.css";

const Form = (props) => {

    return (
        <div className="formdiv">
            <form onSubmit={props.getWeather} >
                <div>
                    <input id="inputdiv" type="text" name="city" placeholder="Enter your City Name" />
                </div>
            </form>
        </div>
    )
}

export default Form