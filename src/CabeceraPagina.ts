/**
 * NDICACIONES: Resolver los siguientes ejercicios aplicando programación orientada a objetos con
typescript.
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */
export class CabeceraPagina {
    //variables a utiliz<r de clase privada para crear un encapsulamiento
    private titulo:string;
    private color:string;
    private fuente:string;
    private alineacion: 'centrado' | 'izquierda' | 'derecha';

    constructor(
        titulo:string,
        color:string,
        fuente:string,
    ) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; //predeterminado
    }
    //generamos una abstraccion proporcionando public methods para interactuar con propiedades especificas de la clase principal
    /**
     * obtenerPropiedadesTitulo
     */
    public obtenerPropiedadesTitulo():{
        titulo:string,
        color:string,
        fuente:string,
    }{
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }
    /**
     * establecerAlineacion
     */
    public establecerAlineacion(
        alineacion: 'centrado' | 'izquierda' | 'derecha'
    ):void {
        this.alineacion = alineacion;
    }
    /**
     * imprimirPropiedades
     */
    public imprimirPropiedades():void {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineacion: ${this.alineacion}`);
    }
}