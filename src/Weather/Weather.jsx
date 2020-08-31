import React from 'react';
import PropTypes from "prop-types";
import WeatherResults from "./WeatherResults";

export const WeatherComponent = ({ weatherData }) => (
    <ul>
        <WeatherResults weatherData={weatherData} />
    </ul>
);

WeatherComponent.propTypes = {
    city: PropTypes.string
}
// export const WeatherComponent = ({ city }) ({
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         city: ""
    //     }
    // }

    // componentDidMount() {
    //     fetch("https://cors-anywhere.herokuapp.com/www.metaweather.com//api/location/search/?query=london")
    //         .then(response => response.json())
    //         .then((response) => {
    //             fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com//api/location/${response[0].woeid}`)
    //                 .then((response) => response.json())
    //                 .then((response) => this.setState({weatherData: response}))
    //         })
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }
    //
    //
    // handleOnClick = (city) => {
    //     this.setState(this.state.city, city)
    //     console.log(`You're looking for: ${this.state.city}`)
    // }
    //
    // render() {
    //     return (
    //         <WeatherInput
    //             handleOnClick={this.handleOnClick}
    //         />
    //     );
    // }
// })