const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

getDataLogin = () => {
  // let correo = document.getElementById("persona_email").value;
  // let contraseña = document.getElementById("persona_clave").value;
  let usuario = document.getElementById("persona_nombre");

  http.open("GET", API_URL + "?tabla=persona");

  http.responseType = "json";

  http.onload = () => {
    let datos = http.response.datos;
    let nombreUsuario;

    datos.forEach(element => {
      if (element.persona_nombre == usuario) {
        nombreUsuario = element.persona_nombre;
      }
    });

    if (usuario === nombreUsuario) {
      localStorage.setItem("persona_nombre", nombreUsuario);
      window.location.assign("./home.html");
    } else {
      Swal.fire("Porfavor, ingrese nombre de jugador");
    }
  };

  http.send();
};
