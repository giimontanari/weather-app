/* Bookstores */
import React from "react"
import List from "./components/list/list"
import Header from "./components/header/header"
import GeolocationProvider from "./context/geolocationContext"
import './App.css';

function App() {
  return (
    <div className="App">
      <GeolocationProvider>
        <Header />
        <div className="Body">
          <List />
        </div>
      </GeolocationProvider>
    </div>
  );
}

export default App;
