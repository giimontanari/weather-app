/* Bookstores */
import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import { GeolocationContext } from "../../context/geolocationContext"
import Card from "../card/card"

/* Styled Components */
import Wrapper from "./listOfCardStyle"

const ListOfCard = () => {
    const { geoWeather } = useContext(GeolocationContext)
   
    return (
        <Wrapper>
            <Grid container direction="row" alignItems="center" spacing={2} className="grid-center">
                {geoWeather && geoWeather.daily.map(item => 
                    <Grid key={Math.random()} item xs={7} sm={7}>
                        <Card key={item.city} weather={item} />
                   </Grid>
                )}
            </Grid>
        </Wrapper>
    )  
}

export default ListOfCard