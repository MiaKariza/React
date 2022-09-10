const laskePisteet = (kirous, tila, pitaja, laani) => {
    return kirous * -1 + tila * 2 + pitaja * 3 + laani * 6;
}

let pisteet = laskePisteet(0, 0, 0, 2);
console.log('Yhteispisteet ovat ' + pisteet);

const laskeNettopalkka = (bruttopalkka, veroprosentti, tvm=0.015, tev=0.0675) => {
    let netto = bruttopalkka - (bruttopalkka * (veroprosentti/100)) - (bruttopalkka * tvm) - (bruttopalkka * tev); 
    return netto;
}

let bruttopalkka = 3000;
let veroprosentti = 20;
let netto = laskeNettopalkka(bruttopalkka, veroprosentti);

console.log("Nettopalkka on " + netto.toFixed(2) + " kun palkka on " + bruttopalkka + " ja veroprosentti " + veroprosentti);

const laskeNettopalkka2 = (bruttopalkka2, veroprosentti2, tvm=0.015, tev=0.0675) => {
    let netto2 = bruttopalkka2 - (bruttopalkka2 * (veroprosentti2/100)) - (bruttopalkka2 * tvm) - (bruttopalkka2 * tev); 
    return netto2;
}

let bruttopalkka2 = 4000;
let veroprosentti2 = 27.5;
let netto2 = laskeNettopalkka2(bruttopalkka2, veroprosentti2);

console.log("Nettopalkka on " + netto2.toFixed(2) + " kun palkka on " + bruttopalkka2 + " ja veroprosentti " + veroprosentti2);

