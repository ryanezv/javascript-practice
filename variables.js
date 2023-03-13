
/* 
En JavaScript, existen 3 formas de declarar variables: var, let y const. 
> Las variables declaradas con var y let pueden cambiar su valor a lo largo del tiempo.
> Las variables declaradas con const son constantes y no pueden cambiar su valor una vez asignado.
*/

// Variables que pueden cambiar con el tiempo
var minute = 10
let hour = 20

// Constante que no pueden cambiar
const email = "yanezv.ricardo@gmail.com"

minute = 100;
hour = 200;

console.log(hour +" - "+ minute);
console.log(email);