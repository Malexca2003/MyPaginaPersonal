function validarFormulario() {
    // Obtener los valores de los campos de entrada
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Verificar si los campos están vacíos
    if (usuario.trim() === "") {
        alert("Por favor, ingresa un nombre de usuario.");
        return false;
    }

    if (contraseña.trim() === "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    // Si todo está bien, enviar el formulario
    return true;
}

function validarRegistro() {
    // Obtener los valores de los campos de entrada
    var usuario = document.getElementById("nuevoUsuario").value;
    var contraseña = document.getElementById("nuevaContraseña").value;
    var confirmarContraseña = document.getElementById("confirmarContraseña").value;

    // Verificar si el nombre de usuario está vacío
    if (usuario.trim() === "") {
        alert("Por favor, ingresa un nombre de usuario.");
        return false;
    }

    // Verificar la longitud mínima del nombre de usuario
    if (usuario.length < 5) {
        alert("El nombre de usuario debe tener al menos 5 caracteres.");
        return false;
    }

    // Verificar si la contraseña está vacía
    if (contraseña.trim() === "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    // Verificar la longitud mínima de la contraseña
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }

    // Verificar si la confirmación de contraseña coincide
    if (contraseña !== confirmarContraseña) {
        alert("La confirmación de contraseña no coincide.");
        return false;
    }

    // Si todo está bien, registrar la cuenta
    alert("¡Cuenta registrada exitosamente!");
    return true;
}

// Registros predefinidos de usuarios
const usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      email: 'juan@email.com',
      contraseña: 'contraseña123'
    },
    {
      id: 2,
      nombre: 'Maria',
      email: 'maria@email.com',
      contraseña: 'contraseña456'
    },
    {
      id: 3,
      nombre: 'Carlos',
      email: 'carlos@email.com',
      contraseña: 'contraseña789'
    }
  ];
  
  // Registros predefinidos de pedidos
  const pedidos = [
    {
      id: 1,
      usuarioId: 1,
      producto: 'Laptop',
      cantidad: 1,
      total: 1200
    },
    {
      id: 2,
      usuarioId: 2,
      producto: 'PC Gamer',
      cantidad: 2,
      total: 1500
    },
    {
      id: 3,
      usuarioId: 3,
      producto: 'Laptop Gamer',
      cantidad: 1,
      total: 800
    }
  ];
  
  // Registros predefinidos de ventas
  const ventas = [
    {
      id: 1,
      producto: 'Laptop',
      cantidad: 1,
      total: 1200,
      fecha: '2024-04-10'
    },
    {
      id: 2,
      producto: 'PC Gamer',
      cantidad: 2,
      total: 1500,
      fecha: '2024-04-09'
    },
    {
      id: 3,
      producto: 'Tablet',
      cantidad: 1,
      total: 800,
      fecha: '2024-04-08'
    }
  ];
  
  // Interpolación para mostrar información de los registros predefinidos
  usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
  });
  
  pedidos.forEach(pedido => {
    console.log(`ID: ${pedido.id}, Usuario ID: ${pedido.usuarioId}, Producto: ${pedido.producto}, Cantidad: ${pedido.cantidad}, Total: ${pedido.total}`);
  });
  
  ventas.forEach(venta => {
    console.log(`ID: ${venta.id}, Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Total: ${venta.total}, Fecha: ${venta.fecha}`);
  });


  //Función para validar el formulario de la sección de la pagina de "Envianos tus comentarios!!!"
  function validarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Expresión regular para validar el formato de correo electrónico
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (correo.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    }

    if (mensaje.trim() === '') {
        alert('Por favor, ingresa tu mensaje.');
        return false;
    }

    // Validar el formato de correo electrónico
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Si todo está correcto, enviar el formulario
    alert('Formulario enviado con éxito.');
    return true;
}

window.addEventListener('load', function() {
  const elements = document.querySelectorAll('body *');
  elements.forEach(element => {
      element.style.opacity = 1;
  });
});

function searchProducts() {
  // Obtener el valor del campo de búsqueda
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Obtener todos los elementos de producto
  var products = document.getElementsByClassName("product");

  // Iterar sobre los elementos de producto y ocultar los que no coincidan con el término de búsqueda
  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var productName = product.getElementsByTagName("h3")[0].innerText.toLowerCase();

      if (productName.includes(searchTerm)) {
          product.style.display = "block"; // Mostrar el producto si coincide con la búsqueda
      } else {
          product.style.display = "none"; // Ocultar el producto si no coincide con la búsqueda
      }
  }
}

//Funcion para redirreccionar a secciones de la pagina
function redirectToHome() {
  window.location.href = "Conocenos.html"; //Aqui redirecciona a la pagina de inicio
}

function redirectToContact() {
  window.location.href = "Contacto.html"; //Aqui redirecciona a la pagina de Contacto de la tienda
}

