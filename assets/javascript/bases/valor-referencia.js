// Paso de variables por valor y por referencia: 

// Acá estamos pasando variables por valor ( valores primitivos) 
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Cuando se trata de objetos estamos pasando variables por referencia, para no afectar el objeto original usamos el ...SPREAD
let juan = { nombre: 'Juan' };
// ... = SPREAD:  Operador especial para separar todas las propiedades y valores de un objeto. 
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });