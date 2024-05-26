
import {CabeceraPagina} from './CabeceraPagina';
import { Calculadora } from './Calculadora';
import { Cancion } from './Cancion';
import { Cuenta } from './Cuenta';
import { Empleado } from './Empleado';
const separador = "-------------------------------------------------";
//ejercicio1: instanciamos un nuevo object de la clase Cabecera Pagina
const cabecera = new CabeceraPagina('Hola este es el titulo','rojo','Algerian');
cabecera.establecerAlineacion('centrado');
console.log(`propiedades obtenidas: ${cabecera.obtenerPropiedadesTitulo()}`);
cabecera.imprimirPropiedades();
//Ejercicio2:
const calculando = new Calculadora();
const sumando = calculando.Sumar(1,2);
const restando = calculando.restar(2,1);
const dividiendo = calculando.dividir(8,3);
const potenciando = calculando.potencia(5,9);
const factorizando = calculando.factorial(5);
console.log(separador);
console.log(sumando);
console.log(restando);
console.log(dividiendo);
console.log(potenciando);
console.log(factorizando);
console.log(separador);
//ejercicio 3:
const cancion = new Cancion('Imagine Dragons Natural','Pop rock');
cancion.Autor = 'John Lennon';
const cancion2 =  new Cancion('Thunder','Pop Rock');
    console.log(cancion);
    console.log(cancion2)
    console.log(separador);
//ejercicio 4:
const miCuenta = new Cuenta('Isaac Alexander Castillo Lopez','Corriente','DE 123 853402 23560',0);
//llamando metodos a la instancia
miCuenta.MostrarDatos();
miCuenta.Saldo();
miCuenta.depositar(2.50); // El valor a depositar tiene que ser mayor a 5
miCuenta.depositar(500.00);// se deposito 500
miCuenta.Saldo();//mostrar saldo = 500
miCuenta.retirar(400.00);//retirar 400 saldo nuevo 100
miCuenta.retirar(1000.00);//no hay suficientes fondos
miCuenta.Saldo();//100
console.log(separador);
//Ejercicio 5:
const empleado = new Empleado('Isaac Alexander','Castillo Lopez','San Lorenzo, El Rosario, La Paz.','+503 6010-1233',25,25000.00);
empleado.mostrarDatos();
empleado.mayorMenor();
empleado.imprimirSueldo();
empleado.cargarSueldo(20000.00);
empleado.imprimirSueldo();
console.log(separador);