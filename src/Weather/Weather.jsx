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
