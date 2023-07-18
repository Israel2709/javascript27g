let labels = {
  es: [
    {
      id: "heading1",
      label: "Hola koders!",
    },
    {
      id: "heading2",
      label: "Bienvenidos a nuestro módulo de JavaScript",
    },
    {
      id: "first-paragraph",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam dolorem porro nam non id similique obcaecati atque dolores veniam!",
    },
  ],
  en: [
    {
      id: "heading1",
      label: "Hello Koders!",
    },
    {
      id: "heading2",
      label: "Welcome to our JavaScript Module!!",
    },
    {
      id: "first-paragraph",
      label: "Some simulated text in english",
    },
  ],
};

const changeLanguage = (language) => {
  let selectedLabels = labels[language /*es||en*/];
  console.log(selectedLabels);
  selectedLabels.forEach((label) => {
    let element = document.getElementById(label.id);
    element.innerText = label.label;
  });
};

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
    crear una funcion que sirva para crear un único elemento de lista

    crear una función que itere en los elementos del array y crear elementos de lista por cada elemnto del array
*/

/*
crear una funcion que sirva para crear un único elemento de lista
(recibe un objeto que represente un koder)

Extaer name y lastname

crear el fullname (name + lastname)

crear el elemetno con el tag li

inyectar el nombre completo en el li

retornar el li
*/

const createListItem = (koderObject) => {
  let { name, lastname } = koderObject;
  let fullName = `${name} ${lastname}`;
  let listItem = document.createElement("li");
  listItem.innerText = fullName;
  return listItem;
};

/*
    necesitamos una fucnión que sirva para crear todos los koders en la pantalla
    esta función recibe como argumento el array de koders
    seleccionamos el elemento de dom en el que insertaremos los koders
    iteramos en el array y por cada objeto que representa un koder
    ejecutamos la función createListItem para crear un nuevo elemento de lista usando cada koder
    insertamos el li obtenido en la lista de html
*/

const printAllKoders = (kodersList) => {
  let list = document.getElementById("koders-list");
  kodersList.forEach((koder) => {
    let koderElement = createListItem(koder);
    list.appendChild(koderElement);
  });
};

/*
    ya que este impresa la lista, hacer que los li pares tengan un color de fondo, y los nones otro color diferente
*/
/*
    Crear una nueva lista que contenga el nombre completo del koder y su promedio
    si el promedio del koder es menor que 9.5, ese texto (el del promedio) debe ser color amarillo
    si es mayor o igual, debe ser verde
*/
