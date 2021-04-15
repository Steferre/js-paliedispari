/*
l'utente sceglie pari o dispari, inserisce un numero da 1 a 5.
generiamo un numero random da parte del computer
sommiamo i due numeri  e stabiliamo se la somma sia pari o dispari (usando una funzione)
stabiliamo e comunichiamo chi ha vinto
*/

var userChoise = prompt('Digitare "pari" o "dispari"');
var userNumber = parseInt(prompt('Inserire un numero da 1 a 5'));

var aiNumber = Math.ceil(Math.random() * 5);

console.log(userNumber);
console.log(aiNumber);

var result = userNumber + aiNumber;

console.log(whoIsTheWinner(userChoise));
document.getElementById('winner').innerHTML = "L'utente ha scelto: " + userChoise + " " + whoIsTheWinner(userChoise);
// creo una funzione, che deve sommare i numeri dati 
// e stabilire se è pari o dispari
function evenOddCheck(number) {

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// creo una funzione che mi confronta l'input dell'utente con il risultato della somma
// e in output mi fornisce il vincitore
function whoIsTheWinner(text) {

    if (evenOddCheck(result) === true && text === "pari") {
        //console.log('pari');

        return 'utente ha vinto';
    
    } else if (evenOddCheck(result) === true && text === "dispari") {
        //console.log('pari');

        return 'utente ha perso';
    
    } else if (evenOddCheck(result) === false && text === "dispari") {
        //console.log('dispari');

        return 'utente ha vinto';
    
    } else if (evenOddCheck(result) === false && text === "pari") {
        //console.log('dispari');

        return 'utente ha perso';
    } 
}
// PROVE
/*
if (evenOddCheck(result) === true && userChoise === "pari") {
    console.log('pari');
    console.log('utente ha vinto');

} else if (evenOddCheck(result) === true && userChoise === "dispari") {
    console.log('pari');
    console.log('utente ha perso');

} else if (evenOddCheck(result) === false && userChoise === "dispari") {
    console.log('dispari');
    console.log('utente ha vinto');

} else if (evenOddCheck(result) === false && userChoise === "pari") {
    console.log('dispari');
    console.log('utente ha perso')

}*/
/*
switch (evenOddCheck(result)) {
    case true, userChoise === "pari":
        console.log('utente ha vinto');
        break;

    case false, userChoise !== "pari":
        console.log('utente ha vinto');
        break;

    case true, userChoise === "dispari":
        console.log('utente ha perso');
        break;

    case false, userChoise !== "dispari":
        console.log('utente ha perso');
        break;  
}
*/



