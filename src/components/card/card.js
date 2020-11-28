/* Bookstores */
import React from "react"
import Divider from "@material-ui/core/Divider"
import moment from "moment"

/* Styled Components */
import Wrapper from "./cardStyle"

const Card = ({ weather }) => {

    const KelvinToCelsius = (temp) => {
        return (temp-273.15).toFixed(0)
    }

    const ConvertDate = (date) => {
        return moment(new Date(date * 1000)).format("DD/MM/YYYY");
    }
    
    return (
        <Wrapper>
            <div className="card-container">
                <h1 className="card-container-title">{ConvertDate(weather.dt)}</h1>
                <h3 className="card-container-temp">{KelvinToCelsius(weather.temp.day)}°</h3>
            </div>
            <div className="card-others">
                <span className="card-others-detail">Min: {KelvinToCelsius(weather.temp.min)}°</span>
                <Divider light variant="middle" className="card-others-divider"/>
                <span className="card-others-detail">Máx: {KelvinToCelsius(weather.temp.max)}°</span>
                <Divider light variant="middle" className="card-others-divider"/>
                <span className="card-others-detail">Humedad: {weather.humidity}%</span>
            </div>
        </Wrapper>
    )
}

export default Card