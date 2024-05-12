//Operador ternario con una condición:
const elMayor = (a, b) => (a > b) ? a : b;

//Operador ternario con un valor booleano:
const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log( elMayor(20, 15) );
console.log( tieneMembresia(false) );
