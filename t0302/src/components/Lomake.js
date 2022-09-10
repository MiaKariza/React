import React, { useState } from 'react';

function Lomake() {
    const [arvosana, setValues] = useState({
        nimi: '', 
        paiva: new Date(),
        arvosana: ''
    })

    const muuta = (e) => {
        setValues(
            {   
                ...arvosana, 
                [e.target.name] : e.target.value
            }
        )
    }

    const lisaaArvosana = (e) => {
        e.preventDefault();
        if (arvosana.nimi !== '' && arvosana.paiva !== '' && arvosana.arvosana !== '' ) {
            setValues(
                {nimi: '', 
                paiva: new Date(),
                arvosana: ''}
            )
        } else (
            alert('Täytä lomakkeen kaikki kentät')
        )
        
    }

    console.log(arvosana)

    return (
        <div>
            <form>
                <label htmlFor='nimi'>Nimi</label>
                <input type='text' name='nimi' required value={arvosana.nimi} onChange={(e) => muuta(e)}></input> <br />
                <label htmlFor='paiva'>Päivä</label>
                <input type='text' name='paiva' required value={arvosana.paiva} onChange={(e) => muuta(e)}></input> <br />
                <label htmlFor='arvosana'>Arvosana</label>
                <input type='text' name='arvosana' required value={arvosana.arvosana} onChange={(e) => muuta(e)}></input> <br />
                <input type='submit' value='Lisää' onClick={(e) => lisaaArvosana(e) } />
            </form>
        </div>
    )
}

export default Lomake;