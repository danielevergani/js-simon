function numRandomGen (min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numero;
}

var numeri = 0;
var numeriCasuali = [];
var tentativo = 0;
var corretto = 0;
var numIndovinati = [];
while ( numeriCasuali.length < 5 ){

    var numeri = numRandomGen (1, 100);
    if ( numeriCasuali.includes(numeri) == false ){
        numeriCasuali.push(numeri)
    }

}

alert(numeriCasuali);

setTimeout(
    function(){
        for(var i = 0; i < 5; i++){
            tentativo = parseInt(prompt("inserisci un numero"));
            if ( numeriCasuali.includes(tentativo) ){
                corretto++;
                numIndovinati.push(tentativo)
            }
        }
        alert("hai indovinato " + corretto + " numeri, e sono " + numIndovinati);
    },
30000);

