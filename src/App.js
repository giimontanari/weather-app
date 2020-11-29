/* Bookstores */
import React from "react"
import ListOfCard from "./components/listOfCard/listOfCard"
import Header from "./components/header/header"
import GeolocationProvider from "./context/geolocationContext"
import './App.css';

function App() {
  return (
    <div className="App">
      <GeolocationProvider>
        <Header />
        <div className="Body">
          <ListOfCard />
        </div>
      </GeolocationProvider>
    </div>
  );
}

export default App;
