
//1
function sumar () {
    console.log(100 * 20);
}

//2
sumar ()

//3

function sumar (numeroA, numeroB) {
    console.log(numeroA * numeroB);
}

//4
let numeroA = 100
let numeroB = 20

sumar(numeroA, numeroB);

//5
function sumar (numeroA, numeroB) {
    const mult = numeroA * numeroB;
    return mult;
}

//6
const anonima = function(numeroA, numeroB){
    const mult = numeroA * numeroB;
    return console.log(mult);
} 

anonima(numeroA, numeroB);

//7
const anonimaFlecha = (numeroA, numeroB) => numeroA * numeroB;

const ejecAnonimaFlecha = anonimaFlecha(numeroA, numeroB);
console.log(ejecAnonimaFlecha);

//8
function saludar (nombre) {
    const hola = `Hola, mi nombre es ` + nombre;
    return console.log( hola );
}

saludar ("Daniela")

//9
const multiplicación = function(numero1, numero2) {
    const producto = numero1 * numero2;
    return console.log(producto);
}

multiplicación(60, 49);
multiplicación(5, 20);

//10
function area (baseTriangulo, alturaTriangulo) {
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    return console.log(areaTriangulo);
}

area(3, 5);

function perimetro (baseTriangulo, alturaTriangulo, hipotenusa) {
    const perimetroTriangulo = baseTriangulo + alturaTriangulo + hipotenusa;
    return console.log(perimetroTriangulo);
}

perimetro(3, 5, 8);

//11
const valorCompra = (precio, cantidadDeProductos) => {
    if (cantidadDeProductos >= 10 && cantidadDeProductos < 20) {
        return (`El total es ${precio - (precio * 0.1)} con un 10% de descuento`);
    } else if (cantidadDeProductos >= 20) {
        return (`El total es ${precio - (precio * 0.2)} con un 20% de descuento`);
    }
}

const funcionValorCompra = valorCompra(100, 24);
console.log(funcionValorCompra);

//12
function esMayorDeEdad (edad1) {
    if (edad1 >= 18) {
        return console.log("Eres mayor de edad");
    } else if (edad1 > 0 && edad1 < 18) {
        return console.log("Eres menor de edad");
    }
}

esMayorDeEdad(24);
esMayorDeEdad(7);
esMayorDeEdad(18);

//13
function ingresoAnual (ingreso) {
    if (ingreso <= 10000) {
        return console.log (`El impuesto a pagar es el 10% del ingreso, $` + (ingreso * 0.1));
    } else if (ingreso > 10000 && ingreso <= 20000 ) {
        return console.log (`El impuesto a pagar es el 15% del ingreso, $` + (ingreso * 0.15));
    } else if (ingreso > 20000) {
        return console.log (`El impuesto a pagar es el 20% del ingreso, $` + (ingreso * 0.2));
    }
}

ingresoAnual(5000);
ingresoAnual(20000);
ingresoAnual(30000);

//14
function verificarDia (numeroDia) {
    if(numeroDia >= 1 && numeroDia <=7) {
    switch(numeroDia) {
        case 1:
           return console.log (`Es un día laboral`);
        case 2:
            return console.log (`Es un día laboral`);
        case 3:
           return console.log (`Es un día laboral`);
        case 4:
           return console.log (`Es un día laboral`);
        case 5:
           return console.log (`Es un día laboral`);
        case 6:
           return console.log (`Es fin de semana`);
        case 7:
           return console.log (`Es fin de semana`);
    }
    } else {
        return console.log (`ingresa un número del 1 al 7`)
    }
}

verificarDia(1)
verificarDia(7)
