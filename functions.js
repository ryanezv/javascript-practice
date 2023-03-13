/*
En JavaScript las funciones son una de las características más importantes y poderosas.
> Una función es un bloque de código que se puede reutilizar en diferentes partes de un programa.
> Existen diferentes formas de declarar una función.
    > Funcion declarativa o tradicional
    > Función IIFE (Immediately Invoked Function Expression): Es una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima y no se puede reutilizar.
    > Función expresión: Es una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y reutilizada.
    > Función Arrow: Es una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.
 */


// Function declaration
function sum(a, b){
    return a+b;
}

let result = sum (2, 3);
console.log(result);

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Im immediately Invoked Function Expression");
})();

// Function expression
let helloWorld = function() {
    console.log("Hello world - function");
};
// invocation function expression
helloWorld();

// arrow function
let multiply = (x, y) => console.log("result:"+ x * y);
multiply(3, 4);






