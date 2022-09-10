import React from 'react';

function Henkilolista(props) {
    return (
        <div>
            {props.lista.map(henkilo => {
                return (
                    <p key={henkilo.nimi}>
                        Nimi: {henkilo.nimi} <br />
                        Alkaa: {henkilo.alkupaiva} <br />
                        Päättyy: {henkilo.loppupaiva} <br />
                    </p>
                )
            })}

        </div>
    )
}

export default Henkilolista;