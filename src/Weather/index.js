import {WeatherComponent} from "./Weather";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    weatherData: state.weatherData
})

export const Weather = connect(mapStateToProps)(WeatherComponent);