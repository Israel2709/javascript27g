// let a = 7;
// let b = 5;
// let result = a + b;

// let c = 2;
// let d = 6;
// let result2 = c + d;

// let e = 5;
// let f = 16;
// let result3 = e + f;

function sumarDosNumeros(a, b) {
  /*definición de una función*/
  //   let a=2;
  //   let b=5;
  let result = a + b;

  return result;
}

let resultadoSuma1 = sumarDosNumeros(2, 5); /*7*/

console.log(resultadoSuma1);

/*
    1.- Crear funciones que hagan lo siguiente:
        sumar dos números
        restar dos números
        multiplicar dos números
        dividir dos números
    
    2.- Crear una función que me devuelva el nombre completo de una persona

    3.- Crear una función que reciba el nombre, color, tamaño, peso y raza de un perro, y me devuelva un objeto que represente a ese perro 
*/

function createDog(name, breed, color) {
  let ownerName = "Israel";
  let ownerAddress = "san simón";
  let dog = { name, breed, color, ownerName, ownerAddress };
  return dog;
}

let perroDePrueba = createDog("Otto", "puddle", "blanco");
console.log(perroDePrueba);

/*
    1.- crear una función que reciba un nombre y haga lo siguiente:
        si el nombre tiene más de 5 letras, imprimir en pantalla "el nombre es largo"
        si no, imprimir "el nombre es corto"

    2.- Crear una función que reciba 2 números y me devuelva un texto con base en las condiciones siguientes:
        si el resulta es par, devovler "tu resultado es par"
        si es non, devolver "el resultado es non"
    3.- Crear una función que reciba el nombre y apellidos de una persona
        y me devuelva la cantidad de caracteres de el nombre completo 
*/
