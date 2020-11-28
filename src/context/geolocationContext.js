/* Bookstores */
import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import axios from "axios"

const API_KEY = "e9d0d195a4336ef6d447af5549072a6f"

export const GeolocationContext = React.createContext()

const GeolocationProvider = props => {
    const [geolocation, setGeolocation] = useState()
    const [geoWeather, setGeoWeather] = useState()
    const prevGeo = useRef();

    const getWeather = async () => {
        let response = await axios(`http://api.openweathermap.org/data/2.5/onecall?lat=${geolocation.lat}&lon=${geolocation.lon}&lang=es&exclude=hourly,minutely&appid=${API_KEY}`)
        setGeoWeather(response.data)
    }

    const getLocationAndWeather = async () => {
        let response = await axios("http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp")
        setGeolocation(response.data);
    }
    
    useEffect(() => {
        getLocationAndWeather();
    }, [])

    useEffect(() => {
        if (prevGeo.current !== geolocation) {
            prevGeo.current = geolocation
            getWeather();
        }
    }, [geolocation])

  return <GeolocationContext.Provider value={{ geolocation, geoWeather, getWeather, setGeolocation }}>{props.children}</GeolocationContext.Provider>
}

export default GeolocationProvider

GeolocationProvider.propTypes = {
  children: PropTypes.node.isRequired
}
