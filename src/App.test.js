import React from "react"
import renderer from 'react-test-renderer';
import App from "./app"

describe("Check App structure", () => {
    
  it('renders correctly', () => {
      const tree = renderer
        .create(<App />)
          .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})

