/*
1.

let: let permite declarar una variable,
la cual se puede reasignar las veces que queramos .
Además si se declara una variable con let dentro de una función
se puede utilizar solamente dentro de esa función,
a menos que la declaremos fuera de una función, en ese caso se podría
usar tanto fuera como dentro de una función .

const: const permite declarar una variable,
la cual no se puede reasignar .
Además si se declara una variable con const dentro de una función
se puede utilizar solamente dentro de esa función
A menos que la declaremos fuera de una función, en ese caso, se podría
usar tanto fuera como dentro de una función . 

var: var permite declarar una variable, y reasignarla la veces que queramos .
Si declaramos una variable con var dentro de una función, podremos utilizar
esa variable fuera de la función, lo mismo pasa si declaramos fuera de una función
con var, podremos utilizarla dentro de las funciones .
*/

/*
2.

Las diferencias que hay entre un objeto y una arreglo, es que 
un arreglo puede guardar elementos de distintos tipos sin tener alguna
clase de orden, ejemplo [1, "pepe", false], en cambio un objeto puede guardar elementos
y además ponerles una clave, ejemplo {Nombre: "Santiago"} proporcionando
un esquema mucho mas organizado con mas posibilidades
de ubicar elementos de distintas formas .

Conviene usar arreglos cuando simplemente queremos colocar una lista
de un mismo tipo de elementos, o sea, numeros por ejemplo [1, 2, 3, 4] .
Y en el caso de los objetos, conviene usarlos si es que hay distintos
tipos de datos, pero que estan relacionados, o queremos meter datos con indices, o sea,
{Pelicula: "Cuando acecha la maldad", Duracion: 157}, lo cual proporciona mas
organización .

*/

/*
3.

Cuando se utiliza el método .filter, este devolvera un
nuevo array con los elementos de la lista original que cumplan 
las condiciones que hemos pedido .
En cambio, cuando se utiliza el método .map, este devolvera un nuevo
array con los elementos de la lista original transformados de alguna forma
en base a la función que hemos realizado a cada uno de esos elementos .

*/

/*
4.
El método que se utiliza para agregar un elemento al comienzo de
un arreglo es .unshift() .

*/

// PARTE PRÁCTICA
// Ejercicio 1

const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8 },
  { nombre: "Luis", edad: 17, nota: 5 },
  { nombre: "Carla", edad: 22, nota: 9 },
];

// 1
alumnos.forEach((alumno) => {
  if (alumno.nota >= 6) {
    console.log(alumno.nombre + " está aprobado");
  } else {
    console.log(alumno.nombre + " está desaprobado");
  }
});

// 2
const obtenerPromedio = (notas) => {
  let sumaDeNotas = 0;
  let cantidadNotas = 0;
  let promedio = 0;
  notas.forEach((alumno) => {
    sumaDeNotas += alumno.nota;
  });
  cantidadNotas = notas.length;
  return (promedio = sumaDeNotas / cantidadNotas);
};

console.log(obtenerPromedio(alumnos));

// Ejercicio 2

// 1
const alumnosMayores = alumnos.filter((alumno) => alumno.edad >= 18);
console.log(alumnosMayores);

// 2
const nombresEnMayuscula = alumnos.map((alumno) => alumno.nombre.toUpperCase());
console.log(nombresEnMayuscula);

// 3
const contenedor = document.getElementById("lista");
let uLista = document.createElement("ul");
contenedor.appendChild(uLista);
alumnos.forEach((alumno) => {
  let cadaNombre = document.createElement("li");
  cadaNombre.textContent = alumno.nombre;
  uLista.appendChild(cadaNombre);
});
