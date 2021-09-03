import React from "react";
// import styled from "styled-components"

// const Characters = (props, {className}) => {
const Characters = (props) => {

    return (
        // <div id="characters-page" className={className}>
        <div id="characters-page">
            <ul className="characters-ul">
                {console.log(typeof [])}

                {typeof props.data === "object" && props.data.map((char) => {
                    return  <li>
                                <img src={char.image} alt="character-image" />
                                <h2>{char.name}</h2>
                                <span>{char.species}</span>
                            </li>
                })}
            </ul>
        </div>
    )
}

// const styledCharacters = styled(Characters)`

// `


export default Characters
