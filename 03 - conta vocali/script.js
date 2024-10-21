/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const countWordVowels = (word) => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    let currentElement = word[i];
    if (
      currentElement == "a" ||
      currentElement == "e" ||
      currentElement == "i" ||
      currentElement == "o" ||
      currentElement == "u"
    )
      counter++;
  }
  return counter;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countWordVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
