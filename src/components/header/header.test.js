import React from "react"
import Header from "./header"
import renderer from 'react-test-renderer';
import { GeolocationContext } from "../../context/geolocationContext"

describe("Check header structure with object required", () => {
  const geolocation = {
      city: "Londres",
      regionName: "Gran Londres",
      country: "Reino Unido",
      lat: 51.5072,
      lon: -0.1275
  }
  
  it('renders correctly', () => {
      const tree = renderer
        .create(<GeolocationContext.Provider value={{ geolocation }}><Header /></GeolocationContext.Provider>)
          .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})

