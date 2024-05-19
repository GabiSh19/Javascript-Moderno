class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    
    }

    set setComidaFavorita( comida ){
        this.comida = comida;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo}`)
    }

    miFrase() {
        this.quienSoy(); 
        console.log(` ${ this.codigo } dice: ${ this.frase } `)
    }

}


const spiderman = new Persona ('Peter Parker', 'Spidy', 'Hola, soy Spiderman')
const ironman = new Persona ('Tony Stark', 'IronMan', 'Yo soy Ironman')
console.log( spiderman ); 
console.log( ironman );

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tía May";