import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import { useState, useEffect } from "react";
import logo from "./logo.png";
// import styledCharacters from "./components/Characters";
import Characters from "./components/Characters";

function App() {

  const [pageNum, setPageNum] = useState(0)

  // const locations = useLocations(pageNum);
  const characters = useCharacters(pageNum);
  
  function logCharacters() {
    // console.log("Characters data: ");
    // console.log(characters);
    document.querySelector(".charactersPage").classList.add("show")
    setPageNum(pageNum + 1)
  }
  
  // const logLocations = () => {
  //   // console.log("Locations data: ");
  //   // console.log(locations);
  //   setPageNum(pageNum + 1)
  // }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <div className="btn-container">
        <button onClick={logCharacters} className="charactersBtn" type="button">Characters</button>
        {/* <button onClick={logLocations} className="locationsBtn" type="button">Locations</button> */}
      </div>
      <div className="charactersPage">
        <Characters data={characters.results} />
      </div>
    </div>
  )
}

export default App;
