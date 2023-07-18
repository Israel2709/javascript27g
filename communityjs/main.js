const printSomething = () => {
  console.log("something");
};

printSomething();

/*crear una función que devuelva el resultado del producto de 2 números */
/*const productOfTwoNumbers = (firstNumber, secondNumber) => {
  let result = firstNumber * secondNumber;
  return result;
};*/

const productOfTwoNumbers = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;

const koders = [
  {
    /*item*/ name: "Jonhatan",
    lastname: "Sanabria",
    scores: {
      html: 10,
      css: 9,
      js: 7,
    },
    generation: 27,
  },
  {
    name: "Naomi",
    lastname: "Lopez",
    scores: {
      html: 10,
      css: 10,
      js: 10,
    },
    generation: 9,
  },
  {
    name: "Rurick",
    lastname: "Maqueo",
    scores: {
      html: 8,
      css: 9,
      js: 9,
    },
    generation: 4,
  },
  {
    name: "Brenda",
    lastname: "González",
    scores: {
      html: 8,
      css: 9,
      js: 10,
    },
    generation: 4,
  },
  {
    name: "Verónica",
    lastname: "Corona",
    scores: {
      html: 8,
      css: 8,
      js: 10,
    },
    generation: 10,
  },
  {
    name: "Karen",
    lastname: "Corona",
    scores: {
      html: 9,
      css: 9,
      js: 9,
    },
    generation: 10,
  },
];

/*
    Imprimir en pantalla el nombre completo de cada koder
    1.- Tomar objeto por objeto cada uno de los objetos de el array de koders
    2.- De cada objeto tomar el nombre y el apellido y escribirlos en algún lugar (nombre completo)
    3.- imprimir en pantalla el nombre completo
*/

const printKodersNames = (kodersArray) => {
  kodersArray.forEach(
    (koder /*cada objeto del array que representa un koder*/) => {
      let { name, lastname } /*que quiero extraer*/ = koder; /*de quien*/
      let fullName = `${name} ${lastname}`;
      console.log(fullName);
      console.log("---");
    }
  );
};
console.log(koders);

printKodersNames(koders);

/*Necesito obtener una nueva lista que contenga los nombres completos de cada koder*/
/*
     1.- Tomar objeto por objeto cada uno de los objetos de el array de koders
    2.- De cada objeto tomar el nombre y el apellido y escribirlos en algún lugar (nombre completo)
    3.- construir un nuevo array
    4.- Agregar cada nombre completo al nuevo array
    5.- Retornar el nuevo array
*/

const createFullNameList = (kodersArray) => {
  let newList = kodersArray.map((koder) => {
    let { name, lastname } /*que quiero extraer*/ = koder; /*de quien*/
    let fullName = `${name} ${lastname}`;
    return fullName; /*name lastname*/
  });
  console.log(newList);
  return newList;
};

createFullNameList(koders);

/*Necesito una nueva lista con únicamente aquellos koders que tengan una calificación de 9 o más en js*/

/*
    1.- Tomar objeto por objeto cada uno de los objetos de el array de koders
        1.1 crear una lista para guardar los resultados
    2.- De cada objeto obtener la calificación de javascript
    3.- Evaluar si la calificación es mayor o igual que 9
        true => Agregar el objeto a la nueva lista
        false => descartamos al koder
    4.- devolver la nueva lista
    */

const filterByJsScore = (kodersArray) => {
  let result = kodersArray.filter((koder) => {
    return koder.scores.js >= 9;
  });
  console.log(result);
};

let filterResult = filterByJsScore(koders);
console.log(filterResult);
