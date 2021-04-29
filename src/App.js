import React from "react";
import Info from "./components/info"
import Weather from "./components/weather";
import Form from "./components/form";

const apiKey = "03620c6249b3c68d28b4436dcf9ed3eb";


class App extends React.Component {

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03620c6249b3c68d28b4436dcf9ed3eb&units=metric`);
        let data = await api_url.json()
        console.log(data);
    }


    render() {
        return (
          <div>
              <Info/>
              <Weather/>
              <Form weatherMethod = {this.gettingWeather}/>
          </div>
        );
    }
}

export default  App;