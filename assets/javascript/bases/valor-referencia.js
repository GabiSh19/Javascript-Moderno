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
