let userPathLenght = prompt('Quanti chilometri vuole percorrere?');
let userAge = prompt('Inserire la propria età');
let finalPrice;
let wishMessage = 'Buon viaggio!!!';
let message = "Prezzo: ";
if((!isNaN(userPathLenght)) && (!isNaN(userAge))){ //se è stato inserito un numero allora prosegue con il programma
    userPathLenght = parseInt(userPathLenght); //lo converto in numero
    userAge = parseInt(userAge);//lo converto in numero
    finalPrice = userPathLenght * 0.21;//calcolo il prezzo senza sconti
    console.log(finalPrice);
    if(userAge < 18){// se è minorenne allora 20% sconto
        finalPrice = finalPrice - (finalPrice * 0.2);
        message = 'Prezzo scontato per minorenni: ';
    } else if(userAge > 65){// altrimenti se è over 65 sconto 40%
        finalPrice= finalPrice - (finalPrice * 0.4);
        message = 'Prezzo scontato per Over 65: '
    }
    finalPrice = finalPrice.toFixed(2);//riduco a 2 decimali il prezzo finale
    message = message + finalPrice + '€';// riscrivo il messaggio finale
    document.getElementById('wish').innerHTML = wishMessage;
}else{ //altrimenti sono stati messi dato non corretti e blocca tutto
    message = "ERRORE: DATI NON INSERITI CORRETTAMENTE. RICARICA LA PAGINA!!";
}
document.getElementById('result').innerHTML = message;//stampo messaggio su pagina html