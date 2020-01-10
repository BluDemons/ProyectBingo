//POST DATA IN DATABASE
const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

postDataPersona = () => {
  let tabla = "persona";
  let persona_nombre = document.getElementById("persona_nombre").value;

  let data = `{
    "tabla": "${tabla}", 
    "datos":
      {
        "persona_nombre": "${persona_nombre}",
        "tipo_persona": 2,
      }
   }`;

  http.open("POST", API_URL, true);
  http.setRequestHeader("Content-Type", "application/json");

  if (persona_nombre == "") {
    alert("Complete todos los datos para continuar...");
  } else {
    http.send(data);
    alert("Se ha registrado correctamente");
    window.location.assign("./login.html");
  }
};
