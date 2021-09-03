import React from "react";
import "./Locations.css";
import dab from "../../SVG/dab.svg";
import look from "../../SVG/look.svg";
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const Locations = (props) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#191970",
                contrastText: "#95fb65"
            }
        },
        typography: {
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: 24
        }
        
    })

    function getPage(e) {
        console.log(e.target.innerText)
        props.getPageNum(parseInt(e.target.innerText))
    }

    function showInformations(e, id, loc) {
        const element = document.getElementById(id)
        const children = element.childNodes;

        if(element.classList.contains("expanded")){
            element.classList.remove("expanded");
            e.target.innerText = "What's this?"
            children[0].innerHTML = `
                <h2>${loc.name}</h2>
                <span><em>${loc.type}</em></span>
            `
            return;
        }

        e.target.innerText = "Close"

        children[0].insertAdjacentHTML("beforeend", `
        <span>Dimension: <em>${loc.dimension}</em></span>
        `)

        element.classList.add("expanded")
    }

    return (
        <>
            <div className="locations-container" >
                <ul className="locations-ul">

                    {props.data.map((loc) => {
                        return  <li className="locations-li" key={loc.id} id={`loc-${loc.id}`}>
                                    <div className="text-container-loc">
                                        <h2>{loc.name}</h2>
                                        <span><em>{loc.type}</em></span>
                                    </div>
                                    <button onClick={(e) => {showInformations(e, `loc-${loc.id}`, loc)}} className="more-info" type="button">What's this?</button>
                                </li>
                    })}

                </ul>
            </div>
            <ThemeProvider theme={theme}>
                <div className="pagination-container">
                    <Pagination onClick={getPage} count={props.pages} size="large" color="primary" />
                </div>
                </ThemeProvider>
            <footer className="footer">
                <img className="dab" src={dab} alt="dab" />
                <img className="look" src={look} alt="look" />
            </footer>
        </>
    )
}


export default Locations