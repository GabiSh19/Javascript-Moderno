// Paso de variables por valor y por referencia: 

// Acá estamos pasando variables por valor ( valores primitivos) 
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Cuando se trata de objetos estamos pasando variables por referencia, para no afectar el objeto original usamos el ...SPREAD
let juan = { nombre: 'Juan' };
// ... = SPREAD:  Operador especial para separar todas las propiedades y valores de un objeto. 
// Rompe la referencia que hay en javascript y de esa manera puede trabajar con objetos. 
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
// este peter del argumento está pasando por referencia a la función cambiaNombre y
//como se retorna, si no está el ...SPREAD se modifica. 
let tony  = cambiaNombre( peter );

console.log({ peter, tony });


// Ahora con Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

//Para romper la relación con el arreglo original podemos hacerlo de dos formas: para saber cual es más efectivo vamos a hacer un timer 

// 1er método: SLICE() sin ningún argumento: crea un nuevo arreglo y rompe la relación con el anterior. 

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


// 2do método: SPREAD [...] 
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });