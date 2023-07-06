const namesArray = ["Azael", "Manuel", "Nefer", "Lupita"];
const songsArray = ["Lithium", "Aneurysm", "Polly"];

const printAllElementsInArray = (arr) => {
  for (let i = 2; i < arr.length /*4*/; i++) {
    let currentItem = arr[i];
    console.log(currentItem);
  }
};

printAllElementsInArray(namesArray);

const numbers = [12, 26, 15, 78, 26, 47];
const countries = ["México", "Canadá", "Brasil", "España"];
const people = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Axelle",
      last: "Fleury",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Melati",
      last: "Oort",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Inés",
      last: "Vargas",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Marcus",
      last: "Garrett",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Vasilina",
      last: "Motrichko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Leuntje",
      last: "Van Harmelen",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Tristan",
      last: "Gauthier",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Marianne",
      last: "Charles",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Maksim",
      last: "Bunechko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Coline",
      last: "Mathieu",
    },
    nat: "FR",
  },
];

/*
    1.- teniendo en cuenta el array numbers, necesito saber el valor de la suma total de cada número en el array
    2.- teniendo en cuenta el array numbers, necesito obtener un nuevo array que incluya únicamente los números pares *
    3.- necesito obtener un nuevo array que incluya únicamente los números nones *

    4.- tomando en cuenta el array countries, necesito obtener un string que este formado con la primer letra de cada país incluido en el array

    ["mexico", "Alemania"] => MA
    5.- necesito obtener un array que contenga los mismos nombres de cada país, pero escritos en mayúsculas

    6.- tomando en cuenta el array people, necesito obtener un nuevo array que contenga los nombres completos de cada persona

    7.- necesito poder determinar una nacionalidad específica y obtener un array que contenga únicamente aquellas personas que tengan la nacionalidad indicada
      FR => [{nat === FR}]
      si uso alguna nacionalidad que no coincida con ninguna persona, devolver un string que diga "no hay personas con esta nacionalidad"
*/
