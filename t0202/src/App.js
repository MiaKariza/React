import React from 'react';
import Ajopaivakirja from './components/Ajopaivakirja';

const ajopaivakirja = {
  rekisterinro: "XYZ-123",
  laatija: "Risto Reipas",
  alku: {
   lukema: "32500",
   lahtoaika: "13:30",
   paiva: "2020-01-27",
   paikka: "Ratapihantie 13, Helsinki",
  },
  loppu: {
   lukema: "32510",
   loppuaika: "13:50",
   paiva: "2020-06-27",
   paikka: "Hietakummuntie 1, Helsinki",
  }
}

function App() {
  return (
    <div>

      <Ajopaivakirja tiedot={ajopaivakirja} nimi='Mia Huovinen' />
      
    </div>
  );
}

export default App;
