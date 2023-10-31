/*
//1
let valorCienAUno = Number(prompt("Ingresa un número del 1 al 100"))

if ( valorCienAUno >= 1 && valorCienAUno <= 100 ) {
    for (i = valorCienAUno; i >= 1 ; i-- ) {
         console.log(i);
}
}


//2
let valorUnoADiez = Number(prompt("Ingresa un número del 1 al 10"))

if ( valorUnoADiez >= 1 && valorUnoADiez <= 10) {
    for (i = 1; i <= 10 ; i++ ) {
        console.log(`${i} x ${valorUnoADiez} = ${i * valorUnoADiez}`)
    }
}


//3
let numerosIngresados = []
let numeroIngresado = Number(prompt("Ingresa cualquier número, para obtener el resultado de tu suma, pulsa 0"))
numerosIngresados.push( numeroIngresado )

while ( numeroIngresado ) {
    numeroIngresado =  Number(prompt("Ingresa cualquier número, para obtener el resultado de tu suma, pulsa 0")) ;
    numerosIngresados.push( numeroIngresado )
    if (numeroIngresado == 0) {
        let resultado = numerosIngresados.reduce(function(a, b){
            return a + b;
          });
        console.log( resultado )
    }
}


//4
let numerosIngresados = []
let numeroIngresado = Number(prompt("Ingresa cualquier número, para obtener el resultado de tu suma, pulsa 0"))
numerosIngresados.push( numeroIngresado )

do {
    numeroIngresado = Number(prompt("Ingresa cualquier número, para obtener el resultado de tu suma, pulsa 0"))
    numerosIngresados.push( numeroIngresado )
} while (numeroIngresado);
    let resultado = numerosIngresados.reduce(function(a, b){
        return a + b;
    });
    console.log(resultado)


//5
let numeroAdivinanza = Number(prompt('Ingresa un número'))
let numeroDeIntentos = [ ]
let contarIntentos = 0

for (numeroDeIntentos = 1; numeroAdivinanza !== resultado; numeroDeIntentos++) {
    while (numeroAdivinanza > resultado ){
        console.log("El número ingresado es mayor");
        numeroAdivinanza = Number(prompt('Ingresa un número'));
        contarIntentos++;
    } while (numeroAdivinanza < resultado){
        console.log("El número ingresado es menor");
        numeroAdivinanza = Number(prompt('Ingresa un número'));
        contarIntentos++;
    } 
} if ( numeroAdivinanza == resultado )
console.log(`Acertaste! El número secreto era ${resultado}, realizaste ${contarIntentos} intentos`);

*/
//6
let valorADividir = Number(prompt("Ingresa un número cuyo residual sea 0"))
let numeroDivisor = [ ] 

if ( valorADividir % numeroDivisor == 0 ) {
    for (numeroDivisor = 1 ; valorADividir % numeroDivisor == 0 ; numeroDivisor-- ) {
        console.log( numeroDivisor )
    }
}


//7


//8


//9


//10


//11


//12


//13


//14


//15


//16
