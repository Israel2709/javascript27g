function myFunction(arg1, arg2) {
  let result = arg1 + arg2;
  return result; /*return explícito*/
}

const myArrowFunction = (arg1, arg2) => arg1 + arg2;

/*
const getEvens = (number) => {
    let result = number % 2 === 0 ? true : false
    return result
}*/

const getEvens = (number) => number % 2 === 0;

console.log(getEvens(17));
console.log(getEvens(10));
let conventionalResult = myFunction(10, 20);
console.log(conventionalResult);

let arrowResult = myArrowFunction(10, 20);
console.log(arrowResult);

let user = {
  name: "Israel",
  lastName: "Salinas Martínez",
  greeting: (personname) =>
    `Hola ${personname}, soy ${user.name} ${user.lastName}`,
};

let test1 = user.name;
console.log(test1);
let test2 = user.greeting("Nefer");
console.log(test2);

/*
    Necesito mostrar las iniciales del nombre completo de una persona
    "Isaac Salinas Martínez"
    "I. S. M. "
*/

//string.split(separator);

let miNombreCompleto = "Israel Salinas Martínez";

console.log(miNombreCompleto.split("s"));
console.log("Israel".charAt(0));
console.log("Israel".charAt(0).concat(". "));

console.log(miNombreCompleto.indexOf(" ")); /*prmer espacio en el nombre*/
console.log(miNombreCompleto.charAt(miNombreCompleto.indexOf(" ") + 1));
console.log(miNombreCompleto.indexOf(" ", 7)); /*segundo espacio en el nombre*/

console.log(miNombreCompleto[0]);
let names = ["israel", "Salinas"];
console.log(names[0]);

/*
    1.- Necesitamos saber de cualquier string, el caracter que se encuentre en cualquier posición que indiquemos.
    si la posición excede la cantidad de caracteres, indicar que no es posible ejecutar el ejercicio
    2.- Necesitamos saber si un texto cualquiera tiene dentro otro string
        "Israel" "ra" - si lo incluye
        "Israel" "ac" - no lo incluye
    3.- Necesito saber la cantidad de palabras de un texto cualquiera
    4.- Necesito reemplazar todas las coincidencias de una palabra dentro de un texto, con otro texto
        "mi perro es gris y es un latoso" "es" "no es"
             "mi perro no es gris y no es un latoso"
*/

// Israel, 2 => r
// Israel, 10 => el número excede la cantidad de caracteres del string

console.log("israel"[10]);

// const checkCharAtPosition = (str, position) =>
//   str.charAt(position) === ""
//     ? "el número excede la cantidad de caracteres del string"
//     : str.charAt(position);
const checkCharAtPosition = (str, position) => {
  return str[position]
    ? str[position]
    : "el número excede la cantidad de caracteres del string";
};

//false || / || null || 0 || "" (falsy)

//true   truthy => "israel"

let testPosition = checkCharAtPosition("Israel", 10);
console.log(testPosition);

/* recibir dos números, y entregar el resultado de la resta entre ambos (a - b), si los números son iguales, entregar el mensaje "los números son iguales"*/
