let token = localStorage.getItem("token");
console.log(token);

!token && window.open("../views/login.html", "_self");
