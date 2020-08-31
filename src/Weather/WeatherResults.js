import React, {Component} from "react";

class WeatherResults extends Component {
    render() {
        if (this.props.weatherData.consolidated_weather) {
            return (
                <div>
                    <h2>Weather forecast for: {this.props.weatherData.title}</h2>
                    <h2>Location Type: {this.props.weatherData.location_type}</h2>
                    <h2>Timezone: {this.props.weatherData.timezone}</h2>
                    <ul>
                        {this.props.weatherData.consolidated_weather.map((item) => <li key={item.id}>{item.the_temp} *C</li>)}
                    </ul>
                </div>
            );
        }

        return null;
    }
}

export default WeatherResults;