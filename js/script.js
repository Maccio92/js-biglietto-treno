/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// 1. Chiedere il numero di km da percorrere
let distance = parseInt(prompt ('Inserisci la distanza da percorrere'));
document.getElementById('distance').innerHTML = distance;
console.log ( `${distance}`);

// 2. Chiedere l'eta del passeggero
let age = parseInt(prompt('Inserisci la tua età'));
document.getElementById('age').innerHTML = age;
console.log( `${age}`);

const rate = 0.21

// 3.Stampa il prezzo del biglietto
let price = distance * rate;

if (age < 18){
    let underPrice = price - (price / 100 * 20);
    document.getElementById('underPrice').innerHTML = underPrice;
    console.log (underPrice.toFixed(2));
} else if (age > 65){
    let overPrice = price - (price / 100 * 40);
    document.getElementById('overPrice').innerHTML = overPrice;
    console.log( overPrice.toFixed(2));
} else {
    console.log (price.toFixed(2));
    document.getElementById('price').innerHTML = price;
}