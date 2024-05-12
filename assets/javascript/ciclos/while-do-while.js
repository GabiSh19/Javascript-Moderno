
const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')
// Se ejecturará el ciclo mientras la condición sea verdadera y no: undefined, null o false. 

while( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}

// Do while: Al menos se ejecutará el bloque de código una vez. 

console.warn('Do While');
let j = 10;

do {
    console.log( carros[j]);
    j++;

} while( carros[j] );

