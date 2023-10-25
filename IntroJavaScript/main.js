let miNombre = "Daniela"
console.log (miNombre)

let miApellido = "Ramos"
console.log(miApellido)

let miEdad = 24
console.log(miEdad)

let miMascota = "Chopin"
console.log(miMascota)

let edadMascota = 6
console.log(edadMascota)

let nombreCompleto = miNombre + " " + miApellido

let textoPresentacion = `Hola! mi nombre es ${nombreCompleto}, tengo ${miEdad} años. Mi mascota se llama ${miMascota} y tiene ${edadMascota} años.`
console.log(textoPresentacion)



let sumaEdades = miEdad+edadMascota
let restaEdades = miEdad-edadMascota
let productoEdades = miEdad*edadMascota
let divisionEdades = miEdad/edadMascota

let alumno = {
    nombre: "Carlos",
    apellido: "Rodriguez",
    edad: 29,
    nacionalidad: "chilena",
    colorFavorito: "verde"
}

console.table(alumno)

console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.nacionalidad)
console.log(alumno.colorFavorito)

let mascota = {
    nombreMascota: "Chopin",
    tipoMascota: "gato",
    colorMascota: "negro con blanco",
    sexoMascota: "masculino",
    actividadFavorita: "dormir"
}

console.log(mascota.nombreMascota)
console.log(mascota.tipoMascota)
console.log(mascota.colorMascota)
console.log(mascota.sexoMascota)
console.log(mascota.actividadFavorita)


const frutas = [ "Mango","Kiwi","Limón","Manzana","Banano" ]
console.log( frutas )
console.log( frutas[0] )
console.log( frutas[1] )
console.log( frutas[2] )
console.log( frutas[3] )
console.log( frutas[4] )


let mayorDeEdad = prompt("Ingresa tu edad")
let soyMayorDeEdad = mayorDeEdad >= 18
console.log(soyMayorDeEdad)


const numeros = [ 5,13,20,48,30 ]
console.log(numeros)
console.log( numeros[0] )
console.log( numeros[1] )
console.log( numeros[2] )
console.log( numeros[3] )
console.log( numeros[4] )


const familia = [ 
    {miembro: "mamá"},
    {miembro: "tío"},
    {miembro: "hermano"},
    {miembro: "papá"},
    {miembro: "prima"}
]
console.log( familia )
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])


let textoAleatorio = `Mi ${familia[4].miembro} compró ${numeros[3]} kilos de ${frutas[1]}`
console.log(textoAleatorio)


let edad1, edad2
edad1 = prompt("ingresa tu edad")
edad2 = prompt("ingresa la edad de tu compañero")
let edadesIguales = "Mi edad es igual a la de mi compañero: " + ( edad1 == edad2 )
let soyMayor = "Mi edad es mayor a la de mi compañero: " + ( edad1 > edad2 )
let soyMenor = "Mi edad es menor a la de mi compañero: " + ( edad1 < edad2 )
console.log(edadesIguales)
console.log(soyMayor)
console.log(soyMenor)