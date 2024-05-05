// Propiedades y Métodos de los arreglos:

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

// Propiedad Length: Retorna el largo del arreglo:
console.log('Largo:', juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo  = juegos[ juegos.length - 1 ];
console.log({ primero, ultimo });

// Método forEach: Ejecutará una instrucción por cada uno de los elementos que tenga el arreglo.
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//Método: PUSH (inserta un nuevo elemento en el arreglo, al final)
// ¿Qué retorna?: el nuevo largo del arreglo 
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

// Método: UNSHIFT (inserta un nuevo elemento al inicio del arreglo).
// ¿Qué retorna?: el nuevo largo del arreglo 
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Método: POP (elimina un elemento del final del arreglo)
// ¿Qué retorna?: El elemento borrado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Método: SPLICE (Remueve elementos de un arreglo y si es necesario 
// inserta un nuevo elemento en ese lugar)
// ¿Qué retorna?: Los elementos borrados. 
let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });

// Método: INDEXOF (Nos da la posición de un elemento en un arreglo) OJO: Es CaseSensitive
// ¿Qué retorna?: el índice de la primera coincidencia del valor en el arreglo
// Si retorna -1 significa que el elemento buscado no se encuentra en el arreglo.
let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });
