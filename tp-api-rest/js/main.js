const apiUrl = "https://rickandmortyapi.com/api/character";
const contenedor = document.getElementById("resultados");
const btnTodos = document.getElementById("btn-todos");
const btnFiltrar = document.getElementById("btn-filtrar");

function mostrarPersonajes(lista) {
  contenedor.innerHTML = "";
  lista.forEach(personaje => {
    const div = document.createElement("div");
    div.className = "personaje";
    div.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p>${personaje.species}</p>
      <p>${personaje.status}</p>
    `;
    contenedor.appendChild(div);
  });
}

function mostrarError(mensaje) {
  contenedor.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}

function obtenerTodos() {
  fetch(apiUrl)
    .then(res => {
      if (!res.ok) throw new Error("Error al obtener personajes");
      return res.json();
    })
    .then(data => {
      mostrarPersonajes(data.results);
    })
    .catch(error => {
      mostrarError(error.message);
    });
}

function obtenerConFiltros() {
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const species = document.getElementById("species").value;
  const type = document.getElementById("type").value;
  const gender = document.getElementById("gender").value;

  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (status) params.append("status", status);
  if (species) params.append("species", species);
  if (type) params.append("type", type);
  if (gender) params.append("gender", gender);

  fetch(`${apiUrl}/?${params.toString()}`)
    .then(res => {
      if (!res.ok) throw new Error("No se encontraron personajes con esos filtros");
      return res.json();
    })
    .then(data => {
      mostrarPersonajes(data.results);
    })
    .catch(error => {
      mostrarError(error.message);
    });
}

btnTodos.addEventListener("click", obtenerTodos);
btnFiltrar.addEventListener("click", obtenerConFiltros);
