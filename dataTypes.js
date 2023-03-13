/* 
En JavaScript

> Numbers: Los números son un tipo de dato que representa valores numéricos. En JavaScript, no existe un tipo de dato específico para representar números enteros o números con decimales, todos los números son tratados de la misma manera.
> Strings: Las cadenas de texto (strings) son un tipo de dato que representa una secuencia de caracteres. En JavaScript, podemos crear strings utilizando comillas simples o comillas dobles.
> Objects: Los objetos son estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor. Estos pares son conocidos como propiedades del objeto.
> Booleans: Los valores booleanos (boolean) son un tipo de dato que representa un valor verdadero o falso
*/

console.log("============");
// Numbers
let edad = 30;
let salario = 1500.50;
const PI = 3.1416; // static value, not change

const bigNumner = 1e6; // 1 million
const smallNumber = 1e-6; // 0.000001 decimals

console.log(PI);
console.log(smallNumber);

console.log("============");
//Strings
const firstName = 'Ricardo'; // simple quotes
const lastName = "Yañez"; // double quotes
const fullName = firstName +" "+ lastName;

console.log(firstName);
console.log("Nombre completo: "+  fullName);

// using notation > literal template
console.log(`Nombre completo: ${firstName} ${lastName} `);

// manipulate Strings
console.log(fullName.length);
console.log(fullName.toUpperCase()); // RICARDO
console.log(fullName.toLowerCase()); // ricardo
console.log(fullName.substring(2, 7)); // cardo
console.log(fullName.replace("a", "u")); //  Ricurdo Yañez

console.log("============");
// Objects
const person = {
    name: "Ricardo",
    lastName: "Yañez",
    age: 30,
    email: "yanezv.ricardo@gmail.com",
    course: {
        name: "JavaScript Practices",
        classes: 30,
        duration: "2 hours"
    }
}
console.log(person); 
console.log(person.course.name); // JavaScript Practices
console.log(person["email"]); // yanezv.ricardo@gmail.com

console.log("============");
//Booleans
isTop = true;
isSmall = false;

// Need you know data type, use typeof
console.log(typeof "Hello");
console.log(typeof  isTop);
console.log(typeof {});
console.log(typeof []);
console.log(typeof true);