class Persona {

    //Propiedades estáticas

    static _conteo = 0;

    //Getters estáticos

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    //Metodos estáticos

    static mensaje (){
        console.log('Soy un método estático')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return ` La comida favorita de ${this.nombre} es ${this.comida}` ;
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
// console.log( ironman );

// spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tía May";
// console.log( spiderman ); 
// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2
console.log('Conteo estátito: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

//En javascript podemos definir propiedades estáticas fuera de la clase
Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log(Persona);