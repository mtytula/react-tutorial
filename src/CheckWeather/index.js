import {connect} from "react-redux";
import {setWeatherResultsAction} from "../actions";
import CheckWeatherComponent from "./CheckWeather";

const mapDispatchToProps = (dispatch) => ({
    checkWeather: (results) => dispatch(setWeatherResultsAction(results))
})

export const CheckWeather = connect(null, mapDispatchToProps)(CheckWeatherComponent);