/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  const elemento = document.querySelector("#my-name");
  let contenido = elemento.textContent;
  contenido += ` luis`;
  elemento.textContent = contenido;
}

/********************************
 * QUESTION 2.
 *******************************/
var listItems = [
  "Settings",
  "Customer Support",
  "On Demand",
  "Search",
  "Widgets",
];

function executeQ2() {
  const ol = document.querySelector("#q2-list");
  const fragment = document.createDocumentFragment();

  listItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    fragment.appendChild(liElement);
  });
  ol.appendChild(fragment);
}

/********************************
 * QUESTION 3.
 *******************************/
function Person() {
  var name = "";

  this.setName = function (n) {
    name = n;
  };

  this.getName = function () {
    return name;
  };
}

function executeQ3() {
  const persona1 = new Person();
  persona1.setName("Scott");

  const persona2 = new Person();
  persona2.setName("Matt");

  const nombres = [persona1.getName(), persona2.getName()];

  const ol = document.querySelector("#q3-list");
  const fragment = document.createDocumentFragment();

  nombres.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    fragment.appendChild(liElement);
  });
  ol.appendChild(fragment);
}

/********************************
 * QUESTION 4.
 *******************************/
// Answer goes here
function executeQ4() {
  fetch("http://localhost:8000/api/usersCount")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error en la respuesta del servidor.");
    })
    .then((data) => {
      const elemento = document.querySelector("#users-count");
      elemento.textContent = data;
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
    });

  // agregar usuario
  const form = document.getElementById("my-form");

  form.addEventListener("submit", (e) => {
    const formData = new FormData(form);

    fetch("http://localhost:8000/api/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          return response.json();
        } else {
          throw new Error("Error al enviar los datos");
        }
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("correccion");
      });
  });
  form.reset();
}

// Agregar un evento de escucha para el envío del formulario
/********************************
 * QUESTION 5.
 *******************************/
function executeQ5() {
  fetch("http://localhost:8000/api/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error en la respuesta del servidor.");
    })
    .then((data) => {
      let nombres = data.map((objeto) => objeto.name);
      const ol = document.querySelector("#q5-list");
      const fragment = document.createDocumentFragment();

      nombres.forEach((item) => {
        const liElement = document.createElement("li");
        liElement.textContent = item;
        fragment.appendChild(liElement);
      });
      ol.appendChild(fragment);
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
    });
}
executeQ5();


function executeQ6() {
    const blocks = document.querySelector('.q6-wrapper');
}

executeQ6();
