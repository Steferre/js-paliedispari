// chiedere all'utente di inserire una parola
// creare una funzione per capire se la parola è palindroma

var userWord = prompt('Per favore, Inserire una parola.');

// controllo su situazioni non valide
if (!checkPossibleNumber(userWord)) {
    alert('Attenzione! Hai inserito un numero, devi inserire una parola.');

} else if (userWord === "" || userWord === null) {
    alert('Non puoi lasciare vuoto o annullare! Per favore, inserire una parola.')

} else {
    
    var inverseUserWord = "";
    
    if (findPalindroma(userWord) === true) {
        console.log(true);
        document.getElementById('result').innerHTML = "La parola inserità è PALINDROMA"

    } else {
        console.log(false);
        document.getElementById('result').innerHTML = "SPIACENTE, ma la parola che hai inserito non è palindroma!"

    }

    
}

// ZONA FUNZIONI

// funzione che controlla se l'utente iserisce un numero
function checkPossibleNumber(text) {
    var possibleNumber = parseInt(text);
    
    return Number.isNaN(possibleNumber);
}

// trasformo il ciclo for in una funzione
function findPalindroma(word) {
    
    for (var i = word.length - 1; i >= 0; i--) {
        
        inverseUserWord += word[i];
           
    }

    return word === inverseUserWord;
}


//console.log(userWord);
//console.log(inverseUserWord);
/*
var inverseUserWord = "";


// creo ciclo for per capire se la parola è palindroma
// considero la stringa inserita dall'utente come se fosse un array
for (i = userWord.length - 1; i >= 0; i--) {

    inverseUserWord += userWord[i];
    
    
    
}
*/























