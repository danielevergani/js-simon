function numRandomGen (min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numero;
}

var numero = 0;
var numeriCasuali = [];

while ( numeriCasuali.length < 5 ){

    var numero = numRandomGen (1, 100);
    if ( numeriCasuali.includes(numero) == false ){
        numeriCasuali.push(numero)
    }

}

alert(numeriCasuali);

