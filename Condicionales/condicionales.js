//ir pasando el símbolo '*/' (que está al final del código) al final de cada ejercicio para ejecutarlo individualmente
/* 
//1,2 y 3
let num1 = 4
let num2 = 5
if(num1>num2){
    console.log(num1)
}
else if(num1===num2){
    console.log("Los números son iguales")
}
else {
    console.log(num2)
}

if(num1!==num2){
    console.log("Los números son diferentes")
}


//4 y 5
let fecha1 = "2018-9-2"
let fecha2 = "2018-5-7"
if(fecha1>fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}
else if(fecha1===fecha2){
    console.log(`Las fechas son iguales`)
}
else{
    console.log(`La fecha ${fecha1} es menor que ${fecha2}`)
}


//6
let dato1 = 5
let dato2 = 7
let dato3 = 9
if(dato1>dato2 && dato1>dato3){
    console.log(`El número ${dato1} es el mayor`)
}
else if(dato2>dato1 && dato2>dato3){
    console.log(`El número ${dato2} es el mayor`)
}
else {
    console.log(`El número ${dato3} es el mayor`)
}


//7
let colores = prompt("Ingrese un color")

switch(colores) {
    case "rojo" :
        alert("El color de la pasión")
    break
    case "azul" :
        alert("El color del mar")
    break
    case "verde" :
        alert("El color de la naturaleza")
    break
}


//8
let valor1,valor2
valor1 = Number(prompt("Ingresa una cifra del 1 al 100"))
valor2 = Number(prompt("Ingresa otra cifra del 1-100"))

let operación = String(prompt("Ingrese una operación"))

switch(operación) {
    case "suma" :
        alert(`La suma de ${valor1} + ${valor2} es ${valor1 + valor2}`)
    break
    case "resta" :
        alert(`La resta de ${valor1} - ${valor2} es ${valor1 - valor2}`)
    break
    case "multiplicación" :
        alert(`El producto de ${valor1} x ${valor2} es ${valor1 * valor2}`)
    break
    case "división" :
        alert(`El cociente de ${valor1} / ${valor2} es ${valor1 / valor2}`)
    break
}


//9
const persona1 = {
    nombre : "Juan",
    edad : 39,
    altura : 1.19
}

const persona2 = {
    nombre : "Marta",
    edad : 20,
    altura : 1.30
}

if(persona1.altura<persona2.altura && persona1.edad>persona2.edad){
    console.log(`${persona1.nombre} tiene menos altura y es mayor que ${persona2.nombre}`)
}
else if(persona2.altura<persona1.altura && persona2.edad>persona1.edad){
    console.log(`${persona2.nombre} tiene menos altura y es mayor que ${persona1}`)
}


//10
let tuNombre = prompt("Ingrese su nombre")
let tuEdad = Number(prompt("Ingrese su edad"))
let tuAltura = prompt("Ingrese su altura en cm")
let tuVisión = Number(prompt("Califica tu visión de 1 - 10"))

if( tuEdad>=18 && tuAltura>150 && tuVisión>=8 && tuVisión<=10 ){
    console.log("Estás capacitado para conducir")
} else{
    console.log("No estás capacitado para conducir")
}


//11
let edadActual = Number(prompt("Ingresa tu edad"))

if(edadActual>=0 && edadActual<=12){
    console.log("Eres un infante")
} else if(edadActual>=13 && edadActual<=18){
    console.log("Eres un adolescente")
} else if(edadActual>=19 && edadActual<=45){
    console.log("Eres un adulto joven")
} else if(edadActual>=45 && edadActual<=100){
    console.log("Eres un anciano")
} else{
    console.log("¿En realidad tienes esa edad?")
}


//12
let numerosDel1Al3 = Number(prompt("Ingrese un número del 1 al 3"))
let cualquierNumero = Number(prompt("Ingrese un número que desee"))

if(numerosDel1Al3 === 1){
    alert(`El número ingresado es ${cualquierNumero}`)
} else if(numerosDel1Al3 === 2) {
    alert(`El doble del número ingresado es ${cualquierNumero*2}`)
} else if(numerosDel1Al3 === 3) {
    alert(`El triple del número ingresado es ${cualquierNumero*3}`)
} else {
    alert(`Ese valor no está permitido`)
}


//13
let nombreCliente = prompt("Ingrese su nombre")
let tipoDePase = prompt("¿Qué tipo de pase tiene, normal o vip?")
let entrada = prompt("¿Tiene una entrada?")
const miNombre = "Daniela"

if(nombreCliente === miNombre || tipoDePase === "vip"){
    alert("¡Bienvenido!")
} else if (entrada === "si") {
    let entrada2 = prompt("¿Desea utilizarla?")
    if (entrada2 === "si"){
        alert("¡Bienvenido!")
    } else {
        alert("¡Hasta Pronto!")
    }
} else if (nombreCliente !== miNombre || tipoDePase === "normal" || entrada === "no"){
    let entrada3 = prompt("¿Desea comprar?")
    if (entrada3 === "no"){
        alert("¡Hasta Pronto!")
    } else if (entrada3 === "si"){
        dineroDisponible = prompt("¿Cuánto dinero disponible tiene?")
        if (dineroDisponible >= 1000){
            alert("¡Bienvenido!")
        } else if (dineroDisponible<1000){
            alert("¡Hasta Pronto!")
        }
    }
}


//14 
const numeroIncognita = 7;
let numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));

if (numeroIngresado !== numeroIncognita) {
    if (numeroIngresado > numeroIncognita){
        alert('El número ingresado es mayor, vuelve a intentarlo');
        numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
        if (numeroIngresado > numeroIncognita){
            alert('El número ingresado es mayor, vuelve a intentarlo');
            numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
            if (numeroIngresado !== numeroIncognita) {
                alert('Perdiste, no tienes más intentos')
            } else if (numeroIngresado == numeroIncognita) {
                alert('¡Ganaste! Has adivinado el número')
            }
        } else if (numeroIngresado < numeroIncognita){
            alert('El número ingresado es menor, vuelve a intentarlo');
            numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
            if (numeroIngresado !== numeroIncognita) {
                alert('Perdiste, no tienes más intentos');
            } else if (numeroIngresado == numeroIncognita) {
                alert('¡Ganaste! Has adivinado el número')
            }
        }
    } else if (numeroIngresado < numeroIncognita) {
        alert('El número ingresado es menor, vuelve a intentarlo');
        numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
        if (numeroIngresado > numeroIncognita) {
            alert('El número ingresado es mayor, vuelve a intentarlo');
            numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
            if (numeroIngresado !== numeroIncognita) {
                alert('Perdiste, no tienes más intentos');
            } else if (numeroIngresado == numeroIncognita) {
                alert('¡Ganaste! Has adivinado el número')
            }
        } else if (numeroIngresado < numeroIncognita){
            alert('El número ingresado es menor, vuelve a intentarlo');
            numeroIngresado = Number(prompt('Ingresa un número del 1 al 10'));
            if (numeroIngresado !== numeroIncognita) {
                alert('Perdiste, no tienes más intentos');
            } else if (numeroIngresado == numeroIncognita) {
                alert('¡Ganaste! Has adivinado el número')
            }
        }
    }
} else if (numeroIngresado == numeroIncognita) {
    alert('¡Ganaste! Has adivinado el número') 
}


//15
let jugador1 = prompt("Jugador 1: Ingrese su elección")
let jugador2 = prompt("Jugador 2: Ingrese su elección")

if( jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijera" && jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijera" ) {
    if (jugador1 == "piedra" && jugador2 == "piedra") {
        alert("Empate")
    } else if (jugador1 == "piedra" && jugador2 == "papel"){
        alert("Jugador 2, gana")
    } else if (jugador1 == "piedra" && jugador2 == "tijera") {
        alert("Jugador 1, gana")
    } else if (jugador1 == "papel" && jugador2 == "papel") {
        alert("Empate")
    } else if (jugador1 == "papel" && jugador2 == "tijera"){
        alert("Jugador 2, gana")
    } else if (jugador1 == "piedra" && jugador2 == "piedra") {
        alert("Jugador 1, gana")
    } else if (jugador1 == "tijera" && jugador2 == "tijera") {
        alert("Empate")
    } else if (jugador1 == "tijera" && jugador2 == "piedra"){
        alert("Jugador 2, gana")
    } else if (jugador1 == "tijera" && jugador2 == "papel") {
        alert("Jugador 1, gana")
    }
} else {
    alert("Uno de los juagdores hizo trampa")
} 


//16
let valorNumerico1 = Number(prompt("Ingresa un número del 1 al 100"))
let valorNumerico2 = Number(prompt("Ingresa otro número del 1 al 100"))
let tipoDeOperacion = prompt("Ingresa un tipo de operación")

if ( valorNumerico1 >=1 && valorNumerico2 <= 100 && valorNumerico2 >=1 && valorNumerico2 <=2 ) {
    if (tipoDeOperacion == "suma"){
        alert(`La suma de los dos valores es igual a ${ valorNumerico1 + valorNumerico2 }`)
    } else if (tipoDeOperacion == "resta"){
        alert(`La resta de los dos valores es igual a ${ valorNumerico1 - valorNumerico2 } `)
    } else if (tipoDeOperacion == "multiplicación"){
        alert(`El producto de lso valores es ${ valorNumerico1 * valorNumerico2 }`)
    } else if (tipoDeOperacion == "división"){
        alert(`El cociente de los valores es ${ valorNumerico1 / valorNumerico2 }`)
    }
} else if (valorNumerico2 == 0 && tipoDeOperacion == "división") {
    alert("¡Error! El divisor no puede ser 0, vuelva a ingresar un número")
    valorNumerico2 = Number(prompt("Ingresa un número del 1 al 100"))
    alert(`El cociente de los valores es ${ valorNumerico1 / valorNumerico2 }`)
}
*/
