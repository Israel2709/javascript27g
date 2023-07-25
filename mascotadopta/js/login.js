let user = {};

/*
{
    nombre:"",
    correo:"",
    usuario:"",
    contrasenia:""
}
*/

let textFields = document.querySelectorAll("#login-form  input");

console.log(textFields);

textFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    console.log(property, value);
    user[property] = value;
  });
});

const saveUser = async (userObject) => {
  let response = await fetch(
    "https://javascript27g-default-rtdb.firebaseio.com/mascotadopta/users/.json",
    {
      method: "POST",
      body: JSON.stringify(userObject),
    }
  );

  let data = await response.json();
  console.log(data);
  return data;
};

document.getElementById("login-button").addEventListener("click", async () => {
  let response = await saveUser(user);
  console.log(response);
  if (response.name) {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    window.open("../views/catalog.html", "_self");
  }
});

/*document.getElementById("login-form").addEventListener("keyup", (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
});*/
