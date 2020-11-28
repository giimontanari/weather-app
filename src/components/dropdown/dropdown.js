/* Bookstores */
import React, { useState, useContext } from "react"
import { GeolocationContext } from "../../context/geolocationContext"
import MenuItem from "@material-ui/core/MenuItem"

/* Mocks */
import cities from "../../mocks/cities"

/* Styled Components */
import Wrapper from "./dropdownStyle"

const Dropdown = () => {
    const [city, setCity] = useState()
    const { setGeolocation } = useContext(GeolocationContext)
    
    const onChangeCity = (value) => {
        setCity(value)
        setGeolocation(value)
    }

    return (
        <Wrapper value={city} onChange={e => onChangeCity(e.target.value)}>
            {cities.map(element => {
                return <MenuItem key={element.city} value={element}>{element.city}</MenuItem>
            })}
        </Wrapper>
    )
}

export default Dropdown

