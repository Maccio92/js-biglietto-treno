/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// 1. Chiedere il numero di km da percorrere
let distance = parseInt(prompt ('Inserisci la distanza da percorrere'));
console.log ( `${distance}`);

// 2. Chiedere l'eta del passeggero
let age = parseInt(prompt('Inserisci la tua età'));
console.log( `${age}`);

const rate = 0.21
// 3.Stampa il prezzo del biglietto
let price = distance * rate;
console.log( `${price}`);

