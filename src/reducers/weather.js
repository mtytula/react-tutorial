import {SET_WEATHER_RESULTS} from "../actions";

const initialState = {
    weatherData: {}
}
export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_RESULTS: {
            console.log(action)
            return {
                weatherData: action.payload
            }
        }
        default:
            return state;
    }
}