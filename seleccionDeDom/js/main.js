/*Metodos de selección de dom*/

/*
document.getElementById(elementId)
permite seleccionar aquel elemento de mi DOM cuyo Id sea igual al id proporcionado en el método
Devuelve un único elemento de dom
*/

const changeTitle = (newTitle) => {
  let heading = document.getElementById("main-heading");
  heading.innerText = newTitle;
};

/*
    document.getElementsByClassName(classname)
    Permite seleccionar todos los elementos que cuenten con la clase indicada en el método
    Devuelve un objeto del tipo HTMLCollection
*/

const getAllListItems = () => {
  let listItems = document.getElementsByClassName("list-group-item");
  console.log(listItems);
  for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].innerText);
  }
};

/*
    document.getElementsByTagName(tagname)
    Permite seleccionar todos los elementos cuyo tagname coincida con el tagname proporcionado
    Devuelve un objeto del tipo HTMLCollection
*/

const getAllInputs = () => {
  let inputs = document.getElementsByTagName("li");
  console.log(inputs);
};

/*
    document.querySelector(cssSelector)
    permite seleccionar el primer elemento que cumpla con el selector de css provisto como argumento
    devuelve un único elemento de dom
*/

/*
document.querySelectorAll(cssSelector)
    permite seleccionar todos los elementos que cumplan con el selector de css provisto como argumento
    devuelve una NodeList
*/
