/* Bookstores */
import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import { GeolocationContext } from "../../context/geolocationContext"
import Card from "../card/card"

/* Styled Components */
import Wrapper from "./listStyle"

const List = () => {
    const { geoWeather } = useContext(GeolocationContext)
   
    return (
        <Wrapper>
            <Grid container direction="row" alignItems="center" spacing={2}>
                {geoWeather && geoWeather.daily.map(item => 
                    <Grid key={Math.random()} item xs={12} sm={6}>
                        <Card key={item.city} weather={item} />
                   </Grid>
                )}
            </Grid>
        </Wrapper>
    )  
}

export default List