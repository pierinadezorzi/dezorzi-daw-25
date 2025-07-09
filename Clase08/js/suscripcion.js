document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("suscripcion-form");
    const saludo = document.getElementById("saludo");
  
    const modal = document.getElementById("modal");
    const cerrarModalBtn = document.getElementById("cerrar-modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalMensaje = document.getElementById("modal-mensaje");
  
    const inputs = {
      nombre: document.getElementById("nombre"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      repassword: document.getElementById("repassword"),
      edad: document.getElementById("edad"),
      telefono: document.getElementById("telefono"),
      direccion: document.getElementById("direccion"),
      ciudad: document.getElementById("ciudad"),
      cp: document.getElementById("cp"),
      dni: document.getElementById("dni"),
    };
  
    function mostrarError(input, mensaje) {
      document.getElementById("error-" + input.id).textContent = mensaje;
    }
  
    function borrarError(input) {
      document.getElementById("error-" + input.id).textContent = "";
    }
  
    function validarNombre(valor) {
      if (valor.length <= 6) return "Debe tener más de 6 letras.";
      if (valor.trim().indexOf(" ") === -1) return "Debe contener al menos un espacio.";
      return "";
    }
  
    function validarEmail(valor) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(valor) ? "" : "Formato de email inválido.";
    }
  
    function validarPassword(valor) {
      if (valor.length < 8) return "Debe tener al menos 8 caracteres.";
      if (!/[a-zA-Z]/.test(valor) || !/[0-9]/.test(valor)) return "Debe contener letras y números.";
      return "";
    }
  
    function validarRepassword(valor) {
      if (valor !== inputs.password.value) return "Las contraseñas no coinciden.";
      return "";
    }
  
    function validarEdad(valor) {
      const num = Number(valor);
      if (!Number.isInteger(num) || num < 18) return "Debe ser un número entero mayor o igual a 18.";
      return "";
    }
  
    function validarTelefono(valor) {
      if (!/^\d{7,}$/.test(valor)) return "Debe ser un número de al menos 7 dígitos, sin espacios ni símbolos.";
      return "";
    }
  
    function validarDireccion(valor) {
      if (valor.length < 5) return "Debe tener al menos 5 caracteres.";
      if (!/\w+\s+\w+/.test(valor)) return "Debe contener letras, números y al menos un espacio.";
      return "";
    }
  
    function validarCiudad(valor) {
      return valor.length >= 3 ? "" : "Debe tener al menos 3 caracteres.";
    }
  
    function validarCp(valor) {
      return valor.length >= 3 ? "" : "Debe tener al menos 3 caracteres.";
    }
  
    function validarDni(valor) {
      return /^\d{7,8}$/.test(valor) ? "" : "Debe tener 7 u 8 dígitos.";
    }
  
    const validaciones = {
      nombre: validarNombre,
      email: validarEmail,
      password: validarPassword,
      repassword: validarRepassword,
      edad: validarEdad,
      telefono: validarTelefono,
      direccion: validarDireccion,
      ciudad: validarCiudad,
      cp: validarCp,
      dni: validarDni,
    };
  
    Object.keys(inputs).forEach(function(campo) {
      inputs[campo].addEventListener("blur", function(e) {
        const error = validaciones[campo](e.target.value.trim());
        if (error) {
          mostrarError(e.target, error);
        } else {
          borrarError(e.target);
        }
      });
  
      inputs[campo].addEventListener("focus", function(e) {
        borrarError(e.target);
      });
    });
  
    function actualizarSaludo() {
      const valor = inputs.nombre.value.trim();
      saludo.textContent = valor ? "HOLA " + valor.toUpperCase() : "HOLA";
    }
  
    inputs.nombre.addEventListener("keydown", actualizarSaludo);
    inputs.nombre.addEventListener("focus", actualizarSaludo);
  
    // Funciones para mostrar y ocultar modal
    function abrirModal(titulo, mensaje) {
      modalTitulo.textContent = titulo;
      modalMensaje.textContent = mensaje;
      modal.classList.remove("oculto");
    }
  
    function cerrarModal() {
      modal.classList.add("oculto");
    }
  
    cerrarModalBtn.addEventListener("click", cerrarModal);
    modal.addEventListener("click", function(e) {
      if (e.target === modal) cerrarModal();
    });
  
    // Cargar datos guardados en localStorage al cargar la página
    function cargarDatosLocalStorage() {
      const datosGuardados = localStorage.getItem("datosSuscripcion");
      if (datosGuardados) {
        try {
          const datos = JSON.parse(datosGuardados);
          Object.keys(datos).forEach((key) => {
            if (inputs[key]) {
              inputs[key].value = datos[key];
            }
          });
          actualizarSaludo();
        } catch (e) {
          console.warn("Error leyendo datos guardados:", e);
        }
      }
    }
  
    cargarDatosLocalStorage();
  
    // Envío y validación
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let todoBien = true;
      let errores = [];
  
      Object.keys(inputs).forEach(function(campo) {
        const valor = inputs[campo].value.trim();
        const error = validaciones[campo](valor);
        if (error) {
          mostrarError(inputs[campo], error);
          todoBien = false;
          errores.push(inputs[campo].previousElementSibling.textContent + ": " + error);
        } else {
          borrarError(inputs[campo]);
        }
      });
  
      if (!todoBien) {
        abrirModal("Errores en el formulario", errores.join("\n"));
        return;
      }
  
      // Armar URL con query params para método GET
      const baseURL = "https://jsonplaceholder.typicode.com/posts"; // endpoint ejemplo
      const params = new URLSearchParams();
      Object.keys(inputs).forEach(key => {
        params.append(key, inputs[key].value.trim());
      });
      const url = baseURL + "?" + params.toString();
  
      fetch(url, {
        method: "GET",
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
          }
          return response.json();
        })
        .then(data => {
          abrirModal("Suscripción exitosa", JSON.stringify(data, null, 2));
          localStorage.setItem("datosSuscripcion", JSON.stringify(data));
        })
        .catch(error => {
          abrirModal("Error en la suscripción", error.message);
        });
    });
  });
  