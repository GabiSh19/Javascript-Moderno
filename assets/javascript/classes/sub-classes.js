class Persona  {

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


class Heroe extends Persona{
    
    clan = 'Sin clan';
    
    constructor( nombre, codigo, frase ){
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';

    };

    quienSoy(){
        console.log(`Soy ${ this.nombre }, ${ this.clan }`)
        //Si necesitamos llamar el método de la clase padre y mantener el de ahora, si se puede hacer. 
        super.quienSoy();
    }
    
}


// const spiderman = new Persona ('Peter Parker', 'Spidy', 'Hola, soy Spiderman');
const spiderman = new Heroe ('Peter Parker', 'Spidy', 'Hola, soy Spiderman');
console.log(spiderman);
spiderman.quienSoy();

