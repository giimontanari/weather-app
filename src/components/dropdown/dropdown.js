/* Bookstores */
import React, { useState, useContext } from "react"
import { GeolocationContext } from "../../context/geolocationContext"
import Wrapper from "./dropdownStyle"
import MenuItem from "@material-ui/core/MenuItem"
import cities from "../../mocks/cities"

const Dropdown = () => {
    const [city, setCity] = useState()
    const { getWeather, setGeolocation } = useContext(GeolocationContext)
    
    const onChangeCity = (value) => {
        setCity(value.name)
        setGeolocation(value)
        getWeather(value)
    }

    return (
        <Wrapper value={city} onChange={e => onChangeCity(e.target.value)}>
            {cities.map(element => {
                return <MenuItem value={element}>{element.city}</MenuItem>
            })}
        </Wrapper>
        
    )
}

export default Dropdown

