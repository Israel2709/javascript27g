let token = localStorage.getItem("token");
console.log(token);

!token
  ? window.open("./views/login.html", "_self")
  : window.open("./views/catalog.html", "_self");
