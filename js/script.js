let userPathLenght = prompt('Quanti chilometri vuole percorrere?');
let userAge = prompt('Inserire la propria età');
let finalPrice;
let message;
if((!isNaN(userPathLenght)) && (!isNaN(userAge))){ // se è stato inserito un numero allora prosegue con il programma
    userPathLenght = parseInt(userPathLenght);
    userAge = parseInt(userAge);
    finalPrice = userPathLenght * 0.21;
    console.log(finalPrice);
    if(userAge < 18){
        finalPrice = finalPrice * 0.2;
        message = 'Prezzo scontato per minorenni: ';
    } else if(userAge > 65){
        finalPrice= finalPrice * 0.4;
        message = 'Prezzo scontato per Over 65: '
    }
}else{ // altrimenti blocca tutto
    message = "ERRORE: DATI NON INSERITI CORRETTAMENTE. RICARICA LA PAGINA!!";
    document.getElementById('result').innerHTML = message;
}
finalPrice = finalPrice.toFixed(2);
message = message + finalPrice + '€';
document.getElementById('result').innerHTML = message;