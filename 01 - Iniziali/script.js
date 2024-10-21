/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const initialLetterArray = (array, newArray = []) => {
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    newArray[i] = currentElement[0];
  }
  return newArray;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(initialLetterArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
