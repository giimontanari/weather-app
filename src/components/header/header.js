/* Bookstores */
import React, { useContext } from "react"
import Wrapper from "./headerStyle"
import { GeolocationContext } from "../../context/geolocationContext"
import Dropdown from "../dropdown/dropdown"

const Header = () => {
    const { geolocation } = useContext(GeolocationContext)

    return (
        <div>
            <Wrapper>
                <div className="header-container">
                    {geolocation ? <span className="header-title">{geolocation.city}, {geolocation.regionName}, {geolocation.country}</span> : null}
                    <Dropdown />
                </div>
            </Wrapper>
        </div>
    )
}

export default Header

