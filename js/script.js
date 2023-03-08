let userPathLenght = prompt('Quanti chilometri vuole percorrere?');
console.log(userPathLenght, typeof userPathLenght);
if(!isNaN(userPathLenght)){ // se è stato inserito un numero allora prosegue con il programma
    userPathLenght = parseInt(userPathLenght);
    console.log(userPathLenght, typeof userPathLenght);
    let userAge = prompt('Inserire la propria età');
    console.log(userAge, typeof userAge);
    userAge = parseInt(userAge);
    console.log(userAge, typeof userAge);
}else{ // altrimenti blocca tutto
    console.log('Errore! Dato non inserito correttamente: ricarica la pagina.')
}