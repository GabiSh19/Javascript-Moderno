//Singleton: La idea es que si yo ya tengo inicializada la clase, no importa si yo hago otro new, debería regresar la 1era instancia.

class Singleton {

    // Esta va a ser la instancia inicializada de mi clase.
    // Cuando alguien más intente inicializarla y ya está inicializada, va a regresar ese valor 

    static instancia;  //undefined
    nombre = '' //Cualquier otra propiedad que queramos que se mantenga global. 

    constructor ( nombre = '') {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
            //Cuando llegue a este return se sale del constructor.
        }    
        //  el !! es para pasarlo a booleano: en este caso es false. Es más fácil para nosotros y para JS trabajar con un valor booleano a que lo evalúe con un valor null o undefined.
        

        // El this hace referencia a esta instancia de la clase.
        Singleton.instancia = this;
        this.nombre = nombre;

    }


}

const instancia1 = new Singleton('Ironman');

console.log(`Nombre en la instancia 1 es: ${ instancia1.nombre }`);

const instancia2 = new Singleton('Spiderman');
