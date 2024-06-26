class Rectangulo {

    // El # hace referencia a una propiedad privada:
    #area = 0;

    constructor ( base = 0, altura = 0 ){

        this.base = base;
        this.altura = altura;
        
        this.#area = base * altura;
    }

    calcularArea(){
        console.log(this.#area * 2);
    }

}

//Crea una nueva instancia de la clase Rectangulo
const rectangulo = new Rectangulo( 10, 15);

//Lo siguiente arroja error ya que no se puede modificar una propiedad privada:
// rectangulo.#area = 100;

console.log(rectangulo);    
rectangulo.calcularArea();