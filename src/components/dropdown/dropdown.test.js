import React from "react"
import renderer from 'react-test-renderer';
import { GeolocationContext } from "../../context/geolocationContext"
import Dropdown from "./dropdown"

describe("Check dropdown structure", () => {
  const setGeolocation = jest.fn()  

  it('renders correctly', () => {
      const tree = renderer
        .create(<GeolocationContext.Provider value={{ setGeolocation }}><Dropdown /></GeolocationContext.Provider>)
          .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})

