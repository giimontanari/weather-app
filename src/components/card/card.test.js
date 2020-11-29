import React from "react"
import renderer from 'react-test-renderer';
import Card from "./card"

describe("Check card structure with object required", () => {
    const weather = {
        dt: 31231231213,
        temp: {
            day: 213,
            min: 322,
            max: 432
        },
        humidity: 19
    }

    it('renders correctly', () => {
      const tree = renderer
        .create(<Card weather={weather} />)
          .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})

