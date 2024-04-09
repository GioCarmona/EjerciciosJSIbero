/* Variables: 
VAR: Es una variable global */
var nombre = "Giovanni";
/*console.log(nombre);*/ //Se cambia de lugar para que haya secuencia lógica

nombre = "Laura";
console.log(nombre);

/* Let: Es una variable local pero no se puede cambiar en el mismo bloque de contenido, permite definir variables limitando su alcance al bloque, declaración o expresión donde se está usando*/

/* Prueba VAR y LET */

var numero = 15;
//Bloque de código
if (true) {
    numero = 20;
    alert(numero);
};

alert(numero);
//Se altera el valor a nivel global

let texto = "Aprendiendo Java";
console.log(texto);
if(true){
texto = "Aprendiendo HTML"
console.log(texto);
}

/*CONST: Un contenedor de datos al igua que una variable cuyo valor no se puede modificar*/
var web = "https://Gio.com"
const ip = "192.88.7.14";
web = "https://Fake.com";
console.log(web, ip);




