const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );

// Para acceder a las propiedades del objeto personaje podemos hacerlo de la siguiente manera:
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );

console.log('No. Trajes', personaje.trajes.length );
//Cómo obtener el último traje del personae:
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('Última película', personaje['ultima-pelicula'] );

// Más detalles

//Para eliminar una propiedad usa DELETE
delete personaje.edad;
console.log( personaje );

// Para agregar una propiedad asignale un valor
personaje.casado =  true;

// Para trabajar el objeto como arreglo usa OBJECT.ENTRIES
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// Para bloquear el objeto, es decir, que no se agregen o modifiquen propiedades usa OBJECT.FREEZE
Object.freeze( personaje );
personaje.dinero = 10000000000;
personaje.casado = false;
//Observación: en caso que haya otro objeto dentro, si se pueden modificar estos valores. A menos que le hagas un freeze.
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

//Para obtener las propiedades que tiene el objeto usa OBJECT.GETOWNPROPERTYNAMES
const propiedades = Object.getOwnPropertyNames( personaje );
//Para obtener los valores de las propiedades usa OBJECT.values
const valores     = Object.values( personaje );
console.log({ propiedades, valores });





