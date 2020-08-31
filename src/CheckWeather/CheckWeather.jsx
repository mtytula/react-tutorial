import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Input} from "@material-ui/core"

const CheckWeatherComponent = ({checkWeather}) => {
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getWeatherResults = async city => {
        setIsLoading(true);
        let firstUrl = `https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=${city}`;
        fetch(firstUrl)
            .then((res) => res.json())
            .then((data) => {
                let secondUrl = `https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${data[0].woeid}`;
                fetch(secondUrl)
                    .then((res) => res.json())
                    .then((data) => {
                        setIsLoading(false);
                        checkWeather(data)
                    })
            })
    }

    return (
        <>
            <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button disabled={isLoading} onClick={() => getWeatherResults(city)}>Check</Button>
        </>
    )
}

CheckWeatherComponent.propTypes = {
    checkWeather: PropTypes.func.isRequired
};

export default CheckWeatherComponent;