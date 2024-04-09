/* Las condicionales IF especifican un bloque de código que se ejecuta si una condición es verdadera*/
//SINTAXIS
/*if (condition) {
    //Instrucciones si la condición es verdadera
}*/
/* Operadores relacionales
Mayor >
Menor <
Mayor o igual >=
Menor o igual <=
Asignación =
Igual ==
Igual si o si === Tiene que ser igual el valor del dato
Distinto */
/* Conectores de condicionales 
(|| significa "or") (&& significa "y")*/

/*let nota = 5;
if (nota > 5) {
    alert("Has aprobado")
}else{
    alert("No has aprobado")
};*/

/* Else if: especifica una nueva condición si la primera es falsa*/
//SINTAXIS
let nota = Number(prompt("Ingresa tu nota"));
if (nota < 6) {
    //Instrucciones si la condicion 1 es verdadera
    alert("Has reprobado");

}else if (nota == 6) {
    //Instrucciones si la condicion 1 es falsa y la condicion 2 es verdadera
    alert("Debes habilitar");
} else if (nota > 6) {
    //Instrucciones si la condición 1 es falsa y la condición 2 tambien
    alert("Has aprobado");

};



