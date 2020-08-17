import React from 'react';
import Title from "./component/title"
import './App.css';
import Form from './component/form';
import Weather from './component/weather';

const API_KEY = "ca53a288eb7529a887d9fea2cdec813f"

class App extends React.Component {

  state = {
    city: "Indore",
    country: "IN",
    temperature: 29,
    humadity: 90,
    description: "Sunny",
    error: undefined
  }


  render() {
    return (
      <div className="container" >
        <div id="qwerty">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather city={this.state.city} country={this.state.country} temperature={this.state.temperature} humadity={this.state.humadity} description={this.state.description} error={this.state.error} />
      </div>
      </div>
    );
  }


  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;

    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${API_KEY}`);
    const data = await apicall.json();
    console.log(data)

    if (city) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humadity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humadity: undefined,
        description: undefined,
        error: "Please Enter City Name"
      })
    }
  }


}
export default App;
