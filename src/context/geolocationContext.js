/* Bookstores */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

const API_KEY = "e9d0d195a4336ef6d447af5549072a6f"

export const GeolocationContext = React.createContext()

const GeolocationProvider = props => {
    const [geolocation, setGeolocation] = useState("")
    const [geoWeather, setGeoWeather] = useState("")

    const getWeather = async (geolocation) => {
        console.log(geolocation)
        await axios(`http://api.openweathermap.org/data/2.5/onecall?lat=${geolocation.lat}&lon=${geolocation.lon}&lang=es&exclude=hourly,minutely&appid=${API_KEY}`)
            .then(response => {
                setGeoWeather(response.data)
            })
    }

    const getLocationAndWeather = async () => {
        await axios("http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp")
            .then(response => {
                setGeolocation(response.data);
                getWeather(response.data);
            })
    }
    
    useEffect(() => { 
        getLocationAndWeather();
    }, [])

  return <GeolocationContext.Provider value={{ geolocation, setGeolocation, geoWeather, setGeoWeather }}>{props.children}</GeolocationContext.Provider>
}

export default GeolocationProvider

GeolocationProvider.propTypes = {
  children: PropTypes.node.isRequired
}
