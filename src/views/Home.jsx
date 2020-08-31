import React from "react";
import {CheckWeather} from "../CheckWeather";
import {Weather} from "../Weather/index";

const Home = () => {
    return (
        <>
            <CheckWeather/>
            <Weather/>
        </>
    )
}

export default Home;