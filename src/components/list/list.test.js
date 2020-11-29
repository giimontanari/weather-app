import React from "react"
import renderer from 'react-test-renderer';
import List from "./list"
import { GeolocationContext } from "../../context/geolocationContext"

describe("Check list structure with object required", () => {
    
  const jsGeoWeather = {
    daily: [
      {
        dt: 31231231213,
        temp: {
          day: 213,
          min: 322,
          max: 432
        },
        humidity: 19
      }
    ]
  }

  it('renders correctly', () => {
    
      const tree = renderer
        .create(<GeolocationContext.Provider value={{ geoWeather: jsGeoWeather }}><List /></GeolocationContext.Provider>)
          .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})


