import React, {useEffect, useState} from "react";
import { allCharacters } from "../functions/functions";

const Inicio = () => {
    const [characters, setCharacters] = useState(null);


    useEffect(() => {
        allCharacters(setCharacters)
    }, [])
    return (
        <>{characters != null ? (
            characters.map(character => (
                <div className="cards">
                    <h3>{character.name}</h3>
                    <p></p>
                    <img src={character.image} id="rm" alt={character.name}/>
                    <a href={`/Character/${character.id}`} >Información</a>
                </div>
            ))
        ) : ('no hay personajes')}</>
    )
}

export default Inicio;