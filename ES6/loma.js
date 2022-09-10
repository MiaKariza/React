var lomamerkinnat = [
    {
     nimi: "Virtanen Matti",
     alkupaiva: "2022-06-01",
     loppupaiva: "2022-06-30",
    },
    {
     nimi: "Laaksonen Lisa",
     alkupaiva: "2022-07-01",
     loppupaiva: "2022-07-31",
    },
    {
     nimi: "Niemi Juha",
     alkupaiva: "2022-06-01",
     loppupaiva: "2022-06-14",
    },
    {
     nimi: "Lehtonen Erkki",
     alkupaiva: "2022-08-01",
     loppupaiva: "2022-08-31",
    } ];

    const lista = lomamerkinnat.map(merkinta => {
        return (
            {
                'loma': merkinta.nimi + ' loma alkaa ' +  merkinta.alkupaiva + ' ja päättyy '+  merkinta.loppupaiva
            }
            
        )
    });

    console.log(lista)