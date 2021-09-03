import React from "react";
import "./Characters.css";
import dab from "../../SVG/dab.svg";
import look from "../../SVG/look.svg";
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider, createTheme} from "@material-ui/core/styles";

const Characters = (props) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#191970",
                contrastText: "#95fb65"
            }
        },
        typography: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: 24
        }
        
    })

    function getPage(e) {
        props.getPageNum(parseInt(e.target.innerText))
    } 

    function showInformations(e, id, char) {
        const element = document.getElementById(id)
        const children = element.childNodes;

        if(element.classList.contains("expanded")){
            element.classList.remove("expanded");
            e.target.innerText = "Who's this?"
            children[1].innerHTML = `
                <h2>${char.name}</h2>
                <span><em>${char.species}</em></span>
            `
            return;
        }

        e.target.innerText = "Close"

        children[1].insertAdjacentHTML("beforeend", `
        <span>Gender: <em>${char.gender}</em></span> 
        <span>Status: <em>${char.status}</em></span> 
        <span>Current location: <em>${char.location.name}</em></span> 
        <span>Origin: <em>${char.origin.name}</em></span> `)

        element.classList.add("expanded")
    }

    return (
        <>
            <div className="characters-container" >
                <ul className="character-ul">

                    {props.data.map((char) => {
                        return  <li className="character-li" key={char.id} id={`char-${char.id}`}>
                                    <img className="character-pic" src={char.image} alt="character" />
                                    <div className="text-container">
                                        <h2>{char.name}</h2>
                                        <span><em> {char.species}</em></span>
                                    </div>
                                    <button onClick={(e) => showInformations(e, `char-${char.id}`, char)} 
                                    className="more-info" type="button">Who's this?</button>
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


export default Characters
