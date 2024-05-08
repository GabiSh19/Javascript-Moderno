//ARREGLOS:

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];

//Al imprimir el arreglo como un objeto se observa el nombre de éste y sus elementos.  
console.log({ videoJuegos });
console.log( videoJuegos );
//Para imprimir en consola el primer elemento de un arreglo
console.log( videoJuegos[0] );

//Javascript permite ingresar cualquier tipo de dato en un arreglo, tal como el siguiente ejemplo: 
// Datos primitivos como boleanos, números, string u operaciones matemáticas, funciones, objetos, arreglos y sub arreglos. 
let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
console.log( arregloCosas[2] );
console.log( arregloCosas[7][4][1]);
