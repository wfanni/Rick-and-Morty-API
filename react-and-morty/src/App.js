import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import { useState } from "react";
import logo from "./logo.png";
import dab from "./SVG/dab.svg";
import look from "./SVG/look.svg";
import Characters from "./components/Characters/Characters";
import Locations from "./components/Locations/Locations";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [pageNumCharacters, setPageNumCharacters] = useState(1)
  const [pageNumLocations, setPageNumLocations] = useState(1)

  const locations = useLocations(pageNumLocations);
  const characters = useCharacters(pageNumCharacters);

  // console.log(locations)
  console.log(locations.results)


  const clickOnCharacters = () => {
    document.getElementById("desc-main").classList.add("hide");
    document.getElementsByClassName("desc-char")[0].classList.add("show");
    document.getElementsByClassName("desc-loc")[0].classList.remove("show");
    document.getElementsByClassName("svg-container")[0].classList.add("hide")
  }

  const clickOnLocations = () => {
    document.getElementById("desc-main").classList.add("hide");
    document.getElementsByClassName("desc-loc")[0].classList.add("show");
    document.getElementsByClassName("desc-char")[0].classList.remove("show");
    document.getElementsByClassName("svg-container")[0].classList.add("hide")
  }

  const clickOnLogo = () => {
    document.getElementById("desc-main").classList.remove("hide");
    document.getElementsByClassName("desc-char")[0].classList.remove("show");
    document.getElementsByClassName("desc-loc")[0].classList.remove("show");
    document.getElementsByClassName("svg-container")[0].classList.remove("hide")
  }

  return (

    <Router>
      <header className="App">
          <Link className="logoA" to="/" onClick={clickOnLogo} ><img className="logo" src={logo} alt="logo" /></Link>
      </header>

        <div className="desc-container">
          <div id="desc-main">
            <span className="desc" id="firstSpan">Welcome to our online database of the fantastic hit TV show, Rick and Morty!</span>
            <span className="desc" id="secondSpan">Click on the buttons below to start browsing!</span>
          </div>
          <h2 className="desc-char">Characters</h2>
          <h2 className="desc-loc">Locations</h2>
        </div>

        <div className="btn-container">
          <Link to="/characters" className="charactersBtn" onClick={clickOnCharacters}>characters</Link>
          <Link to="/locations" className="locationsBtn" onClick={clickOnLocations}>locations</Link>
        </div>

        <div className="svg-container">
          <img className="dab-main" src={dab} alt="dab" />
          <img className="look-main" src={look} alt="look" />
        </div>

        <Switch>
          <Route path="/characters">
            { characters.info ? <Characters getPageNum={setPageNumCharacters} pages={characters.info.pages} data={characters.results} /> : <div></div> }
          </Route>

          <Route path="/locations">
            { locations.info ? <Locations getPageNum={setPageNumLocations} pages={locations.info.pages} data={locations.results} /> : <div></div> }
          </Route>
        </Switch>
    </Router>
  );
}
