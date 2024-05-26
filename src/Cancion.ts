/**
 * EJERCICIO 3. EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
 */
export class Cancion {
    public titulo:string;
    public genero:string;
    private autor:string;
    constructor(titulo:string,genero:string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    /**
     * getAutor
     */
    public get Autor():string {
        return `Autor: ${this.autor}`;
    }
    /**
     * setAutor
     */
    public set Autor(autor:string) {
        this.autor = autor;
    }
    /**
     * mostrarDatosCancion
     */
    public mostrarDatosCancion():string {
        return `Titulo de la cancion: ${this.titulo}\nGenero: ${this.genero}\n`;
    }
}