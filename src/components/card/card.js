/* Bookstores */
import React from "react"
import PropTypes from "prop-types"
import Divider from "@material-ui/core/Divider"
import moment from "moment"
import 'moment/locale/es';

/* Styled Components */
import Wrapper from "./cardStyle"

const Card = ({ weather }) => {
    const KelvinToCelsius = (temp) => {
        return (temp-273.15).toFixed(0)
    }

    const ConvertDate = (date) => {
        let today = moment(new Date()).format("dddd DD MMMM, YYYY")
        let day = moment(new Date(date * 1000)).format("dddd DD MMMM, YYYY")
        if (today === day) {
           return "EL TIEMPO AHORA"
        }
        return day
    }
    
    return (
        <Wrapper>
            <div className="card-container">
                <h1 className="card-container-title">{ConvertDate(weather.dt)}</h1>
                <h3 className="card-container-temp">{KelvinToCelsius(weather.temp.day)}°</h3>
            </div>
            <div className="card-others">
                <span className="card-others-detail">Temp. Min: {KelvinToCelsius(weather.temp.min)}°</span>
                <Divider light variant="middle" className="card-others-divider"/>
                <span className="card-others-detail">Temp. Máx: {KelvinToCelsius(weather.temp.max)}°</span>
                <Divider light variant="middle" className="card-others-divider"/>
                <span className="card-others-detail">Humedad: {weather.humidity}%</span>
            </div>
        </Wrapper>
    )
}

export default Card

Card.propTypes = {
    weather: PropTypes.shape({
      dt: PropTypes.number,
      temp: PropTypes.object,
      humidity: PropTypes.number
    }).isRequired
}