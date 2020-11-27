/* Bookstores */
import React, { useContext} from "react"
import { GeolocationContext } from "../../context/geolocationContext"
import Card from "../card/card"
import Grid from "@material-ui/core/Grid"
import Wrapper from "./listStyle"

const List = () => {
    const { geoWeather } = useContext(GeolocationContext)
   
    console.log(geoWeather)
    return (
        <Wrapper>
            <Grid container direction="column" justify="center">
                {geoWeather && geoWeather.daily.map(item => 
                    <Grid item xs={12} md={5}> 
                        < Card weather={item} />
                    </Grid>
                )} 
            </Grid>
        </Wrapper>
    )  
}

export default List