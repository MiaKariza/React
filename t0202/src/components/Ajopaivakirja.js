import React from "react";



function Ajopaivakirja(props) {

    return (
        <div>
            Nimi: {props.tiedot.laatija} <br />
            Rekisterinro: {props.tiedot.rekisterinro} <br />
            Matka: {props.tiedot.loppu.lukema - props.tiedot.alku.lukema} kilometriä <br />
            <br />
            Tekijä: {props.nimi} <br />

            
        </div>

    )
}

     export default Ajopaivakirja;    
    