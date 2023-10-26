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

*/
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
